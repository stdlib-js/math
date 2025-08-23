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
var isEvenf = require( './../../../../base/assert/is-evenf' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var FLOAT32_MAX_NTH_DOUBLE_FACTORIAL = require( '@stdlib/constants/float32/max-nth-double-factorial' ); // eslint-disable-line id-length


// MAIN //

/**
* Evaluates the double factorial of `n` as a single-precision floating-point number.
*
* @param {number} n - input value
* @returns {(NonNegativeInteger|number)} double factorial
*
* @example
* var v = factorial2f( 3 );
* // returns 3
*
* @example
* var v = factorial2f( 4 );
* // returns 8
*
* @example
* var v = factorial2f( 57 );
* // returns Infinity
*
* @example
* var v = factorial2f( -10 );
* // returns NaN
*
* @example
* var v = factorial2f( NaN );
* // returns NaN
*/
function factorial2f( n ) {
	var last;
	var out;
	var v;
	var i;

	if ( isnanf( n ) ) {
		return NaN;
	}
	if ( n > FLOAT32_MAX_NTH_DOUBLE_FACTORIAL ) {
		return PINF;
	}
	if ( n < 0 || isIntegerf( n ) === false ) {
		return NaN;
	}
	v = n|0; // asm type annotation
	if ( v === 0|0 || v === 1|0 ) {
		return 1|0; // asm type annotation
	}
	if ( isEvenf( v ) ) {
		last = 2|0; // asm type annotation
	} else {
		last = 3|0; // asm type annotation
	}
	out = float64ToFloat32( 1 );
	for ( i = v|0; i >= last; i -= 2|0 ) {
		out = float64ToFloat32( out * i );
	}
	return out;
}


// EXPORTS //

module.exports = factorial2f;
