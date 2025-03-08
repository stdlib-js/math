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
var PINF = require( '@stdlib/constants/float32/pinf' );


// MAIN //

/**
* Evaluates the Dirac delta function for a single-precision floating-point number.
*
* @param {number} x - input value
* @returns {number} function value
*
* @example
* var v = diracDeltaf( 0.0 );
* // returns Infinity
*
* @example
* var v = diracDeltaf( 3.14 );
* // returns 0.0
*
* @example
* var v = diracDeltaf( NaN );
* // returns NaN
*/
function diracDeltaf( x ) {
	if ( isnanf( x ) ) {
		return NaN;
	}
	if ( x === 0.0 ) {
		return PINF;
	}
	return 0.0;
}


// EXPORTS //

module.exports = diracDeltaf;
