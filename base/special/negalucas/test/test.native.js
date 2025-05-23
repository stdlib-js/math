/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var pow = require( './../../../../base/special/pow' );
var abs = require( './../../../../base/special/abs' );
var lucas = require( './../../../../base/special/lucas' );
var tryRequire = require( '@stdlib/utils/try-require' );


// FIXTURES //

var NEGALUCAS = require( './../lib/negalucas.json' );


// VARIABLES //

var negalucas = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( negalucas instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof negalucas, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a positive number, the function returns `NaN`', opts, function test( t ) {
	var v;
	var i;

	for ( i = 1; i < 100; i++ ) {
		v = negalucas( i );
		t.strictEqual( isnan( v ), true, 'returns expected value when provided ' + i );
	}
	t.end();
});

tape( 'the function returns the nth negaLucas number', opts, function test( t ) {
	var v;
	var i;
	for ( i = 0; i > -77; i-- ) {
		v = negalucas( i );
		t.strictEqual( v, NEGALUCAS[ abs( i ) ], 'returns the '+i+'th negaLucas number' );
	}
	t.end();
});

tape( 'the function returns the nth negaLucas number (Lucas relationship)', opts, function test( t ) {
	var v;
	var f;
	var i;
	for ( i = 0; i > -77; i-- ) {
		v = negalucas( i );
		f = pow( -1.0, abs(i) ) * lucas( abs(i) );
		t.strictEqual( v, f, 'returns the '+i+'th negaLucas number' );
	}
	t.end();
});

tape( 'if provided nonpositive integers less than `-76`, the function returns `NaN`', opts, function test( t ) {
	var i;
	var v;
	for ( i = -77; i > -500; i-- ) {
		v = negalucas( i );
		t.strictEqual( isnan( v ), true, 'returns expected value when provided ' + i );
	}
	t.end();
});
