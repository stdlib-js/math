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

var isnan = require( './../../../../base/assert/is-nan' );
var isInfinite = require( './../../../../base/assert/is-infinite' );
var pow = require( './../../../../base/special/pow' );
var floor = require( './../../../../base/special/floor' );
var ceil = require( './../../../../base/special/ceil' );
var log2 = require( './../../../../base/special/log2' );
var MAX_EXP = require( '@stdlib/constants/float64/max-base2-exponent' );
var MIN_EXP_SUBNORMAL = require( '@stdlib/constants/float64/min-base2-exponent-subnormal' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Rounds a numeric value to the nearest power of two toward positive infinity.
*
* @param {number} x - input value
* @returns {number} rounded value
*
* @example
* var v = ceil2( 3.141592653589793 );
* // returns 4.0
*
* @example
* var v = ceil2( 9.0 );
* // returns 16.0
*
* @example
* var v = ceil2( -0.314 );
* // returns -0.25
*/
function ceil2( x ) {
	var sign;
	var p;
	if (
		isnan( x ) ||
		isInfinite( x ) ||
		x === 0.0
	) {
		return x;
	}
	if ( x < 0 ) {
		x = -x;
		sign = -1.0;
	} else {
		sign = 1.0;
	}
	// Solve the equation `2^p = x` for `p`:
	p = log2( x );

	// If provided the smallest subnormal, no rounding possible:
	if ( p === MIN_EXP_SUBNORMAL ) {
		return x;
	}
	// Determine a power of two which rounds the input value toward positive infinity:
	if ( sign === -1.0 ) {
		p = floor( p );
	} else {
		p = ceil( p );
	}
	// Handle overflow:
	if ( p > MAX_EXP ) {
		return PINF;
	}
	return sign * pow( 2.0, p );
}


// EXPORTS //

module.exports = ceil2;
