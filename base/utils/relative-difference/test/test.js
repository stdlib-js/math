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
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var isnan = require( './../../../../base/assert/is-nan' );
var isPositiveZero = require( './../../../../base/assert/is-positive-zero' );
var abs = require( './../../../../base/special/abs' );
var diff = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof diff, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an unrecognized/unsupported `scale` function name', function test( t ) {
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		diff( -2.0, 5.0, 'abcdefg' );
	}
});

tape( 'if both `x` and `y` equal `+infinity`, the function returns `NaN`', function test( t ) {
	var d = diff( PINF, PINF );
	t.strictEqual( isnan( d ), true, 'returns expected value' );
	t.end();
});

tape( 'if both `x` and `y` equal `-infinity`, the function returns `NaN`', function test( t ) {
	var d = diff( NINF, NINF );
	t.strictEqual( isnan( d ), true, 'returns expected value' );
	t.end();
});

tape( 'if `x` or `y` equals `+infinity` and the other value equals any other number (beside +infinity), the function returns `+infinity`', function test( t ) {
	var values;
	var d;
	var i;

	values = [
		NINF,
		5.0,
		10.0,
		3.14,
		-1.0e308
	];

	for ( i = 0; i < values.length; i++ ) {
		d = diff( PINF, values[i] );
		t.strictEqual( d, PINF, 'returns expected value' );

		d = diff( values[i], PINF );
		t.strictEqual( d, PINF, 'returns expected value' );
	}
	t.end();
});

tape( 'if `x` or `y` equals `-infinity` and the other value equals any other number (beside -infinity), the function returns `+infinity`', function test( t ) {
	var values;
	var d;
	var i;

	values = [
		PINF,
		5.0,
		10.0,
		3.14,
		-1.0e308
	];

	for ( i = 0; i < values.length; i++ ) {
		d = diff( NINF, values[i] );
		t.strictEqual( d, PINF, 'returns expected value' );

		d = diff( values[i], NINF );
		t.strictEqual( d, PINF, 'returns expected value' );
	}
	t.end();
});

tape( 'if `x` and/or `y` is `NaN`, the function returns `NaN`', function test( t ) {
	var d;

	d = diff( NaN, 5.0 );
	t.strictEqual( isnan( d ), true, 'returns expected value' );

	d = diff( 3.0, NaN );
	t.strictEqual( isnan( d ), true, 'returns expected value' );

	t.end();
});

tape( 'if `x = y` and `x` and `y` are both finite, the function always returns `0`', function test( t ) {
	var values;
	var v;
	var d;
	var i;

	values = [
		5.0,
		-1.0,
		3.14,
		-3.14,
		0.0,
		-0.0,
		1.0e308,
		-1.0e-324
	];

	for ( i = 0; i < values.length; i++ ) {
		v = values[ i ];
		d = diff( v, v );
		t.strictEqual( d, 0.0, 'returns expected value' );
	}
	t.end();
});

tape( 'if `x` and `y` both equal `+-0`, the function returns `0`', function test( t ) {
	var d;

	d = diff( -0.0, 0.0 );
	t.strictEqual( isPositiveZero( d ), true, 'returns expected value' );

	d = diff( -0.0, -0.0 );
	t.strictEqual( isPositiveZero( d ), true, 'returns expected value' );

	d = diff( 0.0, 0.0 );
	t.strictEqual( isPositiveZero( d ), true, 'returns expected value' );

	d = diff( 0.0, -0.0 );
	t.strictEqual( isPositiveZero( d ), true, 'returns expected value' );

	t.end();
});

tape( 'if a scale function returns `0`, the function returns `NaN`', function test( t ) {
	var d;

	d = diff( -1.0, 1.0, 'mean' );
	t.strictEqual( isnan( d ), true, 'returns expected value' );

	d = diff( -1.0, 0.0, 'max' );
	t.strictEqual( isnan( d ), true, 'returns expected value' );

	d = diff( 0.0, 1.0, 'min' );
	t.strictEqual( isnan( d ), true, 'returns expected value' );

	d = diff( 0.0, -1.0, 'min-abs' );
	t.strictEqual( isnan( d ), true, 'returns expected value' );

	d = diff( 0.0, 5.0, 'x' );
	t.strictEqual( isnan( d ), true, 'returns expected value' );

	d = diff( 5.0, 0.0, 'y' );
	t.strictEqual( isnan( d ), true, 'returns expected value' );

	d = diff( 2.0, 5.0, scale );
	t.strictEqual( isnan( d ), true, 'returns expected value' );

	t.end();

	function scale() {
		return 0;
	}
});

tape( 'the function computes the relative difference (default)', function test( t ) {
	var d;

	d = diff( -2.0, 5.0 );
	t.strictEqual( d, 1.4, 'returns 1.4' );

	d = diff( 5.0, -2.0 );
	t.strictEqual( d, 1.4, 'returns 1.4' );

	t.end();
});

tape( 'the function computes the relative difference (max-abs)', function test( t ) {
	var d;

	d = diff( -2.0, 5.0, 'max-abs' );
	t.strictEqual( d, 1.4, 'returns 1.4' );

	d = diff( 5.0, -2.0, 'max-abs' );
	t.strictEqual( d, 1.4, 'returns 1.4' );

	t.end();
});

tape( 'the function computes the relative difference (max)', function test( t ) {
	var d;

	d = diff( 1.0, 10.0, 'max' );
	t.strictEqual( d, 0.9, 'returns 0.9' );

	d = diff( 10.0, 1.0, 'max' );
	t.strictEqual( d, 0.9, 'returns 0.9' );

	d = diff( -1.0, -10.0, 'max' );
	t.strictEqual( d, 9.0, 'returns 9' );

	d = diff( -10.0, -1.0, 'max' );
	t.strictEqual( d, 9.0, 'returns 9' );

	t.end();
});

tape( 'the function computes the relative difference (min-abs)', function test( t ) {
	var d;

	d = diff( 1.0, 10.0, 'min-abs' );
	t.strictEqual( d, 9.0, 'returns 9' );

	d = diff( 10.0, 1.0, 'min-abs' );
	t.strictEqual( d, 9.0, 'returns 9' );

	d = diff( -1.0, 10.0, 'min-abs' );
	t.strictEqual( d, 11.0, 'returns 11' );

	d = diff( 10.0, -1.0, 'min-abs' );
	t.strictEqual( d, 11.0, 'returns 11' );

	t.end();
});

tape( 'the function computes the relative difference (min)', function test( t ) {
	var d;

	d = diff( 1.0, 10.0, 'min' );
	t.strictEqual( d, 9.0, 'returns 9' );

	d = diff( 10.0, 1.0, 'min' );
	t.strictEqual( d, 9.0, 'returns 9' );

	d = diff( -1.0, 10.0, 'min' );
	t.strictEqual( d, 11.0, 'returns 11' );

	d = diff( 10.0, -1.0, 'min' );
	t.strictEqual( d, 11.0, 'returns 11' );

	t.end();
});

tape( 'the function computes the relative difference (x)', function test( t ) {
	var d;

	d = diff( 1.0, 10.0, 'x' );
	t.strictEqual( d, 9.0, 'returns 9' );

	d = diff( 10.0, 1.0, 'x' );
	t.strictEqual( d, 0.9, 'returns 0.9' );

	d = diff( -1.0, 10.0, 'x' );
	t.strictEqual( d, 11, 'returns 11' );

	d = diff( 10.0, -1.0, 'x' );
	t.strictEqual( d, 1.1, 'returns 1.1' );

	t.end();
});

tape( 'the function computes the relative difference (y)', function test( t ) {
	var d;

	d = diff( 1.0, 10.0, 'y' );
	t.strictEqual( d, 0.9, 'returns 0.9' );

	d = diff( 10.0, 1.0, 'y' );
	t.strictEqual( d, 9.0, 'returns 9' );

	d = diff( -1.0, 10.0, 'y' );
	t.strictEqual( d, 1.1, 'returns 1.1' );

	d = diff( 10.0, -1.0, 'y' );
	t.strictEqual( d, 11.0, 'returns 11' );

	t.end();
});

tape( 'the function computes the relative difference (mean)', function test( t ) {
	var d;

	d = diff( 1.0, 10.0, 'mean' );
	t.strictEqual( d, 9.0/5.5, 'returns 9/5.5' );

	d = diff( 10.0, 1.0, 'mean' );
	t.strictEqual( d, 9.0/5.5, 'returns 9/5.5' );

	d = diff( -1.0, 10.0, 'mean' );
	t.strictEqual( d, 11.0/4.5, 'returns 11/4.5' );

	d = diff( 10.0, -1.0, 'mean' );
	t.strictEqual( d, 11.0/4.5, 'returns 11/4.5' );

	t.end();
});

tape( 'the function computes the relative difference (mean-abs)', function test( t ) {
	var d;

	d = diff( 1.0, 10.0, 'mean-abs' );
	t.strictEqual( d, 9.0/5.5, 'returns 9/5.5' );

	d = diff( 10.0, 1.0, 'mean-abs' );
	t.strictEqual( d, 9.0/5.5, 'returns 9/5.5' );

	d = diff( -1.0, 10.0, 'mean-abs' );
	t.strictEqual( d, 11.0/5.5, 'returns 11/5.5' );

	d = diff( 10.0, -1.0, 'mean-abs' );
	t.strictEqual( d, 11.0/5.5, 'returns 11/5.5' );

	t.end();
});

tape( 'the function supports custom scale functions', function test( t ) {
	var expected;
	var d;

	d = diff( 12.15, 12.149999999999999, scale );

	expected = ((12.15-12.149999999999999)/12.15) / EPS;

	t.strictEqual( d, expected, 'returns '+expected );
	t.end();

	function scale( x, y ) {
		var s;
		x = abs( x );
		y = abs( y );

		// Max absolute value:
		s = ( x < y ) ? y : x;

		// Scale in units of epsilon:
		return s * EPS;
	}
});
