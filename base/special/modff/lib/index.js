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
* Decompose a single-precision floating-point number into integral and fractional parts.
*
* @module @stdlib/math/base/special/modff
*
* @example
* var modff = require( '@stdlib/math/base/special/modff' );
*
* var parts = modff( 3.14 );
* // returns [ 3.0, 0.1400001049041748 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var modff = require( '@stdlib/math/base/special/modff' );
*
* var out = new Float32Array( 2 );
*
* var parts = modff.assign( 3.14, out, 1, 0 );
* // returns <Float32Array>[ 3.0, 0.1400001049041748 ]
*
* var bool = ( parts === out );
* // returns true
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var assign = require( './assign.js' );


// MAIN //

setReadOnly( main, 'assign', assign );


// EXPORTS //

module.exports = main;
