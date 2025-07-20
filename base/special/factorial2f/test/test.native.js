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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var absf = require( './../../../../base/special/absf' );
var incrspace = require( '@stdlib/array/base/incrspace' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var EPS = require( '@stdlib/constants/float32/eps' );
var tryRequire = require( '@stdlib/utils/try-require' );


// FIXTURES //

var data = require( './fixtures/python/data.json' );


// VARIABLES //

var factorial2f = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( factorial2f instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factorial2f, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a negative integer, the function returns `NaN`', opts, function test( t ) {
	var values;
	var v;
	var i;

	values = incrspace( -1.0, -1000.0, -25.0 );
	for ( i = 0; i < values.length; i++ ) {
		v = factorial2f( values[ i ] );
		t.strictEqual( isnanf( v ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function evaluates the double factorial', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	x = data.x;
	expected = data.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = factorial2f( x[ i ] );
		if ( v === expected[ i ] ) {
			t.strictEqual( v, expected[ i ], 'returns expected value' );
		} else {
			delta = absf( v - expected[i] );

			// NOTE: We use approximate equality because expected values from SciPy are computed using gamma function approximations instead of iterative single-precision computation.
			tol = 2.4 * EPS * absf( expected[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. v: '+v+'. e: '+expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'if provided data greater than `56`, the function returns positive infinity', opts, function test( t ) {
	var i;
	var v;
	for ( i = 57; i < 100; i++ ) {
		v = factorial2f( i );
		t.strictEqual( v, PINF, 'returns expected value' );
	}
	t.end();
});
