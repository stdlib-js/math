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

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var cbrt = require( './../../../../base/special/cbrt' );


// MAIN //

/**
* Computes the reciprocal cube root of a single-precision floating-point number.
*
* @param {number} x - input value
* @returns {number} reciprocal cube root
*
* @example
* var v = rcbrtf( 8.0 );
* // returns 0.5
*
* @example
* var v = rcbrtf( 1000.0 );
* // returns ~0.1
*
* @example
* var v = rcbrtf( 0.0 );
* // returns Infinity
*
* @example
* var v = rcbrtf( Infinity );
* // returns 0.0
*
* @example
* var v = rcbrtf( -8.0 );
* // returns -0.5
*
* @example
* var v = rcbrtf( NaN );
* // returns NaN
*/
function rcbrtf( x ) {
	// As the cube root is a fundamental numerical operation, compute in extend precision in order to avoid precision loss:
	return float64ToFloat32( 1.0 / cbrt( float64ToFloat32( x ) ) );
}


// EXPORTS //

module.exports = rcbrtf;
