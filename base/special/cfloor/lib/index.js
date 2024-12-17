/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* Round a double-precision floating-point complex number toward negative infinity.
*
* @module @stdlib/math/base/special/cfloor
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
* var cfloor = require( '@stdlib/math/base/special/cfloor' );
*
* var v = cfloor( new Complex128( -4.2, 5.5 ) );
* // returns <Complex128>
*
* var re = real( v );
* // returns -5.0
*
* var im = imag( v );
* // returns 5.0
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
* var cfloor = require( '@stdlib/math/base/special/cfloor' );
*
* var v = cfloor( new Complex128( 9.99999, 0.1 ) );
* // returns <Complex128>
*
* var re = real( v );
* // returns 9.0
*
* var im = imag( v );
* // returns 0.0
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
* var cfloor = require( '@stdlib/math/base/special/cfloor' );
*
* var v = cfloor( new Complex128( 0.0, 0.0 ) );
* // returns <Complex128>
*
* var re = real( v );
* // returns 0.0
*
* var im = imag( v );
* // returns 0.0
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
* var cfloor = require( '@stdlib/math/base/special/cfloor' );
*
* var v = cfloor( new Complex128( NaN, NaN ) );
* // returns <Complex128>
*
* var re = real( v );
* // returns NaN
*
* var im = imag( v );
* // returns NaN
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
