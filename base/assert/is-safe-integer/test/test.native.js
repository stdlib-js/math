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
var trunc = require( './../../../../base/special/trunc' );
var randu = require( '@stdlib/random/base/randu' );
var MIN_SAFE_INTEGER = require( '@stdlib/constants/float64/min-safe-integer' );
var MAX_SAFE_INTEGER = require( '@stdlib/constants/float64/max-safe-integer' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var isSafeInteger = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( isSafeInteger instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isSafeInteger, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a safe integer', opts, function test( t ) {
	var i;
	for ( i = -50; i < 51; i++ ) {
		t.equal( isSafeInteger( i ), true, 'returns expected value when provided '+i );
	}
	t.end();
});

tape( 'the function returns `false` if provided an integer greater than the max safe integer', opts, function test( t ) {
	var x;
	var i;
	for ( i = 1; i < 100; i++ ) {
		x = MAX_SAFE_INTEGER + 1 + i;
		t.equal( isSafeInteger( x ), false, 'returns expected value when provided '+x );
	}
	t.end();
});

tape( 'the function returns `false` if provided an integer less than the min safe integer', opts, function test( t ) {
	var x;
	var i;
	for ( i = 0; i < 100; i++ ) {
		x = MIN_SAFE_INTEGER - 1 - i;
		t.equal( isSafeInteger( x ), false, 'returns expected value when provided '+x );
	}
	t.end();
});

tape( 'the function returns `false` if not provided an integer', opts, function test( t ) {
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		v = (randu()*100.0) - 50.0;
		if ( trunc(v) !== v ) {
			t.equal( isSafeInteger( v ), false, 'returns expected value when provided '+v );
		}
	}
	t.end();
});

tape( 'the function returns `true` if provided maximum safe integer', opts, function test( t ) {
	t.equal( isSafeInteger( MAX_SAFE_INTEGER ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `true` if provided minimum safe integer', opts, function test( t ) {
	t.equal( isSafeInteger( MIN_SAFE_INTEGER ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if provided `NaN`', opts, function test( t ) {
	t.equal( isSafeInteger( NaN ), false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if provided `+infinity`', opts, function test( t ) {
	t.equal( isSafeInteger( PINF ), false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if provided `-infinity`', opts, function test( t ) {
	t.equal( isSafeInteger( NINF ), false, 'returns expected value' );
	t.end();
});
