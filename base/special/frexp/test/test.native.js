/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var BIAS = require( '@stdlib/constants/float64/exponent-bias' );
var randu = require( '@stdlib/random/base/randu' );
var round = require( './../../../../base/special/round' );
var pow = require( './../../../../base/special/pow' );
var abs = require( './../../../../base/special/abs' );
var isNegativeZero = require( './../../../../base/assert/is-negative-zero' );
var isnan = require( './../../../../base/assert/is-nan' );
var tryRequire = require( '@stdlib/utils/try-require' );


// FIXTURES //

var small = require( './fixtures/julia/x_1e-200_1e-308.json' );
var medium = require( './fixtures/julia/x_-1e3_1e3.json' );
var large = require( './fixtures/julia/x_1e200_1e308.json' );
var subnormal = require( './fixtures/julia/x_1e-310_5e-324.json' );


// VARIABLES //

var frexp = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( frexp instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof frexp, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function splits a floating-point number into a normalized fraction and an integer power of two (small `x`)', opts, function test( t ) {
	var expected;
	var x;
	var f;
	var i;

	x = small.x;
	expected = small.expected;
	for ( i = 0; i < x.length; i++ ) {
		f = frexp( x[i] );
		t.deepEqual( f, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function splits a floating-point number into a normalized fraction and an integer power of two (medium `x`)', opts, function test( t ) {
	var expected;
	var x;
	var f;
	var i;

	x = medium.x;
	expected = medium.expected;
	for ( i = 0; i < x.length; i++ ) {
		f = frexp( x[i] );
		t.deepEqual( f, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function splits a floating-point number into a normalized fraction and an integer power of two (large `x`)', opts, function test( t ) {
	var expected;
	var x;
	var f;
	var i;

	x = large.x;
	expected = large.expected;
	for ( i = 0; i < x.length; i++ ) {
		f = frexp( x[i] );
		t.deepEqual( f, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function splits a floating-point number into a normalized fraction and an integer power of two (subnormal `x`)', opts, function test( t ) {
	var expected;
	var x;
	var f;
	var i;

	x = subnormal.x;
	expected = subnormal.expected;
	for ( i = 0; i < x.length; i++ ) {
		f = frexp( x[i] );
		t.deepEqual( f, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the returned normalized fraction and exponent satisfy the relation `x = frac * 2**exp`', opts, function test( t ) {
	var sign;
	var frac;
	var exp;
	var x;
	var f;
	var i;

	for ( i = 0; i < 1000; i++ ) {
		if ( randu() < 0.5 ) {
			sign = -1.0;
		} else {
			sign = 1.0;
		}
		frac = randu() * 10.0;
		exp = round( randu()*616.0 ) - 308;
		x = sign * frac * pow( 10.0, exp );
		f = frexp( x );

		if ( f[ 1 ] > BIAS ) {
			f = f[ 0 ] * pow( 2.0, BIAS ) * pow( 2.0, f[1]-BIAS );
		} else {
			f = f[ 0 ] * pow( 2.0, f[ 1 ] );
		}
		t.strictEqual( f, x, 'returns expected value' );
	}
	t.end();
});

tape( 'the absolute value of the normalized fraction is on the interval `[1/2,1)`', opts, function test( t ) {
	var sign;
	var frac;
	var exp;
	var x;
	var f;
	var i;

	for ( i = 0; i < 1000; i++ ) {
		if ( randu() < 0.5 ) {
			sign = -1.0;
		} else {
			sign = 1.0;
		}
		frac = randu() * 10.0;
		exp = round( randu()*614.0 ) - 307;
		x = sign * frac * pow( 10.0, exp );
		f = frexp( x );

		// Compute the absolute value of the normalized fraction:
		f = abs( f[ 0 ] );

		t.ok( f >= 0.5 && f < 1.0, 'returns expected value' );
	}
	t.end();
});

tape( 'if provided `+0`, the function returns `[0,0]`', opts, function test( t ) {
	var f = frexp( 0.0 );
	t.deepEqual( f, [ 0.0, 0 ], 'returns expected value' );
	t.end();
});

tape( 'if provided `-0`, the function returns `[-0,0]`', opts, function test( t ) {
	var f = frexp( -0.0 );
	t.strictEqual( isNegativeZero( f[0] ), true, 'returns expected value' );
	t.deepEqual( f, [ -0.0, 0 ], 'returns expected value' );
	t.end();
});

tape( 'if provided `+infinity`, the function returns `[+infinity,0]`', opts, function test( t ) {
	var f = frexp( PINF );
	t.deepEqual( f, [ PINF, 0 ], 'returns expected value' );
	t.end();
});

tape( 'if provided `-infinity`, the function returns `[-infinity,0]`', opts, function test( t ) {
	var f = frexp( NINF );
	t.deepEqual( f, [ NINF, 0 ], 'returns expected value' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `[NaN,0]`', opts, function test( t ) {
	var f = frexp( NaN );
	t.strictEqual( isnan( f[0] ), true, 'returns expected value' );
	t.strictEqual( f[ 1 ], 0, 'returns expected value' );
	t.end();
});
