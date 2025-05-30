/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var isPositiveZerof = require( './../../../../base/assert/is-positive-zerof' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var EPS = require( '@stdlib/constants/float32/eps' );
var randu = require( '@stdlib/random/base/randu' );
var kroneckerDeltaf = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof kroneckerDeltaf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `0` if `i` does not equal `j`', function test( t ) {
	var x;
	var y;
	var v;
	var i;

	for ( i = 0; i < 1e3; i++ ) {
		x = ( randu()*100.0 ) - 50.0;
		y = ( randu()*100.0 ) - 50.0;
		if ( x === y ) {
			x += EPS;
		}
		v = kroneckerDeltaf( x, y );
		t.strictEqual( isPositiveZerof( v ), true, 'returns 0 when provided '+x+' and '+y );
	}
	t.end();
});

tape( 'the function returns `1` if `i` equals `j`', function test( t ) {
	var values;
	var v;
	var i;

	values = [
		0.0,
		-0.0,
		PINF,
		NINF,
		3.14,
		1.0
	];
	for ( i = 0; i < values.length; i++ ) {
		v = kroneckerDeltaf( values[ i ], values[ i ] );
		t.strictEqual( v, 1.0, 'returns 1 when provided '+values[i]+' and '+values[i] );
	}
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', function test( t ) {
	var v;

	v = kroneckerDeltaf( NaN, 0.0 );
	t.strictEqual( isnanf( v ), true, 'returns NaN' );

	v = kroneckerDeltaf( 0.0, NaN );
	t.strictEqual( isnanf( v ), true, 'returns NaN' );

	v = kroneckerDeltaf( NaN, NaN );
	t.strictEqual( isnanf( v ), true, 'returns NaN' );

	t.end();
});
