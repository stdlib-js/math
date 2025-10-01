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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var cabsf = require( './../../../../base/special/cabsf' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var cphasef = require( './../../../../base/special/cphasef' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var cpolarf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( cpolarf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cpolarf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the absolute value and phase of a complex number', opts, function test( t ) {
	var expected;
	var v;

	v = cpolarf( new Complex64( 5.0, 3.0 ) );
	expected = [
		cabsf( new Complex64( 5.0, 3.0 ) ),
		cphasef( new Complex64( 5.0, 3.0 ) )
	];

	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'if a real or imaginary component is `NaN`, both the absolute value and phase are `NaN`', opts, function test( t ) {
	var v;

	v = cpolarf( new Complex64( NaN, 3.0 ) );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	v = cpolarf( new Complex64( 5.0, NaN ) );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	v = cpolarf( new Complex64( NaN, NaN ) );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});
