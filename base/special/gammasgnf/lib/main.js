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

var isnanf = require( './../../../../base/assert/is-nanf' );
var floorf = require( './../../../../base/special/floorf' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Computes the sign of the gamma function for a single-precision floating-point number.
*
* @param {number} x - input value
* @returns {number} sign of the gamma function
*
* @example
* var v = gammasgnf( 1.0 );
* // returns 1.0
*
* v = gammasgnf( -2.5 );
* // returns -1.0
*
* v = gammasgnf( 0.0 );
* // returns 0.0
*
* v = gammasgnf( NaN );
* // returns NaN
*/
function gammasgnf( x ) {
	var fx;

	if ( isnanf( x ) ) {
		return NaN;
	}
	if ( x > 0.0 ) {
		return 1.0;
	}
	fx = floorf( x );
	if ( x === fx ) {
		return 0.0;
	}
	fx = float64ToFloat32( fx / 2.0 );
	if ( fx === floorf( fx ) ) {
		return 1.0;
	}
	return -1.0;
}


// EXPORTS //

module.exports = gammasgnf;
