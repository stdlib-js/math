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
* Test if a single-precision floating-point numeric value is finite.
*
* @module @stdlib/math/base/assert/is-finitef
*
* @example
* var isfinitef = require( '@stdlib/math/base/assert/is-finitef' );
*
* var bool = isfinitef( 5.0 );
* // returns true
*
* bool = isfinitef( -2.0e24 );
* // returns true
*
* bool = isfinitef( Infinity );
* // returns false
*
* bool = isfinitef( -Infinity );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;