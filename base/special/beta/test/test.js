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
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isInfinite = require( './../../../../base/assert/is-infinite' );
var isnan = require( '@stdlib/assert/is-nan' );
var abs = require( './../../../../base/special/abs' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var beta = require( './../lib' );


// FIXTURES //

var a1 = require( './fixtures/r/arg1.json' );
var b1 = require( './fixtures/r/arg2.json' );
var expected1 = require( './fixtures/r/expected.json' );
var cpp = require( './fixtures/cpp/output.json' );
var expected2 = cpp.expected;
var a2 = cpp.a;
var b2 = cpp.b;
var i;
var v;
for ( i = 0; i < expected1.length; i++ ) {
	v = expected1[ i ];
	if ( v === 'Inf' ) {
		expected1[ i ] = PINF;
	}
	else if ( v === 'NaN' ) {
		expected1[ i ] = NaN;
	}
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.ok( typeof beta === 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', function test( t ) {
	var val = beta( NaN, 2.0 );
	t.ok( isnan( val ), 'returns expected value' );
	val = beta( 2.0, NaN );
	t.ok( isnan( val ), 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided negative values', function test( t ) {
	var val = beta( -2.0, 5.0 );
	t.ok( isnan( val ), 'returns expected value' );
	val = beta( 4.0, -3.0 );
	t.ok( isnan( val ), 'returns expected value' );
	t.end();
});

tape( 'the function returns +Infinity if at least one argument is zero', function test( t ) {
	var val = beta( 0.0, 2.0 );
	t.strictEqual( val, PINF, 'returns expected value' );
	val = beta( 1.0, 0.0 );
	t.strictEqual( val, PINF, 'returns expected value' );
	t.end();
});

tape( 'the function evaluates the beta function (tested against R)', function test( t ) {
	var actual;
	var y1;
	var y2;
	var i;
	for ( i = 0; i < a1.length; i++ ) {
		actual = beta( a1[ i ], b1[ i ] );

		y1 = isInfinite( actual );
		y2 = isInfinite( expected1[ i ] );
		t.strictEqual( y1, y2, 'returned result is ' + ( (y2) ? 'not finite' : 'finite' ) );

		y1 = isnan( actual );
		y2 = isnan( expected1[ i ] );
		t.strictEqual( y1, y2, 'returned result is ' + ( (y1) ? '' : 'not' ) + ' NaN' );
		if ( !y1 ) {
			t.ok( abs( actual - expected1[ i ] ) < 8e-15, 'returned result is within tolerance. actual: ' + actual + '; expected: ' + expected1[ i ] + '.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the beta function (tested against Boost)', function test( t ) {
	var delta;
	var tol;
	var i;
	var y;

	for ( i = 0; i < a2.length; i++ ) {
		y = beta( a2[i], b2[i] );
		if ( y === expected2[i] ) {
			t.strictEqual( y, expected2[i], 'y: '+y+'. a: '+a2[i]+'. b: '+b2[i]+', expected: '+expected2[i] );
		} else {
			delta = abs( y - expected2[ i ] );
			tol = 160.0 * EPS * abs( expected2[ i ] );
			t.ok( delta <= tol, 'within tolerance. a: '+a2[i]+'. b: '+b2[i]+'. y: '+y+'. E: '+expected2[i]+'. Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'the function handles edge case where a+b < EPS', function test( t ) {
	var v;

	// Test case where c = a + b < EPS
	v = beta( EPS/4.0, EPS/4.0 );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function handles edge case where c = a and b < EPS', function test( t ) {
	var v;

	v = beta( 10.0, EPS/2.0 );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	v = beta( 100.0, EPS/3.0 );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function handles large values where abs(b*ambh) < (cgh*100) && a > 100', function test( t ) { // eslint-disable-line @cspell/spellchecker
	var v;

	v = beta( 150.0, 0.5 );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	v = beta( 200.0, 1.0 );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function handles very large values where cgh > 1.0e10', function test( t ) {
	var v;

	v = beta( 1.0e10, 1.0e10 );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	v = beta( 5.0e10, 2.0e10 );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	t.end();
});
