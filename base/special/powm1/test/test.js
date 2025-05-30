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
var randu = require( '@stdlib/random/base/randu' );
var abs = require( './../../../../base/special/abs' );
var expm1 = require( './../../../../base/special/expm1' );
var ln = require( './../../../../base/special/ln' );
var EPS = require( '@stdlib/constants/float64/eps' );
var powm1 = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/cpp/output.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof powm1, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function accepts two parameters: a base and an exponent', function test( t ) {
	t.strictEqual( powm1.length, 2, 'arity is 2' );
	t.end();
});

tape( 'if provided an exponent equal to `0`, the function returns `0`', function test( t ) {
	var i;
	for ( i = -100; i < 100; i++ ) {
		t.strictEqual( powm1( i, 0.0 ), 0.0, 'returns -1' );
		t.strictEqual( powm1( ( randu()*10.0 ) - 5.0, 0.0 ), 0.0, 'returns 0' );
	}
	t.end();
});

tape( 'if provided a base equal to `0`, the function returns `-1` (except when the base is 0)', function test( t ) {
	var i;
	for ( i = -100; i < 100; i++ ) {
		if ( i === 0 ) {
			t.strictEqual( powm1( 0.0, i ), 0.0, 'returns 0' );
			continue;
		}
		t.strictEqual( powm1( 0.0, i ), -1.0, 'returns -1' );
		t.strictEqual( powm1( 0.0, ( randu()*10.0 ) - 5.0 ), -1.0, 'returns -1' );
	}
	t.end();
});

tape( 'the function evaluates `bˣ - 1` (tested against Boost)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var b;
	var x;
	var y;
	var i;

	b = data.b;
	x = data.x;
	expected = data.expected;

	for ( i = 0; i < b.length; i++ ) {
		y = powm1( b[ i ], x[ i ] );
		delta = abs( y - expected[ i ] );
		tol = 2.0 * EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. b: ' + b[ i ] + 'x: ' + x[ i ] + '. actual: ' + y + '. E: ' + expected[ i ] + '. tol: ' + tol + '. Δ: ' + delta + '.' );
	}
	t.end();
});

tape( 'the function evaluates `bˣ - 1`', function test( t ) {
	t.strictEqual( powm1( 2.0, 3.0 ), 7.0, '2^3-1 = 7' );
	t.strictEqual( powm1( -5.0, 3.0 ), -126.0, '(-5)^3-1 = -126' );
	t.strictEqual( powm1( -5.0, 2.0 ), 24.0, '(-5)^2-1 = 24' );
	t.strictEqual( powm1( 1.0e6, 0.1 ), 2.9810717055349727, '1e6^0.1-1 ~ 2.981' );
	t.end();
});

tape( 'the function evaluates `bˣ - 1` as expm1( ln(b) * x ) for sufficiently small b or x', function test( t ) {
	var expected;
	var actual;

	expected = expm1( ln(4.0)*1.0e-3 );
	actual = powm1( 4.0, 1.0e-3 );
	t.strictEqual( actual, expected, '4**(1e-3) = exp( ln(4)*1e-3 )' );

	expected = expm1( ln(1.1)*0.4 );
	actual = powm1( 1.1, 0.4 );
	t.strictEqual( actual, expected, '1.1**(0.4) = exp( ln(1.1)*0.4 )' );

	t.end();
});

tape( 'the function returns `NaN` if provided a negative base and a exponent which is not an integer', function test( t ) {
	var y;

	y = powm1( -125.0, 1.0/3.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = powm1( -16.0, -0.5 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = powm1( -2.0, -1.25 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN` for the exponent', function test( t ) {
	var y = powm1( -3.0, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN` for the base', function test( t ) {
	var y = powm1( NaN, 5.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `1e308` for the base and `2.0` for the exponent', function test( t ) {
	var y = powm1( 1e308, 2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});
