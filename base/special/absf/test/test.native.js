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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isPositiveZerof = require( './../../../../base/assert/is-positive-zerof' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var absf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( absf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof absf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the absolute value of a number', opts, function test( t ) {
	t.equal( absf( -2.0 ), 2.0, 'negative number' );
	t.equal( absf( 3.0 ), 3.0, 'positive number' );
	t.equal( absf( 0.0 ), 0.0, 'zero' );
	t.end();
});

tape( 'the function computes the absolute value of negative zero', opts, function test( t ) {
	t.equal( isPositiveZerof( absf( -0.0 ) ), true, 'returns positive zero' );
	t.end();
});

tape( 'the function computes the absolute value of infinity', opts, function test( t ) {
	t.equal( absf( PINF ), PINF, 'returns +infinity' );
	t.equal( absf( NINF ), PINF, 'returns +infinity' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', opts, function test( t ) {
	var v = absf( NaN );
	t.equal( isnanf( v ), true, 'returns NaN' );
	t.end();
});
