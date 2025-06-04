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

var isnanf = require( './../../../../base/assert/is-nanf' );
var isIntegerf = require( './../../../../base/assert/is-integerf' );
var MAX_LUCAS = require( '@stdlib/constants/float32/max-safe-nth-lucas' );
var LUCAS = require( './lucas.json' );


// MAIN //

/**
* Computes the nth Lucas number as a single-precision floating-point number.
*
* @param {NonNegativeInteger} n - the Lucas number to compute
* @returns {NonNegativeInteger} Lucas number
*
* @example
* var y = lucasf( 0 );
* // returns 2
*
* @example
* var y = lucasf( 1 );
* // returns 1
*
* @example
* var y = lucasf( 2 );
* // returns 3
*
* @example
* var y = lucasf( 3 );
* // returns 4
*
* @example
* var y = lucasf( 4 );
* // returns 7
*
* @example
* var y = lucasf( 5 );
* // returns 11
*
* @example
* var y = lucasf( 6 );
* // returns 18
*
* @example
* var y = lucasf( NaN );
* // returns NaN
*
* @example
* var y = lucasf( 3.14 );
* // returns NaN
*
* @example
* var y = lucasf( -1.0 );
* // returns NaN
*/
function lucasf( n ) {
	if (
		isnanf( n ) ||
		isIntegerf( n ) === false ||
		n < 0 ||
		n > MAX_LUCAS
	) {
		return NaN;
	}
	return LUCAS[ n ];
}


// EXPORTS //

module.exports = lucasf;
