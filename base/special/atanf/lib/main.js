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
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var PI02F = require( '@stdlib/constants/float32/half-pi' );
var PI04F = require( '@stdlib/constants/float32/fourth-pi' );
var polyp = require( './poly_p.js' );


// MAIN //

/**
* Computes the arctangent of a single-precision floating-point number.
*
* ## Method
*
* -   Range reduction is from four intervals into the interval from zero to  tan( pi/8 ). A polynomial approximates the function in this basic interval.
*
* ## Notes
*
* -   Relative error:
*
*     | arithmetic | domain  | # trials | peak    | rms     |
*     |:-----------|:--------|:---------|:--------|:--------|
*     | IEEE       | -10, 10 | 10^5     | 1.9e-7  | 4.1e-8  |
*
* @param {number} x - input value
* @returns {number} arctangent (in radians)
*
* @example
* var v = atanf( 0.0 );
* // returns 0.0
*
* @example
* var FLOAT32_PI = require( '@stdlib/constants/float32/pi' );
*
* var v = atanf( -FLOAT32_PI/4.0 );
* // returns ~-0.666
*
* @example
* var FLOAT32_PI = require( '@stdlib/constants/float32/pi' );
*
* var v = atanf( FLOAT32_PI/4.0 );
* // returns ~0.666
*
* @example
* var v = atanf( NaN );
* // returns NaN
*/
function atanf( x ) {
	var sgn;
	var y;
	var z;

	if ( isnanf( x ) || x === 0.0 ) {
		return x;
	}
	x = float64ToFloat32( x );
	if ( x < 0.0 ) {
		sgn = -1;
		x = -x;
	} else {
		sgn = 1;
	}
	// Range reduction...
	if ( x > 2.414213562373095 ) { // tan(3*pi/8)
		y = PI02F;
		x = -float64ToFloat32( 1.0 / x );
	} else if ( x > 0.4142135623730950 ) { // tan(pi/8)
		y = PI04F;
		x = float64ToFloat32( float64ToFloat32( x - 1.0 ) / float64ToFloat32( x + 1.0 ) ); // eslint-disable-line max-len
	} else {
		y = 0.0;
	}
	z = float64ToFloat32( x * x );
	y = float64ToFloat32( y + float64ToFloat32( ( float64ToFloat32( polyp( z ) ) * float64ToFloat32( z * x ) ) + x ) ); // eslint-disable-line max-len
	if ( sgn < 0 ) {
		y = -y;
	}
	return y;
}


// EXPORTS //

module.exports = atanf;
