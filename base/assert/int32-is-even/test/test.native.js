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
var round = require( './../../../../base/special/round' );
var floor = require( './../../../../base/special/floor' );
var MAX_INT32 = require( '@stdlib/constants/int32/max' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var HALF_MAX_INT32 = floor( MAX_INT32 / 2 );
var iseven = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( iseven instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iseven, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided `0`', opts, function test( t ) {
	var bool = iseven( 0 );
	t.strictEqual( bool, true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `true` if provided an even integer', opts, function test( t ) {
	var bool;
	var x;
	var i;
	for ( i = 0; i < 1000; i++ ) {
		x = round( randu()*MAX_INT32 ) - HALF_MAX_INT32 - 1;
		x *= 2; // always even
		bool = iseven( x );
		t.strictEqual( bool, true, 'returns expected value when provided '+x );
	}
	t.end();
});

tape( 'the function returns `false` if provided an odd integer', opts, function test( t ) {
	var bool;
	var x;
	var i;
	for ( i = 0; i < 1000; i++ ) {
		x = round( randu()*2*MAX_INT32 ) - MAX_INT32;
		if ( x > 0 ) {
			x -= 1;
		}
		if ( x%2 === 0 ) {
			x += 1;
		}
		bool = iseven( x );
		t.strictEqual( bool, false, 'returns expected value when provided '+x );
	}
	t.end();
});
