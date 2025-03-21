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
var lnf = require( './../../../../base/special/lnf' );
var floorf = require( './../../../../base/special/floorf' );
var PHI = require( '@stdlib/constants/float32/phi' );
var PINF = require( '@stdlib/constants/float32/pinf' );


// VARIABLES //

var SQRT_5 = 2.23606797749979;
var LN_PHI = lnf( PHI );


// MAIN //

/**
* Computes the nth non-Fibonacci single-precision floating-point number.
*
* ## References
*
* -   Gould, H.W. 1965. "Non-Fibonacci Numbers." _Fibonacci Quarterly_, no. 3: 177–83. <http://www.fq.math.ca/Scanned/3-3/gould.pdf>.
* -   Farhi, Bakir. 2011. "An explicit formula generating the non-Fibonacci numbers." _arXiv_ abs/1105.1127 \[Math.NT\] (May): 1–5. <https://arxiv.org/abs/1105.1127>.
*
* @param {NonNegativeInteger} n - the non-Fibonacci number to compute
* @returns {NonNegativeInteger} non-Fibonacci number
*
* @example
* var v = nonfibonaccif( 1 );
* // returns 4
*
* @example
* var v = nonfibonaccif( 2 );
* // returns 6
*
* @example
* var v = nonfibonaccif( 3 );
* // returns 7
*
* @example
* var v = nonfibonaccif( NaN );
* // returns NaN
*
* @example
* var v = nonfibonaccif( 3.14 );
* // returns NaN
*
* @example
* var v = nonfibonaccif( -1 );
* // returns NaN
*/
function nonfibonaccif( n ) {
	var a;
	var b;
	if (
		isnanf( n ) ||
		isIntegerf( n ) === false ||
		n < 1 ||
		n === PINF
	) {
		return NaN;
	}
	n += 1;
	a = lnf( n * SQRT_5 ) / LN_PHI;
	b = lnf( ( SQRT_5 * ( n + a ) ) - 5.0 + ( 3.0 / n ) ) / LN_PHI;
	return floorf( n + b - 2.0 );
}


// EXPORTS //

module.exports = nonfibonaccif;
