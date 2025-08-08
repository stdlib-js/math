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
var NINF = require( '@stdlib/constants/float64/ninf' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var isnan = require( './../../../../base/assert/is-nan' );
var isNegativeZero = require( './../../../../base/assert/is-negative-zero' );
var roundNearestEven = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof roundNearestEven, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function rounds a numeric value to the nearest integer', function test( t ) {
	t.strictEqual( roundNearestEven( -4.2 ), -4.0, 'returns expected value' );
	t.strictEqual( roundNearestEven( -4.5 ), -4.0, 'returns expected value' );
	t.strictEqual( roundNearestEven( -4.8 ), -5.0, 'returns expected value' );
	t.strictEqual( roundNearestEven( 4.2 ), 4.0, 'returns expected value' );
	t.strictEqual( roundNearestEven( 4.5 ), 4.0, 'returns expected value' );
	t.strictEqual( roundNearestEven( 9.99999 ), 10.0, 'returns expected value' );
	t.strictEqual( roundNearestEven( 9.5 ), 10.0, 'returns expected value' );
	t.strictEqual( roundNearestEven( 9.4 ), 9.0, 'returns expected value' );
	t.strictEqual( roundNearestEven( 0.0 ), 0.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-0` if provided `-0`', function test( t ) {
	var v = roundNearestEven( -0.0 );
	t.strictEqual( isNegativeZero( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', function test( t ) {
	var v = roundNearestEven( NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+infinity` if provided a `+infinity`', function test( t ) {
	var v = roundNearestEven( PINF );
	t.strictEqual( v, PINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-infinity` if provided a `-infinity`', function test( t ) {
	var v = roundNearestEven( NINF );
	t.strictEqual( v, NINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns the correct result for large positive non-decimal values', function test( t ) {
	var start = 4503599627370496;
	var end = 4503599627375000;
	var i;

	for ( i = start; i < end; i++ ) {
		t.strictEqual( roundNearestEven( i ), i, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns the correct result for large negative non-decimal values', function test( t ) {
	var start = -4503599627375000;
	var end = -4503599627370496;
	var i;

	for ( i = start; i < end; i++ ) {
		t.strictEqual( roundNearestEven( i ), i, 'returns expected value' );
	}
	t.end();
});

tape( 'the function rounds to the nearest even integer for positive decimal values', function test( t ) {
	var start = 0.0;
	var end = 100.0;
	var i;

	for ( i = start; i < end; i++ ) {
		if ( i % 2 === 0 ) {
			t.strictEqual( roundNearestEven( i + 0.5 ), i, 'returns expected value' );
		} else {
			t.strictEqual( roundNearestEven( i + 0.5 ), i + 1, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function rounds to the nearest even integer for negative decimal values', function test( t ) {
	var start = -100.0;
	var end = 0.0;
	var i;

	for ( i = start; i < end; i++ ) {
		if ( i % 2 === 0 ) {
			t.strictEqual( roundNearestEven( i - 0.5 ), i, 'returns expected value' );
		} else {
			t.strictEqual( roundNearestEven( i - 0.5 ), i - 1, 'returns expected value' );
		}
	}
	t.end();
});
