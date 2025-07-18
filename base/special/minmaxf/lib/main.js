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

var assign = require( './assign.js' );


// MAIN //

/**
* Returns the minimum and maximum of two single-precision floating-point numbers.
*
* @param {number} x - first number
* @param {number} y - second number
* @returns {Array<number>} minimum and maximum values
*
* @example
* var v = minmaxf( 3.14, 4.2 );
* // returns [ 3.14, 4.2 ]
*
* @example
* var v = minmaxf( 3.14, NaN );
* // returns [ NaN, NaN ]
*
* @example
* var v = minmaxf( +0.0, -0.0 );
* // returns [ -0.0, 0.0 ]
*/
function minmaxf( x, y ) {
	return assign( x, y, [ 0.0, 0.0 ], 1, 0 );
}


// EXPORTS //

module.exports = minmaxf;
