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
var isNonnegativeIntegerf = require( './../../../../base/assert/is-nonnegative-integerf' );
var FLOAT32_MAX_SAFE_NTH_TRIBONACCI = require( '@stdlib/constants/float32/max-safe-nth-tribonacci' ); // eslint-disable-line id-length
var TRIBONACCIF = require( './tribonaccif.json' );


// MAIN //

/**
* Computes the nth Tribonacci number as a single-precision floating-point number.
*
* @param {NonNegativeInteger} n - the Tribonacci number to compute
* @returns {NonNegativeInteger} Tribonacci number
*
* @example
* var y = tribonaccif( 0 );
* // returns 0
*
* @example
* var y = tribonaccif( 1 );
* // returns 0
*
* @example
* var y = tribonaccif( 2 );
* // returns 1
*
* @example
* var y = tribonaccif( 3 );
* // returns 1
*
* @example
* var y = tribonaccif( 4 );
* // returns 2
*
* @example
* var y = tribonaccif( 5 );
* // returns 4
*
* @example
* var y = tribonaccif( 6 );
* // returns 7
*
* @example
* var y = tribonaccif( NaN );
* // returns NaN
*
* @example
* var y = tribonaccif( 3.14 );
* // returns NaN
*
* @example
* var y = tribonaccif( -1.0 );
* // returns NaN
*/
function tribonaccif( n ) {
	if (
		isnanf( n ) ||
		!isNonnegativeIntegerf( n ) ||
		n > FLOAT32_MAX_SAFE_NTH_TRIBONACCI
	) {
		return NaN;
	}
	return TRIBONACCIF[ n ];
}


// EXPORTS //

module.exports = tribonaccif;
