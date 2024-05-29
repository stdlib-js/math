/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var EPS = require( '@stdlib/constants/float32/eps' );
var abs = require( './../../../../base/special/abs' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var cabsf = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cabsf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the absolute value of a complex number', function test( t ) {
	var expected;
	var delta;
	var tol;
	var re;
	var im;
	var y;
	var i;

	re = data.re;
	im = data.im;
	expected = data.expected;

	for ( i = 0; i < re.length; i++ ) {
		y = cabsf( new Complex64( re[ i ], im[ i ] ) );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 're: '+re[i]+'. im: '+im[i]+'. Expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 2.0 * EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. re: '+re[i]+'. im: '+im[i]+' y: '+y+'. Expected: '+expected[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'if either the real or imaginary component is `NaN`, the function returns `NaN`', function test( t ) {
	var v;

	v = cabsf( new Complex64( NaN, 3.0 ) );
	t.strictEqual( isnanf( v ), true, 'returns NaN' );

	v = cabsf( new Complex64( 5.0, NaN ) );
	t.strictEqual( isnanf( v ), true, 'returns NaN' );

	v = cabsf( new Complex64( NaN, NaN ) );
	t.strictEqual( isnanf( v ), true, 'returns NaN' );

	t.end();
});
