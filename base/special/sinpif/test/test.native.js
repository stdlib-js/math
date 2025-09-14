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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var ulpdiff = require( '@stdlib/number/float32/base/ulp-difference' );
var isNegativeZerof = require( './../../../../base/assert/is-negative-zerof' );
var isPositiveZerof = require( './../../../../base/assert/is-positive-zerof' );
var isSameValue = require( '@stdlib/assert/is-same-value' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var sinpif = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( sinpif instanceof Error )
};


// FIXTURES //

var integers = require( './fixtures/julia/integers.json' );
var decimals = require( './fixtures/julia/decimals.json' );
var smallPositive = require( './fixtures/julia/small_positive.json' );
var smallNegative = require( './fixtures/julia/small_negative.json' );
var largePositive = require( './fixtures/julia/large_positive.json' );
var largeNegative = require( './fixtures/julia/large_negative.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sinpif, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided either positive or negative infinity', opts, function test( t ) {
	var v = sinpif( PINF );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	v = sinpif( NINF );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', opts, function test( t ) {
	var y = sinpif( NaN );
	t.strictEqual( isnanf( y ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-0` if provided `-0`', opts, function test( t ) {
	var v = sinpif( -f32( 0.0 ) );
	t.strictEqual( isNegativeZerof( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+0` if provided `+0`', opts, function test( t ) {
	var v = sinpif( f32( 0.0 ) );
	t.strictEqual( isPositiveZerof( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided an integer, the function returns `+-0`', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = integers.x;
	expected = integers.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = sinpif( x[ i ] );
		t.strictEqual( isSameValue( y, expected[ i ] ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function is odd', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = decimals.x;
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		y = sinpif( -x[ i ] );
		expected = -sinpif( x[ i ] );
		t.strictEqual( isSameValue( y, expected ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes `sin(πx)` (decimal values)', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = decimals.x;
	expected = decimals.expected;
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = sinpif( x[ i ] );
		t.strictEqual( isSameValue( y, expected[ i ] ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes `sin(πx)` (small negative values)', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = smallNegative.x;
	expected = smallNegative.expected;
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = sinpif( x[ i ] );
		t.strictEqual( ulpdiff( y, expected[ i ] ) <= 1, true, 'returns expected value within 1 ulp' );
	}
	t.end();
});

tape( 'the function computes `sin(πx)` (small positive values)', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = smallPositive.x;
	expected = smallPositive.expected;
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = sinpif( x[ i ] );
		t.strictEqual( ulpdiff( y, expected[ i ] ) <= 1, true, 'returns expected value within 1 ulp' );
	}
	t.end();
});

tape( 'the function computes `sin(πx)` (large negative values)', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = largeNegative.x;
	expected = largeNegative.expected;
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = sinpif( x[ i ] );
		t.strictEqual( isSameValue( y, expected[ i ] ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes `sin(πx)` (large positive values)', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = largePositive.x;
	expected = largePositive.expected;
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = sinpif( x[ i ] );
		t.strictEqual( isSameValue( y, expected[ i ] ), true, 'returns expected value' );
	}
	t.end();
});
