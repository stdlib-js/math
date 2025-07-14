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

var absf = require( './../../../../base/special/absf' );
var maxf = require( './../../../../base/special/maxf' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var FLOAT32_BIGGEST = require( '@stdlib/constants/float32/max' );
var FLOAT32_SMALLEST = require( '@stdlib/constants/float32/smallest-normal' );
var EPS = require( '@stdlib/constants/float32/eps' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );


// VARIABLES //

var ONE = f32( 1.0 );
var TWO = f32( 2.0 );
var HALF = f32( 0.5 );
var LARGE_THRESHOLD = f32( FLOAT32_BIGGEST * HALF );
var SMALL_THRESHOLD = f32( FLOAT32_SMALLEST * f32( TWO/EPS ) );
var RECIP_EPS_SQR = f32( TWO / f32(EPS*EPS) );


// MAIN //

/**
* Computes the inverse of a single-precision complex floating-point number.
*
* ## References
*
* -   Baudin, Michael, and Robert L. Smith. 2012. "A Robust Complex Division in Scilab." _arXiv_ abs/1210.4539 \[cs.MS\] (October): 1–25. <https://arxiv.org/abs/1210.4539>.
*
* @param {Complex64} z - complex number
* @returns {Complex64} result
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* var v = cinvf( new Complex64( 2.0, 4.0 ) );
* // returns <Complex64>
*
* var re = realf( v );
* // returns ~0.1
*
* var im = imagf( v );
* // returns ~-0.2
*/
function cinvf( z ) {
	var ab;
	var re;
	var im;
	var s;
	var r;
	var t;

	re = realf( z );
	im = imagf( z );
	ab = maxf( absf(re), absf(im) );
	s = ONE;
	if ( ab >= LARGE_THRESHOLD ) {
		re = f32( re * HALF );
		im = f32( im * HALF );
		s = f32( s * HALF );
	} else if ( ab <= SMALL_THRESHOLD ) {
		re = f32( re * RECIP_EPS_SQR );
		im = f32( im * RECIP_EPS_SQR );
		s = f32( s * RECIP_EPS_SQR );
	}
	if ( absf( im ) <= absf( re ) ) {
		r = f32( im / re );
		t = f32( ONE / f32( re + f32(im*r) ) );
		re = t;
		im = f32( -r * t );
	} else {
		r = f32( re / im );
		t = f32( ONE / f32( im + f32(re*r) ) );
		re = f32( r * t );
		im = -t;
	}
	re = f32( re * s );
	im = f32( im * s );
	return new Complex64( re, im );
}


// EXPORTS //

module.exports = cinvf;
