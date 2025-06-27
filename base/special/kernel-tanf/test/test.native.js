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
var rempio2f = require( './../../../../base/special/rempio2f' );
var absf = require( './../../../../base/special/absf' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var isNegativeZerof = require( './../../../../base/assert/is-negative-zerof' );
var isPositiveZerof = require( './../../../../base/assert/is-positive-zerof' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var EPS = require( '@stdlib/constants/float32/eps' );
var tryRequire = require( '@stdlib/utils/try-require' );


// FIXTURES //

var smallRange = require( './fixtures/julia/small_range.json' );
var largePositive = require( './fixtures/julia/large_positive.json' );
var largeNegative = require( './fixtures/julia/large_negative.json' );


// VARIABLES //

var kernelTanf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( kernelTanf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof kernelTanf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN` for `x`', opts, function test( t ) {
	var v = kernelTanf( NaN, 1 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = kernelTanf( NaN, -1 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function correctly handles `+0.0`', opts, function test( t ) {
	var v = kernelTanf( 0.0, 1 );
	t.strictEqual( isPositiveZerof( v ), true, 'returns expected value' );

	v = kernelTanf( 0.0, -1 );
	t.strictEqual( v, NINF, 'returns expected value' );

	t.end();
});

tape( 'the function correctly handles `+0.0`', opts, function test( t ) {
	var v = kernelTanf( -0.0, 1 );
	t.strictEqual( isNegativeZerof( v ), true, 'returns expected value' );

	v = kernelTanf( -0.0, -1 );
	t.strictEqual( v, PINF, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the tangent for input values inside of `[-pi/4, pi/4]`', opts, function test( t ) {
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
		out = kernelTanf( x, 1 );
		t.strictEqual( out, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function can be used to compute the tangent for input values outside of `[-pi/4, pi/4]` after argument reduction via `rempio2f` (positive)', opts, function test( t ) {
	var expected;
	var values;
	var delta;
	var tol;
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
		out = kernelTanf( y[ 0 ], 1 - ( (n&1)<<1 ) );
		if ( out === expected[ i ] ) {
			t.strictEqual( out, expected[ i ], 'returns expected value' );
		} else {
			delta = absf( out - expected[ i ] );
			tol = EPS * absf( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x+'. out: '+out+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function can be used to compute the tangent for input values outside of `[-pi/4, pi/4]` after argument reduction via `rempio2f` (negative)', opts, function test( t ) {
	var expected;
	var values;
	var delta;
	var tol;
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
		out = kernelTanf( y[ 0 ], 1 - ( (n&1)<<1 ) );
		if ( out === expected[ i ] ) {
			t.strictEqual( out, expected[ i ], 'returns expected value' );
		} else {
			delta = absf( out - expected[ i ] );
			tol = EPS * absf( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x+'. out: '+out+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});
