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
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var PINF = require( '@stdlib/constants/float64/pinf' );
var rational = require( './../lib/lanczos_sum_expg_scaled.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof rational, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `Infinity` for x = 0', function test( t ) {
	var v = rational( 0.0 );
	t.strictEqual( v, PINF, 'returns expected value' );
	t.end();
});

tape( 'the function evaluates a rational function for positive values less than 1', function test( t ) {
	var v;

	v = rational( 0.5 );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	v = rational( 0.1 );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	v = rational( 0.9 );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates a rational function for positive values greater than 1', function test( t ) {
	var v;

	v = rational( 1.5 );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	v = rational( 2.0 );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	v = rational( 10.0 );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates a rational function for negative values', function test( t ) {
	var v;

	v = rational( -0.5 );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	v = rational( -1.0 );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	v = rational( -2.0 );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	t.end();
});
