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
var abs = require( './../../../../base/special/abs' );
var pow = require( './../../../../base/special/pow' );
var LN2 = require( '@stdlib/constants/float64/ln-two' );
var PI = require( '@stdlib/constants/float64/pi' );
var EPS = require( '@stdlib/constants/float64/eps' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var eta = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( eta instanceof Error )
};


// FIXTURES //

var data = require( './fixtures/julia/results.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof eta, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', opts, function test( t ) {
	var v = eta( NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value when provided a NaN' );
	t.end();
});

tape( 'the function evaluates the Dirichlet eta function', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var s;
	var v;
	var i;

	s = data.x;
	expected = data.expected;
	for ( i = 0; i < s.length; i++ ) {
		v = eta( s[i] );
		delta = abs( v - expected[i] );

		// R: 1.1e5*eps => 2.4424906541753444e-11 => http://finzi.psych.upenn.edu/library/pracma/html/eta.html states that accuracy is 13 digits
		// Julia: 68.0*eps => 1.509903313490213e-14
		tol = 68.0 * EPS * abs( expected[i] );
		t.ok( delta <= tol, 'within tolerance. s: '+s[i]+'. v: '+v+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
	}
	t.end();
});

tape( 'if provided `1`, the function returns `ln(2)` (alternating harmonic series)', opts, function test( t ) {
	var v = eta( 1.0 );
	t.strictEqual( v, LN2, 'returns expected value' );
	t.end();
});

tape( 'if provided `0`, the function returns `0.5` (Abel sum)', opts, function test( t ) {
	var v = eta( 0.0 );
	t.strictEqual( v, 0.5, 'returns expected value' );
	t.end();
});

tape( 'if provided `-1`, the function returns `0.25` (Abel sum)', opts, function test( t ) {
	var v = eta( -1.0 );
	t.strictEqual( v, 0.25, 'returns expected value' );
	t.end();
});

tape( 'if provided `2`, the function returns `π²/12`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var s;
	var v;

	// https://oeis.org/A072691
	expected = 0.822467033424113218236207583323012594609474950603399218867779114685003735201600436916814450309879352652002; // eslint-disable-line max-len

	s = 2.0;
	v = eta( s );

	delta = abs( v - expected );
	tol = EPS * abs( expected );

	t.ok( delta <= tol, 'within tolerance. s: '+s+'. v: '+v+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );
	t.end();
});

tape( 'if provided `4`, the function returns `7π**4/720`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var s;
	var v;

	expected = 7.0 * pow( PI, 4 ) / 720.0;

	s = 4.0;
	v = eta( s );

	delta = abs( v - expected );
	tol = EPS * abs( expected );

	t.ok( delta <= tol, 'within tolerance. s: '+s+'. v: '+v+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );
	t.end();
});

tape( 'if provided `6`, the function returns `31π**6/30240`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var s;
	var v;

	expected = 31.0 * pow( PI, 6 ) / 30240.0;

	s = 6.0;
	v = eta( s );

	delta = abs( v - expected );
	tol = 2.0 * EPS * abs( expected );

	t.ok( delta <= tol, 'within tolerance. s: '+s+'. v: '+v+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );
	t.end();
});

tape( 'if provided `8`, the function returns `127π**8/1209600`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var s;
	var v;

	expected = 127.0 * pow( PI, 8 ) / 1209600.0;

	s = 8.0;
	v = eta( s );

	delta = abs( v - expected );
	tol = 2.05 * EPS * abs( expected );

	t.ok( delta <= tol, 'within tolerance. s: '+s+'. v: '+v+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );
	t.end();
});

tape( 'if provided `10`, the function returns `73π**10/6842880`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var s;
	var v;

	expected = 73.0 * pow( PI, 10 ) / 6842880.0;

	s = 10.0;
	v = eta( s );

	delta = abs( v - expected );
	tol = 1.55 * EPS * abs( expected );

	t.ok( delta <= tol, 'within tolerance. s: '+s+'. v: '+v+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );
	t.end();
});

tape( 'if provided `12`, the function returns `1414477π**12/1307674368000`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var s;
	var v;

	expected = 1414477.0 * pow( PI, 12 ) / 1307674368000.0;

	s = 12.0;
	v = eta( s );

	delta = abs( v - expected );
	tol = 2.05 * EPS * abs( expected );

	t.ok( delta <= tol, 'within tolerance. s: '+s+'. v: '+v+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );
	t.end();
});
