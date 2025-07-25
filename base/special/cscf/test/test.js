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
var isnanf = require( './../../../../base/assert/is-nanf' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var PI = require( '@stdlib/constants/float32/pi' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var cscf = require( './../lib' );


// FIXTURES //

var hugeNegative = require( './fixtures/julia/huge_negative.json' );
var hugePositive = require( './fixtures/julia/huge_positive.json' );
var veryLargeNegative = require( './fixtures/julia/very_large_negative.json' );
var veryLargePositive = require( './fixtures/julia/very_large_positive.json' );
var largeNegative = require( './fixtures/julia/large_negative.json' );
var largePositive = require( './fixtures/julia/large_positive.json' );
var mediumNegative = require( './fixtures/julia/medium_negative.json' );
var mediumPositive = require( './fixtures/julia/medium_positive.json' );
var smallNegative = require( './fixtures/julia/small_negative.json' );
var smallPositive = require( './fixtures/julia/small_positive.json' );
var smaller = require( './fixtures/julia/smaller.json' );
var tinyNegative = require( './fixtures/julia/tiny_negative.json' );
var tinyPositive = require( './fixtures/julia/tiny_positive.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.true( typeof cscf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the cosecant (huge negative values)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = hugeNegative.x;
	expected = hugeNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = cscf( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the cosecant (huge positive values)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = hugePositive.x;
	expected = hugePositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = cscf( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the cosecant (very large positive values)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = veryLargePositive.x;
	expected = veryLargePositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = cscf( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the cosecant (very large negative values)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = veryLargeNegative.x;
	expected = veryLargeNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = cscf( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the cosecant (large positive values)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = largePositive.x;
	expected = largePositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = cscf( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the cosecant (large negative values)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = largeNegative.x;
	expected = largeNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = cscf( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the cosecant (medium positive values)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = mediumPositive.x;
	expected = mediumPositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = cscf( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the cosecant (medium negative values)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = mediumNegative.x;
	expected = mediumNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = cscf( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the cosecant (small positive values)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = smallPositive.x;
	expected = smallPositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = cscf( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the cosecant (small negative values)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = smallNegative.x;
	expected = smallNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = cscf( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the cosecant (smaller values)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = smaller.x;
	expected = smaller.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = cscf( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the cosecant (tiny positive values)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = tinyPositive.x;
	expected = tinyPositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = cscf( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the cosecant (tiny negative values)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = tinyNegative.x;
	expected = tinyNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		expected[ i ] = f32( expected[ i ] );
		y = cscf( x[ i ] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'if provided a multiple of `-pi`, the function does not return `~+infinity` due to floating-point rounding errors', function test( t ) {
	t.notEqual( cscf( -PI ), PINF, 'returns expected value' );
	t.end();
});

tape( 'if provided a multiple of `pi`, the function does not return `~-infinity`', function test( t ) {
	t.notEqual( cscf( PI ), NINF, 'returns expected value' );
	t.end();
});

tape( 'if provided a `NaN`, the function returns `NaN`', function test( t ) {
	var v = cscf( NaN );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `+infinity`, the function returns `NaN`', function test( t ) {
	var v = cscf( PINF );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `-infinity`, the function returns `NaN`', function test( t ) {
	var v = cscf( NINF );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `+0`, the function returns `+infinity`', function test( t ) {
	var v = cscf( 0.0 );
	t.strictEqual( v, PINF, 'returns expected value' );
	t.end();
});

tape( 'if provided `-0`, the function returns `-infinity`', function test( t ) {
	var v = cscf( -0.0 );
	t.strictEqual( v, NINF, 'returns expected value' );
	t.end();
});
