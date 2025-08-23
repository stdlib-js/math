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
var incrspace = require( '@stdlib/array/base/incrspace' );
var ulpdiff = require( '@stdlib/number/float32/base/ulp-difference' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var trigammaf = require( './../lib' );


// FIXTURES //

var positive = require( './fixtures/julia/positive.json' );
var negative = require( './fixtures/julia/negative.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof trigammaf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a `NaN`, the function returns `NaN`', function test( t ) {
	var val = trigammaf( NaN );
	t.strictEqual( isnanf( val ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `0`, the function returns `NaN`', function test( t ) {
	var val = trigammaf( f32( 0.0 ) );
	t.strictEqual( isnanf( val ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided positive infinity, the function returns `0`', function test( t ) {
	var val = trigammaf( PINF );
	t.strictEqual( val, 0.0, 'returns expected value' );
	t.end();
});

tape( 'if provided negative infinity, the function returns `NaN`', function test( t ) {
	var val = trigammaf( NINF );
	t.strictEqual( isnanf( val ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided a negative integer, the function returns `NaN`', function test( t ) {
	var values;
	var val;
	var i;

	values = incrspace( -1.0, -100.0, -1.0 );
	for ( i = 0; i < values.length; i++ ) {
		values[ i ] = f32( values[ i ] );
		val = trigammaf( values[ i ] );
		t.strictEqual( isnanf( val ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function evaluates the trigamma function for positive numbers', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = positive.x;
	expected = positive.expected;
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		y = trigammaf( x[ i ] );
		if ( expected[ i ] === null ) {
			t.strictEqual( isnanf( y ), true, 'returns expected value' );
			continue;
		}
		expected[ i ] = f32( expected[ i ] );
		t.strictEqual( ulpdiff( y, expected[ i ] ) <= 1, true, 'returns expected value within 1 ulp' );
	}
	t.end();
});

tape( 'the function evaluates the trigamma function for negative numbers', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = negative.x;
	expected = negative.expected;
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		y = trigammaf( x[ i ] );
		if ( expected[ i ] === null ) {
			t.strictEqual( isnanf( y ), true, 'returns expected value' );
			continue;
		}
		expected[ i ] = f32( expected[ i ] );
		t.strictEqual( ulpdiff( y, expected[ i ] ) <= 3, true, 'returns expected value within 3 ulp' );
	}
	t.end();
});
