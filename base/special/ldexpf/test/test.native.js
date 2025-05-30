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
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var isNegativeZerof = require( './../../../../base/assert/is-negative-zerof' );
var isPositiveZerof = require( './../../../../base/assert/is-positive-zerof' );
var EPS = require( '@stdlib/constants/float32/eps' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var absf = require( './../../../../base/special/absf' );
var tryRequire = require( '@stdlib/utils/try-require' );


// FIXTURES //

var small = require( './fixtures/julia/small.json' );
var medium = require( './fixtures/julia/medium.json' );
var large = require( './fixtures/julia/large.json' );
var subnormal = require( './fixtures/julia/subnormal.json' );


// VARIABLES //

var ldexpf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( ldexpf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ldexpf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function multiplies a number by an integer power of two (small values)', opts, function test( t ) {
	var expected;
	var delta;
	var frac;
	var exp;
	var tol;
	var v;
	var i;
	var e;

	expected = small.expected;
	frac = small.frac;
	exp = small.exp;
	for ( i = 0; i < frac.length; i++ ) {
		e = float64ToFloat32( expected[ i ] );
		v = ldexpf( frac[i], exp[i] );
		if ( v === e ) {
			t.strictEqual( v, e, 'frac: '+frac[i]+'; exp: '+exp[i]+'; expected: '+e );
		} else {
			delta = absf( v - e );
			tol = 1.2 * EPS * absf( e );
			t.strictEqual( delta <= tol, true, 'within tolerance. frac: '+frac[i]+'; exp: '+exp[i]+'. v: '+v+'. E: '+e+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function multiplies a number by an integer power of two (medium values)', opts, function test( t ) {
	var expected;
	var delta;
	var frac;
	var exp;
	var tol;
	var v;
	var i;
	var e;

	expected = medium.expected;
	frac = medium.frac;
	exp = medium.exp;
	for ( i = 0; i < frac.length; i++ ) {
		e = float64ToFloat32( expected[ i ] );
		v = ldexpf( frac[i], exp[i] );
		if ( v === e ) {
			t.strictEqual( v, e, 'frac: '+frac[i]+'; exp: '+exp[i]+'; expected: '+e );
		} else {
			delta = absf( v - e );
			tol = EPS * absf( e );
			t.strictEqual( delta <= tol, true, 'within tolerance. frac: '+frac[i]+'; exp: '+exp[i]+'. v: '+v+'. E: '+e+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function multiplies a number by an integer power of two (large values)', opts, function test( t ) {
	var expected;
	var delta;
	var frac;
	var exp;
	var tol;
	var v;
	var i;
	var e;

	expected = large.expected;
	frac = large.frac;
	exp = large.exp;
	for ( i = 0; i < frac.length; i++ ) {
		e = float64ToFloat32( expected[ i ] );
		v = ldexpf( frac[i], exp[i] );
		if ( v === e ) {
			t.strictEqual( v, e, 'frac: '+frac[i]+'; exp: '+exp[i]+'; expected: '+e );
		} else {
			delta = absf( v - e );
			tol = 1.0 * EPS * absf( e );
			t.strictEqual( delta <= tol, true, 'within tolerance. frac: '+frac[i]+'; exp: '+exp[i]+'. v: '+v+'. E: '+e+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function multiplies a number by an integer power of two (subnormals)', opts, function test( t ) {
	var expected;
	var delta;
	var frac;
	var exp;
	var tol;
	var v;
	var i;
	var e;

	expected = subnormal.expected;
	frac = subnormal.frac;
	exp = subnormal.exp;
	for ( i = 0; i < frac.length; i++ ) {
		e = float64ToFloat32( expected[ i ] );
		v = ldexpf( frac[i], exp[i] );
		if ( v === e ) {
			t.strictEqual( v, e, 'frac: '+frac[i]+'; exp: '+exp[i]+'; expected: '+e );
		} else {
			delta = absf( v - e );
			tol = 15.0 * EPS * absf( e );
			t.strictEqual( delta <= tol, true, 'within tolerance. frac: '+frac[i]+'; exp: '+exp[i]+'. v: '+v+'. E: '+e+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'if provided a fraction equal to `+0`, the function returns `+0`', opts, function test( t ) {
	var v = ldexpf( 0.0, 10 );
	t.strictEqual( isPositiveZerof( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided a fraction equal to `-0`, the function returns `-0`', opts, function test( t ) {
	var v = ldexpf( -0.0, 10 );
	t.strictEqual( isNegativeZerof( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided a fraction equal to `+infinity`, the function returns `+infinity`', opts, function test( t ) {
	var v = ldexpf( PINF, 10 );
	t.strictEqual( v, PINF, 'returns expected value' );
	t.end();
});

tape( 'if provided a fraction equal to `-infinity`, the function returns `-infinity`', opts, function test( t ) {
	var v = ldexpf( NINF, 10 );
	t.strictEqual( v, NINF, 'returns expected value' );
	t.end();
});

tape( 'if provided an exponent equal to `0`, the function returns the provided fraction', opts, function test( t ) {
	var v = ldexpf( 3.0, 0 );
	t.strictEqual( v, 3.0, 'returns expected value' );
	t.end();
});

tape( 'if provided a fraction equal to `NaN`, the function returns `NaN`', opts, function test( t ) {
	var v = ldexpf( NaN, 10 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `0` if the result of multiplying a positive fraction and an integer power of two underflows', opts, function test( t ) {
	// Min subnormal ~1.4e-45 ~ 2**-149
	var v = ldexpf( 0.005, -148 );
	t.strictEqual( isPositiveZerof( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-0` if the result of multiplying a negative fraction and an integer power of two underflows', opts, function test( t ) {
	// Min subnormal ~1.4e-45 ~ 2**-149
	var v = ldexpf( -0.005, -148 );
	t.strictEqual( isNegativeZerof( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+infinity` if the result of multiplying a positive fraction and an integer power of two overflows', opts, function test( t ) {
	// Max double ~1e38 ~ 2**126
	var v = ldexpf( 1.0e3, 124 );
	t.strictEqual( v, PINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-infinity` if the result of multiplying a negative fraction and an integer power of two overflows', opts, function test( t ) {
	// Max double ~1e38 ~ 2**126
	var v = ldexpf( -1.0e3, 124 );
	t.strictEqual( v, NINF, 'returns expected value' );
	t.end();
});

tape( 'if provided a fraction and a very large negative exponent, the function returns zero due to underflow', opts, function test( t ) {
	var v = ldexpf( 1.401298464324817e-45, -60000 );
	t.strictEqual( v, 0.0, 'returns expected value' );
	t.end();
});

tape( 'if provided a small fraction and a very large positive exponent, the function returns positive infinity due to integer overflow', opts, function test( t ) {
	var v = ldexpf( 1.17549435e-38, 60000 );
	t.strictEqual( v, PINF, 'returns expected value' );
	t.end();
});
