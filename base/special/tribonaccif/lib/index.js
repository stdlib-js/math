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
* Compute the nth Tribonacci number as a single-precision floating-point number.
*
* @module @stdlib/math/base/special/tribonaccif
*
* @example
* var tribonaccif = require( '@stdlib/math/base/special/tribonaccif' );
*
* var y = tribonaccif( 0 );
* // returns 0
*
* y = tribonaccif( 1 );
* // returns 0
*
* y = tribonaccif( 2 );
* // returns 1
*
* y = tribonaccif( 3 );
* // returns 1
*
* y = tribonaccif( 4 );
* // returns 2
*
* y = tribonaccif( 5 );
* // returns 4
*
* y = tribonaccif( 6 );
* // returns 7
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
