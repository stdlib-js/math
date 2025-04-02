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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnan = require( './../../../../base/assert/is-nan' );
var isPositiveZero = require( './../../../../base/assert/is-positive-zero' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var minabs = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( minabs instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof minabs, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', opts, function test( t ) {
	var v;

	v = minabs( NaN, 3.14 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = minabs( 3.14, NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a correctly signed zero', opts, function test( t ) {
	var v;

	v = minabs( +0.0, -0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	v = minabs( -0.0, +0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	v = minabs( -0.0, -0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	v = minabs( +0.0, +0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the minimum absolute value', opts, function test( t ) {
	var v;

	v = minabs( 4.2, 3.14 );
	t.strictEqual( v, 3.14, 'returns expected value' );

	v = minabs( -4.2, 3.14 );
	t.strictEqual( v, 3.14, 'returns expected value' );

	v = minabs( PINF, 3.14 );
	t.strictEqual( v, 3.14, 'returns expected value' );

	v = minabs( 3.14, PINF );
	t.strictEqual( v, 3.14, 'returns expected value' );

	t.end();
});
