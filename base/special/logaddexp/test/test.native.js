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
var randu = require( '@stdlib/random/base/randu' );
var tryRequire = require( '@stdlib/utils/try-require' );
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( './../../../../base/special/abs' );


// FIXTURES //

var data = require( './fixtures/python/data.json' );


// VARIABLES //

var logaddexp = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( logaddexp instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof logaddexp, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', opts, function test( t ) {
	var v;

	v = logaddexp( NaN, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = logaddexp( 1, NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = logaddexp( NaN, NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `+infinity` if provided `+infinity`', opts, function test( t ) {
	var x;
	var v;
	var i;

	for ( i = 0; i < 1e2; i++ ) {
		x = ( randu()*200.0 ) - 100.0;

		v = logaddexp( PINF, x );
		t.strictEqual( v, PINF, 'returns expected value when provided +infinity and '+x );

		v = logaddexp( x, PINF );
		t.strictEqual( v, PINF, 'returns expected value when provided +infinity and '+x );
	}
	t.end();
});

tape( 'the function returns `x` if provided `-infinity` and `x`', opts, function test( t ) {
	var x;
	var v;
	var i;

	for ( i = 0; i < 1e2; i++ ) {
		x = ( randu()*200.0 ) - 100.0;

		v = logaddexp( NINF, x );
		t.strictEqual( v, x, 'returns expected value when provided -infinity and '+x );

		v = logaddexp( x, NINF );
		t.strictEqual( v, x, 'returns expected value when provided '+x+' and -infinity' );
	}
	v = logaddexp( PINF, NINF );
	t.strictEqual( v, PINF, 'returns expected value when provided -infinity and +infinity' );

	t.end();
});

tape( 'the function returns `-infinity` if both arguments are `-infinity`', opts, function test( t ) {
	var v = logaddexp( NINF, NINF );
	t.strictEqual( v, NINF, 'returns expected value' );
	t.end();
});

tape( 'the function accurately computes the natural logarithm of exp(x) + exp(y)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var v;
	var i;

	x = data.x;
	y = data.y;
	expected = data.expected;
	for ( i = 0; i < expected.length; i++ ) {
		v = logaddexp( x[ i ], y[ i ] );
		if ( v === expected[ i ] ) {
			t.strictEqual( v, expected[ i ], 'returns expected value when provided '+x[ i ]+' and '+y[ i ] );
		} else {
			delta = abs( expected[ i ] - v );
			tol = EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y[ i ]+'. actual: '+v+'. expected: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
