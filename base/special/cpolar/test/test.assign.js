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

var tape = require( 'tape' );
var isnan = require( './../../../../base/assert/is-nan' );
var cabs = require( './../../../../base/special/cabs' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Float64Array = require( '@stdlib/array/float64' );
var cphase = require( './../../../../base/special/cphase' );
var cpolar = require( './../lib/assign.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cpolar, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the absolute value and phase of a complex number', function test( t ) {
	var expected;
	var out;
	var v;

	out = [ 0.0, 0.0 ];

	v = cpolar( new Complex128( 5.0, 3.0 ), out, 1, 0 );
	expected = [
		cabs( new Complex128( 5.0, 3.0 ) ),
		cphase( new Complex128( 5.0, 3.0 ) )
	];

	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'if a real or imaginary component is `NaN`, both the absolute value and phase are `NaN`', function test( t ) {
	var out;
	var v;

	out = [ 0.0, 0.0 ];

	v = cpolar( new Complex128( NaN, 3.0 ), out, 1, 0 );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	v = cpolar( new Complex128( 5.0, NaN ), out, 1, 0 );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	v = cpolar( new Complex128( NaN, NaN ), out, 1, 0 );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var out;
	var val;

	out = new Float64Array( 4 );
	val = cpolar( new Complex128( 5.0, 3.0 ), out, 2, 0 );

	t.strictEqual( val, out, 'returns output array' );
	t.strictEqual( val[ 0 ], cabs( new Complex128( 5.0, 3.0 ) ), 'returns expected value' );
	t.strictEqual( val[ 1 ], 0, 'returns expected value' );
	t.strictEqual( val[ 2 ], cphase( new Complex128( 5.0, 3.0 ) ), 'returns expected value' );
	t.strictEqual( val[ 3 ], 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an offset', function test( t ) {
	var out;
	var val;

	out = new Float64Array( 4 );
	val = cpolar( new Complex128( 5.0, 3.0 ), out, 2, 1 );

	t.strictEqual( val, out, 'returns output array' );
	t.strictEqual( val[ 0 ], 0, 'returns expected value' );
	t.strictEqual( val[ 1 ], cabs( new Complex128( 5.0, 3.0 ) ), 'returns expected value' );
	t.strictEqual( val[ 2 ], 0, 'returns expected value' );
	t.strictEqual( val[ 3 ], cphase( new Complex128( 5.0, 3.0 ) ), 'returns expected value' );

	t.end();
});
