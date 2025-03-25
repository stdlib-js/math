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
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var truncn = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( truncn instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof truncn, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', opts, function test( t ) {
	var v;

	v = truncn( NaN, -2 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+infinity` if provided `+infinity`', opts, function test( t ) {
	var v = truncn( PINF, 5 );
	t.strictEqual( v, PINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-infinity` if provided `-infinity`', opts, function test( t ) {
	var v = truncn( NINF, -3 );
	t.strictEqual( v, NINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-0` if provided `-0`', opts, function test( t ) {
	var v;

	v = truncn( -0.0, 0 );
	t.strictEqual( isNegativeZero( v ), true, 'returns expected value' );

	v = truncn( -0.0, -2 );
	t.strictEqual( isNegativeZero( v ), true, 'returns expected value' );

	v = truncn( -0.0, 2 );
	t.strictEqual( isNegativeZero( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `+0` if provided `+0`', opts, function test( t ) {
	var v;

	v = truncn( 0.0, 0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	v = truncn( +0.0, -2 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	v = truncn( +0.0, 2 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports rounding a numeric value to a desired number of decimals', opts, function test( t ) {
	t.strictEqual( truncn( PI, -4 ), 3.1415, 'returns expected value' );
	t.strictEqual( truncn( -PI, -2 ), -3.14, 'returns expected value' );
	t.strictEqual( truncn( 9.99999, -2 ), 9.99, 'returns expected value' );
	t.strictEqual( truncn( -9.99999, -2 ), -9.99, 'returns expected value' );
	t.strictEqual( truncn( 0.0, 2 ), 0.0, 'returns expected value' );
	t.strictEqual( truncn( 12368.0, -3 ), 12368.0, 'returns expected value' );
	t.strictEqual( truncn( -12368.0, -3 ), -12368.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports rounding a numeric value to a desired number of digits', opts, function test( t ) {
	t.strictEqual( truncn( PI, 4 ), 0.0, 'returns expected value' );
	t.strictEqual( truncn( 12368.0, 3 ), 12000.0, 'returns expected value' );
	t.strictEqual( truncn( 12363.0, 1 ), 12360.0, 'returns expected value' );
	t.strictEqual( isPositiveZero( truncn( PI, 3 ) ), true, 'returns expected value' );
	t.strictEqual( truncn( -12368.0, 3 ), -12000.0, 'returns expected value' );
	t.strictEqual( truncn( -12368.0, 1 ), -12360.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns the input value if provided an `n` which is less than the minimum decimal exponential (-324)', opts, function test( t ) {
	var exp;
	var n;
	var x;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		exp = round( randu()*616.0 ) - 308;
		x = (1.0+randu()) * pow( 10.0, exp );
		n = -(round( randu()*1000.0 ) + 325);
		v = truncn( x, n );
		t.strictEqual( v, x, 'returns expected value when provided x='+x+', n='+n+'.' );
	}
	t.end();
});

tape( 'if `x` is too large a double to have decimals and `n < 0`, the input value is returned', opts, function test( t ) {
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
		v = truncn( x, n );
		t.strictEqual( x, v, ' returns expected value when provided x='+x+', n='+n+'.' );
	}
	t.end();
});

tape( 'if `n > 308` and `x < 0`, the function returns `-0`', opts, function test( t ) {
	var exp;
	var x;
	var n;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		exp = round( randu()*307.0 );
		x = -(1.0+randu()) * pow( 10.0, exp );
		n = round( randu()*100.0 ) + 309;
		v = truncn( x, n );
		t.strictEqual( isNegativeZero( v ), true, ' returns expected value when provided x='+x+', n='+n+'.' );
	}
	t.end();
});

tape( 'if `n > 308` and `x > 0`, the function returns `+0`', opts, function test( t ) {
	var exp;
	var x;
	var n;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		exp = round( randu()*307.0 );
		x = (1.0+randu()) * pow( 10.0, exp );
		n = round( randu()*100.0 ) + 309;
		v = truncn( x, n );
		t.strictEqual( isPositiveZero( v ), true, ' returns expected value when provided x='+x+', n='+n+'.' );
	}
	t.end();
});

tape( 'the function supports rounding very small numbers (including subnormals)', opts, function test( t ) {
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
		3e-308,
		3.1e-308,
		3.14e-308,
		3.146e-308,
		3.1468e-308,
		3.14682e-308,
		3.146823e-308,
		3.1468234e-308,
		3.14682343e-308,
		3.146823434e-308,
		3.1468234343e-308,
		3.14682343430e-308,
		3.146823434302e-308,
		3.1468234343023e-308,
		3.14682343430234e-308, // 3.1468234343023397e-308 * 1e308 = 3.14682343430234
		3.146823434302340e-308,  // 3.1468234343023397e-308 * 1e308 = 3.14682343430234
		3.1468234343023397e-308
	];

	for ( i = 0; i < n.length; i++ ) {
		v = truncn( x, n[i] );
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

tape( 'if the function encounters overflow, the function returns the input value', opts, function test( t ) {
	var x;
	var v;

	x = 3.1468234343023397;
	v = truncn( x, -314 );
	t.strictEqual( v, x, 'returns expected value' );

	x = -3.1468234343023397;
	v = truncn( x, -314 );
	t.strictEqual( v, x, 'returns expected value' );

	x = 9007199254740000;
	v = truncn( x, -300 );
	t.strictEqual( v, x, 'returns expected value' );

	x = -9007199254740000;
	v = truncn( x, -300 );
	t.strictEqual( v, x, 'returns expected value' );

	t.end();
});
