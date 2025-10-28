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

var Complex64 = require( '@stdlib/complex/float32/ctor' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var real = require( '@stdlib/complex/float32/real' );
var imag = require( '@stdlib/complex/float32/imag' );
var cabsf = require( './../../../../base/special/cabsf' );


// MAIN //

/**
* Evaluates the signum function of a single-precision floating-point complex number.
*
* @param {Complex64} z - complex number
* @returns {Complex64} result
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var real = require( '@stdlib/complex/float32/real' );
* var imag = require( '@stdlib/complex/float32/imag' );
*
* var v = csignumf( new Complex64( -4.2, 5.5 ) );
* // returns <Complex64>
*
* var re = real( v );
* // returns ~-0.607
*
* var im = imag( v );
* // returns ~0.795
*
* v = csignumf( new Complex64( 0.0, 0.0 ) );
* // returns <Complex64>
*
* re = real( v );
* // returns 0.0
*
* im = imag( v );
* // returns 0.0
*
* v = csignumf( new Complex64( NaN, NaN ) );
* // returns <Complex64>
*
* re = real( v );
* // returns NaN
*
* im = imag( v );
* // returns NaN
*/
function csignumf( z ) {
	var re;
	var im;
	var az;

	az = cabsf( z );
	if ( az === 0.0 ) {
		return z;
	}
	re = float64ToFloat32( real( z ) / az );
	im = float64ToFloat32( imag( z ) / az );
	return new Complex64( re, im );
}


// EXPORTS //

module.exports = csignumf;
