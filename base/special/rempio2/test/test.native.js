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
var isInteger = require( '@stdlib/assert/is-integer' );
var isNumber = require( '@stdlib/assert/is-number' );
var isnan = require( './../../../../base/assert/is-nan' );
var incrspace = require( '@stdlib/array/base/incrspace' );
var linspace = require( '@stdlib/array/base/linspace' );
var randu = require( '@stdlib/random/base/randu' );
var abs = require( './../../../../base/special/abs' );
var pow = require( './../../../../base/special/pow' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var PIO2 = require( '@stdlib/constants/float64/half-pi' );
var PIO4 = require( '@stdlib/constants/float64/fourth-pi' );
var Float64Array = require( '@stdlib/array/float64' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var rempio2 = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( rempio2 instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof rempio2, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `0` and sets the elements of `y` to `NaN` if provided `NaN`', opts, function test( t ) {
	var y = new Float64Array( [ 0.0, 0.0 ] );
	var n = rempio2( NaN, y );
	t.strictEqual( n, 0.0, 'returns expected value' );
	t.strictEqual( isnan( y[0] ), true, 'returns expected value' );
	t.strictEqual( isnan( y[1] ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `0` and sets the elements of `y` to `NaN` if provided positive or negative infinity', opts, function test( t ) {
	var y = new Float64Array( [ 0.0, 0.0 ] );
	var n = rempio2( PINF, y );
	t.strictEqual( n, 0.0, 'returns expected value' );
	t.strictEqual( isnan( y[0] ), true, 'returns expected value' );
	t.strictEqual( isnan( y[1] ), true, 'returns expected value' );

	y = new Float64Array( [ 0.0, 0.0 ] );
	n = rempio2( NINF, y );
	t.strictEqual( n, 0.0, 'returns expected value' );
	t.strictEqual( isnan( y[0] ), true, 'returns expected value' );
	t.strictEqual( isnan( y[1] ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `n` and stores `r` as two double-precision floating point numbers in `y` such that `x - nπ/2 = r` (positive)', opts, function test( t ) {
	var delta;
	var tol;
	var x;
	var y;
	var z;
	var n;
	var i;

	y = new Float64Array( [ 0.0, 0.0 ] );
	for ( i = 0; i < 200; i++ ) {
		x = randu()*100.0;
		n = rempio2( x, y );

		t.strictEqual( isInteger( n ), true, 'returns expected value' );
		t.strictEqual( isNumber( y[0] ), true, 'returns expected value' );
		t.strictEqual( isNumber( y[1] ), true, 'returns expected value' );

		z = ( PIO2*n ) + ( y[0]+y[1] );
		delta = abs( z - x );
		tol = EPS * abs( x );
		t.strictEqual( delta <= tol, true, 'can recover input value' );
	}
	t.end();
});

tape( 'the function returns `n` and stores `r` as two double-precision floating point numbers in `y` such that `x - nπ/2 = r` (tiny positive)', opts, function test( t ) {
	var delta;
	var tol;
	var x;
	var y;
	var z;
	var n;
	var i;

	y = new Float64Array( [ 0.0, 0.0 ] );
	for ( i = 0; i < 200; i++ ) {
		x = randu()*1.0e-100;
		n = rempio2( x, y );

		t.strictEqual( isInteger( n ), true, 'returns expected value' );
		t.strictEqual( isNumber( y[0] ), true, 'returns expected value' );
		t.strictEqual( isNumber( y[1] ), true, 'returns expected value' );

		z = ( PIO2*n ) + ( y[0]+y[1] );
		delta = abs( z - x );
		tol = EPS * abs( x );
		t.strictEqual( delta <= tol, true, 'can recover input value' );
	}
	t.end();
});

tape( 'the function returns `n` and stores `r` as two double-precision floating point numbers in `y` such that `x - nπ/2 = r` (negative)', opts, function test( t ) {
	var delta;
	var tol;
	var x;
	var y;
	var z;
	var n;
	var i;

	y = new Float64Array( [ 0.0, 0.0 ] );
	for ( i = 0; i < 200; i++ ) {
		x = -100.0 * randu();
		n = rempio2( x, y );

		t.strictEqual( isInteger( n ), true, 'returns expected value' );
		t.strictEqual( isNumber( y[0] ), true, 'returns expected value' );
		t.strictEqual( isNumber( y[1] ), true, 'returns expected value' );

		z = ( PIO2*n ) + ( y[0]+y[1] );
		delta = abs( z - x );
		tol = EPS * abs( x );
		t.strictEqual( delta <= tol, true, 'can recover input value' );
	}
	t.end();
});

tape( 'the function returns `n` and stores `r` as two double-precision floating point numbers in `y` such that `x - nπ/2 = r` (tiny negative)', opts, function test( t ) {
	var delta;
	var tol;
	var x;
	var y;
	var z;
	var n;
	var i;

	y = new Float64Array( [ 0.0, 0.0 ] );
	for ( i = 0; i < 200; i++ ) {
		x = -1.0e-100 * randu();
		n = rempio2( x, y );

		t.strictEqual( isInteger( n ), true, 'returns expected value' );
		t.strictEqual( isNumber( y[0] ), true, 'returns expected value' );
		t.strictEqual( isNumber( y[1] ), true, 'returns expected value' );

		z = ( PIO2*n ) + ( y[0]+y[1] );
		delta = abs( z - x );
		tol = EPS * abs( x );
		t.strictEqual( delta <= tol, true, 'can recover input value' );
	}
	t.end();
});

tape( 'the function returns `n` and stores `r` as two double-precision floating point numbers in `y` such that `x - nπ/2 = r` (multiples of π/4)', opts, function test( t ) {
	var delta;
	var tol;
	var x;
	var y;
	var z;
	var n;
	var i;

	x = incrspace( -10.0*PIO4, 10.0*PIO4, PIO4 );
	y = new Float64Array( [ 0.0, 0.0 ] );
	for ( i = 0; i < x.length; i++ ) {
		n = rempio2( x[i], y );

		t.strictEqual( isInteger( n ), true, 'returns expected value' );
		t.strictEqual( isNumber( y[0] ), true, 'returns expected value' );
		t.strictEqual( isNumber( y[1] ), true, 'returns expected value' );

		z = ( PIO2*n ) + ( y[0]+y[1] );
		delta = abs( z - x[i] );
		tol = EPS * abs( x[i] );
		t.strictEqual( delta <= tol, true, 'can recover input value' );
	}
	t.end();
});

tape( 'for large positive input values, the function returns the last three binary digits of `n` and stores `r` as two double-precision floating point numbers in `y`', opts, function test( t ) {
	var x;
	var y;
	var n;
	var i;

	x = linspace( pow( 2.0, 20 )*PIO2, pow( 2.0, 60 )*PIO2, 4000 );
	y = new Float64Array( [ 0.0, 0.0 ] );
	for ( i = 0; i < x.length; i++ ) {
		n = rempio2( x[i], y );
		t.strictEqual( isInteger( n ), true, 'returns expected value' );
		t.strictEqual( isNumber( y[0] ), true, 'returns expected value' );
		t.strictEqual( isNumber( y[1] ), true, 'returns expected value' );
		t.strictEqual( n < 8, true, 'returns expected value' );
	}
	t.end();
});

tape( 'for large negative input values, the function returns the last three binary digits of `n` and stores `r` as two double-precision floating point numbers in `y`', opts, function test( t ) {
	var x;
	var y;
	var n;
	var i;

	x = linspace( -pow( 2.0, 20 )*PIO2, -pow( 2.0, 60 )*PIO2, 4000 );
	y = new Float64Array( [ 0.0, 0.0 ] );
	for ( i = 0; i < x.length; i++ ) {
		n = rempio2( x[i], y );
		t.strictEqual( isInteger( n ), true, 'returns expected value' );
		t.strictEqual( isNumber( y[0] ), true, 'returns expected value' );
		t.strictEqual( isNumber( y[1] ), true, 'returns expected value' );
		t.strictEqual( n < 8, true, 'returns expected value' );
	}
	t.end();
});

tape( 'for huge positive input values, the function returns the last three binary digits of `n` and stores `r` as two double-precision floating point numbers in `y`', opts, function test( t ) {
	var x;
	var y;
	var n;
	var i;

	x = linspace( pow( 2.0, 60 )*PIO2, pow( 2.0, 1020 )*PIO2, 6000 );
	y = new Float64Array( [ 0.0, 0.0 ] );
	for ( i = 0; i < x.length; i++ ) {
		n = rempio2( x[i], y );
		t.strictEqual( isInteger( n ), true, 'returns expected value' );
		t.strictEqual( isNumber( y[0] ), true, 'returns expected value' );
		t.strictEqual( isNumber( y[1] ), true, 'returns expected value' );
		t.strictEqual( n < 8, true, 'returns expected value' );
	}
	t.end();
});

tape( 'for huge negative input values, the function returns the last three binary digits of `n` and stores `r` as two double-precision floating point numbers in `y`', opts, function test( t ) {
	var x;
	var y;
	var n;
	var i;

	x = linspace( -pow( 2.0, 60 )*PIO2, -pow( 2.0, 1020 )*PIO2, 6000 );
	y = new Float64Array( [ 0.0, 0.0 ] );
	for ( i = 0; i < x.length; i++ ) {
		n = rempio2( x[i], y );
		t.strictEqual( isInteger( n ), true, 'returns expected value' );
		t.strictEqual( isNumber( y[0] ), true, 'returns expected value' );
		t.strictEqual( isNumber( y[1] ), true, 'returns expected value' );
		t.strictEqual( n < 8, true, 'returns expected value' );
	}
	t.end();
});
