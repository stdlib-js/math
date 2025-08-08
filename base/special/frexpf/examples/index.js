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
*/

'use strict';

var randu = require( '@stdlib/random/base/randu' );
var roundf = require( './../../../../base/special/roundf' );
var pow = require( './../../../../base/special/pow' ); // TODO: replace with `powf` when available
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var BIAS = require( '@stdlib/constants/float32/exponent-bias' );
var frexpf = require( './../lib' );

var sign;
var frac;
var exp;
var x;
var f;
var v;
var i;

// Generate random numbers and break each into a normalized fraction and an integer power of two...
for ( i = 0; i < 100; i++ ) {
	if ( randu() < 0.5 ) {
		sign = f32( -1.0 );
	} else {
		sign = f32( 1.0 );
	}
	frac = f32( randu()*10.0 );
	exp = roundf( randu()*76.0 ) - 38;
	x = f32( sign * frac * f32( pow( 10.0, exp ) ) );
	f = frexpf( x );
	if ( f[ 1 ] > BIAS ) {
		v = f32( f[ 0 ] * f32( pow(2.0, f[1]-BIAS) ) * f32( pow(2.0, BIAS) ) );
	} else {
		v = f32( f[ 0 ] * f32( pow( 2.0, f[ 1 ] ) ) );
	}
	console.log( '%d = %d * 2^%d = %d', x, f[ 0 ], f[ 1 ], v );
}
