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

var absf = require( './../../../../base/special/absf' );
var maxf = require( './../../../../base/special/maxf' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Returns the maximum absolute single-precision floating-point number.
*
* @param {number} x - first number
* @param {number} y - second number
* @returns {number} maximum absolute value
*
* @example
* var v = maxabsf( 3.14, -4.2 );
* // returns ~4.2
*
* @example
* var v = maxabsf( 3.14, NaN );
* // returns NaN
*
* @example
* var v = maxabsf( +0.0, -0.0 );
* // returns +0.0
*/
function maxabsf( x, y ) {
	return maxf( absf( float64ToFloat32( x ) ), absf( float64ToFloat32( y ) ) );
}


// EXPORTS //

module.exports = maxabsf;
