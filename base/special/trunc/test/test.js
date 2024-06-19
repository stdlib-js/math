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
var isNegativeZero = require( './../../../../base/assert/is-negative-zero' );
var isPositiveZero = require( './../../../../base/assert/is-positive-zero' );
var isnan = require( './../../../../base/assert/is-nan' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var trunc = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.true( typeof trunc, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function rounds a numeric value toward 0', function test( t ) {
	t.strictEqual( trunc( -4.2 ), -4.0, 'equals -4' );
	t.strictEqual( trunc( 9.99999 ), 9.0, 'equals 9' );
	t.end();
});

tape( 'if provided `+0`, the function returns `+0`', function test( t ) {
	var v = trunc( 0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'equals +0' );
	t.end();
});

tape( 'if provided `-0`, the function returns `-0`', function test( t ) {
	var v = trunc( -0.0 );
	t.strictEqual( isNegativeZero( v ), true, 'returns -0' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', function test( t ) {
	var v = trunc( NaN );
	t.strictEqual( isnan( v ), true, 'returns NaN' );
	t.end();
});

tape( 'the function returns `+infinity` if provided `+infinity`', function test( t ) {
	var v = trunc( PINF );
	t.strictEqual( v, PINF, 'returns +infinity' );
	t.end();
});

tape( 'the function returns `-infinity` if provided `-infinity`', function test( t ) {
	var v = trunc( NINF );
	t.strictEqual( v, NINF, 'returns -infinity' );
	t.end();
});