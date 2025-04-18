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
* The following copyright and license were part of the original implementation available as part of FreeBSD [k_sin.c]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_sin.c} and [k_cos.c]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_cos.c}. The implementation follows the original sine and cosine kernels, but has been modified for JavaScript and combined into a single function.
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

var ABS_MASK = require( '@stdlib/constants/float64/high-word-abs-mask' );
var EXPONENT_MASK = require( '@stdlib/constants/float64/high-word-exponent-mask' );
var getHighWord = require( '@stdlib/number/float64/base/get-high-word' );
var rempio2 = require( './../../../../base/special/rempio2' );
var kernelSincos = require( './kernel_sincos.js' );


// VARIABLES //

// High word for PI/4: 0x3fe921fb = 1072243195 => 00111111111010010010000111111011
var PIO4_HIGH_WORD = 0x3fe921fb|0; // asm type annotation

// The smaller of the two cutoffs for the sine and cosine kernels: 2^-27 = 0x3e400000 => 00111110010000000000000000000000
var SMALL_HIGH_WORD = 0x3e400000|0; // asm type annotation

// Array for storing remainder elements:
var Y = [ 0.0, 0.0 ];


// MAIN //

/**
* Simultaneously computes the sine and cosine of an angle measured in radians and assigns the results to a provided output array.
*
* ## Method
*
* -   Let \\(S\\), \\(C\\), and \\(T\\) denote the \\(\sin\\), \\(\cos\\) and \\(\tan\\), respectively, on \\(\[-\pi/4, +\pi/4\]\\).
*
* -   Reduce the argument \\(x\\) to \\(y1+y2 = x-k\pi/2\\) in \\(\[-\pi/4, +\pi/4\]\\), and let \\(n = k \mod 4\\).
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
* @private
* @param {number} x - input value (in radians)
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array index offset
* @returns {Collection} output array
*
* @example
* var v = sincos( 0.0, [ 0.0, 0.0 ], 1, 0 );
* // returns [ ~0.0, ~1.0 ]
*
* @example
* var v = sincos( 3.141592653589793/2.0, [ 0.0, 0.0 ], 1, 0 );
* // returns [ ~1.0, ~0.0 ]
*
* @example
* var v = sincos( -3.141592653589793/6.0, [ 0.0, 0.0 ], 1, 0 );
* // returns [ ~-0.5, ~0.866 ]
*
* @example
* var v = sincos( NaN, [ 0.0, 0.0 ], 1, 0 );
* // returns [ NaN, NaN ]
*/
function sincos( x, out, stride, offset ) {
	var tmp;
	var ix;
	var n;

	ix = getHighWord( x );

	// Case: |x| ~< π/4
	ix &= ABS_MASK;
	if ( ix <= PIO4_HIGH_WORD ) {
		// Case: |x| ~< 2^-26
		if ( ix < SMALL_HIGH_WORD ) {
			if ( (x|0) === 0 ) {
				out[ offset ] = x;
				out[ offset + stride ] = 0.0;
			}
		}
		return kernelSincos( x, 0.0, out, stride, offset );
	}
	// Case: x is NaN or infinity
	if ( ix >= EXPONENT_MASK ) {
		out[ offset ] = NaN;
		out[ offset + stride ] = NaN;
		return out;
	}
	// Argument reduction...
	n = rempio2( x, Y );

	// Compute the sine and cosine together:
	kernelSincos( Y[ 0 ], Y[ 1 ], out, stride, offset );

	switch ( n & 3 ) {
	case 1:
		tmp = out[ offset + stride ];
		out[ offset + stride ] = -out[ offset ];
		out[ offset ] = tmp;
		return out;
	case 2:
		out[ offset ] *= -1;
		out[ offset + stride ] *= -1;
		return out;
	case 3:
		// Passing
		tmp = -out[ offset + stride ];
		out[ offset + stride ] = out[ offset ];
		out[ offset ] = tmp;
		return out;
	default:
		return out;
	}
}


// EXPORTS //

module.exports = sincos;
