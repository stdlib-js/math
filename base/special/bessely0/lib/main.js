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
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/detail/bessel_y0.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright Xiaogang Zhang, 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

'use strict';

// MODULES //

var ln = require( './../../../../base/special/ln' );
var sqrt = require( './../../../../base/special/sqrt' );
var PI = require( '@stdlib/constants/float64/pi' );
var SQRT_PI = require( '@stdlib/constants/float64/sqrt-pi' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var sincos = require( './../../../../base/special/sincos' ).assign;
var besselj0 = require( './../../../../base/special/besselj0' );
var poly1 = require( './rational_p1q1.js' );
var poly2 = require( './rational_p2q2.js' );
var poly3 = require( './rational_p3q3.js' );
var polyC = require( './rational_pcqc.js' );
var polyS = require( './rational_psqs.js' );


// VARIABLES //

var ONE_DIV_SQRT_PI = 1.0 / SQRT_PI;
var TWO_DIV_PI = 2.0 / PI;

var x1 = 8.9357696627916752158e-01;
var x2 = 3.9576784193148578684e+00;
var x3 = 7.0860510603017726976e+00;
var x11 = 2.280e+02;
var x12 = 2.9519662791675215849e-03;
var x21 = 1.0130e+03;
var x22 = 6.4716931485786837568e-04;
var x31 = 1.8140e+03;
var x32 = 1.1356030177269762362e-04;

// `sincos` workspace:
var sc = [ 0.0, 0.0 ];


// MAIN //

/**
* Computes the Bessel function of the second kind of order zero.
*
* ## Notes
*
* -   Accuracy for subnormal `x` is very poor. Full accuracy is achieved at `1.0e-308` but trends progressively to zero at `5e-324`. This suggests that underflow (or overflow, perhaps due to a reciprocal) is effectively cutting off digits of precision until the computation loses all accuracy at `5e-324`.
*
* @param {number} x - input value
* @returns {number} evaluated Bessel function
*
* @example
* var v = y0( 0.0 );
* // returns -Infinity
*
* @example
* var v = y0( 1.0 );
* // returns ~0.088
*
* @example
* var v = y0( -1.0 );
* // returns NaN
*
* @example
* var v = y0( Infinity );
* // returns 0.0
*
* @example
* var v = y0( -Infinity );
* // returns NaN
*
* @example
* var v = y0( NaN );
* // returns NaN
*/
function y0( x ) {
	var rc;
	var rs;
	var y2;
	var r;
	var y;
	var z;
	var f;

	if ( x < 0.0 ) {
		return NaN;
	}
	if ( x === 0.0 ) {
		return NINF;
	}
	if ( x === PINF ) {
		return 0.0;
	}
	if ( x <= 3.0 ) {
		y = x * x;
		z = ( ln( x/x1 ) * besselj0( x ) ) * TWO_DIV_PI;
		r = poly1( y );
		f = ( x+x1 ) * ( ( x - (x11/256.0) ) - x12 );
		return z + ( f*r );
	}
	if ( x <= 5.5 ) {
		y = x * x;
		z = ( ln( x/x2 ) * besselj0( x ) ) * TWO_DIV_PI;
		r = poly2( y );
		f = ( x+x2 ) * ( (x - (x21/256.0)) - x22 );
		return z + ( f*r );
	}
	if ( x <= 8.0 ) {
		y = x * x;
		z = ( ln( x/x3 ) * besselj0( x ) ) * TWO_DIV_PI;
		r = poly3( y );
		f = ( x+x3 ) * ( (x - (x31/256.0)) - x32 );
		return z + ( f*r );
	}
	y = 8.0 / x;
	y2 = y * y;
	rc = polyC( y2 );
	rs = polyS( y2 );
	f = ONE_DIV_SQRT_PI / sqrt( x );

	/*
	* The following code is really just:
	*
	* ```
	* z = x - 0.25 * pi;
	* value = f * ( rc * sin( z ) + y * rs * cos( z ) );
	* ```
	*
	* But using the sin/cos addition formulae and constant values for sin/cos of `π/4` which then cancel part of the "f" term as they're all `1/sqrt(2)`:
	*/
	sincos( x, sc, 1, 0 );
	return f * ( ( rc * (sc[0]-sc[1]) ) + ( (y*rs) * (sc[1]+sc[0]) ) );
}


// EXPORTS //

module.exports = y0;
