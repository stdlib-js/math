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
var ulpdiff = require( '@stdlib/number/float32/base/ulp-difference' );
var rempio2f = require( './../../../../base/special/rempio2f' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var kernelSincosf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( kernelSincosf instanceof Error )
};


// FIXTURES //

var smallRange = require( './fixtures/julia/small_range.json' );
var largePositive = require( './fixtures/julia/large_positive.json' );
var largeNegative = require( './fixtures/julia/large_negative.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof kernelSincosf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', opts, function test( t ) {
	var v;

	v = kernelSincosf( NaN );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );
	t.end();
});

tape( 'the function evaluates the sine and cosine for input values on the interval `[-pi/4, pi/4]`', opts, function test( t ) {
	var cosine;
	var sine;
	var x;
	var y;
	var i;

	x = smallRange.x;
	sine = smallRange.sine;
	cosine = smallRange.cosine;

	for ( i = 0; i < x.length; i++ ) {
		y = kernelSincosf( x[ i ] );
		sine[ i ] = f32( sine[ i ] );
		cosine[ i ] = f32( cosine[ i ] );
		t.strictEqual( ulpdiff( y[ 0 ], sine[ i ] ) <= 1, true, 'returns expected value' );
		t.strictEqual( ulpdiff( y[ 1 ], cosine[ i ] ) <= 1, true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function can be used to compute the sine and cosine for input values outside of `[-pi/4, pi/4]` after argument reduction via `rempio2f` (positive)', opts, function test( t ) {
	var cosine;
	var sine;
	var out;
	var x;
	var y;
	var n;
	var i;

	y = [ 0.0 ];
	x = largePositive.x;
	sine = largePositive.sine;
	cosine = largePositive.cosine;
	for ( i = 0; i < x.length; i++ ) {
		n = rempio2f( x[ i ], y );
		sine[ i ] = f32( sine[ i ] );
		cosine[ i ] = f32( cosine[ i ] );
		switch ( n & 3 ) {
		case 0:
			out = kernelSincosf( y[ 0 ] );
			t.strictEqual( out[ 0 ], sine[ i ], 'returns expected value' );
			t.strictEqual( out[ 1 ], cosine[ i ], 'returns expected value' );
			break;
		case 1:
			out = kernelSincosf( y[ 0 ] );
			out = [ out[ 1 ], -out[ 0 ] ];
			t.strictEqual( out[ 0 ], sine[ i ], 'returns expected value' );
			t.strictEqual( out[ 1 ], cosine[ i ], 'returns expected value' );
			break;
		case 2:
			out = kernelSincosf( y[ 0 ] );
			out = [ -out[ 0 ], -out[ 1 ] ];
			t.strictEqual( out[ 0 ], sine[ i ], 'returns expected value' );
			t.strictEqual( out[ 1 ], cosine[ i ], 'returns expected value' );
			break;
		case 3:
			out = kernelSincosf( y[ 0 ] );
			out = [ -out[ 1 ], out[ 0 ] ];
			t.strictEqual( out[ 0 ], sine[ i ], 'returns expected value' );
			t.strictEqual( out[ 1 ], cosine[ i ], 'returns expected value' );
			break;
		default:
			break;
		}
	}
	t.end();
});

tape( 'the function can be used to compute the sine and cosine for input values outside of `[-pi/4, pi/4]` after argument reduction via `rempio2f` (negative)', opts, function test( t ) {
	var cosine;
	var sine;
	var out;
	var x;
	var y;
	var n;
	var i;

	y = [ 0.0 ];
	x = largeNegative.x;
	sine = largeNegative.sine;
	cosine = largeNegative.cosine;
	for ( i = 0; i < x.length; i++ ) {
		n = rempio2f( x[ i ], y );
		sine[ i ] = f32( sine[ i ] );
		cosine[ i ] = f32( cosine[ i ] );
		switch ( n & 3 ) {
		case 0:
			out = kernelSincosf( y[ 0 ] );
			t.strictEqual( out[ 0 ], sine[ i ], 'returns expected value' );
			t.strictEqual( out[ 1 ], cosine[ i ], 'returns expected value' );
			break;
		case 1:
			out = kernelSincosf( y[ 0 ] );
			out = [ out[ 1 ], -out[ 0 ] ];
			t.strictEqual( out[ 0 ], sine[ i ], 'returns expected value' );
			t.strictEqual( out[ 1 ], cosine[ i ], 'returns expected value' );
			break;
		case 2:
			out = kernelSincosf( y[ 0 ] );
			out = [ -out[ 0 ], -out[ 1 ] ];
			t.strictEqual( out[ 0 ], sine[ i ], 'returns expected value' );
			t.strictEqual( out[ 1 ], cosine[ i ], 'returns expected value' );
			break;
		case 3:
			out = kernelSincosf( y[ 0 ] );
			out = [ -out[ 1 ], out[ 0 ] ];
			t.strictEqual( out[ 0 ], sine[ i ], 'returns expected value' );
			t.strictEqual( out[ 1 ], cosine[ i ], 'returns expected value' );
			break;
		default:
			break;
		}
	}
	t.end();
});
