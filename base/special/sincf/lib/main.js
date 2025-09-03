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

// MODULES //

var sinpif = require( './../../../../base/special/sinpif' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var isInfinitef = require( './../../../../base/assert/is-infinitef' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var PI = require( '@stdlib/constants/float32/pi' );


// VARIABLES //

var ONE = f32( 1.0 );
var ZERO = f32( 0.0 );


// MAIN //

/**
* Computes the normalized cardinal sine of a single-precision floating-point number (in radians).
*
* ## Method
*
* For \\( x \neq 0 \\), the normalized cardinal sine is calculated as
*
* ```tex
* \operatorname{sinc}(x) = \frac{\operatorname{sin}(\pi x)}{\pi x}.
* ```
*
* ## Special Cases
*
* ```tex
* \begin{align*}
* \operatorname{sinc}(0) &= 1 & \\
* \operatorname{sinc}(\infty) &= 0 & \\
* \operatorname{sinc}(-\infty) &= 0 & \\
* \operatorname{sinc}(\mathrm{NaN}) &= \mathrm{NaN}
* \end{align*}
* ```
*
* @param {number} x - input value
* @returns {number} cardinal sine
*
* @example
* var v = sincf( 0.5 );
* // returns ~0.637
*
* @example
* var v = sincf( -1.2 );
* // returns ~-0.156
*
* @example
* var v = sincf( 0.0 );
* // returns 1.0
*
* @example
* var v = sincf( NaN );
* // returns NaN
*/
function sincf( x ) {
	x = f32( x );

	if ( isnanf( x ) ) {
		return NaN;
	}
	if ( isInfinitef( x ) ) {
		return ZERO;
	}
	if ( x === ZERO ) {
		return ONE;
	}
	return f32( sinpif( x ) / f32( PI*x ) );
}


// EXPORTS //

module.exports = sincf;
