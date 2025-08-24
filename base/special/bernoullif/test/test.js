/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var bernoullif = require( './../lib' );


// FIXTURES //

var BERNOULLIF = require( './../lib/bernoullif.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof bernoullif, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a negative number, the function returns `NaN`', function test( t ) {
	var v;
	var i;

	t.strictEqual( isnanf( bernoullif( -3.14 ) ), true, 'returns expected value' );

	for ( i = -1; i > -50; i-- ) {
		v = bernoullif( i );
		t.strictEqual( isnanf( v ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'if provided `1`, the function returns `0.5`', function test( t ) {
	var v = bernoullif( 1 );
	t.strictEqual( v, 0.5, 'returns expected value' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', function test( t ) {
	var v = bernoullif( NaN );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided a non-integer, the function returns `NaN`', function test( t ) {
	var v = bernoullif( 3.14 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns the nth Bernoulli number for odd numbers', function test( t ) {
	var v;
	var i;
	for ( i = 3; i < 100; i += 2 ) {
		v = bernoullif( i );

		// Odd Bernoulli numbers are equal to zero:
		t.strictEqual( v, 0.0, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns the nth Bernoulli number for even numbers', function test( t ) {
	var v;
	var i;
	for ( i = 0; i < 66; i += 2 ) {
		v = bernoullif( i );
		t.strictEqual( v, float64ToFloat32( BERNOULLIF[ i / 2 ] ), 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns +/- infinity for large integers', function test( t ) {
	var v;
	var i;
	for ( i = 66; i < 150; i += 2 ) {
		v = bernoullif( i );
		if ( i % 4 === 0 ) {
			t.strictEqual( v, NINF, 'returns expected value' );
		} else {
			t.strictEqual( v, PINF, 'returns expected value' );
		}
	}
	t.end();
});
