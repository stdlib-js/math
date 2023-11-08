/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var linspace = require( '@stdlib/array/linspace' );
var EPS = require( '@stdlib/constants/float64/eps' );
var log1p = require( './../../../../base/special/log1p' );
var abs = require( './../../../../base/special/abs' );
var pow = require( './../../../../base/special/pow' );
var ln = require( './../../../../base/special/ln' );
var log1pmx = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof log1pmx, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if input is less than or equal to -1', function test( t ) {
	var values = linspace( -1.0, -50.0, 100 );
	var i;
	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isnan( log1pmx( values[ i ] ) ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes ln(1+x) - x if |x| > 0.95', function test( t ) {
	var values = linspace( 0.951, 100.0, 100 );
	var i;
	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( log1pmx( values[i] ), ln( 1.0 + values[i] ) - values[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns -x*x/2 if |x| < FLOAT_EPS', function test( t ) {
	var values = [ 0.0, EPS / 2.0 ];
	var i;
	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( log1pmx( values[i] ), -pow( values[i], 2 ) / 2.0, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns a Taylor series expansion otherwise', function test( t ) {
	var expected;
	var values;
	var actual;
	var delta;
	var tol;
	var i;

	values = linspace( 0.1, 0.95, 100 );
	for ( i = 0; i < values.length; i++ ) {
		actual = log1pmx( values[ i ] );
		expected = log1p( values[ i ] ) - values[ i ];
		if ( actual === expected[ i ] ) {
			t.strictEqual( actual, expected, 'returns '+expected+' when provided '+values[ i ] );
		} else {
			delta = abs( actual - expected );
			tol = 100.0 * EPS * abs( expected );
			t.ok( delta <= tol, 'within tolerance. x: '+values[ i ]+'. actual: '+actual+'. expected: '+expected+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
