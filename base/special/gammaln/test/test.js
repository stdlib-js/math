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
var abs = require( './../../../../base/special/abs' );
var ln = require( './../../../../base/special/ln' );
var pow = require( './../../../../base/special/pow' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var gammaln = require( './../lib' );


// FIXTURES //

var data1 = require( './fixtures/r/data1.json' );
var expected1 = require( './fixtures/r/expected1.json' );
var data2 = require( './fixtures/r/data2.json' );
var expected2 = require( './fixtures/r/expected2.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gammaln, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', function test( t ) {
	var v = gammaln( NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `infinity` when provided `infinity`', function test( t ) {
	var v = gammaln( PINF );
	t.strictEqual( v, PINF, 'returns expected value' );

	v = gammaln( NINF );
	t.strictEqual( v, NINF, 'returns expected value' );

	t.end();
});

tape( 'the function returns `+infinity` when provided `0`', function test( t ) {
	var v = gammaln( 0.0 );
	t.strictEqual( v, PINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+infinity` for x smaller than `-2^52`', function test( t ) {
	var v = gammaln( -pow( 2.0, 53 ) );
	t.strictEqual( v, PINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-ln(x)` for very small x', function test( t ) {
	var x;
	var v;

	x = 2.0e-90;
	v = gammaln( x );
	t.strictEqual( v, -ln( x ), 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the natural logarithm of the gamma function (positive integers)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = data1;
	expected = expected1;

	for ( i = 0; i < x.length; i++ ) {
		y = gammaln( x[ i ] );
		if ( y === expected[ i ] ) {
			t.strictEqual( y, expected[ i ], 'x: '+x[i]+'. Expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 21.2 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the natural logarithm of the gamma function (decimal values)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = data2;
	expected = expected2;

	for ( i = 0; i < x.length; i++ ) {
		y = gammaln( x[ i ] );
		if ( y === expected[ i ] ) {
			t.strictEqual( y, expected[ i ], 'x: '+x[i]+'. Expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.1e4 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the natural logarithm of the gamma function for x > 2^58', function test( t ) {
	var x;
	var v;

	x = pow( 2.0, 59 );
	v = gammaln( x );
	t.strictEqual( v, x * (ln(x)-1.0), 'returns x*(ln(x)-1) for x>2^58' );

	t.end();
});

tape( 'if provided a positive integer, the function returns the natural logarithm of the factorial of (n-1)', function test( t ) {
	t.strictEqual( gammaln( 4.0 ), ln(6.0), 'returns ln(6)' );
	t.strictEqual( gammaln( 5.0 ), ln(24.0), 'returns ln(24)' );
	t.strictEqual( gammaln( 6.0 ), ln(120.0), 'returns ln(120)' );
	t.end();
});

tape( 'returns `+infinity` for `x=-2^51`', function test( t ) {
	var v = gammaln( -pow( 2.0, 51 ) );
	t.strictEqual( v, PINF, 'returns expected value' );
	t.end();
});
