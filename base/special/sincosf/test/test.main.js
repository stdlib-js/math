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
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var sincosf = require( './../lib/main.js' );


// FIXTURES //

var mediumNegative = require( './fixtures/julia/medium_negative.json' );
var mediumPositive = require( './fixtures/julia/medium_positive.json' );
var largeNegative = require( './fixtures/julia/large_negative.json' );
var largePositive = require( './fixtures/julia/large_positive.json' );
var hugeNegative = require( './fixtures/julia/huge_negative.json' );
var hugePositive = require( './fixtures/julia/huge_positive.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sincosf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the sine and cosine (medium negative values)', function test( t ) {
	var cosine;
	var sine;
	var x;
	var y;
	var i;

	x = mediumNegative.x;
	sine = mediumNegative.sine;
	cosine = mediumNegative.cosine;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		y = sincosf( x[ i ] );
		sine[ i ] = f32( sine[ i ] );
		cosine[ i ] = f32( cosine[ i ] );
		t.strictEqual( y[ 0 ], sine[ i ], 'returns expected value' );
		t.strictEqual( y[ 1 ], cosine[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the sine and cosine (medium positive values)', function test( t ) {
	var cosine;
	var sine;
	var x;
	var y;
	var i;

	x = mediumPositive.x;
	sine = mediumPositive.sine;
	cosine = mediumPositive.cosine;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		y = sincosf( x[ i ] );
		sine[ i ] = f32( sine[ i ] );
		cosine[ i ] = f32( cosine[ i ] );
		t.strictEqual( y[ 0 ], sine[ i ], 'returns expected value' );
		t.strictEqual( y[ 1 ], cosine[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the sine and cosine (large negative values)', function test( t ) {
	var cosine;
	var sine;
	var x;
	var y;
	var i;

	x = largeNegative.x;
	sine = largeNegative.sine;
	cosine = largeNegative.cosine;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		y = sincosf( x[ i ] );
		sine[ i ] = f32( sine[ i ] );
		cosine[ i ] = f32( cosine[ i ] );
		t.strictEqual( y[ 0 ], sine[ i ], 'returns expected value' );
		t.strictEqual( y[ 1 ], cosine[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the sine and cosine (large positive values)', function test( t ) {
	var cosine;
	var sine;
	var x;
	var y;
	var i;

	x = largePositive.x;
	sine = largePositive.sine;
	cosine = largePositive.cosine;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		y = sincosf( x[ i ] );
		sine[ i ] = f32( sine[ i ] );
		cosine[ i ] = f32( cosine[ i ] );
		t.strictEqual( y[ 0 ], sine[ i ], 'returns expected value' );
		t.strictEqual( y[ 1 ], cosine[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the sine and cosine (huge negative values)', function test( t ) {
	var cosine;
	var sine;
	var x;
	var y;
	var i;

	x = hugeNegative.x;
	sine = hugeNegative.sine;
	cosine = hugeNegative.cosine;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		y = sincosf( x[ i ] );
		sine[ i ] = f32( sine[ i ] );
		cosine[ i ] = f32( cosine[ i ] );
		t.strictEqual( y[ 0 ], sine[ i ], 'returns expected value' );
		t.strictEqual( y[ 1 ], cosine[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the sine and cosine (huge positive values)', function test( t ) {
	var cosine;
	var sine;
	var x;
	var y;
	var i;

	x = hugePositive.x;
	sine = hugePositive.sine;
	cosine = hugePositive.cosine;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		y = sincosf( x[ i ] );
		sine[ i ] = f32( sine[ i ] );
		cosine[ i ] = f32( cosine[ i ] );
		t.strictEqual( y[ 0 ], sine[ i ], 'returns expected value' );
		t.strictEqual( y[ 1 ], cosine[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', function test( t ) {
	var v = sincosf( NaN );
	t.equal( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.equal( isnanf( v[ 1 ] ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided `+infinity`', function test( t ) {
	var v = sincosf( PINF );
	t.equal( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.equal( isnanf( v[ 1 ] ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided `-infinity`', function test( t ) {
	var v = sincosf( NINF );
	t.equal( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.equal( isnanf( v[ 1 ] ), true, 'returns expected value' );
	t.end();
});
