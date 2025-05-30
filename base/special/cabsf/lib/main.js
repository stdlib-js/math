/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var hypotf = require( './../../../../base/special/hypotf' );
var real = require( '@stdlib/complex/float32/real' );
var imag = require( '@stdlib/complex/float32/imag' );


// MAIN //

/**
* Computes the absolute value of a single-precision complex floating-point number.
*
* @param {Complex64} z - complex number
* @returns {number} absolute value
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var v = cabsf( new Complex64( 5.0, 3.0 ) );
* // returns ~5.83
*/
function cabsf( z ) {
	return hypotf( real( z ), imag( z ) );
}


// EXPORTS //

module.exports = cabsf;
