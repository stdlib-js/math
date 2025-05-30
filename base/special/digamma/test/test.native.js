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
var isfinite = require( './../../../../base/assert/is-finite' );
var isnan = require( '@stdlib/assert/is-nan' );
var abs = require( './../../../../base/special/abs' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var digamma = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( digamma instanceof Error )
};


// FIXTURES //

var data = require( './fixtures/r/data.json' );
var expected = require( './fixtures/r/expected.json' );
var v;
var i;
for ( i = 0; i < expected.length; i++ ) {
	v = expected[ i ];
	if ( v === 'Inf' ) {
		expected[ i ] = PINF;
	}
	else if ( v === 'NaN' ) {
		expected[ i ] = NaN;
	}
}


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof digamma, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', opts, function test( t ) {
	var val = digamma( NaN );
	t.strictEqual( isnan( val ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided `0`', opts, function test( t ) {
	var val = digamma( 0.0 );
	t.strictEqual( isnan( val ), true, 'returns expected value' );
	t.end();
});

tape( 'the function evaluates the digamma function', opts, function test( t ) {
	var actual;
	var b1;
	var b2;
	var i;
	for ( i = 0; i < data.length; i++ ) {
		actual = digamma( data[ i ] );

		b1 = isfinite( actual );
		b2 = isfinite( expected[ i ] );
		t.strictEqual( b1, b2, 'returned result is ' + ( (b2) ? 'finite' : 'not finite' ) );

		b1 = isnan( actual );
		b2 = isnan( expected[ i ] );
		t.strictEqual( b1, b2, 'returned result is ' + ( (b1) ? '' : 'not' ) + ' NaN' );
		if ( !b1 ) {
			t.ok( abs( actual - expected[ i ] ) < 1.0e-14, 'returned result is within tolerance. actual: ' + actual + '; expected: ' + expected[ i ] + '.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the digamma function for `x` such that remainder > 0.5', opts, function test( t ) {
	var expected;
	var actual;
	var x;

	x = -3.8;
	expected = -2.863183589156929;
	actual = digamma( x );

	t.ok( abs( actual - expected ) < 1.0e-14, 'returned result within tolerance' );
	t.end();
});
