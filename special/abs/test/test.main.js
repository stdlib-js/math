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
var naryFunction = require( '@stdlib/utils/nary-function' );
var uniform = require( '@stdlib/random/uniform' );
var zeros = require( '@stdlib/ndarray/zeros' );
var map = require( '@stdlib/ndarray/map' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var getShape = require( '@stdlib/ndarray/shape' );
var getOrder = require( '@stdlib/ndarray/order' );
var getDType = require( '@stdlib/ndarray/dtype' );
var base = require( './../../../base/special/abs' );
var abs = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof abs, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object', function test( t ) {
	var values;
	var i;

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
			abs( value );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (options)', function test( t ) {
	var values;
	var i;

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
			abs( value, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an object', function test( t ) {
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
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			abs( x, value );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an invalid `dtype` option', function test( t ) {
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
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			abs( x, {
				'dtype': value
			});
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an invalid `order` option', function test( t ) {
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
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			abs( x, {
				'order': value
			});
		};
	}
});

tape( 'the function computes the absolute value for each element in an ndarray', function test( t ) {
	var expected;
	var x;
	var y;

	x = uniform( [ 5, 5 ], -10.0, 10.0, {
		'dtype': 'float64'
	});
	y = abs( x );

	expected = map( x, naryFunction( base, 1 ) );
	t.deepEqual( ndarray2array( y ), ndarray2array( expected ), 'returns expected value' );

	t.deepEqual( getShape( y ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( y ), getOrder( x ), 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the output ndarray data type', function test( t ) {
	var expected;
	var x;
	var y;

	x = uniform( [ 5, 5 ], -10.0, 10.0, {
		'dtype': 'float64'
	});
	y = abs( x, {
		'dtype': 'generic'
	});

	expected = map( x, naryFunction( base, 1 ) );
	t.deepEqual( ndarray2array( y ), ndarray2array( expected ), 'returns expected value' );

	t.strictEqual( getDType( y ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( y ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( y ), getOrder( x ), 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the output ndarray order', function test( t ) {
	var expected;
	var x;
	var y;

	x = uniform( [ 5, 5 ], -10.0, 10.0, {
		'dtype': 'float64',
		'order': 'row-major'
	});
	y = abs( x, {
		'order': 'column-major'
	});

	expected = map( x, naryFunction( base, 1 ) );
	t.deepEqual( ndarray2array( y ), ndarray2array( expected ), 'returns expected value' );

	t.deepEqual( getShape( y ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( y ), 'column-major', 'returns expected value' );

	x = uniform( [ 5, 5 ], -10.0, 10.0, {
		'dtype': 'float64',
		'order': 'column-major'
	});
	y = abs( x, {
		'order': 'row-major'
	});

	expected = map( x, naryFunction( base, 1 ) );
	t.deepEqual( ndarray2array( y ), ndarray2array( expected ), 'returns expected value' );

	t.deepEqual( getShape( y ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( y ), 'row-major', 'returns expected value' );

	t.end();
});
