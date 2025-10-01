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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var tryRequire = require( '@stdlib/utils/try-require' );
var naryFunction = require( '@stdlib/utils/nary-function' );
var uniform = require( '@stdlib/random/uniform' );
var zeros = require( '@stdlib/ndarray/zeros' );
var map = require( '@stdlib/ndarray/map' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var getShape = require( '@stdlib/ndarray/shape' );
var base = require( './../../../base/special/abs' );


// VARIABLES //

var abs = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( abs instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof abs, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is an `assign` method', opts, function test( t ) {
	t.strictEqual( typeof abs.assign, 'function', 'returns expected value' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object', opts, function test( t ) {
	var values;
	var y;
	var i;

	y = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			abs.assign( value, y );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an ndarray-like object', opts, function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			abs.assign( x, value );
		};
	}
});

tape( 'the function computes the absolute value for each element in an ndarray and assigns the results to a provided output ndarray', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = uniform( [ 5, 5 ], -10.0, 10.0, {
		'dtype': 'float64'
	});
	y = zeros( getShape( x ), {
		'dtype': 'float64'
	});
	out = abs.assign( x, y );

	expected = map( x, naryFunction( base, 1 ) );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ndarray2array( out ), ndarray2array( expected ), 'returns expected value' );

	t.end();
});
