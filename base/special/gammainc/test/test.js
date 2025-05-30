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

var tape = require( 'tape' );
var isfinite = require( './../../../../base/assert/is-finite' );
var isnan = require( './../../../../base/assert/is-nan' );
var abs = require( './../../../../base/special/abs' );
var EPS = require( '@stdlib/constants/float64/eps' );
var gammainc = require( './../lib' );


// FIXTURES //

var fixtures = require( './fixtures/cpp/output.json' );
var expected1 = fixtures.lower_regularized;
var expected2 = fixtures.upper_regularized;
var expected3 = fixtures.lower_unregularized;
var expected4 = fixtures.upper_unregularized;
var x = fixtures.x;
var s = fixtures.s;


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gammainc, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', function test( t ) {
	var val;

	val = gammainc( NaN, 2 );
	t.strictEqual( isnan( val ), true, 'returns expected value' );

	val = gammainc( 4, NaN );
	t.strictEqual( isnan( val ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns NaN if provided x < 0 or s <= 0', function test( t ) {
	var val;

	// Case: x < 0
	val = gammainc( -0.1, 2 );
	t.strictEqual( isnan( val ), true, 'returns expected value' );

	// Case: s = 0
	val = gammainc( 0.1, 0 );
	t.strictEqual( isnan( val ), true, 'returns expected value' );

	// Case: s < 0
	val = gammainc( 0.1, -2 );
	t.strictEqual( isnan( val ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns 0 for the lower incomplete gamma function when the first argument is zero', function test( t ) {
	var val;
	var s;
	for ( s = 1; s < 10; s++ ) {
		val = gammainc( 0, s );
		t.ok( val === 0, 'returns expected value' );
	}
	t.end();
});

tape( 'the function correctly evaluates the lower incomplete gamma function', function test( t ) {
	var actual;
	var delta;
	var tol;
	var b1;
	var b2;
	var i;
	for ( i = 0; i < x.length; i++ ) {
		actual = gammainc( x[ i ], s[ i ] );

		b1 = isfinite( actual );
		b2 = isfinite( expected1[ i ] );
		t.strictEqual( b1, b2, 'returned result is ' + ( (b2) ? 'finite' : 'not finite' ) );

		b1 = isnan( actual );
		b2 = isnan( expected1[ i ] );
		t.strictEqual( b1, b2, 'returned result is ' + ( (b1) ? '' : 'not' ) + ' NaN' );
		if ( !b1 || !b2 ) {
			delta = abs( actual - expected1[ i ] );
			tol = 300.0 * EPS * abs( expected1[i] );
			t.ok( delta <= tol, 'returned result is within tolerance. x: '+x[i]+', s: '+s[i]+' actual: ' + actual + '; expected: ' + expected1[ i ] + '.' );
		}
	}
	t.end();
});

tape( 'the function correctly evaluates the upper incomplete gamma function', function test( t ) {
	var actual;
	var delta;
	var tol;
	var b1;
	var b2;
	var i;
	for ( i = 0; i < x.length; i++ ) {
		actual = gammainc( x[ i ], s[ i ], true, true );

		b1 = isfinite( actual );
		b2 = isfinite( expected2[ i ] );
		t.strictEqual( b1, b2, 'returned result is ' + ( (b2) ? 'finite' : 'not finite' ) );

		b1 = isnan( actual );
		b2 = isnan( expected2[ i ] );
		t.strictEqual( b1, b2, 'returned result is ' + ( (b1) ? '' : 'not' ) + ' NaN' );
		if ( !b1 || !b2 ) {
			delta = abs( actual - expected2[ i ] );
			tol = 350.0 * EPS * abs( expected2[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+', s: '+s[i]+' actual: ' + actual + '; expected: ' + expected2[ i ] + '.' );
		}
	}
	t.end();
});

tape( 'the function correctly evaluates the unregularized lower incomplete gamma function', function test( t ) {
	var actual;
	var delta;
	var tol;
	var b1;
	var b2;
	var i;
	for ( i = 0; i < x.length; i++ ) {
		actual = gammainc( x[ i ], s[ i ], false, false );

		b1 = isfinite( actual );
		b2 = isfinite( expected3[ i ] );
		t.strictEqual( b1, b2, 'returned result is ' + ( (b2) ? 'finite' : 'not finite' ) );

		b1 = isnan( actual );
		b2 = isnan( expected3[ i ] );
		t.strictEqual( b1, b2, 'returned result is ' + ( (b1) ? '' : 'not' ) + ' NaN' );
		if ( !b1 || !b2 ) {
			delta = abs( actual - expected3[ i ] );
			tol = 10.0 * EPS * abs( expected3[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+', s: '+s[i]+' actual: ' + actual + '; expected: ' + expected3[ i ] + '.' );
		}
	}
	t.end();
});

tape( 'the function correctly evaluates the unregularized upper incomplete gamma function', function test( t ) {
	var actual;
	var delta;
	var tol;
	var b1;
	var b2;
	var i;
	for ( i = 0; i < x.length; i++ ) {
		actual = gammainc( x[ i ], s[ i ], false, true );

		b1 = isfinite( actual );
		b2 = isfinite( expected4[ i ] );
		t.strictEqual( b1, b2, 'returned result is ' + ( (b2) ? 'finite' : 'not finite' ) );

		b1 = isnan( actual );
		b2 = isnan( expected4[ i ] );
		t.strictEqual( b1, b2, 'returned result is ' + ( (b1) ? '' : 'not' ) + ' NaN' );
		if ( !b1 || !b2 ) {
			delta = abs( actual - expected4[ i ] );
			tol = 10.0 * EPS * abs( expected4[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+', s: '+s[i]+' actual: ' + actual + '; expected: ' + expected4[ i ] + '.' );
		}
	}
	t.end();
});
