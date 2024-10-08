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
*/

'use strict';

// MODULES //

var isPositiveZerof = require( './../../../../base/assert/is-positive-zerof' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var PINF = require( '@stdlib/constants/float32/pinf' );


// MAIN //

/**
* Returns the maximum single-precision floating-point number.
*
* @param {number} x - first number
* @param {number} y - second number
* @returns {number} maximum value
*
* @example
* var v = maxf( 3.14, 4.2 );
* // returns 4.2
*
* @example
* var v = maxf( 3.14, NaN );
* // returns NaN
*
* @example
* var v = maxf( +0.0, -0.0 );
* // returns +0.0
*/
function maxf( x, y ) {
	if ( isnanf( x ) || isnanf( y ) ) {
		return NaN;
	}
	if ( x === PINF || y === PINF ) {
		return PINF;
	}
	if ( x === y && x === 0.0 ) {
		if ( isPositiveZerof( x ) ) {
			return x;
		}
		return y;
	}
	if ( x > y ) {
		return x;
	}
	return y;
}


// EXPORTS //

module.exports = maxf;
