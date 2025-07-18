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
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var haversinf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( haversinf instanceof Error )
};


// FIXTURES //

var mediumNegative = require( './fixtures/julia/medium_negative.json' );
var mediumPositive = require( './fixtures/julia/medium_positive.json' );
var largeNegative = require( './fixtures/julia/large_negative.json' );
var largePositive = require( './fixtures/julia/large_positive.json' );
var hugeNegative = require( './fixtures/julia/huge_negative.json' );
var hugePositive = require( './fixtures/julia/huge_positive.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof haversinf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the half-value versed sine (for -256*pi < x < 0 )', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = mediumNegative.x;
	expected = mediumNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = haversinf( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the half-value versed sine (for 0 < x < 256*pi )', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = mediumPositive.x;
	expected = mediumPositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = haversinf( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the half-value versed sine (for -2**60 (pi/2) < x < -2**20 (pi/2) )', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = largeNegative.x;
	expected = largeNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = haversinf( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the half-value versed sine (for 2**20 (pi/2) < x < 2**60 (pi/2) )', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = largePositive.x;
	expected = largePositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = haversinf( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the half-value versed sine (for x <= -2**60 (PI/2) )', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = hugeNegative.x;
	expected = hugeNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = haversinf( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the half-value versed sine (for x >= 2**60 (PI/2) )', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = hugePositive.x;
	expected = hugePositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = haversinf( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', opts, function test( t ) {
	var v = haversinf( NaN );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided `+infinity`', opts, function test( t ) {
	var v = haversinf( PINF );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided `-infinity`', opts, function test( t ) {
	var v = haversinf( NINF );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});
