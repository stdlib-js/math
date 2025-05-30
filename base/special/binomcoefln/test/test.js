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
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( './../../../../base/special/abs' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var binomcoefln = require( './../lib' );


// FIXTURES //

var arg1 = require( './fixtures/r/arg1.json' );
var arg2 = require( './fixtures/r/arg2.json' );
var expected = require( './fixtures/r/expected.json' );
var i;
var v;
for ( i = 0; i < expected.length; i++ ) {
	v = expected[ i ];
	if ( v === '-Inf' ) {
		expected[ i ] = NINF;
	}
	else if ( v === 'NaN' ) {
		expected[ i ] = NaN;
	}
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof binomcoefln, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN` for any parameter', function test( t ) {
	var v = binomcoefln( 3, NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = binomcoefln( NaN, 2 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the binomial coefficient for integers `m` and `k`', function test( t ) {
	var delta;
	var tol;
	var v;
	var i;

	for ( i = 0; i < expected.length; i++ ) {
		v = binomcoefln( arg1[ i ], arg2[ i ] );
		if ( v === expected[ i ] ) {
			t.strictEqual( v, expected[ i ], 'returns '+expected[i]+' when provided m: '+arg1[i]+' and k: '+arg2[i] );
		} else {
			delta = abs( v - expected[ i ] );
			tol = 21.5 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. m: ' + arg1[ i ] + ' k: ' + arg2[ i ] + '. actual: ' + v + '. E: ' + expected[ i ] + '. tol: ' + tol + '. Δ: ' + delta + '.' );
		}
	}
	t.end();
});

tape( 'the function returns `NaN` if the `n` value is not an integer', function test( t ) {
	var values;
	var i;

	values = [
		2.5,
		'5',
		null,
		true,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isnan( binomcoefln( values[i], 2 ) ), true, 'returns expected value when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `NaN` if the `k` value is not an integer', function test( t ) {
	var values;
	var i;

	values = [
		2.5,
		'5',
		null,
		true,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isnan( binomcoefln( 2, values[i] ) ), true, 'returns expected value when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `-Infinity` for a negative integer `k`', function test( t ) {
	var v = binomcoefln( 2, -1 );
	t.strictEqual( v, NINF, 'returns -Infinity' );

	v = binomcoefln( 2, -2 );
	t.strictEqual( v, NINF, 'returns -Infinity' );
	t.end();
});
