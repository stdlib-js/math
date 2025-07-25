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

var tape = require( 'tape' );
var isInteger = require( '@stdlib/assert/is-integer' );
var isNumber = require( '@stdlib/assert/is-number' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var incrspace = require( '@stdlib/array/base/incrspace' );
var linspace = require( '@stdlib/array/base/linspace' );
var randu = require( '@stdlib/random/base/randu' );
var absf = require( './../../../../base/special/absf' );
var pow = require( './../../../../base/special/pow' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var EPS = require( '@stdlib/constants/float32/eps' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var PIO2 = require( '@stdlib/constants/float32/half-pi' );
var PIO4 = require( '@stdlib/constants/float32/fourth-pi' );
var rempio2f = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof rempio2f, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `0` and sets `y[0]` to `NaN` if provided `NaN`', function test( t ) {
	var y = [ 0.0 ];
	var n = rempio2f( NaN, y );
	t.strictEqual( n, 0.0, 'returns expected value' );
	t.strictEqual( isnanf( y[0] ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `0` and sets `y[0]` to `NaN` if provided positive or negative infinity', function test( t ) {
	var y = [ 0.0 ];
	var n = rempio2f( PINF, y );
	t.strictEqual( n, 0.0, 'returns expected value' );
	t.strictEqual( isnanf( y[0] ), true, 'returns expected value' );

	y = [ 0.0 ];
	n = rempio2f( NINF, y );
	t.strictEqual( n, 0.0, 'returns expected value' );
	t.strictEqual( isnanf( y[0] ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `n` and stores `r` as a double-precision floating point number in `y` such that `x - nπ/2 = r` (positive)', function test( t ) {
	var delta;
	var tol;
	var x;
	var y;
	var z;
	var n;
	var i;

	y = [ 0.0 ];
	for ( i = 0; i < 200; i++ ) {
		x = float64ToFloat32( randu()*100.0 );
		n = rempio2f( x, y );

		t.strictEqual( isInteger( n ), true, 'returns expected value' );
		t.strictEqual( isNumber( y[ 0 ] ), true, 'returns expected value' );

		z = float64ToFloat32( ( PIO2*n ) + ( y[0] ) );
		delta = absf( z - x );
		tol = EPS * absf( x );
		t.ok( delta <= tol, 'within tolerance. x: '+x+'. n: '+n+'. y: '+y+'. z: '+z+'. delta: '+delta+'. tol: '+tol+'.' );
	}
	t.end();
});

tape( 'the function returns `n` and stores `r` as a double-precision floating point number in `y` such that `x - nπ/2 = r` (tiny positive)', function test( t ) {
	var delta;
	var tol;
	var x;
	var y;
	var z;
	var n;
	var i;

	y = [ 0.0 ];
	for ( i = 0; i < 200; i++ ) {
		x = float64ToFloat32( randu()*1.0e-100 );
		n = rempio2f( x, y );

		t.strictEqual( isInteger( n ), true, 'returns expected value' );
		t.strictEqual( isNumber( y[0] ), true, 'returns expected value' );

		z = float64ToFloat32( ( PIO2*n ) + ( y[0] ) );
		delta = absf( z - x );
		tol = EPS * absf( x );
		t.ok( delta <= tol, 'within tolerance. x: '+x+'. n: '+n+'. y: '+y+'. z: '+z+'. delta: '+delta+'. tol: '+tol+'.' );
	}
	t.end();
});

tape( 'the function returns `n` and stores `r` as a double-precision floating point number in `y` such that `x - nπ/2 = r` (negative)', function test( t ) {
	var delta;
	var tol;
	var x;
	var y;
	var z;
	var n;
	var i;

	y = [ 0.0 ];
	for ( i = 0; i < 200; i++ ) {
		x = float64ToFloat32( -100.0 * randu() );
		n = rempio2f( x, y );

		t.strictEqual( isInteger( n ), true, 'returns expected value' );
		t.strictEqual( isNumber( y[0] ), true, 'returns expected value' );

		z = float64ToFloat32( ( PIO2*n ) + ( y[0] ) );
		delta = absf( z - x );
		tol = EPS * absf( x );
		t.ok( delta <= tol, 'within tolerance. x: '+x+'. n: '+n+'. y: '+y+'. z: '+z+'. delta: '+delta+'. tol: '+tol+'.' );
	}
	t.end();
});

tape( 'the function returns `n` and stores `r` as a double-precision floating point number in `y` such that `x - nπ/2 = r` (tiny negative)', function test( t ) {
	var delta;
	var tol;
	var x;
	var y;
	var z;
	var n;
	var i;

	y = [ 0.0 ];
	for ( i = 0; i < 200; i++ ) {
		x = float64ToFloat32( -1.0e-100 * randu() );
		n = rempio2f( x, y );

		t.strictEqual( isInteger( n ), true, 'returns expected value' );
		t.strictEqual( isNumber( y[0] ), true, 'returns expected value' );

		z = float64ToFloat32( ( PIO2*n ) + ( y[0] ) );
		delta = absf( z - x );
		tol = EPS * absf( x );
		t.ok( delta <= tol, 'within tolerance. x: '+x+'. n: '+n+'. y: '+y+'. z: '+z+'. delta: '+delta+'. tol: '+tol+'.' );
	}
	t.end();
});

tape( 'the function returns `n` and stores `r` as a double-precision floating point number in `y` such that `x - nπ/2 = r` (multiples of π/4)', function test( t ) {
	var delta;
	var tol;
	var x;
	var y;
	var z;
	var n;
	var i;

	x = incrspace( -10.0*PIO4, 10.0*PIO4, PIO4 );
	y = [ 0.0 ];
	for ( i = 0; i < x.length; i++ ) {
		x[i] = float64ToFloat32( x[i] );
		n = rempio2f( x[i], y );

		t.strictEqual( isInteger( n ), true, 'returns expected value' );
		t.strictEqual( isNumber( y[0] ), true, 'returns expected value' );

		z = float64ToFloat32( ( PIO2*n ) + ( y[0] ) );
		delta = absf( z - x[i] );
		tol = EPS * absf( x[i] );
		t.ok( delta <= tol, 'within tolerance. x: '+x+'. n: '+n+'. y: '+y+'. z: '+z+'. delta: '+delta+'. tol: '+tol+'.' );
	}
	t.end();
});

tape( 'for large positive input values, the function returns the last three binary digits of `n` and stores `r` as a double-precision floating point number in `y`', function test( t ) {
	var x;
	var y;
	var n;
	var i;

	x = linspace( pow( 2.0, 28 )*PIO2, pow( 2.0, 60 )*PIO2, 4000 );
	y = [ 0.0 ];
	for ( i = 0; i < x.length; i++ ) {
		x[i] = float64ToFloat32( x[i] );
		n = rempio2f( x[i], y );
		t.strictEqual( isInteger( n ), true, 'returns expected value' );
		t.strictEqual( isNumber( y[0] ), true, 'returns expected value' );
		t.strictEqual( n < 8, true, 'returns expected value' );
	}
	t.end();
});

tape( 'for large negative input values, the function returns the last three binary digits of `n` and stores `r` as a double-precision floating point number in `y`', function test( t ) {
	var x;
	var y;
	var n;
	var i;

	x = linspace( -pow( 2.0, 28 )*PIO2, -pow( 2.0, 60 )*PIO2, 4000 );
	y = [ 0.0 ];
	for ( i = 0; i < x.length; i++ ) {
		x[i] = float64ToFloat32( x[i] );
		n = rempio2f( x[i], y );
		t.strictEqual( isInteger( n ), true, 'returns expected value' );
		t.strictEqual( isNumber( y[0] ), true, 'returns expected value' );
		t.strictEqual( n < 8, true, 'returns expected value' );
	}
	t.end();
});

tape( 'for huge positive input values, the function returns the last three binary digits of `n` and stores `r` as a double-precision floating point number in `y`', function test( t ) {
	var x;
	var y;
	var n;
	var i;

	x = linspace( pow( 2.0, 60 )*PIO2, pow( 2.0, 125 )*PIO2, 6000 );
	y = [ 0.0 ];
	for ( i = 0; i < x.length; i++ ) {
		x[i] = float64ToFloat32( x[i] );
		n = rempio2f( x[i], y );
		t.strictEqual( isInteger( n ), true, 'returns expected value' );
		t.strictEqual( isNumber( y[0] ), true, 'returns expected value' );
		t.strictEqual( n < 8, true, 'returns expected value' );
	}
	t.end();
});

tape( 'for huge negative input values, the function returns the last three binary digits of `n` and stores `r` as a double-precision floating point number in `y`', function test( t ) {
	var x;
	var y;
	var n;
	var i;

	x = linspace( -pow( 2.0, 60 )*PIO2, -pow( 2.0, 125 )*PIO2, 6000 );
	y = [ 0.0 ];
	for ( i = 0; i < x.length; i++ ) {
		x[i] = float64ToFloat32( x[i] );
		n = rempio2f( x[i], y );
		t.strictEqual( isInteger( n ), true, 'returns expected value' );
		t.strictEqual( isNumber( y[0] ), true, 'returns expected value' );
		t.strictEqual( n < 8, true, 'returns expected value' );
	}
	t.end();
});
