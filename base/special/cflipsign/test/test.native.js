/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var isnan = require( './../../../../base/assert/is-nan' );
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( './../../../../base/special/abs' );
var isNegativeZero = require( './../../../../base/assert/is-negative-zero' );
var isPositiveZero = require( './../../../../base/assert/is-positive-zero' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var cflipsign = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( cflipsign instanceof Error )
};


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cflipsign, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function evaluates the flipsign function', opts, function test( t ) {
	var delta;
	var ans;
	var ere;
	var eim;
	var are;
	var aim;
	var tol;
	var re;
	var im;
	var y;
	var z;
	var i;

	re = data.re;
	im = data.im;
	y = data.y;
	ere = data.expected_re;
	eim = data.expected_im;

	for ( i = 0; i < re.length; i++ ) {
		z = new Complex128( re[ i ], im[ i ] );
		ans = cflipsign( z, y[ i ] );
		are = real( ans );
		aim = imag( ans );
		if ( are === ere[ i ] && aim === eim[ i ] ) {
			t.strictEqual( are, ere[ i ], 're: '+re[ i ]+'. Expected: '+ere[ i ] );
			t.strictEqual( aim, eim[ i ], 'im: '+im[ i ]+'. Expected: '+eim[ i ] );
		} else {
			delta = abs( are - ere[ i ] );
			tol = EPS * abs( ere[ i ] );
			t.ok( delta <= tol, 'within tolerance. re: '+re[ i ]+'. im: '+im[ i ]+'. Actual re: '+are+'. Expected re: '+ere[ i ]+'. delta: '+delta+'. tol: '+tol+'.' );

			delta = abs( aim - eim[ i ] );
			tol = EPS * abs( eim[ i ] );
			t.ok( delta <= tol, 'within tolerance. re: '+re[ i ]+'. im: '+im[ i ]+'. Actual im: '+aim+'. Expected im: '+eim[ i ]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function does not flip the sign of real and imaginary input arguments if `y` is `+infinity`', opts, function test( t ) {
	var actual;
	var z;

	// Tested against Julia...
	z = new Complex128( -4.2, 5.5 );
	actual = cflipsign( z, PINF );

	t.strictEqual( real( actual ), -4.2, 'returns expected value' );
	t.strictEqual( imag( actual ), 5.5, 'returns expected value' );

	t.end();
});

tape( 'the function flips the sign of real and imaginary input arguments if `y` is `-infinity`', opts, function test( t ) {
	var actual;
	var z;

	// Tested against Julia...
	z = new Complex128( -4.2, 5.5 );
	actual = cflipsign( z, NINF );

	t.strictEqual( real( actual ), 4.2, 'returns expected value' );
	t.strictEqual( imag( actual ), -5.5, 'returns expected value' );

	t.end();
});

tape( 'the function flips the sign of real and imaginary input arguments if `y` is `-0`', opts, function test( t ) {
	var actual;
	var z;

	// Tested against Julia...
	z = new Complex128( -4.2, 5.5 );
	actual = cflipsign( z, -0.0 );

	t.strictEqual( real( actual ), 4.2, 'returns expected value' );
	t.strictEqual( imag( actual ), -5.5, 'returns expected value' );

	t.end();
});

tape( 'the function does not flip the sign of real and imaginary input arguments if `y` is `+0`', opts, function test( t ) {
	var actual;
	var z;

	// Tested against Julia...
	z = new Complex128( -4.2, 5.5 );
	actual = cflipsign( z, +0.0 );

	t.strictEqual( real( actual ), -4.2, 'returns expected value' );
	t.strictEqual( imag( actual ), 5.5, 'returns expected value' );

	t.end();
});

tape( 'the function returns a `NaN` if provided a `NaN` independent of `y`', opts, function test( t ) {
	var v;

	v = cflipsign( new Complex128( NaN, NaN ), 2.0 );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );

	v = cflipsign( new Complex128( NaN, NaN ), -2.0 );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );

	v = cflipsign( new Complex128( NaN, NaN ), NaN );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `+0` if provided `+0` and a positive `y`', opts, function test( t ) {
	var v = cflipsign( new Complex128( +0.0, +0.0 ), 4.0 );
	t.strictEqual( isPositiveZero( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( imag( v ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-0` if provided `-0` and a positive `y`', opts, function test( t ) {
	var v = cflipsign( new Complex128( -0.0, -0.0 ), 4.0 );
	t.strictEqual( isNegativeZero( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZero( imag( v ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+0` if provided `-0` and a negative `y`', opts, function test( t ) {
	var v = cflipsign( new Complex128( -0.0, -0.0 ), -4.0 );
	t.strictEqual( isPositiveZero( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( imag( v ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-0` if provided `+0` and a negative `y`', opts, function test( t ) {
	var v = cflipsign( new Complex128( +0.0, +0.0 ), -4.0 );
	t.strictEqual( isNegativeZero( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZero( imag( v ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+infinity` if provided `+infinity` and a positive `y`', opts, function test( t ) {
	var v = cflipsign( new Complex128( PINF, PINF ), 4.0 );
	t.strictEqual( real( v ), PINF, 'returns expected value' );
	t.strictEqual( imag( v ), PINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-infinity` if provided `-infinity` and a positive `y`', opts, function test( t ) {
	var v = cflipsign( new Complex128( NINF, NINF ), 4.0 );
	t.strictEqual( real( v ), NINF, 'returns expected value' );
	t.strictEqual( imag( v ), NINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+infinity` if provided `-infinity` and a negative `y`', opts, function test( t ) {
	var v = cflipsign( new Complex128( NINF, NINF ), -4.0 );
	t.strictEqual( real( v ), PINF, 'returns expected value' );
	t.strictEqual( imag( v ), PINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-infinity` if provided `+infinity` and a negative `y`', opts, function test( t ) {
	var v = cflipsign( new Complex128( PINF, PINF ), -4.0 );
	t.strictEqual( real( v ), NINF, 'returns expected value' );
	t.strictEqual( imag( v ), NINF, 'returns expected value' );
	t.end();
});
