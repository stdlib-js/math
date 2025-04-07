/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var isnan = require( './../../../../base/assert/is-nan' );
var abs = require( './../../../../base/special/abs' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var tryRequire = require( '@stdlib/utils/try-require' );
var EPS = require( '@stdlib/constants/float64/eps' );


// FIXTURES //

var large = require( './fixtures/cpp/large.json' );
var small = require( './fixtures/cpp/small.json' );


// VARIABLES //

var sqrt1pm1 = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( sqrt1pm1 instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sqrt1pm1, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', opts, function test( t ) {
	var v = sqrt1pm1( NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+infinity` if provided `+infinity`', opts, function test( t ) {
	var v = sqrt1pm1( PINF );
	t.strictEqual( v, PINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `0` if provided `0`', opts, function test( t ) {
	var v = sqrt1pm1( 0.0 );
	t.strictEqual( v, 0.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-1` if provided `-1`', opts, function test( t ) {
	var v = sqrt1pm1( -1.0 );
	t.strictEqual( v, -1.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `x < -1`', opts, function test( t ) {
	var v = sqrt1pm1( -1.5 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	sqrt1pm1( -2.0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	sqrt1pm1( -3.0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function handles large `x` values (|x| > 0.75)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	x = large.x;
	expected = large.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = sqrt1pm1( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = 1.0 * EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. Value: ' + v + '. E: ' + expected[ i ] + '. Δ: ' + delta + '. tol: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function handles small `x` values (|x| <= 0.75)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	x = small.x;
	expected = small.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = sqrt1pm1( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = 390.0 * EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. Value: ' + v + '. E: ' + expected[ i ] + '. Δ: ' + delta + '. tol: ' + tol + '.' );
	}
	t.end();
});
