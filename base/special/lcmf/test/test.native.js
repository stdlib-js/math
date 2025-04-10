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
var isnanf = require( './../../../../base/assert/is-nanf' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var lcmf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( lcmf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof lcmf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if either argument is `NaN`', opts, function test( t ) {
	var v;

	v = lcmf( NaN, 10 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = lcmf( 10, NaN );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = lcmf( NaN, NaN );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `NaN` if either argument is `+infinity`', opts, function test( t ) {
	var v;

	v = lcmf( PINF, 10 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = lcmf( 10, PINF );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = lcmf( PINF, PINF );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `NaN` if either argument is `-infinity`', opts, function test( t ) {
	var v;

	v = lcmf( NINF, 10 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = lcmf( 10, NINF );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = lcmf( NINF, NINF );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `NaN` if either argument is not an integer value', opts, function test( t ) {
	var v;

	v = lcmf( 3.14, 10 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = lcmf( 10, 3.14 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = lcmf( 3.14, 6.18 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `0` if either argument is `0`', opts, function test( t ) {
	var v = lcmf( 0, 0 );
	t.strictEqual( v, 0, 'returns expected value' );

	v = lcmf( 2, 0 );
	t.strictEqual( v, 0, 'returns expected value' );

	v = lcmf( 0, -3 );
	t.strictEqual( v, 0, 'returns expected value' );

	t.end();
});

tape( 'the function computes the least common multiple', opts, function test( t ) {
	var v;

	v = lcmf( 0, 0 );
	t.strictEqual( v, 0, 'returns expected value' );

	v = lcmf( 1, 0 );
	t.strictEqual( v, 0, 'returns expected value' );

	v = lcmf( 0, 1 );
	t.strictEqual( v, 0, 'returns expected value' );

	v = lcmf( 6, 4 );
	t.strictEqual( v, 12, 'returns expected value' );

	v = lcmf( 6, -4 );
	t.strictEqual( v, 12, 'returns expected value' );

	v = lcmf( -6, -4 );
	t.strictEqual( v, 12, 'returns expected value' );

	v = lcmf( 2, 8 );
	t.strictEqual( v, 8, 'returns expected value' );

	v = lcmf( 15, 20 );
	t.strictEqual( v, 60, 'returns expected value' );

	v = lcmf( 20, 15 );
	t.strictEqual( v, 60, 'returns expected value' );

	v = lcmf( 35, -21 );
	t.strictEqual( v, 105, 'returns expected value' );

	v = lcmf( 48, 18 );
	t.strictEqual( v, 144, 'returns expected value' );

	t.end();
});
