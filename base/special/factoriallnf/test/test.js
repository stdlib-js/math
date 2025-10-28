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
var factorial = require( './../../../../base/special/factorial' );
var incrspace = require( '@stdlib/array/base/incrspace' );
var lnf = require( './../../../../base/special/lnf' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var ulpdiff = require( '@stdlib/number/float32/base/ulp-difference' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var factoriallnf = require( './../lib' );


// FIXTURES //

var veryLargePositive = require( './fixtures/julia/very_large_positive.json' );
var largePositive = require( './fixtures/julia/large_positive.json' );
var mediumPositive = require( './fixtures/julia/medium_positive.json' );
var smallPositive = require( './fixtures/julia/small_positive.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factoriallnf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a negative integer, the function returns `NaN`', function test( t ) {
	var values;
	var v;
	var i;

	values = incrspace( -1.0, -500.0, -1.0 );
	for ( i = 0; i < values.length; i++ ) {
		v = factoriallnf( f32( values[ i ] ) );
		t.strictEqual( isnanf( v ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'if provided negative infinity, the function returns `NaN`', function test( t ) {
	var v = factoriallnf( NINF );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided positive infinity, the function returns `+infinity`', function test( t ) {
	var v = factoriallnf( PINF );
	t.strictEqual( v, PINF, 'returns expected value' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', function test( t ) {
	var v = factoriallnf( NaN );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function evaluates the natural logarithm of the factorial of `x` (very large positive integers)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	expected = veryLargePositive.expected;
	x = veryLargePositive.x;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = factoriallnf( x[ i ] );
		t.strictEqual( ulpdiff( y, expected[ i ] ) <= 1, true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function evaluates the natural logarithm of the factorial of `x` (large positive integers)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	expected = largePositive.expected;
	x = largePositive.x;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = factoriallnf( x[ i ] );
		t.strictEqual( ulpdiff( y, expected[ i ] ) <= 2, true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function evaluates the natural logarithm of the factorial of `x` (medium positive values)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	expected = mediumPositive.expected;
	x = mediumPositive.x;
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = factoriallnf( x[ i ] );
		t.strictEqual( ulpdiff( y, expected[ i ] ) <= 3, true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function evaluates the natural logarithm of the factorial of `x` (small positive values)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	expected = smallPositive.expected;
	x = smallPositive.x;
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = factoriallnf( x[ i ] );
		t.strictEqual( ulpdiff( y, expected[ i ] ) <= 2, true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns a value almost equal to `lnf( factorial( x )` for `x` in `[0,34]`', function test( t ) {
	var expected;
	var values;
	var v;
	var i;

	values = incrspace( 0.0, 34.0, 0.5 );
	for ( i = 0; i < values.length; i++ ) {
		values[ i ] = f32( values[ i ] );
		v = factoriallnf( values[ i ] );

		// TODO: replace with `factorialf` when available
		expected = lnf( f32( factorial( values[ i ] ) ) );
		t.strictEqual( ulpdiff( v, expected ) <= 4, true, 'returns expected value' );
	}
	t.end();
});
