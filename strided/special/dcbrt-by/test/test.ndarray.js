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
var cbrt = require( './../../../../base/special/cbrt' );
var uniform = require( '@stdlib/random/base/uniform' ).factory;
var Float64Array = require( '@stdlib/array/float64' );
var dcbrtBy = require( './../lib/ndarray.js' );


// VARIABLES //

var rand = uniform( -10.0, 10.0 );


// FUNCTIONS //

function accessor( v ) {
	if ( v === void 0 ) {
		return;
	}
	return v;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dcbrtBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 9', function test( t ) {
	t.strictEqual( dcbrtBy.length, 9, 'arity of 9' );
	t.end();
});

tape( 'the function computes the cube root of each indexed strided array element via a callback function', function test( t ) {
	var expected;
	var out;
	var x;
	var i;

	x = new Float64Array( 10 );
	out = new Float64Array( x.length );

	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = rand();
		expected[ i ] = cbrt( x[ i ] );
	}

	dcbrtBy( x.length, x, 1, 0, out, 1, 0, accessor );
	t.deepEqual( out, expected, 'deep equal' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var out;
	var x;
	var N;

	x = new Float64Array([
		rand(), // 0
		rand(),
		rand(), // 1
		rand(),
		rand()  // 2
	]);
	out = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	dcbrtBy( N, x, 2, 0, out, 1, 0, accessor );

	expected = new Float64Array([
		cbrt( x[ 0 ] ),
		cbrt( x[ 2 ] ),
		cbrt( x[ 4 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( out, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var expected;
	var out;
	var x;
	var N;

	x = new Float64Array([
		rand(),
		rand(),
		rand(), // 0
		rand(), // 1
		rand()  // 2
	]);
	out = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	dcbrtBy( N, x, 1, 2, out, 1, 0, accessor );

	expected = new Float64Array([
		cbrt( x[ 2 ] ),
		cbrt( x[ 3 ] ),
		cbrt( x[ 4 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( out, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a destination array stride', function test( t ) {
	var expected;
	var out;
	var x;
	var N;

	x = new Float64Array([
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	]);
	out = new Float64Array([
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	]);
	N = 3;

	dcbrtBy( N, x, 1, 0, out, 2, 0, accessor );

	expected = new Float64Array([
		cbrt( x[ 0 ] ),
		0.0,
		cbrt( x[ 1 ] ),
		0.0,
		cbrt( x[ 2 ] )
	]);

	t.deepEqual( out, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a destination array offset', function test( t ) {
	var expected;
	var out;
	var x;
	var N;

	x = new Float64Array([
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	]);
	out = new Float64Array([
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	]);
	N = 3;

	dcbrtBy( N, x, 1, 0, out, 1, 2, accessor );

	expected = new Float64Array([
		0.0,
		0.0,
		cbrt( x[ 0 ] ),
		cbrt( x[ 1 ] ),
		cbrt( x[ 2 ] )
	]);

	t.deepEqual( out, expected, 'deep equal' );
	t.end();
});

tape( 'the function returns a reference to the destination array', function test( t ) {
	var actual;
	var out;
	var x;

	x = new Float64Array( [ rand(), rand(), rand(), rand(), rand() ] );
	out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	actual = dcbrtBy( x.length, x, 1, 0, out, 1, 0, accessor );

	t.strictEqual( actual, out, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the destination array unchanged', function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ rand(), rand(), rand(), rand(), rand() ] );
	out = new Float64Array([ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	expected = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	dcbrtBy( -1, x, 1, 0, out, 1, 0, accessor );
	t.deepEqual( out, expected, 'returns expected value' );

	dcbrtBy( 0, x, 1, 0, out, 1, 0, accessor );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var out;
	var x;
	var N;

	x = new Float64Array([
		rand(), // 2
		rand(),
		rand(), // 1
		rand(),
		rand()  // 0
	]);
	out = new Float64Array([
		0.0,
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0
	]);
	N = 3;

	dcbrtBy( N, x, -2, x.length-1, out, -1, out.length-2, accessor );

	expected = new Float64Array([
		0.0,
		cbrt( x[ 0 ] ),
		cbrt( x[ 2 ] ),
		cbrt( x[ 4 ] ),
		0.0
	]);

	t.deepEqual( out, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var out;
	var x;
	var N;

	x = new Float64Array([
		rand(),
		rand(), // 0
		rand(),
		rand(), // 1
		rand(),
		rand()  // 2
	]);
	out = new Float64Array([
		0.0,
		0.0,
		0.0,
		0.0, // 2
		0.0, // 1
		0.0  // 0
	]);
	N = 3;

	dcbrtBy( N, x, 2, 1, out, -1, out.length-1, accessor );

	expected = new Float64Array([
		0.0,
		0.0,
		0.0,
		cbrt( x[ 5 ] ),
		cbrt( x[ 3 ] ),
		cbrt( x[ 1 ] )
	]);

	t.deepEqual( out, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports providing a callback execution context', function test( t ) {
	var ctx;
	var out;
	var x;

	x = new Float64Array( [ rand(), rand(), rand(), rand(), rand() ] );
	out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	ctx = {
		'count': 0
	};
	dcbrtBy( x.length, x, 1, 0, out, 1, 0, accessor, ctx );

	t.strictEqual( ctx.count, x.length, 'returns expected value' );
	t.end();

	function accessor( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return v;
	}
});
