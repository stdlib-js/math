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

var sindf = require( './../../../../base/special/sindf' );
var cosdf = require( './../../../../base/special/cosdf' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Computes the cotangent of a single-precision floating-point number (in degrees).
*
* @param {number} x - input value (in degrees)
* @returns {number} cotangent
*
* @example
* var v = cotdf( 0.0 );
* // returns Infinity
*
* @example
* var v = cotdf( 45.0 );
* // returns 1.0
*
* @example
* var v = cotdf( 90.0 );
* // returns 0.0
*
* @example
* var v = cotdf( 60.0 );
* // returns ~0.58
*
* @example
* var v = cotdf( NaN );
* // returns NaN
*/
function cotdf( x ) {
	x = f32( x );
	return f32( cosdf( x ) / sindf( x ) );
}


// EXPORTS //

module.exports = cotdf;
