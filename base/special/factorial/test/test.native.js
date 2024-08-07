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
var abs = require( './../../../../base/special/abs' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var tryRequire = require( '@stdlib/utils/try-require' );


// FIXTURES //

var integers = require( './fixtures/julia/integers.json' );
var decimals = require( './fixtures/julia/decimals.json' );


// VARIABLES //

var factorial = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( factorial instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factorial, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a negative integer, the function returns `NaN`', opts, function test( t ) {
	var values;
	var v;
	var i;

	values = incrspace( -1.0, -1000.0, -1.0 );
	for ( i = 0; i < values.length; i++ ) {
		v = factorial( values[ i ] );
		t.strictEqual( isnan( v ), true, 'returns expected value when provided ' + values[ i ] );
	}
	t.end();
});

tape( 'if provided negative infinity, the function returns `NaN`', opts, function test( t ) {
	var v = factorial( NINF );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided positive infinity, the function returns `+infinity`', opts, function test( t ) {
	var v = factorial( PINF );
	t.strictEqual( v, PINF, 'returns expected value' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', opts, function test( t ) {
	var v = factorial( NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if `x > 170.6144...`, the function returns positive infinity', opts, function test( t ) {
	var values;
	var v;
	var i;

	values = incrspace( 170.615, 1000.0, 10.1234 );
	for ( i = 0; i < values.length; i++ ) {
		v = factorial( values[ i ] );
		t.strictEqual( v, PINF, 'returns expected value when provided ' + values[ i ] );
	}
	t.end();
});

tape( 'if `x < -171.56749...`, the function returns zero', opts, function test( t ) {
	var values;
	var v;
	var i;

	values = incrspace( -171.57, -1000.0, -10.1234 );
	for ( i = 0; i < values.length; i++ ) {
		v = factorial( values[ i ] );
		t.strictEqual( v, 0.0, 'returns expected value when provided ' + values[ i ] );
	}
	t.end();
});

tape( 'the function evaluates the factorial function (positive integers < 171)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	x = integers.x;
	expected = integers.expected;
	for ( i = 0; i < x.length; i++ ) {
		v = factorial( x[ i ] );
		if ( v === expected[ i ] ) {
			t.strictEqual( v, expected[ i ], 'returns '+expected[i]+' when provided '+x[i] );
		} else {
			delta = abs( v - expected[ i ] );
			tol = EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Tolerance: ' + tol + '. Delta: ' + delta + '.' );
		}
	}
	t.end();
});

tape( 'if provided positive integers greater than `170`, the function returns positive infinity', opts, function test( t ) {
	var i;
	var v;
	for ( i = 171; i < 500; i++ ) {
		v = factorial( i );
		t.strictEqual( v, PINF, 'returns expected value when provided ' + i );
	}
	t.end();
});

tape( 'the function evaluates the factorial function (decimal values)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	x = decimals.x;
	expected = decimals.expected;
	for ( i = 0; i < x.length; i++ ) {
		v = factorial( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = 3.5 * EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Tolerance: ' + tol + '. Delta: ' + delta + '.' );
	}
	t.end();
});
