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

'use strict';

// MODULES //

var asin = require( './../../../../base/special/asin' );


// MAIN //

/**
* Computes the arccosecant of a number.
*
* ## Method
*
* ```text
* \operatorname{acsc}(x) = \operatorname{asin}(\frac{1}{x})
* ```
*
* @param {number} x - input value
* @returns {number} arccosecant (in radians)
*
* @example
* var v = acsc( 1.0 );
* // returns ~1.57
*
* @example
* var v = acsc( 3.141592653589793 );
* // returns ~0.32
*
* @example
* var v = acsc( -3.141592653589793 );
* // returns ~-0.32
*
* @example
* var v = acsc( NaN );
* // returns NaN
*/
function acsc( x ) {
	return asin( 1.0 / x );
}


// EXPORTS //

module.exports = acsc;
