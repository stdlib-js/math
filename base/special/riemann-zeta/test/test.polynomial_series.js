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
var abs = require( './../../../../base/special/abs' );
var linspace = require( '@stdlib/array/base/linspace' );
var EPS = require( '@stdlib/constants/float64/eps' );
var zeta = require( './../lib/polynomial_series.js' );


// FIXTURES //

var data = require( './../lib/odd_positive_integers.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zeta, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function evaluates the Riemann zeta function for odd positive integers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var s;
	var v;
	var i;

	s = linspace( 3.0, 103.0, 51 );
	expected = data;
	for ( i = 0; i < s.length; i++ ) {
		v = zeta( s[i] );
		delta = abs( v - expected[i] );
		tol = EPS * abs( expected[i] );
		t.ok( delta <= tol, 'within tolerance. s: '+s[i]+'. v: '+v+'. E: '+expected[i]+'. Δ: '+delta+'. Tol: '+tol+'.' );
	}
	t.end();
});
