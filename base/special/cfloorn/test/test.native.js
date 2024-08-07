/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var cfloorn = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( cfloorn instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cfloorn, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a `NaN` if provided a `NaN`', opts, function test( t ) {
	var v;

	v = cfloorn( new Complex128( NaN, NaN ), 0 );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-0` if provided `-0`', opts, function test( t ) {
	var v;

	v = cfloorn( new Complex128( -0.0, -0.0 ), 0 );
	t.strictEqual( isNegativeZero( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZero( imag( v ) ), true, 'returns expected value' );

	v = cfloorn( new Complex128( -0.0, -0.0 ), -2 );
	t.strictEqual( isNegativeZero( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZero( imag( v ) ), true, 'returns expected value' );

	v = cfloorn( new Complex128( -0.0, -0.0 ), 2 );
	t.strictEqual( isNegativeZero( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZero( imag( v ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `+0` if provided `+0`', opts, function test( t ) {
	var v;

	v = cfloorn( new Complex128( +0.0, +0.0 ), 0 );
	t.strictEqual( isPositiveZero( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( imag( v ) ), true, 'returns expected value' );

	v = cfloorn( new Complex128( +0.0, +0.0 ), -2 );
	t.strictEqual( isPositiveZero( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( imag( v ) ), true, 'returns expected value' );

	v = cfloorn( new Complex128( +0.0, +0.0 ), 2 );
	t.strictEqual( isPositiveZero( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( imag( v ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports rounding real and imaginary components to a desired number of decimals', opts, function test( t ) {
	var v;

	v = cfloorn( new Complex128( -PI, PI ), -2 );
	t.strictEqual( real( v ), -3.15, 'returns expected value' );
	t.strictEqual( imag( v ), 3.14, 'returns expected value' );

	v = cfloorn( new Complex128( PI, -PI ), -2 );
	t.strictEqual( real( v ), 3.14, 'returns expected value' );
	t.strictEqual( imag( v ), -3.15, 'returns expected value' );

	v = cfloorn( new Complex128( 9.99999, 9.9999 ), -2 );
	t.strictEqual( real( v ), 9.99, 'returns expected value' );
	t.strictEqual( imag( v ), 9.99, 'returns expected value' );

	v = cfloorn( new Complex128( -9.99999, -9.9999 ), -2 );
	t.strictEqual( real( v ), -10.0, 'returns expected value' );
	t.strictEqual( imag( v ), -10.0, 'returns expected value' );

	v = cfloorn( new Complex128( 0.0, 0.0 ), 2 );
	t.strictEqual( real( v ), 0.0, 'returns expected value' );
	t.strictEqual( imag( v ), 0.0, 'returns expected value' );

	v = cfloorn( new Complex128( -12368.0, 12368.0 ), -3 );
	t.strictEqual( real( v ), -12368.0, 'returns expected value' );
	t.strictEqual( imag( v ), 12368.0, 'returns expected value' );
	t.end();
});

tape( 'rounding components to a desired number of decimals can result in unexpected behavior', opts, function test( t ) {
	var x;
	var v;

	x = -0.2 - 0.1; // => -0.30000000000000004
	v = cfloorn( new Complex128( x, x ), -16 );
	t.strictEqual( real( v ), -0.3000000000000001, 'returns -0.3000000000000001 and not -0.3' );
	t.strictEqual( imag( v ), -0.3000000000000001, 'returns -0.3000000000000001 and not -0.3' );
	t.end();
});

tape( 'the function supports rounding components to a desired number of digits', opts, function test( t ) {
	var v;

	v = cfloorn( new Complex128( -PI, PI ), 4 );
	t.strictEqual( real( v ), -10000.0, 'returns expected value' );
	t.strictEqual( imag( v ), 0.0, 'returns expected value' );

	v = cfloorn( new Complex128( -12368.0, 12368.0 ), 3 );
	t.strictEqual( real( v ), -13000.0, 'returns expected value' );
	t.strictEqual( imag( v ), 12000.0, 'returns expected value' );

	v = cfloorn( new Complex128( 12363.0, -12363.0 ), 1 );
	t.strictEqual( real( v ), 12360.0, 'returns expected value' );
	t.strictEqual( imag( v ), -12370.0, 'returns expected value' );

	v = cfloorn( new Complex128( PI, -PI ), 3 );
	t.strictEqual( isPositiveZero( real( v ) ), true, 'returns expected value' );
	t.strictEqual( imag( v ), -1000.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns the components unchanged if provided an `n` which is less than the minimum decimal exponential (-324)', opts, function test( t ) {
	var exp;
	var n;
	var x;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		exp = round( randu()*616.0 ) - 308;
		x = (1.0+randu()) * pow( 10.0, exp );
		n = -(round( randu()*1000.0 ) + 325);
		v = cfloorn( new Complex128( x, x ), n );
		t.strictEqual( real( v ), x, 'returns expected value' );
		t.strictEqual( imag( v ), x, 'returns expected value' );
	}
	t.end();
});

tape( 'if a component is too large a double to have decimals and `n < 0`, the component is returned unchanged', opts, function test( t ) {
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
		v = cfloorn( new Complex128( x, x ), n );
		t.strictEqual( real( v ), x, ' returns expected value' );
		t.strictEqual( imag( v ), x, ' returns expected value' );
	}
	t.end();
});

tape( 'if `n > 308` and a component is less than zero, the function returns `-infinity`', opts, function test( t ) {
	var exp;
	var x;
	var n;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		exp = round( randu()*307.0 );
		x = -(1.0+randu()) * pow( 10.0, exp );
		n = round( randu()*100.0 ) + 309;
		v = cfloorn( new Complex128( x, x ), n );
		t.strictEqual( real( v ), NINF, ' returns -infinity' );
		t.strictEqual( imag( v ), NINF, ' returns -infinity' );
	}
	t.end();
});

tape( 'if `n > 308` and a component is greater than or equal to zero, the function returns `+0` (sign preserving)', opts, function test( t ) {
	var exp;
	var x;
	var n;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		exp = round( randu()*307.0 );
		x = (1.0+randu()) * pow( 10.0, exp );
		n = round( randu()*100.0 ) + 309;
		v = cfloorn( new Complex128( x, x ), n );
		t.strictEqual( isPositiveZero( real( v ) ), true, ' returns +0' );
		t.strictEqual( isPositiveZero( imag( v ) ), true, ' returns +0' );
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
		v = cfloorn( new Complex128( x, x ), n[i] );
		if ( real( v ) === expected[i] ) {
			t.strictEqual( real( v ), expected[i], 'returns '+expected[i]+' when provided re='+x+', im='+x+', and n='+n[i]+'.' );
		} else {
			delta = abs( real( v ) - expected[i] );
			tol = EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 're: '+x+'. n: '+n[i]+'. v: '+real( v )+'. expected: '+expected[i]+'. delta: '+delta+'. tol: '+tol );

			delta = abs( imag( v ) - expected[i] );
			tol = EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'im: '+x+'. n: '+n[i]+'. v: '+imag( v )+'. expected: '+expected[i]+'. delta: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'if the function encounters overflow, the function returns the input component', opts, function test( t ) {
	var x;
	var v;

	x = 3.1468234343023397;
	v = cfloorn( new Complex128( x, x ), -314 );
	t.strictEqual( real( v ), x, 'returns expected value' );
	t.strictEqual( imag( v ), x, 'returns expected value' );

	x = -3.1468234343023397;
	v = cfloorn( new Complex128( x, x ), -314 );
	t.strictEqual( real( v ), x, 'returns expected value' );
	t.strictEqual( imag( v ), x, 'returns expected value' );

	x = 9007199254740000;
	v = cfloorn( new Complex128( x, x ), -300 );
	t.strictEqual( real( v ), x, 'returns expected value' );
	t.strictEqual( imag( v ), x, 'returns expected value' );

	x = -9007199254740000;
	v = cfloorn( new Complex128( x, x ), -300 );
	t.strictEqual( real( v ), x, 'returns expected value' );
	t.strictEqual( imag( v ), x, 'returns expected value' );

	t.end();
});
