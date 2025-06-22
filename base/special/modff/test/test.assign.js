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
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var isNegativeZerof = require( './../../../../base/assert/is-negative-zerof' );
var isPositiveZerof = require( './../../../../base/assert/is-positive-zerof' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var Float32Array = require( '@stdlib/array/float32' );
var modff = require( './../lib/assign.js' );


// FIXTURES //

var subnormal = require( './fixtures/julia/subnormal.json' );
var small = require( './fixtures/julia/small.json' );
var medium = require( './fixtures/julia/medium.json' );
var large = require( './fixtures/julia/large.json' );
var huge = require( './fixtures/julia/huge.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof modff, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function decomposes a number into integral and fractional parts (small values)', function test( t ) {
	var integral;
	var parts;
	var frac;
	var out;
	var x;
	var i;

	integral = small.integral;
	frac = small.frac;
	x = small.x;
	for ( i = 0; i < x.length; i++ ) {
		out = [ 0.0, 0.0 ];
		integral[ i ] = f32( integral[ i ] );
		frac[ i ] = f32( frac[ i ] );
		parts = modff( x[ i ], out, 1, 0 );
		t.equal( parts, out, 'returns output array' );
		t.strictEqual( parts[0], integral[i], 'returns expected value' );
		t.strictEqual( parts[1], frac[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function decomposes a number into integral and fractional parts (medium values)', function test( t ) {
	var integral;
	var parts;
	var frac;
	var out;
	var x;
	var i;

	integral = medium.integral;
	frac = medium.frac;
	x = medium.x;
	for ( i = 0; i < x.length; i++ ) {
		out = [ 0.0, 0.0 ];
		integral[ i ] = f32( integral[ i ] );
		frac[ i ] = f32( frac[ i ] );
		parts = modff( x[ i ], out, 1, 0 );
		t.equal( parts, out, 'returns output array' );
		t.strictEqual( parts[0], integral[i], 'returns expected value' );
		t.strictEqual( parts[1], frac[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function decomposes a number into integral and fractional parts (large values)', function test( t ) {
	var integral;
	var parts;
	var frac;
	var out;
	var x;
	var i;

	integral = large.integral;
	frac = large.frac;
	x = large.x;
	for ( i = 0; i < x.length; i++ ) {
		out = [ 0.0, 0.0 ];
		integral[ i ] = f32( integral[ i ] );
		frac[ i ] = f32( frac[ i ] );
		parts = modff( x[ i ], out, 1, 0 );
		t.equal( parts, out, 'returns output array' );
		t.strictEqual( parts[0], integral[i], 'returns expected value' );
		t.strictEqual( parts[1], frac[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function decomposes a number into integral and fractional parts (huge values)', function test( t ) {
	var integral;
	var parts;
	var frac;
	var out;
	var x;
	var i;

	integral = huge.integral;
	frac = huge.frac;
	x = huge.x;
	for ( i = 0; i < x.length; i++ ) {
		out = [ 0.0, 0.0 ];
		integral[ i ] = f32( integral[ i ] );
		frac[ i ] = f32( frac[ i ] );
		parts = modff( x[ i ], out, 1, 0 );
		t.equal( parts, out, 'returns output array' );
		t.strictEqual( parts[0], integral[i], 'returns expected value' );
		t.strictEqual( parts[1], frac[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function decomposes a number into integral and fractional parts (subnormal values)', function test( t ) {
	var integral;
	var parts;
	var frac;
	var out;
	var x;
	var i;

	integral = subnormal.integral;
	frac = subnormal.frac;
	x = subnormal.x;
	for ( i = 0; i < x.length; i++ ) {
		out = [ 0.0, 0.0 ];
		integral[ i ] = f32( integral[ i ] );
		frac[ i ] = f32( frac[ i ] );
		parts = modff( x[ i ], out, 1, 0 );
		t.equal( parts, out, 'returns output array' );
		t.strictEqual( parts[0], integral[i], 'returns expected value' );
		t.strictEqual( parts[1], frac[i], 'returns expected value' );
	}
	t.end();
});

tape( 'if provided `+0`, the function returns `[+0,+0]`', function test( t ) {
	var parts;
	var out;

	out = [ 0.0, 0.0 ];
	parts = modff( +0.0, out, 1, 0 );
	t.equal( parts, out, 'returns output array' );
	t.strictEqual( isPositiveZerof( parts[0] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZerof( parts[1] ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `-0`, the function returns `[-0,-0]`', function test( t ) {
	var parts;
	var out;

	out = [ 0.0, 0.0 ];
	parts = modff( -0.0, out, 1, 0 );
	t.equal( parts, out, 'returns output array' );
	t.strictEqual( isNegativeZerof( parts[0] ), true, 'returns expected value' );
	t.strictEqual( isNegativeZerof( parts[1] ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `+infinity`, the function returns `[+infinity,+0]`', function test( t ) {
	var parts;
	var out;

	out = [ 0.0, 0.0 ];
	parts = modff( PINF, out, 1, 0 );
	t.equal( parts, out, 'returns output array' );
	t.strictEqual( parts[0], PINF, 'returns expected value' );
	t.strictEqual( isPositiveZerof( parts[1] ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `-infinity`, the function returns `[-infinity,-0]`', function test( t ) {
	var parts;
	var out;

	out = [ 0.0, 0.0 ];
	parts = modff( NINF, out, 1, 0 );
	t.equal( parts, out, 'returns output array' );
	t.strictEqual( parts[0], NINF, 'returns expected value' );
	t.strictEqual( isNegativeZerof( parts[1] ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `[NaN,NaN]`', function test( t ) {
	var parts;
	var out;

	out = [ 0.0, 0.0 ];
	parts = modff( NaN, out, 1, 0 );
	t.equal( parts, out, 'returns output array' );
	t.strictEqual( isnanf( parts[0] ), true, 'returns expected value' );
	t.strictEqual( isnanf( parts[1] ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports providing an output array', function test( t ) {
	var parts;
	var out;

	out = [ 0.0, 0.0 ];
	parts = modff( 3.14, out, 1, 0 );

	t.strictEqual( parts, out, 'returns output array' );
	t.strictEqual( parts[ 0 ], 3.0, 'returns expected value' );
	t.strictEqual( parts[ 1 ], 0.1400001049041748, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing an output typed array', function test( t ) {
	var parts;
	var out;

	out = new Float32Array( 2 );
	parts = modff( 3.14, out, 1, 0 );

	t.strictEqual( parts, out, 'returns output typed array' );
	t.strictEqual( parts[ 0 ], 3.0, 'returns expected value' );
	t.strictEqual( parts[ 1 ], 0.1400001049041748, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var out;
	var val;

	out = new Float32Array( 4 );
	val = modff( 3.14, out, 2, 0 );

	t.strictEqual( val, out, 'returns output array' );
	t.strictEqual( val[ 0 ], 3.0, 'returns expected value' );
	t.strictEqual( val[ 1 ], 0, 'returns expected value' );
	t.strictEqual( val[ 2 ], 0.1400001049041748, 'returns expected value' );
	t.strictEqual( val[ 3 ], 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an offset', function test( t ) {
	var out;
	var val;

	out = new Float32Array( 4 );
	val = modff( 3.14, out, 2, 1 );

	t.strictEqual( val, out, 'returns output array' );
	t.strictEqual( val[ 0 ], 0, 'returns expected value' );
	t.strictEqual( val[ 1 ], 3.0, 'returns expected value' );
	t.strictEqual( val[ 2 ], 0, 'returns expected value' );
	t.strictEqual( val[ 3 ], 0.1400001049041748, 'returns expected value' );

	t.end();
});
