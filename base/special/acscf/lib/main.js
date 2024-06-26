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

var asinf = require( './../../../../base/special/asinf' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Computes the arccosecant of a single-precision floating-point number.
*
* ## Method
*
* ```text
* \operatorname{acscf}(x) = \operatorname{asinf}(\frac{1}{x})
* ```
*
* @param {number} x - input value
* @returns {number} arccosecant (in radians)
*
* @example
* var v = acscf( 1.0 );
* // returns ~1.57
*
* @example
* var v = acscf( 3.141592653589793 );
* // returns ~0.32
*
* @example
* var v = acscf( -3.141592653589793 );
* // returns ~-0.32
*
* @example
* var v = acscf( NaN );
* // returns NaN
*/
function acscf( x ) {
	return asinf( float64ToFloat32( 1.0 / float64ToFloat32( x ) ) );
}


// EXPORTS //

module.exports = acscf;
