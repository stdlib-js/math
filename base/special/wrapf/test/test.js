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
var isPositiveZerof = require( './../../../../base/assert/is-positive-zerof' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var wrapf = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof wrapf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any argument, the function returns `NaN`', function test( t ) {
	var v;

	v = wrapf( NaN, 0.0, 5.0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = wrapf( 0.0, NaN, 5.0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = wrapf( 3.14, 0.0, NaN );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = wrapf( NaN, NaN, 5.0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = wrapf( NaN, 0.0, NaN );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = wrapf( 3.14, NaN, NaN );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = wrapf( NaN, NaN, NaN );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a value which is between a minimum value (inclusive) and a maximum value (exclusive), the function returns the input value', function test( t ) {
	var v;

	v = wrapf( 3.14, 0.0, 5.0 );
	t.strictEqual( v, f32( 3.14 ), 'returns expected value' );

	v = wrapf( -3.14, -10.0, 15.0 );
	t.strictEqual( v, f32( -3.14 ), 'returns expected value' );

	v = wrapf( 3.14, 3.14, 5.0 );
	t.strictEqual( v, f32( 3.14 ), 'returns expected value' );

	v = wrapf( 3.13, 0.0, 3.14 );
	t.strictEqual( v, f32( 3.13 ), 'returns expected value' );

	t.end();
});

tape( 'if provided a value which less than a minimum value or greater than or equal to a maximum value, the function wraps the value using modulo arithmetic', function test( t ) {
	var v;

	v = wrapf( 13.00, 0.0, 5.0 );
	t.strictEqual( v, f32( 3.00 ), 'returns expected value' );

	v = wrapf( -13.1, -10.0, 15.0 );
	t.strictEqual( v, f32( 11.90 ), 'returns expected value' );

	v = wrapf( 10.0, 0.0, 5.0 );
	t.strictEqual( v, f32( 0.0 ), 'returns expected value' );

	v = wrapf( -10.0, 0.0, 5.0 );
	t.strictEqual( v, f32( 0.0 ), 'returns expected value' );

	v = wrapf( -30.0, 0.0, 5.0 );
	t.strictEqual( v, f32( 0.0 ), 'returns expected value' );

	v = wrapf( -30.0, -5.0, 0.0 );
	t.strictEqual( v, f32( -5.0 ), 'returns expected value' );

	v = wrapf( 30.0, 0.0, 5.0 );
	t.strictEqual( v, f32( 0.0 ), 'returns expected value' );

	v = wrapf( 31.0, 0.0, 5.0 );
	t.strictEqual( v, f32( 1.0 ), 'returns expected value' );

	v = wrapf( -31.0, -5.0, 0.0 );
	t.strictEqual( v, f32( -1.0 ), 'returns expected value' );

	v = wrapf( 0.0, -3.14, 0.0 );
	t.strictEqual( v, f32( -3.14 ), 'returns expected value' );

	v = wrapf( 0.0, -10.0, -0.0 );
	t.strictEqual( v, f32( -10.0 ), 'returns expected value' );

	v = wrapf( -0.0, -10.0, 0.0 );
	t.strictEqual( v, f32( -10.0 ), 'returns expected value' );

	v = wrapf( 0.0, -10.0, 0.0 );
	t.strictEqual( v, f32( -10.0 ), 'returns expected value' );

	v = wrapf( -0.0, -10.0, -0.0 );
	t.strictEqual( v, f32( -10.0 ), 'returns expected value' );

	t.end();
});

tape( 'the function does not distinguish between positive and negative zero', function test( t ) {
	var v;

	v = wrapf( -0.0, 0.0, 5.0 );
	t.strictEqual( isPositiveZerof( v ), true, 'returns expected value' );

	v = wrapf( 0.0, -0.0, 5.0 );
	t.strictEqual( isPositiveZerof( v ), true, 'returns expected value' );

	v = wrapf( -0.0, -0.0, 5.0 );
	t.strictEqual( isPositiveZerof( v ), true, 'returns expected value' );

	v = wrapf( 0.0, 0.0, 5.0 );
	t.strictEqual( isPositiveZerof( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `NaN` if provided a maximum value which is less than or equal to a minimum value', function test( t ) {
	var v;

	v = wrapf( 3.14, 10.0, 0.0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = wrapf( 3.14, 10.0, 10.0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = wrapf( 3.14, 3.0, 1.0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = wrapf( 3.14, 1.0, 1.0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});
