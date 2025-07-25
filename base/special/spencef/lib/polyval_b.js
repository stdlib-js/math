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

/* This is a generated file. Do not edit directly. */
'use strict';

// MODULES //

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/
function evalpoly( x ) {
	if ( x === 0.0 ) {
		return 1.0;
	}
	return float64ToFloat32(1.0 + float64ToFloat32(x * float64ToFloat32(3.5477135181427 + float64ToFloat32(x * float64ToFloat32(5.0327887535095215 + float64ToFloat32(x * float64ToFloat32(3.638005256652832 + float64ToFloat32(x * float64ToFloat32(1.4117259979248047 + float64ToFloat32(x * float64ToFloat32(0.28297486901283264 + float64ToFloat32(x * float64ToFloat32(0.025404376909136772 + float64ToFloat32(x * 0.0006909904768690467)))))))))))))); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = evalpoly;
