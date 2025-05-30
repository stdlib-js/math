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
var log2 = require( './../../../../base/special/log2' );
var isInteger = require( './../../../../base/assert/is-integer' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var isPow2Uint32 = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( isPow2Uint32 instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isPow2Uint32, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `0`, the function returns false', opts, function test( t ) {
	var bool = isPow2Uint32( 0 );
	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});

tape( 'the function tests whether an unsigned integer is a power of 2', opts, function test( t ) {
	var expected;
	var bool;
	var i;

	for ( i = 1; i < 1000; i++ ) {
		expected = isInteger( log2( i ) );
		bool = isPow2Uint32( i );
		t.strictEqual( bool, expected, 'returns '+expected+' when provided '+ i );
	}
	t.end();
});
