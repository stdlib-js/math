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
var isnan = require( './../../../../base/assert/is-nan' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var fibonacci = require( './../../../../base/special/fibonacci' );
var fibonacciIndex = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof fibonacciIndex, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', function test( t ) {
	var n = fibonacciIndex( NaN );
	t.strictEqual( isnan( n ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `+infinity`, the function returns `NaN`', function test( t ) {
	var n = fibonacciIndex( PINF );
	t.strictEqual( isnan( n ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided a number less than or equal to 1, the function returns `NaN`', function test( t ) {
	var n;
	var i;

	t.strictEqual( isnan( fibonacciIndex( -3.14 ) ), true, 'returns expected value' );

	for ( i = 1; i > -100; i-- ) {
		n = fibonacciIndex( i );
		t.strictEqual( isnan( n ), true, 'returns expected value when provided ' + i );
	}
	t.end();
});

tape( 'if provided a non-integer, the function returns `NaN`', function test( t ) {
	var n = fibonacciIndex( 3.14 );
	t.strictEqual( isnan( n ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns the Fibonacci number index', function test( t ) {
	var v;
	var n;
	var i;
	for ( i = 3; i < 79; i++ ) {
		v = fibonacci( i );
		n = fibonacciIndex( v );
		t.strictEqual( n, i, 'returns the Fibonacci number index for '+v );
	}
	t.end();
});
