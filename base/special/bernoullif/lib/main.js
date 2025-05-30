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

var isNonNegativeIntegerf = require( './../../../../base/assert/is-nonnegative-integerf' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var isOdd = require( './../../../../base/assert/is-odd' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var BERNOULLIF = require( './bernoullif.json' );


// VARIABLES //

var MAX_BERNOULLI = 64|0; // asm type annotation


// MAIN //

/**
* Computes the nth Bernoulli number as a single-precision floating-point number.
*
* @param {NonNegativeInteger} n - the Bernoulli number to compute
* @returns {number} Bernoulli number
*
* @example
* var y = bernoullif( 0 );
* // returns 1.0
*
* @example
* var y = bernoullif( 1 );
* // returns 0.5
*
* @example
* var y = bernoullif( 2 );
* // returns ~0.167
*
* @example
* var y = bernoullif( 3 );
* // returns 0.0
*
* @example
* var y = bernoullif( 4 );
* // returns ~-0.033
*
* @example
* var y = bernoullif( 5 );
* // returns 0.0
*
* @example
* var y = bernoullif( 20 );
* // returns ~-529.124
*
* @example
* var y = bernoullif( 66 );
* // returns Infinity
*
* @example
* var y = bernoullif( 68 );
* // returns -Infinity
*
* @example
* var y = bernoullif( NaN );
* // returns NaN
*/
function bernoullif( n ) {
	if ( isnanf( n ) || !isNonNegativeIntegerf( n ) ) {
		return NaN;
	}
	if ( n === 1 ) {
		return 0.5;
	}
	if ( isOdd( n ) ) {
		return 0.0;
	}
	if ( n > MAX_BERNOULLI ) {
		return ( (n/2)&1 ) ? PINF : NINF;
	}
	return float64ToFloat32( BERNOULLIF[ n/2 ] );
}


// EXPORTS //

module.exports = bernoullif;
