/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var isEven = require( './../../../../base/assert/is-even' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var FLOAT64_MAX_NTH_DOUBLE_FACTORIAL = require( '@stdlib/constants/float64/max-nth-double-factorial' ); // eslint-disable-line id-length


// MAIN //

/**
* Evaluates the double factorial of `n`.
*
* @param {number} n - input value
* @returns {(NonNegativeInteger|number)} double factorial
*
* @example
* var v = factorial2( 3 );
* // returns 3
*
* @example
* var v = factorial2( 4 );
* // returns 8
*
* @example
* var v = factorial2( 5 );
* // returns 15
*
* @example
* var v = factorial2( 301 );
* // returns Infinity
*/
function factorial2( n ) {
	var last;
	var out;
	var v;
	var i;
	if ( isnan( n ) ) {
		return NaN;
	}
	if ( n > FLOAT64_MAX_NTH_DOUBLE_FACTORIAL ) {
		return PINF;
	}
	if ( n < 0 || isInteger( n ) === false ) {
		return NaN;
	}
	v = n|0; // asm type annotation
	if ( v === 0|0 || v === 1|0 ) {
		return 1|0; // asm type annotation
	}
	if ( isEven( v ) ) {
		last = 2|0; // asm type annotation
	} else {
		last = 3|0; // asm type annotation
	}
	out = 1;
	for ( i = v|0; i >= last; i -= 2|0 ) {
		out *= i|0; // asm type annotation
	}
	return out;
}


// EXPORTS //

module.exports = factorial2;
