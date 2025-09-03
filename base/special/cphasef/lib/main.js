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

var atan2f = require( './../../../../base/special/atan2f' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );


// MAIN //

/**
* Computes the argument of a single-precision complex floating-point number in radians.
*
* @param {Complex64} z - complex number
* @returns {number} argument
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var phi = cphasef( new Complex64( 5.0, 3.0 ) );
* // returns ~0.5404
*/
function cphasef( z ) {
	return atan2f( imagf( z ), realf( z ) );
}


// EXPORTS //

module.exports = cphasef;
