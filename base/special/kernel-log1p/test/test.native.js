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
var isnan = require( './../../../../base/assert/is-nan' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var kernelLog1p = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( kernelLog1p instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof kernelLog1p, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', opts, function test( t ) {
	var v = kernelLog1p( NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function accurately evaluates the correction term for `1+f` in the interval `[√2/2, √2]`', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;
	var e;

	x = [
		1.4142135623730951
	];
	expected = [
		0.46716000147788844
	];

	for ( i = 0; i < x.length; i++ ) {
		y = kernelLog1p( x[ i ] );
		e = expected[ i ];
		t.strictEqual( y, e, 'returns expected value' );
	}
	t.end();
});
