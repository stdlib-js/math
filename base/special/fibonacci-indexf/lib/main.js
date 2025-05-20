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
var lnf = require( './../../../../base/special/lnf' );
var roundf = require( './../../../../base/special/roundf' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var PHI = require( '@stdlib/constants/float32/phi' );
var PINF = require( '@stdlib/constants/float32/pinf' );


// VARIABLES //

var ONE_HALF = float64ToFloat32( 0.5 );
var SQRT_5 = float64ToFloat32( 2.23606797749979 );
var LN_PHI = lnf( PHI );


// MAIN //

/**
* Computes the Fibonacci number index of a single-precision floating-point number.
*
* ## Notes
*
* -   We use `roundf` instead of `floorf` due to errors introduced by floating-point precision.
*
* @param {NonNegativeInteger} F - Fibonacci number
* @returns {NonNegativeInteger} Fibonacci number index
*
* @example
* var n = fibonacciIndexf( 0 );
* // returns NaN
*
* @example
* var n = fibonacciIndexf( 1 );
* // returns NaN
*
* @example
* var n = fibonacciIndexf( 2 );
* // returns 3
*
* @example
* var n = fibonacciIndexf( 3 );
* // returns 4
*
* @example
* var n = fibonacciIndexf( 5 );
* // returns 5
*
* @example
* var n = fibonacciIndexf( 8 );
* // returns 6
*
* @example
* var n = fibonacciIndexf( NaN );
* // returns NaN
*
* @example
* var n = fibonacciIndexf( 3.14 );
* // returns NaN
*
* @example
* var n = fibonacciIndexf( -1 );
* // returns NaN
*/
function fibonacciIndexf( F ) {
	var x;
	if (
		isnanf( F ) ||
		isIntegerf( F ) === false ||
		F <= 1 ||
		F === PINF
	) {
		return NaN;
	}
	x = float64ToFloat32( float64ToFloat32( F*SQRT_5 ) + ONE_HALF );
	return roundf( float64ToFloat32( lnf( x ) / LN_PHI ) );
}


// EXPORTS //

module.exports = fibonacciIndexf;
