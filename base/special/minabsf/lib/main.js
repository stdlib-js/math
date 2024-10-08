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
var minf = require( './../../../../base/special/minf' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Returns the minimum absolute single-precision floating-point number.
*
* @param {number} x - first number
* @param {number} y - second number
* @returns {number} minimum absolute value
*
* @example
* var v = minabsf( -4.0, 3.0 );
* // returns 3.0
*
* @example
* var v = minabsf( 3.14, NaN );
* // returns NaN
*
* @example
* var v = minabsf( +0.0, -0.0 );
* // returns +0.0
*/
function minabsf( x, y ) {
	return minf( absf( float64ToFloat32( x ) ), absf( float64ToFloat32( y ) ) );
}


// EXPORTS //

module.exports = minabsf;
