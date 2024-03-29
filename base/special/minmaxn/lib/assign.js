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

var isNegativeZero = require( './../../../../base/assert/is-negative-zero' );
var isPositiveZero = require( './../../../../base/assert/is-positive-zero' );
var isnan = require( './../../../../base/assert/is-nan' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Returns the minimum and maximum values and assigns results to a provided output array.
*
* @private
* @param {number} [x] - first number
* @param {number} [y] - second number
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array index offset
* @returns {Collection} minimum and maximum values
*
* @example
* var out = [ 0.0, 0.0 ];
* var v = minmaxn( 3.14, 4.2, out, 1, 0 );
* // returns [ 3.14, 4.2 ]
*
* var bool = ( v === out );
* // returns true
*
* @example
* var out = [ 0.0, 0.0 ];
* var v = minmaxn( 5.9, 3.14, 4.2, out, 1, 0 );
* // returns [ 3.14, 5.9 ]
*
* @example
* var out = [ 0.0, 0.0 ];
* var v = minmaxn( 3.14, NaN, out, 1, 0 );
* // returns [ NaN, NaN ]
*
* @example
* var out = [ 0.0, 0.0 ];
* var v = minmaxn( +0.0, -0.0, out, 1, 0 );
* // returns [ -0.0, 0.0 ]
*/
function minmaxn( x, y, out, stride, offset ) {
	var len;
	var min;
	var max;
	var v;
	var i;

	len = arguments.length;

	out = arguments[ len - 3 ];
	stride = arguments[ len - 2 ];
	offset = arguments[ len - 1 ];

	if ( len === 4 ) {
		out[ offset ] = x;
		out[ offset + stride ] = x;
		return out;
	}
	if ( len === 5 ) {
		if ( isnan( x ) || isnan( y ) ) {
			out[ offset ] = NaN;
			out[ offset + stride ] = NaN;
			return out;
		}
		if ( x === y && x === 0.0 ) {
			if ( isNegativeZero( x ) ) {
				out[ offset ] = x;
				out[ offset + stride ] = y;
				return out;
			}
			out[ offset ] = y;
			out[ offset + stride ] = x;
			return out;
		}
		if ( x < y ) {
			out[ offset ] = x;
			out[ offset + stride ] = y;
			return out;
		}
		out[ offset ] = y;
		out[ offset + stride ] = x;
		return out;
	}
	min = PINF;
	max = NINF;
	for ( i = 0; i < len - 3; i++ ) {
		v = arguments[ i ];
		if ( isnan( v ) ) {
			out[ offset ] = NaN;
			out[ offset + stride ] = NaN;
			return out;
		}
		if ( v < min ) {
			min = v;
		} else if (
			v === 0.0 &&
			v === min &&
			isNegativeZero( v )
		) {
			min = v;
		}
		if ( v > max ) {
			max = v;
		} else if (
			v === 0.0 &&
			v === max &&
			isPositiveZero( v )
		) {
			max = v;
		}
	}
	out[ offset ] = min;
	out[ offset + stride ] = max;
	return out;
}


// EXPORTS //

module.exports = minmaxn;
