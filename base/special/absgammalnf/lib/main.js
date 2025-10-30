/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/e_lgammaf_r.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/

'use strict';

// MODULES //

var isnanf = require( './../../../../base/assert/is-nanf' );
var isInfinitef = require( './../../../../base/assert/is-infinitef' );
var absf = require( './../../../../base/special/absf' );
var lnf = require( './../../../../base/special/lnf' );
var truncf = require( './../../../../base/special/truncf' );
var sinpif = require( './../../../../base/special/sinpif' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var PI = require( '@stdlib/constants/float32/pi' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var polyvalA0 = require( './polyval_a0.js' );
var polyvalA1 = require( './polyval_a1.js' );
var polyvalR = require( './polyval_r.js' );
var polyvalS = require( './polyval_s.js' );
var polyvalT2 = require( './polyval_t2.js' );
var polyvalU = require( './polyval_u.js' );
var polyvalV = require( './polyval_v.js' );
var polyvalW = require( './polyval_w.js' );


// VARIABLES //

var ZERO = f32( 0.0 );
var HALF = f32( 0.5 );
var ONE = f32( 1.0 );
var TWO = f32( 2.0 );
var THREE = f32( 3.0 );
var FOUR = f32( 4.0 );
var FIVE = f32( 5.0 );
var SIX = f32( 6.0 );
var EIGHT = f32( 8.0 );
var T0C = f32( -2.94064460e-11 );        // 0xAE0154B7
var T1C = f32( -2.35939837e-08 );        // 0xB2CAABB8
var W0C = f32( 4.18938547e-01 );         // 0x3ED67F1D
var TWO23 = f32( 8388608.0 );            // 2**23
var TWO27 = f32( 134217728.0 );          // 2**27
var TINY = f32( 7.450580596923828e-9 );  // 2**-27
var YMIN = f32( 1.46163213e+00 );        // 0x3FBB16C3
var TF = f32( -1.21486291e-01 );         // 0xBDF8CDCE


// MAIN //

/**
* Evaluates the natural logarithm of the absolute value of the gamma function for a single-precision floating-point number.
*
* ## Method
*
* 1.  Argument reduction for \\(0 < x \leq 8\\). Since \\(\Gamma(1+s) = s \Gamma(s)\\), for \\(x \in \[0,8]\\), we may reduce \\(x\\) to a number in \\(\[1.5,2.5]\\) by
*
*     ```tex
*     \operatorname{lgamma}(1+s) = \ln(s) + \operatorname{lgamma}(s)
*     ```
*
*     For example,
*
*     ```tex
*     \begin{align*}
*     \operatorname{lgamma}(7.3) &= \ln(6.3) + \operatorname{lgamma}(6.3) \\
*     &= \ln(6.3 \cdot 5.3) + \operatorname{lgamma}(5.3) \\
*     &= \ln(6.3 \cdot 5.3 \cdot 4.3 \cdot 3.3 \cdot2.3) + \operatorname{lgamma}(2.3)
*     \end{align*}
*     ```
*
* 2.  Compute a polynomial approximation of \\(\mathrm{lgamma}\\) around its minimum (\\(\mathrm{ymin} = 1.46163213\\)) to maintain monotonicity. On the interval \\(\[\mathrm{ymin} - 0.24, \mathrm{ymin} + 0.28]\\) (i.e., \\(\[1.22163213,1.74163213]\\)), we let \\(z = x - \mathrm{ymin}\\) and use
*
*     ```tex
*     \operatorname{lgamma}(x) = -1.214862905358496078218 + z^2 \cdot \operatorname{poly}(z)
*     ```
*
*     where \\(\operatorname{poly}(z)\\) is a \\(7\\) degree polynomial.
*
* 3.  Compute a rational approximation in the primary interval \\(\[2,3]\\). Let \\( s = x - 2.0 \\). We can thus use the approximation
*
*     ```tex
*     \operatorname{lgamma}(x) = \frac{s}{2} + s\frac{\operatorname{P}(s)}{\operatorname{Q}(s)}
*     ```
*
*     with accuracy
*
*     ```tex
*     \biggl|\frac{\mathrm{P}}{\mathrm{Q}} - \biggr(\operatorname{lgamma}(x)-\frac{s}{2}\biggl)\biggl| < 2^{-35.0}
*     ```
*
*     The algorithms are based on the observation
*
*     ```tex
*     \operatorname{lgamma}(2+s) = s(1 - \gamma) + \frac{\zeta(2) - 1}{2} s^2 - \frac{\zeta(3) - 1}{3} s^3 + \ldots
*     ```
*
*     where \\(\zeta\\) is the zeta function and \\(\gamma = 0.5772156649...\\) is the Euler-Mascheroni constant, which is very close to \\(0.5\\).
*
* 4.  For \\(x \geq 8\\),
*
*     ```tex
*     \operatorname{lgamma}(x) \approx \biggl(x-\frac{1}{2}\biggr) \ln(x) - x + \frac{\ln(2\pi)}{2} + \frac{1}{12x} - \frac{1}{360x^3} + \ldots
*     ```
*
*     which can be expressed
*
*     ```tex
*     \operatorname{lgamma}(x) \approx \biggl(x-\frac{1}{2}\biggr)(\ln(x)-1)-\frac{\ln(2\pi)-1}{2} + \ldots
*     ```
*
*     Let \\(z = \frac{1}{x}\\). We can then use the approximation
*
*     ```tex
*     f(z) = \operatorname{lgamma}(x) - \biggl(x-\frac{1}{2}\biggr)(\ln(x)-1)
*     ```
*
*     by
*
*     ```tex
*     w = w_0 + w_1 z + w_2 z^3
*     ```
*
*     where
*
*     ```tex
*     |w - f(z)| < 2^{-29.6}
*     ```
*
* 5.  For negative \\(x\\), since
*
*     ```tex
*     -x \Gamma(-x) \Gamma(x) = \frac{\pi}{\sin(\pi x)}
*     ```
*
*     where \\(\Gamma\\) is the gamma function, we have
*
*     ```tex
*     \Gamma(x) = \frac{\pi}{\sin(\pi x)(-x)\Gamma(-x)}
*     ```
*
*     Since \\(\Gamma(-x)\\) is positive,
*
*     ```tex
*     \operatorname{sign}(\Gamma(x)) = \operatorname{sign}(\sin(\pi x))
*     ```
*
*     for \\(x < 0\\). Hence, for \\(x < 0\\),
*
*     ```tex
*     \mathrm{signgam} = \operatorname{sign}(\sin(\pi x))
*     ```
*
*     and
*
*     ```tex
*     \begin{align*}
*     \operatorname{lgamma}(x) &= \ln(|\Gamma(x)|) \\
*     &= \ln\biggl(\frac{\pi}{|x \sin(\pi x)|}\biggr) - \operatorname{lgamma}(-x)
*     \end{align*}
*     ```
*
*     <!-- <note> -->
*
*     Note that one should avoid computing \\(\pi (-x)\\) directly in the computation of \\(\sin(\pi (-x))\\).
*
*     <!-- </note> -->
*
* ## Special Cases
*
* ```tex
* \begin{align*}
* \operatorname{lgamma}(2+s) &\approx s (1-\gamma) & \mathrm{for\ tiny\ s} \\
* \operatorname{lgamma}(x) &\approx -\ln(x) & \mathrm{for\ tiny\ x} \\
* \operatorname{lgamma}(1) &= 0 & \\
* \operatorname{lgamma}(2) &= 0 & \\
* \operatorname{lgamma}(0) &= \infty & \\
* \operatorname{lgamma}(\infty) &= \infty & \\
* \operatorname{lgamma}(-\mathrm{integer}) &= \pm \infty
* \end{align*}
* ```
*
* @param {number} x - input value
* @returns {number} function value
*
* @example
* var v = absgammalnf( 1.0 );
* // returns 0.0
*
* @example
* var v = absgammalnf( 2.0 );
* // returns 0.0
*
* @example
* var v = absgammalnf( 4.0 );
* // returns ~1.792
*
* @example
* var v = absgammalnf( -0.5 );
* // returns ~1.266
*
* @example
* var v = absgammalnf( 0.5 );
* // returns ~0.572
*
* @example
* var v = absgammalnf( 0.0 );
* // returns Infinity
*
* @example
* var v = absgammalnf( NaN );
* // returns NaN
*/
function absgammalnf( x ) {
	var isNegative;
	var nadj;
	var flg;
	var p2;
	var p1;
	var p;
	var q;
	var t;
	var w;
	var y;
	var z;
	var r;

	x = f32( x );

	// Special cases: NaN, +-infinity
	if ( isnanf( x ) || isInfinitef( x ) ) {
		return x;
	}
	// Special case: 0
	if ( x === ZERO ) {
		return PINF;
	}
	if ( x < ZERO ) {
		isNegative = true;
		x = f32( -x );
	} else {
		isNegative = false;
	}
	// If |x| < 2**-27, return -ln(|x|)
	if ( x < TINY ) {
		return -lnf( x );
	}
	if ( isNegative ) {
		// If |x| >= 2**23, must be -integer
		if ( x >= TWO23 ) {
			return PINF;
		}
		t = sinpif( x );
		if ( t === ZERO ) {
			return PINF;
		}
		nadj = lnf( f32( PI / absf( f32( t*x ) ) ) );
	}
	// If x equals 1 or 2, return 0
	if ( x === ONE || x === TWO ) {
		return ZERO;
	}
	// If x < 2, use lgamma(x) = lgamma(x+1) - log(x)
	if ( x < TWO ) {
		if ( x <= f32( 0.9 ) ) {
			r = -lnf( x );

			// 0.7316 <= x <= 0.9
			if ( x >= f32( f32( YMIN-ONE ) + f32( 0.27 ) ) ) {
				y = f32( ONE - x );
				flg = 0;
			}
			// 0.2316 <= x < 0.7316
			else if ( x >= f32( f32( YMIN-ONE ) - f32( 0.23 ) ) ) {
				y = f32( x - f32( YMIN - ONE ) );
				flg = 1;
			}
			// 0 < x < 0.2316
			else {
				y = x;
				flg = 2;
			}
		} else {
			r = ZERO;

			// 1.7316 <= x < 2
			if ( x >= f32( YMIN + f32( 0.27 ) ) ) {
				y = f32( TWO - x );
				flg = 0;
			}
			// 1.2316 <= x < 1.7316
			else if ( x >= f32( YMIN - f32( 0.23 ) ) ) {
				y = f32( x - YMIN );
				flg = 1;
			}
			// 0.9 < x < 1.2316
			else {
				y = f32( x - ONE );
				flg = 2;
			}
		}
		switch ( flg ) { // eslint-disable-line default-case
		case 0:
			z = f32( y * y );
			p1 = polyvalA0( z );
			p2 = f32( z * polyvalA1( z ) );
			p = f32( f32( y*p1 ) + p2 );
			r = f32( r + f32( p - f32( HALF*y ) ) );
			break;
		case 1:
			z = f32( y * y );
			p = f32( f32( T0C + f32( y*T1C ) ) + f32( z * polyvalT2( y ) ) );
			r = f32( r + f32( TF + p ) );
			break;
		case 2:
			p1 = f32( y * polyvalU( y ) );
			p2 = f32( ONE + f32( y * polyvalV( y ) ) );
			r = f32( r + f32( f32( p1/p2 ) - f32( HALF*y ) ) );
			break;
		}
	}
	// 2 <= x < 8
	else if ( x < EIGHT ) {
		flg = truncf( x );
		y = f32( x - flg );
		p = f32( y * polyvalS( y ) );
		q = f32( ONE + f32( y * polyvalR( y ) ) );
		r = f32( f32( HALF*y ) + f32( p/q ) );
		z = ONE; // gammaln(1+s) = ln(s) + gammaln(s)
		switch ( flg ) { // eslint-disable-line default-case
		case 7:
			z = f32( z * f32( y + SIX ) );

			/* Falls through */
		case 6:
			z = f32( z * f32( y + FIVE ) );

			/* Falls through */
		case 5:
			z = f32( z * f32( y + FOUR ) );

			/* Falls through */
		case 4:
			z = f32( z * f32( y + THREE ) );

			/* Falls through */
		case 3:
			z = f32( z * f32( y + TWO ) );
			r = f32( r + lnf( z ) );
		}
	}
	// 8 <= x < 2**27
	else if ( x < TWO27 ) {
		t = lnf( x );
		z = f32( ONE / x );
		y = f32( z * z );
		w = f32( W0C + f32( z * polyvalW( y ) ) );
		r = f32( f32( f32( x-HALF ) * f32( t-ONE ) ) + w );
	}
	// 2**27 <= x <= Inf
	else {
		r = f32( x * f32( lnf(x)-ONE ) );
	}
	if ( isNegative ) {
		r = f32( nadj - r );
	}
	return r;
}


// EXPORTS //

module.exports = absgammalnf;
