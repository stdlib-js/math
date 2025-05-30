/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var randu = require( '@stdlib/random/base/randu' );
var round = require( './../../../../base/special/round' );
var isEven = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isEven, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided an even number', function test( t ) {
	var bool;
	var x;
	var i;
	for ( i = 0; i < 1000; i++ ) {
		x = round( randu()*1.0e6 ) - 5.0e5;
		x *= 2; // always even
		bool = isEven( x );
		t.equal( bool, true, 'returns expected value when provided '+x );
	}
	t.end();
});

tape( 'the function returns `false` if provided an odd number', function test( t ) {
	var bool;
	var x;
	var i;
	for ( i = 0; i < 1000; i++ ) {
		x = round( randu()*1.0e6 ) - 5.0e5;
		if ( x%2 === 0 ) {
			x += 1;
		}
		bool = isEven( x );
		t.equal( bool, false, 'returns expected value when provided '+x );
	}
	t.end();
});

tape( 'the function returns `true` if provided `+-0`', function test( t ) {
	t.equal( isEven( +0.0 ), true, 'returns expected value' );
	t.equal( isEven( -0.0 ), true, 'returns expected value' );
	t.end();
});

tape( 'WARNING: the function returns `true` if provided `+infinity`', function test( t ) {
	t.equal( isEven( PINF ), true, 'returns expected value' );
	t.end();
});

tape( 'WARNING: the function returns `true` if provided `-infinity`', function test( t ) {
	t.equal( isEven( NINF ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if provided `NaN`', function test( t ) {
	t.equal( isEven( NaN ), false, 'returns expected value' );
	t.equal( isEven( 0.0/0.0 ), false, 'returns expected value' );
	t.end();
});
