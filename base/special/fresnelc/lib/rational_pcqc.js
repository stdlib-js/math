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
		return 1.0;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = 1.0 + (x * (-0.20552590095501388 + (x * (0.018884331939670384 + (x * (-0.0006451914356839651 + (x * (0.000009504280628298596 + (x * (-4.9884311457357354e-8 + (x * 0.0))))))))))); // eslint-disable-line max-len
		s2 = 1.0 + (x * (0.04121420907221998 + (x * (0.0008680295429417843 + (x * (0.000012226278902417902 + (x * (1.2500186247959882e-7 + (x * (9.154392157746574e-10 + (x * 3.99982968972496e-12))))))))))); // eslint-disable-line max-len
	} else {
		x = 1.0 / x;
		s1 = 0.0 + (x * (-4.9884311457357354e-8 + (x * (0.000009504280628298596 + (x * (-0.0006451914356839651 + (x * (0.018884331939670384 + (x * (-0.20552590095501388 + (x * 1.0))))))))))); // eslint-disable-line max-len
		s2 = 3.99982968972496e-12 + (x * (9.154392157746574e-10 + (x * (1.2500186247959882e-7 + (x * (0.000012226278902417902 + (x * (0.0008680295429417843 + (x * (0.04121420907221998 + (x * 1.0))))))))))); // eslint-disable-line max-len
	}
	return s1 / s2;
}


// EXPORTS //

module.exports = evalrational;
