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
var isNegativeZero = require( './../../../../base/assert/is-negative-zerof' );
var isPositiveZero = require( './../../../../base/assert/is-positive-zerof' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var EPS = require( '@stdlib/constants/float32/eps' );
var absf = require( './../../../../base/special/absf' );
var sqrtpif = require( './../lib' );


// FIXTURES //

var hugePositive = require( './fixtures/julia/huge_positive.json' );
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
	t.strictEqual( typeof sqrtpif, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function evaluates the principal square root when `x` is on the interval `[50,500]`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = veryLargePositive.expected;
	x = veryLargePositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = sqrtpif( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = absf( y - expected[i] );
			tol = EPS * absf( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the principal square root when `x` is on the interval `[20,50]`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = largePositive.expected;
	x = largePositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = sqrtpif( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = absf( y - expected[i] );
			tol = EPS * absf( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the principal square root when `x` is on the interval `[3,20]`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = mediumPositive.expected;
	x = mediumPositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = sqrtpif( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = absf( y - expected[i] );
			tol = EPS * absf( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the principal square root when `x` is on the interval `[0.8,3]`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = smallPositive.expected;
	x = smallPositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = sqrtpif( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = absf( y - expected[i] );
			tol = EPS * absf( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates principal square root when `x` is on the interval `[0.0,0.8]`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = smaller.expected;
	x = smaller.x;
	for ( i = 0; i < x.length; i++ ) {
		y = sqrtpif( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = absf( y - expected[i] );
			tol = EPS * absf( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the principal square root when `x` is on the interval `[1e-300,1e-308]`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = tinyPositive.expected;
	x = tinyPositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = sqrtpif( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = absf( y - expected[i] );
			tol = EPS * absf( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the principal square root when `x` is subnormal', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = subnormal.expected;
	x = subnormal.x;
	for ( i = 0; i < x.length; i++ ) {
		y = sqrtpif( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = absf( y - expected[i] );
			tol = EPS * absf( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the principal square root for huge positive numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = hugePositive.expected;
	x = hugePositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = sqrtpif( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = absf( y - expected[i] );
			tol = EPS * absf( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', function test( t ) {
	var v = sqrtpif( NaN );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+infinity` if provided `+infinity`', function test( t ) {
	var v = sqrtpif( PINF );
	t.strictEqual( v, PINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+0` if provided `+0`', function test( t ) {
	var v = sqrtpif( +0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-0` if provided `-0`', function test( t ) {
	var v = sqrtpif( -0.0 );
	t.strictEqual( isNegativeZero( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided a negative number', function test( t ) {
	var v = sqrtpif( -4.0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', function test( t ) {
	var v = sqrtpif( NaN );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided `-infinity`', function test( t ) {
	var v = sqrtpif( NINF );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});
