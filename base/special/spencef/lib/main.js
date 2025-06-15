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
*
*
* ## Notice
*
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1985, 1987, 1989, 2000 by Stephen L. Moshier
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
var lnf = require( './../../../../base/special/lnf' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var polyvalA = require( './polyval_a.js' );
var polyvalB = require( './polyval_b.js' );


// VARIABLES //

var PI2O6 = f32( 1.64493406684822643647 ); // π^2 / 6
var ZERO = f32( 0.0 );
var HALF = f32( 0.5 );
var ONE = f32( 1.0 );


// MAIN //

/**
* Evaluates Spence's function (the dilogarithm) for a single-precision floating-point number.
*
* ## Method
*
* -   A rational approximation gives the integral in the interval (0.5, 1.5).
* -   Transformation formulas for \\( \tfrac{1}{x} \\) and \\( 1 - x \\) are employed outside the basic expansion range.
*
* ## Notes
*
* -   Relative error:
*
*     | arithmetic | domain      | # trials | peak    | rms     |
*     |:----------:|:-----------:|:--------:|:-------:|:-------:|
*     | IEEE       | 0,4         | 30000    | 4.4e-7  | 6.3e-8  |
*
* @param {NonNegativeNumber} x - input value
* @returns {number} function value
*
* @example
* var v = spencef( 3.0 );
* // returns ~-1.437
*
* @example
* var v = spencef( 0.0 );
* // returns ~1.645
*
* @example
* var v = spencef( -9.0 );
* // returns NaN
*
* @example
* var v = spencef( NaN );
* // returns NaN
*/
function spencef( x ) {
	var flg;
	var w;
	var y;
	var z;

	x = f32( x );
	if ( isnanf( x ) || x < 0.0 ) {
		return NaN;
	}
	if ( x === 1.0 ) {
		return ZERO;
	}
	if ( x === 0.0 ) {
		return PI2O6;
	}
	flg = 0;
	if ( x > 2.0 ) {
		x = f32( ONE / x );
		flg |= 2;
	}
	if ( x > 1.5 ) {
		w = f32( f32( ONE / x ) - ONE );
		flg |= 2;
	} else if ( x < 0.5 ) {
		w = f32( -x );
		flg |= 1;
	} else {
		w = f32( x - ONE );
	}
	y = f32( -w * f32( polyvalA( w ) / polyvalB( w ) ) );
	if ( flg & 1 ) {
		y = f32( f32( PI2O6 - f32( lnf( x )*lnf( ONE-x ) ) ) - y );
	}
	if ( flg & 2 ) {
		z = lnf( x );
		y = f32( -f32( f32( HALF * f32( z*z ) ) + y ) );
	}
	return y;
}


// EXPORTS //

module.exports = spencef;
