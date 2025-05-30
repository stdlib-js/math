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
var isnan = require( './../../../../base/assert/is-nan' );
var fmod = require( './../lib' );


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
	t.strictEqual( typeof fmod, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function evaluates the modulus function (subnormal results)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = subnormalResults.x;
	y = subnormalResults.y;
	expected = subnormalResults.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = fmod( x[ i ], y[ i ] );
		t.strictEqual( actual, expected[ i ], 'fmod('+x[ i ]+','+y[ i ]+') returns '+expected[ i ] );
	}
	t.end();
});

tape( 'the function evaluates the modulus function (small `x`, large `y`)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = smallLarge.x;
	y = smallLarge.y;
	expected = smallLarge.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = fmod( x[ i ], y[ i ] );
		t.strictEqual( actual, expected[ i ], 'fmod('+x[ i ]+','+y[ i ]+') returns '+expected[ i ] );
	}
	t.end();
});

tape( 'the function evaluates the modulus function (large `x`, small `y`)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = largeSmall.x;
	y = largeSmall.y;
	expected = largeSmall.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = fmod( x[ i ], y[ i ] );
		t.strictEqual( actual, expected[ i ], 'fmod('+x[ i ]+','+y[ i ]+') returns '+expected[ i ] );
	}
	t.end();
});

tape( 'the function evaluates the modulus function (small `x`, small `y`)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = smallSmall.x;
	y = smallSmall.y;
	expected = smallSmall.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = fmod( x[ i ], y[ i ] );
		t.strictEqual( actual, expected[ i ], 'fmod('+x[ i ]+','+y[ i ]+') returns '+expected[ i ] );
	}
	t.end();
});

tape( 'the function evaluates the modulus function (positive `x`, negative `y`)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = positiveNegative.x;
	y = positiveNegative.y;
	expected = positiveNegative.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = fmod( x[ i ], y[ i ] );
		t.strictEqual( actual, expected[ i ], 'fmod('+x[ i ]+','+y[ i ]+') returns '+expected[ i ] );
	}
	t.end();
});

tape( 'the function evaluates the modulus function (negative `x`, positive `y`)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = negativePositive.x;
	y = negativePositive.y;
	expected = negativePositive.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = fmod( x[ i ], y[ i ] );
		t.strictEqual( actual, expected[ i ], 'fmod('+x[ i ]+','+y[ i ]+') returns '+expected[ i ] );
	}
	t.end();
});

tape( 'the function evaluates the modulus function (negative `x`, negative `y`)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = negativeNegative.x;
	y = negativeNegative.y;
	expected = negativeNegative.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = fmod( x[ i ], y[ i ] );
		t.strictEqual( actual, expected[ i ], 'fmod('+x[ i ]+','+y[ i ]+') returns '+expected[ i ] );
	}
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN` for `y`', function test( t ) {
	var v;

	v = fmod( -3.0, NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = fmod( 0.0, NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `NaN` if provided `NaN` for `x`', function test( t ) {
	var v;

	v = fmod( NaN, 5.0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = fmod( NaN, 1.0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = fmod( NaN, 0.0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});
