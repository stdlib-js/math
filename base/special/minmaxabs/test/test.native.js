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
var isnan = require( './../../../../base/assert/is-nan' );
var isPositiveZero = require( './../../../../base/assert/is-positive-zero' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var minmaxabs = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( minmaxabs instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof minmaxabs, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` for both the minimum and maximum absolute value if provided a `NaN`', opts, function test( t ) {
	var v;

	v = minmaxabs( NaN, 3.14 );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	v = minmaxabs( 3.14, NaN );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	v = minmaxabs( NaN, NaN );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `Infinity` as the maximum value if provided `-Infinity`', opts, function test( t ) {
	var v;

	v = minmaxabs( NINF, 3.14 );
	t.strictEqual( v[ 0 ], 3.14, 'returns expected value' );
	t.strictEqual( v[ 1 ], PINF, 'returns expected value' );

	v = minmaxabs( 3.14, NINF );
	t.strictEqual( v[ 0 ], 3.14, 'returns expected value' );
	t.strictEqual( v[ 1 ], PINF, 'returns expected value' );

	t.end();
});

tape( 'the function returns `+Infinity` as the maximum value if provided `+Infinity`', opts, function test( t ) {
	var v;

	v = minmaxabs( PINF, 3.14 );
	t.strictEqual( v[ 0 ], 3.14, 'returns expected value' );
	t.strictEqual( v[ 1 ], PINF, 'returns expected value' );

	v = minmaxabs( 3.14, PINF );
	t.strictEqual( v[ 0 ], 3.14, 'returns expected value' );
	t.strictEqual( v[ 1 ], PINF, 'returns expected value' );

	t.end();
});

tape( 'the function returns correctly signed zeros', opts, function test( t ) {
	var v;

	v = minmaxabs( +0.0, -0.0 );
	t.strictEqual( isPositiveZero( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( v[ 1 ] ), true, 'returns expected value' );

	v = minmaxabs( -0.0, +0.0 );
	t.strictEqual( isPositiveZero( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( v[ 1 ] ), true, 'returns expected value' );

	v = minmaxabs( -0.0, -0.0 );
	t.strictEqual( isPositiveZero( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( v[ 1 ] ), true, 'returns expected value' );

	v = minmaxabs( +0.0, +0.0 );
	t.strictEqual( isPositiveZero( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the minimum and maximum absolute values', opts, function test( t ) {
	var v;

	v = minmaxabs( 4.2, 3.14 );
	t.strictEqual( v[ 0 ], 3.14, 'returns min value' );
	t.strictEqual( v[ 1 ], 4.2, 'returns max value' );

	v = minmaxabs( -4.2, 3.14 );
	t.strictEqual( v[ 0 ], 3.14, 'returns min value' );
	t.strictEqual( v[ 1 ], 4.2, 'returns max value' );

	t.end();
});
