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
var isPositiveZero = require( './../../../../base/assert/is-positive-zero' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var randu = require( '@stdlib/random/base/randu' );
var ramp = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ramp, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `0` if `x` is less than `0`', function test( t ) {
	var x;
	var v;
	var i;

	for ( i = 0; i < 1e3; i++ ) {
		x = -( randu()*100.0 ) - EPS;
		v = ramp( x );
		t.equal( isPositiveZero( v ), true, 'returns expected value when provided '+x );
	}
	t.end();
});

tape( 'the function returns `x` if `x` is nonnegative', function test( t ) {
	var x;
	var v;
	var i;

	for ( i = 0; i < 1e3; i++ ) {
		x = randu() * 100.0;
		v = ramp( x );
		t.equal( v, x, 'returns x when provided '+x );
	}
	t.end();
});

tape( 'the function returns `0` if provided `-0`', function test( t ) {
	var v = ramp( -0.0 );
	t.equal( isPositiveZero( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', function test( t ) {
	var v = ramp( NaN );
	t.equal( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `0` if provided `-infinity`', function test( t ) {
	var v = ramp( NINF );
	t.equal( v, 0.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+infinity` if provided `+infinity`', function test( t ) {
	var v = ramp( PINF );
	t.equal( v, PINF, 'returns expected value' );
	t.end();
});
