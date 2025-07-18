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

var fcn = require( './assign.js' );


// MAIN //

/**
* Decomposes a single-precision floating-point number into integral and fractional parts, each having the same type and sign as the input value.
*
* @param {number} x - input value
* @returns {Array<number>} output array
*
* @example
* var parts = modff( 3.14 );
* // returns [ 3.0, 0.1400001049041748 ]
*
*/
function modff( x ) {
	return fcn( x, [ 0.0, 0.0 ], 1, 0 );
}


// EXPORTS //

module.exports = modff;
