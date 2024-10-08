/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var isNegativeZerof = require( './../../../../base/assert/is-negative-zerof' );
var isPositiveZerof = require( './../../../../base/assert/is-positive-zerof' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var minf = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof minf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', function test( t ) {
	var v;

	v = minf( NaN, 3.14 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = minf( 3.14, NaN );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-Infinity` if provided `-Infinity`', function test( t ) {
	var v;

	v = minf( NINF, 3.14 );
	t.strictEqual( v, NINF, 'returns expected value' );

	v = minf( 3.14, NINF );
	t.strictEqual( v, NINF, 'returns expected value' );

	t.end();
});

tape( 'the function returns a correctly signed zero', function test( t ) {
	var v;

	v = minf( +0.0, -0.0 );
	t.strictEqual( isNegativeZerof( v ), true, 'returns expected value' );

	v = minf( -0.0, +0.0 );
	t.strictEqual( isNegativeZerof( v ), true, 'returns expected value' );

	v = minf( -0.0, -0.0 );
	t.strictEqual( isNegativeZerof( v ), true, 'returns expected value' );

	v = minf( +0.0, +0.0 );
	t.strictEqual( isPositiveZerof( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the minimum value', function test( t ) {
	var v;

	v = minf( float64ToFloat32( 4.2 ), float64ToFloat32( 3.14 ) );
	t.strictEqual( v, float64ToFloat32( 3.14 ), 'returns expected value' );

	v = minf( float64ToFloat32( -4.2 ), float64ToFloat32( 3.14 ) );
	t.strictEqual( v, float64ToFloat32( -4.2 ), 'returns expected value' );

	t.end();
});
