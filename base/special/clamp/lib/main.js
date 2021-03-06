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
var isNegativeZero = require( './../../../../base/assert/is-negative-zero' );


// MAIN //

/**
* Restricts a double-precision floating-point number to a specified range.
*
* @param {number} v - input value
* @param {number} min - minimum value
* @param {number} max - maximum value
* @returns {number} value restricted to a specified range
*
* @example
* var v = clamp( 3.14, 0.0, 5.0 );
* // returns 3.14
*
* v = clamp( -3.14, 0.0, 5.0 );
* // returns 0.0
*
* v = clamp( 10.0, 0.0, 5.0 );
* // returns 5.0
*
* v = clamp( -0.0, 0.0, 5.0 );
* // returns 0.0
*
* v = clamp( 0.0, -0.0, 5.0 );
* // returns 0.0
*
* v = clamp( NaN, 0.0, 5.0 );
* // returns NaN
*
* v = clamp( 0.0, NaN, 5.0 );
* // returns NaN
*
* v = clamp( 3.14, 0.0, NaN );
* // returns NaN
*/
function clamp( v, min, max ) {
	if (
		isnan( v ) ||
		isnan( min ) ||
		isnan( max )
	) {
		return NaN;
	}
	// Simple cases...
	if ( v < min ) {
		return min;
	}
	if ( v > max ) {
		return max;
	}
	// Special cases for handling +-0.0...
	if ( min === 0.0 && isNegativeZero( v ) ) {
		return min; // +-0.0
	}
	if ( v === 0.0 && isNegativeZero( max ) ) {
		return max; // -0.0
	}
	// Case: min <= v <= max
	return v;
}


// EXPORTS //

module.exports = clamp;
