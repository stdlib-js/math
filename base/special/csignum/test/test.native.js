/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var isnan = require( './../../../../base/assert/is-nan' );
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( './../../../../base/special/abs' );
var isNegativeZero = require( './../../../../base/assert/is-negative-zero' );
var isPositiveZero = require( './../../../../base/assert/is-positive-zero' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var csignum = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( csignum instanceof Error )
};


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof csignum, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function evaluates the signum function', opts, function test( t ) {
	var delta;
	var ere;
	var eim;
	var tol;
	var re;
	var im;
	var y;
	var i;

	re = data.re;
	im = data.im;
	ere = data.expected_re;
	eim = data.expected_im;

	for ( i = 0; i < re.length; i++ ) {
		y = csignum( new Complex128( re[ i ], im[ i ] ) );
		if ( real( y ) === ere[ i ] && imag( y ) === eim[ i ] ) {
			t.strictEqual( real( y ), ere[ i ], 're: '+re[ i ]+'. Expected: '+ere[ i ] );
			t.strictEqual( imag( y ), eim[ i ], 'im: '+im[ i ]+'. Expected: '+eim[ i ] );
		} else {
			delta = abs( real( y ) - ere[ i ] );
			tol = EPS * abs( ere[ i ] );
			t.ok( delta <= tol, 'within tolerance. re: '+re[ i ]+'. im: '+im[ i ]+'. Actual re: '+real( y )+'. Expected re: '+ere[ i ]+'. delta: '+delta+'. tol: '+tol+'.' );

			delta = abs( imag( y ) - eim[ i ] );
			tol = EPS * abs( eim[ i ] );
			t.ok( delta <= tol, 'within tolerance. re: '+re[ i ]+'. im: '+im[ i ]+'. Actual im: '+imag( y )+'. Expected im: '+eim[ i ]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a `NaN` if provided a `NaN`', opts, function test( t ) {
	var val = csignum( new Complex128( NaN, NaN ) );
	t.strictEqual( isnan( real( val ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( val ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+0` if provided `+0`', opts, function test( t ) {
	var val = csignum( new Complex128( +0.0, +0.0 ) );
	t.strictEqual( isPositiveZero( real( val ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( imag( val ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-0` if provided `-0`', opts, function test( t ) {
	var val = csignum( new Complex128( -0.0, -0.0 ) );
	t.strictEqual( isNegativeZero( real( val ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZero( imag( val ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a `NaN` if provided `infinity`', opts, function test( t ) {
	var val = csignum( new Complex128( PINF, PINF ) );
	t.strictEqual( isnan( real( val ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( val ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a `NaN` if provided `-infinity`', opts, function test( t ) {
	var val = csignum( new Complex128( NINF, NINF ) );
	t.strictEqual( isnan( real( val ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( val ) ), true, 'returns expected value' );
	t.end();
});
