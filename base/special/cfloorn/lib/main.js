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

var floorn = require( './../../../../base/special/floorn' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );


// MAIN //

/**
* Rounds each component of a double-precision complex floating-point number to the nearest multiple of `10^n` toward negative infinity.
*
* @param {Complex128} z - complex number
* @param {integer} n - integer power of 10
* @returns {Complex128} result
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* // Round components to 2 decimal places:
* var v = cfloorn( new Complex128( -3.141592653589793, 3.141592653589793 ), -2 );
* // returns <Complex128>
*
* var re = real( v );
* // returns -3.15
*
* var im = imag( v );
* // returns 3.14
*
* // If n = 0, `cfloorn` behaves like `cfloor`:
* v = cfloorn( new Complex128( 9.99999, 0.1 ), 0 );
* // returns <Complex128>
*
* re = real( v );
* // returns 9.0
*
* im = imag( v );
* // returns 0.0
*
* // Round components to the nearest thousand:
* v = cfloorn( new Complex128( 12368.0, -12368.0 ), 2 );
* // returns <Complex128>
*
* re = real( v );
* // returns 12300
*
* im = imag( v );
* // returns -12400
*
* v = cfloorn( new Complex128( NaN, NaN ), 2 );
* // returns <Complex128>
*
* re = real( v );
* // returns NaN
*
* im = imag( v );
* // returns NaN
*/
function cfloorn( z, n ) {
	return new Complex128( floorn( real( z ), n ), floorn( imag( z ), n ) );
}


// EXPORTS //

module.exports = cfloorn;
