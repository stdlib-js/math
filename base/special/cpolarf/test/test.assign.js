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
var cabsf = require( './../../../../base/special/cabsf' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var Float32Array = require( '@stdlib/array/float32' );
var cphasef = require( './../../../../base/special/cphasef' );
var cpolarf = require( './../lib/assign.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cpolarf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the absolute value and phase of a complex number', function test( t ) {
	var expected;
	var out;
	var v;

	out = [ 0.0, 0.0 ];

	v = cpolarf( new Complex64( 5.0, 3.0 ), out, 1, 0 );
	expected = [
		cabsf( new Complex64( 5.0, 3.0 ) ),
		cphasef( new Complex64( 5.0, 3.0 ) )
	];

	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'if a real or imaginary component is `NaN`, both the absolute value and phase are `NaN`', function test( t ) {
	var out;
	var v;

	out = [ 0.0, 0.0 ];

	v = cpolarf( new Complex64( NaN, 3.0 ), out, 1, 0 );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	v = cpolarf( new Complex64( 5.0, NaN ), out, 1, 0 );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	v = cpolarf( new Complex64( NaN, NaN ), out, 1, 0 );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var out;
	var val;

	out = new Float32Array( 4 );
	val = cpolarf( new Complex64( 5.0, 3.0 ), out, 2, 0 );

	t.strictEqual( val, out, 'returns output array' );
	t.strictEqual( val[ 0 ], cabsf( new Complex64( 5.0, 3.0 ) ), 'returns expected value' );
	t.strictEqual( val[ 1 ], 0, 'returns expected value' );
	t.strictEqual( val[ 2 ], cphasef( new Complex64( 5.0, 3.0 ) ), 'returns expected value' );
	t.strictEqual( val[ 3 ], 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an offset', function test( t ) {
	var out;
	var val;

	out = new Float32Array( 4 );
	val = cpolarf( new Complex64( 5.0, 3.0 ), out, 2, 1 );

	t.strictEqual( val, out, 'returns output array' );
	t.strictEqual( val[ 0 ], 0, 'returns expected value' );
	t.strictEqual( val[ 1 ], cabsf( new Complex64( 5.0, 3.0 ) ), 'returns expected value' );
	t.strictEqual( val[ 2 ], 0, 'returns expected value' );
	t.strictEqual( val[ 3 ], cphasef( new Complex64( 5.0, 3.0 ) ), 'returns expected value' );

	t.end();
});
