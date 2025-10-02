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
var abs = require( './../../../../base/special/abs' );
var polyval = require( './../lib/polyval_p.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof polyval, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function evaluates a polynomial for x = 0', function test( t ) {
	var v = polyval( 0.0 );
	t.strictEqual( v, 0.3999999999940942, 'returns expected value' );
	t.end();
});

tape( 'the function evaluates a polynomial for x = -0', function test( t ) {
	var v = polyval( -0.0 );
	t.strictEqual( v, 0.3999999999940942, 'returns expected value' );
	t.end();
});

tape( 'the function evaluates a polynomial for positive values', function test( t ) {
	var expected;
	var delta;
	var tol;
	var v;
	var x;

	x = 1.0;
	v = polyval( x );
	expected = 0.7753603613076858;
	delta = abs( v - expected );
	tol = 1e-14;
	t.ok( delta <= tol, 'within tolerance. x: ' + x + '. Value: ' + v + '. Expected: ' + expected + '. Delta: ' + delta + '. Tolerance: ' + tol + '.' );

	x = 0.5;
	v = polyval( x );
	expected = 0.5493955864028666;
	delta = abs( v - expected );
	tol = 1e-14;
	t.ok( delta <= tol, 'within tolerance. x: ' + x + '. Value: ' + v + '. Expected: ' + expected + '. Delta: ' + delta + '. Tolerance: ' + tol + '.' );

	x = 0.1;
	v = polyval( x );
	expected = 0.42375358219616494;
	delta = abs( v - expected );
	tol = 1e-14;
	t.ok( delta <= tol, 'within tolerance. x: ' + x + '. Value: ' + v + '. Expected: ' + expected + '. Delta: ' + delta + '. Tolerance: ' + tol + '.' );

	t.end();
});

tape( 'the function evaluates a polynomial for negative values', function test( t ) {
	var expected;
	var delta;
	var tol;
	var v;
	var x;

	x = -1.0;
	v = polyval( x );
	expected = 0.3309163926646901;
	delta = abs( v - expected );
	tol = 1e-14;
	t.ok( delta <= tol, 'within tolerance. x: ' + x + '. Value: ' + v + '. Expected: ' + expected + '. Delta: ' + delta + '. Tolerance: ' + tol + '.' );

	x = -0.5;
	v = polyval( x );
	expected = 0.3271736020813687;
	delta = abs( v - expected );
	tol = 1e-14;
	t.ok( delta <= tol, 'within tolerance. x: ' + x + '. Value: ' + v + '. Expected: ' + expected + '. Delta: ' + delta + '. Tolerance: ' + tol + '.' );

	x = -0.1;
	v = polyval( x );
	expected = 0.37930918533186536;
	delta = abs( v - expected );
	tol = 1e-14;
	t.ok( delta <= tol, 'within tolerance. x: ' + x + '. Value: ' + v + '. Expected: ' + expected + '. Delta: ' + delta + '. Tolerance: ' + tol + '.' );

	t.end();
});
