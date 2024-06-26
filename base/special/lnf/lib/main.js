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
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/e_logf.c}. The implementation follows the original, but has been modified for JavaScript.
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

var toWordf = require( '@stdlib/number/float32/base/to-word' );
var fromWordf = require( '@stdlib/number/float32/base/from-word' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var FLOAT32_EXPONENT_MASK = require( '@stdlib/constants/float32/exponent-mask' );
var FLOAT32_EXPONENT_BIAS = require( '@stdlib/constants/float32/exponent-bias' );
var FLOAT32_SIGNIFICAND_MASK = require( '@stdlib/constants/float32/significand-mask' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var polyvalP = require( './polyval_p.js' );
var polyvalQ = require( './polyval_q.js' );


// VARIABLES //

var LN2_HI = 6.9313812256e-01; // 0x3f317180
var LN2_LO = 9.0580006145e-06; // 0x3717f7d1
var TWO25 = 3.355443200e+07;   // 0x4c000000
var ONE_THIRD = 0.33333333333333333;


// MAIN //

/**
* Evaluates the natural logarithm of a single-precision floating-point number.
*
* @param {NonNegativeNumber} x - input value
* @returns {number} function value
*
* @example
* var v = lnf( 4.0 );
* // returns ~1.386
*
* @example
* var v = lnf( 0.0 );
* // returns -Infinity
*
* @example
* var v = lnf( Infinity );
* // returns Infinity
*
* @example
* var v = lnf( NaN );
* // returns NaN
*
* @example
* var v = lnf( -4.0 );
* // returns NaN
*/
function lnf( x ) {
	var hfsq;
	var ix;
	var t2;
	var t1;
	var k;
	var R;
	var f;
	var i;
	var j;
	var s;
	var w;
	var z;

	if ( x === 0.0 ) {
		return NINF;
	}
	if ( isnanf( x ) || x < 0.0 ) {
		return NaN;
	}
	x = float64ToFloat32( x );
	ix = toWordf( x );
	k = 0;

	// x < 2**-126
	if ( ix < 0x00800000 ) {
		k -= 25;

		// Subnormal number, scale up x
		x = float64ToFloat32( x * TWO25 );
		ix = toWordf( x );
	}
	if ( ix >= FLOAT32_EXPONENT_MASK ) {
		return float64ToFloat32( x + x );
	}
	k = float64ToFloat32( k + float64ToFloat32( ( ix >> 23 ) - FLOAT32_EXPONENT_BIAS ) ); // eslint-disable-line max-len
	ix &= FLOAT32_SIGNIFICAND_MASK;
	i = ( ix + ( 0x95f64 << 3 ) ) & 0x800000;

	// Normalize x or x/2
	x = fromWordf( ix | ( i ^ 0x3f800000 ) );
	k = float64ToFloat32( k + ( i >> 23 ) );
	f = float64ToFloat32( x - 1.0 );

	// -2**-9 <= f < 2**-9
	if ( ( FLOAT32_SIGNIFICAND_MASK & float64ToFloat32( 0x8000 + ix ) ) < 0xc000 ) { // eslint-disable-line max-len
		if ( f === 0.0 ) {
			if ( k === 0 ) {
				return 0.0;
			}
			return float64ToFloat32( float64ToFloat32( k * LN2_HI ) + float64ToFloat32( k * LN2_LO ) ); // eslint-disable-line max-len
		}
		R = float64ToFloat32( float64ToFloat32( f * f ) * float64ToFloat32( 0.5 - float64ToFloat32( ONE_THIRD * f ) ) ); // eslint-disable-line max-len
		if ( k === 0 ) {
			return float64ToFloat32( f - R );
		}
		return float64ToFloat32( float64ToFloat32( k * LN2_HI ) - float64ToFloat32( float64ToFloat32( R - float64ToFloat32( k * LN2_LO ) ) - f ) ); // eslint-disable-line max-len
	}
	s = float64ToFloat32( f / float64ToFloat32( 2.0 + f ) );
	z = float64ToFloat32( s * s );
	i = ix - ( 0x6147a << 3 );
	w = float64ToFloat32( z * z );
	j = ( 0x6b851 << 3 ) - ix;
	t1 = float64ToFloat32( w * float64ToFloat32( polyvalP( w ) ) );
	t2 = float64ToFloat32( z * float64ToFloat32( polyvalQ( w ) ) );
	i |= j;
	R = float64ToFloat32( t2 + t1 );
	if ( i > 0 ) {
		hfsq = float64ToFloat32( 0.5 * float64ToFloat32( f * f ) );
		if ( k === 0 ) {
			return float64ToFloat32( f - float64ToFloat32( hfsq - float64ToFloat32( s * float64ToFloat32( hfsq + R ) ) ) ); // eslint-disable-line max-len
		}
		return float64ToFloat32( float64ToFloat32( k * LN2_HI ) - float64ToFloat32( float64ToFloat32( hfsq - float64ToFloat32( ( s * float64ToFloat32( hfsq + R ) ) + float64ToFloat32( k * LN2_LO ) ) ) - f ) ); // eslint-disable-line max-len
	}
	if ( k === 0 ) {
		return float64ToFloat32( f - float64ToFloat32( s * float64ToFloat32( f - R ) ) ); // eslint-disable-line max-len
	}
	return float64ToFloat32( float64ToFloat32( k * LN2_HI ) - float64ToFloat32( float64ToFloat32( float64ToFloat32( s * float64ToFloat32( f - R ) ) - float64ToFloat32( k * LN2_LO ) ) - f ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = lnf;
