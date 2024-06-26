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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/e_acosf.c?view=markup}. The implementation follows the original, but has been modified according to project conventions.
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

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var sqrtf = require( './../../../../base/special/sqrtf' );
var absf = require( './../../../../base/special/absf' );
var toWord = require( '@stdlib/number/float32/base/to-word' );
var fromWord = require( '@stdlib/number/float32/base/from-word' );
var PI = require( '@stdlib/constants/float32/pi' );
var polyp = require( './poly_p.js' );


// VARIABLES //

var ALMOST_PI = 3.1415925026e+00;  // 0 10000000 10010010000111111011010 => 0x40490fda
var PIO2_HI = 1.5707962513e+00;    // 0 01111111 10010010000111111011010 => 0x3fc90fda
var PIO2_LO = 7.5497894159e-08;    // 0 01100111 01000100010000101101000 => 0x33a22168
var MASK_LO = 0xfffff000|0;        // 1 11111111 11111111111000000000000 => 4294963200 => 0xfffff000
var SMALL = 1.4901161193847656e-8; // 2^-26
var QS1 = -7.0662963390e-01;
var PIO2 = float64ToFloat32( PIO2_HI + PIO2_LO );


// MAIN //

/**
* Computes the arccosine of a single-precision floating-point number.
*
* @param {number} x - input value
* @returns {number} arccosine (in radians)
*
* @example
* var v = acosf( 1.0 );
* // returns 0.0
*
* @example
* var v = acosf( 0.707 );
* // returns ~0.7855
*
* @example
* var v = acosf( NaN );
* // returns NaN
*/
function acosf( x ) {
	var idf;
	var df;
	var ax;
	var z;
	var p;
	var q;
	var r;
	var s;
	var c;
	var w;

	if ( isnanf( x ) ) {
		return NaN;
	}
	x = float64ToFloat32( x );
	if ( x < -1.0 || x > 1.0 ) {
		return NaN;
	}
	if ( x === 1.0 ) {
		return 0.0;
	}
	if ( x === -1.0 ) {
		return PI;
	}
	ax = absf( x );
	if ( ax < 0.5 ) {
		if ( ax <= SMALL ) {
			return PIO2; // acos(~0) = π/2
		}
		z = float64ToFloat32( x * x );
		p = float64ToFloat32( z * polyp( z ) );
		q = float64ToFloat32( 1.0 + float64ToFloat32( z * QS1 ) );
		r = float64ToFloat32( p / q );
		return float64ToFloat32( PIO2_HI - float64ToFloat32( x - float64ToFloat32( PIO2_LO - float64ToFloat32( x * r ) ) ) ); // eslint-disable-line max-len
	}
	if ( x < -0.5 ) {
		z = float64ToFloat32( 0.5 * float64ToFloat32( 1.0 + x ) );
		p = float64ToFloat32( z * polyp( z ) );
		q = float64ToFloat32( 1.0 + float64ToFloat32( z * QS1 ) );
		s = sqrtf( z );
		r = float64ToFloat32( p / q );
		w = float64ToFloat32( float64ToFloat32( r * s ) - PIO2_LO );
		return float64ToFloat32( ALMOST_PI - float64ToFloat32( 2.0 * float64ToFloat32( s + w ) ) ); // eslint-disable-line max-len
	}
	// x > 0.5
	z = float64ToFloat32( 0.5 * float64ToFloat32( 1.0 - x ) );
	s = sqrtf( z );

	idf = toWord( s );
	df = fromWord( idf&MASK_LO );

	c = float64ToFloat32( float64ToFloat32( z - float64ToFloat32( df * df ) ) / float64ToFloat32( s + df ) ); // eslint-disable-line max-len
	p = float64ToFloat32( z * polyp( z ) );
	q = float64ToFloat32( 1.0 + float64ToFloat32( z * QS1 ) );
	r = float64ToFloat32( p / q );
	w = float64ToFloat32( float64ToFloat32( r * s ) + c );
	return float64ToFloat32( 2.0 * float64ToFloat32( df + w ) );
}


// EXPORTS //

module.exports = acosf;
