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
var toWord = require( '@stdlib/number/float32/base/to-word' );
var fromWord = require( '@stdlib/number/float32/base/from-word' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var FLOAT32_EXPONENT_BIAS = require( '@stdlib/constants/float32/exponent-bias' );
var FLOAT32_NUM_SIGNIFICAND_BITS = require( '@stdlib/constants/float32/num-significand-bits' ); // eslint-disable-line id-length
var FLOAT32_HIGH_WORD_EXPONENT_MASK = require( '@stdlib/constants/float32/exponent-mask' ); // eslint-disable-line id-length
var FLOAT32_HIGH_WORD_SIGNIFICAND_MASK = require( '@stdlib/constants/float32/significand-mask' ); // eslint-disable-line id-length


// VARIABLES //

var ZERO = f32( 0.0 );
var NEG_ONE = f32( -1.0 );


// MAIN //

/**
* Decomposes a single-precision floating-point number into integral and fractional parts, each having the same type and sign as the input value, and assigns results to a provided output array.
*
* @private
* @param {number} x - input value
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array index offset
* @returns {Collection} output array
*
* @example
* var parts = modff( 3.14, [ 0.0, 0.0 ], 1, 0 );
* // returns [ 3.0, 0.1400001049041748 ]
*/
function modff( x, out, stride, offset ) {
	var word;
	var exp;
	var i;

	x = f32( x );

	// Special cases...
	if ( x < 1.0 ) {
		if ( x < 0.0 ) {
			modff( -x, out, stride, offset );
			out[ offset ] = f32( out[ offset ] * NEG_ONE );
			out[ offset + stride ] = f32( out[ offset + stride ] * NEG_ONE );
			return out;
		}
		if ( x === 0.0 ) { // [ +-0, +-0 ]
			out[ offset ] = x;
			out[ offset + stride ] = x;
			return out;
		}
		out[ offset ] = ZERO;
		out[ offset + stride ] = x;
		return out;
	}
	if ( isnanf( x ) ) {
		out[ offset ] = NaN;
		out[ offset + stride ] = NaN;
		return out;
	}
	if ( x === PINF ) {
		out[ offset ] = PINF;
		out[ offset + stride ] = ZERO;
		return out;
	}
	// Decompose |x|...

	// Extract the word:
	word = toWord( x );

	// Extract the unbiased exponent:
	exp = ((word & FLOAT32_HIGH_WORD_EXPONENT_MASK) >> FLOAT32_NUM_SIGNIFICAND_BITS)|0; // asm type annotation
	exp -= FLOAT32_EXPONENT_BIAS|0; // asm type annotation

	// Handle smaller values (x < 2**23 = 8388608)...
	if ( exp < FLOAT32_NUM_SIGNIFICAND_BITS ) {
		i = (FLOAT32_HIGH_WORD_SIGNIFICAND_MASK >> exp)|0; // asm type annotation

		// Determine if `x` is integral by checking for significand bits which cannot be exponentiated away...
		if ( ( word & i ) === 0 ) {
			out[ offset ] = x;
			out[ offset + stride ] = ZERO;
			return out;
		}
		// Turn off all the bits which cannot be exponentiated away:
		word &= ( ~i );

		// Generate the integral part:
		i = fromWord( word );

		// The fractional part is whatever is leftover:
		out[ offset ] = i;
		out[ offset + stride ] = f32( x - i );
		return out;
	}
	// `x` is integral:
	out[ offset ] = x;
	out[ offset + stride ] = ZERO;
	return out;
}


// EXPORTS //

module.exports = modff;
