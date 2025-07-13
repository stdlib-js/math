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

var sind = require( './../../../../base/special/sind' );
var cosd = require( './../../../../base/special/cosd' );


// MAIN //

/**
* Simultaneously computes the sine and cosine of an angle measured in degrees and assigns the results to a provided output array.
*
* @private
* @param {number} x - input value (in degrees)
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array index offset
* @returns {Collection} output array
*
* @example
* var v = sincosd( 0.0, [ 0.0, 0.0 ], 1, 0 );
* // returns [ ~0.0, ~1.0 ]
*
* @example
* var v = sincosd( 90.0, [ 0.0, 0.0 ], 1, 0 );
* // returns [ ~1.0, ~0.0 ]
*
* @example
* var v = sincosd( -30.0, [ 0.0, 0.0 ], 1, 0 );
* // returns [ ~-0.5, ~0.866 ]
*
* @example
* var v = sincosd( NaN, [ 0.0, 0.0 ], 1, 0 );
* // returns [ NaN, NaN ]
*/
function sincosd( x, out, stride, offset ) {
	out[ offset ] = sind( x );
	out[ offset + stride ] = cosd( x );
	return out;
}


// EXPORTS //

module.exports = sincosd;
