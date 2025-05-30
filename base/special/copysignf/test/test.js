/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var NINF = require( '@stdlib/constants/float32/ninf' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var isNegativeZerof = require( './../../../../base/assert/is-negative-zerof' );
var isPositiveZerof = require( './../../../../base/assert/is-positive-zerof' );
var copysignf = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof copysignf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a single-precision floating-point number with the magnitude of `x` and the sign of `y`', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = data.x;
	y = data.y;
	expected = data.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = copysignf( x[i], y[i] );
		t.strictEqual( actual, expected[i], 'returns '+expected[i] );
	}
	t.end();
});

tape( 'if `x` is `NaN`, the function returns `NaN`', function test( t ) {
	var z;

	z = copysignf( NaN, -1.0 );
	t.strictEqual( isnanf( z ), true, 'returns expected value' );

	z = copysignf( NaN, 1.0 );
	t.strictEqual( isnanf( z ), true, 'returns expected value' );

	t.end();
});

tape( 'if `y` is `NaN`, the function could (theoretically) return either a positive or negative number', function test( t ) {
	var z;

	z = copysignf( -1.0, NaN );
	t.strictEqual( z, z, 'does not return NaN' );

	z = copysignf( 1.0, NaN );
	t.strictEqual( z, z, 'does not return NaN' );

	t.end();
});

tape( 'if `x` is `+infinity`, the function returns an infinite number', function test( t ) {
	var z;

	z = copysignf( PINF, -1.0 );
	t.strictEqual( z, NINF, 'returns expected value' );

	z = copysignf( PINF, 1.0 );
	t.strictEqual( z, PINF, 'returns expected value' );

	t.end();
});

tape( 'if `y` is `+infinity`, the function returns a positive number', function test( t ) {
	var z;

	z = copysignf( -1.0, PINF );
	t.strictEqual( z, 1.0, 'returns expected value' );

	z = copysignf( 1.0, PINF );
	t.strictEqual( z, 1.0, 'returns expected value' );

	t.end();
});

tape( 'if `x` is `-infinity`, the function returns an infinite number', function test( t ) {
	var z;

	z = copysignf( NINF, -1.0 );
	t.strictEqual( z, NINF, 'returns expected value' );

	z = copysignf( NINF, 1.0 );
	t.strictEqual( z, PINF, 'returns expected value' );

	t.end();
});

tape( 'if `y` is `-infinity`, the function returns a negative number', function test( t ) {
	var z;

	z = copysignf( -1.0, NINF );
	t.strictEqual( z, -1.0, 'returns expected value' );

	z = copysignf( 1.0, NINF );
	t.strictEqual( z, -1.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports copying a sign from `0`', function test( t ) {
	var x;
	var z;

	x = 3.0;

	z = copysignf( x, 0.0 );
	t.strictEqual( z, 3.0, 'returns expected value' );

	z = copysignf( x, -0.0 );
	t.strictEqual( z, -3.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports copying a sign to `0`', function test( t ) {
	var z;

	z = copysignf( -0.0, 1.0 );
	t.strictEqual( isPositiveZerof( z ), true, 'returns expected value' );

	z = copysignf( 0.0, -1.0 );
	t.strictEqual( isNegativeZerof( z ), true, 'returns expected value' );

	t.end();
});
