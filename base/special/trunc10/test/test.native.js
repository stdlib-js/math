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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var isnan = require( './../../../../base/assert/is-nan' );
var isNegativeZero = require( './../../../../base/assert/is-negative-zero' );
var isPositiveZero = require( './../../../../base/assert/is-positive-zero' );
var pow = require( './../../../../base/special/pow' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var trunc10 = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( trunc10 instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof trunc10, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `+0` if provided `+0`', opts, function test( t ) {
	var v;

	v = trunc10( 0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	v = trunc10( +0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-0` if provided `-0`', opts, function test( t ) {
	var v = trunc10( -0.0 );
	t.strictEqual( isNegativeZero( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', opts, function test( t ) {
	var v = trunc10( NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+infinity` if provided `+infinity`', opts, function test( t ) {
	var v = trunc10( PINF );
	t.strictEqual( v, PINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-infinity` if provided `-infinity`', opts, function test( t ) {
	var v = trunc10( NINF );
	t.strictEqual( v, NINF, 'returns expected value' );
	t.end();
});

tape( 'the function supports rounding large values', opts, function test( t ) {
	var x;
	var v;

	x = pow( 10.0, 308 );
	v = trunc10( x + (x/2.0) );
	t.strictEqual( v, x, 'returns expected value' );

	x = pow( 10.0, 308 );
	v = trunc10( x + (x/3.0) );
	t.strictEqual( v, x, 'returns expected value' );

	x = -pow( 10.0, 308 );
	v = trunc10( x + (x/2.0) );
	t.strictEqual( v, x, 'returns expected value' );

	x = -pow( 10.0, 308 );
	v = trunc10( x + (x/3.0) );
	t.strictEqual( v, x, 'returns expected value' );

	t.end();
});

tape( 'the function supports rounding subnormal values', opts, function test( t ) {
	var expected;
	var x;
	var v;

	expected = pow( 10.0, -318 );

	x = pow( 10.0, -318 );
	v = trunc10( x + (x/2.0) );
	t.strictEqual( v, expected, 'returns expected value' );

	x = pow( 10.0, -318 );
	v = trunc10( x + (x/3.0) );
	t.strictEqual( v, expected, 'returns expected value' );

	expected = -pow( 10.0, -318 );

	x = -pow( 10.0, -318 );
	v = trunc10( x + (x/2.0) );
	t.strictEqual( v, expected, 'returns expected value' );

	x = -pow( 10.0, -318 );
	v = trunc10( x + (x/3.0) );
	t.strictEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function may return incorrect results for small subnormals', opts, function test( t ) {
	var x;
	var v;

	x = pow( 10.0, -323 );
	v = trunc10( x );
	t.notEqual( v, x, 'should return input value but does not due to loss in precision' );

	t.end();
});

tape( 'the function rounds a numeric value to the nearest power of 10 toward zero', opts, function test( t ) {
	t.strictEqual( trunc10( -4.2 ), -1.0, 'returns expected value' );
	t.strictEqual( trunc10( -4.5 ), -1.0, 'returns expected value' );
	t.strictEqual( trunc10( -4.8 ), -1.0, 'returns expected value' );
	t.strictEqual( trunc10( 4.2 ), 1.0, 'returns expected value' );
	t.strictEqual( trunc10( 9.99999 ), 1.0, 'returns expected value' );
	t.strictEqual( trunc10( 9.5 ), 1.0, 'returns expected value' );
	t.strictEqual( trunc10( 9.4 ), 1.0, 'returns expected value' );
	t.strictEqual( trunc10( 12.0 ), 10.0, 'returns expected value' );
	t.strictEqual( trunc10( -12.0 ), -10.0, 'returns expected value' );
	t.strictEqual( trunc10( 13.0 ), 10.0, 'returns expected value' );
	t.strictEqual( trunc10( -13.0 ), -10.0, 'returns expected value' );
	t.strictEqual( trunc10( 23.0 ), 10.0, 'returns expected value' );
	t.strictEqual( trunc10( -23.0 ), -10.0, 'returns expected value' );
	t.strictEqual( trunc10( 0.0 ), 0.0, 'returns expected value' );
	t.strictEqual( trunc10( 27.0 ), 10.0, 'returns expected value' );
	t.strictEqual( trunc10( -27.0 ), -10.0, 'returns expected value' );
	t.strictEqual( trunc10( 48.1 ), 10.0, 'returns expected value' );
	t.strictEqual( trunc10( -48.1 ), -10.0, 'returns expected value' );
	t.strictEqual( trunc10( 0.3 ), 0.1, 'returns expected value' );
	t.strictEqual( trunc10( -0.3 ), -0.1, 'returns expected value' );
	t.strictEqual( trunc10( 0.45 ), 0.1, 'returns expected value' );
	t.strictEqual( trunc10( -0.45 ), -0.1, 'returns expected value' );
	t.end();
});
