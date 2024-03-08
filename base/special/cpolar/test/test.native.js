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
var isnan = require( './../../../../base/assert/is-nan' );
var cabs = require( './../../../../base/special/cabs' );
var Complex128 = require( '@stdlib/complex/float64' );
var cphase = require( './../../../../base/special/cphase' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var cpolar = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( cpolar instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cpolar, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the absolute value and phase of a complex number', opts, function test( t ) {
	var expected;
	var v;

	v = cpolar( new Complex128( 5.0, 3.0 ) );
	expected = [
		cabs( new Complex128( 5.0, 3.0 ) ),
		cphase( new Complex128( 5.0, 3.0 ) )
	];

	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'if a real or imaginary component is `NaN`, both the absolute value and phase are `NaN`', opts, function test( t ) {
	var v;

	v = cpolar( new Complex128( NaN, 3.0 ) );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns NaN' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns NaN' );

	v = cpolar( new Complex128( 5.0, NaN ) );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns NaN' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns NaN' );

	v = cpolar( new Complex128( NaN, NaN ) );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns NaN' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns NaN' );

	t.end();
});
