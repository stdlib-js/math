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
* Compute the tangent of a number on `[-π/4, π/4]` in single-precision floating-point format.
*
* @module @stdlib/math/base/special/kernel-tanf
*
* @example
* var kernelTanf = require( '@stdlib/math/base/special/kernel-tanf' );
*
* var out = kernelTanf( 3.141592653589793/4.0, 1 );
* // returns ~1.0
*
* out = kernelTanf( 3.141592653589793/4.0, -1 );
* // returns ~-1.0
*
* out = kernelTanf( 3.141592653589793/6.0, 1 );
* // returns ~0.577
*
* out = kernelTanf( 0.664, 1 );
* // returns ~0.783
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
