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
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006-7, 2013-14.
* (C) Copyright Paul A. Bristow 2007, 2013-14.
* (C) Copyright Nikhar Agrawal 2013-14.
* (C) Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

'use strict';

// MODULES //

var gammaln = require( './../../../../base/special/gammaln' );
var exp = require( './../../../../base/special/exp' );
var ln = require( './../../../../base/special/ln' );
var SQRT_TWO_PI = require( '@stdlib/constants/float64/sqrt-two-pi' );
var MAX_LN = require( '@stdlib/constants/float64/max-ln' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var FLOAT64_MAX_NTH_FACTORIAL = require( '@stdlib/constants/float64/max-nth-factorial' );
var igammaFinal = require( './igamma_final.js' );
var lowerGammaSeries = require( './lower_gamma_series.js' );
var upperGammaFraction = require( './upper_gamma_fraction.js' );


// MAIN //

/**
* Computes the incomplete gamma function.
*
* ## Notes
*
* -   The upper tail is calculated via the modified Lentz's method for computing continued fractions, the lower tail using a power expansion.
* -   When `a >= FLOAT64_MAX_NTH_FACTORIAL` and computing the non-normalized incomplete gamma, result is rather hard to compute unless we use logs. There are really two options a) if `x` is a long way from `a` in value then we can reliably use methods 2 and 4 below in logarithmic form and go straight to the result. Otherwise we let the regularized gamma take the strain (the result is unlikely to underflow in the central region anyway) and combine with `lgamma` in the hopes that we get a finite result.
*
* @param {NonNegativeNumber} x - function parameter
* @param {PositiveNumber} a - function parameter
* @param {boolean} [regularized=true] - boolean indicating if the function should evaluate the regularized or non-regularized incomplete gamma functions
* @param {boolean} [upper=false] - boolean indicating if the function should return the upper tail of the incomplete gamma function
* @returns {number} function value
*
* @example
* var y = gammainc( 6.0, 2.0 );
* // returns ~0.9826
*
* @example
* var y = gammainc( 1.0, 2.0, true, true );
* // returns ~0.7358
*
* @example
* var y = gammainc( 7.0, 5.0 );
* // returns ~0.8270
*
* @example
* var y = gammainc( 7.0, 5.0, false );
* // returns ~19.8482
*
* @example
* var y = gammainc( NaN, 2.0 );
* // returns NaN
*
* @example
* var y = gammainc( 6.0, NaN );
* // returns NaN
*/
function gammainc( x, a, regularized, upper ) {
	var normalized;
	var initValue;
	var invert;
	var result;

	if ( x < 0.0 || a <= 0.0 ) {
		return NaN;
	}
	normalized = ( regularized === void 0 ) ? true : regularized;
	invert = upper;
	if ( a >= FLOAT64_MAX_NTH_FACTORIAL && !normalized ) {
		if ( invert && ( a * 4.0 < x ) ) {
			// This is method 4 in `igammaFinal`, done in logs:
			result = ( a * ln(x) ) - x;
			result += ln( upperGammaFraction( a, x ) );
		} else if ( !invert && ( a > 4.0 * x ) ) {
			// This is method 2 in `igammaFinal`, done in logs:
			result = ( a * ln(x) ) - x;
			initValue = 0.0;
			result += ln( lowerGammaSeries( a, x, initValue ) / a );
		} else {
			result = igammaFinal( x, a, true, invert );
			if ( result === 0.0 ) {
				if ( invert ) {
					// Try http://functions.wolfram.com/06.06.06.0039.01:
					result = 1.0 + ( 1.0 / (12.0*a) ) + ( 1.0 / (288.0*a*a) );
					result = ln( result ) - a + ( ( a-0.5 ) * ln(a) );
					result += ln( SQRT_TWO_PI );
				} else {
					// This is method 2 in `igammaFinal`, done in logs, we're really outside the range of this method, but since the result is almost certainly infinite, we should probably be OK:
					result = ( a * ln( x ) ) - x;
					initValue = 0.0;
					result += ln( lowerGammaSeries( a, x, initValue ) / a );
				}
			} else {
				result = ln( result ) + gammaln( a );
			}
		}
		if ( result > MAX_LN ) {
			return PINF;
		}
		return exp( result );
	}
	// If no special handling is required then we proceed as normal:
	return igammaFinal( x, a, normalized, invert );
}


// EXPORTS //

module.exports = gammainc;
