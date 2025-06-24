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
var isNegativeZero = require( './../../../../../base/assert/is-negative-zero' );
var isnan = require( './../../../../../base/assert/is-nan' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var PI = require( '@stdlib/constants/float64/pi' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var abs = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( abs instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof abs, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the absolute value of a number', opts, function test( t ) {
	t.strictEqual( abs( -2.0 ), 2.0, 'returns expected value' );
	t.strictEqual( abs( 3.0 ), 3.0, 'returns expected value' );
	t.strictEqual( abs( 0.0 ), 0.0, 'returns expected value' );
	t.strictEqual( abs( -PI ), PI, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-0` if provided `-0` (not IEEE 754 compliant)', opts, function test( t ) {
	t.strictEqual( isNegativeZero( abs( -0.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function computes the absolute value of `infinity`', opts, function test( t ) {
	t.strictEqual( abs( PINF ), PINF, 'returns expected value' );
	t.strictEqual( abs( NINF ), PINF, 'returns expected value' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', opts, function test( t ) {
	var v = abs( NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});
