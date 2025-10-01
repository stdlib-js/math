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
var isnan = require( './../../../../base/assert/is-nan' );
var EPS = require( '@stdlib/constants/float64/eps' );
var lgammaSmallImp = require( './../lib/lgamma_small_imp.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof lgammaSmallImp, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function handles very small positive z values (z < EPS)', function test( t ) {
	var v;

	// Test z < EPS branch:
	v = lgammaSmallImp( EPS / 2.0, (EPS/2.0) - 1.0, (EPS/2.0) - 2.0 );
	t.strictEqual( isnan( v ), false, 'returns expected value' );

	v = lgammaSmallImp( 1.0e-20, 1.0e-20 - 1.0, 1.0e-20 - 2.0 );
	t.strictEqual( isnan( v ), false, 'returns expected value' );

	t.end();
});

tape( 'the function handles z >= 3.0 values', function test( t ) {
	var v;

	// Test z >= 3.0 branch:
	v = lgammaSmallImp( 3.0, 2.0, 1.0 );
	t.strictEqual( isnan( v ), false, 'returns expected value' );

	v = lgammaSmallImp( 3.5, 2.5, 1.5 );
	t.strictEqual( isnan( v ), false, 'returns expected value' );

	v = lgammaSmallImp( 4.0, 3.0, 2.0 );
	t.strictEqual( isnan( v ), false, 'returns expected value' );

	v = lgammaSmallImp( 5.5, 4.5, 3.5 );
	t.strictEqual( isnan( v ), false, 'returns expected value' );

	t.end();
});

tape( 'the function handles z < 1.0 values', function test( t ) {
	var v;

	// Test z < 1.0 branch:
	v = lgammaSmallImp( 0.5, -0.5, -1.5 );
	t.strictEqual( isnan( v ), false, 'returns expected value' );

	v = lgammaSmallImp( 0.3, -0.7, -1.7 );
	t.strictEqual( isnan( v ), false, 'returns expected value' );

	v = lgammaSmallImp( 0.8, -0.2, -1.2 );
	t.strictEqual( isnan( v ), false, 'returns expected value' );

	v = lgammaSmallImp( 0.99, -0.01, -1.01 );
	t.strictEqual( isnan( v ), false, 'returns expected value' );

	t.end();
});
