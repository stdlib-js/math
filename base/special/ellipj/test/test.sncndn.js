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

/* eslint-disable stdlib/first-unit-test */

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( './../../../../base/assert/is-nan' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var HALF_PI = require( '@stdlib/constants/float64/half-pi' );
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( './../../../../base/special/abs' );
var sn = require( './../lib/sn.js' );
var cn = require( './../lib/cn.js' );
var dn = require( './../lib/dn.js' );
var am = require( './../lib/am.js' );


// FIXTURES //

var mediumPositiveModulus = require( './fixtures/cpp/medium_positive_modulus.json' );
var nearUnityModulus = require( './fixtures/cpp/near_unity_modulus.json' );
var smallPositiveModulus = require( './fixtures/cpp/small_positive_modulus.json' );
var zeroModulus = require( './fixtures/cpp/zero_modulus.json' );
var unityModulus = require( './fixtures/cpp/unity_modulus.json' );


// TESTS //

tape( 'sn export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sn, 'function', 'sn export is a function' );
	t.end();
});

tape( 'cn export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cn, 'function', 'cn export is a function' );
	t.end();
});

tape( 'dn export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dn, 'function', 'dn export is a function' );
	t.end();
});

tape( 'am export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof am, 'function', 'am export is a function' );
	t.end();
});

tape( 'the function returns the correct limits for `+infinity` with modulus `1.0`', function test( t ) {
	t.strictEqual( sn( PINF, 1.0 ), 1.0, 'returns expected value for sn' );
	t.strictEqual( cn( PINF, 1.0 ), 0.0, 'returns expected value for cn' );
	t.strictEqual( dn( PINF, 1.0 ), 0.0, 'returns expected value for dn' );
	t.strictEqual( am( PINF, 1.0 ), HALF_PI, 'returns expected value for am' );
	t.end();
});

tape( 'the function returns the correct limits for `-infinity` with modulus `1.0`', function test( t ) {
	t.strictEqual( sn( NINF, 1.0 ), -1.0, 'returns expected value for sn' );
	t.strictEqual( cn( NINF, 1.0 ), 0.0, 'returns expected value for cn' );
	t.strictEqual( dn( NINF, 1.0 ), 0.0, 'returns expected value for dn' );
	t.strictEqual( am( NINF, 1.0 ), -HALF_PI, 'returns expected value for am' );
	t.end();
});

tape( 'the function returns the correct limits for `+infinity` with modulus `0.0`', function test( t ) {
	t.strictEqual( isnan(sn( PINF, 0.0 )), true, 'returns expected value for sn' );
	t.strictEqual( isnan(cn( PINF, 0.0 )), true, 'returns expected value for cn' );
	t.strictEqual( dn( PINF, 0.0 ), 1.0, 'returns expected value for dn' );
	t.strictEqual( am( PINF, 0.0 ), PINF, 'returns expected value for am' );
	t.end();
});

tape( 'the function returns the correct limits for `-infinity` with modulus `0.0`', function test( t ) {
	t.strictEqual( isnan(sn( NINF, 0.0 )), true, 'returns expected value for sn' );
	t.strictEqual( isnan(cn( NINF, 0.0 )), true, 'returns expected value for cn' );
	t.strictEqual( dn( NINF, 0.0 ), 1.0, 'returns expected value for dn' );
	t.strictEqual( am( NINF, 0.0 ), NINF, 'returns expected value for am' );
	t.end();
});

tape( 'the function evaluates the Jacobi elliptic functions sn, cn dn (medium positive modulus)', function test( t ) {
	var snExpected;
	var cnExpected;
	var dnExpected;
	var delta;
	var snval;
	var cnval;
	var dnval;
	var tol;
	var u;
	var m;
	var i;

	snExpected = mediumPositiveModulus.sn_expected;
	cnExpected = mediumPositiveModulus.cn_expected;
	dnExpected = mediumPositiveModulus.dn_expected;
	u = mediumPositiveModulus.u;
	m = mediumPositiveModulus.m;
	for ( i = 0; i < u.length; i++ ) {
		snval = sn( u[i], m[i] );
		cnval = cn( u[i], m[i] );
		dnval = dn( u[i], m[i] );

		if ( snval === snExpected[i] ) {
			t.strictEqual( snval, snExpected[i], 'u: '+u[i]+', m: '+m[i]+', sn: '+snval+', snExpected: '+snExpected[i] );
		} else {
			delta = abs( snval - snExpected[i] );
			tol = 18.0 * EPS;
			t.strictEqual( delta <= tol, true, 'within tolerance. u: '+u[i]+'. m: '+m[i]+', sn: '+snval+'. E: '+snExpected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}

		if ( cnval === cnExpected[i] ) {
			t.strictEqual( cnval, cnExpected[i], 'u: '+u[i]+', m: '+m[i]+', cn: '+cnval+', cnExpected: '+cnExpected[i] );
		} else {
			delta = abs( cnval - cnExpected[i] );
			tol = 14.0 * EPS;
			t.strictEqual( delta <= tol, true, 'within tolerance. u: '+u[i]+'. m: '+m[i]+', cn: '+cnval+'. E: '+cnExpected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}

		if ( dnval === dnExpected[i] ) {
			t.strictEqual( dnval, dnExpected[i], 'u: '+u[i]+', m: '+m[i]+', dn: '+dnval+', dnExpected: '+dnExpected[i] );
		} else {
			delta = abs( dnval - dnExpected[i] );
			tol = 40.0 * EPS;
			t.strictEqual( delta <= tol, true, 'within tolerance. u: '+u[i]+'. m: '+m[i]+', dn: '+dnval+'. E: '+dnExpected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the Jacobi elliptic functions sn, cn dn (modulus near unity)', function test( t ) {
	var snExpected;
	var cnExpected;
	var dnExpected;
	var delta;
	var snval;
	var cnval;
	var dnval;
	var tol;
	var u;
	var m;
	var i;

	snExpected = nearUnityModulus.sn_expected;
	cnExpected = nearUnityModulus.cn_expected;
	dnExpected = nearUnityModulus.dn_expected;
	u = nearUnityModulus.u;
	m = nearUnityModulus.m;
	for ( i = 0; i < u.length; i++ ) {
		snval = sn( u[i], m[i] );
		cnval = cn( u[i], m[i] );
		dnval = dn( u[i], m[i] );

		if ( snval === snExpected[i] ) {
			t.strictEqual( snval, snExpected[i], 'u: '+u[i]+', m: '+m[i]+', sn: '+snval+', snExpected: '+snExpected[i] );
		} else {
			delta = abs( snval - snExpected[i] );
			tol = 7.0 * EPS;
			t.strictEqual( delta <= tol, true, 'within tolerance. u: '+u[i]+'. m: '+m[i]+', sn: '+snval+'. E: '+snExpected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}

		if ( cnval === cnExpected[i] ) {
			t.strictEqual( cnval, cnExpected[i], 'u: '+u[i]+', m: '+m[i]+', cn: '+cnval+', cnExpected: '+cnExpected[i] );
		} else {
			delta = abs( cnval - cnExpected[i] );
			tol = 5.0 * EPS;
			t.strictEqual( delta <= tol, true, 'within tolerance. u: '+u[i]+'. m: '+m[i]+', cn: '+cnval+'. E: '+cnExpected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}

		if ( dnval === dnExpected[i] ) {
			t.strictEqual( dnval, dnExpected[i], 'u: '+u[i]+', m: '+m[i]+', dn: '+dnval+', dnExpected: '+dnExpected[i] );
		} else {
			delta = abs( dnval - dnExpected[i] );
			tol = 5.0 * EPS;
			t.strictEqual( delta <= tol, true, 'within tolerance. u: '+u[i]+'. m: '+m[i]+', dn: '+dnval+'. E: '+dnExpected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the Jacobi elliptic functions sn, cn dn (small positive modulus)', function test( t ) {
	var snExpected;
	var cnExpected;
	var dnExpected;
	var delta;
	var snval;
	var cnval;
	var dnval;
	var tol;
	var u;
	var m;
	var i;

	snExpected = smallPositiveModulus.sn_expected;
	cnExpected = smallPositiveModulus.cn_expected;
	dnExpected = smallPositiveModulus.dn_expected;
	u = smallPositiveModulus.u;
	m = smallPositiveModulus.m;
	for ( i = 0; i < u.length; i++ ) {
		snval = sn( u[i], m[i] );
		cnval = cn( u[i], m[i] );
		dnval = dn( u[i], m[i] );

		if ( snval === snExpected[i] ) {
			t.strictEqual( snval, snExpected[i], 'u: '+u[i]+', m: '+m[i]+', sn: '+snval+', snExpected: '+snExpected[i] );
		} else {
			delta = abs( snval - snExpected[i] );
			tol = 12.0 * EPS;
			t.strictEqual( delta <= tol, true, 'within tolerance. u: '+u[i]+'. m: '+m[i]+', sn: '+snval+'. E: '+snExpected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}

		if ( cnval === cnExpected[i] ) {
			t.strictEqual( cnval, cnExpected[i], 'u: '+u[i]+', m: '+m[i]+', cn: '+cnval+', cnExpected: '+cnExpected[i] );
		} else {
			delta = abs( cnval - cnExpected[i] );
			tol = 12.0 * EPS;
			t.strictEqual( delta <= tol, true, 'within tolerance. u: '+u[i]+'. m: '+m[i]+', cn: '+cnval+'. E: '+cnExpected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}

		if ( dnval === dnExpected[i] ) {
			t.strictEqual( dnval, dnExpected[i], 'u: '+u[i]+', m: '+m[i]+', dn: '+dnval+', dnExpected: '+dnExpected[i] );
		} else {
			delta = abs( dnval - dnExpected[i] );
			tol = 1.0 * EPS;
			t.strictEqual( delta <= tol, true, 'within tolerance. u: '+u[i]+'. m: '+m[i]+', dn: '+dnval+'. E: '+dnExpected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the Jacobi elliptic functions sn, cn dn (zero modulus)', function test( t ) {
	var snExpected;
	var cnExpected;
	var dnExpected;
	var delta;
	var snval;
	var cnval;
	var dnval;
	var tol;
	var u;
	var m;
	var i;

	snExpected = zeroModulus.sn_expected;
	cnExpected = zeroModulus.cn_expected;
	dnExpected = zeroModulus.dn_expected;
	u = zeroModulus.u;
	m = zeroModulus.m;
	for ( i = 0; i < u.length; i++ ) {
		snval = sn( u[i], m[i] );
		cnval = cn( u[i], m[i] );
		dnval = dn( u[i], m[i] );

		if ( snval === snExpected[i] ) {
			t.strictEqual( snval, snExpected[i], 'u: '+u[i]+', m: '+m[i]+', sn: '+snval+', snExpected: '+snExpected[i] );
		} else {
			delta = abs( snval - snExpected[i] );
			tol = 1.0 * EPS;
			t.strictEqual( delta <= tol, true, 'within tolerance. u: '+u[i]+'. m: '+m[i]+', sn: '+snval+'. E: '+snExpected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}

		if ( cnval === cnExpected[i] ) {
			t.strictEqual( cnval, cnExpected[i], 'u: '+u[i]+', m: '+m[i]+', cn: '+cnval+', cnExpected: '+cnExpected[i] );
		} else {
			delta = abs( cnval - cnExpected[i] );
			tol = 1.0 * EPS;
			t.strictEqual( delta <= tol, true, 'within tolerance. u: '+u[i]+'. m: '+m[i]+', cn: '+cnval+'. E: '+cnExpected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}

		// There is no reason for this to be anything but exactly identical, i.e. 1.0.
		t.strictEqual( dnval, dnExpected[i], 'u: '+u[i]+', m: '+m[i]+', dn: '+dnval+', dnExpected: '+dnExpected[i] );
	}
	t.end();
});

tape( 'the function evaluates the Jacobi elliptic functions sn, cn dn (unity modulus)', function test( t ) {
	var snExpected;
	var cnExpected;
	var dnExpected;
	var delta;
	var snval;
	var cnval;
	var dnval;
	var tol;
	var u;
	var m;
	var i;

	snExpected = unityModulus.sn_expected;
	cnExpected = unityModulus.cn_expected;
	dnExpected = unityModulus.dn_expected;
	u = unityModulus.u;
	m = unityModulus.m;
	for ( i = 0; i < u.length; i++ ) {
		snval = sn( u[i], m[i] );
		cnval = cn( u[i], m[i] );
		dnval = dn( u[i], m[i] );

		if ( snval === snExpected[i] ) {
			t.strictEqual( snval, snExpected[i], 'u: '+u[i]+', m: '+m[i]+', sn: '+snval+', snExpected: '+snExpected[i] );
		} else {
			delta = abs( snval - snExpected[i] );
			tol = 1.0 * EPS;
			t.strictEqual( delta <= tol, true, 'within tolerance. u: '+u[i]+'. m: '+m[i]+', sn: '+snval+'. E: '+snExpected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}

		if ( cnval === cnExpected[i] ) {
			t.strictEqual( cnval, cnExpected[i], 'u: '+u[i]+', m: '+m[i]+', cn: '+cnval+', cnExpected: '+cnExpected[i] );
		} else {
			delta = abs( cnval - cnExpected[i] );
			tol = 1.0 * EPS;
			t.strictEqual( delta <= tol, true, 'within tolerance. u: '+u[i]+'. m: '+m[i]+', cn: '+cnval+'. E: '+cnExpected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}

		if ( dnval === dnExpected[i] ) {
			t.strictEqual( dnval, dnExpected[i], 'u: '+u[i]+', m: '+m[i]+', dn: '+dnval+', dnExpected: '+dnExpected[i] );
		} else {
			delta = abs( dnval - dnExpected[i] );
			tol = 1.0 * EPS;
			t.strictEqual( delta <= tol, true, 'within tolerance. u: '+u[i]+'. m: '+m[i]+', dn: '+dnval+'. E: '+dnExpected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
