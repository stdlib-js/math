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

/**
* Evaluate Spence's function (the dilogarithm) for a single-precision floating-point number.
*
* @module @stdlib/math/base/special/spencef
*
* @example
* var spencef = require( '@stdlib/math/base/special/spencef' );
*
* var v = spencef( 3.0 );
* // returns ~-1.437
*
* v = spencef( 0.0 );
* // returns ~1.645
*
* v = spencef( -9.0 );
* // returns NaN
*
* v = spencef( NaN );
* // returns NaN
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
