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
var isNegativeZerof = require( './../../../../base/assert/is-negative-zerof' );
var isPositiveZerof = require( './../../../../base/assert/is-positive-zerof' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var minmaxf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( minmaxf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof minmaxf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` for both the minimum and maximum value if provided a `NaN`', opts, function test( t ) {
	var v;

	v = minmaxf( NaN, float64ToFloat32( 3.14 ) );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	v = minmaxf( float64ToFloat32( 3.14 ), NaN );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	v = minmaxf( NaN, NaN );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-Infinity` as the minimum value if provided `-Infinity`', opts, function test( t ) {
	var v;

	v = minmaxf( NINF, float64ToFloat32( 3.14 ) );
	t.strictEqual( v[ 0 ], NINF, 'returns expected value' );
	t.strictEqual( v[ 1 ], float64ToFloat32( 3.14 ), 'returns expected value' );

	v = minmaxf( float64ToFloat32( 3.14 ), NINF );
	t.strictEqual( v[ 0 ], NINF, 'returns expected value' );
	t.strictEqual( v[ 1 ], float64ToFloat32( 3.14 ), 'returns expected value' );

	t.end();
});

tape( 'the function returns `+Infinity` as the maximum value if provided `+Infinity`', opts, function test( t ) {
	var v;

	v = minmaxf( PINF, float64ToFloat32( 3.14 ) );
	t.strictEqual( v[ 0 ], float64ToFloat32( 3.14 ), 'returns expected value' );
	t.strictEqual( v[ 1 ], PINF, 'returns expected value' );

	v = minmaxf( float64ToFloat32( 3.14 ), PINF );
	t.strictEqual( v[ 0 ], float64ToFloat32( 3.14 ), 'returns expected value' );
	t.strictEqual( v[ 1 ], PINF, 'returns expected value' );

	t.end();
});

tape( 'the function returns correctly signed zeros', opts, function test( t ) {
	var v;

	v = minmaxf( +0.0, -0.0 );
	t.strictEqual( isNegativeZerof( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZerof( v[ 1 ] ), true, 'returns expected value' );

	v = minmaxf( -0.0, +0.0 );
	t.strictEqual( isNegativeZerof( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZerof( v[ 1 ] ), true, 'returns expected value' );

	v = minmaxf( -0.0, -0.0 );
	t.strictEqual( isNegativeZerof( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isNegativeZerof( v[ 1 ] ), true, 'returns expected value' );

	v = minmaxf( +0.0, +0.0 );
	t.strictEqual( isPositiveZerof( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZerof( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the minimum and maximum values', opts, function test( t ) {
	var v;

	v = minmaxf( float64ToFloat32( 4.2 ), float64ToFloat32( 3.14 ) );
	t.strictEqual( v[ 0 ], float64ToFloat32( 3.14 ), 'returns expected value' );
	t.strictEqual( v[ 1 ], float64ToFloat32( 4.2 ), 'returns expected value' );

	v = minmaxf( -float64ToFloat32( 4.2 ), float64ToFloat32( 3.14 ) );
	t.strictEqual( v[ 0 ], -float64ToFloat32( 4.2 ), 'returns expected value' );
	t.strictEqual( v[ 1 ], float64ToFloat32( 3.14 ), 'returns expected value' );

	t.end();
});
