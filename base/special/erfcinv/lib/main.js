/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_81_0/boost/math/special_functions/detail/erf_inv.hpp}. This implementation follows the original, but has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

'use strict';

// MODULES //

var isnan = require( './../../../../base/assert/is-nan' );
var sqrt = require( './../../../../base/special/sqrt' );
var ln = require( './../../../../base/special/ln' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var rationalFcnR1 = require( './rational_p1q1.js' );
var rationalFcnR2 = require( './rational_p2q2.js' );
var rationalFcnR3 = require( './rational_p3q3.js' );
var rationalFcnR4 = require( './rational_p4q4.js' );
var rationalFcnR5 = require( './rational_p5q5.js' );


// VARIABLES //

var Y1 = 8.91314744949340820313e-2;
var Y2 = 2.249481201171875;
var Y3 = 8.07220458984375e-1;
var Y4 = 9.3995571136474609375e-1;
var Y5 = 9.8362827301025390625e-1;


// MAIN //

/**
* Evaluates the inverse complementary error function.
*
* Note that
*
* ```tex
* \operatorname{erfc^{-1}}(1-z) = \operatorname{erf^{-1}}(z)
* ```
*
* ## Method
*
* 1.  For \\(|x| \leq 0.5\\), we evaluate the inverse error function using the rational approximation
*
*     ```tex
*     \operatorname{erf^{-1}}(x) = x(x+10)(\mathrm{Y} + \operatorname{R}(x))
*     ```
*
*     where \\(Y\\) is a constant and \\(\operatorname{R}(x)\\) is optimized for a low absolute error compared to \\(|Y|\\).
*
*     <!-- <note> -->
*
*     Max error \\(2.001849\mbox{e-}18\\). Maximum deviation found (error term at infinite precision) \\(8.030\mbox{e-}21\\).
*
*     <!-- </note> -->
*
* 2.  For \\(0.5 > 1-|x| \geq 0\\), we evaluate the inverse error function using the rational approximation
*
*     ```tex
*     \operatorname{erf^{-1}} = \frac{\sqrt{-2 \cdot \ln(1-x)}}{\mathrm{Y} + \operatorname{R}(1-x)}
*     ```
*
*     where \\(Y\\) is a constant, and \\(\operatorname{R}(q)\\) is optimized for a low absolute error compared to \\(Y\\).
*
*     <!-- <note> -->
*
*     Max error \\(7.403372\mbox{e-}17\\). Maximum deviation found (error term at infinite precision) \\(4.811\mbox{e-}20\\).
*
*     <!-- </note> -->
*
* 3.  For \\(1-|x| < 0.25\\), we have a series of rational approximations all of the general form
*
*     ```tex
*     p = \sqrt{-\ln(1-x)}
*     ```
*
*     Accordingly, the result is given by
*
*     ```tex
*     \operatorname{erf^{-1}}(x) = p(\mathrm{Y} + \operatorname{R}(p-B))
*     ```
*
*     where \\(Y\\) is a constant, \\(B\\) is the lowest value of \\(p\\) for which the approximation is valid, and \\(\operatorname{R}(x-B)\\) is optimized for a low absolute error compared to \\(Y\\).
*
*     <!-- <note> -->
*
*     Almost all code will only go through the first or maybe second approximation.  After that we are dealing with very small input values.
*
*     -   If \\(p < 3\\), max error \\(1.089051\mbox{e-}20\\).
*     -   If \\(p < 6\\), max error \\(8.389174\mbox{e-}21\\).
*     -   If \\(p < 18\\), max error \\(1.481312\mbox{e-}19\\).
*     -   If \\(p < 44\\), max error \\(5.697761\mbox{e-}20\\).
*     -   If \\(p \geq 44\\), max error \\(1.279746\mbox{e-}20\\).
*
*     <!-- </note> -->
*
*     <!-- <note> -->
*
*     The Boost library can accommodate \\(80\\) and \\(128\\) bit long doubles. JavaScript only supports a \\(64\\) bit double (IEEE 754). Accordingly, the smallest \\(p\\) (in JavaScript at the time of this writing) is \\(\sqrt{-\ln(\sim5\mbox{e-}324)} = 27.284429111150214\\).
*
*     <!-- </note> -->
*
* @param {number} x - input value
* @returns {number} function value
*
* @example
* var y = erfcinv( 0.5 );
* // returns ~0.4769
*
* @example
* var y = erfcinv( 0.8 );
* // returns ~0.1791
*
* @example
* var y = erfcinv( 0.0 );
* // returns Infinity
*
* @example
* var y = erfcinv( 2.0 );
* // returns -Infinity
*
* @example
* var y = erfcinv( NaN );
* // returns NaN
*/
function erfcinv( x ) {
	var sign;
	var qs;
	var q;
	var g;
	var r;

	// Special case: NaN
	if ( isnan( x ) ) {
		return NaN;
	}
	// Special case: 0
	if ( x === 0.0 ) {
		return PINF;
	}
	// Special case: 2
	if ( x === 2.0 ) {
		return NINF;
	}
	// Special case: 1
	if ( x === 1.0 ) {
		return 0.0;
	}
	if ( x > 2.0 || x < 0.0 ) {
		return NaN;
	}
	// Argument reduction (reduce to interval [0,1]). If `x` is outside [0,1], we can take advantage of the complementary error function reflection formula: `erfc(-z) = 2 - erfc(z)`, by negating the result once finished.
	if ( x > 1.0 ) {
		sign = -1.0;
		q = 2.0 - x;
	} else {
		sign = 1.0;
		q = x;
	}
	x = 1.0 - q;

	// x = 1-q <= 0.5
	if ( x <= 0.5 ) {
		g = x * ( x + 10.0 );
		r = rationalFcnR1( x );
		return sign * ( (g*Y1) + (g*r) );
	}
	// q >= 0.25
	if ( q >= 0.25 ) {
		g = sqrt( -2.0 * ln(q) );
		q -= 0.25;
		r = rationalFcnR2( q );
		return sign * ( g / (Y2+r) );
	}
	q = sqrt( -ln( q ) );

	// q < 3
	if ( q < 3.0 ) {
		qs = q - 1.125;
		r = rationalFcnR3( qs );
		return sign * ( (Y3*q) + (r*q) );
	}
	// q < 6
	if ( q < 6.0 ) {
		qs = q - 3.0;
		r = rationalFcnR4( qs );
		return sign * ( (Y4*q) + (r*q) );
	}
	// q < 18
	qs = q - 6.0;
	r = rationalFcnR5( qs );
	return sign * ( (Y5*q) + (r*q) );
}


// EXPORTS //

module.exports = erfcinv;
