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
var randu = require( '@stdlib/random/base/randu' );
var abs = require( './../../../../base/special/abs' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var boxcox1p = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( boxcox1p instanceof Error )
};


// FIXTURES //

var mediumPositive = require( './fixtures/python/medium_positive.json' );
var smallPositive = require( './fixtures/python/small_positive.json' );
var verySmall = require( './fixtures/python/very_small.json' );
var tiny = require( './fixtures/python/tiny.json' );
var tinyLargeLambda = require( './fixtures/python/tiny_and_large_lambda.json' );
var tinyLambda = require( './fixtures/python/tiny_lambda.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof boxcox1p, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', opts, function test( t ) {
	var b;

	b = boxcox1p( NaN, 1.0 );
	t.strictEqual( isnan( b ), true, 'returns expected value' );

	b = boxcox1p( 1.0, NaN );
	t.strictEqual( isnan( b ), true, 'returns expected value' );

	b = boxcox1p( NaN, NaN );
	t.strictEqual( isnan( b ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-Infinity` if lambda is negative and `x` is negative one', opts, function test( t ) {
	var lambda;
	var b;
	var i;

	for ( i = 0; i < 1e3; i++ ) {
		lambda = -1.0 * ( ( randu() * 100.0 ) + 1.0 );
		b = boxcox1p( -1.0, lambda );
		t.strictEqual( b, NINF, 'returns -Infinity when lambda is negative and `x` is negative one' );
	}
	t.end();
});

tape( 'the function returns `NaN` if `x` is less than negative one', opts, function test( t ) {
	var b;
	var x;
	var y;
	var i;

	for ( i = 0; i < 1e3; i++ ) {
		x = -1.0 * ( ( randu() * 100.0 ) + 1.0 + EPS );
		y = randu() * 10.0;
		b = boxcox1p( x, y );
		t.strictEqual( isnan( b ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes a one-parameter Box-Cox transformation for positive medium numbers', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var b;
	var i;

	expected = mediumPositive.expected;
	x = mediumPositive.x;
	y = mediumPositive.y;
	for ( i = 0; i < expected.length; i++ ) {
		b = boxcox1p( x[ i ], y[ i ] );
		if ( b === expected[ i ] ) {
			t.strictEqual( b, expected[ i ], 'returns '+b+' when provided '+x[i]+' and '+y[i]+'.' );
		} else {
			delta = abs( expected[ i ] - b );
			tol = 17.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. returns '+b+' when provided '+x[i]+' and '+y[i]+'. expected: '+expected[i]+'. delta: '+delta+'. tol: ' +tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a one-parameter Box-Cox transformation for positive small numbers', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var b;
	var i;

	expected = smallPositive.expected;
	x = smallPositive.x;
	y = smallPositive.y;
	for ( i = 0; i < expected.length; i++ ) {
		b = boxcox1p( x[ i ], y[ i ] );
		if ( b === expected[ i ] ) {
			t.strictEqual( b, expected[ i ], 'returns '+b+' when provided '+x[i]+' and '+y[i]+'.' );
		} else {
			delta = abs( expected[ i ] - b );
			tol = 4.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. returns '+b+' when provided '+x[i]+' and '+y[i]+'. expected: '+expected[i]+'. delta: '+delta+'. tol: ' +tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a one-parameter Box-Cox transformation for very small numbers', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var b;
	var i;

	expected = verySmall.expected;
	x = verySmall.x;
	y = verySmall.y;
	for ( i = 0; i < expected.length; i++ ) {
		b = boxcox1p( x[ i ], y[ i ] );
		if ( b === expected[ i ] ) {
			t.strictEqual( b, expected[ i ], 'returns '+b+' when provided '+x[i]+' and '+y[i]+'.' );
		} else {
			delta = abs( expected[ i ] - b );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. returns '+b+' when provided '+x[i]+' and '+y[i]+'. expected: '+expected[i]+'. delta: '+delta+'. tol: ' +tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a one-parameter Box-Cox transformation for tiny numbers', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var b;
	var i;

	expected = tiny.expected;
	x = tiny.x;
	y = tiny.y;
	for ( i = 0; i < expected.length; i++ ) {
		b = boxcox1p( x[ i ], y[ i ] );
		if ( b === expected[ i ] ) {
			t.strictEqual( b, expected[ i ], 'returns '+b+' when provided '+x[i]+' and '+y[i]+'.' );
		} else {
			delta = abs( expected[ i ] - b );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. returns '+b+' when provided '+x[i]+' and '+y[i]+'. expected: '+expected[i]+'. delta: '+delta+'. tol: ' +tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a one-parameter Box-Cox transformation for tiny numbers and large lambda', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var b;
	var i;

	expected = tinyLargeLambda.expected;
	x = tinyLargeLambda.x;
	y = tinyLargeLambda.y;
	for ( i = 0; i < expected.length; i++ ) {
		b = boxcox1p( x[ i ], y[ i ] );
		if ( b === expected[ i ] ) {
			t.strictEqual( b, expected[ i ], 'returns '+b+' when provided '+x[i]+' and '+y[i]+'.' );
		} else {
			delta = abs( expected[ i ] - b );
			tol = 3.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. returns '+b+' when provided '+x[i]+' and '+y[i]+'. expected: '+expected[i]+'. delta: '+delta+'. tol: ' +tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a one-parameter Box-Cox transformation for tiny lambda', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var b;
	var i;

	expected = tinyLambda.expected;
	x = tinyLambda.x;
	y = tinyLambda.y;
	for ( i = 0; i < expected.length; i++ ) {
		b = boxcox1p( x[ i ], y[ i ] );
		if ( b === expected[ i ] ) {
			t.strictEqual( b, expected[ i ], 'returns '+b+' when provided '+x[i]+' and '+y[i]+'.' );
		} else {
			delta = abs( expected[ i ] - b );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. returns '+b+' when provided '+x[i]+' and '+y[i]+'. expected: '+expected[i]+'. delta: '+delta+'. tol: ' +tol+'.' );
		}
	}
	t.end();
});
