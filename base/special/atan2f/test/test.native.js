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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var isNegativeZerof = require( './../../../../base/assert/is-negative-zerof' );
var isPositiveZerof = require( './../../../../base/assert/is-positive-zerof' );
var absf = require( './../../../../base/special/absf' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var EPS = require( '@stdlib/constants/float32/eps' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var PI = require( '@stdlib/constants/float32/pi' );
var tryRequire = require( '@stdlib/utils/try-require' );


// FIXTURES //

var positivePositive = require( './fixtures/julia/positive_positive.json' );
var negativePositive = require( './fixtures/julia/negative_positive.json' );
var negativeNegative = require( './fixtures/julia/negative_negative.json' );


// VARIABLES //

var atan2f = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( atan2f instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof atan2f, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has two parameters: a numerator and a denominator value', opts, function test( t ) {
	t.strictEqual( atan2f.length, 2.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN` as either of the arguments', opts, function test( t ) {
	t.strictEqual( isnanf( atan2f( 2.0, NaN ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( atan2f( NaN, 3.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+0` if provided `y = +0.0` and `x >= 0`', opts, function test( t ) {
	t.strictEqual( isPositiveZerof( atan2f( +0.0, 0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZerof( atan2f( +0.0, 2.0 ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZerof( atan2f( +0.0, 4.0 ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZerof( atan2f( +0.0, 5.0 ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZerof( atan2f( +0.0, 10.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-0` if provided `y = -0.0` and `x >= 0`', opts, function test( t ) {
	t.strictEqual( isNegativeZerof( atan2f( -0.0, 0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZerof( atan2f( -0.0, 2.0 ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZerof( atan2f( -0.0, 4.0 ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZerof( atan2f( -0.0, 5.0 ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZerof( atan2f( -0.0, 10.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `PI` if provided `y = +0.0` and `x <= -0.0`', opts, function test( t ) {
	t.strictEqual( atan2f( +0.0, -0.0 ), +PI, 'returns expected value' );
	t.strictEqual( atan2f( +0.0, -2.0 ), +PI, 'returns expected value' );
	t.strictEqual( atan2f( +0.0, -4.0 ), +PI, 'returns expected value' );
	t.strictEqual( atan2f( +0.0, -5.0 ), +PI, 'returns expected value' );
	t.strictEqual( atan2f( +0.0, -10.0 ), +PI, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-PI` if provided `y = -0.0` and `x <= -0.0`', opts, function test( t ) {
	t.strictEqual( atan2f( -0.0, -0.0 ), -PI, 'returns expected value' );
	t.strictEqual( atan2f( -0.0, -2.0 ), -PI, 'returns expected value' );
	t.strictEqual( atan2f( -0.0, -4.0 ), -PI, 'returns expected value' );
	t.strictEqual( atan2f( -0.0, -5.0 ), -PI, 'returns expected value' );
	t.strictEqual( atan2f( -0.0, -10.0 ), -PI, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+PI/4` if provided `x = y = +infinity`', opts, function test( t ) {
	t.strictEqual( atan2f( PINF, PINF ), f32( +PI/4.0 ), 'returns expected value' );
	t.end();
});

tape( 'the function returns `-PI/4` if provided `x = -y = +infinity`', opts, function test( t ) {
	t.strictEqual( atan2f( NINF, PINF ), f32( -PI/4.0 ), 'returns expected value' );
	t.end();
});

tape( 'the function returns `*3*PI/4` if provided `-x = y = +infinity`', opts, function test( t ) {
	t.strictEqual( atan2f( PINF, NINF ), f32( +3.0*PI/4.0 ), 'returns expected value' );
	t.end();
});

tape( 'the function returns `-3*PI/4` if provided `x = y = -infinity`', opts, function test( t ) {
	t.strictEqual( atan2f( NINF, NINF ), f32( -3.0*PI/4.0 ), 'returns expected value' );
	t.end();
});

tape( 'the function returns `0.0` when `y > 0` and `x = +infinity`', opts, function test( t ) {
	t.strictEqual( isPositiveZerof( atan2f( 1.0, PINF ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZerof( atan2f( 2.0, PINF ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZerof( atan2f( 3.0, PINF ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-0.0` when `y < 0` and `x = +infinity`', opts, function test( t ) {
	t.strictEqual( isNegativeZerof( atan2f( -1.0, PINF ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZerof( atan2f( -2.0, PINF ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZerof( atan2f( -3.0, PINF ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+PI` when `y > 0` and `x = -infinity`', opts, function test( t ) {
	t.strictEqual( atan2f( 1.0, NINF ), PI, 'returns expected value' );
	t.strictEqual( atan2f( 2.0, NINF ), PI, 'returns expected value' );
	t.strictEqual( atan2f( 3.0, NINF ), PI, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-PI` when `y < 0` and `x = -infinity`', opts, function test( t ) {
	t.strictEqual( atan2f( -1.0, NINF ), -PI, 'returns expected value' );
	t.strictEqual( atan2f( -2.0, NINF ), -PI, 'returns expected value' );
	t.strictEqual( atan2f( -3.0, NINF ), -PI, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+PI/2` when `y = +infinity`', opts, function test( t ) {
	t.strictEqual( atan2f( PINF, -1.0 ), f32( PI/2.0 ), 'returns expected value' );
	t.strictEqual( atan2f( PINF, 0.0 ), f32( PI/2.0 ), 'returns expected value' );
	t.strictEqual( atan2f( PINF, 2.0 ), f32( PI/2.0 ), 'returns expected value' );
	t.end();
});

tape( 'the function returns `-PI/2` when `y = -infinity`', opts, function test( t ) {
	t.strictEqual( atan2f( NINF, -1.0 ), -f32( PI/2.0 ), 'returns expected value' );
	t.strictEqual( atan2f( NINF, 0.0 ), -f32( PI/2.0 ), 'returns expected value' );
	t.strictEqual( atan2f( NINF, 2.0 ), -f32( PI/2.0 ), 'returns expected value' );
	t.end();
});

tape( 'the function returns `PI/2` if provided a positive `y` and `x=0`', opts, function test( t ) {
	t.strictEqual( atan2f( 2.0, 0.0 ), f32( PI/2.0 ), 'returns expected value' );
	t.strictEqual( atan2f( 1.0, 0.0 ), f32( PI/2.0 ), 'returns expected value' );
	t.strictEqual( atan2f( 0.5, 0.0 ), f32( PI/2.0 ), 'returns expected value' );
	t.end();
});

tape( 'the function returns `PI/2` if provided a positive `y` and `x=-0`', opts, function test( t ) {
	t.strictEqual( atan2f( 2.0, -0.0 ), f32( PI/2.0 ), 'returns expected value' );
	t.strictEqual( atan2f( 1.0, -0.0 ), f32( PI/2.0 ), 'returns expected value' );
	t.strictEqual( atan2f( 0.5, -0.0 ), f32( PI/2.0 ), 'returns expected value' );
	t.end();
});

tape( 'the function returns `-PI/2` if provided a negative `y` and `x=0`', opts, function test( t ) {
	t.strictEqual( atan2f( -2.0, 0.0 ), -f32( PI/2.0 ), 'returns expected value' );
	t.strictEqual( atan2f( -1.0, 0.0 ), -f32( PI/2.0 ), 'returns expected value' );
	t.strictEqual( atan2f( -0.5, 0.0 ), -f32( PI/2.0 ), 'returns expected value' );
	t.end();
});

tape( 'the function returns `-PI/2` if provided a negative `y` and `x=-0`', opts, function test( t ) {
	t.strictEqual( atan2f( -2.0, -0.0 ), -f32( PI/2.0 ), 'returns expected value' );
	t.strictEqual( atan2f( -1.0, -0.0 ), -f32( PI/2.0 ), 'returns expected value' );
	t.strictEqual( atan2f( -0.5, -0.0 ), -f32( PI/2.0 ), 'returns expected value' );
	t.end();
});

tape( 'the function evaluates the `atan2f` function (when x and y are positive)', opts, function test( t ) {
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
		actual = atan2f( y[i], x[i] );
		expected[ i ] = f32( expected[ i ] );
		delta = absf( actual - expected[i] );
		tol = 1.3 * EPS * absf( expected[i] );
		t.strictEqual( delta <= tol, true, 'within tolerance. y: '+y[i]+'. x: '+x[i]+'. Actual: '+actual+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
	}
	t.end();
});

tape( 'the function evaluates the `atan2f` function (when x is negative and y is positive)', opts, function test( t ) {
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
		actual = atan2f( y[i], x[i] );
		expected[ i ] = f32( expected[ i ] );
		delta = absf( actual - expected[i] );
		tol = EPS * absf( expected[i] );
		t.strictEqual( delta <= tol, true, 'within tolerance. y: '+y[i]+'. x: '+x[i]+'. Actual: '+actual+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
	}
	t.end();
});

tape( 'the function evaluates the `atan2f` function (when x and y are negative)', opts, function test( t ) {
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
		actual = atan2f( y[i], x[i] );
		expected[ i ] = f32( expected[ i ] );
		delta = absf( actual - expected[i] );
		tol = EPS * absf( expected[i] );
		t.strictEqual( delta <= tol, true, 'within tolerance. y: '+y[i]+'. x: '+x[i]+'. Actual: '+actual+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
	}
	t.end();
});
