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

/* eslint-disable max-len */

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var isPositiveZerof = require( './../../../../base/assert/is-positive-zerof' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var Float32Array = require( '@stdlib/array/float32' );
var minmaxabsf = require( './../lib/assign.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof minmaxabsf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` for both the minimum and maximum absolute value if provided a `NaN`', function test( t ) {
	var out;
	var v;

	out = new Float32Array( 2 );
	v = minmaxabsf( NaN, float64ToFloat32( 3.14 ), out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = minmaxabsf( float64ToFloat32( 3.14 ), NaN, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = minmaxabsf( NaN, NaN, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `Infinity` as the maximum value if provided `-Infinity`', function test( t ) {
	var out;
	var v;

	out = new Float32Array( 2 );
	v = minmaxabsf( NINF, float64ToFloat32( 3.14 ), out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], float64ToFloat32( 3.14 ), 'returns expected value' );
	t.strictEqual( v[ 1 ], PINF, 'returns expected value' );

	out = new Float32Array( 2 );
	v = minmaxabsf( float64ToFloat32( 3.14 ), NINF, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], float64ToFloat32( 3.14 ), 'returns expected value' );
	t.strictEqual( v[ 1 ], PINF, 'returns expected value' );

	t.end();
});

tape( 'the function returns `+Infinity` as the maximum value if provided `+Infinity`', function test( t ) {
	var out;
	var v;

	out = new Float32Array( 2 );
	v = minmaxabsf( PINF, float64ToFloat32( 3.14 ), out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], float64ToFloat32( 3.14 ), 'returns expected value' );
	t.strictEqual( v[ 1 ], PINF, 'returns expected value' );

	out = new Float32Array( 2 );
	v = minmaxabsf( float64ToFloat32( 3.14 ), PINF, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], float64ToFloat32( 3.14 ), 'returns expected value' );
	t.strictEqual( v[ 1 ], PINF, 'returns expected value' );

	t.end();
});

tape( 'the function returns correctly signed zeros', function test( t ) {
	var out;
	var v;

	out = new Float32Array( 2 );
	v = minmaxabsf( +0.0, -0.0, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( isPositiveZerof( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZerof( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = minmaxabsf( -0.0, +0.0, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( isPositiveZerof( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZerof( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = minmaxabsf( -0.0, -0.0, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( isPositiveZerof( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZerof( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = minmaxabsf( +0.0, +0.0, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( isPositiveZerof( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZerof( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the minimum and maximum absolute values', function test( t ) {
	var out;
	var v;

	out = new Float32Array( 2 );
	v = minmaxabsf( float64ToFloat32( 4.2 ), float64ToFloat32( 3.14 ), out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], float64ToFloat32( 3.14 ), 'returns expected value' );
	t.strictEqual( v[ 1 ], float64ToFloat32( 4.2 ), 'returns expected value' );

	out = new Float32Array( 2 );
	v = minmaxabsf( -float64ToFloat32( 4.2 ), float64ToFloat32( 3.14 ), out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], float64ToFloat32( 3.14 ), 'returns expected value' );
	t.strictEqual( v[ 1 ], float64ToFloat32( 4.2 ), 'returns expected value' );

	t.end();
});

tape( 'the function supports providing an output object (array)', function test( t ) {
	var out;
	var v;

	out = [ 0.0, 0.0 ];
	v = minmaxabsf( 4.2, 3.14, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], 3.14, 'returns expected value' );
	t.strictEqual( v[ 1 ], 4.2, 'returns expected value' );

	out = [ 0.0, 0.0 ];
	v = minmaxabsf( -4.2, -3.14, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], 3.14, 'returns expected value' );
	t.strictEqual( v[ 1 ], 4.2, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing an output object (typed array)', function test( t ) {
	var out;
	var v;

	out = new Float32Array( 2 );
	v = minmaxabsf( float64ToFloat32( 4.2 ), float64ToFloat32( 3.14 ), out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], float64ToFloat32( 3.14 ), 'returns expected value' );
	t.strictEqual( v[ 1 ], float64ToFloat32( 4.2 ), 'returns expected value' );

	out = new Float32Array( 2 );
	v = minmaxabsf( -float64ToFloat32( 4.2 ), float64ToFloat32( 3.14 ), out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], float64ToFloat32( 3.14 ), 'returns expected value' );
	t.strictEqual( v[ 1 ], float64ToFloat32( 4.2 ), 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var out;
	var val;

	out = new Float32Array( 4 );
	val = minmaxabsf( -float64ToFloat32( 4.2 ), float64ToFloat32( 3.14 ), out, 2, 0 );

	t.strictEqual( val, out, 'returns output array' );
	t.strictEqual( val[ 0 ], float64ToFloat32( 3.14 ), 'returns expected value' );
	t.strictEqual( val[ 1 ], 0, 'returns expected value' );
	t.strictEqual( val[ 2 ], float64ToFloat32( 4.2 ), 'returns expected value' );
	t.strictEqual( val[ 3 ], 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an offset', function test( t ) {
	var out;
	var val;

	out = new Float32Array( 4 );
	val = minmaxabsf( -float64ToFloat32( 4.2 ), float64ToFloat32( 3.14 ), out, 2, 1 );

	t.strictEqual( val, out, 'returns output array' );
	t.strictEqual( val[ 0 ], 0, 'returns expected value' );
	t.strictEqual( val[ 1 ], float64ToFloat32( 3.14 ), 'returns expected value' );
	t.strictEqual( val[ 2 ], 0, 'returns expected value' );
	t.strictEqual( val[ 3 ], float64ToFloat32( 4.2 ), 'returns expected value' );

	t.end();
});
