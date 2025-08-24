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
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

'use strict';

// MODULES //

var sumSeries = require( './../../../../base/tools/sum-series' );
var tgammaILargeXSeries = require( './tgamma_i_large_x_series.js' );


// MAIN //

/**
* Sums the elements of the series given by the full upper fraction (Q) when `x` is large.
*
* @private
* @param {number} a - function parameter
* @param {number} x - function parameter
* @returns {number} sum of series
*/
function tgammaILargeX( a, x ) {
	var result;
	var s;

	s = tgammaILargeXSeries( a, x );
	result = sumSeries( s );
	return result;
}


// EXPORTS //

module.exports = tgammaILargeX;
