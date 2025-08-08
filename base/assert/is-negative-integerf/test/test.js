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

var tape = require( 'tape' );
var truncf = require( './../../../../base/special/truncf' );
var uniform = require( '@stdlib/random/base/uniform' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var isNegativeIntegerf = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isNegativeIntegerf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `false` if provided a nonnegative integer', function test( t ) {
	var i;
	for ( i = 0; i < 101; i++ ) {
		t.equal( isNegativeIntegerf( i ), false, 'returns expected value when provided '+i );
	}
	t.end();
});

tape( 'the function returns `true` if provided a negative integer', function test( t ) {
	var i;
	for ( i = -1; i > -101; i-- ) {
		t.equal( isNegativeIntegerf( i ), true, 'returns expected value when provided '+i );
	}
	t.end();
});

tape( 'the function returns `false` if not provided an integer', function test( t ) {
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		v = uniform( -50.0, 50.0 );
		if ( truncf( v ) !== v ) {
			t.equal( isNegativeIntegerf( v ), false, 'returns expected value when provided '+v );
		}
	}
	t.end();
});

tape( 'the function returns `false` if provided `NaN`', function test( t ) {
	t.equal( isNegativeIntegerf( NaN ), false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if provided `+infinity`', function test( t ) {
	t.equal( isNegativeIntegerf( PINF ), false, 'returns expected value' );
	t.end();
});

tape( 'WARNING: the function returns `true` if provided `-infinity`', function test( t ) {
	t.equal( isNegativeIntegerf( NINF ), true, 'returns expected value' );
	t.end();
});
