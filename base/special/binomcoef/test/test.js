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
var binomcoef = require( './../lib' );


// FIXTURES //

var integers = require( './fixtures/julia/integers.json' );
var negativeN = require( './fixtures/julia/negative_n.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof binomcoef, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN` for any parameter', function test( t ) {
	var v = binomcoef( 3, NaN );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	v = binomcoef( NaN, 2 );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'the function evaluates the binomial coefficient for integers `n` and `k`', function test( t ) {
	var expected;
	var n;
	var k;
	var v;
	var i;

	n = integers.n;
	k = integers.k;
	expected = integers.expected;
	for ( i = 0; i < n.length; i++ ) {
		v = binomcoef( n[ i ], k[ i ] );
		t.strictEqual( v, expected[ i ], 'returns expected value. actual: '+v+'. expected: '+expected[i]+'. n: '+n[i]+'. k: '+k[i]+'.' );
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
		v = binomcoef( n[ i ], k[ i ] );
		t.strictEqual( v, expected[ i ], 'returns expected value. actual: '+v+'. expected: '+expected[i]+'. n: '+n[i]+'. k: '+k[i]+'.' );
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
		t.strictEqual( isnan( binomcoef( values[i], 2 ) ), true, 'returns NaN when provided '+values[i] );
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
		t.strictEqual( isnan( binomcoef( 2, values[i] ) ), true, 'returns NaN when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `0` for a negative integer `k`', function test( t ) {
	var v = binomcoef( 2, -1 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	v = binomcoef( 2, -2 );
	t.strictEqual( v, 0.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `0` when `k` is greater than `n`', function test( t ) {
	var v = binomcoef( 2, 4 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	v = binomcoef( 2, 10 );
	t.strictEqual( v, 0.0, 'returns expected value' );
	t.end();
});

tape( 'the function accurately computes the binomial coefficient for large `n` and `k`', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;

	// Ref: https://github.com/stdlib-js/stdlib/issues/1155
	values = [
		[ 54, 23 ],
		[ 55, 24 ],
		[ 56, 22 ],
		[ 58, 20 ],
		[ 69, 17 ]
	];
	expected = [
		1085929983159840,
		2488589544741300,
		2142582442263900,
		1847253511032930,
		5964720367660956
	];
	for ( i = 0; i < values.length; i++ ) {
		actual = binomcoef( values[i][0], values[i][1] );
		t.strictEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});
