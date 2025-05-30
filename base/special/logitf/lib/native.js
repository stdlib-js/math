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

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Computes the logit function for a single-precision floating-point number.
*
* @private
* @param {Probability} p - input value
* @returns {number} function value
*
* @example
* var y = logitf( 0.2 );
* // returns ~-1.386
*
* @example
* var y = logitf( 0.9 );
* // returns ~2.197
*
* @example
* var y = logitf( -4.0 );
* // returns NaN
*
* @example
* var y = logitf( 1.5 );
* // returns NaN
*
* @example
* var y = logitf( NaN );
* // returns NaN
*/
function logitf( p ) {
	return addon( p );
}


// EXPORTS //

module.exports = logitf;
