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
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

'use strict';

// MODULES //

var floor = require( './../../../../base/special/floor' );
var gamma = require( './../../../../base/special/gamma' );
var abs = require( './../../../../base/special/abs' );
var pow = require( './../../../../base/special/pow' );
var ln = require( './../../../../base/special/ln' );
var SQRT_EPSILON = require( '@stdlib/constants/float64/sqrt-eps' );
var FLOAT64_MAX = require( '@stdlib/constants/float64/max' );
var MAX_LN = require( '@stdlib/constants/float64/max-ln' );
var tgammaILargeX = require( './tgamma_i_large_x.js' );
var finiteGammaQ = require( './finite_gamma_q.js' );
var finiteHalfGammaQ = require( './finite_half_gamma_q.js' );
var fullIGammaPrefix = require( './full_igamma_prefix.js' );
var igammaTemmeLarge = require( './igamma_temme_large.js' );
var lowerGammaSeries = require( './lower_gamma_series.js' );
var regularisedGammaPrefix = require( './regularised_gamma_prefix.js' );
var tgammaSmallUpperPart = require( './tgamma_small_upper_part.js' );
var upperGammaFraction = require( './upper_gamma_fraction.js' );


// MAIN //

/**
* Main entry point for evaluating all the four incomplete gamma functions (lower, upper, regularized lower, and regularized upper).
*
* @private
* @param {number} x - function parameter
* @param {number} a - function parameter
* @param {boolean} regularized - boolean indicating if the function should evaluate the regularized or non-regularized incomplete gamma functions
* @param {boolean} upper - boolean indicating if the function should return the upper tail of the incomplete gamma function
* @returns {number} function value
*/
function igammaFinal( x, a, regularized, upper ) {
	var optimisedInvert;
	var evalMethod;
	var isHalfInt;
	var initValue;
	var useTemme;
	var isSmallA;
	var result;
	var invert;
	var isInt;
	var sigma;
	var res;
	var gam;
	var fa;
	var g;

	result = 0.0;
	invert = upper;
	isSmallA = ( a < 30 ) && ( a <= x + 1.0 ) && ( x < MAX_LN );
	if ( isSmallA ) {
		fa = floor( a );
		isInt = ( fa === a );
		isHalfInt = ( isInt ) ? false : ( abs( fa - a ) === 0.5 );
	} else {
		isInt = false;
		isHalfInt = false;
	}
	if ( isInt && x > 0.6 ) {
		// Calculate Q via finite sum:
		invert = !invert;
		evalMethod = 0;
	} else if ( isHalfInt && x > 0.2 ) {
		// Calculate Q via finite sum for half integer a:
		invert = !invert;
		evalMethod = 1;
	} else if ( x < SQRT_EPSILON && a > 1.0 ) {
		evalMethod = 6;
	} else if ( ( x > 1000.0 ) && ( ( a < x ) || ( abs( a - 50.0 ) / x < 1.0 ) ) ) {
		// Calculate Q via asymptotic approximation:
		invert = !invert;
		evalMethod = 7;
	} else if ( x < 0.5 ) {
		// Changeover criterion chosen to give a changeover at Q ~ 0.33:
		if ( -0.4 / ln( x ) < a ) {
			evalMethod = 2;
		} else {
			evalMethod = 3;
		}
	} else if ( x < 1.1 ) {
		// Changeover here occurs when P ~ 0.75 or Q ~ 0.25:
		if ( x * 0.75 < a ) {
			evalMethod = 2;
		} else {
			evalMethod = 3;
		}
	} else {
		// Begin by testing whether we're in the "bad" zone where the result will be near 0.5 and the usual series and continued fractions are slow to converge:
		useTemme = false;
		if ( regularized && a > 20 ) {
			sigma = abs( (x-a)/a );
			if ( a > 200 ) {
				// Limit chosen so that we use Temme's expansion only if the result would be larger than about 10^-6. Below that the regular series and continued fractions converge OK, and if we use Temme's method we get increasing errors from the dominant erfc term as it's (inexact) argument increases in magnitude.
				if ( 20 / a > sigma * sigma ) {
					useTemme = true;
				}
			} else if ( sigma < 0.4 ) {
				useTemme = true;
			}
		}
		if ( useTemme ) {
			evalMethod = 5;
		}
		// Regular case where the result will not be too close to 0.5: Changeover occurs at P ~ Q ~ 0.5. Note that series computation of P is about x2 faster than continued fraction calculation of Q, so try and use the CF only when really necessary, especially for small x.
		else if ( x - ( 1.0 / (3.0 * x) ) < a ) {
			evalMethod = 2;
		} else {
			evalMethod = 4;
			invert = !invert;
		}
	}

	/* eslint-disable default-case */
	switch ( evalMethod ) {
	case 0:
		result = finiteGammaQ( a, x );
		if ( regularized === false ) {
			result *= gamma( a );
		}
		break;
	case 1:
		result = finiteHalfGammaQ( a, x );
		if ( regularized === false ) {
			result *= gamma( a );
		}
		break;
	case 2:
		// Compute P:
		result = ( regularized ) ?
			regularisedGammaPrefix( a, x ) :
			fullIGammaPrefix( a, x );
		if ( result !== 0.0 ) {
			// If the result will be inverted, we can potentially save computation by initializing the series sum closer to the final result. This reduces the number of iterations needed in the series evaluation. However, care must be taken to avoid spurious numeric overflows. In practice, the more expensive overflow checks below are typically bypassed for well-behaved input values.
			initValue = 0.0;
			optimisedInvert = false;
			if ( invert ) {
				initValue = ( regularized ) ? 1.0 : gamma( a );
				if (
					regularized ||
					result >= 1.0 ||
					FLOAT64_MAX * result > initValue
				) {
					initValue /= result;
					if (
						regularized ||
						a < 1.0 ||
						( FLOAT64_MAX / a > initValue )
					) {
						initValue *= -a;
						optimisedInvert = true;
					} else {
						initValue = 0.0;
					}
				} else {
					initValue = 0.0;
				}
			}
			result *= lowerGammaSeries( a, x, initValue ) / a;
			if ( optimisedInvert ) {
				invert = false;
				result = -result;
			}
		}
		break;
	case 3:
		// Compute Q:
		invert = !invert;
		res = tgammaSmallUpperPart( a, x, invert );
		result = res[ 0 ];
		g = res[ 1 ];
		invert = false;
		if ( regularized ) {
			result /= g;
		}
		break;
	case 4:
		// Compute Q:
		result = ( regularized ) ?
			regularisedGammaPrefix( a, x ) :
			fullIGammaPrefix( a, x );
		if ( result !== 0 ) {
			result *= upperGammaFraction( a, x );
		}
		break;
	case 5:
		result = igammaTemmeLarge( a, x );
		if ( x >= a ) {
			invert = !invert;
		}
		break;
	case 6:
		// Since `x` is so small that P is necessarily very small too, use http://functions.wolfram.com/GammaBetaErf/GammaRegularized/06/01/05/01/01/
		result = ( regularized ) ?
			pow( x, a ) / gamma( a + 1.0 ) :
			pow( x, a ) / a;
		result *= 1.0 - ( a * x / ( a + 1.0 ) );
		break;
	case 7:
		// `x` is large, so compute Q:
		result = ( regularized ) ?
			regularisedGammaPrefix( a, x ) :
			fullIGammaPrefix( a, x );
		result /= x;
		if ( result !== 0.0 ) {
			result *= tgammaILargeX( a, x );
		}
		break;
	}
	if ( regularized && result > 1.0 ) {
		result = 1.0;
	}
	if ( invert ) {
		gam = ( regularized ) ? 1.0 : gamma( a );
		result = gam - result;
	}
	return result;
}


// EXPORTS //

module.exports = igammaFinal;
