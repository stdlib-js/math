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
var abs = require( './../../../../base/special/abs' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Returns the minimum and maximum absolute values.
*
* @private
* @param {number} [x] - first number
* @param {number} [y] - second number
* @param {Collection} out - output object
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array index offset
* @returns {Collection} minimum and maximum absolute values
*
* @example
* var out = [ 0.0, 0.0 ];
* var v = minmaxabsn( 3.14, 4.2, out, 1, 0 );
* // returns [ 3.14, 4.2 ]
*
* var bool = ( v === out );
* // returns true
*
* @example
* var out = [ 0.0, 0.0 ];
* var v = minmaxabsn( -5.9, 3.14, 4.2, out, 1, 0 );
* // returns [ 3.14, 5.9 ]
*
* @example
* var out = [ 0.0, 0.0 ];
* var v = minmaxabsn( 3.14, NaN, out, 1, 0 );
* // returns [ NaN, NaN ]
*
* @example
* var out = [ 0.0, 0.0 ];
* var v = minmaxabsn( +0.0, -0.0, out, 1, 0 );
* // returns [ 0.0, 0.0 ]
*/
function minmaxabsn( x, y, out, stride, offset ) {
	var len;
	var min;
	var max;
	var ax;
	var ay;
	var av;
	var v;
	var i;

	len = arguments.length;

	out = arguments[ len - 3 ];
	stride = arguments[ len - 2 ];
	offset = arguments[ len - 1 ];

	if ( len === 3 ) {
		out[ offset ] = PINF;
		out[ offset + stride ] = PINF;
		return out;
	}
	if ( len === 4 ) {
		ax = abs( x );
		out[ offset ] = ax;
		out[ offset + stride ] = ax;
		return out;
	}
	if ( len === 5 ) {
		if ( isnan( x ) || isnan( y ) ) {
			out[ offset ] = NaN;
			out[ offset + stride ] = NaN;
			return out;
		}
		ax = abs( x );
		ay = abs( y );
		if ( ax < ay ) {
			out[ offset ] = ax;
			out[ offset + stride ] = ay;
			return out;
		}
		out[ offset ] = ay;
		out[ offset + stride ] = ax;
		return out;
	}
	min = PINF;
	max = 0.0;
	for ( i = 0; i < len - 3; i++ ) {
		v = arguments[ i ];
		if ( isnan( v ) ) {
			out[ offset ] = NaN;
			out[ offset + stride ] = NaN;
			return out;
		}
		av = abs( v );
		if ( av < min ) {
			min = av;
		}
		if ( av > max ) {
			max = av;
		}
	}
	out[ offset ] = min;
	out[ offset + stride ] = max;
	return out;
}


// EXPORTS //

module.exports = minmaxabsn;
