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
var copysignf = require( './../../../../base/special/copysignf' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var float32ToUint32 = require( '@stdlib/number/float32/base/to-uint32' );
var toWordf = require( '@stdlib/number/float32/base/to-word' );
var fromWordf = require( '@stdlib/number/float32/base/from-word' );
var FLOAT32_SIGN_MASK = require( '@stdlib/constants/float32/sign-mask' );
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
var LARGE_WORD = 0x4b000000 >>> 0; // asm type annotation

// High and low parts of π in single-precision floating-point format:
var PI_HIGH = f32( 3.14160156 );    // 0x40491000
var PI_LOW = f32( -8.90890988e-6 ); // 0xb715777a

// Mask for extracting the high 16 bits of a 32-bit integer:
var HIGH_16_MASK = 0xffff0000 >>> 0; // asm type annotation

// Mask for extracting the exponent bits of a 32-bit float:
var FLOAT32_EXPONENT_FIELD_MASK = 0xff >>> 0; // asm type annotation

var TWO_23 = f32( 8388608 ); // 2^23
var TWO_N23 = f32( 1.1920928955078125e-7 ); // 2^-23

var ZERO = f32( 0.0 );
var HALF = f32( 0.5 );
var ONE = f32( 1.0 );


// MAIN //

/**
* Computes the value of `sin(πx)` in single-precision floating-point format.
*
* ## Notes
*
* -   The function computes `sin(πx)` more accurately than the obvious approach, especially for large `x`.
*
* @param {number} x - input value
* @returns {number} function value
*
* @example
* var y = sinpif( 0.0 );
* // returns 0.0
*
* @example
* var y = sinpif( 0.5 );
* // returns 1.0
*
* @example
* var y = sinpif( 0.9 );
* // returns ~0.309
*
* @example
* var y = sinpif( NaN );
* // returns NaN
*/
function sinpif( x ) {
	var hx;
	var ix;
	var hi;
	var lo;
	var j0;
	var ax;
	var s;

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
					return x;
				}
				hi = fromWordf( hx & HIGH_16_MASK );
				hi = f32( hi * TWO_23 );
				lo = f32( f32( x * TWO_23 ) - hi );

				// eslint-disable-next-line max-len
				s = f32( f32( f32( PI_LOW+PI_HIGH )*lo ) + f32( PI_LOW*hi ) + f32( PI_HIGH*hi ) );
				return f32( s * TWO_N23 );
			}
			s = kernelSinf( PI * ax );
			return ( hx & FLOAT32_SIGN_MASK ) ? -s : s;
		}
		// Case: |x| < 0.5
		if ( ix < HALF_WORD ) {
			s = kernelCosf( PI * f32( HALF - ax ) );
		} else if ( ix < THREE_QUARTER_WORD ) { // Case: |x| < 0.75
			s = kernelCosf( PI * f32( ax - HALF ) );
		} else {
			s = kernelSinf( PI * f32( ONE - ax ) );
		}
		return ( hx & FLOAT32_SIGN_MASK ) ? -s : s;
	}
	// Case: 1 <= |x| < 2^23
	if ( ix < LARGE_WORD ) {
		// Fast floor by bitwise manipulation:
		j0 = ( ( ix >> FLOAT32_NUM_SIGNIFICAND_BITS ) & FLOAT32_EXPONENT_FIELD_MASK ) - FLOAT32_EXPONENT_BIAS; // eslint-disable-line max-len
		ix &= ~( FLOAT32_SIGNIFICAND_MASK >> j0 );
		x = fromWordf( ix );

		ax = f32( ax - x );
		ix = toWordf( ax );
		if ( ix === 0 ) {
			s = ZERO;
		} else {
			// Case: |x| < 0.5
			if ( ix < HALF_WORD ) {
				// Case: |x| < 0.25
				if ( ix < QUARTER_WORD ) {
					s = kernelSinf( PI * ax );
				} else {
					s = kernelCosf( PI * f32( HALF - ax ) );
				}
			} else if ( ix < THREE_QUARTER_WORD ) { // Case: |x| < 0.75
				s = kernelCosf( PI * f32( ax - HALF ) );
			} else {
				s = kernelSinf( PI * f32( ONE - ax ) );
			}
			j0 = float32ToUint32( x );
			s = ( j0 & 1 ) ? -s : s;
		}
		return ( hx & FLOAT32_SIGN_MASK ) ? -s : s;
	}
	// Case: x is NaN or infinity
	if ( ix >= FLOAT32_EXPONENT_MASK ) {
		return NaN;
	}
	// Case: |x| >= 2^23 is always an integer, so return +-0.
	return copysignf( ZERO, x );
}


// EXPORTS //

module.exports = sinpif;
