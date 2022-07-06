/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

/**
* Compute the multiplicative inverse of a single-precision floating-point number.
*
* @module @stdlib/math/base/special/invf
*
* @example
* var invf = require( '@stdlib/math/base/special/invf' );
*
* var v = invf( -1.0 );
* // returns -1.0
*
* v = invf( 2.0 );
* // returns 0.5
*
* v = invf( 0.0 );
* // returns Infinity
*
* v = invf( -0.0 );
* // returns -Infinity
*
* v = invf( NaN );
* // returns NaN
*/

// MODULES //

var invf = require( './main.js' );


// EXPORTS //

module.exports = invf;
