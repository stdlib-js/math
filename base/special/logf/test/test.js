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

var tape = require( 'tape' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var randu = require( '@stdlib/random/base/randu' );
var roundf = require( './../../../../base/special/roundf' );
var lnf = require( './../../../../base/special/lnf' );
var EPS = require( '@stdlib/constants/float32/eps' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var logf = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof logf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has two parameters', function test( t ) {
	t.strictEqual( logf.length, 2.0, 'arity is 2' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN` as either of the arguments', function test( t ) {
	t.strictEqual( isnanf( logf( 2.0, NaN ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( logf( NaN, 3.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided a negative number as either of the arguments', function test( t ) {
	t.strictEqual( isnanf( logf( 2.0, -0.4 ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( logf( -1.0, 3.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided `1` or `0` for both arguments', function test( t ) {
	t.strictEqual( isnanf( logf( 0.0, 0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( logf( 1.0, 1.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `1.0` if provided `x` and `b` such that `x = b` (except for zero and one)', function test( t ) {
	var i;
	for ( i = 2; i < 100; i++ ) {
		t.strictEqual( logf( i, i ), 1.0, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns `lnf(x) / lnf(b)`', function test( t ) {
	var b;
	var x;
	var i;

	for ( i = 0; i < 100; i++ ) {
		x = float64ToFloat32( roundf( float64ToFloat32( randu() * 100.0 ) ) + EPS ); // eslint-disable-line max-len
		b = float64ToFloat32( roundf( float64ToFloat32( randu() * 5.0 ) ) + EPS ); // eslint-disable-line max-len
		t.strictEqual( logf( x, b ), float64ToFloat32( lnf( x ) / lnf( b ) ), 'returns lnf(x) / lnf(b)' );
	}
	t.end();
});
