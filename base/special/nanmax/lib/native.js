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

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Returns the maximum value, ignoring NaN.
*
* @private
* @param {number} x - first number
* @param {number} y - second number
* @returns {number} maximum value
*
* @example
* var v = nanmax( 3.14, 4.2 );
* // returns 4.2
*
* @example
* var v = nanmax( 4.14, NaN );
* // returns 4.14
*
* @example
* var v = nanmax( NaN, NaN );
* // returns NaN
*/
function nanmax( x, y ) {
	return addon( x, y );
}


// EXPORTS //

module.exports = nanmax;
