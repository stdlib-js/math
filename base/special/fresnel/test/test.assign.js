/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var isnan = require( './../../../../base/assert/is-nan' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( './../../../../base/special/abs' );
var randu = require( '@stdlib/random/base/randu' );
var Float64Array = require( '@stdlib/array/float64' );
var fresnel = require( './../lib/assign.js' );


// FIXTURES //

var smallPositive = require( './fixtures/c/cephes/small.json' );
var mediumPositive = require( './fixtures/c/cephes/medium.json' );
var largePositive = require( './fixtures/c/cephes/large.json' );
var hugePositive = require( './fixtures/c/cephes/huge.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof fresnel, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes Fresnel integrals (small positive values)', function test( t ) {
	var delta;
	var tol;
	var C;
	var S;
	var x;
	var y;
	var z;
	var i;

	z = [ 0.0, 0.0 ];
	x = smallPositive.x;
	S = smallPositive.S;
	C = smallPositive.C;

	for ( i = 0; i < x.length; i++ ) {
		y = fresnel( x[i], z, 1, 0 );
		t.equal( y, z, 'returns expected value' );
		if ( y[0] === S[i] ) {
			t.equal( y[0], S[i], 'x: '+x[i]+'. Expected: '+S[i] );
		} else {
			delta = abs( y[0] - S[i] );
			tol = 4.0 * EPS * abs( S[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. S: '+y[0]+'. Expected: '+S[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
		if ( y[1] === C[i] ) {
			t.equal( y[1], C[i], 'x: '+x[i]+'. Expected: '+C[i] );
		} else {
			delta = abs( y[1] - C[i] );
			tol = 4.0 * EPS * abs( C[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. C: '+y[1]+'. Expected: '+C[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes Fresnel integrals (medium positive values)', function test( t ) {
	var delta;
	var tol;
	var C;
	var S;
	var x;
	var y;
	var z;
	var i;

	z = [ 0.0, 0.0 ];
	x = mediumPositive.x;
	S = mediumPositive.S;
	C = mediumPositive.C;

	for ( i = 0; i < x.length; i++ ) {
		y = fresnel( x[i], z, 1, 0 );
		t.equal( y, z, 'returns expected value' );
		if ( y[0] === S[i] ) {
			t.equal( y[0], S[i], 'x: '+x[i]+'. Expected: '+S[i] );
		} else {
			delta = abs( y[0] - S[i] );
			tol = 1.5 * EPS * abs( S[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. S: '+y[0]+'. Expected: '+S[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
		if ( y[1] === C[i] ) {
			t.equal( y[1], C[i], 'x: '+x[i]+'. Expected: '+C[i] );
		} else {
			delta = abs( y[1] - C[i] );
			tol = 1.5 * EPS * abs( C[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. C: '+y[1]+'. Expected: '+C[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes Fresnel integrals (large positive values)', function test( t ) {
	var delta;
	var tol;
	var C;
	var S;
	var x;
	var y;
	var z;
	var i;

	z = [ 0.0, 0.0 ];
	x = largePositive.x;
	S = largePositive.S;
	C = largePositive.C;

	for ( i = 0; i < x.length; i++ ) {
		y = fresnel( x[i], z, 1, 0 );
		t.equal( y, z, 'returns expected value' );
		if ( y[0] === S[i] ) {
			t.equal( y[0], S[i], 'x: '+x[i]+'. Expected: '+S[i] );
		} else {
			delta = abs( y[0] - S[i] );
			tol = 1.5 * EPS * abs( S[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. S: '+y[0]+'. Expected: '+S[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
		if ( y[1] === C[i] ) {
			t.equal( y[1], C[i], 'x: '+x[i]+'. Expected: '+C[i] );
		} else {
			delta = abs( y[1] - C[i] );
			tol = 1.5 * EPS * abs( C[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. C: '+y[1]+'. Expected: '+C[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes Fresnel integrals (very large positive values)', function test( t ) {
	var delta;
	var tol;
	var C;
	var S;
	var x;
	var y;
	var z;
	var i;

	z = [ 0.0, 0.0 ];
	x = hugePositive.x;
	S = hugePositive.S;
	C = hugePositive.C;

	for ( i = 0; i < x.length; i++ ) {
		y = fresnel( x[i], z, 1, 0 );
		t.equal( y, z, 'returns expected value' );
		if ( y[0] === S[i] ) {
			t.equal( y[0], S[i], 'x: '+x[i]+'. Expected: '+S[i] );
		} else {
			delta = abs( y[0] - S[i] );
			tol = 1.5 * EPS * abs( S[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. S: '+y[0]+'. Expected: '+S[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
		if ( y[1] === C[i] ) {
			t.equal( y[1], C[i], 'x: '+x[i]+'. Expected: '+C[i] );
		} else {
			delta = abs( y[1] - C[i] );
			tol = 1.5 * EPS * abs( C[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. C: '+y[1]+'. Expected: '+C[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function is an odd function of x', function test( t ) {
	var yn;
	var yp;
	var x;
	var z;
	var i;

	for ( i = 0; i < 500; i++ ) {
		x = randu() * 10000.0;
		z = [ 0.0, 0.0 ];
		yn = fresnel( -x, z, 1, 0 );
		t.equal( yn, z, 'returns expected value' );

		z = [ 0.0, 0.0 ];
		yp = fresnel( x, z, 1, 0 );
		t.equal( yp, z, 'returns expected value' );

		t.equal( yp[0], -yn[0], 'S(x) = -S(-x)' );
		t.equal( yp[1], -yn[1], 'C(x) = -C(-x)' );
	}
	t.end();
});

tape( 'the function returns `[0.5, 0.5]` if provided `+infinity`', function test( t ) {
	var v;
	var z;

	z = [ 0.0, 0.0 ];
	v = fresnel( PINF, z, 1, 0 );
	t.equal( v, z, 'returns expected value' );
	t.equal( v[0], 0.5, 'returns 0.5' );
	t.equal( v[1], 0.5, 'returns 0.5' );
	t.end();
});

tape( 'the function returns `[-0.5, -0.5]` if provided `-infinity`', function test( t ) {
	var v;
	var z;

	z = [ 0.0, 0.0 ];
	v = fresnel( NINF, z, 1, 0 );
	t.equal( v, z, 'returns expected value' );
	t.equal( v[0], -0.5, 'returns -0.5' );
	t.equal( v[1], -0.5, 'returns -0.5' );
	t.end();
});

tape( 'the function returns `[NaN, NaN]` if provided a `NaN`', function test( t ) {
	var v;
	var z;

	z = [ 0.0, 0.0 ];
	v = fresnel( NaN, z, 1, 0 );
	t.equal( v, z, 'returns expected value' );
	t.equal( isnan( v[0] ), true, 'returns NaN' );
	t.equal( isnan( v[1] ), true, 'returns NaN' );
	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var out;
	var val;

	out = new Float64Array( 4 );
	val = fresnel( NINF, out, 2, 0 );

	t.strictEqual( val, out, 'returns output array' );
	t.strictEqual( val[ 0 ], -0.5, 'returns expected value' );
	t.strictEqual( val[ 1 ], 0, 'returns expected value' );
	t.strictEqual( val[ 2 ], -0.5, 'returns expected value' );
	t.strictEqual( val[ 3 ], 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an offset', function test( t ) {
	var out;
	var val;

	out = new Float64Array( 4 );
	val = fresnel( NINF, out, 2, 1 );

	t.strictEqual( val, out, 'returns output array' );
	t.strictEqual( val[ 0 ], 0, 'returns expected value' );
	t.strictEqual( val[ 1 ], -0.5, 'returns expected value' );
	t.strictEqual( val[ 2 ], 0, 'returns expected value' );
	t.strictEqual( val[ 3 ], -0.5, 'returns expected value' );

	t.end();
});
