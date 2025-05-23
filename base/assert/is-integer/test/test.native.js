/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var trunc = require( './../../../../base/special/trunc' );
var randu = require( '@stdlib/random/base/randu' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var isInteger = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( isInteger instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isInteger, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided an integer', opts, function test( t ) {
	var i;
	for ( i = -50; i < 51; i++ ) {
		t.equal( isInteger( i ), true, 'returns expected value when provided '+i );
	}
	t.end();
});

tape( 'the function returns `false` if not provided an integer', opts, function test( t ) {
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		v = ( randu()*100.0 ) - 50.0;
		if ( trunc(v) !== v ) {
			t.equal( isInteger( v ), false, 'returns expected value when provided '+v );
		}
	}
	t.end();
});

tape( 'the function returns `false` if provided `NaN`', opts, function test( t ) {
	t.equal( isInteger( NaN ), false, 'returns expected value' );
	t.end();
});

tape( 'WARNING: function returns `true` if provided `+infinity`', opts, function test( t ) {
	t.equal( isInteger( PINF ), true, 'returns expected value' );
	t.end();
});

tape( 'WARNING: function returns `true` if provided `-infinity`', opts, function test( t ) {
	t.equal( isInteger( NINF ), true, 'returns expected value' );
	t.end();
});
