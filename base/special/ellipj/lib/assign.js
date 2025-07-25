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

'use strict';

// MODULES //

var logger = require( 'debug' );
var sincos = require( './../../../../base/special/sincos' ).assign;
var ellipk = require( './../../../../base/special/ellipk' );
var floor = require( './../../../../base/special/floor' );
var sqrt = require( './../../../../base/special/sqrt' );
var cosh = require( './../../../../base/special/cosh' );
var sinh = require( './../../../../base/special/sinh' );
var tanh = require( './../../../../base/special/tanh' );
var atan = require( './../../../../base/special/atan' );
var asin = require( './../../../../base/special/asin' );
var sin = require( './../../../../base/special/sin' );
var cos = require( './../../../../base/special/cos' );
var abs = require( './../../../../base/special/abs' );
var SQRT_EPS = require( '@stdlib/constants/float64/sqrt-eps' );
var EPS = require( '@stdlib/constants/float64/eps' );
var PI = require( '@stdlib/constants/float64/pi' );


// VARIABLES //

var debug = logger( 'ellipj:assign' );
var tmp4 = [ 0.0, 0.0, 0.0, 0.0 ];
var tmp2 = [ 0.0, 0.0 ];
var ca = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];


// MAIN //

/**
* Computes the Jacobi elliptic functions sn, cn, dn, and Jacobi amplitude am.
*
* @param {number} u - input value
* @param {number} m - modulus `m`, equivalent to `k²`
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array index offset
* @returns {Collection} output array
*
* @example
* var v = assign( 0.3, 0.5, [ 0.0, 0.0, 0.0, 0.0 ], 1, 0 );
* // returns [ ~0.293, ~0.956, ~0.978, ~0.298 ]
*
* @example
* var v = assign( 0.0, 0.0, [ 0.0, 0.0, 0.0, 0.0 ], 1, 0 );
* // returns [ ~0.0, ~1.0, ~1.0, ~0.0 ]
*
* @example
* var v = assign( Infinity, 1.0, [ 0.0, 0.0, 0.0, 0.0 ], 1, 0 );
* // returns [ ~1.0, ~0.0, ~0.0, ~1.571 ]
*
* @example
* var v = assign( 0.0, -2.0, [ 0.0, 0.0, 0.0, 0.0 ], 1, 0 );
* // returns [ ~0.0, ~1.0, ~1.0, NaN ]
*
* @example
* var v = assign( NaN, NaN, [ 0.0, 0.0, 0.0, 0.0 ], 1, 0 );
* // returns [ NaN, NaN, NaN, NaN ]
*/
function assign( u, m, out, stride, offset ) {
	var dnDenom;
	var NANFLG;
	var uK2cen;
	var k1inv;
	var sechu;
	var sinhu;
	var tanhu;
	var phi0;
	var phi1;
	var atmp;
	var FLG;
	var gdu;
	var uK2;
	var uK4;
	var mu;
	var K2;
	var K4;
	var u0;
	var sn;
	var cn;
	var dn;
	var am;
	var k;
	var s;
	var c;
	var f;
	var a;
	var b;
	var N;

	if ( m < 0.0 ) {
		// A&S 16.10.1 for a negative parameter, mapping -m to 0 < mu < 1
		mu = -m / ( 1.0 - m );
		k1inv = sqrt( 1.0 - m );
		assign( u * k1inv, mu, tmp4, 1, 0 );
		sn = ( tmp4[ 0 ] / tmp4[ 2 ] ) / k1inv;
		cn = tmp4[ 1 ] / tmp4[ 2 ];
		dn = 1.0 / tmp4[ 2 ];
		am = NaN;
	} else if ( m > 1.0 ) {
		// A&S 16.11.1 for reciprocal parameter, mapping m > 1 to 0 < mu < 1
		k = sqrt( m );
		assign( u * k, 1.0 / m, tmp4, 1, 0 );
		sn = tmp4[ 0 ] / k;
		cn = tmp4[ 2 ];
		dn = tmp4[ 1 ];
		am = NaN;
	} else if ( m === 0.0 ) {
		// A&S table 16.6, limiting case m = 0: circular trigonometric functions
		sincos( u, tmp2, 1, 0 );
		sn = tmp2[ 0 ];
		cn = tmp2[ 1 ];
		dn = 1.0;
		am = u;
	} else if ( m === 1.0 ) {
		// A&S table 16.6: limiting case m = 1: hyperbolic functions
		sn = tanh( u );
		cn = 1.0 / cosh( u );
		dn = cn;
		am = atan( sinh( u ) );
	} else if ( m < SQRT_EPS ) {
		// A&S 16.13.1 for small-u approximations. Additionally, compute K at extra cost in order to ensure returned values are correct outside the range [0, K].
		K4 = 4.0 * ellipk( m );
		u0 = ( ( u % K4 ) + K4 ) % K4;
		sincos( u0, tmp2, 1, 0 );
		s = tmp2[ 0 ];
		c = tmp2[ 1 ];
		f = 0.25 * m * ( u0 - ( s * c ) );
		sn = s - ( f * c );
		cn = c + ( f * s );
		dn = 1.0 - ( 0.5 * m * s * s );
		am = u - ( 0.25 * m * ( u - ( s * c ) ) );
	} else if ( m > 1.0 - SQRT_EPS ) {
		// A&S 16.15.1 - 16.15.4 for near-unity approximations. Additionally, compute K at extra cost so that we may reflect as needed to ensure the returned values are correct.

		// Reduce by the half-period 2K, centered about u = 0
		K2 = ellipk( m ) * 2.0;
		uK2cen = ( u / K2 ) + 0.5;
		uK2 = K2 * ( ( uK2cen % 1.0 ) - 0.5 );

		// Flip sn and cn in this range to get the reflections correct. We must be careful about precisely reusing uK2cen in order to get the edge cases correct.
		uK4 = uK2cen % 4;
		FLG = uK4 >= 1.0 && uK4 < 2.0;

		sinhu = sinh( uK2 );
		sechu = 1.0 / cosh( uK2 );
		tanhu = tanh( uK2 );
		gdu = ( floor( uK2cen ) * PI ) + atan( sinhu );

		a = 0.25 * ( 1.0 - m );
		b = a * ( sinhu - ( uK2 * sechu ) );
		sn = tanhu + ( b * sechu );
		cn = sechu - ( b * tanhu );
		dn = sechu + ( a * ( sinhu + ( uK2 * sechu ) ) * tanhu );
		am = gdu + b;

		if ( FLG ) {
			sn = -sn;
			cn = -cn;
		}
	} else {
		// A&S 16.4.1. Compute using the arithmetic-geometric mean.
		a = 1.0;
		b = sqrt( 1.0 - m );
		N = -1;
		NANFLG = false;
		do {
			N += 1;
			if ( N > 8 ) {
				NANFLG = true;
				sn = NaN;
				cn = NaN;
				dn = NaN;
				am = NaN;

				debug( 'Warning: Overflow encountered in iteration. Returning NaN for all output values.' );
				break;
			}
			atmp = ( a + b ) * 0.5;
			c = ( a - b ) * 0.5;
			b = sqrt( a * b );
			a = atmp;
			ca[ N ] = c / a;
		} while ( ca[ N ] >= EPS );

		if ( !NANFLG ) {
			// A&S 16.4.3:
			phi1 = ( 1 << N ) * ( u * a );
			while ( N > 1 ) {
				N -= 1;
				phi1 = 0.5 * ( phi1 + asin( ca[ N ] * sin( phi1 ) ) );
			}
			phi0 = 0.5 * ( phi1 + asin( ca[ 0 ] * sin( phi1 ) ) );

			am = phi0;
			sincos( am, tmp2, 1, 0 );
			sn = tmp2[ 0 ];
			cn = tmp2[ 1 ];

			// When the denominator is small, switch to the definition of dn in terms of sn. Otherwise compute dn from the last two iterates.
			dnDenom = cos( phi1 - phi0 );
			if ( abs( dnDenom ) < 0.1 ) {
				dn = sqrt( 1.0 - ( m * sn * sn ) );
			} else {
				dn = cn / dnDenom;
			}
		}
	}

	out[ offset ] = sn;
	out[ offset + stride ] = cn;
	out[ offset + ( stride * 2 ) ] = dn;
	out[ offset + ( stride * 3 ) ] = am;

	return out;
}

module.exports = assign;
