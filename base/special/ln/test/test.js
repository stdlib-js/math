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
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( './../../../../base/special/abs' );
var pow = require( './../../../../base/special/pow' );
var isPositiveZero = require( './../../../../base/assert/is-positive-zero' );
var ln = require( './../lib' );


// FIXTURES //

var veryLargePositive = require( './fixtures/julia/very_large_positive.json' );
var largePositive = require( './fixtures/julia/large_positive.json' );
var mediumPositive = require( './fixtures/julia/medium_positive.json' );
var smallPositive = require( './fixtures/julia/small_positive.json' );
var smaller = require( './fixtures/julia/smaller.json' );
var tinyPositive = require( './fixtures/julia/tiny_positive.json' );
var subnormal = require( './fixtures/julia/subnormal.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ln, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function evaluates the natural logarithm of `x` (very large positive values)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = veryLargePositive.expected;
	x = veryLargePositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = ln( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the natural logarithm of `x` (large positive values)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = largePositive.expected;
	x = largePositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = ln( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the natural logarithm of `x` (medium positive values)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = mediumPositive.expected;
	x = mediumPositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = ln( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the natural logarithm of `x` (small positive values)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = smallPositive.expected;
	x = smallPositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = ln( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the natural logarithm of `x` (smaller positive values)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = smaller.expected;
	x = smaller.x;
	for ( i = 0; i < x.length; i++ ) {
		y = ln( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the natural logarithm of `x` (tiny positive values)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = tinyPositive.expected;
	x = tinyPositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = ln( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the natural logarithm of `x` (subnormal values)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = subnormal.expected;
	x = subnormal.x;
	for ( i = 0; i < x.length; i++ ) {
		y = ln( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function returns `-infinity` if provided `+-0`', function test( t ) {
	t.strictEqual( ln( 0.0 ), NINF, 'returns expected value' );
	t.strictEqual( ln( -0.0 ), NINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+infinity` if provided `+infinity`', function test( t ) {
	t.strictEqual( ln( PINF ), PINF, 'equals +infinity' );
	t.end();
});

tape( 'the function returns `NaN` if provided a negative number', function test( t ) {
	var v = ln( -1.0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns positive zero if provided `1.0`', function test( t ) {
	var v = ln( 1.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function evaluates the natural logarithm for powers of 2', function test( t ) {
	var delta;
	var tol;
	var v;

	// Test ln(2) - should trigger k !== 0 and f === 0.0 path
	v = ln( 2.0 );
	delta = abs( v - 0.6931471805599453 );
	tol = EPS * abs( 0.6931471805599453 );
	t.strictEqual( delta <= tol, true, 'returns expected value' );

	// Test ln(4) - should trigger k !== 0 and f === 0.0 path
	v = ln( 4.0 );
	delta = abs( v - 1.3862943611198906 );
	tol = EPS * abs( 1.3862943611198906 );
	t.strictEqual( delta <= tol, true, 'returns expected value' );

	// Test ln(0.5) - should trigger k !== 0 and f === 0.0 path
	v = ln( 0.5 );
	delta = abs( v - (-0.6931471805599453) );
	tol = EPS * abs( -0.6931471805599453 );
	t.strictEqual( delta <= tol, true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the natural logarithm for values very close to 1', function test( t ) {
	var delta;
	var tol;
	var v;

	// Values very close to 1 to trigger the f !== 0.0 but small f case with k === 0
	v = ln( 1.0000001 );
	delta = abs( v - 9.999995000003334e-8 );
	tol = 1e-12;
	t.strictEqual( delta <= tol, true, 'returns expected value' );

	v = ln( 0.9999999 );
	delta = abs( v - (-1.0000005000003334e-7) );
	tol = 1e-12;
	t.strictEqual( delta <= tol, true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the natural logarithm for values very close to powers of 2', function test( t ) {
	var delta;
	var tol;
	var v;

	// Values very close to powers of 2 (but not exactly) to trigger k !== 0 with small f
	v = ln( 2.0 + pow( 2, -21 ) );
	delta = abs( v - 0.693147418978496 );
	tol = 1e-12;
	t.strictEqual( delta <= tol, true, 'returns expected value' );

	v = ln( 2.0 - pow( 2, -21 ) );
	delta = abs( v - 0.6931469421413378 );
	tol = 1e-12;
	t.strictEqual( delta <= tol, true, 'returns expected value' );

	v = ln( 0.5 + pow( 2, -22 ) );
	delta = abs( v - (-0.6931467037229008) );
	tol = 1e-12;
	t.strictEqual( delta <= tol, true, 'returns expected value' );

	t.end();
});
