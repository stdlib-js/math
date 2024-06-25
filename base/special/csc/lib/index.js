/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Evaluate the cosecant of a number.
*
* @module @stdlib/math/base/special/csc
*
* @example
* var csc = require( '@stdlib/math/base/special/csc' );
*
* var v = csc( 0.0 );
* // returns Infinity
*
* v = csc( 3.141592653589793/2.0 );
* // returns 1.0
*
* v = csc( -3.141592653589793/6.0 );
* // returns ~-2.0
*
* v = csc( 3.141592653589793/6.0 );
* // returns ~2.0
*
* v = csc( NaN );
* // returns NaN
*/

// MODULES //

var main = require('./main.js');


// EXPORTS //

module.exports = main;
