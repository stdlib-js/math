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
var abs = require( './../../../../base/special/abs' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var isPositiveZero = require( '@stdlib/assert/is-positive-zero' );
var exp = require( './../lib' );


// FIXTURES //

var mediumNegative = require( './fixtures/julia/medium_negative.json' );
var mediumPositive = require( './fixtures/julia/medium_positive.json' );
var smallNegative = require( './fixtures/julia/small_negative.json' );
var smallPositive = require( './fixtures/julia/small_positive.json' );
var tiny = require( './fixtures/julia/tiny.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof exp, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function accurately computes the natural exponential function for negative medium numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	x = mediumNegative.x;
	expected = mediumNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = exp( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function accurately computes the natural exponential function for positive medium numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	x = mediumPositive.x;
	expected = mediumPositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = exp( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function accurately computes the natural exponential function for negative small numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	x = smallNegative.x;
	expected = smallNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = exp( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function accurately computes the natural exponential function for positive small numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	x = smallPositive.x;
	expected = smallPositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = exp( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function accurately computes the natural exponential function for very small `x`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	x = tiny.x;
	expected = tiny.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = exp( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function returns `0` if provided a `-infinity`', function test( t ) {
	var val = exp( NINF );
	t.strictEqual( isPositiveZero( val ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+infinity` if provided a `+infinity`', function test( t ) {
	var val = exp( PINF );
	t.strictEqual( val, PINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', function test( t ) {
	var val = exp( NaN );
	t.strictEqual( isnan( val ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `1` if provided `+-0`', function test( t ) {
	var val;

	val = exp( -0.0 );
	t.strictEqual( val, 1.0, 'returns expected value' );

	val = exp( +0.0 );
	t.strictEqual( val, 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns `+infinity` for large positive values (overflow)', function test( t ) {
	var val;

	// Test overflow threshold (OVERFLOW = 7.09782712893383973096e+02)
	val = exp( 710.0 );
	t.strictEqual( val, PINF, 'returns +infinity' );

	val = exp( 800.0 );
	t.strictEqual( val, PINF, 'returns +infinity' );

	t.end();
});

tape( 'the function returns `0` for large negative values (underflow)', function test( t ) {
	var val;

	// Test underflow threshold (UNDERFLOW = -7.45133219101941108420e+02)
	val = exp( -750.0 );
	t.strictEqual( isPositiveZero( val ), true, 'returns +0' );

	val = exp( -800.0 );
	t.strictEqual( isPositiveZero( val ), true, 'returns +0' );

	t.end();
});
