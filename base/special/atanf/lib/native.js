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
* Computes the arctangent of a single-precision floating-point number.
*
* @private
* @param {number} x - input value
* @returns {number} arctangent (in radians)
*
* @example
* var v = atanf( 0.0 );
* // returns 0.0
*
* @example
* var FLOAT32_PI = require( '@stdlib/constants/float32/pi' );
*
* var v = atanf( -FLOAT32_PI/4.0 );
* // returns ~-0.666
*
* @example
* var FLOAT32_PI = require( '@stdlib/constants/float32/pi' );
*
* var v = atanf( FLOAT32_PI/4.0 );
* // returns ~0.666
*
* @example
* var v = atanf( NaN );
* // returns NaN
*/
function atanf( x ) {
	return addon( x );
}


// EXPORTS //

module.exports = atanf;
