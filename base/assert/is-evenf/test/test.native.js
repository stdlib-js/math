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
var randu = require( '@stdlib/random/base/randu' );
var roundf = require( './../../../../base/special/roundf' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var isEvenf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( isEvenf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isEvenf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided an even number', opts, function test( t ) {
	var bool;
	var x;
	var i;
	for ( i = 0; i < 1000; i++ ) {
		x = roundf( randu() * 1.0e6 ) - 5.0e5;
		x *= 2; // always even
		bool = isEvenf( x );
		t.equal( bool, true, 'returns expected value when provided '+x );
	}
	t.end();
});

tape( 'the function returns `false` if provided an odd number', opts, function test( t ) {
	var bool;
	var x;
	var i;
	for ( i = 0; i < 1000; i++ ) {
		x = roundf( randu() * 1.0e6 ) - 5.0e5;
		if ( x % 2 === 0 ) {
			x += 1;
		}
		bool = isEvenf( x );
		t.equal( bool, false, 'returns expected value when provided '+x );
	}
	t.end();
});

tape( 'the function returns `true` if provided `+-0`', opts, function test( t ) {
	t.equal( isEvenf( +0.0 ), true, 'returns expected value' );
	t.equal( isEvenf( -0.0 ), true, 'returns expected value' );
	t.end();
});

tape( 'WARNING: the function returns `true` if provided `+infinity`', opts, function test( t ) {
	t.equal( isEvenf( PINF ), true, 'returns expected value' );
	t.end();
});

tape( 'WARNING: the function returns `true` if provided `-infinity`', opts, function test( t ) {
	t.equal( isEvenf( NINF ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if provided `NaN`', opts, function test( t ) {
	t.equal( isEvenf( NaN ), false, 'returns expected value' );
	t.equal( isEvenf( 0.0 / 0.0 ), false, 'returns expected value' );
	t.end();
});
