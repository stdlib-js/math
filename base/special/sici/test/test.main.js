/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var isArray = require( '@stdlib/assert/is-array' );
var isnan = require( './../../../../base/assert/is-nan' );
var abs = require( './../../../../base/special/abs' );
var HALF_PI = require( '@stdlib/constants/float64/half-pi' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var sici = require( './../lib/main.js' );


// FIXTURES //

var smallPositive = require( './fixtures/python/small_positive.json' );
var mediumPositive = require( './fixtures/python/medium_positive.json' );
var largePositive = require( './fixtures/python/large_positive.json' );
var smallNegative = require( './fixtures/python/small_negative.json' );
var mediumNegative = require( './fixtures/python/medium_negative.json' );
var largeNegative = require( './fixtures/python/large_negative.json' );
var veryLarge = require( './fixtures/python/very_large.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sici, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the sine and cosine integrals for small positive numbers', function test( t ) {
	var delta;
	var tol;
	var si;
	var ci;
	var x;
	var v;
	var i;

	x = smallPositive.x;
	si = smallPositive.si;
	ci = smallPositive.ci;

	for ( i = 0; i < x.length; i++ ) {
		v = sici( x[ i ] );

		delta = abs( v[ 0 ] - si[ i ] );
		tol = 2.0 * EPS * abs( si[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. SI: ' + v[ 0 ] + '. Expected: ' + si[ i ] + '. tol: ' + tol + '. delta: ' + delta + '.' );

		delta = abs( v[ 1 ] - ci[ i ] );
		tol = 2.0 * EPS * abs( ci[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. CI: ' + v[ 1 ] + '. Expected: ' + ci[ i ] + '. tol: ' + tol + '. delta: ' + delta + '.' );
	}
	t.end();
});

tape( 'the function computes the sine and cosine integrals for medium positive numbers', function test( t ) {
	var delta;
	var tol;
	var si;
	var ci;
	var x;
	var v;
	var i;

	x = mediumPositive.x;
	si = mediumPositive.si;
	ci = mediumPositive.ci;

	for ( i = 0; i < x.length; i++ ) {
		v = sici( x[ i ] );

		delta = abs( v[ 0 ] - si[ i ] );
		tol = 60.0 * EPS * abs( si[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. SI: ' + v[ 0 ] + '. Expected: ' + si[ i ] + '. tol: ' + tol + '. delta: ' + delta + '.' );

		delta = abs( v[ 1 ] - ci[ i ] );
		tol = 60.0 * EPS * abs( ci[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. CI: ' + v[ 1 ] + '. Expected: ' + ci[ i ] + '. tol: ' + tol + '. delta: ' + delta + '.' );
	}
	t.end();
});

tape( 'the function computes the sine and cosine integrals for large positive numbers', function test( t ) {
	var delta;
	var tol;
	var si;
	var ci;
	var x;
	var v;
	var i;

	x = largePositive.x;
	si = largePositive.si;
	ci = largePositive.ci;

	for ( i = 0; i < x.length; i++ ) {
		v = sici( x[ i ] );

		delta = abs( v[ 0 ] - si[ i ] );
		tol = 2.0 * EPS * abs( si[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. SI: ' + v[ 0 ] + '. Expected: ' + si[ i ] + '. tol: ' + tol + '. delta: ' + delta + '.' );

		delta = abs( v[ 1 ] - ci[ i ] );
		tol = 2.0 * EPS * abs( ci[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. CI: ' + v[ 1 ] + '. Expected: ' + ci[ i ] + '. tol: ' + tol + '. delta: ' + delta + '.' );
	}
	t.end();
});

tape( 'the function computes the sine and cosine integrals for small negative numbers', function test( t ) {
	var delta;
	var tol;
	var si;
	var ci;
	var x;
	var v;
	var i;

	x = smallNegative.x;
	si = smallNegative.si;
	ci = smallNegative.ci;

	for ( i = 0; i < x.length; i++ ) {
		v = sici( x[ i ] );

		delta = abs( v[ 0 ] - si[ i ] );
		tol = 2.0 * EPS * abs( si[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. SI: ' + v[ 0 ] + '. Expected: ' + si[ i ] + '. tol: ' + tol + '. delta: ' + delta + '.' );

		delta = abs( v[ 1 ] - ci[ i ] );
		tol = 2.0 * EPS * abs( ci[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. CI: ' + v[ 1 ] + '. Expected: ' + ci[ i ] + '. tol: ' + tol + '. delta: ' + delta + '.' );
	}
	t.end();
});

tape( 'the function computes the sine and cosine integrals for medium negative numbers', function test( t ) {
	var delta;
	var tol;
	var si;
	var ci;
	var x;
	var v;
	var i;

	x = mediumNegative.x;
	si = mediumNegative.si;
	ci = mediumNegative.ci;

	for ( i = 0; i < x.length; i++ ) {
		v = sici( x[ i ] );

		delta = abs( v[ 0 ] - si[ i ] );
		tol = 60.0 * EPS * abs( si[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. SI: ' + v[ 0 ] + '. Expected: ' + si[ i ] + '. tol: ' + tol + '. delta: ' + delta + '.' );

		delta = abs( v[ 1 ] - ci[ i ] );
		tol = 60.0 * EPS * abs( ci[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. CI: ' + v[ 1 ] + '. Expected: ' + ci[ i ] + '. tol: ' + tol + '. delta: ' + delta + '.' );
	}
	t.end();
});

tape( 'the function computes the sine and cosine integrals for large negative numbers', function test( t ) {
	var delta;
	var tol;
	var si;
	var ci;
	var x;
	var v;
	var i;

	x = largeNegative.x;
	si = largeNegative.si;
	ci = largeNegative.ci;

	for ( i = 0; i < x.length; i++ ) {
		v = sici( x[ i ] );

		delta = abs( v[ 0 ] - si[ i ] );
		tol = 2.0 * EPS * abs( si[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. SI: ' + v[ 0 ] + '. Expected: ' + si[ i ] + '. tol: ' + tol + '. delta: ' + delta + '.' );

		delta = abs( v[ 1 ] - ci[ i ] );
		tol = 2.0 * EPS * abs( ci[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. CI: ' + v[ 1 ] + '. Expected: ' + ci[ i ] + '. tol: ' + tol + '. delta: ' + delta + '.' );
	}
	t.end();
});

tape( 'the function computes the sine and cosine integrals for very large positive numbers', function test( t ) {
	var delta;
	var tol;
	var si;
	var ci;
	var x;
	var v;
	var i;

	x = veryLarge.x;
	si = veryLarge.si;
	ci = veryLarge.ci;

	for ( i = 0; i < x.length; i++ ) {
		v = sici( x[ i ] );

		delta = abs( v[ 0 ] - si[ i ] );
		tol = 2.0 * EPS * abs( si[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. SI: ' + v[ 0 ] + '. Expected: ' + si[ i ] + '. tol: ' + tol + '. delta: ' + delta + '.' );

		delta = abs( v[ 1 ] - ci[ i ] );
		tol = 2.0 * EPS * abs( ci[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. CI: ' + v[ 1 ] + '. Expected: ' + ci[ i ] + '. tol: ' + tol + '. delta: ' + delta + '.' );
	}
	t.end();
});

tape( 'the function returns `[0,-Infinity]` if provided `0`', function test( t ) {
	var val = sici( 0.0 );
	t.strictEqual( isArray( val ), true, 'returns an array' );
	t.strictEqual( val[ 0 ], 0.0, 'returns expected value' );
	t.strictEqual( val[ 1 ], NINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `[-PI/2,NaN]` if provided `-Infinity`', function test( t ) {
	var val = sici( NINF );
	t.strictEqual( isArray( val ), true, 'returns an array' );
	t.strictEqual( val[ 0 ], -HALF_PI, 'returns expected value' );
	t.strictEqual( isnan( val[ 1 ] ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `[PI/2,0]` if provided `+Infinity`', function test( t ) {
	var val = sici( PINF );
	t.strictEqual( isArray( val ), true, 'returns an array' );
	t.strictEqual( val[ 0 ], HALF_PI, 'returns expected value' );
	t.strictEqual( val[ 1 ], 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `[NaN,NaN]` if provided `NaN`', function test( t ) {
	var val = sici( NaN );
	t.strictEqual( isArray( val ), true, 'returns an array' );
	t.strictEqual( isnan( val[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( val[ 1 ] ), true, 'returns expected value' );
	t.end();
});
