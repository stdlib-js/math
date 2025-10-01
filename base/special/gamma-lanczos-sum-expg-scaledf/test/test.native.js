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
var linspace = require( '@stdlib/array/base/linspace' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var gamma = require( './../../../../base/special/gamma' );
var absf = require( './../../../../base/special/absf' );
var exp = require( './../../../../base/special/exp' );
var pow = require( './../../../../base/special/pow' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var EPS = require( '@stdlib/constants/float32/eps' );
var G = require( '@stdlib/constants/float32/gamma-lanczos-g' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var gammaLanczosSumExpGScaledf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( gammaLanczosSumExpGScaledf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gammaLanczosSumExpGScaledf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', opts, function test( t ) {
	var v = gammaLanczosSumExpGScaledf( NaN );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function evaluates the Lanczos sum (scaled by exp(-g))', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var i;
	var x;
	var y;

	x = linspace( 1.0, 100.0, 500 );
	for ( i = 0; i < x.length; i++ ) {
		y = gammaLanczosSumExpGScaledf( x[ i ] );

		// TODO: replace with `gammaf`, `powf`, and `expf` when available
		expected = gamma( x[i] );
		expected /= pow( x[i]+G-0.5, x[i]-0.5 ) / ( exp( x[i]+G-0.5 ) );
		expected /= exp( G );
		expected = f32( expected );
		if ( y === expected ) {
			t.strictEqual( y, expected, 'x: '+x[ i ]+', y: '+y+', expected: '+expected );
		} else {
			delta = absf( y - expected );
			tol = 2.0 * EPS * absf( expected );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});
