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
var tryRequire = require( '@stdlib/utils/try-require' );


// FIXTURES //

var TRIBONACCIF = require( './../lib/tribonaccif.json' );


// VARIABLES //

var tribonaccif = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( tribonaccif instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof tribonaccif, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a negative number, the function returns `NaN`', opts, function test( t ) {
	var v;
	var i;

	for ( i = -1; i > -100; i-- ) {
		v = tribonaccif( i );
		t.strictEqual( isnanf( v ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns the nth Tribonacci number', opts, function test( t ) {
	var v;
	var i;
	for ( i = 0; i < 31; i++ ) {
		v = tribonaccif( i );
		t.strictEqual( v, TRIBONACCIF[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'if provided nonnegative integers greater than `30`, the function returns `NaN`', opts, function test( t ) {
	var i;
	var v;
	for ( i = 31; i < 100; i++ ) {
		v = tribonaccif( i );
		t.strictEqual( isnanf( v ), true, 'returns expected value' );
	}
	t.end();
});
