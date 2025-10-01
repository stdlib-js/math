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

// MODULES //

var tape = require( 'tape' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var absf = require( './../../../../base/special/absf' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var EPS = require( '@stdlib/constants/float32/eps' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var binomcoeff = require( './../lib' );


// FIXTURES //

var integers = require( './fixtures/julia/integers.json' );
var negativeN = require( './fixtures/julia/negative_n.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof binomcoeff, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN` for any parameter', function test( t ) {
	var v = binomcoeff( 3, NaN );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = binomcoeff( NaN, 2 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the binomial coefficient for integers `n` and `k`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var n;
	var k;
	var v;
	var i;

	n = integers.n;
	k = integers.k;
	expected = integers.expected;
	for ( i = 0; i < n.length; i++ ) {
		v = binomcoeff( n[ i ], k[ i ] );
		expected[ i ] = float64ToFloat32( expected[ i ] );
		if ( expected[ i ] === v ) {
			t.strictEqual( v, expected[ i ], 'returns expected value' );
			continue;
		}
		delta = absf( v - expected[ i ] );

		// NOTE: Exact comparison fails for large values due to single-precision floating-point rounding errors when intermediate results exceed the maximum safe integer for a 32-bit float.
		tol = 1.25 * EPS * absf( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. n: ' + n[ i ] + '. k: ' + k[ i ] + '. actual: ' + v + '. expected: ' + expected[ i ] + '. tol: ' + tol + '. Δ: ' + delta + '.' );
	}
	t.end();
});

tape( 'the function evaluates the binomial coefficient for integers `n` and `k` (negative `n`)', function test( t ) {
	var expected;
	var n;
	var k;
	var v;
	var i;

	n = negativeN.n;
	k = negativeN.k;
	expected = negativeN.expected;
	for ( i = 0; i < n.length; i++ ) {
		v = binomcoeff( n[ i ], k[ i ] );
		expected[ i ] = float64ToFloat32( expected[ i ] );
		t.strictEqual( v, expected[ i ], 'returns expected value. actual: '+v+'. expected: '+expected[i]+'. n: '+n[i]+'. k: '+k[i]+'.' );
	}
	t.end();
});

tape( 'the function returns `NaN` if provided a non-integer number for any parameter', function test( t ) {
	var v = binomcoeff( 3.14, 2 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = binomcoeff( 2, 3.14 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = binomcoeff( 3.14, 3.14 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `0` for a negative integer `k`', function test( t ) {
	var v = binomcoeff( 2, -1 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	v = binomcoeff( 2, -2 );
	t.strictEqual( v, 0.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `0` when `k` is greater than `n`', function test( t ) {
	var v = binomcoeff( 2, 4 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	v = binomcoeff( 2, 10 );
	t.strictEqual( v, 0.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+infinity` for large binomial coefficients that overflow', function test( t ) {
	var v;

	v = binomcoeff( 140, 70 );
	t.strictEqual( v, PINF, 'returns expected value' );

	v = binomcoeff( 150, 75 );
	t.strictEqual( v, PINF, 'returns expected value' );

	v = binomcoeff( 200, 100 );
	t.strictEqual( v, PINF, 'returns expected value' );

	t.end();
});
