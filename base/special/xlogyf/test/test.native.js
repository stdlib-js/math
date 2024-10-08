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
var isnanf = require( './../../../../base/assert/is-nanf' );
var EPS = require( '@stdlib/constants/float32/eps' );
var absf = require( './../../../../base/special/absf' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var tryRequire = require( '@stdlib/utils/try-require' );


// FIXTURES //

var smallSmall = require( './fixtures/python/small_small.json' );
var smallLarge = require( './fixtures/python/small_large.json' );
var largeSmall = require( './fixtures/python/large_small.json' );
var largeLarge = require( './fixtures/python/large_large.json' );


// VARIABLES //

var xlogyf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( xlogyf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof xlogyf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` when provided `NaN` for any parameter', opts, function test( t ) {
	var out = xlogyf( NaN, 2.0 );
	t.strictEqual( isnanf( out ), true, 'returns expected value' );

	out = xlogyf( 0.0, NaN );
	t.strictEqual( isnanf( out ), true, 'returns expected value' );

	out = xlogyf( 3.4, NaN );
	t.strictEqual( isnanf( out ), true, 'returns expected value' );

	out = xlogyf( NaN, NaN );
	t.strictEqual( isnanf( out ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `0` when `x = 0` and `y` is a number', opts, function test( t ) {
	var out = xlogyf( 0.0, 2.0 );
	t.strictEqual( out, 0.0, 'returns expected value' );

	out = xlogyf( 0.0, 0.0 );
	t.strictEqual( out, 0.0, 'returns expected value' );

	out = xlogyf( 0.0, -3.0 );
	t.strictEqual( out, 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates `x * ln(y)` for small `x` and `y`', opts, function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var x;
	var y;
	var i;
	var e;

	expected = smallSmall.expected;
	x = smallSmall.x;
	y = smallSmall.y;
	for ( i = 0; i < x.length; i++ ) {
		e = float64ToFloat32( expected[ i ] );
		out = xlogyf( x[ i ], y[ i ] );
		if ( out === e ) {
			t.strictEqual( out, e, 'x: '+x[ i ]+', out: '+out+', expected: '+e );
		} else {
			delta = absf( out - e );
			tol = 17.0 * EPS * absf( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. v: '+out+'. E: '+e+' Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'the function evaluates `x * ln(y)` for small `x` and large `y`', opts, function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var x;
	var y;
	var i;
	var e;

	expected = smallLarge.expected;
	x = smallLarge.x;
	y = smallLarge.y;
	for ( i = 0; i < x.length; i++ ) {
		e = float64ToFloat32( expected[ i ] );
		out = xlogyf( x[ i ], y[ i ] );
		if ( out === e ) {
			t.strictEqual( out, e, 'x: '+x[ i ]+', out: '+out+', expected: '+e );
		} else {
			delta = absf( out - e );
			tol = 2.0 * EPS * absf( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. v: '+out+'. E: '+e+' Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'the function evaluates `x * ln(y)` for large `x` and small `y`', opts, function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var x;
	var y;
	var i;
	var e;

	expected = largeSmall.expected;
	x = largeSmall.x;
	y = largeSmall.y;
	for ( i = 0; i < x.length; i++ ) {
		e = float64ToFloat32( expected[ i ] );
		out = xlogyf( x[ i ], y[ i ] );
		if ( out === e ) {
			t.strictEqual( out, e, 'x: '+x[ i ]+', out: '+out+', expected: '+e );
		} else {
			delta = absf( out - e );
			tol = 83.0 * EPS * absf( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. v: '+out+'. E: '+e+' Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'the function evaluates `x * ln(y)` for large `x` and `y`', opts, function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var x;
	var y;
	var i;
	var e;

	expected = largeLarge.expected;
	x = largeLarge.x;
	y = largeLarge.y;
	for ( i = 0; i < x.length; i++ ) {
		e = float64ToFloat32( expected[ i ] );
		out = xlogyf( x[ i ], y[ i ] );
		if ( out === e ) {
			t.strictEqual( out, e, 'x: '+x[ i ]+', out: '+out+', expected: '+e );
		} else {
			delta = absf( out - e );
			tol = 2.0 * EPS * absf( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. v: '+out+'. E: '+e+' Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});
