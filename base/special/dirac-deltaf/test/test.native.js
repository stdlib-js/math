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
var isPositiveZerof = require( './../../../../base/assert/is-positive-zerof' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var EPS = require( '@stdlib/constants/float32/eps' );
var tryRequire = require( '@stdlib/utils/try-require' );
var randu = require( '@stdlib/random/base/randu' );


// VARIABLES //

var diracDeltaf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( diracDeltaf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof diracDeltaf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `0` if `x` does not equal `0`', opts, function test( t ) {
	var x;
	var v;
	var i;

	for ( i = 0; i < 1e3; i++ ) {
		x = ( randu() * 100.0 ) - 50.0;
		if ( x === 0.0 ) {
			x += EPS;
		}
		v = diracDeltaf( x );
		t.equal( isPositiveZerof( v ), true, 'returns 0 when provided '+x );
	}
	t.end();
});

tape( 'the function returns `+infinity` if `x` equals `0`', opts, function test( t ) {
	var v = diracDeltaf( 0.0 );
	t.equal( v, PINF, 'returns +infinity' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', opts, function test( t ) {
	var v = diracDeltaf( NaN );
	t.equal( isnanf( v ), true, 'returns NaN' );
	t.end();
});

tape( 'the function returns `0` if provided `+infinity`', opts, function test( t ) {
	var v = diracDeltaf( PINF );
	t.equal( v, 0.0, 'returns 0' );
	t.end();
});

tape( 'the function returns `0` if provided `-infinity`', opts, function test( t ) {
	var v = diracDeltaf( NINF );
	t.equal( v, 0.0, 'returns 0' );
	t.end();
});
