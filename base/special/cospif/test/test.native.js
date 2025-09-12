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
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var cospif = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( cospif instanceof Error )
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
	t.strictEqual( typeof cospif, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided either positive or negative infinity', opts, function test( t ) {
	var y;

	y = cospif( PINF );
	t.strictEqual( isnanf( y ), true, 'returns expected value' );

	y = cospif( NINF );
	t.strictEqual( isnanf( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', opts, function test( t ) {
	var y = cospif( NaN );
	t.strictEqual( isnanf( y ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `1` if provided `+-0`', opts, function test( t ) {
	var y;

	y = cospif( f32( -0.0 ) );
	t.strictEqual( y, f32( 1.0 ), 'returns expected value' );

	y = cospif( f32( +0.0 ) );
	t.strictEqual( y, f32( 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'if provided an integer, the function returns `+-1.0`', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = integers.x;
	expected = integers.expected;
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = cospif( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function is even', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = decimals.x;
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected = f32( x[ i ] );
		y = cospif( -x[ i ] );
		expected = cospif( x[ i ] );
		t.strictEqual( y, expected, 'returns expected value' );
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
		y = cospif( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes `sin(πx) (small negative values)`', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = smallNegative.x;
	expected = smallNegative.expected;
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = cospif( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes `sin(πx) (small positive values)`', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = smallPositive.x;
	expected = smallPositive.expected;
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = cospif( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes `sin(πx) (large negative values)`', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = largeNegative.x;
	expected = largeNegative.expected;
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = cospif( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes `sin(πx) (large positive values)`', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = largePositive.x;
	expected = largePositive.expected;
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = cospif( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});
