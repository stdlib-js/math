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
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/e_rem_pio2f.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
*
* Optimized by Bruce D. Evans.
* ```
*/

'use strict';

// MODULES //

var ABS_MASK = require( '@stdlib/constants/float32/abs-mask' );
var EXPONENT_MASK = require( '@stdlib/constants/float32/exponent-mask' );
var roundf = require( './../../../../base/special/roundf' );
var fromWordf = require( '@stdlib/number/float32/base/from-word' );
var toWordf = require( '@stdlib/number/float32/base/to-word' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var rempio2Kernelf = require( './kernel_rempio2f.js' );


// VARIABLES //

// 53 bits of 2/π:
var INVPIO2 = 6.36619772367581382433e-01; // 0x3FE45F30, 0x6DC9C883

// First 25 bits of π/2:
var PIO2_1 = 1.57079631090164184570e+00;  // 0x3FF921FB, 0x50000000

// PIO2_1T = π/2 - PIO2_1:
var PIO2_1T = 1.58932547735281966916e-08; // 0x3E5110b4, 0x611A6263

// 2^28*π/2 = 421657428.2663131 => 0100000110111001001000011111101101010100010001000010110100011000 => high word => 0x4dc90fdb = 1102651899 => 01000001101110010010000111111011
var MEDIUM = 0x4dc90fdb|0; // asm type annotation

// Arrays for storing temporary values:
var TX = [ 0.0 ];
var TY = [ 0.0 ];


// MAIN //

/**
* Computes `x - nπ/2 = r` (single precision).
*
* ## Notes
*
* -   Returns `n` and stores the remainder `r` as `y[0]`.
*
* @param {number} x - input value
* @param {(Array|TypedArray|Object)} y - remainder element
* @returns {integer} factor of `π/2`
*
* @example
* var y = [ 0.0 ];
* var n = rempio2f( 128.0, y );
* // returns 81
*
* var y1 = y[ 0 ];
* // returns ~0.765
*
* @example
* var y = [ 0.0 ];
* var n = rempio2f( NaN, y );
* // returns 0
*
* var y1 = y[ 0 ];
* // returns NaN
*/
function rempio2f( x, y ) {
	var e0;
	var hx;
	var ix;
	var n;
	var r;
	var w;
	var z;

	x = float64ToFloat32( x );
	hx = toWordf( x ) | 0; // asm type annotation
	ix = (hx & ABS_MASK)|0; // asm type annotation

	// Case: |x| ~< 2^28*π/2 (medium size)
	if ( ix < MEDIUM ) {
		n = roundf( float64ToFloat32( x * INVPIO2 ) );
		r = x - ( n * PIO2_1 );
		w = n * PIO2_1T;
		y[ 0 ] = r - w;
		return n;
	}
	// Case: x is NaN or infinity
	if ( ix >= EXPONENT_MASK ) {
		y[ 0 ] = NaN;
		return 0;
	}
	// Set z = scalbn(|x|, ilogb(|x|)-23)...
	e0 = (ix >> 23) - 150; // `e0 = ilogb(|x|) - 23` => unbiased exponent minus 23
	z = fromWordf( ix - ((e0 << 23)|0) );
	TX[ 0 ] = z;
	n = rempio2Kernelf( TX, TY, e0, 1 );
	if ( hx < 0 ) {
		y[ 0 ] = -TY[ 0 ];
		return -n;
	}
	y[ 0 ] = TY[ 0 ];
	return n;
}


// EXPORTS //

module.exports = rempio2f;
