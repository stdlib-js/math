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
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var minmaxabsf = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof minmaxabsf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` for both the minimum and maximum absolute value if provided a `NaN`', function test( t ) {
	var v;

	v = minmaxabsf( NaN, 3.14 );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	v = minmaxabsf( 3.14, NaN );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	v = minmaxabsf( NaN, NaN );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `Infinity` as the maximum value if provided `-Infinity`', function test( t ) {
	var v;

	v = minmaxabsf( NINF, 3.14 );
	t.strictEqual( v[ 0 ], 3.14, 'returns expected value' );
	t.strictEqual( v[ 1 ], PINF, 'returns expected value' );

	v = minmaxabsf( 3.14, NINF );
	t.strictEqual( v[ 0 ], 3.14, 'returns expected value' );
	t.strictEqual( v[ 1 ], PINF, 'returns expected value' );

	t.end();
});

tape( 'the function returns `+Infinity` as the maximum value if provided `+Infinity`', function test( t ) {
	var v;

	v = minmaxabsf( PINF, 3.14 );
	t.strictEqual( v[ 0 ], 3.14, 'returns expected value' );
	t.strictEqual( v[ 1 ], PINF, 'returns expected value' );

	v = minmaxabsf( 3.14, PINF );
	t.strictEqual( v[ 0 ], 3.14, 'returns expected value' );
	t.strictEqual( v[ 1 ], PINF, 'returns expected value' );

	t.end();
});

tape( 'the function returns correctly signed zeros', function test( t ) {
	var v;

	v = minmaxabsf( +0.0, -0.0 );
	t.strictEqual( isPositiveZerof( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZerof( v[ 1 ] ), true, 'returns expected value' );

	v = minmaxabsf( -0.0, +0.0 );
	t.strictEqual( isPositiveZerof( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZerof( v[ 1 ] ), true, 'returns expected value' );

	v = minmaxabsf( -0.0, -0.0 );
	t.strictEqual( isPositiveZerof( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZerof( v[ 1 ] ), true, 'returns expected value' );

	v = minmaxabsf( +0.0, +0.0 );
	t.strictEqual( isPositiveZerof( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZerof( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the minimum and maximum absolute values', function test( t ) {
	var v;

	v = minmaxabsf( 4.2, 3.14 );
	t.strictEqual( v[ 0 ], 3.14, 'returns expected value' );
	t.strictEqual( v[ 1 ], 4.2, 'returns expected value' );

	v = minmaxabsf( -4.2, 3.14 );
	t.strictEqual( v[ 0 ], 3.14, 'returns expected value' );
	t.strictEqual( v[ 1 ], 4.2, 'returns expected value' );

	t.end();
});
