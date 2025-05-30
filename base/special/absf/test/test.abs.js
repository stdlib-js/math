/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var isPositiveZerof = require( './../../../../base/assert/is-positive-zerof' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var absf = require( './../lib/abs.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof absf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the absolute value of a number', function test( t ) {
	t.equal( absf( -2.0 ), 2.0, 'returns expected value' );
	t.equal( absf( 3.0 ), 3.0, 'returns expected value' );
	t.equal( absf( 0.0 ), 0.0, 'returns expected value' );
	t.end();
});

tape( 'the function computes the absolute value of negative zero', function test( t ) {
	t.equal( isPositiveZerof( absf( -0.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function computes the absolute value of infinity', function test( t ) {
	t.equal( absf( PINF ), PINF, 'returns expected value' );
	t.equal( absf( NINF ), PINF, 'returns expected value' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', function test( t ) {
	var v = absf( NaN );
	t.equal( isnanf( v ), true, 'returns expected value' );
	t.end();
});
