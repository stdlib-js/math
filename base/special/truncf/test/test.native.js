/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var isNegativeZerof = require( './../../../../base/assert/is-negative-zerof' );
var isPositiveZerof = require( './../../../../base/assert/is-positive-zerof' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var truncf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( truncf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.true( typeof truncf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function rounds a numeric value toward 0', opts, function test( t ) {
	t.strictEqual( truncf( -4.2 ), -4.0, 'returns expected value' );
	t.strictEqual( truncf( 9.99999 ), 9.0, 'returns expected value' );
	t.end();
});

tape( 'if provided `+0`, the function returns `+0`', opts, function test( t ) {
	var v = truncf( 0.0 );
	t.strictEqual( isPositiveZerof( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `-0`, the function returns `-0`', opts, function test( t ) {
	var v = truncf( -0.0 );
	t.strictEqual( isNegativeZerof( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', opts, function test( t ) {
	var v = truncf( NaN );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+infinity` if provided `+infinity`', opts, function test( t ) {
	var v = truncf( PINF );
	t.strictEqual( v, PINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-infinity` if provided `-infinity`', opts, function test( t ) {
	var v = truncf( NINF );
	t.strictEqual( v, NINF, 'returns expected value' );
	t.end();
});
