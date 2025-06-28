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
*/

'use strict';

// MODULES //

var isnanf = require( './../../../../base/assert/is-nanf' );
var isInfinitef = require( './../../../../base/assert/is-infinitef' );
var normalize = require( '@stdlib/number/float32/base/normalize' ).assign;
var floatExp = require( '@stdlib/number/float32/base/exponent' );
var toWordf = require( '@stdlib/number/float32/base/to-word' );
var fromWordf = require( '@stdlib/number/float32/base/from-word' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );


// VARIABLES //

// Exponent all 0s: 1 00000000 11111111111111111111111 => 2155872255
var CLEAR_EXP_MASK = 0x807fffff>>>0; // asm type annotation

// Exponent equal to 126 (BIAS-1): 0 01111110 00000000000000000000000 => 1056964608
var SET_EXP_MASK = 0x3f000000|0; // asm type annotation

// Normalization workspace:
var X = [ 0.0, 0.0 ]; // WARNING: not thread safe


// MAIN //

/**
* Splits a single-precision floating-point number into a normalized fraction and an integer power of two and assigns results to a provided output array.
*
* @private
* @param {number} x - input value
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array index offset
* @returns {Collection} output array
*
* @example
* var out = frexpf( 4.0, [ 0.0, 0 ], 1, 0 );
* // returns [ 0.5, 3 ]
*
* @example
* var out = frexpf( 0.0, [ 0.0, 0 ], 1, 0 );
* // returns [ 0.0, 0 ]
*
* @example
* var out = frexpf( -0.0, [ 0.0, 0 ], 1, 0 );
* // returns [ -0.0, 0 ]
*
* @example
* var out = frexpf( NaN, [ 0.0, 0 ], 1, 0 );
* // returns [ NaN, 0 ]
*
* @example
* var out = frexpf( Infinity, [ 0.0, 0 ], 1, 0 );
* // returns [ Infinity , 0 ]
*
* @example
* var out = frexpf( -Infinity, [ 0.0, 0 ], 1, 0 );
* // returns [ -Infinity , 0 ]
*/
function frexpf( x, out, stride, offset ) {
	var word;
	var exp;

	x = f32( x );
	if (
		x === 0.0 || // handles -0
		isnanf( x ) ||
		isInfinitef( x )
	) {
		out[ offset ] = x;
		out[ offset + stride ] = 0;
		return out;
	}
	// If `x` is subnormal, normalize it...
	normalize( x, X, 1, 0 );

	// Extract the exponent from `x` and add the normalization exponent:
	exp = floatExp( X[0] ) + X[ 1 ] + 1;

	// Convert the normalized floating-point number to an unsigned 32-bit integer:
	word = toWordf( X[ 0 ] );

	// Clear the exponent bits within the word:
	word &= CLEAR_EXP_MASK;

	// Set the exponent bits within the word to BIAS-1 (127-1=126):
	word |= SET_EXP_MASK;

	// Create a new floating-point number:
	x = fromWordf( word );

	out[ offset ] = x;
	out[ offset + stride ] = exp;
	return out;
}


// EXPORTS //

module.exports = frexpf;
