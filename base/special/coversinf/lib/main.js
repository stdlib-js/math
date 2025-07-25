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

var sinf = require( './../../../../base/special/sinf' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Computes the coversed sine of a single-precision floating-point number (in radians).
*
* @param {number} x - input value (in radians)
* @returns {number} coversed sine
*
* @example
* var v = coversinf( 0.0 );
* // returns 1.0
*
* @example
* var v = coversinf( 3.141592653589793/2.0 );
* // returns 0.0
*
* @example
* var v = coversinf( -3.141592653589793/6.0 );
* // returns 1.5
*
* @example
* var v = coversinf( NaN );
* // returns NaN
*/
function coversinf( x ) {
	return f32( f32( 1.0 ) - sinf( f32( x ) ) );
}


// EXPORTS //

module.exports = coversinf;
