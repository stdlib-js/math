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
var isPositiveZerof = require( './../../../../base/assert/is-positive-zerof' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var gammasgnf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( gammasgnf instanceof Error )
};


// FIXTURES //

var data = require( './fixtures/python/data.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gammasgnf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the sign of the gamma function', opts, function test( t ) {
	var expected;
	var x;
	var v;
	var i;

	x = data.x;
	expected = data.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = gammasgnf( x[ i ] );
		t.strictEqual( v, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', opts, function test( t ) {
	var v = gammasgnf( NaN );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+0` if provided `+0`', opts, function test( t ) {
	var v = gammasgnf( +0.0 );
	t.strictEqual( isPositiveZerof( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+0` if provided `-0`', opts, function test( t ) {
	var v = gammasgnf( -0.0 );
	t.strictEqual( isPositiveZerof( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+0` if provided a negative integer', opts, function test( t ) {
	var v;
	var i;

	for ( i = 0; i >= -100; i-- ) {
		v = gammasgnf( i );
		t.strictEqual( isPositiveZerof( v ), true, 'returns expected value' );
	}
	t.end();
});
