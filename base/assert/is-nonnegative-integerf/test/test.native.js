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
var truncf = require( './../../../../base/special/truncf' );
var randu = require( '@stdlib/random/base/randu' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var isNonNegativeIntegerf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( isNonNegativeIntegerf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isNonNegativeIntegerf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a nonnegative integer', opts, function test( t ) {
	var i;
	for ( i = 0; i < 101; i++ ) {
		t.equal( isNonNegativeIntegerf( i ), true, 'returns expected value when provided '+i );
	}
	t.end();
});

tape( 'the function returns `false` if not provided a nonnegative integer', opts, function test( t ) {
	var i;
	for ( i = -1; i > -101; i-- ) {
		t.equal( isNonNegativeIntegerf( i ), false, 'returns expected value when provided '+i );
	}
	t.end();
});

tape( 'the function returns `false` if not provided an integer', opts, function test( t ) {
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		v = ( randu() * 100.0 ) - 50.0;
		if ( truncf( v ) !== v ) {
			t.equal( isNonNegativeIntegerf( v ), false, 'returns expected value when provided '+v );
		}
	}
	t.end();
});

tape( 'the function returns `false` if provided `NaN`', opts, function test( t ) {
	t.equal( isNonNegativeIntegerf( NaN ), false, 'returns expected value' );
	t.end();
});

tape( 'WARNING: the function returns `true` if provided `+infinity`', opts, function test( t ) {
	t.equal( isNonNegativeIntegerf( PINF ), true, 'returns expected value' );
	t.end();
});

tape( 'the function does not distinguish between positive and negative zero and returns `true` if provided `-0`', opts, function test( t ) {
	t.equal( isNonNegativeIntegerf( -0.0 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if provided `-infinity`', opts, function test( t ) {
	t.equal( isNonNegativeIntegerf( NINF ), false, 'returns expected value' );
	t.end();
});