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
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isnan = require( './../../../../base/assert/is-nan' );
var gammaCorrection = require( './../lib/gamma_correction.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gammaCorrection, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns NaN for x < 10', function test( t ) {
	var v;

	v = gammaCorrection( 5.0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = gammaCorrection( 9.9 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = gammaCorrection( 0.0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns 0 for x >= XMAX', function test( t ) {
	var XMAX = 3.745194030963158e306;
	var v;

	v = gammaCorrection( XMAX );
	t.strictEqual( v, 0.0, 'returns 0' );

	v = gammaCorrection( XMAX * 2.0 );
	t.strictEqual( v, 0.0, 'returns 0' );

	t.end();
});

tape( 'the function evaluates gamma correction for 10 <= x < XBIG', function test( t ) {
	var v;

	v = gammaCorrection( 10.0 );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	v = gammaCorrection( 100.0 );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	v = gammaCorrection( 1000.0 );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates gamma correction for x >= XBIG', function test( t ) {
	var XBIG = 94906265.62425156;
	var v;

	v = gammaCorrection( XBIG );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	v = gammaCorrection( XBIG * 2.0 );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	v = gammaCorrection( 1.0e10 );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	t.end();
});
