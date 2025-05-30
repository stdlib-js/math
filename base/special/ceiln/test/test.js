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
var PI = require( '@stdlib/constants/float64/pi' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var randu = require( '@stdlib/random/base/randu' );
var round = require( './../../../../base/special/round' );
var pow = require( './../../../../base/special/pow' );
var abs = require( './../../../../base/special/abs' );
var isnan = require( './../../../../base/assert/is-nan' );
var isNegativeZero = require( './../../../../base/assert/is-negative-zero' );
var isPositiveZero = require( './../../../../base/assert/is-positive-zero' );
var ceiln = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ceiln, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', function test( t ) {
	var v;

	v = ceiln( NaN, -2 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = ceiln( 12368.0, NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = ceiln( NaN, NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `NaN` if provided `n = +-infinity`', function test( t ) {
	var v;

	v = ceiln( PI, PINF );
	t.strictEqual( isnan( v ), true, '' );

	v = ceiln( PI, NINF );
	t.strictEqual( isnan( v ), true, '' );

	t.end();
});

tape( 'the function returns `+infinity` if provided `+infinity`', function test( t ) {
	var v = ceiln( PINF, 5 );
	t.strictEqual( v, PINF, 'returns +infinity' );
	t.end();
});

tape( 'the function returns `-infinity` if provided `-infinity`', function test( t ) {
	var v = ceiln( NINF, -3 );
	t.strictEqual( v, NINF, 'returns -infinity' );
	t.end();
});

tape( 'the function returns `-0` if provided `-0`', function test( t ) {
	var v;

	v = ceiln( -0.0, 0 );
	t.strictEqual( isNegativeZero( v ), true, 'returns -0' );

	v = ceiln( -0.0, -2 );
	t.strictEqual( isNegativeZero( v ), true, 'returns -0' );

	v = ceiln( -0.0, 2 );
	t.strictEqual( isNegativeZero( v ), true, 'returns -0' );

	t.end();
});

tape( 'the function returns `+0` if provided `+0`', function test( t ) {
	var v;

	v = ceiln( 0.0, 0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns +0' );

	v = ceiln( +0.0, -2 );
	t.strictEqual( isPositiveZero( v ), true, 'returns +0' );

	v = ceiln( +0.0, 2 );
	t.strictEqual( isPositiveZero( v ), true, 'returns +0' );

	t.end();
});

tape( 'the function supports rounding a numeric value to a desired number of decimals', function test( t ) {
	t.strictEqual( ceiln( PI, -2 ), 3.15, 'equals 3.15' );
	t.strictEqual( ceiln( -PI, -2 ), -3.14, 'equals -3.14' );
	t.strictEqual( ceiln( 9.99999, -2 ), 10.0, 'equals 10' );
	t.strictEqual( ceiln( -9.99999, -2 ), -9.99, 'equals -9.99' );
	t.strictEqual( ceiln( 0.0, 2 ), 0.0, 'equals 0' );
	t.strictEqual( ceiln( 12368.0, -3 ), 12368.0, 'equals 12368' );
	t.strictEqual( ceiln( -12368.0, -3 ), -12368.0, 'equals -12368' );
	t.end();
});

tape( 'rounding a numeric value to a desired number of decimals can result in unexpected behavior', function test( t ) {
	var x = 0.2 + 0.1; // => 0.30000000000000004
	t.strictEqual( ceiln( x, -16 ), 0.3000000000000001, 'equals 0.3000000000000001 and not 0.3' );
	t.end();
});

tape( 'the function supports rounding a numeric value to a desired number of digits', function test( t ) {
	t.strictEqual( ceiln( PI, 4 ), 10000.0, 'equals 10000' );
	t.strictEqual( ceiln( 12368.0, 3 ), 13000.0, 'equals 13000' );
	t.strictEqual( ceiln( 12363.0, 1 ), 12370.0, 'equals 12370' );
	t.strictEqual( isNegativeZero( ceiln( -PI, 3 ) ), true, 'equals -0' );
	t.strictEqual( ceiln( -12368.0, 3 ), -12000.0, 'equals -12000' );
	t.strictEqual( ceiln( -12368.0, 1 ), -12360.0, 'equals -12360' );
	t.end();
});

tape( 'the function returns the input value if provided an `n` which is less than the minimum decimal exponential (-324)', function test( t ) {
	var exp;
	var n;
	var x;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		exp = round( randu()*616.0 ) - 308;
		x = (1.0+randu()) * pow( 10.0, exp );
		n = -(round( randu()*1000.0 ) + 325);
		v = ceiln( x, n );
		t.strictEqual( v, x, 'returns input value when provided x='+x+', n='+n+'.' );
	}
	t.end();
});

tape( 'if `x` is too large a double to have decimals and `n < 0`, the input value is returned', function test( t ) {
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
		v = ceiln( x, n );
		t.strictEqual( x, v, ' returns input value when provided x='+x+', n='+n+'.' );
	}
	t.end();
});

tape( 'if `n > 308` and `x > 0`, the function returns `+infinity`', function test( t ) {
	var exp;
	var x;
	var n;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		exp = round( randu()*307.0 );
		x = (1.0+randu()) * pow( 10.0, exp );
		n = round( randu()*100.0 ) + 309;
		v = ceiln( x, n );
		t.strictEqual( v, PINF, ' returns +infinity when provided x='+x+', n='+n+'.' );
	}
	t.end();
});

tape( 'if `n > 308` and `x < 0`, the function returns `-0` (sign preserving)', function test( t ) {
	var exp;
	var x;
	var n;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		exp = round( randu()*307.0 );
		x = -(1.0+randu()) * pow( 10.0, exp );
		n = round( randu()*100.0 ) + 309;
		v = ceiln( x, n );
		t.strictEqual( isNegativeZero( v ), true, ' returns -0 when provided x='+x+', n='+n+'.' );
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
		v = ceiln( x, n[i] );
		if ( v === expected[i] ) {
			t.strictEqual( v, expected[ i ], 'returns '+expected[i]+' when provided x='+x+' and n='+n[i]+'.' );
		} else {
			delta = abs( v - expected[i] );
			tol = EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'x: '+x+'. n: '+n[i]+'. v: '+v+'. expected: '+expected[i]+'. delta: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'if the function encounters overflow, the function returns the input value', function test( t ) {
	var x;
	var v;

	x = 3.1468234343023397;
	v = ceiln( x, -314 );
	t.strictEqual( v, x, 'returns the input value' );

	x = -3.1468234343023397;
	v = ceiln( x, -314 );
	t.strictEqual( v, x, 'returns the input value' );

	x = 9007199254740000;
	v = ceiln( x, -300 );
	t.strictEqual( v, x, 'returns the input value' );

	x = -9007199254740000;
	v = ceiln( x, -300 );
	t.strictEqual( v, x, 'returns the input value' );

	t.end();
});
