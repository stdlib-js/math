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
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var isNegativeZerof = require( './../../../../base/assert/is-negative-zerof' );
var isPositiveZerof = require( './../../../../base/assert/is-positive-zerof' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var real = require( '@stdlib/complex/float32/real' );
var imag = require( '@stdlib/complex/float32/imag' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var cfloorf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( cfloorf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cfloorf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function rounds real and imaginary components to the largest integer smaller than or equal to a given number', opts, function test( t ) {
	var v;

	v = cfloorf( new Complex64( -4.2, 5.5 ) );
	t.strictEqual( real( v ), -5.0, 'returns expected value' );
	t.strictEqual( imag( v ), 5.0, 'returns expected value' );

	v = cfloorf( new Complex64( 9.99999, 0.1 ) );
	t.strictEqual( real( v ), 9.0, 'returns expected value' );
	t.strictEqual( imag( v ), 0.0, 'returns expected value' );

	v = cfloorf( new Complex64( 0.0, 0.0 ) );
	t.strictEqual( real( v ), 0.0, 'returns expected value' );
	t.strictEqual( imag( v ), 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a `NaN` if provided a `NaN`', opts, function test( t ) {
	var v;

	v = cfloorf( new Complex64( NaN, NaN ) );
	t.strictEqual( isnanf( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( imag( v ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-0` if provided `-0`', opts, function test( t ) {
	var v;

	v = cfloorf( new Complex64( -0.0, -0.0 ) );
	t.strictEqual( isNegativeZerof( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZerof( imag( v ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `+0` if provided `+0`', opts, function test( t ) {
	var v;

	v = cfloorf( new Complex64( +0.0, +0.0 ) );
	t.strictEqual( isPositiveZerof( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZerof( imag( v ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `+infinity` if provided `+infinity`', opts, function test( t ) {
	var v;

	v = cfloorf( new Complex64( PINF, PINF ) );
	t.strictEqual( real( v ), PINF, 'returns expected value' );
	t.strictEqual( imag( v ), PINF, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-infinity` if provided `-infinity`', opts, function test( t ) {
	var v;

	v = cfloorf( new Complex64( NINF, NINF ) );
	t.strictEqual( real( v ), NINF, 'returns expected value' );
	t.strictEqual( imag( v ), NINF, 'returns expected value' );

	t.end();
});
