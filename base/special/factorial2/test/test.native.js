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
var isnan = require( './../../../../base/assert/is-nan' );
var incrspace = require( '@stdlib/array/base/incrspace' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var tryRequire = require( '@stdlib/utils/try-require' );


// FIXTURES //

var integers = require( './fixtures/integers.json' );


// VARIABLES //

var factorial2 = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( factorial2 instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factorial2, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a negative integer, the function returns `NaN`', opts, function test( t ) {
	var values;
	var v;
	var i;

	values = incrspace( -1.0, -1000.0, -25.0 );
	for ( i = 0; i < values.length; i++ ) {
		v = factorial2( values[ i ] );
		t.strictEqual( isnan( v ), true, 'returns expected value when provided ' + values[ i ] );
	}
	t.end();
});

tape( 'the function evaluates the double factorial', opts, function test( t ) {
	var expected;
	var x;
	var v;
	var i;

	x = integers.x;
	expected = integers.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = factorial2( x[ i ] );
		t.strictEqual( v, expected[ i ], 'returns expected value when provided ' + x[ i ] );
	}
	t.end();
});

tape( 'if provided integers greater than `300`, the function returns `+infinity`', opts, function test( t ) {
	var i;
	var v;
	for ( i = 301; i < 500; i++ ) {
		v = factorial2( i );
		t.strictEqual( v, PINF, 'returns expected value when provided ' + i );
	}
	t.end();
});
