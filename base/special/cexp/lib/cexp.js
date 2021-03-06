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

var copysign = require( './../../../../base/special/copysign' );
var sincos = require( './../../../../base/special/sincos' );
var isnan = require( './../../../../base/assert/is-nan' );
var isInfinite = require( './../../../../base/assert/is-infinite' );
var exp = require( './../../../../base/special/exp' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// MAIN //

/**
* Computes the exponential function of a complex number.
*
* @private
* @param {(Array|TypedArray|Object)} out - output array
* @param {number} re - real component
* @param {number} im - imaginary component
* @returns {(Array|TypedArray|Object)} output array
*
* @example
* var out = [ 0.0, 0.0 ];
*
* var v = cexp( out, 0.0, 1.0 );
* // returns [ ~0.540, ~0.841 ]
*
* var bool = ( v === out );
* // returns true
*/
function cexp( out, re, im ) {
	var tmp;
	var e;
	if ( isnan( re ) ) {
		out[ 0 ] = NaN;
		out[ 1 ] = ( im === 0.0 ) ? im : re;
	} else if ( isInfinite( im ) ) {
		if ( re === PINF ) {
			out[ 0 ] = -re;
			out[ 1 ] = NaN;
		} else if ( re === NINF ) {
			out[ 0 ] = -0.0;
			out[ 1 ] = copysign( 0.0, im );
		} else {
			out[ 0 ] = NaN;
			out[ 1 ] = NaN;
		}
	} else {
		e = exp( re );
		if ( im === 0.0 ) {
			out[ 0 ] = e;
			out[ 1 ] = im;
		} else {
			sincos( out, im );
			tmp = out[ 0 ];
			out[ 0 ] = out[ 1 ] * e;
			out[ 1 ] = tmp * e;
		}
	}
	return out;
}


// EXPORTS //

module.exports = cexp;
