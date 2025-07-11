/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var HALF_PI = require( '@stdlib/constants/float64/half-pi' );
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( './../../../../base/special/abs' );
var ellipj = require( './../lib/main.js' );


// FIXTURES //

var mediumPositiveModulus = require( './fixtures/cpp/medium_positive_modulus.json' );
var nearUnityModulus = require( './fixtures/cpp/near_unity_modulus.json' );
var smallPositiveModulus = require( './fixtures/cpp/small_positive_modulus.json' );
var zeroModulus = require( './fixtures/cpp/zero_modulus.json' );
var unityModulus = require( './fixtures/cpp/unity_modulus.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ellipj, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the correct limits for `+infinity` with modulus `1.0`', function test( t ) {
	var v = ellipj( PINF, 1.0 );
	t.strictEqual( v[ 0 ], 1.0, 'returns expected value for sn' );
	t.strictEqual( v[ 1 ], 0.0, 'returns expected value for cn' );
	t.strictEqual( v[ 2 ], 0.0, 'returns expected value for dn' );
	t.strictEqual( v[ 3 ], HALF_PI, 'returns expected value for am' );
	t.end();
});

tape( 'the function returns the correct limits for `-infinity` with modulus `1.0`', function test( t ) {
	var v = ellipj( NINF, 1.0 );
	t.strictEqual( v[ 0 ], -1.0, 'returns expected value for sn' );
	t.strictEqual( v[ 1 ], 0.0, 'returns expected value for cn' );
	t.strictEqual( v[ 2 ], 0.0, 'returns expected value for dn' );
	t.strictEqual( v[ 3 ], -HALF_PI, 'returns expected value for am' );
	t.end();
});

tape( 'the function returns the correct limits for `+infinity` with modulus `0.0`', function test( t ) {
	var v = ellipj( PINF, 0.0 );
	t.strictEqual( isnan(v[ 0 ]), true, 'returns expected value for sn' );
	t.strictEqual( isnan(v[ 1 ]), true, 'returns expected value for cn' );
	t.strictEqual( v[ 2 ], 1.0, 'returns expected value for dn' );
	t.strictEqual( v[ 3 ], PINF, 'returns expected value for am' );
	t.end();
});

tape( 'the function returns the correct limits for `-infinity` with modulus `0.0`', function test( t ) {
	var v = ellipj( NINF, 0.0 );
	t.strictEqual( isnan(v[ 0 ]), true, 'returns expected value for sn' );
	t.strictEqual( isnan(v[ 1 ]), true, 'returns expected value for cn' );
	t.strictEqual( v[ 2 ], 1.0, 'returns expected value for dn' );
	t.strictEqual( v[ 3 ], NINF, 'returns expected value for am' );
	t.end();
});

tape( 'the function evaluates the Jacobi elliptic functions sn, cn dn (medium positive modulus)', function test( t ) {
	var snExpected;
	var cnExpected;
	var dnExpected;
	var sncndn;
	var delta;
	var tol;
	var sn;
	var cn;
	var dn;
	var u;
	var m;
	var i;

	snExpected = mediumPositiveModulus.sn_expected;
	cnExpected = mediumPositiveModulus.cn_expected;
	dnExpected = mediumPositiveModulus.dn_expected;
	u = mediumPositiveModulus.u;
	m = mediumPositiveModulus.m;
	for ( i = 0; i < u.length; i++ ) {
		sncndn = ellipj( u[i], m[i] );
		sn = sncndn[0];
		cn = sncndn[1];
		dn = sncndn[2];

		if ( sn === snExpected[i] ) {
			t.strictEqual( sn, snExpected[i], 'u: '+u[i]+', m: '+m[i]+', sn: '+sn+', snExpected: '+snExpected[i] );
		} else {
			delta = abs( sn - snExpected[i] );
			tol = 18.0 * EPS;
			t.strictEqual( delta <= tol, true, 'within tolerance. u: '+u[i]+'. m: '+m[i]+', sn: '+sn+'. E: '+snExpected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}

		if ( cn === cnExpected[i] ) {
			t.strictEqual( cn, cnExpected[i], 'u: '+u[i]+', m: '+m[i]+', cn: '+cn+', cnExpected: '+cnExpected[i] );
		} else {
			delta = abs( cn - cnExpected[i] );
			tol = 14.0 * EPS;
			t.strictEqual( delta <= tol, true, 'within tolerance. u: '+u[i]+'. m: '+m[i]+', cn: '+cn+'. E: '+cnExpected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}

		if ( dn === dnExpected[i] ) {
			t.strictEqual( dn, dnExpected[i], 'u: '+u[i]+', m: '+m[i]+', dn: '+dn+', dnExpected: '+dnExpected[i] );
		} else {
			delta = abs( dn - dnExpected[i] );
			tol = 40.0 * EPS;
			t.strictEqual( delta <= tol, true, 'within tolerance. u: '+u[i]+'. m: '+m[i]+', dn: '+dn+'. E: '+dnExpected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the Jacobi elliptic functions sn, cn dn (modulus near unity)', function test( t ) {
	var snExpected;
	var cnExpected;
	var dnExpected;
	var sncndn;
	var delta;
	var tol;
	var sn;
	var cn;
	var dn;
	var u;
	var m;
	var i;

	snExpected = nearUnityModulus.sn_expected;
	cnExpected = nearUnityModulus.cn_expected;
	dnExpected = nearUnityModulus.dn_expected;
	u = nearUnityModulus.u;
	m = nearUnityModulus.m;
	for ( i = 0; i < u.length; i++ ) {
		sncndn = ellipj( u[i], m[i] );
		sn = sncndn[0];
		cn = sncndn[1];
		dn = sncndn[2];

		if ( sn === snExpected[i] ) {
			t.strictEqual( sn, snExpected[i], 'u: '+u[i]+', m: '+m[i]+', sn: '+sn+', snExpected: '+snExpected[i] );
		} else {
			delta = abs( sn - snExpected[i] );
			tol = 7.0 * EPS;
			t.strictEqual( delta <= tol, true, 'within tolerance. u: '+u[i]+'. m: '+m[i]+', sn: '+sn+'. E: '+snExpected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}

		if ( cn === cnExpected[i] ) {
			t.strictEqual( cn, cnExpected[i], 'u: '+u[i]+', m: '+m[i]+', cn: '+cn+', cnExpected: '+cnExpected[i] );
		} else {
			delta = abs( cn - cnExpected[i] );
			tol = 5.0 * EPS;
			t.strictEqual( delta <= tol, true, 'within tolerance. u: '+u[i]+'. m: '+m[i]+', cn: '+cn+'. E: '+cnExpected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}

		if ( dn === dnExpected[i] ) {
			t.strictEqual( dn, dnExpected[i], 'u: '+u[i]+', m: '+m[i]+', dn: '+dn+', dnExpected: '+dnExpected[i] );
		} else {
			delta = abs( dn - dnExpected[i] );
			tol = 5.0 * EPS;
			t.strictEqual( delta <= tol, true, 'within tolerance. u: '+u[i]+'. m: '+m[i]+', dn: '+dn+'. E: '+dnExpected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the Jacobi elliptic functions sn, cn dn (small positive modulus)', function test( t ) {
	var snExpected;
	var cnExpected;
	var dnExpected;
	var sncndn;
	var delta;
	var tol;
	var sn;
	var cn;
	var dn;
	var u;
	var m;
	var i;

	snExpected = smallPositiveModulus.sn_expected;
	cnExpected = smallPositiveModulus.cn_expected;
	dnExpected = smallPositiveModulus.dn_expected;
	u = smallPositiveModulus.u;
	m = smallPositiveModulus.m;
	for ( i = 0; i < u.length; i++ ) {
		sncndn = ellipj( u[i], m[i] );
		sn = sncndn[0];
		cn = sncndn[1];
		dn = sncndn[2];

		if ( sn === snExpected[i] ) {
			t.strictEqual( sn, snExpected[i], 'u: '+u[i]+', m: '+m[i]+', sn: '+sn+', snExpected: '+snExpected[i] );
		} else {
			delta = abs( sn - snExpected[i] );
			tol = 12.0 * EPS;
			t.strictEqual( delta <= tol, true, 'within tolerance. u: '+u[i]+'. m: '+m[i]+', sn: '+sn+'. E: '+snExpected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}

		if ( cn === cnExpected[i] ) {
			t.strictEqual( cn, cnExpected[i], 'u: '+u[i]+', m: '+m[i]+', cn: '+cn+', cnExpected: '+cnExpected[i] );
		} else {
			delta = abs( cn - cnExpected[i] );
			tol = 12.0 * EPS;
			t.strictEqual( delta <= tol, true, 'within tolerance. u: '+u[i]+'. m: '+m[i]+', cn: '+cn+'. E: '+cnExpected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}

		if ( dn === dnExpected[i] ) {
			t.strictEqual( dn, dnExpected[i], 'u: '+u[i]+', m: '+m[i]+', dn: '+dn+', dnExpected: '+dnExpected[i] );
		} else {
			delta = abs( dn - dnExpected[i] );
			tol = 1.0 * EPS;
			t.strictEqual( delta <= tol, true, 'within tolerance. u: '+u[i]+'. m: '+m[i]+', dn: '+dn+'. E: '+dnExpected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the Jacobi elliptic functions sn, cn dn (zero modulus)', function test( t ) {
	var snExpected;
	var cnExpected;
	var dnExpected;
	var sncndn;
	var delta;
	var tol;
	var sn;
	var cn;
	var dn;
	var u;
	var m;
	var i;

	snExpected = zeroModulus.sn_expected;
	cnExpected = zeroModulus.cn_expected;
	dnExpected = zeroModulus.dn_expected;
	u = zeroModulus.u;
	m = zeroModulus.m;
	for ( i = 0; i < u.length; i++ ) {
		sncndn = ellipj( u[i], m[i] );
		sn = sncndn[0];
		cn = sncndn[1];
		dn = sncndn[2];

		if ( sn === snExpected[i] ) {
			t.strictEqual( sn, snExpected[i], 'u: '+u[i]+', m: '+m[i]+', sn: '+sn+', snExpected: '+snExpected[i] );
		} else {
			delta = abs( sn - snExpected[i] );
			tol = 1.0 * EPS;
			t.strictEqual( delta <= tol, true, 'within tolerance. u: '+u[i]+'. m: '+m[i]+', sn: '+sn+'. E: '+snExpected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}

		if ( cn === cnExpected[i] ) {
			t.strictEqual( cn, cnExpected[i], 'u: '+u[i]+', m: '+m[i]+', cn: '+cn+', cnExpected: '+cnExpected[i] );
		} else {
			delta = abs( cn - cnExpected[i] );
			tol = 1.0 * EPS;
			t.strictEqual( delta <= tol, true, 'within tolerance. u: '+u[i]+'. m: '+m[i]+', cn: '+cn+'. E: '+cnExpected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}

		// There is no reason for this to be anything but exactly identical, i.e. 1.0.
		t.strictEqual( dn, dnExpected[i], 'u: '+u[i]+', m: '+m[i]+', dn: '+dn+', dnExpected: '+dnExpected[i] );
	}
	t.end();
});

tape( 'the function evaluates the Jacobi elliptic functions sn, cn dn (unity modulus)', function test( t ) {
	var snExpected;
	var cnExpected;
	var dnExpected;
	var sncndn;
	var delta;
	var tol;
	var sn;
	var cn;
	var dn;
	var u;
	var m;
	var i;

	snExpected = unityModulus.sn_expected;
	cnExpected = unityModulus.cn_expected;
	dnExpected = unityModulus.dn_expected;
	u = unityModulus.u;
	m = unityModulus.m;
	for ( i = 0; i < u.length; i++ ) {
		sncndn = ellipj( u[i], m[i] );
		sn = sncndn[0];
		cn = sncndn[1];
		dn = sncndn[2];

		if ( sn === snExpected[i] ) {
			t.strictEqual( sn, snExpected[i], 'u: '+u[i]+', m: '+m[i]+', sn: '+sn+', snExpected: '+snExpected[i] );
		} else {
			delta = abs( sn - snExpected[i] );
			tol = 1.0 * EPS;
			t.strictEqual( delta <= tol, true, 'within tolerance. u: '+u[i]+'. m: '+m[i]+', sn: '+sn+'. E: '+snExpected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}

		if ( cn === cnExpected[i] ) {
			t.strictEqual( cn, cnExpected[i], 'u: '+u[i]+', m: '+m[i]+', cn: '+cn+', cnExpected: '+cnExpected[i] );
		} else {
			delta = abs( cn - cnExpected[i] );
			tol = 1.0 * EPS;
			t.strictEqual( delta <= tol, true, 'within tolerance. u: '+u[i]+'. m: '+m[i]+', cn: '+cn+'. E: '+cnExpected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}

		if ( dn === dnExpected[i] ) {
			t.strictEqual( dn, dnExpected[i], 'u: '+u[i]+', m: '+m[i]+', dn: '+dn+', dnExpected: '+dnExpected[i] );
		} else {
			delta = abs( dn - dnExpected[i] );
			tol = 1.0 * EPS;
			t.strictEqual( delta <= tol, true, 'within tolerance. u: '+u[i]+'. m: '+m[i]+', dn: '+dn+'. E: '+dnExpected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
