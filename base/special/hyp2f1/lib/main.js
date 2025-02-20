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
* The original C code and copyright notice are from the [Cephes Mathematical Library]{@link https://www.netlib.org/cephes/}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright Stephen L. Moshier 1984, 1987, 1992, 2000.
*
* Use, modification and distribution are subject to the
* Cephes Mathematical Library License. (See accompanying file
* LICENSE or copy at https://smath.com/en-US/view/CephesMathLibrary/license)
* ```
*/

'use strict';

// MODULES //

var isnan = require( '@stdlib/assert/is-nan' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var round = require( './../../../../base/special/round' );
var gamma = require( './../../../../base/special/gamma' );
var pow = require( './../../../../base/special/pow' );
var abs = require( './../../../../base/special/abs' );
var isNonPositiveInteger = require( './isnonpositiveinteger.js' );
var isInteger = require( './isinteger.js' );
var hys2f1 = require( './hys2f1.js' );
var hyt2f1 = require( './hyt2f1.js' );
var config = require( './config.json' );


// VARIABLES //

var ETHRESH = config.ETHRESH;


// MAIN //

/**
* Evaluates the Gaussian hypergeometric function.
*
* @param {number} a - input value
* @param {number} b - input value
* @param {number} c - input value
* @param {number} x - input value
* @returns {number} function value
*
* @example
* var v = hyp2f1( 1.0, 1.0, 1.0, 0.0 );
* // returns 1.0
*
* @example
* var v = hyp2f1( 10.0, 7.4, -1.8, -0.99 );
* // returns ~0.423
*
* @example
* var v = hyp2f1( 10.0, 1.0, -1.8, -0.99 );
* // returns ~-0.875
*
* @example
* var v = hyp2f1( 2.0, 3.0, 5.0, 0.99 );
* // returns ~27.699
*
* @example
* var v = hyp2f1( 3.0, 4.0, 7.0, 1.0 );
* // returns +Infinity
*
* @example
* var v = hyp2f1( NaN, 3.0, 2.0, 0.5 );
* // returns NaN
*
* @example
* var v = hyp2f1( 1.0, NaN, 2.0, 0.5 );
* // returns NaN
*/
function hyp2f1( a, b, c, x ) {
	var negIntCaOrCb;
	var negIntC;
	var negIntB;
	var negIntA;
	var isIntD;
	var aid;
	var err;
	var ax;
	var d2;
	var d1;
	var id;
	var ic;
	var ia;
	var ib;
	var t1;
	var y1;
	var y2;
	var q;
	var r;
	var p;
	var e;
	var s;
	var d;
	var y;
	var i;

	err = 0.0;
	ax = abs( x );
	ia = round( a );
	ib = round( b );
	id = round( d );
	ic = round( c );
	s = 1.0 - x;
	d = c - a - b;
	negIntA = isNonPositiveInteger( a );
	negIntB = isNonPositiveInteger( b );
	negIntC = isNonPositiveInteger( c );
	isIntD = isInteger( d );
	t1 = abs( b-a );

	if ( isnan( a ) || isnan( b ) || isnan( c ) || isnan( x ) ) {
		return NaN;
	}

	if ( x === 0.0 ) {
		return 1.0;
	}

	if ( ( a === 0.0 || b === 0.0 ) && c !== 0.0 ) {
		return 1.0;
	}

	// The transformation for c - a or c - b negative integer (AMS55 #15.3.3)...
	if ( d <= -1.0 && !( !isIntD && s < 0.0 ) && !( negIntA || negIntB ) ) {
		return pow( s, d ) * hyp2f1( c-a, c-b, c, x );
	}

	// Check whether the series diverges...
	if ( d <= 0.0 && x === 1.0 && !( negIntA || negIntB ) ) {
		return PINF;
	}

	if ( ax < 1.0 || x === -1.0 ) {
		if ( b === c ) {
			// 2F1(a,b;b;x) = (1-x)**(-a):
			return pow( s, -a );
		}
		if ( a === c ) {
			// 2F1(a,b;a;x) = (1-x)**(-b):
			return pow( s, -b );
		}
	}

	if ( negIntC ) {
		// Check if termination before explosion...
		if ( negIntA && ( ia > ic ) ) {
			y = hyt2f1( a, b, c, x, err );
			return y.value;
		}
		if ( negIntB && ( ib > ic ) ) {
			y = hyt2f1( a, b, c, x, err );
			return y.value;
		}
		return PINF;
	}

	// Check whether the function is a polynomial before trying the power series expansion...
	if ( negIntA || negIntB )	{
		y = hyt2f1( a, b, c, x, err );
		return y.value;
	}

	// The following transform has a pole for integer b - a and may cause large cancellation errors near |1/x| = 1 (AMS55 #15.3.7)...
	if ( x < -2.0 && !isInteger( t1 ) ) {
		p = hyp2f1( a, 1.0-c+a, 1.0-b+a, 1.0/x );
		q = hyp2f1( b, 1.0-c+b, 1.0-a+b, 1.0/x );
		p *= pow( -x, -a );
		q *= pow( -x, -b );
		t1 = gamma( c );
		s = t1 * gamma( b-a ) / ( gamma( b ) * gamma( c-a ) );
		y = t1 * gamma( a-b ) / ( gamma( a ) * gamma( c-b ) );
		return ( s*p ) + ( y*q );
	}
	if ( x < -1.0 ) {
		// Transformation based on AMS55 #15.3.4...
		if ( abs( a ) < abs( b ) ) {
			return pow( s, -a ) * hyp2f1( a, c-b, c, x/( x-1.0 ) );
		}
		// Transformation based on AMS55 #15.3.5:
		return pow( s, -b ) * hyp2f1( b, c-a, c, x/( x-1.0 ) );
	}

	// The series diverges for `|x|` greater than unity if above checks fail...
	if ( ax > 1.0 ) {
		return PINF;
	}

	p = c - a;
	r = c - b;
	negIntCaOrCb = isNonPositiveInteger( p ) || isNonPositiveInteger( r );

	// If `|x|` is equal to unity, the function is a polynomial...
	if ( ax === 1.0 ) {
		if ( x > 0.0 ) {
			if ( negIntCaOrCb ) {
				if ( d >= 0.0 ) {
					// Transformation based on AMS55 #15.3.3:
					y = hys2f1( c-a, c-b, c, x, err );
					return pow( s, d ) * y.value;
				}
				return PINF;
			}
			if ( d <= 0.0 ) {
				return PINF;
			}
			// Transformation based on AMS55 #15.3.6:
			return gamma( c ) * gamma( d ) / ( gamma( p ) * gamma( r ) );
		}
		if ( d <= -1.0 ) {
			return PINF;
		}
	}

	// Conditionally make `d > 0` by recurrence on `c` (AMS55 #15.2.27)...
	if ( d < 0.0 ) {
		// Try the power series first:
		y = hyt2f1( a, b, c, x, err );
		if ( y.error < ETHRESH ) {
			return y.value;
		}
		// If the power series fails, then apply the recurrence...
		y = y.value;
		err = 0.0;
		aid = 2.0 - id;
		e = c + aid;
		d2 = hyp2f1( a, b, e, x );
		d1 = hyp2f1( a, b, e+1.0, x );
		q = a + b + 1.0;
		for ( i = 0; i < aid; i++ ) {
			r = e - 1.0;
			y1 = ( e-a ) * ( e-b ) * x;
			y2 = r - ( ( (2.0*e)-q ) * x );
			y2 *= e;
			y = ( ( y2*d2 ) + ( y1*d1 ) ) / ( e*r*s );
			e = r;
			d1 = d2;
			d2 = y;
		}
		return y;
	}

	// The transformation for c - a or c - b negative integer (AMS55 #15.3.3)...
	if ( negIntCaOrCb ) {
		y = hys2f1( c-a, c-b, c, x, err );
		return pow( s, d ) * y.value;
	}

	// Try the power series:
	y = hyt2f1( a, b, c, x, err );
	return y.value;
}


// EXPORTS //

module.exports = hyp2f1;
