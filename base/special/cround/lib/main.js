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

var Complex128 = require( '@stdlib/complex/float64/ctor' );
var round = require( './../../../../base/special/round' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );


// MAIN //

/**
* Rounds each component of a double-precision complex floating-point number to the nearest integer.
*
* @param {Complex128} z - complex number
* @returns {Complex128} rounded complex number
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var v = cround( new Complex128( -4.2, 5.5 ) );
* // returns <Complex128>
*
* var re = real( v );
* // returns -4
*
* var im = imag( v );
* // returns 6.0
*
* v = cround( new Complex128( 9.99999, 0.1 ) );
* // returns <Complex128>
*
* re = real( v );
* // returns 10.0
*
* im = imag( v );
* // returns 0.0
*
* v = cround( new Complex128( 0.0, 0.0 ) );
* // returns <Complex128>
*
* re = real( v );
* // returns 0.0
*
* im = imag( v );
* // returns 0.0
*
* v = cround( new Complex128( NaN, NaN ) );
* // returns <Complex128>
*
* re = real( v );
* // returns NaN
*
* im = imag( v );
* // returns NaN
*/
function cround( z ) {
	return new Complex128( round( real( z ) ), round( imag( z ) ) );
}


// EXPORTS //

module.exports = cround;
