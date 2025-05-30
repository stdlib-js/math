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
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var tryRequire = require( '@stdlib/utils/try-require' );
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( './../../../../base/special/abs' );


// FIXTURES //

var positive = require( './fixtures/python/positive.json' );
var negative = require( './fixtures/python/negative.json' );


// VARIABLES //

var expit = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( expit instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof expit, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` when provided `NaN`', opts, function test( t ) {
	var y = expit( NaN );
	t.strictEqual( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'the function returns `0.5` when provided `0`', opts, function test( t ) {
	var y = expit( 0.0 );
	t.strictEqual( y, 0.5, 'returns 0.5' );
	t.end();
});

tape( 'the function returns `1.0` when provided `+Infinity`', opts, function test( t ) {
	var y = expit( PINF );
	t.strictEqual( y, 1.0, 'returns 1.0' );
	t.end();
});

tape( 'the function returns `0.0` when provided `-Infinity`', opts, function test( t ) {
	var y = expit( NINF );
	t.strictEqual( y, 0.0, 'returns 0.0' );
	t.end();
});

tape( 'the function evaluates the standard logistic function for negative numbers', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = negative.expected;
	x = negative.x;
	for ( i = 0; i < x.length; i++ ) {
		y = expit( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 1.5 * EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. v: '+y+'. E: '+expected[i]+' Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'the function evaluates the standard logistic function for positive numbers', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = positive.expected;
	x = positive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = expit( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 1.5 * EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. v: '+y+'. E: '+expected[i]+' Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});
