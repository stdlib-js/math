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
* Return the minimum absolute single-precision floating-point number.
*
* @module @stdlib/math/base/special/minabsf
*
* @example
* var minabsf = require( '@stdlib/math/base/special/minabsf' );
*
* var v = minabsf( -3.14, 4.2 );
* // returns ~3.14
*
* v = min( 3.14, NaN );
* // returns NaN
*
* v = min( +0.0, -0.0 );
* // returns +0.0
*/

// MODULES //

var minabsf = require( './main.js' );


// EXPORTS //

module.exports = minabsf;
