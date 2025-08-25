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
var uniform = require( '@stdlib/random/base/uniform' );
var ln = require( './../../../../base/special/ln' );
var EPS = require( '@stdlib/constants/float64/eps' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var isPositiveZero = require( './../../../../base/assert/is-positive-zero' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var log = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( log instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof log, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has two parameters', opts, function test( t ) {
	t.strictEqual( log.length, 2.0, 'arity is 2' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN` as either of the arguments', opts, function test( t ) {
	t.strictEqual( isnan( log( 2.0, NaN ) ), true, 'returns expected value' );
	t.strictEqual( isnan( log( NaN, 3.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided a negative number as either of the arguments', opts, function test( t ) {
	t.strictEqual( isnan( log( 2.0, -0.4 ) ), true, 'returns expected value' );
	t.strictEqual( isnan( log( -1.0, 3.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided `1` or `0` for both arguments', opts, function test( t ) {
	t.strictEqual( isnan( log( 0.0, 0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isnan( log( 1.0, 1.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `1.0` if provided `x` and `b` such that `x = b` (except for zero and one)', opts, function test( t ) {
	var i;
	for ( i = 2; i < 100; i++ ) {
		t.strictEqual( log( i, i ), 1.0, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns `+infinity` if provided `x = +infinity` and a valid `b`', opts, function test( t ) {
	t.strictEqual( log( PINF, 1.0 ), PINF, 'returns expected value' );
	t.strictEqual( log( PINF, 2.0 ), PINF, 'returns expected value' );
	t.strictEqual( log( PINF, 10.0 ), PINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-infinity` if provided `x = +-0` and a valid `b`', opts, function test( t ) {
	t.strictEqual( log( 0.0, 1.0 ), NINF, 'returns expected value' );
	t.strictEqual( log( 0.0, 2.0 ), NINF, 'returns expected value' );
	t.strictEqual( log( 0.0, 10.0 ), NINF, 'returns expected value' );
	t.strictEqual( log( -0.0, 1.0 ), NINF, 'returns expected value' );
	t.strictEqual( log( -0.0, 2.0 ), NINF, 'returns expected value' );
	t.strictEqual( log( -0.0, 10.0 ), NINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns positive zero if provided `x = 1.0` and a valid `b`', opts, function test( t ) {
	var v;

	v = log( 1.0, 2.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	v = log( 1.0, 10.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `ln(x) / ln(b)`', opts, function test( t ) {
	var rand;
	var b;
	var x;
	var i;

	rand = uniform.factory({
		'seed': 123
	});

	for ( i = 0; i < 100; i++ ) {
		x = rand( EPS, 100.0 );
		b = rand( EPS, 5.0 );
		t.strictEqual( log( x, b ), ln( x ) / ln( b ), 'returns ln(x) / ln(b)' );
	}
	t.end();
});
