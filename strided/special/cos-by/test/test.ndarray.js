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
var cos = require( './../../../../base/special/cos' );
var uniform = require( '@stdlib/random/base/uniform' ).factory;
var cosBy = require( './../lib/ndarray.js' );


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
	t.strictEqual( typeof cosBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 9', function test( t ) {
	t.strictEqual( cosBy.length, 9, 'arity of 9' );
	t.end();
});

tape( 'the function computes the cosine via a callback function', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = [];
	y = [];

	expected = [];
	for ( i = 0; i < 10; i++ ) {
		x.push( rand() );
		y.push( 0.0 );
		expected.push( cos( x[ i ] ) );
	}

	cosBy( x.length, x, 1, 0, y, 1, 0, accessor );
	t.deepEqual( y, expected, 'deep equal' );

	x = new Array( 5 ); // sparse array
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	cosBy( x.length, x, 1, 0, y, 1, 0, accessor );
	t.deepEqual( y, expected, 'deep equal' );

	x = new Array( 5 ); // sparse array
	x[ 2 ] = rand();
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = y.slice();
	expected[ 2 ] = cos( x[ 2 ] );

	cosBy( x.length, x, 1, 0, y, 1, 0, accessor );
	t.deepEqual( y, expected, 'deep equal' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = [
		rand(), // 0
		rand(),
		rand(), // 1
		rand(),
		rand()  // 2
	];
	y = [
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	];
	N = 3;

	cosBy( N, x, 2, 0, y, 1, 0, accessor );

	expected = [
		cos( x[ 0 ] ),
		cos( x[ 2 ] ),
		cos( x[ 4 ] ),
		0.0,
		0.0
	];

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = [
		rand(),
		rand(),
		rand(), // 0
		rand(), // 1
		rand()  // 2
	];
	y = [
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	];
	N = 3;

	cosBy( N, x, 1, 2, y, 1, 0, accessor );

	expected = [
		cos( x[ 2 ] ),
		cos( x[ 3 ] ),
		cos( x[ 4 ] ),
		0.0,
		0.0
	];

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = [
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	];
	y = [
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	];
	N = 3;

	cosBy( N, x, 1, 0, y, 2, 0, accessor );

	expected = [
		cos( x[ 0 ] ),
		0.0,
		cos( x[ 1 ] ),
		0.0,
		cos( x[ 2 ] )
	];

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = [
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	];
	y = [
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	];
	N = 3;

	cosBy( N, x, 1, 0, y, 1, 2, accessor );

	expected = [
		0.0,
		0.0,
		cos( x[ 0 ] ),
		cos( x[ 1 ] ),
		cos( x[ 2 ] )
	];

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function returns a reference to the destination array', function test( t ) {
	var out;
	var x;
	var y;

	x = [ rand(), rand(), rand(), rand(), rand() ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	out = cosBy( x.length, x, 1, 0, y, 1, 0, accessor );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `y` unchanged', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ rand(), rand(), rand(), rand(), rand() ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	cosBy( -1, x, 1, 0, y, 1, 0, accessor );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	cosBy( 0, x, 1, 0, y, 1, 0, accessor );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = [
		rand(), // 2
		rand(),
		rand(), // 1
		rand(),
		rand()  // 0
	];
	y = [
		0.0,
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0
	];
	N = 3;

	cosBy( N, x, -2, x.length-1, y, -1, y.length-2, accessor );

	expected = [
		0.0,
		cos( x[ 0 ] ),
		cos( x[ 2 ] ),
		cos( x[ 4 ] ),
		0.0
	];

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = [
		rand(),
		rand(), // 0
		rand(),
		rand(), // 1
		rand(),
		rand()  // 2
	];
	y = [
		0.0,
		0.0,
		0.0,
		0.0, // 2
		0.0, // 1
		0.0  // 0
	];
	N = 3;

	cosBy( N, x, 2, 1, y, -1, y.length-1, accessor );

	expected = [
		0.0,
		0.0,
		0.0,
		cos( x[ 5 ] ),
		cos( x[ 3 ] ),
		cos( x[ 1 ] )
	];

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports providing a callback execution context', function test( t ) {
	var ctx;
	var x;
	var y;

	x = [ rand(), rand(), rand(), rand(), rand() ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	ctx = {
		'count': 0
	};
	cosBy( x.length, x, 1, 0, y, 1, 0, accessor, ctx );

	t.strictEqual( ctx.count, x.length, 'returns expected value' );
	t.end();

	function accessor( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return v;
	}
});
