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
*
*
* ## Notice
*
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/

'use strict';

// MODULES //

var sincos = require( './../../../../base/special/sincos' ).assign;
var abs = require( './../../../../base/special/abs' );
var HALF_PI = require( '@stdlib/constants/float64/half-pi' );
var PI = require( '@stdlib/constants/float64/pi' );
var polyS = require( './rational_psqs.js' );
var polyF = require( './rational_pfqf.js' );
var polyG = require( './rational_pgqg.js' );


// VARIABLES //

// Array for storing sincos evaluation:
var sc = [ 0.0, 0.0 ];


// MAIN //

/**
* Computes the Fresnel integral S(x).
*
* ## Method
*
* Evaluates the Fresnel integral
*
* ```tex
* \operatorname{S}(x) = \int_0^x \sin\left(\frac{\pi}{2} t^2\right)\,\mathrm{d}t
* ```
*
* The integral is evaluated by a power series for \\( x < 1 \\). For \\( x >= 1 \\) auxiliary functions \\( f(x) \\) and \\( g(x) \\) are employed such that
*
* ```tex
* \operatorname{S}(x) = \frac{1}{2} - f(x) \cos\left( \frac{\pi}{2} x^2 \right) - g(x) \sin\left( \frac{\pi}{2} x^2 \right).
* ```
*
* ## Notes
*
* -   Relative error on test interval \\( \[0,10\] \\):
*
*     | arithmetic | function | # trials | peak    | rms     |
*     |:----------:|:--------:|:--------:|:--------:|:-------:|
*     | IEEE       | S(x)     | 10000    | 2.0e-15 | 3.2e-16 |
*
* @param {number} x - input value
* @returns {number} S(x)
*
* @example
* var v = fresnels( 0.0 );
* // returns 0.0
*
* @example
* var v = fresnels( 1.0 );
* // returns ~0.438
*
* @example
* var v = fresnels( Infinity );
* // returns ~0.5
*
* @example
* var v = fresnels( -Infinity );
* // returns ~-0.5
*
* @example
* var v = fresnels( NaN );
* // returns NaN
*/
function fresnels( x ) {
	var x2;
	var xa;
	var S;
	var f;
	var g;
	var t;
	var u;

	xa = abs( x );
	x2 = xa * xa;
	if ( x2 < 2.5625 ) {
		t = x2 * x2;
		S = xa * x2 * polyS( t );
	} else if ( xa > 36974.0 ) {
		S = 0.5;
	} else {
		// Asymptotic power series auxiliary functions for large arguments...
		x2 = xa * xa;
		t = PI * x2;
		u = 1.0 / (t * t);
		t = 1.0 / t;
		f = 1.0 - ( u * polyF( u ) );
		g = t * polyG( u );
		t = HALF_PI * x2;
		sincos( t, sc, 1, 0 );
		t = PI * xa;
		S = 0.5 - ( ( (f*sc[1]) + (g*sc[0]) ) / t );
	}
	if ( x < 0.0 ) {
		S = -S;
	}
	return S;
}


// EXPORTS //

module.exports = fresnels;
