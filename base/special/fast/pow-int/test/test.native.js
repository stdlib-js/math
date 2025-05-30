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
var abs = require( './../../../../../base/special/abs' );
var randu = require( '@stdlib/random/base/randu' );
var round = require( './../../../../../base/special/round' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var isnan = require( './../../../../../base/assert/is-nan' );
var isPositiveZero = require( './../../../../../base/assert/is-positive-zero' );
var isNegativeZero = require( './../../../../../base/assert/is-negative-zero' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var pow = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( pow instanceof Error )
};


// FIXTURES //

var decimalInteger = require( './fixtures/julia/decimal_integer.json' );
var integerInteger = require( './fixtures/julia/integer_integer.json' );
var multiplesOfTen = require( './fixtures/julia/multiples_of_ten.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof pow, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function accepts two parameters: a base and an exponent', opts, function test( t ) {
	t.strictEqual( pow.length, 2, 'arity is 2' );
	t.end();
});

tape( 'the function evaluates the exponential function (decimal `x`, integer `y`)', opts, function test( t ) {
	var expected;
	var actual;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = decimalInteger.x;
	y = decimalInteger.y;
	expected = decimalInteger.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = pow( x[i], y[i] );
		if ( actual === expected[ i ] ) {
			t.strictEqual( actual, expected[i], 'pow('+x[i]+','+y[i]+') returns '+expected[i] );
		} else {
			delta = abs( actual - expected[i] );
			tol = 70.0 * EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'x: '+x[i]+'. y: '+y[i]+'. v: '+actual+'. expected: '+expected[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the exponential function (integer `x`, integer `y`)', opts, function test( t ) {
	var expected;
	var actual;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = integerInteger.x;
	y = integerInteger.y;
	expected = integerInteger.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = pow( x[i], y[i] );
		if ( expected[ i ] === null ) {
			// Expected value is infinity:
			t.strictEqual( actual, PINF, 'pow('+x[i]+','+y[i]+') returns +infinity' );
		}
		else if ( actual === expected[ i ] ) {
			t.strictEqual( actual, expected[i], 'pow('+x[i]+','+y[i]+') returns '+expected[i] );
		}
		else {
			delta = abs( actual - expected[i] );
			tol = 61.0 * EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'x: '+x[i]+'. y: '+y[i]+'. v: '+actual+'. expected: '+expected[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the exponential function (multiples of ten)', opts, function test( t ) {
	var expected;
	var actual;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = multiplesOfTen.x;
	y = multiplesOfTen.y;
	expected = multiplesOfTen.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = pow( x[i], y[i] );
		if ( actual === expected[ i ] ) {
			t.strictEqual( actual, expected[i], 'pow('+x[i]+','+y[i]+') returns '+expected[i] );
		} else {
			delta = abs( actual - expected[i] );
			tol = 3.75 * EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'x: '+x[i]+'. y: '+y[i]+'. v: '+actual+'. expected: '+expected[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN` for the base', opts, function test( t ) {
	var v;

	v = pow( NaN, 5 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = pow( NaN, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = pow( NaN, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'any number raised to the zero power is `1`', opts, function test( t ) {
	var x;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		x = ( randu() * 1.0e6 ) - 5.0e5;
		v = pow( x, 0 );
		t.strictEqual( v, 1.0, 'pow('+x+',0.0) returns 1' );
	}
	t.strictEqual( pow( PINF, 0 ), 1.0, 'inf^0 = 1' );
	t.strictEqual( pow( NINF, 0 ), 1.0, '(-inf)^0 = 1' );
	t.strictEqual( pow( 0.0, 0 ), 1.0, '0^0 = 1' );
	t.end();
});

tape( 'any number raised to the `-1` power is the reciprocal of that number', opts, function test( t ) {
	var x;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		x = ( randu() * 1.0e6 ) - 5.0e5;
		v = pow( x, -1 );
		t.strictEqual( v, 1 / x, 'pow('+x+',0.0) returns '+( 1 / x ) );
	}
	t.strictEqual( isPositiveZero( pow( PINF, -1 ) ), true, 'inf^-1 = 0' );
	t.strictEqual( isNegativeZero( pow( NINF, -1 ) ), true, '(-inf)^0 = -0' );
	t.strictEqual( pow( 0.0, -1 ), PINF, '0^-1 = +infinity' );
	t.strictEqual( pow( -0.0, -1 ), NINF, '(-0)^-1 = -infinity' );
	t.end();
});

tape( 'unity raised to any power is `1`', opts, function test( t ) {
	var y;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		y = ( randu() * 1.0e6 ) - 5.0e5;
		v = pow( 1.0, y );
		t.strictEqual( v, 1.0, 'pow(1.0,'+y+') returns 1' );
	}
	t.strictEqual( pow( 1.0, 0 ), 1.0, '1^0 = 1' );
	t.end();
});

tape( '`-1` raised to any odd integer is `-1`', opts, function test( t ) {
	var v;
	var i;
	for ( i = -51; i < 53; i += 2 ) {
		v = pow( -1.0, i );
		t.strictEqual( v, -1.0, 'pow(1.0,'+i+') returns -1' );
	}
	t.end();
});

tape( '`+-0` raised to a positive even integer is `0`', opts, function test( t ) {
	var y;
	var i;
	var v;

	for ( i = 0; i < 100; i++ ) {
		y = ( i + 1 ) * 2;
		v = pow( +0.0, y );
		t.strictEqual( isPositiveZero( v ), true, 'pow(0,'+y+') returns +0' );

		v = pow( -0.0, y );
		t.strictEqual( isPositiveZero( v ), true, 'pow(-0,'+y+') returns +0' );
	}
	t.end();
});

tape( '`+-0` raised to a positive odd integer is `+-0`', opts, function test( t ) {
	var i;
	var v;

	for ( i = 1; i < 101; i += 2 ) {
		v = pow( +0.0, i );
		t.strictEqual( isPositiveZero( v ), true, 'pow(0,'+i+') returns +0' );

		v = pow( -0.0, i );
		t.strictEqual( isNegativeZero( v ), true, 'pow(-0,'+i+') returns -0' );
	}
	t.end();
});

tape( '`+-0` raised to a negative even integer is `+infinity`', opts, function test( t ) {
	var y;
	var i;
	var v;

	for ( i = 0; i < 100; i++ ) {
		y = -( i + 1 ) * 2;
		v = pow( +0.0, y );
		t.strictEqual( v, PINF, 'pow(0,'+y+') returns +infinity' );

		v = pow( -0.0, y );
		t.strictEqual( v, PINF, 'pow(-0,'+y+') returns +infinity' );
	}
	t.end();
});

tape( '`+-0` raised to a negative odd integer is `+-infinity`', opts, function test( t ) {
	var i;
	var v;

	for ( i = -101; i < 0; i += 2 ) {
		v = pow( +0.0, i );
		t.strictEqual( v, PINF, 'pow(0,'+i+') returns +infinity' );

		v = pow( -0.0, i );
		t.strictEqual( v, NINF, 'pow(-0,'+i+') returns -infinity' );
	}
	t.end();
});

tape( 'the function returns `(-0)^y` if `-infinity` is raised to a `y` power', opts, function test( t ) {
	var y;
	var v;
	var i;

	for ( i = 0; i < 100; i++ ) {
		y = round( randu() * 100.0 );
		v = pow( NINF, y );
		t.strictEqual( v, pow( -0.0, -y ), 'pow(-infinity,'+y+') returns pow(-0,-'+y+')' );
	}

	v = pow( NINF, 5 );
	t.strictEqual( v, pow( -0.0, -5 ), 'pow(-infinity,5) returns pow(-0,-5)' );

	v = pow( NINF, 2 );
	t.strictEqual( v, pow( -0.0, -2 ), 'pow(-infinity,2) returns pow(-0,-2)' );

	v = pow( NINF, -5 );
	t.strictEqual( v, pow( -0.0, 5 ), 'pow(-infinity,-5) returns pow(-0,5)' );

	v = pow( NINF, -2 );
	t.strictEqual( v, pow( -0.0, 2 ), 'pow(-infinity,-2) returns pow(-0,2)' );

	t.end();
});

tape( 'the function returns `0` if `+infinity` is raised to any negative finite integer', opts, function test( t ) {
	var y;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		y = -round( randu() * 1.0e5 ) - 1;
		v = pow( PINF, y );
		t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns `+infinity` if `+infinity` is raised to any positive finite integer', opts, function test( t ) {
	var y;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		y = round( randu() * 1.0e5 ) + 1;
		v = pow( PINF, y );
		t.strictEqual( v, PINF, 'returns expected value' );
	}
	t.end();
});
