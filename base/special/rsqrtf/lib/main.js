/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var sqrt = require( './../../../../base/special/sqrt' );


// MAIN //

/**
* Compute the reciprocal square root of a single-precision floating-point number.
*
* @param {number} x - input value
* @returns {number} reciprocal square root
*
* @example
* var v = rsqrtf( 4.0 );
* // returns 0.5
*
* @example
* var v = rsqrtf( 0.0 );
* // returns Infinity
*
* @example
* var v = rsqrtf( Infinity );
* // returns 0.0
*
* @example
* var v = rsqrtf( -4.0 );
* // returns NaN
*
* @example
* var v = rsqrtf( NaN );
* // returns NaN
*/
function rsqrtf( x ) {
	// As the square root is a fundamental numerical operation, compute in extended precision in order to avoid precision loss:
	return float64ToFloat32( 1.0 / sqrt( float64ToFloat32( x ) ) );
}


// EXPORTS //

module.exports = rsqrtf;
