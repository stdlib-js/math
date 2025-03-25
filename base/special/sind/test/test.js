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

var tape = require( 'tape' );
var isnan = require( './../../../../base/assert/is-nan' );
var abs = require( './../../../../base/special/abs' );
var EPS = require( '@stdlib/constants/float64/eps' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var sind = require( './../lib' );


// FIXTURES //

var negative = require( './fixtures/julia/negative.json' );
var positive = require( './fixtures/julia/positive.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.true( typeof sind, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a `NaN`, the function returns `NaN`', function test( t ) {
	var v = sind( NaN );
	t.equal( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function computes the sine of an angle measured in degrees (negative values)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = negative.x;
	expected = negative.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = sind( x[i] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'x: '+x[i]+'. E: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the sine of an angle measured in degrees (positive values)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = positive.x;
	expected = positive.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = sind( x[i] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'x: '+x[i]+'. E: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'if provided `+infinity`, the function returns `NaN`', function test( t ) {
	var v = sind( PINF );
	t.equal( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `-infinity`, the function returns `NaN`', function test( t ) {
	var v = sind( NINF );
	t.equal( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided a multiple of `180.0`, the function returns `0.0`', function test( t ) {
	var v = sind( 180.0 );
	t.equal( v, 0.0, 'returns expected value' );

	v = sind( -180.0 );
	t.equal( v, 0.0, 'returns expected value' );

	v = sind( 360.0 );
	t.equal( v, 0.0, 'returns expected value' );

	t.end();
});
