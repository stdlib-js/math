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

var tape = require( 'tape' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var absf = require( './../../../../base/special/absf' );
var EPS = require( '@stdlib/constants/float32/eps' );
var fmodf = require( './../lib' );


// FIXTURES //

var subnormalResults = require( './fixtures/julia/subnormal_results.json' );
var smallSmall = require( './fixtures/julia/small_small.json' );
var smallLarge = require( './fixtures/julia/small_large.json' );
var largeSmall = require( './fixtures/julia/large_small.json' );
var negativePositive = require( './fixtures/julia/negative_positive.json' );
var positiveNegative = require( './fixtures/julia/positive_negative.json' );
var negativeNegative = require( './fixtures/julia/negative_negative.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof fmodf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function evaluates the modulus function (subnormal results)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var v;
	var x;
	var y;
	var i;
	var e;

	x = subnormalResults.x;
	y = subnormalResults.y;
	expected = subnormalResults.expected;
	for ( i = 0; i < x.length; i++ ) {
		e = float64ToFloat32( expected[ i ] );
		v = fmodf( float64ToFloat32( x[ i ] ), float64ToFloat32( y[ i ] ) );
		delta = absf( v - e );
		tol = EPS * absf( e );
		t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y[ i ]+'. v: '+v+'. E: '+e+'. Δ: '+delta+'. tol: '+tol );
	}
	t.end();
});

tape( 'the function evaluates the modulus function (small `x`, large `y`)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var v;
	var x;
	var y;
	var i;
	var e;

	x = smallLarge.x;
	y = smallLarge.y;
	expected = smallLarge.expected;
	for ( i = 0; i < x.length; i++ ) {
		e = float64ToFloat32( expected[ i ] );
		v = fmodf( float64ToFloat32( x[ i ] ), float64ToFloat32( y[ i ] ) );
		delta = absf( v - e );
		tol = EPS * absf( e );
		t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y[ i ]+'. v: '+v+'. E: '+e+'. Δ: '+delta+'. tol: '+tol );
	}
	t.end();
});

tape( 'the function evaluates the modulus function (large `x`, small `y`)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var v;
	var x;
	var y;
	var i;
	var e;

	x = largeSmall.x;
	y = largeSmall.y;
	expected = largeSmall.expected;
	for ( i = 0; i < x.length; i++ ) {
		e = float64ToFloat32( expected[ i ] );
		v = fmodf( float64ToFloat32( x[ i ] ), float64ToFloat32( y[ i ] ) );
		delta = absf( v - e );
		tol = EPS * absf( e );
		t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y[ i ]+'. v: '+v+'. E: '+e+'. Δ: '+delta+'. tol: '+tol );
	}
	t.end();
});

tape( 'the function evaluates the modulus function (small `x`, small `y`)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var v;
	var x;
	var y;
	var i;
	var e;

	x = smallSmall.x;
	y = smallSmall.y;
	expected = smallSmall.expected;
	for ( i = 0; i < x.length; i++ ) {
		e = float64ToFloat32( expected[ i ] );
		v = fmodf( float64ToFloat32( x[ i ] ), float64ToFloat32( y[ i ] ) );
		delta = absf( v - e );
		tol = EPS * absf( e );
		t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y[ i ]+'. v: '+v+'. E: '+e+'. Δ: '+delta+'. tol: '+tol );
	}
	t.end();
});

tape( 'the function evaluates the modulus function (positive `x`, negative `y`)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var v;
	var x;
	var y;
	var i;
	var e;

	x = positiveNegative.x;
	y = positiveNegative.y;
	expected = positiveNegative.expected;
	for ( i = 0; i < x.length; i++ ) {
		e = float64ToFloat32( expected[ i ] );
		v = fmodf( float64ToFloat32( x[ i ] ), float64ToFloat32( y[ i ] ) );
		delta = absf( v - e );
		tol = EPS * absf( e );
		t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y[ i ]+'. v: '+v+'. E: '+e+'. Δ: '+delta+'. tol: '+tol );
	}
	t.end();
});

tape( 'the function evaluates the modulus function (negative `x`, positive `y`)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var v;
	var x;
	var y;
	var i;
	var e;

	x = negativePositive.x;
	y = negativePositive.y;
	expected = negativePositive.expected;
	for ( i = 0; i < x.length; i++ ) {
		e = float64ToFloat32( expected[ i ] );
		v = fmodf( float64ToFloat32( x[ i ] ), float64ToFloat32( y[ i ] ) );
		delta = absf( v - e );
		tol = EPS * absf( e );
		t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y[ i ]+'. v: '+v+'. E: '+e+'. Δ: '+delta+'. tol: '+tol );
	}
	t.end();
});

tape( 'the function evaluates the modulus function (negative `x`, negative `y`)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var v;
	var x;
	var y;
	var i;
	var e;

	x = negativeNegative.x;
	y = negativeNegative.y;
	expected = negativeNegative.expected;
	for ( i = 0; i < x.length; i++ ) {
		e = float64ToFloat32( expected[ i ] );
		v = fmodf( float64ToFloat32( x[ i ] ), float64ToFloat32( y[ i ] ) );
		delta = absf( v - e );
		tol = EPS * absf( e );
		t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y[ i ]+'. v: '+v+'. E: '+e+'. Δ: '+delta+'. tol: '+tol );
	}
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN` for `y`', function test( t ) {
	var v;

	v = fmodf( -3.0, NaN );
	t.equal( isnanf( v ), true, 'returns expected value' );

	v = fmodf( 0.0, NaN );
	t.equal( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `NaN` if provided `NaN` for `x`', function test( t ) {
	var v;

	v = fmodf( NaN, 5.0 );
	t.equal( isnanf( v ), true, 'returns expected value' );

	v = fmodf( NaN, 1.0 );
	t.equal( isnanf( v ), true, 'returns expected value' );

	v = fmodf( NaN, 0.0 );
	t.equal( isnanf( v ), true, 'returns expected value' );

	t.end();
});
