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

var cabs = require( './../../../../base/special/cabs' );
var cphase = require( './../../../../base/special/cphase' );


// MAIN //

/**
* Computes the absolute value and the phase of a complex number.
*
* @private
* @param {(Array|TypedArray|Object)} out - output array
* @param {number} re - real component
* @param {number} im - imaginary component
* @returns {(Array|TypedArray|Object)} absolute value and phase (in radians)
*
* @example
* var out = new Array( 2 );
*
* var o = cpolar( out, 5.0, 3.0 );
* // returns [ ~5.83, ~0.5404 ]
*
* var bool = ( o === out );
* // returns true
*/
function cpolar( out, re, im ) {
	out[ 0 ] = cabs( re, im );
	out[ 1 ] = cphase( re, im );
	return out;
}


// EXPORTS //

module.exports = cpolar;
