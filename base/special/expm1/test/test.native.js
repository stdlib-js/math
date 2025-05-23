/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var pow = require( './../../../../base/special/pow' );
var exp = require( './../../../../base/special/exp' );
var incrspace = require( '@stdlib/array/base/incrspace' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var tryRequire = require( '@stdlib/utils/try-require' );
var EPS = require( '@stdlib/constants/float64/eps' );


// FIXTURES //

var cppMediumPositive = require( './fixtures/cpp/medium_positive.json' );
var cppMediumNegative = require( './fixtures/cpp/medium_negative.json' );
var mediumNegative = require( './fixtures/julia/medium_negative.json' );
var mediumPositive = require( './fixtures/julia/medium_positive.json' );
var smallNegative = require( './fixtures/julia/small_negative.json' );
var smallPositive = require( './fixtures/julia/small_positive.json' );
var tiny = require( './fixtures/julia/tiny.json' );


// VARIABLES //

var expm1 = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( expm1 instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof expm1, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function agrees with `exp(x) - 1` for most `x`', opts, function test( t ) {
	var expected;
	var delta;
	var val;
	var tol;
	var x;
	var y;
	var i;
	x = incrspace( -10.0, 50.0, 0.5 );
	for ( i = 0; i < x.length; i++ ) {
		val = x[ i ];
		y = expm1( val );
		expected = exp( val ) - 1.0;
		delta = abs( y - expected );
		tol = 1e-12 * abs( expected );
		t.ok( delta <= tol, 'within tolerance. x: '+x+'. y: '+y+'. Δ: '+delta+'. E: '+ expected[i]+'. tol: '+tol+'.' );
	}
	t.end();
});

tape( 'the function accurately computes `exp(x) - 1` for negative medium numbers', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	x = mediumNegative.x;
	expected = mediumNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = expm1( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+v+'. E: '+ expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
	}
	t.end();
});

tape( 'the function accurately computes `exp(x) - 1` for negative medium numbers (tested against the Boost C++ library)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	x = cppMediumNegative.x;
	expected = cppMediumNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = expm1( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+v+'. E: '+ expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
	}
	t.end();
});

tape( 'the function accurately computes `exp(x) - 1` for positive medium numbers', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	x = mediumPositive.x;
	expected = mediumPositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = expm1( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+v+'. E: '+ expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
	}
	t.end();
});

tape( 'the function accurately computes `exp(x) - 1` for positive medium numbers (tested against the Boost C++ library)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	x = cppMediumPositive.x;
	expected = cppMediumPositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = expm1( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+v+'. E: '+ expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
	}
	t.end();
});

tape( 'the function accurately computes `exp(x) - 1` for negative small numbers', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	x = smallNegative.x;
	expected = smallNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = expm1( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+v+'. E: '+ expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
	}
	t.end();
});

tape( 'the function accurately computes `exp(x) - 1` for positive small numbers', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	x = smallPositive.x;
	expected = smallPositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = expm1( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+v+'. E: '+ expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
	}
	t.end();
});

tape( 'the function accurately computes `exp(x) - 1` for very small `x`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	x = tiny.x;
	expected = tiny.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = expm1( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+v+'. E: '+ expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
	}
	t.end();
});

tape( 'the function returns `+infinity` for very large `x`', opts, function test( t ) {
	t.strictEqual( expm1( 800.0 ), PINF, 'equals +infinity' );
	t.strictEqual( expm1( 900.0 ), PINF, 'equals +infinity' );
	t.strictEqual( expm1( 1000.0 ), PINF, 'equals +infinity' );
	t.end();
});

tape( 'the function returns `-1` for negative large `x`', opts, function test( t ) {
	t.strictEqual( expm1( -800.0 ), -1.0, 'equals -1' );
	t.strictEqual( expm1( -900.0 ), -1.0, 'equals -1' );
	t.strictEqual( expm1( -1000.0 ), -1.0, 'equals -1' );
	t.end();
});

tape( 'the function returns `x` for `x` smaller than `2**-54`', opts, function test( t ) {
	var val = pow( 2.0, -80 );
	t.strictEqual( expm1( val ), val, 'equals input value' );
	val = pow( 2.0, -55 );
	t.strictEqual( expm1( val ), val, 'equals input value' );
	val = pow( 2.0, -60 );
	t.strictEqual( expm1( val ), val, 'equals input value' );
	t.end();
});

tape( 'the function returns `-1` if provided `-infinity`', opts, function test( t ) {
	t.strictEqual( expm1( NINF ), -1.0, 'equals -1' );
	t.end();
});

tape( 'the function returns `+infinity` if provided `+infinity`', opts, function test( t ) {
	t.strictEqual( expm1( PINF ), PINF, 'equals +infinity' );
	t.end();
});

tape( 'the function returns `0` if provided `0`', opts, function test( t ) {
	var v = expm1( 0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'equals 0' );
	t.end();
});

tape( 'the function returns `-0` if provided `-0` (IEEE 754-2008)', opts, function test( t ) {
	var v = expm1( -0.0 );
	t.strictEqual( isNegativeZero( v ), true, 'equals -0' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', opts, function test( t ) {
	var val = expm1( NaN );
	t.strictEqual( isnan( val ), true, 'equals NaN' );
	t.end();
});
