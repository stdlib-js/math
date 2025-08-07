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

var deg2radf = require( './../../../../base/special/deg2radf' );
var kernelSinf = require( './../../../../base/special/kernel-sinf' );
var kernelCosf = require( './../../../../base/special/kernel-cosf' );
var fmodf = require( './../../../../base/special/fmodf' );
var signumf = require( './../../../../base/special/signumf' );
var absf = require( './../../../../base/special/absf' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var isInfinitef = require( './../../../../base/assert/is-infinitef' );


// VARIABLES //

var ZERO = f32( 0.0 );
var DEG_45 = f32( 45.0 );
var DEG_90 = f32( 90.0 );
var DEG_135 = f32( 135.0 );
var DEG_180 = f32( 180.0 );
var DEG_225 = f32( 225.0 );
var DEG_270 = f32( 270.0 );
var DEG_315 = f32( 315.0 );
var DEG_360 = f32( 360.0 );


// MAIN //

/**
* Computes the sine of a single-precision floating-point number (in degrees).
*
* @param {number} x - input value (in degrees)
* @returns {number} sine
*
* @example
* var v = sindf( 0.0 );
* // returns 0.0
*
* @example
* var v = sindf( 90.0 );
* // returns 1.0
*
* @example
* var v = sindf( 30.0 );
* // returns ~0.5
*
* @example
* var v = sindf( NaN );
* // returns NaN
*/
function sindf( x ) {
	var arx;
	var rx;

	x = f32( x );
	if (
		isInfinitef( x ) ||
		isnanf( x )
	) {
		return NaN;
	}

	rx = fmodf( x, DEG_360 );
	arx = absf( rx );

	if ( rx === ZERO ) {
		return rx;
	}
	if ( arx < DEG_45 ) {
		return kernelSinf( deg2radf( rx ) );
	}
	if ( arx <= DEG_135 ) {
		return f32( signumf( rx ) * kernelCosf( deg2radf( f32( DEG_90-arx ) ) ) );
	}
	if ( arx === DEG_180 ) {
		return f32( signumf( rx ) * ZERO );
	}
	if ( arx < DEG_225 ) {
		return kernelSinf( deg2radf( f32( f32( DEG_180-arx )*signumf( rx ) ) ) );
	}
	if ( arx <= DEG_315 ) {
		return f32( -signumf( rx ) * kernelCosf( deg2radf( f32( DEG_270-arx ) ) ) );
	}
	return kernelSinf( deg2radf( f32( rx - f32( DEG_360*signumf( rx ) ) ) ) );
}


// EXPORTS //

module.exports = sindf;
