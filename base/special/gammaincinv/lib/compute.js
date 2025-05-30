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

/* eslint-disable max-statements */

'use strict';

// MODULES //

var logger = require( 'debug' );
var evalpoly = require( './../../../../base/tools/evalpoly' );
var gammaln = require( './../../../../base/special/gammaln' );
var erfcinv = require( './../../../../base/special/erfcinv' );
var gamma = require( './../../../../base/special/gamma' );
var sqrt = require( './../../../../base/special/sqrt' );
var abs = require( './../../../../base/special/abs' );
var exp = require( './../../../../base/special/exp' );
var min = require( './../../../../base/special/min' );
var pow = require( './../../../../base/special/pow' );
var ln = require( './../../../../base/special/ln' );
var SQRT_TWO_PI = require( '@stdlib/constants/float64/sqrt-two-pi' );
var MAX_FLOAT32 = require( '@stdlib/constants/float32/max' );
var TWO_PI = require( '@stdlib/constants/float64/two-pi' );
var higherNewton = require( './higher_newton.js' );
var lambdaeta = require( './lambdaeta.js' );
var gamstar = require( './gamstar.js' );
var eps1 = require( './eps1.js' );
var eps2 = require( './eps2.js' );
var eps3 = require( './eps3.js' );


// VARIABLES //

var debug = logger( 'gammaincinv:compute' );
var HALF = 0.5;
var ONEO3 = 0.333333333333333333333333333333;
var ONEO4 = 0.25;
var ONEO5 = 0.2;
var ONEO6 = 0.166666666666666666666666666667;
var ONEO12 = 0.0833333333333333333333333333333;
var ONEO24 = 0.0416666666666666666666666666667;

// Coefficient workspace:
var CK = [ 0.0, 0.0, 0.0, 0.0, 0.0 ]; // WARNING: not thread safe


// MAIN //

/**
* Computes `x` in the equations `P(a,xr) = p` and `Q(a,xr) = q`, where `a` is a positive parameter and `p` and `q` satisfy `p+q = 1`.
*
* ## Notes
*
* -   The equation is inverted with `min(p,q)`.
*
* @private
* @param {number} a - scale value of incomplete gamma function
* @param {Probability} p - probability value
* @param {Probability} q - probability value
* @returns {number} solution of the equations `P(a,xr) = p` and `Q(a,xr) = q` where `a` is a positive parameter
*/
function compute( a, p, q ) {
	var ap1inv;
	var invfp;
	var lgama;
	var pcase;
	var porq;
	var ainv;
	var logr;
	var ap22;
	var ap14;
	var ap13;
	var ap12;
	var vgam;
	var vmin;
	var xini;
	var ap1;
	var ap2;
	var ap3;
	var eta;
	var p6;
	var p5;
	var x0;
	var a2;
	var L2;
	var L3;
	var L4;
	var b2;
	var b3;
	var p3;
	var a4;
	var fp;
	var p4;
	var p2;
	var a3;
	var xr;
	var ck;
	var b;
	var L;
	var i;
	var k;
	var m;
	var r;
	var s;
	var t;
	var y;

	if ( p < HALF ) {
		pcase = true;
		porq = p;
		s = -1.0;
	} else {
		pcase = false;
		porq = q;
		s = 1.0;
	}
	k = 0;
	if ( abs( a-1.0 ) < 1.0e-4 ) {
		m = 0;
		if ( pcase ) {
			if ( p < 1.0e-3 ) {
				p2 = p * p;
				p3 = p2 * p;
				p4 = p3 * p;
				p5 = p4 * p;
				p6 = p5 * p;
				x0 = p + ( p2*HALF ) + ( p3*(ONEO3) ) + ( p4*ONEO4 ) + ( p5*ONEO5 ) + ( p6*(ONEO6) ); // eslint-disable-line max-len
			} else {
				x0 = -ln( 1.0-p );
			}
		} else {
			x0 = -ln( q );
		}
		if ( a === 1.0 ) {
			k = 2;
			xr = x0;
		} else {
			lgama = gammaln( a );
			k = 1;
		}
	}
	if ( q < 1.0e-30 && a < HALF ) {
		m = 0;
		x0 = -ln( q*gamma(a) ) + ( ( a-1.0 ) * ln( -ln( q*gamma(a) ) ) );
		k = 1;
		lgama = gammaln( a );
	}
	if ( a > 1.0 && a < 500.0 && p < 1.0e-80 ) {
		m = 0;
		ainv = 1.0 / a;
		ap1inv = 1.0 / ( a+1.0 );
		x0 = ( gammaln( a+1.0 ) + ln( p ) ) * ainv;
		x0 = exp( x0 );
		xini = x0;
		for ( i = 0; i < 10; i++ ) {
			x0 = xini * exp( x0*ainv ) * pow( 1.0-( x0*ap1inv ), ainv );
		}
		k = 1;
		lgama = gammaln( a );
	}

	logr = (1.0/a) * ( ln(p) + gammaln( a+1.0 ) );
	if ( ( logr < ln( ONEO5 * ( 1.0+a ) ) ) && ( k === 0 ) ) {
		r = exp( logr );
		m = 0;
		a2 = a * a;
		a3 = a2 * a;
		a4 = a3 * a;
		ap1 = a + 1.0;
		ap12 = ap1 * ap1;
		ap13 = ap1 * ap12;
		ap14 = ap12 * ap12;
		ap2 = a + 2.0;
		ap22 = ap2 * ap2;
		ap3 = a + 3.0;
		CK[ 0 ] = 1.0;
		CK[ 1 ] = 1.0 / ap1;
		CK[ 2 ] = HALF * ( ( 3.0*a ) + 5.0 ) / ( ap12*ap2 );
		CK[ 3 ] = ONEO3 * ( 31.0 + (8.0*a2) + (33.0*a) ) / ( ap13*ap2*ap3 );
		CK[ 4 ] = ONEO24 * ( 2888.0 + (1179.0*a3) + (125.0*a4) + (3971.0*a2) + (5661.0*a) ) / ( ap14*ap22*ap3*( a+4.0 ) ); // eslint-disable-line max-len
		x0 = r * evalpoly( CK, r );
		lgama = gammaln( a );
		k = 1;
	}
	if ( ( a < 10.0 ) && ( k === 0 ) ) {
		vgam = sqrt( a ) / ( gamstar(a)*SQRT_TWO_PI );
		vmin = min( 0.02, vgam );
		if ( q < vmin ) {
			m = 0;
			b = 1.0 - a;
			b2 = b * b;
			b3 = b2 * b;
			eta = sqrt( -2.0/a * ln( q/vgam ) );
			x0 = a * lambdaeta( eta );
			L = ln( x0 );
			if ( x0 > 5.0 ) {
				L2 = L * L;
				L3 = L2 * L;
				L4 = L3 * L;
				r = 1.0 / x0;
				CK[ 0 ] = L - 1.0;
				CK[ 1 ] = ( (3.0*b) - (2.0*b*L) + L2 - ( 2.0*L ) + 2.0 ) * HALF;
				CK[ 2 ] =( (24.0*b*L) - (11.0*b2) - (24.0*b) - (6.0*L2) + (12.0*L) - 12.0 - (9.0*b*L2) + (6.0*b2*L) + (2.0*L3) ) * ONEO6; // eslint-disable-line max-len
				CK[ 3 ] = ( (-12.0*b3*L) + (8.04*b*L2) - (114.0*b2*L) + (72.0+(36.0*L2)) + (((3.0*L4)-(72.0*L)+162.0) * (b-(168.0*b*L))) - ((12.0*L3)+(25.0*b3)) - ( (22.0*b*L3)+(36.0*b2*L2)+(120.0*b2) ) ) * ONEO12; // eslint-disable-line max-len
				CK[ 4 ] = 0.0;
				x0 = x0 - L + ( b*r*evalpoly( CK, r ) );
			} else {
				r = 1.0 / x0;
				L2 = L * L;
				ck = L - 1.0;
				t = L - (b*r*ck);
				if ( t < x0 ) {
					x0 -= t;
				}
			}
			lgama = gammaln( a );
			k = 1;
		}
	}
	if ( ( abs( porq-HALF ) < 1.0e-5 ) && ( k === 0 ) ) {
		m = 0;
		ainv = 1.0 / a;
		x0 = a - ONEO3 + ( ( 0.0197530864197530864197530864198 +
			( 0.00721144424848128551832255535959*ainv ) ) * ainv );
		lgama = gammaln( a );
		k = 1;
	}
	if ( ( a < 1.0 ) && ( k === 0 ) ) {
		m = 0;
		if ( pcase ) {
			x0 = exp( (1.0/a) * ( ln(porq) + gammaln(a+1.0) ) );
		} else {
			x0 = exp( (1.0/a) * ( ln(1.0-porq) + gammaln(a+1.0) ) );
		}
		lgama = gammaln( a );
		k = 1;
	}
	if ( k === 0 ) {
		m = 1;
		ainv = 1.0 / a;
		r = erfcinv( 2.0 * porq );
		eta = s * r / sqrt( a*HALF );
		if ( r < MAX_FLOAT32 ) {
			eta += ( eps1(eta) + ( (eps2(eta)+(eps3(eta)*ainv))*ainv ) ) * ainv;
			x0 = a * lambdaeta(eta);
			y = eta;
			fp = -sqrt( a/TWO_PI ) * exp( -HALF*a*y*y ) / ( gamstar(a) );
			invfp = 1.0 / fp;
		} else {
			debug( 'Warning: Overflow problems in one or more steps of the computation.' );
			return NaN;
		}
	}
	if ( k < 2 ) {
		xr = higherNewton( x0, a, m, p, q, lgama, invfp, pcase );
	}
	return xr;
}


// EXPORTS //

module.exports = compute;
