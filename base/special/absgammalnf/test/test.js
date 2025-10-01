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
var lnf = require( './../../../../base/special/lnf' );
var pow = require( './../../../../base/special/pow' );
var ulpdiff = require( '@stdlib/number/float32/base/ulp-difference' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var absgammalnf = require( './../lib' );


// FIXTURES //

var decimals = require( './fixtures/julia/decimals.json' );
var integers = require( './fixtures/julia/integers.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof absgammalnf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', function test( t ) {
	var v = absgammalnf( NaN );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `infinity` when provided `infinity`', function test( t ) {
	var v = absgammalnf( PINF );
	t.strictEqual( v, PINF, 'returns expected value' );

	v = absgammalnf( NINF );
	t.strictEqual( v, NINF, 'returns expected value' );

	t.end();
});

tape( 'the function returns `+infinity` when provided `0`', function test( t ) {
	var v = absgammalnf( f32( 0.0 ) );
	t.strictEqual( v, PINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+infinity` for x smaller than or equal to `-2^23`', function test( t ) {
	// TODO: Replace with `powf` once available:
	var v = absgammalnf( f32( -pow( 2.0, 23 ) ) );
	t.strictEqual( v, PINF, 'returns expected value' );

	v = absgammalnf( f32( -pow( 2.0, 24 ) ) );
	t.strictEqual( v, PINF, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-ln(x)` for very small x', function test( t ) {
	var x;
	var v;

	x = f32( 2.0e-30 );
	v = absgammalnf( x );
	t.strictEqual( v, -lnf( x ), 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the natural logarithm of the gamma function (positive integers)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = integers.x;
	expected = integers.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ][ 0 ] = f32( expected[ i ][ 0 ] );
		y = absgammalnf( x[ i ] );
		t.strictEqual( ulpdiff( y, expected[ i ][ 0 ] ) <= 1, true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function evaluates the natural logarithm of the gamma function (decimal values)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = decimals.x;
	expected = decimals.expected;

	for ( i = 0; i < 1000; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ][ 0 ] = f32( expected[ i ][ 0 ] );
		y = absgammalnf( x[ i ] );
		t.strictEqual( ulpdiff( y, expected[ i ][ 0 ] ) <= 16, true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function evaluates the natural logarithm of the gamma function for x >= 2^27', function test( t ) {
	var expected;
	var x;
	var v;

	// TODO: Replace with `powf` once available:
	x = f32( pow( 2.0, 27 ) );
	v = absgammalnf( x );
	expected = f32( x * f32( lnf( x ) - f32( 1.0 ) ) );
	t.strictEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided a positive integer, the function returns the natural logarithm of the factorial of (n-1)', function test( t ) {
	t.strictEqual( absgammalnf( 4.0 ), lnf( 6.0 ), 'returns expected value' );
	t.strictEqual( absgammalnf( 5.0 ), lnf( 24.0 ), 'returns expected value' );
	t.strictEqual( absgammalnf( 6.0 ), lnf( 120.0 ), 'returns expected value' );
	t.end();
});

tape( 'the function returns `+infinity` for negative integers', function test( t ) {
	var v;

	v = absgammalnf( f32( -1.0 ) );
	t.strictEqual( v, PINF, 'returns expected value' );

	v = absgammalnf( f32( -2.0 ) );
	t.strictEqual( v, PINF, 'returns expected value' );

	v = absgammalnf( f32( -3.0 ) );
	t.strictEqual( v, PINF, 'returns expected value' );

	v = absgammalnf( f32( -4.0 ) );
	t.strictEqual( v, PINF, 'returns expected value' );

	v = absgammalnf( f32( -5.0 ) );
	t.strictEqual( v, PINF, 'returns expected value' );

	t.end();
});
