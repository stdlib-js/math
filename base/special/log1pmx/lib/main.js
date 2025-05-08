/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_83_0/boost/math/special_functions/log1p.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2005-2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

'use strict';

// MODULES //

var abs = require( './../../../../base/special/abs' );
var ln = require( './../../../../base/special/ln' );
var FLOAT_EPS = require( '@stdlib/constants/float64/eps' );
var sumSeries = require( './../../../../base/tools/sum-series' );
var log1pSeries = require( './log1p_series.js' );


// MAIN //

/**
* Evaluates \\( \operatorname{log1pmx}(x) = \ln(1+x) - x \\).
*
* @param {number} x - input value
* @returns {number} function value
*
* @example
* var v = log1pmx( 1.1 );
* // returns ~-0.358
*
* @example
* var v = log1pmx( 0.99 );
* // returns ~-0.302
*
* @example
* var v = log1pmx( -0.99 );
* // returns ~-3.615
*
* @example
* var v = log1pmx( -1.1 );
* // returns NaN
*
* @example
* var v = log1pmx( NaN );
* // returns NaN
*/
function log1pmx( x ) {
	var opts;
	var ax;
	if ( x <= -1.0 ) {
		return NaN;
	}
	ax = abs( x );
	if ( ax > 0.95 ) {
		return ln( 1.0 + x ) - x;
	}
	if ( ax < FLOAT_EPS ) {
		return -x * x / 2.0;
	}
	opts = {
		'initialValue': -x
	};
	return sumSeries( log1pSeries( x ), opts );
}


// EXPORTS //

module.exports = log1pmx;
