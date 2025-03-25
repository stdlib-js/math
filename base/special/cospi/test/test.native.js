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
var incrspace = require( '@stdlib/array/base/incrspace' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( './../../../../base/special/abs' );
var pow = require( './../../../../base/special/pow' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var cospi = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( cospi instanceof Error )
};


// FIXTURES //

var integers = require( './fixtures/julia/integers.json' );
var decimals = require( './fixtures/julia/decimals.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cospi, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided either positive or negative infinity', opts, function test( t ) {
	var y;

	y = cospi( PINF );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = cospi( NINF );
	t.equal( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', opts, function test( t ) {
	var y = cospi( NaN );
	t.equal( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided an integer, the function returns `+-1.0`', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = integers.x;
	expected = integers.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = cospi( x[i] );
		t.equal( y, expected[ i ], 'returns '+expected[i] );
	}
	t.end();
});

tape( 'if provided a value exceeding `2**53` (max (unsafe) float64 integer), the function always returns `+1.0`', opts, function test( t ) {
	var x;
	var y;
	var i;

	x = pow( 2.0, 53 ) + 1.0;
	for ( i = 0; i < 100; i++ ) {
		y = cospi( x+i );
		t.equal( y, 1.0, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns `0` for any value with fractional part equal to 1/2', opts, function test( t ) {
	var x;
	var y;
	var i;

	x = incrspace( 0.5, 100.5, 1.0 );
	for ( i = 0; i < x.length; i++ ) {
		y = cospi( x[i] );
		t.equal( y, 0.0, 'x: '+x[i]+'. E: 0' );
	}
	t.end();
});

tape( 'the function computes `cos(πx)`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = decimals.x;
	expected = decimals.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = cospi( x[i] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'x: '+x[i]+'. E: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 1.0 * EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});
