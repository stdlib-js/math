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
* Compute the absolute value and the phase of a single-precision complex floating-point number.
*
* @module @stdlib/math/base/special/cpolarf
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var cpolarf = require( '@stdlib/math/base/special/cpolarf' );
*
* var o = cpolarf( new Complex64( 5.0, 3.0 ) );
* // returns [ ~5.83, ~0.5404 ]
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var Float32Array = require( '@stdlib/array/float32' );
* var cpolarf = require( '@stdlib/math/base/special/cpolarf' );
*
* var out = new Float32Array( 2 );
*
* var v = cpolarf.assign( new Complex64( 5.0, 3.0 ), out, 1, 0 );
* // returns <Float32Array>[ ~5.83, ~0.5404 ]
*
* var bool = ( v === out );
* // returns true
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var assign = require( './assign.js' );
var main = require( './main.js' );


// MAIN //

setReadOnly( main, 'assign', assign );


// EXPORTS //

module.exports = main;
