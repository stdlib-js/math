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

var tape = require( 'tape' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var EPS = require( '@stdlib/constants/float32/eps' );
var uniform = require( '@stdlib/random/base/uniform' );
var abs = require( './../../../../base/special/abs' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var PI = require( '@stdlib/constants/float32/pi' );
var isPositiveZero = require( '@stdlib/assert/is-positive-zero' );
var acosf = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );
var smallNegative = require( './fixtures/julia/small_negative.json' );
var smallPositive = require( './fixtures/julia/small_positive.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof acosf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the arccosine', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	x = data.x;
	expected = data.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = acosf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.strictEqual( y, e, 'x: '+x[ i ]+'. E: '+e );
		} else {
			delta = abs( y - e );
			tol = 115.0 * EPS * abs( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the arccosine (small negative values)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	x = smallNegative.x;
	expected = smallNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = acosf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.strictEqual( y, e, 'x: '+x[ i ]+'. E: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the arccosine (small positive values)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	x = smallPositive.x;
	expected = smallPositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = acosf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.strictEqual( y, e, 'x: '+x[ i ]+'. E: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', function test( t ) {
	var v = acosf( NaN );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided a value less than `-1`', function test( t ) {
	var v;
	var i;

	for ( i = 0; i < 1e3; i++ ) {
		v = uniform( -1.0e6, -1.0 - EPS );
		t.strictEqual( isnanf( acosf( v ) ), true, 'returns expected value when provided '+v );
	}
	t.end();
});

tape( 'the function returns `NaN` if provided a value greater than `+1`', function test( t ) {
	var v;
	var i;

	for ( i = 0; i < 1e3; i++ ) {
		v = uniform( 1.0 + EPS, 1.0e6 );
		t.strictEqual( isnanf( acosf( v ) ), true, 'returns expected value when provided '+v );
	}
	t.end();
});

tape( 'the function returns `0.0` if provided a value equal to `+1`', function test( t ) {
	var v = acosf( 1.0 );
	t.strictEqual( v, 0.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `PI` if provided a value equal to `-1`', function test( t ) {
	var v = acosf( -1.0 );
	t.strictEqual( v, PI, 'returns expected value' );
	t.end();
});

tape( 'the function returns `0` if provided `1`', function test( t ) {
	t.strictEqual( isPositiveZero( acosf( 1.0 ) ), true, 'returns expected value' );
	t.end();
});
