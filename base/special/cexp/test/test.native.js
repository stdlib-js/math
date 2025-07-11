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
var isnan = require( './../../../../base/assert/is-nan' );
var isPositiveZero = require( './../../../../base/assert/is-positive-zero' );
var isNegativeZero = require( './../../../../base/assert/is-negative-zero' );
var abs = require( './../../../../base/special/abs' );
var EPS = require( '@stdlib/constants/float64/eps' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var cexp = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( cexp instanceof Error )
};


// FIXTURES //

var pureImaginary = require( './fixtures/julia/pure_imaginary.json' );
var generalComplex = require( './fixtures/julia/general_complex.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cexp, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a double-precision complex floating-point number', opts, function test( t ) {
	var v;

	v = cexp( new Complex128( 0.0, 0.0 ) );
	t.strictEqual( real( v ), 1.0, 'returns expected value' );
	t.strictEqual( imag( v ), 0.0, 'returns expected value' );
	t.end();
});

tape( 'the function computes exp(z) for pure imaginary z', opts, function test( t ) {
	var delta;
	var expre;
	var expim;
	var tol;
	var re;
	var im;
	var i;
	var q;

	re = pureImaginary.re;
	im = pureImaginary.im;
	expre = pureImaginary.expre;
	expim = pureImaginary.expim;

	for ( i = 0; i < re.length; i++ ) {
		q = cexp( new Complex128( re[ i ], im[ i ] ) );
		if ( real( q ) === expre[ i ] ) {
			t.strictEqual( real( q ), expre[ i ], 'returns expected real component' );
		} else {
			delta = abs( real( q ) - expre[ i ] );
			tol = EPS * abs( expre[ i ] );
			t.ok( delta <= tol, 'within tolerance. z: '+re[i]+'+ '+im[i]+'i. real: '+real( q )+'. expected: '+expre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( imag( q ) === expim[ i ] ) {
			t.strictEqual( imag( q ), expim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( imag( q ) - expim[ i ] );
			tol = EPS * abs( expim[ i ] );
			t.ok( delta <= tol, 'within tolerance. z: '+re[i]+'+ '+im[i]+'i. imag: '+imag( q )+'. expected: '+expim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes exp(z) for complex z', opts, function test( t ) {
	var delta;
	var expre;
	var expim;
	var tol;
	var re;
	var im;
	var i;
	var q;

	re = generalComplex.re;
	im = generalComplex.im;
	expre = generalComplex.expre;
	expim = generalComplex.expim;

	for ( i = 0; i < re.length; i++ ) {
		q = cexp( new Complex128( re[ i ], im[ i ] ) );
		if ( real( q ) === expre[ i ] ) {
			t.strictEqual( real( q ), expre[ i ], 'returns expected real component' );
		} else {
			delta = abs( real( q ) - expre[ i ] );
			tol = EPS * abs( expre[ i ] );
			t.ok( delta <= tol, 'within tolerance. z: '+re[i]+'+ '+im[i]+'i. real: '+real( q )+'. expected: '+expre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( imag( q ) === expim[ i ] ) {
			t.strictEqual( imag( q ), expim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( imag( q ) - expim[ i ] );
			tol = 2.0 * EPS * abs( expim[ i ] );
			t.ok( delta <= tol, 'within tolerance. z: '+re[i]+'+ '+im[i]+'i. imag: '+imag( q )+'. expected: '+expim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'if imaginary component is `+Infinity`, the function returns a complex number having `NaN` components', opts, function test( t ) {
	var v;

	v = cexp( new Complex128( 0.0, PINF ) );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );
	t.end();
});

tape( 'if imaginary component is `-Infinity`, the function returns a complex number having `NaN` components', opts, function test( t ) {
	var v;

	v = cexp( new Complex128( 0.0, NINF ) );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );
	t.end();
});

tape( 'if real component is `-Infinity`, the function returns a complex number with both components equal to `0`', opts, function test( t ) {
	var v;

	v = cexp( new Complex128( NINF, 1.0 ) );
	t.strictEqual( real( v ), 0.0, 'returns 0.0' );
	t.strictEqual( imag( v ), 0.0, 'returns 0.0' );
	t.end();
});

tape( 'if real component is `+Infinity` and imaginary component is `0.0`, the function returns a complex number with the real component equal to `+Infinity` and imaginary component equal to `0.0`', opts, function test( t ) {
	var v;

	v = cexp( new Complex128( PINF, 0.0 ) );
	t.strictEqual( real( v ), PINF, 'returns +Infinity' );
	t.strictEqual( imag( v ), 0.0, 'returns 0.0' );
	t.end();
});

tape( 'if real component is `NaN` and imaginary component is `0.0`, the function returns a complex number with the real component equal to `NaN` and imaginary component equal to `0.0`', opts, function test( t ) {
	var v;

	v = cexp( new Complex128( NaN, 0.0 ) );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( imag( v ), 0.0, 'returns 0.0' );
	t.end();
});

tape( 'if imaginary component is `NaN`, the function returns a complex number with both components equal to `NaN`', opts, function test( t ) {
	var v;

	v = cexp( new Complex128( 5.0, NaN ) );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );

	v = cexp( new Complex128( 0.0, NaN ) );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );

	v = cexp( new Complex128( NaN, NaN ) );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );

	t.end();
});

tape( 'if imaginary component is `+0.0`, the function returns a complex number with an imaginary component equal to `+0.0`', opts, function test( t ) {
	var v;

	v = cexp( new Complex128( 3.0, 0.0 ) );
	t.strictEqual( isPositiveZero( imag( v ) ), true, 'returns +0.0' );
	t.end();
});

tape( 'if imaginary component is `-0.0`, the function returns a complex number with an imaginary component equal to `-0.0`', opts, function test( t ) {
	var v;

	v = cexp( new Complex128( 3.0, -0.0 ) );
	t.strictEqual( isNegativeZero( imag( v ) ), true, 'returns -0.0' );
	t.end();
});

tape( 'if real component is `NaN` and imaginary component is nonzero, the function returns a complex number with both components equal to `NaN`', opts, function test( t ) {
	var v;

	v = cexp( new Complex128( NaN, 3.0 ) );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );
	t.end();
});

tape( 'if real component is `NaN` and imaginary component is `+0.0`, the function returns a complex number with an imaginary component equal to `+0.0`', opts, function test( t ) {
	var v;

	v = cexp( new Complex128( NaN, 0.0 ) );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( imag( v ) ), true, 'returns +0.0' );
	t.end();
});

tape( 'if real component is `NaN` and imaginary component is `-0.0`, the function returns a complex number with an imaginary component equal to `-0.0`', opts, function test( t ) {
	var v;

	v = cexp( new Complex128( NaN, -0.0 ) );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZero( imag( v ) ), true, 'returns +0.0' );
	t.end();
});

tape( 'if real component is `+Infinity` and imaginary component is `+Infinity`, the function returns a complex number with the real component equal to `-Infinity` and imaginary component equal to `NaN`', opts, function test( t ) {
	var v;

	v = cexp( new Complex128( PINF, PINF ) );
	t.strictEqual( real( v ), NINF, 'returns -Infinity' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );
	t.end();
});

tape( 'if real component is `-Infinity` and imaginary component is `+Infinity`, the function returns a complex number with the real component equal to `-0.0` and imaginary component equal to `+0.0`', opts, function test( t ) {
	var v;

	v = cexp( new Complex128( NINF, PINF ) );
	t.strictEqual( isNegativeZero( real( v ) ), true, 'returns -0.0' );
	t.strictEqual( isPositiveZero( imag( v ) ), true, 'returns +0.0' );
	t.end();
});

tape( 'if real component is `-Infinity` and imaginary component is `-Infinity`, the function returns a complex number with the real component equal to `-0.0` and imaginary component equal to `-0.0`', opts, function test( t ) {
	var v;

	v = cexp( new Complex128( NINF, NINF ) );
	t.strictEqual( isNegativeZero( real( v ) ), true, 'returns -0.0' );
	t.strictEqual( isNegativeZero( imag( v ) ), true, 'returns -0.0' );
	t.end();
});
