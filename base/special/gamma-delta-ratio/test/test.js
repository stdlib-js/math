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

var tape = require( 'tape' );
var isnan = require( './../../../../base/assert/is-nan' );
var abs = require( './../../../../base/special/abs' );
var EPS = require( '@stdlib/constants/float64/eps' );
var gammaDeltaRatio = require( './../lib' );


// FIXTURES //

var decimalsIntegers = require( './fixtures/cpp/decimals_integers.json' );
var largeIntegers = require( './fixtures/cpp/large_integers.json' );
var smallIntegers = require( './fixtures/cpp/small_integers.json' );
var largeTiny = require( './fixtures/cpp/large_tiny.json' );
var tinyLarge = require( './fixtures/cpp/tiny_large.json' );
var decimals = require( './fixtures/cpp/decimals.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gammaDeltaRatio, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN` for either parameter', function test( t ) {
	var v;

	v = gammaDeltaRatio( NaN, 5.0 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = gammaDeltaRatio( 1.0, NaN );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = gammaDeltaRatio( NaN, NaN );
	t.equal( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns `0` for very large `z` and negligible `delta`', function test( t ) {
	var v;

	v = gammaDeltaRatio( 1.0e100, 20.7 );
	t.equal( v, 0.0, 'returns 0' );

	v = gammaDeltaRatio( 1.0e120, 100.1 );
	t.equal( v, 0.0, 'returns 0' );

	t.end();
});

tape( 'the function evaluates the ratio of two gamma functions (decimals)', function test( t ) {
	var expected;
	var delta;
	var diff;
	var tol;
	var v;
	var i;
	var z;

	z = decimals.z;
	diff = decimals.delta;
	expected = decimals.expected;
	for ( i = 0; i < z.length; i++ ) {
		v = gammaDeltaRatio( z[ i ], diff[ i ] );
		delta = abs( v - expected[ i ] );
		tol = 350.0 * EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. z: '+z[i]+'. delta: '+diff[i]+'. v: '+v+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol );
	}
	t.end();
});

tape( 'the function evaluates the ratio of two gamma functions (small integers)', function test( t ) {
	var expected;
	var delta;
	var diff;
	var tol;
	var v;
	var i;
	var z;

	z = smallIntegers.z;
	diff = smallIntegers.delta;
	expected = smallIntegers.expected;
	for ( i = 0; i < z.length; i++ ) {
		v = gammaDeltaRatio( z[ i ], diff[ i ] );
		delta = abs( v - expected[ i ] );
		tol = 10.0 * EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. z: '+z[i]+'. delta: '+diff[i]+'. v: '+v+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol );
	}
	t.end();
});

tape( 'the function evaluates the ratio of two gamma functions (large integers)', function test( t ) {
	var expected;
	var delta;
	var diff;
	var tol;
	var v;
	var i;
	var z;

	z = largeIntegers.z;
	diff = largeIntegers.delta;
	expected = largeIntegers.expected;
	for ( i = 0; i < z.length; i++ ) {
		v = gammaDeltaRatio( z[ i ], diff[ i ] );
		delta = abs( v - expected[ i ] );
		tol = 150.0 * EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. z: '+z[i]+'. delta: '+diff[i]+'. v: '+v+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol );
	}
	t.end();
});

tape( 'the function evaluates the ratio of two gamma functions (non-integer `z`, integer `delta`)', function test( t ) {
	var expected;
	var delta;
	var diff;
	var tol;
	var v;
	var i;
	var z;

	z = decimalsIntegers.z;
	diff = decimalsIntegers.delta;
	expected = decimalsIntegers.expected;
	for ( i = 0; i < z.length; i++ ) {
		v = gammaDeltaRatio( z[ i ], diff[ i ] );
		delta = abs( v - expected[ i ] );
		tol = 150.0 * EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. z: '+z[i]+'. delta: '+diff[i]+'. v: '+v+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol );
	}
	t.end();
});

tape( 'the function evaluates the ratio of two gamma functions (tiny `z`, large `delta`)', function test( t ) {
	var expected;
	var delta;
	var diff;
	var tol;
	var v;
	var i;
	var z;

	z = tinyLarge.z;
	diff = tinyLarge.delta;
	expected = tinyLarge.expected;
	for ( i = 0; i < z.length; i++ ) {
		v = gammaDeltaRatio( z[ i ], diff[ i ] );
		delta = abs( v - expected[ i ] );
		tol = 100.0 * EPS * abs( expected[ i ] );

		// Handle cases where either the expected value is zero or `v` is zero and the expected value is very small...
		if ( tol < 1.0e-300 ) {
			tol = 1.0e-300;
		}
		t.ok( delta <= tol, 'within tolerance. z: '+z[i]+'. delta: '+diff[i]+'. v: '+v+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol );
	}
	t.end();
});

tape( 'the function evaluates the ratio of two gamma functions (large `z`, tiny `delta`)', function test( t ) {
	var expected;
	var delta;
	var diff;
	var tol;
	var v;
	var i;
	var z;

	z = largeTiny.z;
	diff = largeTiny.delta;
	expected = largeTiny.expected;
	for ( i = 0; i < z.length; i++ ) {
		v = gammaDeltaRatio( z[ i ], diff[ i ] );
		delta = abs( v - expected[ i ] );
		tol = 1.0 * EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. z: '+z[i]+'. delta: '+diff[i]+'. v: '+v+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol );
	}
	t.end();
});
