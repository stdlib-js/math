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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var abs = require( './../../../../base/special/abs' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var hyp2f1 = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( hyp2f1 instanceof Error )
};


// FIXTURES //

var basic = require( './fixtures/python/basic.json' );
var edgeCases1 = require( './fixtures/python/edge_cases1.json' );
var edgeCases2 = require( './fixtures/python/edge_cases2.json' );
var edgeCases3 = require( './fixtures/python/edge_cases3.json' );
var edgeCases4 = require( './fixtures/python/edge_cases4.json' );
var outliers = require( './fixtures/python/outliers.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof hyp2f1, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `1` if `x` is 0', opts, function test( t ) {
	var v;

	v = hyp2f1( 1.0, 1.0, 1.0, 0.0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	v = hyp2f1( 1.5, 2.5, 3.5, 0.0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	v = hyp2f1( -1, 4, 2, 0.0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', opts, function test( t ) {
	var v;

	v = hyp2f1( NaN, 3.0, 2.0, 0.5 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = hyp2f1( 0.0, NaN, 2.0, 0.5 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = hyp2f1( 0.0, 3.0, NaN, 0.5 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = hyp2f1( 0.0, 3.0, 2.0, NaN );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `1` if either `a` or `b` is 0 and `c` is not 0', opts, function test( t ) {
	var v;

	v = hyp2f1( 0.0, 3.0, 2.0, 0.5 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	v = hyp2f1( 0.0, -2.0, 4.0, 0.3 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	v = hyp2f1( 3.0, 0.0, 2.0, 0.5 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	v = hyp2f1( -2.0, 0.0, 4.0, 0.3 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns `PINF` when `c <= a + b`, `x === 1`, and neither `a` nor `b` are nonpositive integers', opts, function test( t ) {
	var v;

	v = hyp2f1( 3.0, 4.0, 7.0, 1.0 );
	t.strictEqual( v, PINF, 'returns expected value' );

	v = hyp2f1( 3.5, 4.5, 8.0, 1.0 );
	t.strictEqual( v, PINF, 'returns expected value' );

	v = hyp2f1( 3.5, 4.5, 8.0, 1.0 );
	t.strictEqual( v, PINF, 'returns expected value' );

	t.end();
});

tape( 'the function correctly evaluates the hypergeometric function', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var a;
	var b;
	var c;
	var x;
	var v;
	var i;

	a = basic.a;
	b = basic.b;
	c = basic.c;
	x = basic.x;
	expected = basic.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = hyp2f1( a[ i ], b[ i ], c[ i ], x[ i ] );
		if ( expected[ i ] === 'PINF' ) {
			t.strictEqual( v, PINF, 'returns expected value' );
			continue;
		}
		delta = abs( v - expected[ i ] );
		tol = EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. a: ' + a[ i ] + ' b: ' + b[ i ] + ' c: ' + c[ i ] + ' x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Delta: ' + delta + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function correctly evaluates the hypergeometric function', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var a;
	var b;
	var c;
	var x;
	var v;
	var i;

	a = edgeCases1.a;
	b = edgeCases1.b;
	c = edgeCases1.c;
	x = edgeCases1.x;
	expected = edgeCases1.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = hyp2f1( a[ i ], b[ i ], c[ i ], x[ i ] );
		if ( expected[ i ] === 'PINF' ) {
			t.strictEqual( v, PINF, 'returns expected value' );
			continue;
		}
		delta = abs( v - expected[ i ] );

		// NOTE: the tolerance here is larger than for the JavaScript implementation due to compiler optimizations which may be performed resulting in result divergence. For discussion, see https://github.com/stdlib-js/stdlib/pull/2298#discussion_r1624765205
		tol = 1.2 * EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. a: ' + a[ i ] + ' b: ' + b[ i ] + ' c: ' + c[ i ] + ' x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Delta: ' + delta + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function correctly evaluates the hypergeometric function', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var a;
	var b;
	var c;
	var x;
	var v;
	var i;

	a = edgeCases2.a;
	b = edgeCases2.b;
	c = edgeCases2.c;
	x = edgeCases2.x;
	expected = edgeCases2.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = hyp2f1( a[ i ], b[ i ], c[ i ], x[ i ] );
		if ( expected[ i ] === 'PINF' ) {
			t.strictEqual( v, PINF, 'returns expected value' );
			continue;
		}
		delta = abs( v - expected[ i ] );

		// NOTE: the tolerance here is larger than for the JavaScript implementation due to compiler optimizations which may be performed resulting in result divergence. For discussion, see https://github.com/stdlib-js/stdlib/pull/2298#discussion_r1624765205
		tol = 24.0 * EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. a: ' + a[ i ] + ' b: ' + b[ i ] + ' c: ' + c[ i ] + ' x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Delta: ' + delta + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function correctly evaluates the hypergeometric function', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var a;
	var b;
	var c;
	var x;
	var v;
	var i;

	a = edgeCases3.a;
	b = edgeCases3.b;
	c = edgeCases3.c;
	x = edgeCases3.x;
	expected = edgeCases3.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = hyp2f1( a[ i ], b[ i ], c[ i ], x[ i ] );
		if ( expected[ i ] === 'PINF' ) {
			t.strictEqual( v, PINF, 'returns expected value' );
			continue;
		}
		delta = abs( v - expected[ i ] );

		// NOTE: the tolerance here is larger than for the JavaScript implementation due to compiler optimizations which may be performed resulting in result divergence. For discussion, see https://github.com/stdlib-js/stdlib/pull/2298#discussion_r1624765205
		tol = 32.0 * EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. a: ' + a[ i ] + ' b: ' + b[ i ] + ' c: ' + c[ i ] + ' x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Delta: ' + delta + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function correctly evaluates the hypergeometric function', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var a;
	var b;
	var c;
	var x;
	var v;
	var i;

	a = edgeCases4.a;
	b = edgeCases4.b;
	c = edgeCases4.c;
	x = edgeCases4.x;
	expected = edgeCases4.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = hyp2f1( a[ i ], b[ i ], c[ i ], x[ i ] );
		if ( expected[ i ] === 'PINF' ) {
			t.strictEqual( v, PINF, 'returns expected value' );
			continue;
		}
		delta = abs( v - expected[ i ] );

		// NOTE: the tolerance here is larger than for the JavaScript implementation due to compiler optimizations which may be performed resulting in result divergence. For discussion, see https://github.com/stdlib-js/stdlib/pull/2298#discussion_r1624765205
		tol = 84.0 * EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. a: ' + a[ i ] + ' b: ' + b[ i ] + ' c: ' + c[ i ] + ' x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Delta: ' + delta + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function correctly evaluates the hypergeometric function', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var a;
	var b;
	var c;
	var x;
	var v;
	var i;

	a = outliers.a;
	b = outliers.b;
	c = outliers.c;
	x = outliers.x;
	expected = outliers.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = hyp2f1( a[ i ], b[ i ], c[ i ], x[ i ] );
		delta = abs( v - expected[ i ] );

		// NOTE: the tolerance here is larger than for the JavaScript implementation due to compiler optimizations which may be performed resulting in result divergence. For discussion, see https://github.com/stdlib-js/stdlib/pull/2298#discussion_r1624765205
		tol = 345877.0 * EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. a: ' + a[ i ] + ' b: ' + b[ i ] + ' c: ' + c[ i ] + ' x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Delta: ' + delta + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});
