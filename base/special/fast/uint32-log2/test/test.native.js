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
var minstd = require( '@stdlib/random/base/minstd-shuffle' );
var log2 = require( './../../../../../base/special/log2' );
var floor = require( './../../../../../base/special/floor' );
var pow = require( './../../../../../base/special/pow' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var log2Uint32 = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( log2Uint32 instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof log2Uint32, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an approximate binary logarithm (base two) for integer arguments', opts, function test( t ) {
	var x;
	var y;
	var v;
	var i;

	for ( i = 0; i < 5000; i++ ) {
		x = minstd() >>> 0;
		y = log2( x );
		v = log2Uint32( x );
		t.strictEqual( v, floor( y ), 'returns an approximate binary logarithm' );
	}
	t.end();
});

tape( 'the function returns the exact binary logarithm (base two) for integer powers of 2', opts, function test( t ) {
	var x;
	var y;
	var i;

	for ( i = 0; i < 32; i++ ) {
		x = pow( 2, i );
		y = log2Uint32( x );
		t.strictEqual( y, i, 'returns binary logarithm' );
	}
	t.end();
});
