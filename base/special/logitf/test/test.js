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
var isnanf = require( './../../../../base/assert/is-nanf' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var EPS = require( '@stdlib/constants/float32/eps' );
var absf = require( './../../../../base/special/absf' );
var logitf = require( './../lib' );


// FIXTURES //

var small = require( './fixtures/python/small.json' );
var medium = require( './fixtures/python/medium.json' );
var large = require( './fixtures/python/large.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof logitf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` when provided `NaN`', function test( t ) {
	var y = logitf( NaN );
	t.strictEqual( isnanf( y ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` when provided a number outside `[0,1]`', function test( t ) {
	var y = logitf( 1.2 );
	t.strictEqual( isnanf( y ), true, 'returns expected value' );
	y = logitf( -0.1 );
	t.strictEqual( isnanf( y ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-Infinity` when provided `0`', function test( t ) {
	var y = logitf( 0.0 );
	t.strictEqual( y, NINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+Infinity` when provided `1`', function test( t ) {
	var y = logitf( 1.0 );
	t.strictEqual( y, PINF, 'returns expected value' );
	t.end();
});

tape( 'the function evaluates the logit of `x` for the interval `(0,0.25]`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = small.expected;
	x = small.x;
	for ( i = 0; i < x.length; i++ ) {
		y = logitf( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = absf( y - expected[i] );
			tol = EPS * absf( expected[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. v: '+y+'. E: '+expected[i]+' Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'the function evaluates the logit of `x` for the interval `[0.25,0.75]`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = medium.expected;
	x = medium.x;
	for ( i = 0; i < x.length; i++ ) {
		y = logitf( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = absf( y - expected[i] );
			tol = EPS * absf( expected[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. v: '+y+'. E: '+expected[i]+' Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'the function evaluates the logit of `x` for the interval `[0.75,1)`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = large.expected;
	x = large.x;
	for ( i = 0; i < x.length; i++ ) {
		y = logitf( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = absf( y - expected[i] );
			tol = EPS * absf( expected[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. v: '+y+'. E: '+expected[i]+' Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});
