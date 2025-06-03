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
var pow = require( './../../../../base/special/pow' );
var absf = require( './../../../../base/special/absf' );
var fibonaccif = require( './../../../../base/special/fibonaccif' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var negafibonaccif = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( negafibonaccif instanceof Error )
};


// FIXTURES //

var NEGAFIBONACCIF = require( './../lib/negafibonaccif.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof negafibonaccif, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a positive number, the function returns `NaN`', opts, function test( t ) {
	var v;
	var i;

	t.strictEqual( isnanf( negafibonaccif( 3.14 ) ), true, 'returns expected value' );

	for ( i = 1; i < 100; i++ ) {
		v = negafibonaccif( i );
		t.strictEqual( isnanf( v ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns the nth negaFibonacci number', opts, function test( t ) {
	var v;
	var i;
	for ( i = 0; i > -37; i-- ) {
		v = negafibonaccif( i );
		t.strictEqual( v, NEGAFIBONACCIF[ absf(i) ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns the nth negaFibonacci number (Fibonacci relationship)', opts, function test( t ) {
	var v;
	var f;
	var i;
	for ( i = 0; i > -37; i-- ) {
		v = negafibonaccif( i );

		// TODO: replace with `powf` when available
		f = pow( -1.0, absf(i) + 1 ) * fibonaccif( absf(i) );
		t.strictEqual( v, f, 'returns expected value' );
	}
	t.end();
});

tape( 'if provided nonpositive integers less than `-36`, the function returns `NaN`', opts, function test( t ) {
	var i;
	var v;
	for ( i = -37; i > -100; i-- ) {
		v = negafibonaccif( i );
		t.strictEqual( isnanf( v ), true, 'returns expected value' );
	}
	t.end();
});
