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

var PINF = require( '@stdlib/constants/float64/pinf' );
var round = require( './../../../../base/special/round' );
var abs = require( './../../../../base/special/abs' );
var isNonPositiveInteger = require( './isnonpositiveinteger.js' );
var config = require( './config.json' );


// VARIABLES //

var MACHEP = config.MACHEP;
var EPS = config.EPS;
var MAX_ITERATIONS = config.MAX_ITERATIONS;


// FUNCTIONS //

/**
* Evaluates the Gaussian hypergeometric function by two-term recurrence in `a`.
*
* ## Notes
*
* -   This function helps prevent losing accuracy in the highly alternating hypergeometric series and allows a and b to be reduced to smaller values.
*
* ## References
*
* -   AMS55 #15.2.10
*
* @private
* @param {number} a - input value
* @param {number} b - input value
* @param {number} c - input value
* @param {number} x - input value
* @param {number} loss - starting loss of significance
* @returns {Object} the function value and error
*/
function hyp2f1ra( a, b, c, x, loss ) {
	var f2Val;
	var f1Val;
	var f0Val;
	var err;
	var da;
	var f1;
	var f0;
	var t;
	var n;

	loss = 0.0;
	err = 0.0;

	if ( ( c < 0.0 && a <= c ) || ( c >= 0.0 && a >= c ) ) {
		da = round( a-c );
	} else {
		da = round( a );
	}

	t = a - da;
	if ( abs( da ) > MAX_ITERATIONS ) {
		// Too expensive to compute, so return `NaN`:
		loss = 1.0;
		return {
			'value': NaN,
			'error': loss
		};
	}

	if ( da < 0.0 ) {
		// Backward recurrence...
		f2Val = 0.0;
		f1 = hys2f1( t, b, c, x, err );
		loss += f1.error;
		err = f1.error;
		f0 = hys2f1( t-1.0, b, c, x, err );
		loss += f0.error;
		t -= 1.0;
		f1Val = f1.value;
		f0Val = f0.value;
		for ( n = 1; n < -da; n++ ) {
			f2Val = f1Val;
			f1Val = f0Val;

			// eslint-disable-next-line max-len
			f0Val = -( ( ( ( (2.0*t)-c )-( t*x )+( b*x ) ) * f1Val ) + ( ( t*(x-1.0) ) * f2Val ) ) / ( c-t );
			t -= 1.0;
		}
	} else {
		// Forward recurrence...
		f2Val = 0.0;
		f1 = hys2f1( t, b, c, x, err );
		loss += f1.error;
		err = f1.error;
		f0 = hys2f1( t+1.0, b, c, x, err );
		loss += f0.error;
		t += 1.0;
		f1Val = f1.value;
		f0Val = f0.value;
		for ( n = 1; n < da; n++ ) {
			f2Val = f1Val;
			f1Val = f0Val;

			// eslint-disable-next-line max-len
			f0Val = -( ( ( ( (2.0*t)-c )-( t*x )+( b*x ) ) * f1Val ) + ( (c-t)*f2Val ) ) / ( t*(x-1.0) );
			t += 1.0;
		}
	}

	return {
		'value': f0Val,
		'error': loss
	};
}


// MAIN //

/**
* Evaluates the power series expansion of Gaussian hypergeometric function.
*
* @private
* @param {number} a - input value
* @param {number} b - input value
* @param {number} c - input value
* @param {number} x - input value
* @param {number} loss - starting loss of significance
* @returns {Object} the function value and error
*/
function hys2f1( a, b, c, x, loss ) {
	var intFlag;
	var umax;
	var f;
	var g;
	var h;
	var k;
	var m;
	var s;
	var u;
	var i;

	intFlag = 0;

	if ( abs( b ) > abs( a ) ) {
		f = b;
		b = a;
		a = f;
	}

	if ( isNonPositiveInteger( b ) && ( abs( b ) < abs( a ) ) ) {
		f = b;
		b = a;
		a = f;
		intFlag = 1;
	}

	// eslint-disable-next-line max-len
	if ( ( ( abs( a ) > abs( c ) + 1.0 ) || intFlag ) && ( abs( c-a ) > 2.0 ) && ( abs( a ) > 2.0 ) ) {
		return hyp2f1ra( a, b, c, x, loss );
	}

	i = 0.0;
	umax = 0.0;
	f = a;
	g = b;
	h = c;
	s = 1.0;
	u = 1.0;
	k = 0.0;

	do {
		if ( abs( h ) < EPS ) {
			loss = 1.0;
			return {
				'value': PINF,
				'error': loss
			};
		}
		m = k + 1.0;
		u *= ( ( f+k ) * ( g+k ) * x / ( ( h+k ) * m ) );
		s += u;
		k = abs( u );
		if ( k > umax ) {
			umax = k;
		}
		k = m;
		i += 1.0;
		if ( i > MAX_ITERATIONS ) {
			loss = 1.0;
			return {
				'value': s,
				'error': loss
			};
		}
	} while ( s === 0.0 || abs( u/s ) > MACHEP );

	// Estimate the relative error due to truncation by the series:
	loss = ( ( MACHEP*umax ) / abs( s ) ) + ( MACHEP*i );
	return {
		'value': s,
		'error': loss
	};
}


// EXPORTS //

module.exports = hys2f1;
