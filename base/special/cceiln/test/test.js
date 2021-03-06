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
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var PI = require( '@stdlib/constants/float64/pi' );
var EPS = require( '@stdlib/constants/float64/eps' );
var randu = require( '@stdlib/random/base/randu' );
var round = require( './../../../../base/special/round' );
var pow = require( './../../../../base/special/pow' );
var abs = require( './../../../../base/special/abs' );
var isnan = require( './../../../../base/assert/is-nan' );
var isNegativeZero = require( './../../../../base/assert/is-negative-zero' );
var isPositiveZero = require( './../../../../base/assert/is-positive-zero' );
var Float64Array = require( '@stdlib/array/float64' );
var cceiln = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cceiln, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a `NaN` if provided a `NaN`', function test( t ) {
	var v;

	v = cceiln( NaN, NaN, 0 );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	v = cceiln( NaN, NaN, NaN );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	v = cceiln( NaN, NaN, NaN );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `NaNs` if provided `n = +-infinity`', function test( t ) {
	var v;

	v = cceiln( 3.14, 3.14, PINF );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	v = cceiln( 3.14, 3.14, NINF );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-0` if provided `-0`', function test( t ) {
	var v;

	v = cceiln( -0.0, -0.0, 0 );
	t.strictEqual( isNegativeZero( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isNegativeZero( v[ 1 ] ), true, 'returns expected value' );

	v = cceiln( -0.0, -0.0, -2 );
	t.strictEqual( isNegativeZero( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isNegativeZero( v[ 1 ] ), true, 'returns expected value' );

	v = cceiln( -0.0, -0.0, 2 );
	t.strictEqual( isNegativeZero( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isNegativeZero( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `+0` if provided `+0`', function test( t ) {
	var v;

	v = cceiln( +0.0, +0.0, 0 );
	t.strictEqual( isPositiveZero( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( v[ 1 ] ), true, 'returns expected value' );

	v = cceiln( +0.0, +0.0, -2 );
	t.strictEqual( isPositiveZero( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( v[ 1 ] ), true, 'returns expected value' );

	v = cceiln( +0.0, +0.0, 2 );
	t.strictEqual( isPositiveZero( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `+infinity` if provided `+infinity`', function test( t ) {
	var v = cceiln( PINF, PINF, 5 );
	t.strictEqual( v[ 0 ], PINF, 'returns expected value' );
	t.strictEqual( v[ 1 ], PINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-infinity` if provided `-infinity`', function test( t ) {
	var v = cceiln( NINF, NINF, -3 );
	t.strictEqual( v[ 0 ], NINF, 'returns expected value' );
	t.strictEqual( v[ 1 ], NINF, 'returns expected value' );
	t.end();
});

tape( 'the function supports rounding real and imaginary components to a desired number of decimals', function test( t ) {
	t.deepEqual( cceiln( -PI, PI, -2 ), [ -3.14, 3.15 ], 'returns expected value' );
	t.deepEqual( cceiln( PI, -PI, -2 ), [ 3.15, -3.14 ], 'returns expected value' );
	t.deepEqual( cceiln( 9.99999, 9.9999, -2 ), [ 10.0, 10.0 ], 'returns expected value' );
	t.deepEqual( cceiln( -9.99999, -9.99999, -2 ), [ -9.99, -9.99 ], 'returns expected value' );
	t.deepEqual( cceiln( 0.0, 0.0, 2 ), [ 0.0, 0.0 ], 'returns expected value' );
	t.deepEqual( cceiln( -12368.0, 12368.0, -3 ), [ -12368.0, 12368.0 ], 'returns expected value' );
	t.end();
});

tape( 'rounding components to a desired number of decimals can result in unexpected behavior', function test( t ) {
	var x = 0.2 + 0.1; // => 0.30000000000000004
	t.deepEqual( cceiln( x, x, -16 ), [ 0.3000000000000001, 0.3000000000000001 ], 'returns 0.3000000000000001 and not 0.3' );
	t.end();
});

tape( 'the function supports rounding components to a desired number of digits', function test( t ) {
	var v;

	t.deepEqual( cceiln( -PI, PI, 4 ), [ 0.0, 10000.0 ], 'returns expected value' );
	t.deepEqual( cceiln( -12368.0, 12368.0, 3 ), [ -12000.0, 13000.0 ], 'returns expected value' );
	t.deepEqual( cceiln( 12363.0, -12363.0, 1 ), [ 12370.0, -12360.0 ], 'returns expected value' );

	v = cceiln( PI, -PI, 3 );
	t.strictEqual( v[ 0 ], 1000.0, 'returns expected value' );
	t.strictEqual( isNegativeZero( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the components unchanged if provided an `n` which is less than the minimum decimal exponential (-324)', function test( t ) {
	var exp;
	var n;
	var x;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		exp = round( randu()*616.0 ) - 308;
		x = (1.0+randu()) * pow( 10.0, exp );
		n = -(round( randu()*1000.0 ) + 325);
		v = cceiln( x, x, n );
		t.deepEqual( v, [ x, x ], 'returns components when provided re='+x+', im='+x+', n='+n+'.' );
	}
	t.end();
});

tape( 'if a component is too large a double to have decimals and `n < 0`, the component is returned unchanged', function test( t ) {
	var sign;
	var exp;
	var x;
	var n;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		sign = ( randu()<0.5 ) ? -1.0 : 1.0;
		exp = 54 + round( randu()*254.0 );
		x = sign * (1.0+randu()) * pow( 10.0, exp );
		n = -( round( randu()*324.0) );
		v = cceiln( x, x, n );
		t.deepEqual( v, [ x, x ], ' returns components when provided re='+x+', im='+x+', n='+n+'.' );
	}
	t.end();
});

tape( 'if `n > 308` and a component is greater than zero, the function returns `+infinity`', function test( t ) {
	var exp;
	var x;
	var n;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		exp = round( randu()*307.0 );
		x = (1.0+randu()) * pow( 10.0, exp );
		n = round( randu()*100.0 ) + 309;
		v = cceiln( x, x, n );
		t.deepEqual( v, [ PINF, PINF ], ' returns +infinity when provided re='+x+', im='+x+', n='+n+'.' );
	}
	t.end();
});

tape( 'if `n > 308` and a component is less than zero, the function returns `-0` (sign preserving)', function test( t ) {
	var exp;
	var x;
	var n;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		exp = round( randu()*307.0 );
		x = -(1.0+randu()) * pow( 10.0, exp );
		n = round( randu()*100.0 ) + 309;
		v = cceiln( x, x, n );
		t.strictEqual( isNegativeZero( v[ 0 ] ), true, ' returns -0 when provided re='+x+', n='+n+'.' );
		t.strictEqual( isNegativeZero( v[ 1 ] ), true, ' returns -0 when provided im='+x+', n='+n+'.' );
	}
	t.end();
});

tape( 'the function supports rounding very small numbers (including subnormals)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var n;
	var v;
	var i;

	x = 3.1468234343023397 * pow( 10.0, -308 );

	n = [];
	for ( i = -308; i > -325; i-- ) {
		n.push( i );
	}
	expected = [
		4e-308,
		3.2e-308,
		3.15e-308,
		3.147e-308,
		3.1469e-308,
		3.14683e-308,
		3.146824e-308,
		3.1468235e-308,
		3.14682344e-308,
		3.146823435e-308,
		3.1468234344e-308,
		3.14682343431e-308,
		3.146823434303e-308,
		3.1468234343024e-308,
		3.14682343430234e-308,
		3.146823434302340e-308,
		3.1468234343023397e-308
	];

	for ( i = 0; i < n.length; i++ ) {
		v = cceiln( x, x, n[i] );
		if ( v[0] === expected[i] ) {
			t.deepEqual( v, [ expected[i], expected[i] ], 'returns '+expected[i]+' when provided re='+x+', im='+x+', and n='+n[i]+'.' );
		} else {
			delta = abs( v[0] - expected[i] );
			tol = EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 're: '+x+'. n: '+n[i]+'. v: '+v[0]+'. expected: '+expected[i]+'. delta: '+delta+'. tol: '+tol );

			delta = abs( v[1] - expected[i] );
			tol = EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'im: '+x+'. n: '+n[i]+'. v: '+v[1]+'. expected: '+expected[i]+'. delta: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'if the function encounters overflow, the function returns the input component', function test( t ) {
	var x;
	var v;

	x = 3.1468234343023397;
	v = cceiln( x, x, -314 );
	t.deepEqual( v, [ x, x ], 'returns expected value' );

	x = -3.1468234343023397;
	v = cceiln( x, x, -314 );
	t.deepEqual( v, [ x, x ], 'returns expected value' );

	x = 9007199254740000;
	v = cceiln( x, x, -300 );
	t.deepEqual( v, [ x, x ], 'returns expected value' );

	x = -9007199254740000;
	v = cceiln( x, x, -300 );
	t.deepEqual( v, [ x, x ], 'returns expected value' );

	t.end();
});

tape( 'the function rounds real and imaginary components (output array)', function test( t ) {
	var expected;
	var actual;
	var out;

	out = [ 0.0, 0.0 ];
	actual = cceiln( out, -4.2, 5.5, 0 );
	expected = [ -4.0, 6.0 ];

	t.deepEqual( actual, expected, 'returns expected value' );
	t.strictEqual( actual, out, 'returns output value' );

	t.end();
});

tape( 'the function rounds real and imaginary components (output typed array)', function test( t ) {
	var expected;
	var actual;
	var out;

	out = new Float64Array( 2 );
	actual = cceiln( out, 9.99999, 0.1, 0 );
	expected = new Float64Array( [ 10.0, 1.0 ] );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.strictEqual( actual, out, 'returns output value' );

	t.end();
});

tape( 'the function rounds real and imaginary components (output object)', function test( t ) {
	var expected;
	var actual;
	var out;

	out = {};
	actual = cceiln( out, 0.0, 0.0, 0 );
	expected = {
		'0': 0.0,
		'1': 0.0
	};
	t.deepEqual( actual, expected, 'returns expected value' );
	t.strictEqual( actual, out, 'returns output value' );

	t.end();
});
