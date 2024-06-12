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
*/

'use strict';

// MODULES //

var isnan = require( './../../../../base/assert/is-nan' );
var isInfinite = require( './../../../../base/assert/is-infinite' );
var pow = require( './../../../../base/special/pow' );
var floor = require( './../../../../base/special/floor' );
var floorn = require( './../../../../base/special/floorn' );


// MAIN //

/**
* Rounds a numeric value to the nearest multiple of \\(b^n\\) toward negative infinity.
*
* @param {number} x - input value
* @param {integer} n - integer power
* @param {PositiveInteger} b - base
* @returns {number} rounded value
*
* @example
* // Round a value to 4 decimal places:
* var v = floorb( 3.141592653589793, -4, 10 );
* // returns 3.1415
*
* @example
* // If n = 0 or b = 1, `floorb` behaves like `floor`:
* var v = floorb( 3.141592653589793, 0, 2 );
* // returns 3.0
*
* @example
* // Round a value to the nearest multiple of two toward negative infinity:
* var v = floorb( 5.0, 1, 2 );
* // returns 4.0
*/
function floorb( x, n, b ) {
	var y;
	var s;
	if (
		isnan( x ) ||
		isnan( n ) ||
		isnan( b ) ||
		b <= 0 ||
		isInfinite( n ) ||
		isInfinite( b )
	) {
		return NaN;
	}
	if ( isInfinite( x ) || x === 0.0 ) {
		return x;
	}
	if ( b === 10 ) {
		return floorn( x, n );
	}
	if ( n === 0 || b === 1 ) {
		return floor( x );
	}
	s = pow( b, -n );

	// Check for overflow:
	if ( isInfinite( s ) ) {
		return x;
	}
	y = floor( x * s ) / s;

	// Check for overflow:
	if ( isInfinite( y ) ) {
		return x;
	}
	return y;
}


// EXPORTS //

module.exports = floorb;