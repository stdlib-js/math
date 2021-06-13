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

var ceil = require( './../../../../base/special/ceil' );


// MAIN //

/**
* Rounds a complex number toward positive infinity.
*
* @private
* @param {(Array|TypedArray|Object)} out - output array
* @param {number} re - real component
* @param {number} im - imaginary component
* @returns {(Array|TypedArray|Object)} output array
*
* @example
* var out = [ 0.0, 0.0 ];
* var v = cceil( out, -4.2, 5.5 );
* // returns [ -4.0, 6.0 ]
*
* @example
* var out = [ 0.0, 0.0 ];
* var v = cceil( out, 9.99999, 0.1 );
* // returns [ 10.0, 1.0 ]
*
* @example
* var out = [ 0.0, 0.0 ];
* var v = cceil( out, 0.0, 0.0 );
* // returns [ 0.0, 0.0 ]
*
* @example
* var out = [ 0.0, 0.0 ];
* var v = cceil( out, NaN, NaN );
* // returns [ NaN, NaN ]
*/
function cceil( out, re, im ) {
	out[ 0 ] = ceil( re );
	out[ 1 ] = ceil( im );
	return out;
}


// EXPORTS //

module.exports = cceil;
