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
var pow = require( './../../../../base/special/pow' );
var absf = require( './../../../../base/special/absf' );
var lucas = require( './../../../../base/special/lucas' );
var tryRequire = require( '@stdlib/utils/try-require' );


// FIXTURES //

var NEGALUCAS = require( './../lib/negalucas.json' );


// VARIABLES //

var negalucasf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( negalucasf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof negalucasf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a positive number, the function returns `NaN`', opts, function test( t ) {
	var v;
	var i;

	for ( i = 1; i < 100; i++ ) {
		v = negalucasf( i );
		t.strictEqual( isnanf( v ), true, 'returns expected value when provided ' + i );
	}
	t.end();
});

tape( 'the function returns the nth negaLucas number', opts, function test( t ) {
	var v;
	var i;
	for ( i = 0; i > -35; i-- ) {
		v = negalucasf( i );
		t.strictEqual( v, NEGALUCAS[ absf( i ) ], 'returns the '+i+'th negaLucas number' );
	}
	t.end();
});

tape( 'the function returns the nth negaLucas number (Lucas relationship)', opts, function test( t ) {
	var v;
	var f;
	var i;
	for ( i = 0; i > -35; i-- ) {
		v = negalucasf( i );
		f = pow( -1.0, absf(i) ) * lucas( absf(i) );
		t.strictEqual( v, f, 'returns the '+i+'th negaLucas number' );
	}
	t.end();
});

tape( 'if provided nonpositive integers less than `-34`, the function returns `NaN`', opts, function test( t ) {
	var i;
	var v;
	for ( i = -35; i > -500; i-- ) {
		v = negalucasf( i );
		t.strictEqual( isnanf( v ), true, 'returns expected value when provided ' + i );
	}
	t.end();
});
