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
var abs = require( './../../../../base/special/abs' );
var pow = require( './../../../../base/special/pow' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var sincospi = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( sincospi instanceof Error )
};


// FIXTURES //

var integers = require( './fixtures/julia/integers.json' );
var decimals = require( './fixtures/julia/decimals.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sincospi, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided negative infinity, the function returns `[NaN,NaN]`', opts, function test( t ) {
	var y = sincospi( NINF );
	t.strictEqual( isnan( y[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( y[ 1 ] ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided positive infinity, the function returns `[NaN,NaN]`', opts, function test( t ) {
	var y = sincospi( PINF );
	t.strictEqual( isnan( y[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( y[ 1 ] ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `[NaN,NaN]`', opts, function test( t ) {
	var y = sincospi( NaN );
	t.strictEqual( isnan( y[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( y[ 1 ] ), true, 'returns expected value' );
	t.end();
});

tape( 'the function computes sin(πx) and cos(πx) for integer input', opts, function test( t ) {
	var c;
	var s;
	var x;
	var y;
	var i;

	x = integers.x;
	s = integers.sin;
	c = integers.cos;
	for ( i = 0; i < x.length; i++ ) {
		y = sincospi( x[ i ] );
		t.strictEqual( y[ 0 ], s[ i ], 'returns '+s[ i ] );
		t.strictEqual( y[ 1 ], c[ i ], 'returns '+c[ i ] );
	}
	t.end();
});

tape( 'if provided a value exceeding `2**53` (max (unsafe) float64 integer), the function returns [0,1]', opts, function test( t ) {
	var x;
	var y;
	var i;

	x = pow( 2.0, 53 ) + 1.0;
	for ( i = 0; i < 100; i++ ) {
		y = sincospi( x+i );
		t.strictEqual( y[ 0 ], 0.0, 'returns expected value' );
		t.strictEqual( y[ 1 ], 1.0, 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the sin(πx) and cos(πx) for fractional part equal to 1/2', opts, function test( t ) {
	var x;
	var y;
	var i;

	for ( i = -100; i <= 100; i++ ) {
		x = 0.5 + ( 1.0 * i );
		y = sincospi( x );
		t.strictEqual( y[ 0 ], ( (i%2 === 0) ? 1.0 : -1.0 ), 'x: '+x+'. Expected: 0' );
		t.strictEqual( y[ 1 ], 0.0, 'x: '+x+'. Expected: 0' );
	}
	t.end();
});

tape( 'the function computes the sin(πx) and cos(πx) for decimal input', opts, function test( t ) {
	var delta;
	var x;
	var y;
	var i;
	var s;
	var c;

	x = decimals.x;
	s = decimals.sin;
	c = decimals.cos;
	for ( i = 0; i < x.length; i++ ) {
		y = sincospi( x[ i ] );

		if ( y[ 0 ] === s[ i ] ) {
			t.strictEqual( y[ 0 ], s[ i ], 'x: '+x[ i ]+'. Expected: '+s[ i ] );
		} else {
			delta = abs( y[ 0 ] - s[ i ] );
			t.ok( delta <= EPS, 'within tolerance. x: '+x[ i ]+'. Value: '+y[ 0 ]+'. Expected: '+s[ i ]+'. Tolerance: '+EPS+'.' );
		}
		if ( y[ 1 ] === c[ i ] ) {
			t.strictEqual( y[ 1 ], c[ i ], 'x: '+x[ i ]+'. Expected: '+c[ i ] );
		} else {
			delta = abs( y[ 1 ] - c[ i ] );
			t.ok( delta <= EPS, 'within tolerance. x: '+x[ i ]+'. Value: '+y[ 1 ]+'. Expected: '+c[ i ]+'. Tolerance: '+EPS+'.' );
		}
	}
	t.end();
});
