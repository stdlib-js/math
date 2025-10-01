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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/s_tanf.c}. The implementation follows the original, but has been modified for JavaScript.
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

var kernelTanf = require( './../../../../base/special/kernel-tanf' );
var rempio2f = require( './../../../../base/special/rempio2f' );
var toWordf = require( '@stdlib/number/float32/base/to-word' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var FLOAT32_ABS_MASK = require( '@stdlib/constants/float32/abs-mask' );
var FLOAT32_EXPONENT_MASK = require( '@stdlib/constants/float32/exponent-mask' );
var FLOAT64_HALF_PI = require( '@stdlib/constants/float64/half-pi' );


// VARIABLES //

// PI/4 = 0.7853981256484985 => 0 01111110 10010010000111111011010 => 0x3f490fda = 1061752768
var PIO4_WORD = 0x3f490fda|0; // asm type annotation

// 3*PI/4 = 2.356194257736206 => 0 10000000 00101101100101111100011 => 0x4016cbe3 = 1075235811
var THREE_PIO4_WORD = 0x4016cbe3|0; // asm type annotation

// 5*PI/4 = 3.9269907474517822 => 0 10000000 11110110101001111010001 => 0x407b53d1 = 1081824209
var FIVE_PIO4_WORD = 0x407b53d1|0; // asm type annotation

// 7*PI/4 = 5.497786998748779 => 0 10000001 01011111110110111011111 => 0x40afeddf = 1085271519
var SEVEN_PIO4_WORD = 0x40afeddf|0; // asm type annotation

// 9*PI/4 = 7.068583011627197 => 0 10000001 11000100011000111010101 => 0x40e231d5 = 1088565717
var NINE_PIO4_WORD = 0x40e231d5|0; // asm type annotation

// 2^-12 = 0.000244140625 => 0 01110011 00000000000000000000000 => 0x39800000 = 964689920
var SMALL_WORD = 0x39800000|0; // asm type annotation

// Small multiples of PI/2 in double-precision floating-point format:
var PIO2 = FLOAT64_HALF_PI;             // 0x3FF921FB, 0x54442D18
var PI = 2.0 * FLOAT64_HALF_PI;         // 0x400921FB, 0x54442D18
var THREE_PIO2 = 3.0 * FLOAT64_HALF_PI; // 0x4012D97C, 0x7F3321D2
var TWO_PI = 4.0 * FLOAT64_HALF_PI;     // 0x401921FB, 0x54442D18

// Array for storing the remainder element:
var Y = [ 0.0 ];


// MAIN //

/**
* Evaluates the tangent of a single-precision floating-point number (in radians).
*
* ## Method
*
* -   Let \\(S\\), \\(C\\), and \\(T\\) denote the \\(\sin\\), \\(\cos\\), and \\(\tan\\), respectively, on \\(\[-\pi/4, +\pi/4\]\\).
*
* -   Reduce the argument \\(x\\) to \\(y = x-k\pi/2\\) in \\(\[-\pi/4, +\pi/4\]\\), and let \\(n = k \mod 4\\).
*
* -   We have
*
*     | n | sin(x) | cos(x) | tan(x) |
*     | - | ------ | ------ | ------ |
*     | 0 |    S   |    C   |   T    |
*     | 1 |    C   |   -S   |  -1/T  |
*     | 2 |   -S   |   -C   |   T    |
*     | 3 |   -C   |    S   |  -1/T  |
*
* @param {number} x - input value (in radians)
* @returns {number} tangent
*
* @example
* var v = tanf( 0.0 );
* // returns ~0.0
*
* @example
* var v = tanf( -3.141592653589793/4.0 );
* // returns ~-1.0
*
* @example
* var v = tanf( 3.141592653589793/4.0 );
* // returns ~1.0
*
* @example
* var v = tanf( NaN );
* // returns NaN
*/
function tanf( x ) {
	var hx;
	var ix;
	var n;

	hx = toWordf( f32( x ) )|0; // asm type annotation
	ix = (hx & FLOAT32_ABS_MASK)|0; // asm type annotation

	// Case: |x| ~<= π/4
	if ( ix <= PIO4_WORD ) {
		// Case: |x| < 2^-12
		if ( ix < SMALL_WORD ) {
			return f32( x );
		}
		return f32( kernelTanf( x, 1 ) );
	}
	// Case: |x| ~<= 5π/4
	if ( ix <= FIVE_PIO4_WORD ) {
		// Case: |x| ~<= 3π/4
		if ( ix <= THREE_PIO4_WORD ) {
			if ( hx > 0 ) {
				return f32( kernelTanf( x - PIO2, -1 ) );
			}
			return f32( kernelTanf( x + PIO2, -1 ) );
		}
		if ( hx > 0 ) {
			return f32( kernelTanf( x - PI, 1 ) );
		}
		return f32( kernelTanf( x + PI, 1 ) );
	}
	// Case: |x| ~<= 9π/4
	if ( ix <= NINE_PIO4_WORD ) {
		// Case: |x| ~<= 7π/4
		if ( ix <= SEVEN_PIO4_WORD ) {
			if ( hx > 0 ) {
				return f32( kernelTanf( x - THREE_PIO2, -1 ) );
			}
			return f32( kernelTanf( x + THREE_PIO2, -1 ) );
		}
		if ( hx > 0 ) {
			return f32( kernelTanf( x - TWO_PI, 1 ) );
		}
		return f32( kernelTanf( x + TWO_PI, 1 ) );
	}
	// Case: x is NaN or infinity
	if ( ix >= FLOAT32_EXPONENT_MASK ) {
		return NaN;
	}
	// Argument reduction...
	n = rempio2f( f32( x ), Y );
	return f32( kernelTanf( Y[ 0 ], 1 - ( ( n & 1 ) << 1 ) ) );
}


// EXPORTS //

module.exports = tanf;
