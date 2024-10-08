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

var lnf = require( './../../../../base/special/lnf' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Computes the base `b` logarithm of a single-precision floating-point number.
*
* @param {NonNegativeNumber} x - input value
* @param {NonNegativeNumber} b - base
* @returns {number} logarithm (base `b`)
*
* @example
* var v = logf( 100.0, 10.0 );
* // returns 2.0
*
* @example
* var v = logf( 16.0, 2.0 );
* // returns 4.0
*
* @example
* var v = logf( 5.0, 1.0 );
* // returns Infinity
*
* @example
* var v = logf( NaN, 2.0 );
* // returns NaN
*
* @example
* var v = logf( 1.0, NaN );
* // returns NaN
*
* @example
* var v = logf( -4.0, 2.0 );
* // returns NaN
*
* @example
* var v = logf( 4.0, -2.0 );
* // returns NaN
*/
function logf( x, b ) {
	return float64ToFloat32( lnf( float64ToFloat32( x ) ) / lnf( float64ToFloat32( b ) ) );
}


// EXPORTS //

module.exports = logf;
