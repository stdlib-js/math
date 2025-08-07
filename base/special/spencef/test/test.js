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
var PI_SQUARED = require( '@stdlib/constants/float32/pi-squared' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var EPS = require( '@stdlib/constants/float32/eps' );
var spencef = require( './../lib' );


// FIXTURES //

var small = require( './fixtures/python/small.json' );
var medium = require( './fixtures/python/medium.json' );
var large = require( './fixtures/python/large.json' );
var huge = require( './fixtures/python/huge.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof spencef, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function accurately computes the dilogarithm for small positive numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	x = small.x;
	expected = small.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = spencef( x[ i ] );
		delta = absf( v - expected[ i ] );
		tol = 1.3 * EPS * absf( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. actual: ' + v + '. expected: ' + expected[ i ] + '. tol: ' + tol + '. Δ: ' + delta + '.' );
	}
	t.end();
});

tape( 'the function accurately computes the dilogarithm for medium positive numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	x = medium.x;
	expected = medium.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = spencef( x[ i ] );
		delta = absf( v - expected[ i ] );
		tol = 8.2 * EPS * absf( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. actual: ' + v + '. expected: ' + expected[ i ] + '. tol: ' + tol + '. Δ: ' + delta + '.' );
	}
	t.end();
});

tape( 'the function accurately computes the dilogarithm for large positive numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	x = large.x;
	expected = large.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = spencef( x[ i ] );
		delta = absf( v - expected[ i ] );
		tol = 2.0 * EPS * absf( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. actual: ' + v + '. expected: ' + expected[ i ] + '. tol: ' + tol + '. Δ: ' + delta + '.' );
	}
	t.end();
});

tape( 'the function accurately computes the dilogarithm for huge positive numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	x = huge.x;
	expected = huge.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = spencef( x[ i ] );
		delta = absf( v - expected[ i ] );
		tol = 7.0 * EPS * absf( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. actual: ' + v + '. expected: ' + expected[ i ] + '. tol: ' + tol + '. Δ: ' + delta + '.' );
	}
	t.end();
});

tape( 'the function returns `0.0` if provided `1.0` for `x`', function test( t ) {
	var val = spencef( 1.0 );
	t.strictEqual( val, 0.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `PI^2/6` if provided `0.0` for `x`', function test( t ) {
	var val = spencef( 0.0 );
	t.strictEqual( val, f32( PI_SQUARED/6.0 ), 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` for negative numbers', function test( t ) {
	var val;
	var x;

	for ( x = -100; x < 0; x++ ) {
		val = spencef( x );
		t.strictEqual( isnanf( val ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', function test( t ) {
	var val = spencef( NaN );
	t.strictEqual( isnanf( val ), true, 'returns expected value' );
	t.end();
});
