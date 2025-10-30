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
var absf = require( './../../../../base/special/absf' );
var MAX_FIBONACCI = require( '@stdlib/constants/float32/max-safe-nth-fibonacci' );
var NEGAFIBONACCIF = require( './negafibonaccif.json' );


// MAIN //

/**
* Computes the nth negaFibonacci number as a single-precision floating-point number.
*
* @param {NonPositiveInteger} n - the negaFibonacci number to compute
* @returns {integer} negaFibonacci number
*
* @example
* var y = negafibonaccif( 0 );
* // returns 0
*
* @example
* var y = negafibonaccif( -1 );
* // returns 1
*
* @example
* var y = negafibonaccif( -2 );
* // returns -1
*
* @example
* var y = negafibonaccif( -3 );
* // returns 2
*
* @example
* var y = negafibonaccif( -4 );
* // returns -3
*
* @example
* var y = negafibonaccif( -5 );
* // returns 5
*
* @example
* var y = negafibonaccif( -6 );
* // returns -8
*
* @example
* var y = negafibonaccif( NaN );
* // returns NaN
*
* @example
* var y = negafibonaccif( -3.14 );
* // returns NaN
*/
function negafibonaccif( n ) {
	var an;
	if (
		isnanf( n ) ||
		isIntegerf( n ) === false ||
		n > 0
	) {
		return NaN;
	}
	an = absf( n );
	if ( an > MAX_FIBONACCI ) {
		return NaN;
	}
	return NEGAFIBONACCIF[ an ];
}


// EXPORTS //

module.exports = negafibonaccif;
