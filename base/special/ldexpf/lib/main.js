/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/s_scalbnf.c?view=markup}. The implementation follows the original, but has been modified for JavaScript.
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

var PINF = require( '@stdlib/constants/float32/pinf' );
var copysignf = require( './../../../../base/special/copysignf' );
var toWord = require( '@stdlib/number/float32/base/to-word' );
var fromWord = require( '@stdlib/number/float32/base/from-word' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// VARIABLES //

var TWO25 = 33554432.0; // 0x4c000000
var TWOM25 = 2.9802322387695312e-8; // 0x33000000


// MAIN //

/**
* Multiplies a single-precision floating-point number by an integer power of two.
*
* @param {number} frac - fraction
* @param {integer} exp - exponent
* @returns {number} single-precision floating-point number
*
* @example
* var x = ldexpf( 0.5, 3 ); // => 0.5 * 2^3 = 0.5 * 8
* // returns 4.0
*
* @example
* var x = ldexpf( 4.0, -2 ); // => 4 * 2^(-2) = 4 * (1/4)
* // returns 1.0
*
* @example
* var x = ldexpf( 0.0, 20 );
* // returns 0.0
*
* @example
* var x = ldexpf( -0.0, 39 );
* // returns -0.0
*
* @example
* var x = ldexpf( NaN, -101 );
* // returns NaN
*
* @example
* var x = ldexpf( Infinity, 11 );
* // returns Infinity
*
* @example
* var x = ldexpf( -Infinity, -118 );
* // returns -Infinity
*/
function ldexpf( frac, exp ) {
	var ix;
	var k;

	frac = float64ToFloat32( frac );
	ix = toWord( frac );

	// Extract exponent
	k = ( ix & 0x7f800000 ) >> 23;

	// 0 or subnormal frac
	if ( k === 0 ) {
		if ( ( ix & 0x7fffffff ) === 0 ) {
			// +-0
			return frac;
		}
		frac = float64ToFloat32( frac * TWO25 );
		ix = toWord( frac );
		k = ( ( ix & 0x7f800000 ) >> 23 ) - 25;
		if ( exp < -50000 ) {
			// Underflow
			return 0.0;
		}
	}

	// NaN or Inf
	if ( k === 0xff ) {
		return float64ToFloat32( frac + frac );
	}
	k += exp;
	if ( k > 0xfe ) {
		// Overflow
		return copysignf( PINF, frac );
	}
	if ( k > 0 ) {
		// Normal result
		frac = fromWord( ( ix & 0x807fffff ) | ( k << 23 ) );
		return frac;
	}
	if ( k <= -25 ) {
		if ( exp > 50000 ) {
			// In case of integer overflow in n + k
			return copysignf( PINF, frac );
		}

		// Underflow
		return copysignf( 0.0, frac );
	}

	// Subnormal result
	k += 25;
	frac = fromWord( ( ix & 0x807fffff ) | ( k << 23 ) );
	return float64ToFloat32( frac * TWOM25 );
}


// EXPORTS //

module.exports = ldexpf;
