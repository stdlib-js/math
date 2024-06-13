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
var isnan = require( './../../../../base/assert/is-nan' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/real' );
var imag = require( '@stdlib/complex/imag' );
var cmul = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cmul, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function multiplies two complex numbers', function test( t ) {
	var z1;
	var z2;
	var v;

	z1 = new Complex128( 5.0, 3.0 );
	z2 = new Complex128( -2.0, 1.0 );

	v = cmul( z1, z2 );

	t.strictEqual( real( v ), -13.0, 'returns expected value' );
	t.strictEqual( imag( v ), -1.0, 'returns expected value' );

	t.end();
});

tape( 'if a real or imaginary component is `NaN`, all components are `NaN`', function test( t ) {
	var z1;
	var z2;
	var v;

	z1 = new Complex128( NaN, 3.0 );
	z2 = new Complex128( -2.0, 1.0 );

	v = cmul( z1, z2 );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );

	z1 = new Complex128( 5.0, 3.0 );
	z2 = new Complex128( NaN, 1.0 );

	v = cmul( z1, z2 );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );

	z1 = new Complex128( NaN, 3.0 );
	z2 = new Complex128( NaN, 1.0 );

	v = cmul( z1, z2 );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );

	z1 = new Complex128( 5.0, NaN );
	z2 = new Complex128( -2.0, 1.0 );

	v = cmul( z1, z2 );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );

	z1 = new Complex128( 5.0, 3.0 );
	z2 = new Complex128( -2.0, NaN );

	v = cmul( z1, z2 );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );

	z1 = new Complex128( 5.0, NaN );
	z2 = new Complex128( -2.0, NaN );

	v = cmul( z1, z2 );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );

	z1 = new Complex128( NaN, NaN );
	z2 = new Complex128( NaN, NaN );

	v = cmul( z1, z2 );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );

	t.end();
});
