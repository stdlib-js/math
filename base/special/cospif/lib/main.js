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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://github.com/freebsd/freebsd-src/blob/main/lib/msun/src/s_sinpif.c}. The implementation follows the original, but has been modified for JavaScript.
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

var kernelCosf = require( './../../../../base/special/kernel-cosf' );
var kernelSinf = require( './../../../../base/special/kernel-sinf' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var float32ToUint32 = require( '@stdlib/number/float32/base/to-uint32' );
var toWordf = require( '@stdlib/number/float32/base/to-word' );
var fromWordf = require( '@stdlib/number/float32/base/from-word' );
var FLOAT32_ABS_MASK = require( '@stdlib/constants/float32/abs-mask' );
var FLOAT32_EXPONENT_MASK = require( '@stdlib/constants/float32/exponent-mask' );
var FLOAT32_EXPONENT_BIAS = require( '@stdlib/constants/float32/exponent-bias' );
var FLOAT32_NUM_SIGNIFICAND_BITS = require( '@stdlib/constants/float32/num-significand-bits' );
var FLOAT32_SIGNIFICAND_MASK = require( '@stdlib/constants/float32/significand-mask' );
var PI = require( '@stdlib/constants/float64/pi' );


// VARIABLES //

// 1 => 0 01111111 00000000000000000000000 => 0x3f800000 = 1065353216
var ONE_WORD = 0x3f800000 >>> 0; // asm type annotation

// 1/2 = 0.5 => 0 01111110 00000000000000000000000 => 0x3f000000 = 1056964608
var HALF_WORD = 0x3f000000 >>> 0; // asm type annotation

// 1/4 = 0.25 => 0 01111101 00000000000000000000000 => 0x3e800000 = 1048576000
var QUARTER_WORD = 0x3e800000 >>> 0; // asm type annotation

// 3/4 = 0.75 => 0 01111110 10000000000000000000000 => 0x3f400000 = 1061158912
var THREE_QUARTER_WORD = 0x3f400000 >>> 0; // asm type annotation

// 2^-14 = 0.00006103515625 => 0 01110001 00000000000000000000000 => 0x38800000 = 947912704
var SMALL_WORD = 0x38800000 >>> 0; // asm type annotation

// 2^23 = 8388608 => 0 10010110 00000000000000000000000 => 0x4b000000 = 1258291200
var TWO_23_WORD = 0x4b000000 >>> 0; // asm type annotation

// 2^24 = 16777216 => 0 00000010 00000000000000000000000 => 0x4b800000 = 1266679808
var TWO_24_WORD = 0x4b800000 >>> 0; // asm type annotation

// Mask for extracting the exponent bits of a 32-bit float:
var FLOAT32_EXPONENT_FIELD_MASK = 0xff >>> 0; // asm type annotation

var NEG_ONE = f32( -1.0 );
var ZERO = f32( 0.0 );
var HALF = f32( 0.5 );
var ONE = f32( 1.0 );


// MAIN //

/**
* Computes the value of `cos(πx)` in single-precision floating-point format.
*
* ## Notes
*
* -   The function computes `cos(πx)` more accurately than the obvious approach, especially for large `x`.
*
* @param {number} x - input value
* @returns {number} function value
*
* @example
* var y = cospif( 0.0 );
* // returns 1.0
*
* @example
* var y = cospif( 0.5 );
* // returns 0.0
*
* @example
* var y = cospif( 0.1 );
* // returns ~0.951
*
* @example
* var y = cospif( NaN );
* // returns NaN
*/
function cospif( x ) {
	var hx;
	var ix;
	var j0;
	var ax;
	var c;

	x = f32( x );
	hx = toWordf( f32( x ) );
	ix = (hx & FLOAT32_ABS_MASK) >>> 0; // asm type annotation
	ax = fromWordf( ix ); // asm type annotation

	// Case: |x| < 1
	if ( ix < ONE_WORD ) {
		// Case: |x| < 0.25
		if ( ix < QUARTER_WORD ) {
			// Case: |x| < 2^-14
			if ( ix < SMALL_WORD ) {
				if ( x === 0.0 ) {
					return ONE;
				}
			}
			return kernelCosf( PI * f32( ax ) );
		}
		// Case: |x| < 0.5
		if ( ix < HALF_WORD ) {
			c = kernelSinf( PI * f32( HALF - ax ) );
		} else if ( ix < THREE_QUARTER_WORD ) { // Case: |x| < 0.75
			if ( ix === HALF_WORD ) {
				return ZERO;
			}
			c = f32( -kernelSinf( PI * f32( ax - HALF ) ) );
		} else {
			c = f32( -kernelCosf( PI * f32( ONE - ax ) ) );
		}
		return c;
	}
	// Case: 1 <= |x| < 2^23
	if ( ix < TWO_23_WORD ) {
		// Fast floor by bitwise manipulation:
		j0 = ( ( ix >> FLOAT32_NUM_SIGNIFICAND_BITS ) & FLOAT32_EXPONENT_FIELD_MASK ) - FLOAT32_EXPONENT_BIAS; // eslint-disable-line max-len
		ix &= ~( FLOAT32_SIGNIFICAND_MASK >> j0 );
		x = fromWordf( ix );

		ax = f32( ax - x );
		ix = toWordf( ax );

		// Case: |x| < 0.5
		if ( ix < HALF_WORD ) {
			// Case: |x| < 0.25
			if ( ix < QUARTER_WORD ) {
				c = ( ix === 0 ) ? ONE : kernelCosf( PI * f32( ax ) );
			} else {
				c = kernelSinf( PI * f32( HALF - ax ) );
			}
		} else if ( ix < THREE_QUARTER_WORD ) { // Case: |x| < 0.75
			if ( ix === HALF_WORD ) {
				return ZERO;
			}
			c = f32( -kernelSinf( PI * f32( ax - HALF ) ) );
		} else {
			c = f32( -kernelCosf( PI * f32( ONE - ax ) ) );
		}
		j0 = float32ToUint32( x );
		return ( j0 & 1 ) ? -c : c;
	}
	// Case: x is NaN or infinity
	if ( ix >= FLOAT32_EXPONENT_MASK ) {
		return NaN;
	}
	// Case: 2^23 <= |x| < 2^24 - determine if x is an even or odd integer to return +1 or -1.
	if ( ix < TWO_24_WORD ) {
		return ( ix & 1 ) ? NEG_ONE : ONE;
	}
	// Case: |x| >= 2^24 is always an even integer, so return +1.
	return ONE;
}


// EXPORTS //

module.exports = cospif;
