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
var isnan = require( './../../../../base/assert/is-nan' );
var rempio2 = require( './../../../../base/special/rempio2' );
var kernelSincos = require( './../lib' );


// FIXTURES //

var smallRange = require( './fixtures/julia/small_range.json' );
var largePositive = require( './fixtures/julia/large_positive.json' );
var largeNegative = require( './fixtures/julia/large_negative.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof kernelSincos, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', function test( t ) {
	var v;
	var z;

	z = [ 0.0, 0.0 ];
	v = kernelSincos( NaN, 0.0, z, 1, 0 );
	t.equal( v, z, 'returns output array' );
	t.equal( isnan( v[0] ), true, 'returns expected value' );
	t.equal( isnan( v[1] ), true, 'returns expected value' );
	t.end();
});

tape( 'the function evaluates the sine and cosine for input values on the interval `[-pi/4, pi/4]`', function test( t ) {
	var cosine;
	var sine;
	var x;
	var y;
	var i;
	var z;

	z = [ 0.0, 0.0 ];
	x = smallRange.x;
	sine = smallRange.sine;
	cosine = smallRange.cosine;

	for ( i = 0; i < x.length; i++ ) {
		y = kernelSincos( x[i], 0.0, z, 1, 0 );
		t.equal( y, z, 'returns output array' );
		t.equal( y[0], sine[ i ], 'returns expected value' );
		t.equal( y[1], cosine[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function can be used to compute the sine and cosine for input values outside of `[-pi/4, pi/4]` after argument reduction via `rempio2` (positive)', function test( t ) {
	var cosine;
	var sine;
	var out;
	var z;
	var x;
	var y;
	var n;
	var i;

	z = [ 0.0, 0.0 ];
	y = [ 0.0, 0.0 ];
	x = largePositive.x;
	sine = largePositive.sine;
	cosine = largePositive.cosine;
	for ( i = 0; i < x.length; i++ ) {
		n = rempio2( x[ i ], y );
		switch ( n & 3 ) {
		case 0:
			out = kernelSincos( y[ 0 ], y[ 1 ], z, 1, 0 );
			t.equal( out, z, 'returns output array' );
			t.equal( out[ 0 ], sine[ i ], 'returns expected value' );
			t.equal( out[ 1 ], cosine[ i ], 'returns expected value' );
			break;
		case 2:
			out = kernelSincos( y[ 0 ], y[ 1 ], z, 1, 0 );
			t.equal( out, z, 'returns output array' );
			t.equal( -out[ 0 ], sine[ i ], 'returns expected value' );
			t.equal( -out[ 1 ], cosine[ i ], 'returns expected value' );
			break;
		default:
			break;
		}
	}
	t.end();
});

tape( 'the function can be used to compute the sine and cosine for input values outside of `[-pi/4, pi/4]` after argument reduction via `rempio2` (negative)', function test( t ) {
	var cosine;
	var sine;
	var out;
	var z;
	var x;
	var y;
	var n;
	var i;

	z = [ 0.0, 0.0 ];
	y = [ 0.0, 0.0 ];
	x = largeNegative.x;
	sine = largeNegative.sine;
	cosine = largeNegative.cosine;
	for ( i = 0; i < x.length; i++ ) {
		n = rempio2( x[ i ], y );
		switch ( n & 3 ) {
		case 0:
			out = kernelSincos( y[ 0 ], y[ 1 ], z, 1, 0 );
			t.equal( out, z, 'returns output array' );
			t.equal( out[ 0 ], sine[ i ], 'returns expected value' );
			t.equal( out[ 1 ], cosine[ i ], 'returns expected value' );
			break;
		case 2:
			out = kernelSincos( y[ 0 ], y[ 1 ], z, 1, 0 );
			t.equal( out, z, 'returns output array' );
			t.equal( -out[ 0 ], sine[ i ], 'returns expected value' );
			t.equal( -out[ 1 ], cosine[ i ], 'returns expected value' );
			break;
		default:
			break;
		}
	}
	t.end();
});
