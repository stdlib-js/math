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
var isNegativeZero = require( './../../../../base/assert/is-negative-zero' );
var isPositiveZero = require( './../../../../base/assert/is-positive-zero' );
var abs = require( './../../../../base/special/abs' );
var tryRequire = require( '@stdlib/utils/try-require' );
var EPS = require( '@stdlib/constants/float64/eps' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var PI = require( '@stdlib/constants/float64/pi' );


// FIXTURES //

var positivePositive = require( './fixtures/julia/positive_positive.json' );
var negativePositive = require( './fixtures/julia/negative_positive.json' );
var negativeNegative = require( './fixtures/julia/negative_negative.json' );


// VARIABLES //

var atan2 = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( atan2 instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof atan2, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has two parameters: a numerator and a denominator value', opts, function test( t ) {
	t.equal( atan2.length, 2.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN` as either of the arguments', opts, function test( t ) {
	t.equal( isnan( atan2( 2.0, NaN ) ), true, 'returns expected value' );
	t.equal( isnan( atan2( NaN, 3.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+0` if provided `y = +0.0` and `x >= 0`', opts, function test( t ) {
	t.equal( isPositiveZero( atan2( +0.0, 0.0 ) ), true, 'returns expected value' );
	t.equal( isPositiveZero( atan2( +0.0, 2.0 ) ), true, 'returns expected value' );
	t.equal( isPositiveZero( atan2( +0.0, 4.0 ) ), true, 'returns expected value' );
	t.equal( isPositiveZero( atan2( +0.0, 5.0 ) ), true, 'returns expected value' );
	t.equal( isPositiveZero( atan2( +0.0, 10.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-0` if provided `y = -0.0` and `x >= 0`', opts, function test( t ) {
	t.equal( isNegativeZero( atan2( -0.0, 0.0 ) ), true, 'returns expected value' );
	t.equal( isNegativeZero( atan2( -0.0, 2.0 ) ), true, 'returns expected value' );
	t.equal( isNegativeZero( atan2( -0.0, 4.0 ) ), true, 'returns expected value' );
	t.equal( isNegativeZero( atan2( -0.0, 5.0 ) ), true, 'returns expected value' );
	t.equal( isNegativeZero( atan2( -0.0, 10.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `PI` if provided `y = +0.0` and `x <= -0.0`', opts, function test( t ) {
	t.equal( atan2( +0.0, -0.0 ), +PI, 'returns expected value' );
	t.equal( atan2( +0.0, -2.0 ), +PI, 'returns expected value' );
	t.equal( atan2( +0.0, -4.0 ), +PI, 'returns expected value' );
	t.equal( atan2( +0.0, -5.0 ), +PI, 'returns expected value' );
	t.equal( atan2( +0.0, -10.0 ), +PI, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-PI` if provided `y = -0.0` and `x <= -0.0`', opts, function test( t ) {
	t.equal( atan2( -0.0, -0.0 ), -PI, 'returns expected value' );
	t.equal( atan2( -0.0, -2.0 ), -PI, 'returns expected value' );
	t.equal( atan2( -0.0, -4.0 ), -PI, 'returns expected value' );
	t.equal( atan2( -0.0, -5.0 ), -PI, 'returns expected value' );
	t.equal( atan2( -0.0, -10.0 ), -PI, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+PI/4` if provided `x = y = +infinity`', opts, function test( t ) {
	t.equal( atan2( PINF, PINF ), +PI/4.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-PI/4` if provided `x = -y = +infinity`', opts, function test( t ) {
	t.equal( atan2( NINF, PINF ), -PI/4.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `*3*PI/4` if provided `-x = y = +infinity`', opts, function test( t ) {
	t.equal( atan2( PINF, NINF ), +3.0*PI/4.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-3*PI/4` if provided `x = y = -infinity`', opts, function test( t ) {
	t.equal( atan2( NINF, NINF ), -3.0*PI/4.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `0.0` when `y > 0` and `x = +infinity`', opts, function test( t ) {
	t.equal( isPositiveZero( atan2( 1.0, PINF ) ), true, 'returns expected value' );
	t.equal( isPositiveZero( atan2( 2.0, PINF ) ), true, 'returns expected value' );
	t.equal( isPositiveZero( atan2( 3.0, PINF ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-0.0` when `y < 0` and `x = +infinity`', opts, function test( t ) {
	t.equal( isNegativeZero( atan2( -1.0, PINF ) ), true, 'returns expected value' );
	t.equal( isNegativeZero( atan2( -2.0, PINF ) ), true, 'returns expected value' );
	t.equal( isNegativeZero( atan2( -3.0, PINF ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+PI` when `y > 0` and `x = -infinity`', opts, function test( t ) {
	t.equal( atan2( 1.0, NINF ), PI, 'returns expected value' );
	t.equal( atan2( 2.0, NINF ), PI, 'returns expected value' );
	t.equal( atan2( 3.0, NINF ), PI, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-PI` when `y < 0` and `x = -infinity`', opts, function test( t ) {
	t.equal( atan2( -1.0, NINF ), -PI, 'returns expected value' );
	t.equal( atan2( -2.0, NINF ), -PI, 'returns expected value' );
	t.equal( atan2( -3.0, NINF ), -PI, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+PI/2` when `y = +infinity`', opts, function test( t ) {
	t.equal( atan2( PINF, -1.0 ), PI/2.0, 'returns expected value' );
	t.equal( atan2( PINF, 0.0 ), PI/2.0, 'returns expected value' );
	t.equal( atan2( PINF, 2.0 ), PI/2.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-PI/2` when `y = -infinity`', opts, function test( t ) {
	t.equal( atan2( NINF, -1.0 ), -PI/2.0, 'returns expected value' );
	t.equal( atan2( NINF, 0.0 ), -PI/2.0, 'returns expected value' );
	t.equal( atan2( NINF, 2.0 ), -PI/2.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `PI/2` if provided a positive `y` and `x=0`', opts, function test( t ) {
	t.equal( atan2( 2.0, 0.0 ), PI/2.0, 'returns expected value' );
	t.equal( atan2( 1.0, 0.0 ), PI/2.0, 'returns expected value' );
	t.equal( atan2( 0.5, 0.0 ), PI/2.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `PI/2` if provided a positive `y` and `x=-0`', opts, function test( t ) {
	t.equal( atan2( 2.0, -0.0 ), PI/2.0, 'returns expected value' );
	t.equal( atan2( 1.0, -0.0 ), PI/2.0, 'returns expected value' );
	t.equal( atan2( 0.5, -0.0 ), PI/2.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-PI/2` if provided a negative `y` and `x=0`', opts, function test( t ) {
	t.equal( atan2( -2.0, 0.0 ), -PI/2.0, 'returns expected value' );
	t.equal( atan2( -1.0, 0.0 ), -PI/2.0, 'returns expected value' );
	t.equal( atan2( -0.5, 0.0 ), -PI/2.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-PI/2` if provided a negative `y` and `x=-0`', opts, function test( t ) {
	t.equal( atan2( -2.0, -0.0 ), -PI/2.0, 'returns expected value' );
	t.equal( atan2( -1.0, -0.0 ), -PI/2.0, 'returns expected value' );
	t.equal( atan2( -0.5, -0.0 ), -PI/2.0, 'returns expected value' );
	t.end();
});

tape( 'the function evaluates the `atan2` function (when x and y are positive)', opts, function test( t ) {
	var expected;
	var actual;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	y = positivePositive.y;
	x = positivePositive.x;
	expected = positivePositive.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = atan2( y[i], x[i] );
		delta = abs( actual - expected[i] );
		tol = EPS * abs( expected[i] );
		t.equal( delta <= tol, true, 'within tolerance. y: '+y[i]+'. x: '+x[i]+'. Actual: '+actual+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
	}
	t.end();
});

tape( 'the function evaluates the `atan2` function (when x is negative and y is positive)', opts, function test( t ) {
	var expected;
	var actual;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	y = negativePositive.y;
	x = negativePositive.x;
	expected = negativePositive.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = atan2( y[i], x[i] );
		delta = abs( actual - expected[i] );
		tol = 2.0 * EPS * abs( expected[i] );
		t.equal( delta <= tol, true, 'within tolerance. y: '+y[i]+'. x: '+x[i]+'. Actual: '+actual+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
	}
	t.end();
});

tape( 'the function evaluates the `atan2` function (when x and y are negative)', opts, function test( t ) {
	var expected;
	var actual;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	y = negativeNegative.y;
	x = negativeNegative.x;
	expected = negativeNegative.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = atan2( y[i], x[i] );
		delta = abs( actual - expected[i] );
		tol = 2.0 * EPS * abs( expected[i] );
		t.equal( delta <= tol, true, 'within tolerance. y: '+y[i]+'. x: '+x[i]+'. Actual: '+actual+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
	}
	t.end();
});
