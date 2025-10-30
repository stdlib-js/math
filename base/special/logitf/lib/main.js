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

var isProbabilityf = require( './../../../../base/assert/is-probabilityf' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var lnf = require( './../../../../base/special/lnf' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );


// MAIN //

/**
* Computes the logit function for a single-precision floating-point number.
*
* @param {Probability} p - input value
* @returns {number} function value
*
* @example
* var y = logitf( 0.2 );
* // returns ~-1.386
*
* @example
* var y = logitf( 0.9 );
* // returns ~2.197
*
* @example
* var y = logitf( -4.0 );
* // returns NaN
*
* @example
* var y = logitf( 1.5 );
* // returns NaN
*
* @example
* var y = logitf( NaN );
* // returns NaN
*/
function logitf( p ) {
	if ( isnanf( p ) ) {
		return p;
	}
	if ( !isProbabilityf( p ) ) {
		return NaN;
	}
	if ( p === 0.0 ) {
		return NINF;
	}
	if ( p === 1.0 ) {
		return PINF;
	}
	return lnf( float64ToFloat32( p / float64ToFloat32( 1.0-p ) ) );
}


// EXPORTS //

module.exports = logitf;
