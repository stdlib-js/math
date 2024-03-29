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
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_65_0/boost/math/special_functions/detail/polygamma.hpp}. The implementation follows the original but has been modified for JavaScript.
*
* ```text
* (C) Copyright Nikhar Agrawal 2013.
* (C) Copyright Christopher Kormanyos 2013.
* (C) Copyright John Maddock 2014.
* (C) Copyright Paul Bristow 2013.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

'use strict';

// MODULES //

var logger = require( 'debug' );
var evalpoly = require( './../../../../base/tools/evalpoly' );
var gammaln = require( './../../../../base/special/gammaln' );
var signum = require( './../../../../base/special/signum' );
var cospi = require( './../../../../base/special/cospi' );
var sinpi = require( './../../../../base/special/sinpi' );
var abs = require( './../../../../base/special/abs' );
var exp = require( './../../../../base/special/exp' );
var pow = require( './../../../../base/special/pow' );
var ln = require( './../../../../base/special/ln' );
var MAX_LN = require( '@stdlib/constants/float64/max-ln' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var LN_PI = require( '@stdlib/constants/float64/ln-pi' );
var PI = require( '@stdlib/constants/float64/pi' );
var zeros = require( '@stdlib/array/base/zeros' );
var polyval3 = require( './polyval_p3.js' );
var polyval4 = require( './polyval_p4.js' );
var polyval5 = require( './polyval_p5.js' );
var polyval6 = require( './polyval_p6.js' );
var polyval7 = require( './polyval_p7.js' );
var polyval8 = require( './polyval_p8.js' );
var polyval9 = require( './polyval_p9.js' );
var polyval10 = require( './polyval_p10.js' );
var polyval11 = require( './polyval_p11.js' );
var polyval12 = require( './polyval_p12.js' );


// VARIABLES //

var debug = logger( 'polygamma' );
var MAX_SERIES_ITERATIONS = 1000000;

// π raised to powers two to twelve (obtained from Wolfram Alpha):
var PI2 = 9.869604401089358;
var PI3 = 31.00627668029982;
var PI4 = 97.40909103400244;
var PI5 = 306.01968478528147;
var PI6 = 961.3891935753045;
var PI7 = 3020.2932277767923;
var PI8 = 9488.531016070574;
var PI9 = 29809.09933344621;
var PI10 = 93648.04747608303;
var PI11 = 294204.0179738906;
var PI12 = 924269.1815233742;

// Derivative memoization table:
var table = [
	[ -1.0 ]
];


// FUNCTIONS //

/**
* Updates the derivatives table.
*
* @private
* @param {PositiveInteger} n - derivative
*/
function calculateDerivatives( n ) {
	var noffset; // offset for next row
	var offset; // 1 if the first cos power is 0; otherwise 0
	var ncols; // how many entries there are in the current row
	var mcols; // how many entries there will be in the next row
	var mo; // largest order of the polynomial of cos terms
	var so; // order of the sin term
	var co; // order of the cosine term in entry "j"
	var i;
	var j;
	var k;

	for ( i = table.length-1; i < n-1; i++ ) {
		offset = ( i&1 )|0;
		so = ( i+2 )|0;
		mo = ( so-1 )|0;
		ncols = ( (mo-offset)/2 )|0;
		noffset = ( offset ) ? 0 : 1;
		mcols = ( (mo+1-noffset)/2 )|0;
		table.push( zeros( mcols+1 ) );
		for ( j = 0; j <= ncols; j++ ) {
			co = ( (2*j)+offset )|0;
			k = ( (co+1)/2 )|0;
			table[ i+1 ][ k ] += ((co-so)*table[i][j]) / (so-1);
			if ( co ) {
				k = ( (co-1)/2 )|0;
				table[ i+1 ][ k ] += (-co*table[i][j]) / (so-1);
			}
		}
	}
}


// MAIN //

/**
* Returns n'th derivative of \\(\operatorname{cot|(\pi x)\\) at \\(x\\).
*
* ## Notes
*
* -   The derivatives are simply tabulated for up to \\(n = 9\\), beyond that it is possible to calculate coefficients as follows. The general form of each derivative is:
*
*     ```tex
*     \pi^n * \sum_{k=0}^n C[k,n] \cdot \cos^k(\pi \cdot x) \cdot \operatorname{csc}^{(n+1)}(\pi \cdot x)
*     ```
*
*     with constant \\( C\[0,1\] = -1 \\) and all other \\( C\[k,n\] = 0 \)). Then for each \\( k < n+1 \\):
*
*     ```tex
*     \begin{align*}
*     C[k-1, n+1]  &-= k * C[k, n]; \\
*     C[k+1, n+1]  &+= (k-n-1) * C[k, n];
*     \end{align*}
*     ```
*
* -   Note that there are many different ways of representing this derivative thanks to the many trigonometric identities available. In particular, the sum of powers of cosines could be replaced by a sum of cosine multiple angles, and, indeed, if you plug the derivative into Mathematica, this is the form it will give. The two forms are related via the Chebeshev polynomials of the first kind and \\( T_n(\cos(x)) = \cos(n x) \\). The polynomial form has the great advantage that all the cosine terms are zero at half integer arguments - right where this function has it's minimum - thus avoiding cancellation error in this region.
*
* -   And finally, since every other term in the polynomials is zero, we can save space by only storing the non-zero terms. This greatly increases complexity when subscripting the tables in the calculation, but halves the storage space (and complexity for that matter).
*
* @private
* @param {PositiveInteger} n - derivative to evaluate
* @param {number} x - input
* @param {number} xc - one minus `x`
* @returns {number} n'th derivative
*/
function polycotpi( n, x, xc ) {
	var powTerms;
	var idx;
	var out;
	var sum;
	var c;
	var s;

	s = ( abs( x ) < abs( xc ) ) ? sinpi( x ) : sinpi( xc );
	c = cospi( x );
	switch ( n ) { // eslint-disable-line default-case
	case 1:
		return -PI / ( s * s );
	case 2:
		return 2.0 * PI2 * c / pow( s, 3.0 );
	case 3:
		return PI3 * polyval3( c*c ) / pow( s, 4.0 );
	case 4:
		return PI4 * c * polyval4( c*c ) / pow( s, 5.0 );
	case 5:
		return PI5 * polyval5( c*c ) / pow( s, 6.0 );
	case 6:
		return PI6 * c * polyval6( c*c ) / pow( s, 7.0 );
	case 7:
		return PI7 * polyval7( c*c ) / pow( s, 8.0 );
	case 8:
		return PI8 * c * polyval8( c*c ) / pow( s, 9.0 );
	case 9:
		return PI9 * polyval9( c*c ) / pow( s, 10.0 );
	case 10:
		return PI10 * c * polyval10( c*c ) / pow( s, 11.0 );
	case 11:
		return PI11 * polyval11( c*c ) / pow( s, 12.0 );
	case 12:
		return PI12 * c * polyval12( c*c ) / pow( s, 13.0 );
	}
	// We'll have to compute the coefficients up to `n`, complexity is O(n^2) which we don't worry about as the values are computed once and then cached. However, if the final evaluation would have too many terms just bail out right away:
	if ( n/2 > MAX_SERIES_ITERATIONS ) {
		debug( 'The value of `n` is so large that we\'re unable to compute the result in reasonable time.' );
		return NaN;
	}
	idx = n - 1;
	if ( idx >= table.length ) {
		// Lazily calculate derivatives:
		calculateDerivatives( n );
	}
	sum = evalpoly( table[ idx ], c*c );
	if ( idx & 1 ) {
		sum *= c; // First coefficient is order 1, and really an odd polynomial.
	}
	if ( sum === 0.0 ) {
		return sum;
	}
	// The remaining terms are computed using logs since the powers and factorials get real large real quick:
	powTerms = n * LN_PI;
	if ( s === 0.0 ) {
		return ( sum >= 0.0 ) ? PINF : NINF;
	}
	powTerms -= ln( abs( s ) ) * ( n+1 );
	powTerms += gammaln( n ) + ln( abs(sum) );

	if ( powTerms > MAX_LN ) {
		return ( sum >= 0.0 ) ? PINF : NINF;
	}
	out = exp( powTerms ) * signum( sum );
	if ( s < 0.0 && ( (n+1)&1 ) ) {
		out *= -1;
	}
	return out;
}


// EXPORTS //

module.exports = polycotpi;
