/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

/* This is a generated file. Do not edit directly. */
'use strict';

// MAIN //

/**
* Evaluates a rational function, i.e., the ratio of two polynomials described by the coefficients stored in \\(P\\) and \\(Q\\).
*
* ## Notes
*
* -   Coefficients should be sorted in ascending degree.
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the rational function
* @returns {number} evaluated rational function
*/
function evalrational( x ) {
	var ax;
	var s1;
	var s2;
	if ( x === 0.0 ) {
		return -0.3333333333438;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -0.3333333333438 + (x * (-0.2070740359969 + (x * (-0.05041806657154 + (x * (-0.004923635739372 + (x * -0.00004293658292782))))))); // eslint-disable-line max-len
		s2 = 1.0 + (x * (0.7045554412463 + (x * (0.2118190062224 + (x * (0.03048648397436 + (x * 0.001605037988091))))))); // eslint-disable-line max-len
	} else {
		x = 1.0 / x;
		s1 = -0.00004293658292782 + (x * (-0.004923635739372 + (x * (-0.05041806657154 + (x * (-0.2070740359969 + (x * -0.3333333333438))))))); // eslint-disable-line max-len
		s2 = 0.001605037988091 + (x * (0.03048648397436 + (x * (0.2118190062224 + (x * (0.7045554412463 + (x * 1.0))))))); // eslint-disable-line max-len
	}
	return s1 / s2;
}


// EXPORTS //

module.exports = evalrational;
