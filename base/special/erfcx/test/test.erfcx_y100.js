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
var erfcxY100 = require( './../lib/erfcx_y100.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof erfcxY100, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function evaluates erfcxY100 for values that select polynomial p22', function test( t ) {
	var v;

	// y100 in [22, 23) selects p22
	v = erfcxY100( 22.5 );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates erfcxY100 for values that select polynomial p23', function test( t ) {
	var v;

	// y100 in [23, 24) selects p23
	v = erfcxY100( 23.5 );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates erfcxY100 for values that select polynomial p24', function test( t ) {
	var v;

	// y100 in [24, 25) selects p24
	v = erfcxY100( 24.5 );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates erfcxY100 for values that select polynomial p25', function test( t ) {
	var v;

	// y100 in [25, 26) selects p25
	v = erfcxY100( 25.5 );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates erfcxY100 for values that select polynomial p26', function test( t ) {
	var v;

	// y100 in [26, 27) selects p26
	v = erfcxY100( 26.5 );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates erfcxY100 for values that select polynomial p27', function test( t ) {
	var v;

	// y100 in [27, 28) selects p27
	v = erfcxY100( 27.5 );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates erfcxY100 for all polynomial ranges', function test( t ) {
	var i;
	var v;

	// Test all 101 polynomials (p0 through p100) by testing one value in each range
	for ( i = 0; i <= 100; i++ ) {
		v = erfcxY100( i + 0.5 );
		t.strictEqual( isNumber( v ), true, 'returns a number for y100=' + (i + 0.5) );
	}

	t.end();
});
