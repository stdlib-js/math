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

var tape = require( 'tape' );
var isnan = require( './../../../../base/assert/is-nan' );
var isPositiveZero = require( './../../../../base/assert/is-positive-zero' );
var gammasgn = require( './../lib' );


// FIXTURES //

var random = require( './fixtures/python/random.json' );
var mediumNegative = require( './fixtures/python/medium_negative.json' );
var mediumPositive = require( './fixtures/python/medium_positive.json' );
var smallPositive = require( './fixtures/python/small_positive.json' );
var smallNegative = require( './fixtures/python/small_negative.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gammasgn, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the sign of the gamma function', function test( t ) {
	var expected;
	var x;
	var v;
	var i;

	x = random.x;
	expected = random.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = gammasgn( x[ i ] );
		t.strictEqual( v, expected[ i ], 'x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '.' );
	}
	t.end();
});

tape( 'the function computes the sign of the gamma function for small positive numbers', function test( t ) {
	var expected;
	var x;
	var v;
	var i;

	x = smallPositive.x;
	expected = smallPositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = gammasgn( x[ i ] );
		t.strictEqual( v, expected[ i ], 'x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '.' );
	}
	t.end();
});

tape( 'the function computes the sign of the gamma function for medium positive numbers', function test( t ) {
	var expected;
	var x;
	var v;
	var i;

	x = mediumPositive.x;
	expected = mediumPositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = gammasgn( x[ i ] );
		t.strictEqual( v, expected[ i ], 'x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '.' );
	}
	t.end();
});

tape( 'the function computes the sign of the gamma function for small negative numbers', function test( t ) {
	var expected;
	var x;
	var v;
	var i;

	x = smallNegative.x;
	expected = smallNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = gammasgn( x[ i ] );
		t.strictEqual( v, expected[ i ], 'x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '.' );
	}
	t.end();
});

tape( 'the function computes the sign of the gamma function for medium negative numbers', function test( t ) {
	var expected;
	var x;
	var v;
	var i;

	x = mediumNegative.x;
	expected = mediumNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = gammasgn( x[ i ] );
		t.strictEqual( v, expected[ i ], 'x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '.' );
	}
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', function test( t ) {
	var v = gammasgn( NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+0` if provided `+0`', function test( t ) {
	var v = gammasgn( +0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+0` if provided `-0`', function test( t ) {
	var v = gammasgn( -0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+0` if provided a negative integer', function test( t ) {
	var v;
	var i;

	for ( i = 0; i >= -100; i-- ) {
		v = gammasgn( i );
		t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );
	}
	t.end();
});
