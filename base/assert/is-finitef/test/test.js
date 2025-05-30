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
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var MAX_FLOAT32 = require( '@stdlib/constants/float32/max' );
var SMALLEST_SUBNORMAL = require( '@stdlib/constants/float32/smallest-subnormal' );
var isfinitef = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isfinitef, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a finite number', function test( t ) {
	var values;
	var i;

	values = [
		3.14,
		-2.0e32,
		MAX_FLOAT32,
		SMALLEST_SUBNORMAL
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isfinitef( values[i] ), true, 'returns expected value when provided '+values[i] );
	}
	for ( i = -100; i < 101; i++ ) {
		t.equal( isfinitef( i ), true, 'returns expected value when provided '+i );
	}
	t.end();
});

tape( 'the function returns `false` if provided `+infinity`', function test( t ) {
	t.equal( isfinitef( PINF ), false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if provided `-infinity`', function test( t ) {
	t.equal( isfinitef( NINF ), false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if provided `NaN`', function test( t ) {
	t.equal( isfinitef( NaN ), false, 'returns expected value' );
	t.equal( isfinitef( 0/0 ), false, 'returns expected value' );
	t.end();
});
