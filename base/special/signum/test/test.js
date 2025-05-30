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
var isNegativeZero = require( './../../../../base/assert/is-negative-zero' );
var isPositiveZero = require( './../../../../base/assert/is-positive-zero' );
var PI = require( '@stdlib/constants/float64/pi' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var signum = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof signum, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', function test( t ) {
	var sign = signum( NaN );
	t.strictEqual( isnan( sign ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-0` if provided `-0`', function test( t ) {
	var sign = signum( -0.0 );
	t.strictEqual( isNegativeZero( sign ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `0` if provided +0', function test( t ) {
	var sign;

	sign = signum( 0.0 );
	t.strictEqual( isPositiveZero( sign ), true, 'returns expected value' );

	sign = signum( +0.0 );
	t.strictEqual( isPositiveZero( sign ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided a negative number', function test( t ) {
	t.strictEqual( signum( -10.0 ), -1.0, 'returns expected value' );
	t.strictEqual( signum( -PI ), -1.0, 'returns expected value' );
	t.strictEqual( signum( NINF ), -1.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+1` if provided a positive number', function test( t ) {
	t.strictEqual( signum( 10.0 ), 1.0, 'returns expected value' );
	t.strictEqual( signum( PI ), 1.0, 'returns expected value' );
	t.strictEqual( signum( PINF ), 1.0, 'returns expected value' );
	t.end();
});
