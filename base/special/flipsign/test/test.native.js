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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var isnan = require( './../../../../base/assert/is-nan' );
var isPositiveZero = require( './../../../../base/assert/is-positive-zero' );
var isNegativeZero = require( './../../../../base/assert/is-negative-zero' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var flipsign = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( flipsign instanceof Error )
};


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof flipsign, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a double-precision floating-point number with the magnitude of `x` and the sign of `x*y`', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = data.x;
	y = data.y;
	expected = data.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = flipsign( x[i], y[i] );
		t.strictEqual( actual, expected[i], 'returns '+expected[i] );
	}
	t.end();
});

tape( 'if `x` is `NaN`, the function returns `NaN`', opts, function test( t ) {
	var z;

	z = flipsign( NaN, -1.0 );
	t.strictEqual( isnan( z ), true, 'returns expected value' );

	z = flipsign( NaN, 1.0 );
	t.strictEqual( isnan( z ), true, 'returns expected value' );

	t.end();
});

tape( 'if `y` is `NaN`, the function could (theoretically) return either a positive or negative number', opts, function test( t ) {
	var z;

	z = flipsign( -1.0, NaN );
	t.strictEqual( isnan( z ), false, 'returns expected value' );

	z = flipsign( 1.0, NaN );
	t.strictEqual( isnan( z ), false, 'returns expected value' );

	t.end();
});

tape( 'if `x` is `+infinity`, the function returns an infinite number', opts, function test( t ) {
	var z;

	z = flipsign( PINF, -1.0 );
	t.strictEqual( z, NINF, 'returns expected value' );

	z = flipsign( PINF, 1.0 );
	t.strictEqual( z, PINF, 'returns expected value' );

	t.end();
});

tape( 'if `y` is `+infinity`, the function returns `x`', opts, function test( t ) {
	var z;

	z = flipsign( -1.0, PINF );
	t.strictEqual( z, -1.0, 'returns expected value' );

	z = flipsign( 1.0, PINF );
	t.strictEqual( z, 1.0, 'returns expected value' );

	t.end();
});

tape( 'if `x` is `-infinity`, the function returns an infinite number', opts, function test( t ) {
	var z;

	z = flipsign( NINF, -1.0 );
	t.strictEqual( z, PINF, 'returns expected value' );

	z = flipsign( NINF, 1.0 );
	t.strictEqual( z, NINF, 'returns expected value' );

	t.end();
});

tape( 'if `y` is `-infinity`, the function returns `-x`', opts, function test( t ) {
	var z;

	z = flipsign( -1.0, NINF );
	t.strictEqual( z, +1.0, 'returns expected value' );

	z = flipsign( 1.0, NINF );
	t.strictEqual( z, -1.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports using `+-0` to flip a sign', opts, function test( t ) {
	var x;
	var z;

	x = 3.14;

	z = flipsign( x, 0.0 );
	t.strictEqual( z, 3.14, 'returns expected value' );

	z = flipsign( x, -0.0 );
	t.strictEqual( z, -3.14, 'returns expected value' );

	t.end();
});

tape( 'the function supports `x` being `+-0`', opts, function test( t ) {
	var z;

	z = flipsign( -0.0, 1.0 );
	t.strictEqual( isNegativeZero( z ), true, 'returns expected value' );

	z = flipsign( -0.0, -1.0 );
	t.strictEqual( isPositiveZero( z ), true, 'returns expected value' );

	z = flipsign( 0.0, 1.0 );
	t.strictEqual( isPositiveZero( z ), true, 'returns expected value' );

	z = flipsign( 0.0, -1.0 );
	t.strictEqual( isNegativeZero( z ), true, 'returns expected value' );

	t.end();
});
