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
var isnanf = require( './../../../../base/assert/is-nanf' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var rempio2f = require( './../../../../base/special/rempio2f' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var kernelCosf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( kernelCosf instanceof Error )
};


// FIXTURES //

var smallRange = require( './fixtures/julia/small_range.json' );
var largePositive = require( './fixtures/julia/large_positive.json' );
var largeNegative = require( './fixtures/julia/large_negative.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof kernelCosf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', opts, function test( t ) {
	var v = kernelCosf( NaN );
	t.equal( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function evaluates the cosine for input values on the interval `[-pi/4, pi/4]`', opts, function test( t ) {
	var expected;
	var values;
	var out;
	var x;
	var i;

	values = smallRange.x;
	expected = smallRange.expected;
	for ( i = 0; i < values.length; i++ ) {
		x = f32( values[ i ] );
		expected[ i ] = f32( expected[ i ] );
		out = kernelCosf( x );
		t.strictEqual( out, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function can be used to compute the cosine for input values outside of `[-pi/4, pi/4]` after argument reduction via `rempio2f` (positive)', opts, function test( t ) {
	var expected;
	var values;
	var out;
	var x;
	var y;
	var n;
	var i;

	values = largePositive.x;
	expected = largePositive.expected;
	y = [ 0.0 ];
	for ( i = 0; i < values.length; i++ ) {
		x = f32( values[ i ] );
		expected[ i ] = f32( expected[ i ] );
		n = rempio2f( x, y );
		switch ( n & 3 ) {
		case 0:
			out = kernelCosf( y[ 0 ] );
			t.strictEqual( out, expected[ i ], 'returns expected value' );
			break;
		case 2:
			out = -kernelCosf( y[ 0 ] );
			t.strictEqual( out, expected[ i ], 'returns expected value' );
			break;
		default:
			break;
		}
	}
	t.end();
});

tape( 'the function can be used to compute the cosine for input values outside of `[-pi/4, pi/4]` after argument reduction via `rempio2f` (negative)', opts, function test( t ) {
	var expected;
	var values;
	var out;
	var x;
	var y;
	var n;
	var i;

	values = largeNegative.x;
	expected = largeNegative.expected;
	y = [ 0.0 ];
	for ( i = 0; i < values.length; i++ ) {
		x = f32( values[ i ] );
		expected[ i ] = f32( expected[ i ] );
		n = rempio2f( x, y );
		switch ( n & 3 ) {
		case 0:
			out = kernelCosf( y[ 0 ] );
			t.strictEqual( out, expected[ i ], 'returns expected value' );
			break;
		case 2:
			out = -kernelCosf( y[ 0 ] );
			t.strictEqual( out, expected[ i ], 'returns expected value' );
			break;
		default:
			break;
		}
	}
	t.end();
});
