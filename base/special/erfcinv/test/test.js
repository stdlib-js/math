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
var isnan = require( './../../../../base/assert/is-nan' );
var isPositiveZero = require( './../../../../base/assert/is-positive-zero' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( './../../../../base/special/abs' );
var erfcinv = require( './../lib' );


// FIXTURES //

var x1 = require( './fixtures/julia/x_0.5_1.5.json' );
var x2 = require( './fixtures/julia/x_0.25_0.5.json' );
var x3 = require( './fixtures/julia/x_1.5_1.75.json' );
var x4 = require( './fixtures/julia/x_1.75_1.9998.json' );
var x5 = require( './fixtures/julia/x_0.0002_0.25.json' );
var x6 = require( './fixtures/julia/x_1.9998_1.9999..8.json' );
var x7 = require( './fixtures/julia/x_1.9999..8_2.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof erfcinv, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', function test( t ) {
	var y = erfcinv( NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `0`, the function returns `+infinity`', function test( t ) {
	var y = erfcinv( 0.0 );
	t.strictEqual( y, PINF, 'returns expected value' );
	t.end();
});

tape( 'if provided `2`, the function returns `-infinity`', function test( t ) {
	var y = erfcinv( 2.0 );
	t.strictEqual( y, NINF, 'returns expected value`' );
	t.end();
});

tape( 'if provided `1`, the function returns `0`', function test( t ) {
	var y = erfcinv( 1.0 );
	t.strictEqual( isPositiveZero( y ), true, 'returns expected value`' );
	t.end();
});

tape( 'if provided a value which is either less than `0` or greater than `2`, the function returns `NaN`', function test( t ) {
	var values;
	var v;
	var i;

	values = [
		3.14,
		-3.14,
		-0.00000001,
		2.00000001,
		PINF,
		NINF
	];

	for ( i = 0; i < values.length; i++ ) {
		v = erfcinv( values[i] );
		t.strictEqual( isnan( v ), true, 'returns expected value when provided '+values[i] );
	}
	t.end();
});

tape( 'the function evaluates the inverse complementary error function for `x` on the interval `[0.5,1.5]', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = x1.expected;
	x = x1.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erfcinv( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 3.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'the function evaluates the inverse complementary error function for `x` on the interval `[0.25,0.5]', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = x2.expected;
	x = x2.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erfcinv( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 3.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'the function evaluates the inverse complementary error function for `x` on the interval `[1.5,1.75]', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = x3.expected;
	x = x3.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erfcinv( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 3.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'the function evaluates the inverse complementary error function for `x` on the interval `[1.75,1.9998]', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = x4.expected;
	x = x4.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erfcinv( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 13.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'the function evaluates the inverse complementary error function for `x` on the interval `[0.0002,0.25]', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = x5.expected;
	x = x5.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erfcinv( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 14.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'the function evaluates the inverse complementary error function for `x` on the interval `[1.9998,1.9999..8]', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = x6.expected;
	x = x6.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erfcinv( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 9.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'the function evaluates the inverse complementary error function for `x` on the interval `[1.9999..8,2]', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = x7.expected;
	x = x7.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erfcinv( x[i] );
		if ( expected[ i ] === null ) {
			expected[ i ] = NINF;
		}
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});
