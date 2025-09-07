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
var gcdf = require( './../../../../base/special/gcdf' );


// MAIN //

/**
* Computes the least common multiple (lcm) of two single-precision floating-point numbers.
*
* @param {integer} a - integer
* @param {integer} b - integer
* @returns {integer} least common multiple
*
* @example
* var v = lcmf( 21, 6 );
* // returns 42
*
* @example
* var v = lcmf( 3.14, 6 );
* // returns NaN
*
* @example
* var v = lcmf( NaN, 6 );
* // returns NaN
*/
function lcmf( a, b ) {
	var d;
	if ( a === 0 || b === 0 ) {
		return 0;
	}
	if ( a < 0 ) {
		a = -a;
	}
	if ( b < 0 ) {
		b = -b;
	}

	// Note: we rely on `gcdf` to perform further argument validation...
	d = gcdf( a, b );
	if ( isnanf( d ) ) {
		return d;
	}
	return ( a / d ) * b;
}


// EXPORTS //

module.exports = lcmf;
