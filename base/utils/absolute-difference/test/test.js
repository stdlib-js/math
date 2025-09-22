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
var abs = require( './../../../../base/special/abs' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var isnan = require( './../../../../base/assert/is-nan' );
var isPositiveZero = require( './../../../../base/assert/is-positive-zero' );
var diff = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof diff, 'function', 'main export is a function' );
	t.end();
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

	d = diff( NaN, NaN );
	t.strictEqual( isnan( d ), true, 'returns expected value' );

	t.end();
});

tape( 'the function computes the absolute difference', function test( t ) {
	var delta;
	var tol;
	var d;

	d = diff( 2.0, 5.0 );
	t.strictEqual( d, 3.0, 'returns 3' );

	d = diff( -1.0, 3.14 );
	delta = abs( d - 4.14 );
	tol = EPS * 4.14;
	t.ok( delta <= tol, 'returns ~4.14' );

	d = diff( 10.1, -2.05 );
	delta = abs( d - 12.15 );
	tol = EPS * 12.15;
	t.ok( delta <= tol, 'returns ~12.05' );

	d = diff( -0.0, 0.0 );
	t.strictEqual( isPositiveZero( d ), true, 'returns expected value' );

	d = diff( 0.0, -0.0 );
	t.strictEqual( isPositiveZero( d ), true, 'returns expected value' );

	t.end();
});
