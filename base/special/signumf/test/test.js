/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var isnanf = require( './../../../../base/assert/is-nanf' );
var isNegativeZerof = require( './../../../../base/assert/is-negative-zerof' );
var isPositiveZerof = require( './../../../../base/assert/is-positive-zerof' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var signumf = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof signumf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', function test( t ) {
	var sign = signumf( NaN );
	t.strictEqual( isnanf( sign ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-0` if provided `-0`', function test( t ) {
	var sign = signumf( -0.0 );
	t.strictEqual( isNegativeZerof( sign ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `0` if provided +0', function test( t ) {
	var sign;

	sign = signumf( 0.0 );
	t.strictEqual( isPositiveZerof( sign ), true, 'returns expected value' );

	sign = signumf( +0.0 );
	t.strictEqual( isPositiveZerof( sign ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided a negative number', function test( t ) {
	t.strictEqual( signumf( -10.0 ), -1.0, 'returns expected value' );
	t.strictEqual( signumf( NINF ), -1.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+1` if provided a positive number', function test( t ) {
	t.strictEqual( signumf( 10.0 ), 1.0, 'returns expected value' );
	t.strictEqual( signumf( PINF ), 1.0, 'returns expected value' );
	t.end();
});
