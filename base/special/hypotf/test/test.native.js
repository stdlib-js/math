/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var EPS = require( '@stdlib/constants/float32/eps' );
var absf = require( './../../../../base/special/absf' );
var sqrtf = require( './../../../../base/special/sqrtf' );
var pow = require( './../../../../base/special/pow' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var isPositiveZerof = require( './../../../../base/assert/is-positive-zerof' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var hypotf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( hypotf instanceof Error )
};


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof hypotf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `+infinity` if either argument is `+-infinity`', opts, function test( t ) {
	var h;

	h = hypotf( PINF, 3.14 );
	t.strictEqual( h, PINF, 'returns expected value' );

	h = hypotf( 3.14, PINF );
	t.strictEqual( h, PINF, 'returns expected value' );

	h = hypotf( NINF, 3.14 );
	t.strictEqual( h, PINF, 'returns expected value' );

	h = hypotf( 3.14, NINF );
	t.strictEqual( h, PINF, 'returns expected value' );

	h = hypotf( PINF, PINF );
	t.strictEqual( h, PINF, 'returns expected value' );

	h = hypotf( NINF, PINF );
	t.strictEqual( h, PINF, 'returns expected value' );

	h = hypotf( PINF, NINF );
	t.strictEqual( h, PINF, 'returns expected value' );

	h = hypotf( NINF, NINF );
	t.strictEqual( h, PINF, 'returns expected value' );

	h = hypotf( NaN, PINF );
	t.strictEqual( h, PINF, 'returns expected value' );

	h = hypotf( PINF, NaN );
	t.strictEqual( h, PINF, 'returns expected value' );

	h = hypotf( NINF, NaN );
	t.strictEqual( h, PINF, 'returns expected value' );

	h = hypotf( NaN, NINF );
	t.strictEqual( h, PINF, 'returns expected value' );

	t.end();
});

tape( 'the function returns `NaN` if either argument is `NaN` but not `+-infinity`', opts, function test( t ) {
	var h;

	h = hypotf( NaN, 3.14 );
	t.strictEqual( isnanf( h ), true, 'returns expected value' );

	h = hypotf( 3.14, NaN );
	t.strictEqual( isnanf( h ), true, 'returns expected value' );

	h = hypotf( NaN, NaN );
	t.strictEqual( isnanf( h ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `+0` if both arguments are `+-0`', opts, function test( t ) {
	var h;

	h = hypotf( +0.0, +0.0 );
	t.strictEqual( isPositiveZerof( h ), true, 'returns expected value' );

	h = hypotf( -0.0, +0.0 );
	t.strictEqual( isPositiveZerof( h ), true, 'returns expected value' );

	h = hypotf( +0.0, -0.0 );
	t.strictEqual( isPositiveZerof( h ), true, 'returns expected value' );

	h = hypotf( -0.0, -0.0 );
	t.strictEqual( isPositiveZerof( h ), true, 'returns expected value' );

	t.end();
});

tape( 'the function computes the hypotenuse', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var h;
	var x;
	var y;
	var i;

	x = data.x;
	y = data.y;
	expected = data.expected;

	for ( i = 0; i < x.length; i++ ) {
		h = hypotf( x[ i ], y[ i ] );
		if ( h === expected[ i ] ) {
			t.ok( true, 'x: '+x[i]+'. y: '+y[i]+'. h: '+h+'. Expected: '+expected[i]+'.' );
		} else {
			delta = absf( h - expected[ i ] );
			tol = 2.0 * EPS * absf( expected[ i ] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. y: '+y[i]+'. h: '+h+'. Expected: '+expected[i]+'. Delta: '+delta+'. Tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the hypotenuse (canonical inputs)', opts, function test( t ) {
	var delta;
	var tol;
	var h;

	h = hypotf( 3.0, 4.0 );
	t.strictEqual( h, 5.0, 'returns expected value' );

	h = hypotf( 6.0, 8.0 );
	t.strictEqual( h, 10.0, 'returns expected value' );

	// NOTE: the tolerance here is larger than for the JavaScript implementation due to compiler optimizations which may be performed resulting in result divergence. For discussion, see https://github.com/stdlib-js/stdlib/pull/2298#discussion_r1624765205
	h = hypotf( 5.0, 12.0 );
	delta = absf( h - 13.0 );
	tol = EPS * absf( 13.0 );
	t.strictEqual( delta <= tol, true, 'within tolerance. h: '+h+'. Expected: 13.0. Delta: '+delta+'. Tol: '+tol+'.' );

	t.end();
});

tape( 'the function avoids overflow', opts, function test( t ) {
	var h;

	h = sqrtf( float64ToFloat32( float64ToFloat32( pow( 1.0e38, 2 ) ) + float64ToFloat32( pow( 1.0e38, 2 ) ) ) ); // eslint-disable-line max-len
	t.strictEqual( h, PINF, 'returns +infinity' );

	h = hypotf( 1.0e38, 1.0e38 );
	t.strictEqual( h, float64ToFloat32( 1.4142135623730951e38 ), 'avoids overflow' );

	t.end();
});

tape( 'the function avoids underflow', opts, function test( t ) {
	var h;

	h = sqrtf( float64ToFloat32( float64ToFloat32( pow( 1.0e-45, 2 ) ) + float64ToFloat32( pow( 1.0e-45, 2 ) ) ) ); // eslint-disable-line max-len
	t.strictEqual( h, 0.0, 'returns 0' );

	h = hypotf( 1.0e-45, 1.0e-45 );
	t.strictEqual( h, float64ToFloat32( 1.414213562373095e-45 ), 'avoids underflow' );

	t.end();
});
