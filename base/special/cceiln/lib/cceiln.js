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

var ceiln = require( './../../../../base/special/ceiln' );


// MAIN //

/**
* Rounds a complex number to the nearest multiple of `10^n` toward positive infinity.
*
* @private
* @param {(Array|TypedArray|Object)} out - output array
* @param {number} re - real component
* @param {number} im - imaginary component
* @param {integer} n - integer power of 10
* @returns {(Array|TypedArray|Object)} output array
*
* @example
* var out = [ 0.0, 0.0 ];
* var v = cceiln( out, -3.141592653589793, 3.141592653589793, -2 );
* // returns [ -3.14, 3.15 ]
*
* @example
* var out = [ 0.0, 0.0 ];
* var v = cceiln( out, 9.99999, 0.1, 0 );
* // returns [ 10.0, 1.0 ]
*
* @example
* var out = [ 0.0, 0.0 ];
* var v = cceiln( out, 0.0, 0.0, -2 );
* // returns [ 0.0, 0.0 ]
*
* @example
* var out = [ 0.0, 0.0 ];
* var v = cceiln( out, NaN, NaN, -2 );
* // returns [ NaN, NaN ]
*/
function cceiln( out, re, im, n ) {
	out[ 0 ] = ceiln( re, n );
	out[ 1 ] = ceiln( im, n );
	return out;
}


// EXPORTS //

module.exports = cceiln;
