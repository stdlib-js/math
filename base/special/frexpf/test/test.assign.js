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
var NINF = require( '@stdlib/constants/float32/ninf' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var BIAS = require( '@stdlib/constants/float32/exponent-bias' );
var randu = require( '@stdlib/random/base/randu' );
var roundf = require( './../../../../base/special/roundf' );
var pow = require( './../../../../base/special/pow' ); // TODO: replace with `powf` when available
var absf = require( './../../../../base/special/absf' );
var isNegativeZerof = require( './../../../../base/assert/is-negative-zerof' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var Float32Array = require( '@stdlib/array/float32' );
var frexpf = require( './../lib/assign.js' );


// FIXTURES //

var small = require( './fixtures/julia/x_1e-20_1e-38.json' );
var medium = require( './fixtures/julia/x_-1e3_1e3.json' );
var large = require( './fixtures/julia/x_1e20_1e38.json' );
var subnormal = require( './fixtures/julia/x_1e-40_1e-45.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof frexpf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function splits a floating-point number into a normalized fraction and an integer power of two (small `x`)', function test( t ) {
	var expected;
	var out;
	var x;
	var f;
	var i;

	x = small.x;
	expected = small.expected;
	for ( i = 0; i < x.length; i++ ) {
		expected[ i ][ 0 ] = f32( expected[ i ][ 0 ] );
		out = new Float32Array( 2 );
		f = frexpf( x[i], out, 1, 0 );
		t.strictEqual( f, out, 'returns output array' );
		t.deepEqual( f, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function splits a floating-point number into a normalized fraction and an integer power of two (medium `x`)', function test( t ) {
	var expected;
	var out;
	var x;
	var f;
	var i;

	x = medium.x;
	expected = medium.expected;
	for ( i = 0; i < x.length; i++ ) {
		expected[ i ][ 0 ] = f32( expected[ i ][ 0 ] );
		out = new Float32Array( 2 );
		f = frexpf( x[i], out, 1, 0 );
		t.strictEqual( f, out, 'returns output array' );
		t.deepEqual( f, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function splits a floating-point number into a normalized fraction and an integer power of two (large `x`)', function test( t ) {
	var expected;
	var out;
	var x;
	var f;
	var i;

	x = large.x;
	expected = large.expected;
	for ( i = 0; i < x.length; i++ ) {
		expected[ i ][ 0 ] = f32( expected[ i ][ 0 ] );
		out = new Float32Array( 2 );
		f = frexpf( x[i], out, 1, 0 );
		t.strictEqual( f, out, 'returns output array' );
		t.deepEqual( f, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function splits a floating-point number into a normalized fraction and an integer power of two (subnormal `x`)', function test( t ) {
	var expected;
	var out;
	var x;
	var f;
	var i;

	x = subnormal.x;
	expected = subnormal.expected;
	for ( i = 0; i < x.length; i++ ) {
		expected[ i ][ 0 ] = f32( expected[ i ][ 0 ] );
		out = new Float32Array( 2 );
		f = frexpf( x[i], out, 1, 0 );
		t.strictEqual( f, out, 'returns output array' );
		t.deepEqual( f, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the returned normalized fraction and exponent satisfy the relation `x = frac * 2**exp`', function test( t ) {
	var sign;
	var frac;
	var exp;
	var out;
	var x;
	var f;
	var i;

	for ( i = 0; i < 1000; i++ ) {
		if ( randu() < 0.5 ) {
			sign = f32( -1.0 );
		} else {
			sign = f32( 1.0 );
		}
		frac = f32( randu()*10.0 );
		exp = roundf( randu()*76.0 ) - 38;
		x = f32( sign * frac * f32( pow( 10.0, exp ) ) );
		out = new Float32Array( 2 );
		f = frexpf( x, out, 1, 0 );
		t.strictEqual( f, out, 'returns output array' );

		if ( f[ 1 ] > BIAS ) {
			f = f32( f[ 0 ] * pow( 2.0, BIAS ) * pow( 2.0, f[1]-BIAS ) );
		} else {
			f = f32( f[ 0 ] * pow( 2.0, f[ 1 ] ) );
		}
		t.strictEqual( f, x, 'returns expected value' );
	}
	t.end();
});

tape( 'the absolute value of the normalized fraction is on the interval `[1/2,1)`', function test( t ) {
	var sign;
	var frac;
	var exp;
	var out;
	var x;
	var f;
	var i;

	for ( i = 0; i < 1000; i++ ) {
		if ( randu() < 0.5 ) {
			sign = f32( -1.0 );
		} else {
			sign = f32( 1.0 );
		}
		frac = f32( randu()*10.0 );
		exp = roundf( randu()*74.0 ) - 37;
		x = f32( sign * frac * f32( pow( 10.0, exp ) ) );
		out = new Float32Array( 2 );
		f = frexpf( x, out, 1, 0 );
		t.strictEqual( f, out, 'returns output array' );

		// Compute the absolute value of the normalized fraction:
		f = absf( f[ 0 ] );
		t.ok( f >= 0.5 && f < 1.0, 'returns expected value' );
	}
	t.end();
});

tape( 'if provided `+0`, the function returns `[0,0]`', function test( t ) {
	var out;
	var f;

	out = new Float32Array( 2 );
	f = frexpf( 0.0, out, 1, 0 );
	t.strictEqual( f, out, 'returns output array' );
	t.deepEqual( f, [ 0.0, 0 ], 'returns expected value' );
	t.end();
});

tape( 'if provided `-0`, the function returns `[-0,0]`', function test( t ) {
	var out;
	var f;

	out = new Float32Array( 2 );
	f = frexpf( -0.0, out, 1, 0 );
	t.strictEqual( f, out, 'returns output array' );
	t.strictEqual( isNegativeZerof( f[0] ), true, 'returns expected value' );
	t.deepEqual( f, [ -0.0, 0 ], 'returns expected value' );
	t.end();
});

tape( 'if provided `+infinity`, the function returns `[+infinity,0]`', function test( t ) {
	var out;
	var f;

	out = new Float32Array( 2 );
	f = frexpf( PINF, out, 1, 0 );
	t.strictEqual( f, out, 'returns output array' );
	t.deepEqual( f, [ PINF, 0 ], 'returns expected value' );
	t.end();
});

tape( 'if provided `-infinity`, the function returns `[-infinity,0]`', function test( t ) {
	var out;
	var f;

	out = new Float32Array( 2 );
	f = frexpf( NINF, out, 1, 0 );
	t.strictEqual( f, out, 'returns output array' );
	t.deepEqual( f, [ NINF, 0 ], 'returns expected value' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `[NaN,0]`', function test( t ) {
	var out;
	var f;

	out = new Float32Array( 2 );
	f = frexpf( NaN, out, 1, 0 );
	t.strictEqual( f, out, 'returns output array' );
	t.strictEqual( isnanf( f[0] ), true, 'returns expected value' );
	t.strictEqual( f[ 1 ], 0, 'returns expected value' );
	t.end();
});

tape( 'the function supports providing an output array', function test( t ) {
	var out;
	var f;

	out = [ 0.0, 0 ];
	f = frexpf( 4.0, out, 1, 0 );

	t.strictEqual( f, out, 'returns output array' );
	t.strictEqual( f[ 0 ], 0.5, 'returns expected value' );
	t.strictEqual( f[ 1 ], 3, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing an output typed array', function test( t ) {
	var out;
	var f;

	out = new Float32Array( 2 );
	f = frexpf( 4.0, out, 1, 0 );

	t.strictEqual( f, out, 'returns output array' );
	t.strictEqual( f[ 0 ], 0.5, 'returns expected value' );
	t.strictEqual( f[ 1 ], 3, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var out;
	var val;

	out = new Float32Array( 4 );
	val = frexpf( 4.0, out, 2, 0 );

	t.strictEqual( val, out, 'returns output array' );
	t.strictEqual( val[ 0 ], 0.5, 'returns expected value' );
	t.strictEqual( val[ 1 ], 0, 'returns expected value' );
	t.strictEqual( val[ 2 ], 3, 'returns expected value' );
	t.strictEqual( val[ 3 ], 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an offset', function test( t ) {
	var out;
	var val;

	out = new Float32Array( 4 );
	val = frexpf( 4.0, out, 2, 1 );

	t.strictEqual( val, out, 'returns output array' );
	t.strictEqual( val[ 0 ], 0, 'returns expected value' );
	t.strictEqual( val[ 1 ], 0.5, 'returns expected value' );
	t.strictEqual( val[ 2 ], 0, 'returns expected value' );
	t.strictEqual( val[ 3 ], 3, 'returns expected value' );

	t.end();
});
