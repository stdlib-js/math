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
var isnanf = require( './../../../../base/assert/is-nanf' );
var isPositiveZerof = require( './../../../../base/assert/is-positive-zerof' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var maxabsf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( maxabsf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof maxabsf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', opts, function test( t ) {
	var v;

	v = maxabsf( NaN, 3.14 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = maxabsf( 3.14, NaN );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = maxabsf( NaN, NaN );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `+Infinity` if provided `+Infinity`', opts, function test( t ) {
	var v;

	v = maxabsf( PINF, 3.14 );
	t.strictEqual( v, PINF, 'returns expected value' );

	v = maxabsf( 3.14, PINF );
	t.strictEqual( v, PINF, 'returns expected value' );

	t.end();
});

tape( 'the function returns a correctly signed zero', opts, function test( t ) {
	var v;

	v = maxabsf( +0.0, -0.0 );
	t.strictEqual( isPositiveZerof( v ), true, 'returns expected value' );

	v = maxabsf( -0.0, +0.0 );
	t.strictEqual( isPositiveZerof( v ), true, 'returns expected value' );

	v = maxabsf( -0.0, -0.0 );
	t.strictEqual( isPositiveZerof( v ), true, 'returns expected value' );

	v = maxabsf( +0.0, +0.0 );
	t.strictEqual( isPositiveZerof( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the maximum absolute value', opts, function test( t ) {
	var v;

	v = maxabsf( float64ToFloat32( 4.2 ), float64ToFloat32( 3.14 ) );
	t.strictEqual( v, float64ToFloat32( 4.2 ), 'returns expected value' );

	v = maxabsf( float64ToFloat32( -4.2 ), float64ToFloat32( 3.14 ) );
	t.strictEqual( v, float64ToFloat32( 4.2 ), 'returns expected value' );

	t.end();
});