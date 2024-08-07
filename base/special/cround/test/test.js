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
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var isnan = require( './../../../../base/assert/is-nan' );
var isNegativeZero = require( './../../../../base/assert/is-negative-zero' );
var isPositiveZero = require( './../../../../base/assert/is-positive-zero' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var cround = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cround, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function rounds real and imaginary components to the nearest integer', function test( t ) {
	var v;

	v = cround( new Complex128( -4.2, 5.5 ) );
	t.strictEqual( real( v ), -4.0, 'returns expected value' );
	t.strictEqual( imag( v ), 6.0, 'returns expected value' );

	v = cround( new Complex128( 9.99999, 0.1 ) );
	t.strictEqual( real( v ), 10.0, 'returns expected value' );
	t.strictEqual( imag( v ), 0.0, 'returns expected value' );

	v = cround( new Complex128( 0.0, 0.0 ) );
	t.strictEqual( real( v ), 0.0, 'returns expected value' );
	t.strictEqual( imag( v ), 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a `NaN` if provided a `NaN`', function test( t ) {
	var v;

	v = cround( new Complex128( NaN, NaN ) );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-0` if provided `-0`', function test( t ) {
	var v;

	v = cround( new Complex128( -0.0, -0.0 ) );
	t.strictEqual( isNegativeZero( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZero( imag( v ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+0` if provided `+0`', function test( t ) {
	var v;

	v = cround( new Complex128( +0.0, +0.0 ) );
	t.strictEqual( isPositiveZero( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( imag( v ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+infinity` if provided `+infinity`', function test( t ) {
	var v;

	v = cround( new Complex128( PINF, PINF ) );
	t.strictEqual( real( v ), PINF, 'returns expected value' );
	t.strictEqual( imag( v ), PINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-infinity` if provided `-infinity`', function test( t ) {
	var v;

	v = cround( new Complex128( NINF, NINF ) );
	t.strictEqual( real( v ), NINF, 'returns expected value' );
	t.strictEqual( imag( v ), NINF, 'returns expected value' );
	t.end();
});
