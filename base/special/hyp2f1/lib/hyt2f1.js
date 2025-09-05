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

var abs = require( './../../../../base/special/abs' );
var pow = require( './../../../../base/special/pow' );
var max = require( './../../../../base/special/max' );
var exp = require( './../../../../base/special/exp' );
var ln = require( './../../../../base/special/ln' );
var round = require( './../../../../base/special/round' );
var gamma = require( './../../../../base/special/gamma' );
var gammaln = require( './../../../../base/special/gammaln' );
var gammasgn = require( './../../../../base/special/gammasgn' );
var digamma = require( './../../../../base/special/digamma' );
var isNonPositiveInteger = require( './isnonpositiveinteger.js' );
var isInteger = require( './isinteger.js' );
var hys2f1 = require( './hys2f1.js' );
var config = require( './config.json' );


// VARIABLES //

var MACHEP = config.MACHEP;
var EPS = config.EPS;
var ETHRESH = config.ETHRESH;
var MAX_ITERATIONS = config.MAX_ITERATIONS;


// MAIN //

/**
* Applies transformations for `|x|` near unity before performing a power series expansion.
*
* @private
* @param {number} a - input value
* @param {number} b - input value
* @param {number} c - input value
* @param {number} x - input value
* @param {number} loss - starting loss of significance
* @returns {Object} the function value and error
*/
function hyt2f1( a, b, c, x, loss ) {
	var negIntA;
	var negIntB;
	var qVal;
	var rVal;
	var sign;
	var err1;
	var err;
	var val;
	var aid;
	var ax;
	var id;
	var d1;
	var d2;
	var y1;
	var i;
	var p;
	var q;
	var r;
	var t;
	var y;
	var w;
	var d;
	var e;
	var s;

	negIntA = isNonPositiveInteger( a );
	negIntB = isNonPositiveInteger( b );
	err = 0.0;
	err1 = 0.0;
	s = 1.0 - x;

	if ( x < -0.5 && !( negIntA || negIntB ) ) {
		if ( b > a ) {
			// Transformation based on AMS55 #15.3.4:
			y = hys2f1( a, c-b, c, -x/s, err );
			val = pow( s, -a ) * y.value;
		} else {
			// Transformation based on AMS55 #15.3.5:
			y = hys2f1( c-a, b, c, -x/s, err );
			val = pow( s, -b ) * y.value;
		}
		loss = y.error;
		return {
			'value': val,
			'error': loss
		};
	}

	d = c - a - b;
	id = round( d );

	if ( x > 0.9 && !negIntA && !negIntB ) {
		if ( isInteger( d ) === false ) {
			// Try the power series first:
			y = hys2f1( a, b, c, x, err );
			if ( y.error < ETHRESH ) {
				return y;
			}
			// If the power series fails, then apply AMS55 #15.3.6...
			err = y.error;
			q = hys2f1( a, b, 1.0-d, s, err );
			qVal = q.value;
			err = q.error;
			sign = 1.0;
			w = gammaln( d );
			sign *= gammasgn( d );
			w -= gammaln( c-a );
			sign *= gammasgn( c-a );
			w -= gammaln( c-b );
			sign *= gammasgn( c-b );
			qVal *= sign * exp( w );

			r = hys2f1( c-a, c-b, d+1.0, s, err1 );
			err1 = r.error;
			rVal = pow( s, d ) * r.value;
			sign = 1.0;
			w = gammaln( -d );
			sign *= gammasgn( -d );
			w -= gammaln( a );
			sign *= gammasgn( a );
			w -= gammaln( b );
			sign *= gammasgn( b );
			rVal *= sign * exp( w );

			y = qVal + rVal;
			err += err1 + ( ( MACHEP * max( abs( qVal ), abs( rVal ) ) ) / y );
			y *= gamma( c );
		} else {
			// Psi function expansion, AMS55 #15.3.10, #15.3.11, #15.3.12...
			if ( id >= 0.0 ) {
				e = d;
				d1 = d;
				d2 = 0.0;
				aid = id;
			} else {
				e = -d;
				d1 = 0.0;
				d2 = d;
				aid = -id;
			}
			ax = ln( s );

			// eslint-disable-next-line max-len
			y = digamma( 1.0 ) + digamma( 1.0+e ) - digamma( a+d1 ) - digamma( b+d1 ) - ax;
			y /= gamma( e+1.0 );
			p = ( a+d1 ) * ( b+d1 ) * s / gamma( e+2.0 );
			t = 1.0;
			do {
				// eslint-disable-next-line max-len
				r = digamma( 1.0+t ) + digamma( 1.0+t+e ) - digamma( a+t+d1 ) - digamma( b+t+d1 ) - ax;
				q = p * r;
				y += q;
				p *= s * ( a+t+d1 ) / ( t+1.0 );
				p *= ( b+t+d1 ) / ( t+1.0+e );
				t += 1.0;
				if ( t > MAX_ITERATIONS ) {
					loss = 1.0;
					return {
						'value': NaN,
						'error': loss
					};
				}
			} while ( y === 0.0 || abs( q/y ) > EPS );

			if ( id === 0.0 ) {
				y *= gamma( c ) / ( gamma( a ) * gamma( b ) );
				return {
					'value': y,
					'error': err
				};
			}

			y1 = 1.0;
			if ( aid !== 1.0 ) {
				t = 0.0;
				p = 1.0;
				for ( i = 1; i < aid; i++ ) {
					r = 1.0 - e + t;
					p *= s * ( a+t+d2 ) * ( b+t+d2 ) / r;
					t += 1.0;
					p /= t;
					y1 += p;
				}
			}

			p = gamma( c );
			y1 *= gamma( e ) * p / ( gamma( a+d1 ) * gamma( b+d1 ) );
			y *= p / ( gamma( a+d2 ) * gamma( b+d2 ) );
			if ( aid % 2.0 !== 0.0 ) {
				y = -y;
			}
			q = pow( s, id );
			y = ( id > 0.0 ) ? y*q : y1*q;
			y += y1;
		}
		return {
			'value': y,
			'error': err
		};
	}
	// Perform power series if no special cases:
	y = hys2f1( a, b, c, x, err );
	return y;
}


// EXPORTS //

module.exports = hyt2f1;
