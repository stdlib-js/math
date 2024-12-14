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
* Round a single-precision floating-point number toward positive infinity.
*
* @module @stdlib/math/base/special/ceilf
*
* @example
* var ceilf = require( '@stdlib/math/base/special/ceilf' );
*
* var v = ceilf( -4.2 );
* // returns -4.0
*
* v = ceilf( 9.99999 );
* // returns 10.0
*
* v = ceilf( 0.0 );
* // returns 0.0
*
* v = ceilf( NaN );
* // returns NaN
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
