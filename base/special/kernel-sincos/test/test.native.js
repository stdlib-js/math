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
var isnan = require( './../../../../base/assert/is-nan' );
var abs = require( './../../../../base/special/abs' );
var EPS = require( '@stdlib/constants/float64/eps' );
var rempio2 = require( './../../../../base/special/rempio2' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var kernelSincos = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( kernelSincos instanceof Error )
};


// FIXTURES //

var smallRange = require( './fixtures/julia/small_range.json' );
var largePositive = require( './fixtures/julia/large_positive.json' );
var largeNegative = require( './fixtures/julia/large_negative.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof kernelSincos, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', opts, function test( t ) {
	var v;

	v = kernelSincos( NaN, 0.0 );
	t.strictEqual( isnan( v[0] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[1] ), true, 'returns expected value' );
	t.end();
});

tape( 'the function evaluates the sine and cosine for input values on the interval `[-pi/4, pi/4]`', opts, function test( t ) {
	var cosine;
	var delta;
	var sine;
	var tol;
	var x;
	var y;
	var i;

	x = smallRange.x;
	sine = smallRange.sine;
	cosine = smallRange.cosine;

	for ( i = 0; i < x.length; i++ ) {
		y = kernelSincos( x[i], 0.0 );
		if ( y[0] === sine[ i ] ) {
			t.strictEqual( y[0], sine[ i ], 'returns expected value' );
		} else {
			delta = abs( y[0] - sine[i] );

			// NOTE: the tolerance here is larger than for the JavaScript implementation due to compiler optimizations which may be performed resulting in result divergence. For discussion, see https://github.com/stdlib-js/stdlib/pull/2298#discussion_r1624765205
			tol = EPS * abs( sine[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+y[0]+'. Expected: '+sine[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
		t.strictEqual( y[1], cosine[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function can be used to compute the sine and cosine for input values outside of `[-pi/4, pi/4]` after argument reduction via `rempio2` (positive)', opts, function test( t ) {
	var cosine;
	var delta;
	var sine;
	var tol;
	var out;
	var x;
	var y;
	var n;
	var i;

	y = [ 0.0, 0.0 ];
	x = largePositive.x;
	sine = largePositive.sine;
	cosine = largePositive.cosine;
	for ( i = 0; i < x.length; i++ ) {
		n = rempio2( x[ i ], y );
		switch ( n & 3 ) {
		case 0:
			out = kernelSincos( y[ 0 ], y[ 1 ] );
			if ( out[0] === sine[ i ] ) {
				t.strictEqual( out[0], sine[ i ], 'returns expected value' );
			} else {
				delta = abs( out[0] - sine[i] );

				// NOTE: the tolerance here is larger than for the JavaScript implementation due to compiler optimizations which may be performed resulting in result divergence. For discussion, see https://github.com/stdlib-js/stdlib/pull/2298#discussion_r1624765205
				tol = EPS * abs( sine[i] );
				t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+out[0]+'. Expected: '+sine[i]+'. tol: '+tol+'. delta: '+delta+'.' );
			}
			t.strictEqual( out[1], cosine[ i ], 'returns expected value' );
			break;
		case 2:
			out = kernelSincos( y[ 0 ], y[ 1 ] );
			out[ 0 ] = -out[ 0 ];
			out[ 1 ] = -out[ 1 ];
			if ( out[0] === sine[ i ] ) {
				t.strictEqual( out[0], sine[ i ], 'returns expected value' );
			} else {
				delta = abs( out[0] - sine[i] );

				// NOTE: the tolerance here is larger than for the JavaScript implementation due to compiler optimizations which may be performed resulting in result divergence. For discussion, see https://github.com/stdlib-js/stdlib/pull/2298#discussion_r1624765205
				tol = EPS * abs( sine[i] );
				t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+out[0]+'. Expected: '+sine[i]+'. tol: '+tol+'. delta: '+delta+'.' );
			}
			if ( out[1] === cosine[ i ] ) {
				t.strictEqual( out[1], cosine[ i ], 'returns expected value' );
			} else {
				delta = abs( out[1] - cosine[i] );

				// NOTE: the tolerance here is larger than for the JavaScript implementation due to compiler optimizations which may be performed resulting in result divergence. For discussion, see https://github.com/stdlib-js/stdlib/pull/2298#discussion_r1624765205
				tol = EPS * abs( cosine[i] );
				t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+out[1]+'. Expected: '+cosine[i]+'. tol: '+tol+'. delta: '+delta+'.' );
			}
			break;
		default:
			break;
		}
	}
	t.end();
});

tape( 'the function can be used to compute the sine and cosine for input values outside of `[-pi/4, pi/4]` after argument reduction via `rempio2` (negative)', opts, function test( t ) {
	var cosine;
	var delta;
	var sine;
	var tol;
	var out;
	var x;
	var y;
	var n;
	var i;

	y = [ 0.0, 0.0 ];
	x = largeNegative.x;
	sine = largeNegative.sine;
	cosine = largeNegative.cosine;
	for ( i = 0; i < x.length; i++ ) {
		n = rempio2( x[ i ], y );
		switch ( n & 3 ) {
		case 0:
			out = kernelSincos( y[ 0 ], y[ 1 ] );
			if ( out[0] === sine[ i ] ) {
				t.strictEqual( out[0], sine[ i ], 'returns expected value' );
			} else {
				delta = abs( out[0] - sine[i] );

				// NOTE: the tolerance here is larger than for the JavaScript implementation due to compiler optimizations which may be performed resulting in result divergence. For discussion, see https://github.com/stdlib-js/stdlib/pull/2298#discussion_r1624765205
				tol = EPS * abs( sine[i] );
				t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+out[0]+'. Expected: '+sine[i]+'. tol: '+tol+'. delta: '+delta+'.' );
			}
			t.strictEqual( out[1], cosine[ i ], 'returns expected value' );
			break;
		case 2:
			out = kernelSincos( y[ 0 ], y[ 1 ] );
			out[ 0 ] = -out[ 0 ];
			out[ 1 ] = -out[ 1 ];
			if ( out[0] === sine[ i ] ) {
				t.strictEqual( out[0], sine[ i ], 'returns expected value' );
			} else {
				delta = abs( out[0] - sine[i] );

				// NOTE: the tolerance here is larger than for the JavaScript implementation due to compiler optimizations which may be performed resulting in result divergence. For discussion, see https://github.com/stdlib-js/stdlib/pull/2298#discussion_r1624765205
				tol = EPS * abs( sine[i] );
				t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+out[0]+'. Expected: '+sine[i]+'. tol: '+tol+'. delta: '+delta+'.' );
			}
			if ( out[1] === cosine[ i ] ) {
				t.strictEqual( out[1], cosine[ i ], 'returns expected value' );
			} else {
				delta = abs( out[1] - cosine[i] );

				// NOTE: the tolerance here is larger than for the JavaScript implementation due to compiler optimizations which may be performed resulting in result divergence. For discussion, see https://github.com/stdlib-js/stdlib/pull/2298#discussion_r1624765205
				tol = EPS * abs( cosine[i] );
				t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+out[1]+'. Expected: '+cosine[i]+'. tol: '+tol+'. delta: '+delta+'.' );
			}
			break;
		default:
			break;
		}
	}
	t.end();
});
