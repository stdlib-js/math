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

var absf = require( './../../../../base/special/absf' );
var isnanf = require( './../../../../base/assert/is-nanf' );


// MAIN //

/**
* Returns the minimum and maximum absolute values of two single-precision floating-point numbers and assigns results to a provided output array.
*
* @private
* @param {number} x - first number
* @param {number} y - second number
* @param {Collection} out - output object
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array index offset
* @returns {Collection} minimum and maximum absolute values
*
* @example
* var out = [ 0.0, 0.0 ];
* var v = minmaxabsf( 3.14, 4.2, out, 1, 0 );
* // returns [ 3.14, 4.2 ]
*
* var bool = ( v === out );
* // returns true
*
* @example
* var out = [ 0.0, 0.0 ];
* var v = minmaxabsf( -5.9, 3.14, out, 1, 0 );
* // returns [ 3.14, 5.9 ]
*
* @example
* var out = [ 0.0, 0.0 ];
* var v = minmaxabsf( 3.14, NaN, out, 1, 0 );
* // returns [ NaN, NaN ]
*
* @example
* var out = [ 0.0, 0.0 ];
* var v = minmaxabsf( +0.0, -0.0, out, 1, 0 );
* // returns [ 0.0, 0.0 ]
*/
function minmaxabsf( x, y, out, stride, offset ) {
	var ax;
	var ay;

	if ( isnanf( x ) || isnanf( y ) ) {
		out[ offset ] = NaN;
		out[ offset + stride ] = NaN;
		return out;
	}
	ax = absf( x );
	ay = absf( y );
	if ( ax < ay ) {
		out[ offset ] = ax;
		out[ offset + stride ] = ay;
		return out;
	}
	out[ offset ] = ay;
	out[ offset + stride ] = ax;
	return out;
}


// EXPORTS //

module.exports = minmaxabsf;
