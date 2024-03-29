/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var isnan = require( './../../../../base/assert/is-nan' );
var isInteger = require( './../../../../base/assert/is-integer' );
var ln = require( './../../../../base/special/ln' );
var round = require( './../../../../base/special/round' );
var PHI = require( '@stdlib/constants/float64/phi' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// VARIABLES //

var SQRT_5 = 2.23606797749979;
var LN_PHI = ln( PHI );


// MAIN //

/**
* Computes the Fibonacci number index.
*
* ## Notes
*
* -   We use `round` instead of `floor` due to errors introduced by floating-point precision.
*
* @param {NonNegativeInteger} F - Fibonacci number
* @returns {NonNegativeInteger} Fibonacci number index
*
* @example
* var n = fibonacciIndex( 0 );
* // returns NaN
*
* @example
* var n = fibonacciIndex( 1 );
* // returns NaN
*
* @example
* var n = fibonacciIndex( 2 );
* // returns 3
*
* @example
* var n = fibonacciIndex( 3 );
* // returns 4
*
* @example
* var n = fibonacciIndex( 5 );
* // returns 5
*
* @example
* var n = fibonacciIndex( 8 );
* // returns 6
*
* @example
* var n = fibonacciIndex( NaN );
* // returns NaN
*
* @example
* var n = fibonacciIndex( 3.14 );
* // returns NaN
*
* @example
* var n = fibonacciIndex( -1 );
* // returns NaN
*/
function fibonacciIndex( F ) {
	var x;
	if (
		isnan( F ) ||
		isInteger( F ) === false ||
		F <= 1 ||
		F === PINF
	) {
		return NaN;
	}
	x = ( F*SQRT_5 ) + 0.5;
	return round( ln( x ) / LN_PHI );
}


// EXPORTS //

module.exports = fibonacciIndex;
