/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var NINF = require( '@stdlib/constants/float64/ninf' );
var isnan = require( './../../../../base/assert/is-nan' );
var uniform = require( '@stdlib/random/base/uniform' );
var tryRequire = require( '@stdlib/utils/try-require' );
var abs = require( './../../../../base/special/abs' );
var exp = require( './../../../../base/special/exp' );
var expm1 = require( './../../../../base/special/expm1' );
var EPS = require( '@stdlib/constants/float64/eps' );
var ln = require( './../../../../base/special/ln' );
var log1p = require( './../../../../base/special/log1p' );
var LN2 = require( '@stdlib/constants/float64/ln-two' );


// FIXTURES //

var data = require( './fixtures/r/data.json' );
var expected = require( './fixtures/r/expected.json' );


// VARIABLES //

var log1mexp = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( log1mexp instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof log1mexp, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', opts, function test( t ) {
	var v = log1mexp( NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `+-0`, the function returns -infinity', opts, function test( t ) {
	var v;

	v = log1mexp( 0.0 );
	t.strictEqual( v, NINF, 'returns expected value' );

	v = log1mexp( -0.0 );
	t.strictEqual( v, NINF, 'returns expected value' );

	t.end();
});

tape( 'the function computes the natural logarithm of `1-exp(-|x|)` (`0 < |x| <= ln(2)`)', opts, function test( t ) {
	var delta;
	var rand;
	var tol;
	var x;
	var y;
	var v;
	var i;

	rand = uniform.factory( 0.0, LN2, {
		'seed': 129
	});
	for ( i = 0; i < 1e3; i++ ) {
		v = rand();
		x = log1mexp( v );
		y = ln( -expm1( -v ) );
		if ( x === y ) {
			t.strictEqual( x, y, 'returns '+y+' when provided '+v );
		} else {
			delta = abs( x - y );
			tol = 1.0 * EPS * abs( y );
			t.ok( delta <= tol, 'within tolerance. v: '+v+'. actual: '+x+'. expected: '+y+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the natural logarithm of `1-exp(-|x|)` (`x > ln(2)`)', opts, function test( t ) {
	var delta;
	var rand;
	var tol;
	var x;
	var y;
	var v;
	var i;

	rand = uniform.factory( LN2 + EPS, 100.0, {
		'seed': 919
	});

	for ( i = 0; i < 1e3; i++ ) {
		v = rand();
		x = log1mexp( v );
		y = log1p( -exp( -v ) );
		if ( x === y ) {
			t.strictEqual( x, y, 'returns '+y+' when provided '+v );
		} else {
			delta = abs( x - y );
			tol = 1.0 * EPS * abs( y );
			t.ok( delta <= tol, 'within tolerance. v: '+v+'. actual: '+x+'. expected: '+y+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function accurately computes the natural logarithm of `1-exp(-|x|)`', opts, function test( t ) {
	var actual;
	var delta;
	var tol;
	var i;

	for ( i = 0; i < data.length; i++ ) {
		actual = log1mexp( data[ i ] );
		if ( actual === expected[ i ] ) {
			t.strictEqual( actual, expected[ i ], 'returns '+expected[ i ]+' when provided '+data[ i ] );
		} else {
			delta = abs( actual - expected[ i ] );
			tol = 100.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+data[ i ]+'. actual: '+actual+'. expected: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
