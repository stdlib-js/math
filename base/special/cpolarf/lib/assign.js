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

var cphasef = require( './../../../../base/special/cphasef' );
var cabsf = require( './../../../../base/special/cabsf' );


// MAIN //

/**
* Computes the absolute value and the phase of a single-precision complex floating-point number.
*
* @param {Complex64} z - complex number
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array index offset
* @returns {Collection} absolute value and phase (in radians)
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var o = cpolarf( new Complex64( 5.0, 3.0 ), [ 0.0, 0.0 ], 1, 0 );
* // returns [ ~5.83, ~0.5404 ]
*/
function cpolarf( z, out, stride, offset ) {
	out[ offset ] = cabsf( z );
	out[ offset+stride ] = cphasef( z );
	return out;
}


// EXPORTS //

module.exports = cpolarf;
