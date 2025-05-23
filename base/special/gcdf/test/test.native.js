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
var isnan = require( './../../../../base/assert/is-nanf' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var gcdf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( gcdf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gcdf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if either argument is `NaN`', opts, function test( t ) {
	var v;

	v = gcdf( NaN, 10 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = gcdf( 10, NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = gcdf( NaN, NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `NaN` if either argument is `+infinity`', opts, function test( t ) {
	var v;

	v = gcdf( PINF, 10 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = gcdf( 10, PINF );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = gcdf( PINF, PINF );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `NaN` if either argument is `-infinity`', opts, function test( t ) {
	var v;

	v = gcdf( NINF, 10 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = gcdf( 10, NINF );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = gcdf( NINF, NINF );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `NaN` if either argument is not an integer value', opts, function test( t ) {
	var v;

	v = gcdf( 3.14, 10 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = gcdf( 10, 3.14 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = gcdf( 3.14, 6.18 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function computes the greatest common divisor', opts, function test( t ) {
	var v;

	v = gcdf( 0, 0 );
	t.strictEqual( v, 0, 'returns expected value' );

	v = gcdf( 1, 0 );
	t.strictEqual( v, 1, 'returns expected value' );

	v = gcdf( 0, 1 );
	t.strictEqual( v, 1, 'returns expected value' );

	v = gcdf( 6, 4 );
	t.strictEqual( v, 2, 'returns expected value' );

	v = gcdf( 6, -4 );
	t.strictEqual( v, 2, 'returns expected value' );

	v = gcdf( -6, -4 );
	t.strictEqual( v, 2, 'returns expected value' );

	v = gcdf( 15, 20 );
	t.strictEqual( v, 5, 'returns expected value' );

	v = gcdf( 20, 15 );
	t.strictEqual( v, 5, 'returns expected value' );

	v = gcdf( 35, -21 );
	t.strictEqual( v, 7, 'returns expected value' );

	v = gcdf( 48, 18 );
	t.strictEqual( v, 6, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing large integers (>= 2**31 - 1)', opts, function test( t ) {
	var TWO_100 = 1.2676506002282294e+30;
	var TWO_53 = 9007199254740992;
	var v;

	v = gcdf( TWO_100, 0 );
	t.strictEqual( v, TWO_100, 'returns expected value' );

	v = gcdf( 0, TWO_53 );
	t.strictEqual( v, TWO_53, 'returns expected value' );

	// Verified on Wolfram Alpha:
	v = gcdf( TWO_100, TWO_53 );
	t.strictEqual( v, TWO_53, 'returns expected value' );

	// Verified on Wolfram Alpha:
	v = gcdf( TWO_100, 73453 );
	t.strictEqual( v, 1, 'returns expected value' );

	// Verified on Wolfram Alpha:
	v = gcdf( TWO_100, 3491832 );
	t.strictEqual( v, 8, 'returns expected value' );

	// Verified on Wolfram Alpha:
	v = gcdf( 3491832, TWO_100 );
	t.strictEqual( v, 8, 'returns expected value' );

	t.end();
});
