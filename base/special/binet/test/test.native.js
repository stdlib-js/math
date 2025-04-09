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
var isnan = require( './../../../../base/assert/is-nan' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var fibonacci = require( './../../../../base/special/fibonacci' );
var negaFibonacci = require( './../../../../base/special/negafibonacci' );
var abs = require( './../../../../base/special/abs' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var binet = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( binet instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof binet, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', opts, function test( t ) {
	var v = binet( NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value when provided a NaN' );
	t.end();
});

tape( 'if provided `+infinity`, the function returns `NaN`', opts, function test( t ) {
	var v = binet( PINF );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `-infinity`, the function returns `NaN`', opts, function test( t ) {
	var v = binet( NINF );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'for nonnegative integers, the function approximates the nth Fibonacci number', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var v;
	var i;
	for ( i = 0; i < 79; i++ ) {
		v = binet( i );
		expected = fibonacci( i );
		if ( v === expected ) {
			t.strictEqual( v, expected, 'returns the '+i+'th Fibonacci number' );
		} else {
			delta = abs( v - expected );
			tol = 13.0 * EPS * abs( expected );
			t.strictEqual( delta <= tol, true, 'returns approximation. n: '+i+'. expected: '+expected+'. actual: '+v+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'for nonpositive integers, the function approximates the nth negaFibonacci number', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var v;
	var i;
	for ( i = 0; i > -79; i-- ) {
		v = binet( i );
		expected = negaFibonacci( i );
		if ( v === expected ) {
			t.strictEqual( v, expected, 'returns the '+i+'th negaFibonacci number' );
		} else {
			delta = abs( v - expected );
			tol = 12.0 * EPS * abs( expected );
			t.strictEqual( delta <= tol, true, 'returns approximation. n: '+i+'. expected: '+expected+'. actual: '+v+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
