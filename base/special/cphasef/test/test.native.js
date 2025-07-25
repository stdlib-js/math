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
var absf = require( './../../../../base/special/absf' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var EPS = require( '@stdlib/constants/float32/eps' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var PI = require( '@stdlib/constants/float32/pi' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var cphasef = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( cphasef instanceof Error )
};


// FIXTURES //

var positivePositive = require( './fixtures/julia/positive_positive.json' );
var negativePositive = require( './fixtures/julia/negative_positive.json' );
var negativeNegative = require( './fixtures/julia/negative_negative.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cphasef, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN` as either of the arguments', opts, function test( t ) {
	t.strictEqual( isnanf( cphasef( new Complex64( 2.0, NaN ) ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( cphasef( new Complex64( NaN, 3.0 ) ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+0` if provided `im = +0.0` and `re >= 0`', opts, function test( t ) {
	t.strictEqual( cphasef( new Complex64( 0.0, +0.0) ), +0.0, 'returns expected value' );
	t.strictEqual( cphasef( new Complex64( 2.0, +0.0) ), +0.0, 'returns expected value' );
	t.strictEqual( cphasef( new Complex64( 4.0, +0.0) ), +0.0, 'returns expected value' );
	t.strictEqual( cphasef( new Complex64( 5.0, +0.0) ), +0.0, 'returns expected value' );
	t.strictEqual( cphasef( new Complex64( 10.0, +0.0) ), +0.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-0` if provided `im = -0.0` and `re >= 0`', opts, function test( t ) {
	t.strictEqual( isNegativeZerof( cphasef( new Complex64( 0.0, -0.0 ) ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZerof( cphasef( new Complex64( 2.0, -0.0 ) ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZerof( cphasef( new Complex64( 4.0, -0.0 ) ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZerof( cphasef( new Complex64( 5.0, -0.0 ) ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZerof( cphasef( new Complex64( 10.0, -0.0 ) ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `PI` if provided `im = +0.0` and `re <= -0.0`', opts, function test( t ) {
	t.strictEqual( cphasef( new Complex64( -0.0, +0.0 ) ), +PI, 'returns expected value' );
	t.strictEqual( cphasef( new Complex64( -2.0, +0.0 ) ), +PI, 'returns expected value' );
	t.strictEqual( cphasef( new Complex64( -4.0, +0.0 ) ), +PI, 'returns expected value' );
	t.strictEqual( cphasef( new Complex64( -5.0, +0.0 ) ), +PI, 'returns expected value' );
	t.strictEqual( cphasef( new Complex64( -10.0, +0.0 ) ), +PI, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-PI` if provided `im = -0.0` and `re <= -0.0`', opts, function test( t ) {
	t.strictEqual( cphasef( new Complex64( -0.0, -0.0 ) ), -PI, 'returns expected value' );
	t.strictEqual( cphasef( new Complex64( -2.0, -0.0 ) ), -PI, 'returns expected value' );
	t.strictEqual( cphasef( new Complex64( -4.0, -0.0 ) ), -PI, 'returns expected value' );
	t.strictEqual( cphasef( new Complex64( -5.0, -0.0 ) ), -PI, 'returns expected value' );
	t.strictEqual( cphasef( new Complex64( -10.0, -0.0 ) ), -PI, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+PI/4` if provided `re = im = +infinity`', opts, function test( t ) {
	t.strictEqual( cphasef( new Complex64( PINF, PINF ) ), f32( +PI/4.0 ), 'returns expected value' );
	t.end();
});

tape( 'the function returns `-PI/4` if provided `re = -im = +infinity`', opts, function test( t ) {
	t.strictEqual( cphasef( new Complex64( PINF, NINF ) ), f32( -PI/4.0 ), 'returns expected value' );
	t.end();
});

tape( 'the function returns `*3*PI/4` if provided `-re = im = +infinity`', opts, function test( t ) {
	t.strictEqual( cphasef( new Complex64( NINF, PINF ) ), f32( +3.0*PI/4.0 ), 'returns expected value' );
	t.end();
});

tape( 'the function returns `-3*PI/4` if provided `re = im = -infinity`', opts, function test( t ) {
	t.strictEqual( cphasef( new Complex64( NINF, NINF ) ), f32( -3.0*PI/4.0 ), 'returns expected value' );
	t.end();
});

tape( 'the function returns `0.0` when `re = +infinity`', opts, function test( t ) {
	t.strictEqual( cphasef( new Complex64( PINF, -2.0 ) ), 0.0, 'returns expected value' );
	t.strictEqual( cphasef( new Complex64( PINF, 0.0 ) ), 0.0, 'returns expected value' );
	t.strictEqual( cphasef( new Complex64( PINF, 2.0 ) ), 0.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+PI` when `im > 0` and `re = -infinity`', opts, function test( t ) {
	t.strictEqual( cphasef( new Complex64( NINF, 1.0 ) ), PI, 'returns expected value' );
	t.strictEqual( cphasef( new Complex64( NINF, 2.0 ) ), PI, 'returns expected value' );
	t.strictEqual( cphasef( new Complex64( NINF, 3.0 ) ), PI, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-PI` when `im < 0` and `re = -infinity`', opts, function test( t ) {
	t.strictEqual( cphasef( new Complex64( NINF, -1.0 ) ), -PI, 'returns expected value' );
	t.strictEqual( cphasef( new Complex64( NINF, -2.0 ) ), -PI, 'returns expected value' );
	t.strictEqual( cphasef( new Complex64( NINF, -3.0 ) ), -PI, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+PI/2` when `im = +infinity`', opts, function test( t ) {
	t.strictEqual( cphasef( new Complex64( -1.0, PINF ) ), f32( PI/2.0 ), 'returns expected value' );
	t.strictEqual( cphasef( new Complex64( 0.0, PINF ) ), f32( PI/2.0 ), 'returns expected value' );
	t.strictEqual( cphasef( new Complex64( 2.0, PINF ) ), f32( PI/2.0 ), 'returns expected value' );
	t.end();
});

tape( 'the function returns `-PI/2` when `im = -infinity`', opts, function test( t ) {
	t.strictEqual( cphasef( new Complex64( -1.0, NINF ) ), -f32( PI/2.0 ), 'returns expected value' );
	t.strictEqual( cphasef( new Complex64( 0.0, NINF ) ), -f32( PI/2.0 ), 'returns expected value' );
	t.strictEqual( cphasef( new Complex64( 2.0, NINF ) ), -f32( PI/2.0 ), 'returns expected value' );
	t.end();
});

tape( 'the function returns `PI/2` if provided a positive `im` and `re=0`', opts, function test( t ) {
	t.strictEqual( cphasef( new Complex64( 0.0, 2.0 ) ), f32( PI/2.0 ), 'returns expected value' );
	t.strictEqual( cphasef( new Complex64( 0.0, 1.0 ) ), f32( PI/2.0 ), 'returns expected value' );
	t.strictEqual( cphasef( new Complex64( 0.0, 0.5 ) ), f32( PI/2.0 ), 'returns expected value' );
	t.end();
});

tape( 'the function returns `-PI/2` if provided a negative `im` and `re=0`', opts, function test( t ) {
	t.strictEqual( cphasef( new Complex64( 0.0, -2.0 ) ), -f32( PI/2.0 ), 'returns expected value' );
	t.strictEqual( cphasef( new Complex64( 0.0, -1.0 ) ), -f32( PI/2.0 ), 'returns expected value' );
	t.strictEqual( cphasef( new Complex64( 0.0, -0.5 ) ), -f32( PI/2.0 ), 'returns expected value' );
	t.end();
});

tape( 'the function computes the argument of a complex number (when `re` and `im` are positive)', opts, function test( t ) {
	var expected;
	var actual;
	var delta;
	var tol;
	var re;
	var im;
	var i;

	re = positivePositive.re;
	im = positivePositive.im;
	expected = positivePositive.expected;
	for ( i = 0; i < re.length; i++ ) {
		actual = cphasef( new Complex64( re[i], im[i] ) );
		expected[ i ] = f32( expected[ i ] );
		delta = absf( actual - expected[i] );
		tol = 1.3 * EPS * absf( expected[i] );
		t.strictEqual( delta <= tol, true, 'within tolerance. re: '+re[i]+'. im: '+im[i]+'. Actual: '+actual+'. Expected: '+expected[i]+'. tol: '+tol+'. delta: '+delta+'.' );
	}
	t.end();
});

tape( 'the function computes the argument of a complex number (when `re` is negative and `im` is positive)', opts, function test( t ) {
	var expected;
	var actual;
	var delta;
	var tol;
	var re;
	var im;
	var i;

	re = negativePositive.re;
	im = negativePositive.im;
	expected = negativePositive.expected;
	for ( i = 0; i < re.length; i++ ) {
		actual = cphasef( new Complex64( re[i], im[i] ) );
		expected[ i ] = f32( expected[ i ] );
		delta = absf( actual - expected[i] );
		tol = EPS * absf( expected[i] );
		t.strictEqual( delta <= tol, true, 'within tolerance. re: '+re[i]+'. im: '+im[i]+'. Actual: '+actual+'. Expected: '+expected[i]+'. tol: '+tol+'. delta: '+delta+'.' );
	}
	t.end();
});

tape( 'the function computes the argument of a complex number (when `re` and `im` are negative)', opts, function test( t ) {
	var expected;
	var actual;
	var delta;
	var tol;
	var re;
	var im;
	var i;

	re = negativeNegative.re;
	im = negativeNegative.im;
	expected = negativeNegative.expected;
	for ( i = 0; i < re.length; i++ ) {
		actual = cphasef( new Complex64( re[i], im[i] ) );
		expected[ i ] = f32( expected[ i ] );
		delta = absf( actual - expected[i] );
		tol = EPS * absf( expected[i] );
		t.strictEqual( delta <= tol, true, 'within tolerance. re: '+re[i]+'. im: '+im[i]+'. Actual: '+actual+'. Expected: '+expected[i]+'. tol: '+tol+'. delta: '+delta+'.' );
	}
	t.end();
});
