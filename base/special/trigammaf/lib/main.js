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
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/trigamma.hpp}. The implementation follows the original but has been reformatted and modified for JavaScript.
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

var f32 = require( '@stdlib/number/float64/base/to-float32' );
var sinpif = require( './../../../../base/special/sinpif' );
var absf = require( './../../../../base/special/absf' );
var floorf = require( './../../../../base/special/floorf' );
var PI_SQUARED = require( '@stdlib/constants/float32/pi-squared' );
var rateval12 = require( './rational_p12q12.js' );
var rateval24 = require( './rational_p24q24.js' );
var rateval4INF = require( './rational_p4infq4inf.js' );


// VARIABLES //

var YOFFSET12 = f32( 2.1093254089355469 );
var ZERO = f32( 0.0 );
var ONE = f32( 1.0 );
var TWO = f32( 2.0 );
var FOUR = f32( 4.0 );


// MAIN //

/**
* Evaluates the trigamma function for a single-precision floating-point number.
*
* @param {number} x - input value
* @returns {number} function value
*
* @example
* var v = trigammaf( -2.5 );
* // returns ~9.539
*
* @example
* var v = trigammaf( 1.0 );
* // returns ~1.645
*
* @example
* var v = trigammaf( 10.0 );
* // returns ~0.105
*
* @example
* var v = trigammaf( NaN );
* // returns NaN
*
* @example
* var v = trigammaf( -1.0 );
* // returns NaN
*/
function trigammaf( x ) {
	var result;
	var s;
	var y;
	var z;

	x = f32( x );
	result = ZERO;

	// Check for negative arguments and use reflection:
	if ( x <= ZERO ) {
		if ( floorf( x ) === x ) {
			return NaN;
		}
		// Reflect:
		z = f32( ONE - x );
		if ( z < ONE ) {
			result = f32( ONE / f32( z*z ) );
			z = f32( ONE + z );
		}
		s = ( absf( x ) < absf( z ) ) ? sinpif( x ) : sinpif( z );
		return f32( f32( result - trigammaf( z ) ) + f32( PI_SQUARED / f32( s*s ) ) );
	}
	if ( x < ONE ) {
		result = f32( ONE / f32( x*x ) );
		x = f32( x + ONE );
	}
	if ( x <= TWO ) {
		result = f32( result + f32( f32( YOFFSET12 + rateval12( x ) ) / f32( x*x ) ) );
	} else if ( x <= FOUR ) {
		y = f32( ONE / x );
		result = f32( result + f32( f32( ONE + rateval24( y ) ) / x ) );
	} else {
		y = f32( ONE / x );
		result = f32( result + f32( f32( ONE + rateval4INF( y ) ) / x ) );
	}
	return result;
}


// EXPORTS //

module.exports = trigammaf;
