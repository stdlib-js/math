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
*
*
* ## Notice
*
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1995, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/

'use strict';

// MODULES //

var isnanf = require( './../../../../base/assert/is-nanf' );
var sqrtf = require( './../../../../base/special/sqrtf' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var PI02F = require( '@stdlib/constants/float32/half-pi' );
var polyp = require( './poly_p.js' );


// MAIN //

/**
* Computes the arcsine of a single-precision floating-point number.
*
* ## Method
*
* -   A polynomial of the form
*
*     ```tex
*     x + x^3 P(x^2)
*     ```
*
*     is used for \\(\|x\|\\) in the interval \\(\[0, 0.5\]\\). If \\(\|x\| > 0.5\\), it is transformed by the identity
*
*     ```tex
*     \operatorname{asinf}(x) = \frac{\pi}{2} - 2 \operatorname{asinf}( \sqrt{ (1-x)/2 } )
*     ```
*
* ## Notes
*
* -   Relative error:
*
*     | arithmetic | domain | # trials | peak    | rms     |
*     |:-----------|:-------|:---------|:--------|:--------|
*     | IEEE       | -1, 1  | 10^5     | 2.5e-7  | 5.0e-8  |
*
* @param {number} x - input value
* @returns {number} arcsine (in radians)
*
* @example
* var v = asinf( 0.0 );
* // returns 0.0
*
* @example
* var v = asinf( 3.14/4.0 );
* // returns ~0.903
*
* @example
* var v = asinf( -3.14/6.0 );
* // returns ~-0.551
*
* @example
* var v = asinf( NaN );
* // returns NaN
*/
function asinf( x ) {
	var flag;
	var sgn;
	var ax;
	var z;

	if ( isnanf( x ) ) {
		return NaN;
	}
	x = float64ToFloat32( x );
	if ( x > 0.0 ) {
		sgn = 1;
		ax = x;
	} else {
		sgn = -1;
		ax = -x;
	}
	if ( ax > 1.0 ) {
		return NaN;
	}
	if ( ax < 1.0e-4 ) {
		return x;
	}
	if ( ax > 0.5 ) {
		z = float64ToFloat32( 0.5 * float64ToFloat32( 1.0 - ax ) );
		ax = sqrtf( z );
		flag = 1;
	} else {
		z = float64ToFloat32( ax * ax );
		flag = 0;
	}
	z = float64ToFloat32( float64ToFloat32( float64ToFloat32( polyp( z ) * z ) * ax ) + ax ); // eslint-disable-line max-len

	if ( flag !== 0 ) {
		z = float64ToFloat32( z + z );
		z = float64ToFloat32( PI02F - z );
	}
	if ( sgn < 0 ) {
		z = -z;
	}
	return z;
}


// EXPORTS //

module.exports = asinf;
