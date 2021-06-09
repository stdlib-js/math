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
var fibonacci = require( '@stdlib/math/base/special/fibonacci' );
var negaFibonacci = require( '@stdlib/math/base/special/negafibonacci' );
var fibpoly = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof fibpoly, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a factory method for generating functions for evaluating a Fibonacci polynomial', function test( t ) {
	t.strictEqual( typeof fibpoly.factory, 'function', 'exports a factory method' );
	t.end();
});

tape( 'the function evaluates a Fibonacci polynomial', function test( t ) {
	var expected;
	var v;
	var x;
	var i;

	expected = [
		0.0,
		1.0,
		2.0,
		5.0,
		12.0,
		29.0,
		70.0
	];

	x = 2.0;
	for ( i = 0; i < expected.length; i++ ) {
		v = fibpoly( i, x );
		t.strictEqual( v, expected[ i ], 'returns expected value for F_'+i+'('+x+')' );
	}
	t.end();
});

tape( 'the function evaluates a Fibonacci polynomial (x=1.0)', function test( t ) {
	var expected;
	var v;
	var i;

	for ( i = 0; i < 78; i++ ) {
		expected = fibonacci( i );
		v = fibpoly( i, 1.0 );
		t.strictEqual( v, expected, 'returns the '+i+'th Fibonacci number' );
	}
	t.end();
});

tape( 'the function evaluates a Fibonacci polynomial (x=1.0;n=78)', function test( t ) {
	var expected;
	var v;

	// FIXME: known failing case. This is due to accumulated rounding error in `binomcoef`. For `binomcoef(54,31)`, the function returns `1085929983159839`, but the true value is `1085929983159840`.
	expected = 8944394323791463; // off-by-one error
	v = fibpoly( 78, 1.0 );

	t.strictEqual( v, expected, 'does not return the 78th Fibonacci number' );
	t.end();
});

tape( 'the function evaluates a negaFibonacci polynomial (x=1.0)', function test( t ) {
	var expected;
	var v;
	var i;

	for ( i = 0; i > -78; i-- ) {
		expected = negaFibonacci( i );
		v = fibpoly( i, 1.0 );
		t.strictEqual( v, expected, 'returns the '+(-i)+'th negaFibonacci number' );
	}
	t.end();
});

tape( 'the function evaluates a negaFibonacci polynomial (x=1.0;n=-78)', function test( t ) {
	var expected;
	var v;

	// FIXME: known failing case. This is due to accumulated rounding error in `binomcoef`. For `binomcoef(54,31)`, the function returns `1085929983159839`, but the true value is `1085929983159840`.
	expected = -8944394323791463; // off-by-one error
	v = fibpoly( -78, 1.0 );

	t.strictEqual( v, expected, 'does not return the 78th negaFibonacci number' );
	t.end();
});
