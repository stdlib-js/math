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
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var PI = require( '@stdlib/constants/float64/pi' );
var EPS = require( '@stdlib/constants/float64/eps' );
var isnan = require( './../../../../base/assert/is-nan' );
var abs = require( './../../../../base/special/abs' );
var rad2deg = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof rad2deg, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `+infinity`, the function returns `+infinity`', function test( t ) {
	var r = rad2deg( PINF );
	t.equal( r, PINF, 'returns +infinity' );
	t.end();
});

tape( 'if provided `-infinity`, the function returns `-infinity`', function test( t ) {
	var r = rad2deg( NINF );
	t.equal( r, NINF, 'returns -infinity' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', function test( t ) {
	var r = rad2deg( NaN );
	t.equal( isnan( r ), true, 'returns NaN' );
	t.end();
});

tape( 'the function converts an angle from radians to degrees', function test( t ) {
	var expected;
	var x;
	var r;
	var i;

	x = data.x;
	expected = data.expected;

	for ( i = 0; i < x.length; i++ ) {
		r = rad2deg( x[i] );
		t.equal( r, expected[i], 'x: '+x[i]+'. r: '+r+'. expected: '+expected[i]+'.' );
	}
	t.end();
});

tape( 'the function converts an angle from radians to degrees (canonical values)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var er;
	var x;
	var r;
	var i;

	x = [
		PI/6.0,
		PI/4.0,
		PI/3.0,
		PI/2.0,
		2.0*PI/3.0,
		3.0*PI/4.0,
		5.0*PI/6.0,
		PI,
		7.0*PI/6.0,
		5.0*PI/4.0,
		4.0*PI/3.0,
		3.0*PI/2.0,
		5.0*PI/3.0,
		7.0*PI/4.0,
		11.0*PI/6.0,
		2*PI
	];

	expected = [
		30.0,
		45.0,
		60.0,
		90.0,
		120.0,
		135.0,
		150.0,
		180.0,
		210.0,
		225.0,
		240.0,
		270.0,
		300.0,
		315.0,
		330.0,
		360.0
	];
	for ( i = 0; i < x.length; i++ ) {
		r = rad2deg( x[i] );
		er = expected[ i ];
		if ( r === er ) {
			t.equal( r, er, 'x: '+x[i]+'. r: '+r+'. expected: '+er+'.' );
		} else {
			delta = abs( r - er );
			tol = abs( EPS * er );
			t.equal( delta <= tol, true, 'x: '+x[i]+'. r: '+r+'. expected: '+er+'. delta: '+delta+'. tol: '+ tol+'.' );
		}
		// Negative `x`:
		r = rad2deg( -x[i] );
		er = -expected[ i ];
		if ( r === er ) {
			t.equal( r, er, 'x: '+x[i]+'. r: '+r+'. expected: '+er+'.' );
		} else {
			delta = abs( r - er );
			tol = abs( EPS * er );
			t.equal( delta <= tol, true, 'x: '+x[i]+'. r: '+r+'. expected: '+er+'. delta: '+delta+'. tol: '+ tol+'.' );
		}
	}
	t.end();
});

tape( 'if provided a value greater than `~3.14e+306`, the function will underflow', function test( t ) {
	var r = rad2deg( 3.14e+306 );
	t.equal( r, PINF, 'returns +infinity' );
	t.end();
});
