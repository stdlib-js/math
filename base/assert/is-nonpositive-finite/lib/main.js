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

var NINF = require( '@stdlib/constants/float64/ninf' );


// MAIN //

/**
* Tests if a double-precision floating-point numeric value is a nonpositive finite number.
*
* @param {number} x - value to test
* @returns {boolean} boolean indicating whether the value is a nonpositive finite number
*
* @example
* var bool = isNonPositiveFinite( -3.14 );
* // returns true
*
* @example
* var bool = isNonPositiveFinite( 0.0 );
* // returns true
*
* @example
* var bool = isNonPositiveFinite( -Infinity );
* // returns false
*
* @example
* var bool = isNonPositiveFinite( 3.14 );
* // returns false
*
* @example
* var bool = isNonPositiveFinite( NaN );
* // returns false
*/
function isNonPositiveFinite( x ) {
	return ( x <= 0.0 && x > NINF );
}


// EXPORTS //

module.exports = isNonPositiveFinite;
