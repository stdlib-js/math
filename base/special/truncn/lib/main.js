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
*/

'use strict';

// MODULES //

var isnan = require( './../../../../base/assert/is-nan' );
var isInfinite = require( './../../../../base/assert/is-infinite' );
var pow = require( './../../../../base/special/pow' );
var abs = require( './../../../../base/special/abs' );
var trunc = require( './../../../../base/special/trunc' );
var MAX_SAFE_INTEGER = require( '@stdlib/constants/float64/max-safe-integer' );
var MAX_EXP = require( '@stdlib/constants/float64/max-base10-exponent' );
var MIN_EXP = require( '@stdlib/constants/float64/min-base10-exponent' );
var MIN_EXP_SUBNORMAL = require( '@stdlib/constants/float64/min-base10-exponent-subnormal' );


// VARIABLES //

var MAX_INT = MAX_SAFE_INTEGER + 1;
var HUGE = 1.0e+308;


// MAIN //

/**
* Rounds a numeric value to the nearest multiple of \\(10^n\\) toward zero.
*
* ## Method
*
* 1.  If \\(|x| <= 2^{53}\\) and \\(|n| <= 308\\), we can use the formula
*
*     ```tex
*     \operatorname{truncn}(x,n) = \frac{\operatorname{trunc}(x \cdot 10^{-n})}{10^{-n}}
*     ```
*
*     which shifts the decimal to the nearest multiple of \\(10^n\\), performs a standard \\(\mathrm{trunc}\\) operation, and then shifts the decimal to its original position.
*
*     <!-- <note> -->
*
*     If \\(x \cdot 10^{-n}\\) overflows, \\(x\\) lacks a sufficient number of decimal digits to have any effect when rounding. Accordingly, the rounded value is \\(x\\).
*
*     <!-- </note> -->
*
*     <!-- <note> -->
*
*     Note that rescaling \\(x\\) can result in unexpected behavior due to the fact that most decimal fractions cannot be exactly represented as floating-point numbers. And further, rescaling can lead to slightly different fractional values, which, in turn, affects the result of \\(\mathrm{trunc}\\).
*
*     <!-- </note> -->
*
* 2.  If \\(n > 308\\), we recognize that the maximum absolute double-precision floating-point number is \\(\approx 1.8\mbox{e}308\\) and, thus, the result of rounding any possible finite number \\(x\\) to the nearest \\(10^n\\) is \\(0\\). To ensure consistent behavior with \\(\operatorname{trunc}(x)\\), the sign of \\(x\\) is preserved.
*
* 3.  If \\(n < -324\\), \\(n\\) exceeds the maximum number of possible decimal places (such as with subnormal numbers), and, thus, the rounded value is \\(x\\).
*
* 4.  If \\(x > 2^{53}\\), \\(x\\) is **always** an integer (i.e., \\(x\\) has no decimal digits). If \\(n <= 0\\), the rounded value is \\(x\\).
*
* 5.  If \\(n < -308\\), we let \\(m = n + 308\\) and modify the above formula to avoid overflow.
*
*     ```tex
*     \operatorname{truncn}(x,n) = \frac{\biggl(\frac{\operatorname{trunc}( (x \cdot 10^{308}) 10^{-m})}{10^{308}}\biggr)}{10^{-m}}
*     ```
*
*     If overflow occurs, the rounded value is \\(x\\).
*
* ## Special Cases
*
* ```tex
* \begin{align*}
* \operatorname{truncn}(\mathrm{NaN}, n) &= \mathrm{NaN} \\
* \operatorname{truncn}(x, \mathrm{NaN}) &= \mathrm{NaN} \\
* \operatorname{truncn}(x, \pm\infty) &= \mathrm{NaN} \\
* \operatorname{truncn}(\pm\infty, n) &= \pm\infty \\
* \operatorname{truncn}(\pm 0, n) &= \pm 0
* \end{align*}
* ```
*
* @param {number} x - input value
* @param {integer} n - integer power of `10`
* @returns {number} rounded value
*
* @example
* // Round a value to 4 decimal places:
* var v = truncn( 3.141592653589793, -4 );
* // returns 3.1415
*
* @example
* // If n = 0, `truncn` behaves like `trunc`:
* var v = truncn( 3.141592653589793, 0 );
* // returns 3.0
*
* @example
* // Round a value to the nearest thousand:
* var v = truncn( 12368.0, 3 );
* // returns 12000.0
*/
function truncn( x, n ) {
	var s;
	var y;
	if (
		isnan( x ) ||
		isnan( n ) ||
		isInfinite( n )
	) {
		return NaN;
	}
	if (
		// Handle infinities...
		isInfinite( x ) ||

		// Handle +-0...
		x === 0.0 ||

		// If `n` exceeds the maximum number of feasible decimal places (such as with subnormal numbers), nothing to truncate...
		n < MIN_EXP_SUBNORMAL ||

		// If `|x|` is large enough, no decimals to truncate...
		( abs( x ) > MAX_INT && n <= 0 )
	) {
		return x;
	}
	// The maximum absolute double is ~1.8e308. Accordingly, any possible positive finite `x` rounded to the nearest >=10^309 is zero.
	if ( n > MAX_EXP ) {
		return 0.0 * x; // preserve the sign (same behavior as trunc)
	}
	// If we overflow, return `x`, as the number of digits to the right of the decimal is too small (i.e., `x` is too large / lacks sufficient fractional precision) for there to be any effect when rounding...
	if ( n < MIN_EXP ) {
		s = pow( 10.0, -(n + MAX_EXP) );
		y = (x*HUGE) * s; // order of operation matters!
		if ( isInfinite( y ) ) {
			return x;
		}
		return ( trunc(y)/HUGE ) / s;
	}
	s = pow( 10.0, -n );
	y = x * s;
	if ( isInfinite( y ) ) {
		return x;
	}
	return trunc( y ) / s;
}


// EXPORTS //

module.exports = truncn;
