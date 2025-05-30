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
* Computes the nth negaLucas number.
*
* @private
* @param {NonPositiveInteger} n - the negaLucas number to compute
* @returns {integer} negaLucas number
*
* @example
* var y = negalucas( 0 );
* // returns 2
*
* @example
* y = negalucas( -1 );
* // returns -1
*
* @example
* y = negalucas( -2 );
* // returns 3
*
* @example
* y = negalucas( -3 );
* // returns -4
*
* @example
* y = negalucas( -4 );
* // returns 7
*
* @example
* y = negalucas( -5 );
* // returns -11
*
* @example
* y = negalucas( -6 );
* // returns 18
*/
function negalucas( n ) {
	return addon( n );
}


// EXPORTS //

module.exports = negalucas;
