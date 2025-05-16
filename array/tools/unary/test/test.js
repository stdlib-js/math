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

var tape = require( 'tape' );
var abs = require( './../../../../base/special/abs' );
var empty = require( '@stdlib/array/empty' );
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var Int32Array = require( '@stdlib/array/int32' );
var isArray = require( '@stdlib/assert/is-array' );
var isFloat64Array = require( '@stdlib/assert/is-float64array' );
var isFloat32Array = require( '@stdlib/assert/is-float32array' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var Unary = require( './../lib' );


// VARIABLES //

var DTYPES = [
	'float64',
	'float32',
	'generic'
];


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Unary, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var f = new Unary( value, DTYPES, DTYPES, 'same' );
			if ( !( f instanceof Unary ) ) {
				t.fail( 'unexpected return value' );
			}
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a list of dtypes', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {},
		[ 'foo', 'bar' ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var f = new Unary( abs, value, DTYPES, 'same' );
			if ( !( f instanceof Unary ) ) {
				t.fail( 'unexpected return value' );
			}
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a list of dtypes', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {},
		[ 'foo', 'bar' ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var f = new Unary( abs, DTYPES, value, 'same' );
			if ( !( f instanceof Unary ) ) {
				t.fail( 'unexpected return value' );
			}
		};
	}
});

tape( 'the function throws an error if provided a fourth argument which is not a supported policy', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'foo',
		'bar',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
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
			var f = new Unary( abs, DTYPES, DTYPES, value );
			if ( !( f instanceof Unary ) ) {
				t.fail( 'unexpected return value' );
			}
		};
	}
});

tape( 'the function is a constructor', function test( t ) {
	var f = new Unary( abs, DTYPES, DTYPES, 'same' );
	t.strictEqual( f instanceof Unary, true, 'returns expected value' );
	t.end();
});

tape( 'the constructor does not require the `new` keyword', function test( t ) {
	var unary;
	var f;

	unary = Unary;
	f = unary( abs, DTYPES, DTYPES, 'same' );
	t.strictEqual( f instanceof Unary, true, 'returns expected value' );
	t.end();
});

tape( 'the constructor returns an instance which has an `apply` method which throws an error if provided a first argument which is not a collection', function test( t ) {
	var values;
	var f;
	var i;

	f = new Unary( abs, DTYPES, DTYPES, 'same' );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			f.apply( value );
		};
	}
});

tape( 'the constructor returns an instance which has an `apply` method which throws an error if provided a first argument which is not a collection (options)', function test( t ) {
	var values;
	var f;
	var i;

	f = new Unary( abs, DTYPES, DTYPES, 'same' );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			f.apply( value, {} );
		};
	}
});

tape( 'the constructor returns an instance which has an `apply` method which throws an error if provided a first argument which is not a collection having an allowed data type', function test( t ) {
	var values;
	var f;
	var i;

	f = new Unary( abs, DTYPES, DTYPES, 'same' );

	values = [
		empty( 5, 'bool' ),
		empty( 5, 'complex64' ),
		empty( 5, 'complex128' )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			f.apply( value );
		};
	}
});

tape( 'the constructor returns an instance which has an `apply` method which throws an error if provided a first argument which is not a collection having an allowed data type (options)', function test( t ) {
	var values;
	var f;
	var i;

	f = new Unary( abs, DTYPES, DTYPES, 'same' );

	values = [
		empty( 5, 'bool' ),
		empty( 5, 'complex64' ),
		empty( 5, 'complex128' )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			f.apply( value, {} );
		};
	}
});

tape( 'the constructor returns an instance which has an `apply` method which throws an error if provided a second argument which is not an object', function test( t ) {
	var values;
	var f;
	var i;

	f = new Unary( abs, DTYPES, DTYPES, 'same' );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			f.apply( empty( 5, DTYPES[ 0 ] ), value );
		};
	}
});

tape( 'the constructor returns an instance which has an `apply` method which throws an error if provided an invalid `dtype` option', function test( t ) {
	var values;
	var f;
	var i;

	f = new Unary( abs, DTYPES, DTYPES, 'same' );

	values = [
		'5',
		'bool',
		'complex64',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
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
			f.apply( empty( 5, DTYPES[ 0 ] ), {
				'dtype': value
			});
		};
	}
});

tape( 'the constructor returns an instance which has an `apply` method which applies a function to each element in a provided array', function test( t ) {
	var expected;
	var actual;
	var x;
	var f;

	f = new Unary( abs, DTYPES, DTYPES, 'same' );

	x = [ -1.0, 2.0, -3.0, 4.0 ];
	expected = [ 1.0, 2.0, 3.0, 4.0 ];

	actual = f.apply( x );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ -1.0, 2.0, -3.0, 4.0 ] );
	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	actual = f.apply( x );
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float32Array( [ -1.0, 2.0, -3.0, 4.0 ] );
	expected = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	actual = f.apply( x );
	t.strictEqual( isFloat32Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns an instance which has an `apply` method which applies a function to each element in a provided array (array-like object)', function test( t ) {
	var expected;
	var actual;
	var x;
	var f;

	f = new Unary( abs, DTYPES, DTYPES, 'same' );

	x = {
		'length': 4,
		'0': -1.0,
		'1': 2.0,
		'2': -3.0,
		'3': 4.0
	};
	expected = [ 1.0, 2.0, 3.0, 4.0 ];

	actual = f.apply( x );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns an instance which has an `apply` method which applies a function to each element in a provided array (accessors)', function test( t ) {
	var expected;
	var actual;
	var x;
	var f;

	f = new Unary( abs, DTYPES, DTYPES, 'same' );

	x = [ -1.0, 2.0, -3.0, 4.0 ];
	expected = [ 1.0, 2.0, 3.0, 4.0 ];

	actual = f.apply( toAccessorArray( x ) );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns an instance which has an `apply` method which supports specifying the output array data type', function test( t ) {
	var expected;
	var actual;
	var x;
	var f;

	f = new Unary( abs, DTYPES, DTYPES, 'same' );

	x = [ -1.0, 2.0, -3.0, 4.0 ];
	expected = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	actual = f.apply( x, {
		'dtype': 'float32'
	});
	t.strictEqual( isFloat32Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ -1.0, 2.0, -3.0, 4.0 ] );
	expected = [ 1.0, 2.0, 3.0, 4.0 ];

	actual = f.apply( x, {
		'dtype': 'generic'
	});
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float32Array( [ -1.0, 2.0, -3.0, 4.0 ] );
	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	actual = f.apply( x, {
		'dtype': 'float64'
	});
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns an instance which has an `assign` method which throws an error if provided a first argument which is not a collection', function test( t ) {
	var values;
	var f;
	var i;

	f = new Unary( abs, DTYPES, DTYPES, 'same' );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			f.assign( value, empty( 5, DTYPES[ 0 ] ) );
		};
	}
});

tape( 'the constructor returns an instance which has an `assign` method which throws an error if provided a first argument which is not a collection having an allowed data type', function test( t ) {
	var values;
	var f;
	var i;

	f = new Unary( abs, DTYPES, DTYPES, 'same' );

	values = [
		empty( 5, 'bool' ),
		empty( 5, 'complex64' ),
		empty( 5, 'complex128' )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			f.assign( value, empty( 5, DTYPES[ 0 ] ) );
		};
	}
});

tape( 'the constructor returns an instance which has an `assign` method which throws an error if provided a second argument which is not a collection', function test( t ) {
	var values;
	var f;
	var i;

	f = new Unary( abs, DTYPES, DTYPES, 'same' );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			f.assign( empty( 5, DTYPES[ 0 ] ), value );
		};
	}
});

tape( 'the constructor returns an instance which has an `assign` method which applies a function to each element in a provided array and assigns results to a provided output array', function test( t ) {
	var expected;
	var actual;
	var out;
	var x;
	var f;

	f = new Unary( abs, DTYPES, DTYPES, 'same' );

	x = [ -1.0, 2.0, -3.0, 4.0 ];
	out = empty( x.length, 'generic' );
	expected = [ 1.0, 2.0, 3.0, 4.0 ];

	actual = f.assign( x, out );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ -1.0, 2.0, -3.0, 4.0 ] );
	out = empty( x.length, 'float64' );
	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	actual = f.assign( x, out );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float32Array( [ -1.0, 2.0, -3.0, 4.0 ] );
	out = empty( x.length, 'float32' );
	expected = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	actual = f.assign( x, out );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns an instance which has an `assign` method which applies a function to each element in a provided array and assigns results to a provided output array (array-like objects)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x;
	var f;

	f = new Unary( abs, DTYPES, DTYPES, 'same' );

	x = {
		'length': 4,
		'0': -1.0,
		'1': 2.0,
		'2': -3.0,
		'3': 4.0
	};
	out = {
		'length': 4,
		'0': 0.0,
		'1': 0.0,
		'2': 0.0,
		'3': 0.0
	};
	expected = {
		'length': 4,
		'0': 1.0,
		'1': 2.0,
		'2': 3.0,
		'3': 4.0
	};
	actual = f.assign( x, out );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns an instance which has an `assign` method which applies a function to each element in a provided array and assigns results to a provided output array (accessors)', function test( t ) {
	var expected;
	var actual;
	var out;
	var buf;
	var x;
	var f;

	f = new Unary( abs, DTYPES, DTYPES, 'same' );

	x = [ -1.0, 2.0, -3.0, 4.0 ];
	buf = empty( x.length, 'generic' );
	out = toAccessorArray( buf );
	expected = [ 1.0, 2.0, 3.0, 4.0 ];

	actual = f.assign( toAccessorArray( x ), out );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( buf, expected, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns an instance which has an `assign` method which supports providing an output array having an "unsupported" data type', function test( t ) {
	var expected;
	var actual;
	var out;
	var x;
	var f;

	f = new Unary( abs, DTYPES, DTYPES, 'same' );

	x = [ -1.0, 2.0, -3.0, 4.0 ];
	out = empty( x.length, 'int32' );
	expected = new Int32Array( [ 1, 2, 3, 4 ] );

	actual = f.assign( x, out );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
