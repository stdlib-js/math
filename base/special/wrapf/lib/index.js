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
* Wrap a single-precision floating-point value to the half-open interval `[min,max)`.
*
* @module @stdlib/math/base/special/wrapf
*
* @example
* var wrapf = require( '@stdlib/math/base/special/wrapf' );
*
* var v = wrapf( 3.14, 0.0, 5.0 );
* // returns ~3.14
*
* v = wrapf( -3.14, 0.0, 5.0 );
* // returns ~1.86
*
* v = wrapf( 10.0, 0.0, 5.0 );
* // returns 0.0
*
* v = wrapf( -0.0, 0.0, 5.0 );
* // returns 0.0
*
* v = wrapf( 0.0, -0.0, 5.0 );
* // returns 0.0
*
* v = wrapf( NaN, 0.0, 5.0 );
* // returns NaN
*
* v = wrapf( 0.0, NaN, 5.0 );
* // returns NaN
*
* v = wrapf( 3.14, 0.0, NaN );
* // returns NaN
*
* v = wrapf( 3.14, 5.0, 0.0 );
* // returns NaN
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
