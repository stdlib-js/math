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

var deg2rad = require( './../../../../base/special/deg2rad' );
var kernelSin = require( './../../../../base/special/kernel-sin' );
var kernelCos = require( './../../../../base/special/kernel-cos' );
var fmod = require( './../../../../base/special/fmod' );
var signum = require( './../../../../base/special/signum' );
var abs = require( './../../../../base/special/abs' );
var isnan = require( './../../../../base/assert/is-nan' );
var isInfinite = require( './../../../../base/assert/is-infinite' );


// MAIN //

/**
* Computes the sine of an angle measured in degrees.
*
* @param {number} x - input value (in degrees)
* @returns {number} sine
*
* @example
* var v = sind( 0.0 );
* // returns 0.0
*
* @example
* var v = sind( 90.0 );
* // returns 1.0
*
* @example
* var v = sind( 30.0 );
* // returns ~0.5
*
* @example
* var v = sind( NaN );
* // returns NaN
*/
function sind( x ) {
	var arx;
	var rx;

	if (
		isInfinite( x ) ||
		isnan( x )
	) {
		return NaN;
	}

	rx = fmod( x, 360.0 );
	arx = abs( rx );

	if ( rx === 0.0 ) {
		return rx;
	}
	if ( arx < 45.0 ) {
		return kernelSin( deg2rad( rx ), 0.0 );
	}
	if ( arx <= 135.0 ) {
		return signum( rx ) * kernelCos( deg2rad( 90.0-arx ), 0.0 );
	}
	if ( arx === 180.0 ) {
		return signum( rx ) * 0.0;
	}
	if ( arx < 225.0 ) {
		return kernelSin( deg2rad( ( 180.0-arx )*signum( rx ) ), 0.0 );
	}
	if ( arx <= 315.0 ) {
		return -signum( rx ) * kernelCos( deg2rad( 270.0-arx ), 0.0 );
	}
	return kernelSin( deg2rad( rx-( 360.0*signum( rx ) ) ), 0.0 );
}


// EXPORTS //

module.exports = sind;
