/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var Complex128 = require( '@stdlib/complex/float64' );
var real = require( '@stdlib/complex/real' );
var imag = require( '@stdlib/complex/imag' );
var cabs = require( './../../../../base/special/cabs' );


// MAIN //

/**
* Evaluates the signum function of a double-precision floating-point complex number.
*
* @param {Complex128} z - complex number
* @returns {Complex128} result
*
* @example
* var Complex128 = require( '@stdlib/complex/float64' );
* var real = require( '@stdlib/complex/real' );
* var imag = require( '@stdlib/complex/imag' );
*
* var v = csignum( new Complex128( -4.2, 5.5 ) );
* // returns <Complex128>
*
* var re = real( v );
* // returns -0.6069136033622302
*
* var im = imag( v );
* // returns 0.79476781392673
*
* v = csignum( new Complex128( 0.0, 0.0 ) );
* // returns <Complex128>
*
* re = real( v );
* // returns -0.0
*
* im = imag( v );
* // returns 0.0
*
* v = csignum( new Complex128( NaN, NaN ) );
* // returns <Complex128>
*
* re = real( v );
* // returns NaN
*
* im = imag( v );
* // returns NaN
*/
function csignum( z ) {
	var re;
	var im;
	var az;

	az = cabs( z );
	if ( az === 0.0 ) {
		return z;
	}
	re = real( z ) / az;
	im = imag( z ) / az;
	return new Complex128( re, im );
}


// EXPORTS //

module.exports = csignum;
