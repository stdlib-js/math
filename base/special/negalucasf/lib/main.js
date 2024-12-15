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

var isnanf = require( './../../../../base/assert/is-nanf' );
var isIntegerf = require( './../../../../base/assert/is-integerf' );
var absf = require( './../../../../base/special/absf' );
var NEGALUCAS = require( './negalucas.json' );


// VARIABLES //

var MAX_LUCAS = 34;


// MAIN //

/**
* Computes the nth negalucas number in single-precision floating-point format.
*
* @param {NonPositiveInteger} n - the negalucas number to compute
* @returns {integer} negalucas number
*
* @example
* var y = negalucasf( 0 );
* // returns 2
*
* @example
* var y = negalucasf( -1 );
* // returns -1
*
* @example
* var y = negalucasf( -2 );
* // returns 3
*
* @example
* var y = negalucasf( -3 );
* // returns -4
*
* @example
* var y = negalucasf( -4 );
* // returns 7
*
* @example
* var y = negalucasf( -5 );
* // returns -11
*
* @example
* var y = negalucasf( -6 );
* // returns 18
*
* @example
* var y = negalucasf( NaN );
* // returns NaN
*
* @example
* var y = negalucasf( -3.14 );
* // returns NaN
*/
function negalucasf( n ) {
	var an;
	if (
		isnanf( n ) ||
		isIntegerf( n ) === false ||
		n > 0
	) {
		return NaN;
	}
	an = absf( n );
	if ( an > MAX_LUCAS ) {
		return NaN;
	}
	return NEGALUCAS[ an ];
}


// EXPORTS //

module.exports = negalucasf;
