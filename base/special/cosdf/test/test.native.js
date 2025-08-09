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
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var cosdf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( cosdf instanceof Error )
};


// FIXTURES //

var negative = require( './fixtures/julia/negative.json' );
var positive = require( './fixtures/julia/positive.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.true( typeof cosdf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a `NaN`, the function returns `NaN`', opts, function test( t ) {
	var v = cosdf( NaN );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function computes the cosine of an angle measured in degrees (negative values)', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = negative.x;
	expected = negative.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = cosdf( x[ i ] );
		t.strictEqual( ulpdiff( y, expected[ i ] ) <= 1, true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the cosine of an angle measured in degrees (positive values)', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = positive.x;
	expected = positive.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = cosdf( x[ i ] );
		t.strictEqual( ulpdiff( y, expected[ i ] ) <= 1, true, 'returns expected value' );
	}
	t.end();
});

tape( 'if provided `+infinity`, the function returns `NaN`', opts, function test( t ) {
	var v = cosdf( PINF );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `-infinity`, the function returns `NaN`', opts, function test( t ) {
	var v = cosdf( NINF );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `90.0`, the function returns `0.0`', opts, function test( t ) {
	var v = cosdf( f32( 90.0 ) );
	t.strictEqual( v, f32( 0.0 ), 'returns expected value' );
	t.end();
});

tape( 'the function returns `1` if provided `+-0`', opts, function test( t ) {
	var v;

	v = cosdf( f32( -0.0 ) );
	t.strictEqual( v, f32( 1.0 ), 'returns expected value' );

	v = cosdf( f32( +0.0 ) );
	t.strictEqual( v, f32( 1.0 ), 'returns expected value' );

	t.end();
});
