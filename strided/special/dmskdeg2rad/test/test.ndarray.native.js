/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var tryRequire = require( '@stdlib/utils/try-require' );
var deg2rad = require( './../../../../base/special/deg2rad' );
var uniform = require( '@stdlib/random/base/uniform' ).factory;
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );


// VARIABLES //

var dmskdeg2rad = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( dmskdeg2rad instanceof Error )
};
var rand = uniform( -180.0, 180.0 );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dmskdeg2rad, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 10', opts, function test( t ) {
	t.strictEqual( dmskdeg2rad.length, 10, 'arity of 10' );
	t.end();
});

tape( 'the function converts each element from degrees to radians according to a mask array', opts, function test( t ) {
	var expected;
	var x;
	var m;
	var y;
	var i;

	x = new Float64Array( 10 );
	m = new Uint8Array( x.length );
	y = new Float64Array( x.length );

	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = rand();
		if ( rand() < 0.8 ) {
			expected[ i ] = deg2rad( x[ i ] );
		} else {
			m[ i ] = 1;
			expected[ i ] = y[ i ];
		}
	}

	dmskdeg2rad( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` stride', opts, function test( t ) {
	var expected;
	var x;
	var m;
	var y;
	var N;

	x = new Float64Array([
		rand(), // 0
		rand(),
		rand(), // 1
		rand(),
		rand()  // 2
	]);
	m = new Uint8Array([
		0, // 0
		1, // 1
		0, // 2
		0,
		0
	]);
	y = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	dmskdeg2rad( N, x, 2, 0, m, 1, 0, y, 1, 0 );

	expected = new Float64Array([
		deg2rad( x[ 0 ] ),
		y[ 1 ],
		deg2rad( x[ 4 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` offset', opts, function test( t ) {
	var expected;
	var x;
	var m;
	var y;
	var N;

	x = new Float64Array([
		rand(),
		rand(),
		rand(), // 0
		rand(), // 1
		rand()  // 2
	]);
	m = new Uint8Array([
		0, // 0
		1, // 1
		0, // 2
		0,
		0
	]);
	y = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	dmskdeg2rad( N, x, 1, 2, m, 1, 0, y, 1, 0 );

	expected = new Float64Array([
		deg2rad( x[ 2 ] ),
		y[ 1 ],
		deg2rad( x[ 4 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a mask stride', opts, function test( t ) {
	var expected;
	var x;
	var m;
	var y;
	var N;

	x = new Float64Array([
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	]);
	m = new Uint8Array([
		0, // 0
		0,
		1, // 1
		0,
		0  // 2
	]);
	y = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	dmskdeg2rad( N, x, 1, 0, m, 2, 0, y, 1, 0 );

	expected = new Float64Array([
		deg2rad( x[ 0 ] ),
		y[ 1 ],
		deg2rad( x[ 2 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a mask offset', opts, function test( t ) {
	var expected;
	var x;
	var m;
	var y;
	var N;

	x = new Float64Array([
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	]);
	m = new Uint8Array([
		0,
		0, // 0
		1, // 1
		0, // 2
		0
	]);
	y = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	dmskdeg2rad( N, x, 1, 0, m, 1, 1, y, 1, 0 );

	expected = new Float64Array([
		deg2rad( x[ 0 ] ),
		y[ 1 ],
		deg2rad( x[ 2 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` stride', opts, function test( t ) {
	var expected;
	var x;
	var m;
	var y;
	var N;

	x = new Float64Array([
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	]);
	m = new Uint8Array([
		0, // 0
		1, // 1
		0, // 2
		0,
		0
	]);
	y = new Float64Array([
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	]);
	N = 3;

	dmskdeg2rad( N, x, 1, 0, m, 1, 0, y, 2, 0 );

	expected = new Float64Array([
		deg2rad( x[ 0 ] ),
		0.0,
		y[ 2 ],
		0.0,
		deg2rad( x[ 2 ] )
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` offset', opts, function test( t ) {
	var expected;
	var x;
	var m;
	var y;
	var N;

	x = new Float64Array([
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	]);
	m = new Uint8Array([
		0, // 0
		1, // 1
		0, // 2
		0,
		0
	]);
	y = new Float64Array([
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	]);
	N = 3;

	dmskdeg2rad( N, x, 1, 0, m, 1, 0, y, 1, 2 );

	expected = new Float64Array([
		0.0,
		0.0,
		deg2rad( x[ 0 ] ),
		y[ 3 ],
		deg2rad( x[ 2 ] )
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function returns a reference to the destination array', opts, function test( t ) {
	var out;
	var x;
	var m;
	var y;

	x = new Float64Array( 5 );
	m = new Uint8Array( x.length );
	y = new Float64Array( x.length );

	out = dmskdeg2rad( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `y` unchanged', opts, function test( t ) {
	var expected;
	var x;
	var m;
	var y;

	x = new Float64Array( [ rand(), rand(), rand(), rand(), rand() ] );
	m = new Uint8Array( x.length );
	y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	expected = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	dmskdeg2rad( -1, x, 1, 0, m, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	dmskdeg2rad( 0, x, 1, 0, m, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	t.end();
});

tape( 'the function supports negative strides', opts, function test( t ) {
	var expected;
	var x;
	var m;
	var y;
	var N;

	x = new Float64Array([
		rand(), // 2
		rand(),
		rand(), // 1
		rand(),
		rand()  // 0
	]);
	m = new Uint8Array([
		0, // 2
		0,
		1, // 1
		0,
		0  // 0
	]);
	y = new Float64Array([
		0.0,
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0
	]);
	N = 3;

	dmskdeg2rad( N, x, -2, x.length-1, m, -2, m.length-1, y, -1, y.length-2 );

	expected = new Float64Array([
		0.0,
		deg2rad( x[ 0 ] ),
		y[ 2 ],
		deg2rad( x[ 4 ] ),
		0.0
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports complex access patterns', opts, function test( t ) {
	var expected;
	var x;
	var m;
	var y;
	var N;

	x = new Float64Array([
		rand(),
		rand(), // 0
		rand(),
		rand(), // 1
		rand(),
		rand()  // 2
	]);
	m = new Uint8Array([
		0, // 0
		1, // 1
		0, // 2
		0,
		0,
		0
	]);
	y = new Float64Array([
		0.0,
		0.0,
		0.0,
		0.0, // 2
		0.0, // 1
		0.0  // 0
	]);
	N = 3;

	dmskdeg2rad( N, x, 2, 1, m, 1, 0, y, -1, y.length-1 );

	expected = new Float64Array([
		0.0,
		0.0,
		0.0,
		deg2rad( x[ 5 ] ),
		y[ 4 ],
		deg2rad( x[ 1 ] )
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});
