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
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var cosm1f = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( cosm1f instanceof Error )
};


// FIXTURES //

var data = require( './fixtures/python/data.json' );
var positive = require( './fixtures/python/positive.json' );
var negative = require( './fixtures/python/negative.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cosm1f, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the cosine minus one inside the interval [-π/4,π/4]', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = data.x;
	expected = data.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = cosm1f( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}

	t.end();
});

tape( 'the function computes the cosine minus one for `x < -π/4`', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = negative.x;
	expected = negative.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = cosm1f( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}

	t.end();
});

tape( 'the function computes the cosine minus one for `x > π/4`', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = positive.x;
	expected = positive.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = cosm1f( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}

	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', opts, function test( t ) {
	var v = cosm1f( NaN );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `+infinity`', opts, function test( t ) {
	var v = cosm1f( PINF );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `-infinity`', opts, function test( t ) {
	var v = cosm1f( NINF );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});
