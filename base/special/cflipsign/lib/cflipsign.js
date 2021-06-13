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

var isNegativeZero = require( './../../../../base/assert/is-negative-zero' );


// MAIN //

/**
* Returns a complex number with the same magnitude as `z` and the sign of `y*z`.
*
* @private
* @param {(Array|TypedArray|Object)} out - output array
* @param {number} re - real component
* @param {number} im - imaginary component
* @param {number} y - number from which to derive the sign
* @returns {(Array|TypedArray|Object)} function result
*
* @example
* var out = new Array( 2 );
*
* var v = cflipsign( out, -4.2, 5.5, 55 );
* // returns [ -4.2, 5.5 ]
*
* var bool = ( v === out );
* // returns true
*
* @example
* var out = new Array( 2 );
* var v = cflipsign( out, 0.0, 0.0, -8 );
* // returns [ -0.0, -0.0 ]
*
* @example
* var out = new Array( 2 );
* var v = cflipsign( out, NaN, NaN, 9 );
* // returns [ NaN, NaN ]
*/
function cflipsign( out, re, im, y ) {
	if ( y < 0 || isNegativeZero( y ) ) {
		re = -re;
		im = -im;
	}
	out[ 0 ] = re;
	out[ 1 ] = im;
	return out;
}


// EXPORTS //

module.exports = cflipsign;
