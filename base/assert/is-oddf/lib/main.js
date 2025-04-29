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

var isEvenf = require( './../../../../base/assert/is-evenf' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Tests if a finite single-precision floating-point number is an odd number.
*
* @param {number} x - value to test
* @returns {boolean} boolean indicating whether the value is an odd number
*
* @example
* var bool = isOddf( 5.0 );
* // returns true
*
* @example
* var bool = isOddf( -2.0 );
* // returns false
*
* @example
* var bool = isOddf( 0.0 );
* // returns false
*
* @example
* var bool = isOddf( NaN );
* // returns false
*/
function isOddf( x ) {
	// Check sign to prevent overflow...
	x = float64ToFloat32( x );
	if ( x > 0.0 ) {
		return isEvenf( float64ToFloat32( x - 1.0 ) );
	}
	return isEvenf( float64ToFloat32( x + 1.0 ) );
}


// EXPORTS //

module.exports = isOddf;
