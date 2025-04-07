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
var rempio2 = require( './../../../../base/special/rempio2' );
var kernelSin = require( './../lib' );


// FIXTURES //

var smallRange = require( './fixtures/julia/small_range.json' );
var largePositive = require( './fixtures/julia/large_positive.json' );
var largeNegative = require( './fixtures/julia/large_negative.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof kernelSin, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN` for either parameter', function test( t ) {
	var v = kernelSin( NaN, 0.0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = kernelSin( 4.0, NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = kernelSin( NaN, NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function evaluates the sine for input values on the interval `[-pi/4, pi/4]`', function test( t ) {
	var expected;
	var values;
	var out;
	var x;
	var i;

	values = smallRange.x;
	expected = smallRange.expected;
	for ( i = 0; i < values.length; i++ ) {
		x = values[ i ];
		out = kernelSin( x, 0.0 );
		t.strictEqual( out, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function can be used to compute the sine for input values outside of `[-pi/4, pi/4]` after argument reduction via `rempio2` (positive)', function test( t ) {
	var expected;
	var values;
	var out;
	var x;
	var y;
	var n;
	var i;

	values = largePositive.x;
	expected = largePositive.expected;
	y = [ 0.0, 0.0 ];
	for ( i = 0; i < values.length; i++ ) {
		x = values[ i ];
		n = rempio2( x, y );
		switch ( n & 3 ) {
		case 0:
			out = kernelSin( y[ 0 ], y[ 1 ] );
			t.strictEqual( out, expected[ i ], 'returns expected value' );
			break;
		case 2:
			out = -kernelSin( y[ 0 ], y[ 1 ] );
			t.strictEqual( out, expected[ i ], 'returns expected value' );
			break;
		default:
			break;
		}
	}
	t.end();
});

tape( 'the function can be used to compute the sine for input values outside of `[-pi/4, pi/4]` after argument reduction via `rempio2` (negative)', function test( t ) {
	var expected;
	var values;
	var out;
	var x;
	var y;
	var n;
	var i;

	values = largeNegative.x;
	expected = largeNegative.expected;
	y = [ 0.0, 0.0 ];
	for ( i = 0; i < values.length; i++ ) {
		x = values[ i ];
		n = rempio2( x, y );
		switch ( n & 3 ) {
		case 0:
			out = kernelSin( y[ 0 ], y[ 1 ] );
			t.strictEqual( out, expected[ i ], 'returns expected value' );
			break;
		case 2:
			out = -kernelSin( y[ 0 ], y[ 1 ] );
			t.strictEqual( out, expected[ i ], 'returns expected value' );
			break;
		default:
			break;
		}
	}
	t.end();
});
