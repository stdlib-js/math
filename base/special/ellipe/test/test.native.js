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
var HALF_PI = require( '@stdlib/constants/float64/half-pi' );
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( './../../../../base/special/abs' );
var tryRequire = require( '@stdlib/utils/try-require' );


// FIXTURES //

var mediumPositive = require( './fixtures/cpp/medium_positive.json' );
var closeToUnity = require( './fixtures/cpp/close_to_unity.json' );
var negativeSpotChecks = require( './fixtures/wolframalpha/negative_spot_checks.json' );


// VARIABLES //

var ellipe = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( ellipe instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ellipe, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function evaluates the complete elliptic integral of the second kind (values close to positive unity)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = closeToUnity.expected;
	x = closeToUnity.x;
	for ( i = 0; i < x.length; i++ ) {
		y = ellipe( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 4.0 * EPS * abs( expected[i] );
			t.equal( delta <= tol, true, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the complete elliptic integral of the second kind (medium positive values)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = mediumPositive.expected;
	x = mediumPositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = ellipe( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 5.0 * EPS * abs( expected[i] );
			t.equal( delta <= tol, true, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the complete elliptic integral of the second kind (spot checked negative values)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	// The spot checked values are derived from Wolfram Alpha and cross-checked against Maxima. For example, to compute E(-0.1): https://www.wolframalpha.com/input/?i=EllipticE(-0.1)
	expected = negativeSpotChecks.expected;
	x = negativeSpotChecks.x;
	for ( i = 0; i < x.length; i++ ) {
		y = ellipe( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 2.2 * EPS * abs( expected[i] );
			t.equal( delta <= tol, true, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function returns `NaN` if provided values larger than `1.0`', opts, function test( t ) {
	var v = ellipe( 1.01 );
	t.equal( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `1.0` if provided `1.0`', opts, function test( t ) {
	var v = ellipe( 1.0 );
	t.equal( v, 1.0, 'return expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided `+infinity`', opts, function test( t ) {
	var v = ellipe( PINF );
	t.equal( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided `-infinity`', opts, function test( t ) {
	var v = ellipe( NINF );
	t.equal( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `π/2` if provided `0`', opts, function test( t ) {
	var v = ellipe( 0 );
	t.equal( v, HALF_PI, 'returns expected value' );
	t.end();
});