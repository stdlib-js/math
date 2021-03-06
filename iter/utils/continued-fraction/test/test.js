/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var array2iterator = require( '@stdlib/array/to-iterator' );
var iterEmpty = require( '@stdlib/iter/empty' );
var isnan = require( './../../../../base/assert/is-nan' );
var iterContinuedFractionSeq = require( './../../../../iter/sequences/continued-fraction' );
var PI = require( '@stdlib/constants/float64/pi' );
var abs = require( './../../../../base/special/abs' );
var EPS = require( '@stdlib/constants/float64/eps' );
var iterContinuedFraction = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iterContinuedFraction, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an iterator', function test( t ) {
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
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterContinuedFraction( value );
		};
	}
});

tape( 'the function throws an error if not provided an iterator (options)', function test( t ) {
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
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterContinuedFraction( value, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
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
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterContinuedFraction( array2iterator( [ 3, 4, 12, 4 ] ), value );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
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
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterContinuedFraction( array2iterator( [ 3, 4, 12, 4 ] ), {
				'iter': value
			});
		};
	}
});

tape( 'the function evaluates the terms of the continued fraction', function test( t ) {
	var expected;
	var delta;
	var tol;
	var it;
	var v;

	it = array2iterator( [ 3, 4 ] );
	v = iterContinuedFraction( it );
	expected = 3.25;
	t.strictEqual( v, expected, 'returns expected value' );

	it = array2iterator( [ -3, -4 ] );
	v = iterContinuedFraction( it );
	expected = -3.25;
	t.strictEqual( v, expected, 'returns expected value' );

	it = array2iterator( [ 3, 4, 12, 4 ] );
	v = iterContinuedFraction( it );

	expected = 3.245;
	if ( v === expected ) {
		t.strictEqual( v, expected, 'returns expected value' );
	} else {
		delta = abs( v - expected );
		tol = 1.25 * EPS * abs( expected );
		t.strictEqual( delta <= tol, true, 'actual: '+v+'. expected: '+expected+'. delta: '+delta+'. tol: '+tol+'.' );
	}

	it = array2iterator( [ -3, -4, -12, -4 ] );
	v = iterContinuedFraction( it );

	expected = -3.245;
	if ( v === expected ) {
		t.strictEqual( v, expected, 'returns expected value' );
	} else {
		delta = abs( v - expected );
		tol = 1.25 * EPS * abs( expected );
		t.strictEqual( delta <= tol, true, 'actual: '+v+'. expected: '+expected+'. delta: '+delta+'. tol: '+tol+'.' );
	}

	it = iterContinuedFractionSeq( PI );
	v = iterContinuedFraction( it );

	expected = PI;
	if ( v === expected ) {
		t.strictEqual( v, expected, 'returns expected value' );
	} else {
		delta = abs( v - expected );
		tol = 1.0 * EPS * abs( expected );
		t.strictEqual( delta <= tol, true, 'actual: '+v+'. expected: '+expected+'. delta: '+delta+'. tol: '+tol+'.' );
	}

	it = iterContinuedFractionSeq( -PI );
	v = iterContinuedFraction( it );

	expected = -PI;
	if ( v === expected ) {
		t.strictEqual( v, expected, 'returns expected value' );
	} else {
		delta = abs( v - expected );
		tol = 1.0 * EPS * abs( expected );
		t.strictEqual( delta <= tol, true, 'actual: '+v+'. expected: '+expected+'. delta: '+delta+'. tol: '+tol+'.' );
	}

	it = array2iterator( [ 0, 2 ] );
	v = iterContinuedFraction( it );

	expected = 0.5;
	if ( v === expected ) {
		t.strictEqual( v, expected, 'returns expected value' );
	} else {
		delta = abs( v - expected );
		tol = 1.0 * EPS * abs( expected );
		t.strictEqual( delta <= tol, true, 'actual: '+v+'. expected: '+expected+'. delta: '+delta+'. tol: '+tol+'.' );
	}

	it = array2iterator( [ 0, 10 ] );
	v = iterContinuedFraction( it );

	expected = 0.1;
	if ( v === expected ) {
		t.strictEqual( v, expected, 'returns expected value' );
	} else {
		delta = abs( v - expected );
		tol = 1.0 * EPS * abs( expected );
		t.strictEqual( delta <= tol, true, 'actual: '+v+'. expected: '+expected+'. delta: '+delta+'. tol: '+tol+'.' );
	}

	it = iterContinuedFractionSeq( 0.3 );
	v = iterContinuedFraction( it );

	expected = 0.3;
	if ( v === expected ) {
		t.strictEqual( v, expected, 'returns expected value' );
	} else {
		delta = abs( v - expected );
		tol = 1.0 * EPS * abs( expected );
		t.strictEqual( delta <= tol, true, 'actual: '+v+'. expected: '+expected+'. delta: '+delta+'. tol: '+tol+'.' );
	}

	it = iterContinuedFractionSeq( -0.5 );
	v = iterContinuedFraction( it );

	expected = -0.5;
	if ( v === expected ) {
		t.strictEqual( v, expected, 'returns expected value' );
	} else {
		delta = abs( v - expected );
		tol = 1.0 * EPS * abs( expected );
		t.strictEqual( delta <= tol, true, 'actual: '+v+'. expected: '+expected+'. delta: '+delta+'. tol: '+tol+'.' );
	}

	it = iterContinuedFractionSeq( -0.3 );
	v = iterContinuedFraction( it );

	expected = -0.3;
	if ( v === expected ) {
		t.strictEqual( v, expected, 'returns expected value' );
	} else {
		delta = abs( v - expected );
		tol = 1.0 * EPS * abs( expected );
		t.strictEqual( delta <= tol, true, 'actual: '+v+'. expected: '+expected+'. delta: '+delta+'. tol: '+tol+'.' );
	}

	it = iterContinuedFractionSeq( -0.1 );
	v = iterContinuedFraction( it );

	expected = -0.1;
	if ( v === expected ) {
		t.strictEqual( v, expected, 'returns expected value' );
	} else {
		delta = abs( v - expected );
		tol = 1.0 * EPS * abs( expected );
		t.strictEqual( delta <= tol, true, 'actual: '+v+'. expected: '+expected+'. delta: '+delta+'. tol: '+tol+'.' );
	}

	t.end();
});

tape( 'the function evaluates the terms of the continued fraction (integers)', function test( t ) {
	var values;
	var arr;
	var v;
	var i;

	values = [
		0,
		1,
		2,
		3,
		4,
		5,
		10,
		100,
		1000,
		1e308,
		-1,
		-2,
		-3,
		-4,
		-5,
		-10,
		-100,
		-1000,
		-1e308
	];

	for ( i = 0; i < values.length; i++ ) {
		arr = array2iterator( [ values[ i ] ] );
		v = iterContinuedFraction( arr );
		t.strictEqual( v, values[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function supports specifying an iteration limit', function test( t ) {
	var expected;
	var it;
	var v;

	it = array2iterator( [ 3, 4, 12, 4 ] );
	v = iterContinuedFraction( it, {
		'iter': 2
	});

	expected = 3.25;
	t.strictEqual( v, expected, 'returns expected value' );

	it = array2iterator( [ -3, -4, -12, -4 ] );
	v = iterContinuedFraction( it, {
		'iter': 2
	});

	expected = -3.25;
	t.strictEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a tolerance', function test( t ) {
	var expected;
	var delta;
	var tol;
	var it;
	var v;

	it = iterContinuedFractionSeq( PI );
	v = iterContinuedFraction( it, {
		'tol': 1.0e-7
	});

	expected = 3.1415926530119025; // [ 3; 7, 15, 1, 292 ]
	if ( v === expected ) {
		t.strictEqual( v, expected, 'returns expected value' );
	} else {
		delta = abs( v - expected );
		tol = 1.0 * EPS * abs( expected );
		t.strictEqual( delta <= tol, true, 'actual: '+v+'. expected: '+expected+'. delta: '+delta+'. tol: '+tol+'.' );
	}

	it = iterContinuedFractionSeq( -PI );
	v = iterContinuedFraction( it, {
		'tol': 1.0e-7
	});

	expected = -3.1415926530119025; // [ -3; -7, -15, -1, -292 ]
	if ( v === expected ) {
		t.strictEqual( v, expected, 'returns expected value' );
	} else {
		delta = abs( v - expected );
		tol = 1.0 * EPS * abs( expected );
		t.strictEqual( delta <= tol, true, 'actual: '+v+'. expected: '+expected+'. delta: '+delta+'. tol: '+tol+'.' );
	}

	t.end();
});

tape( 'the function returns `null` if provided an "empty" iterator', function test( t ) {
	var v = iterContinuedFraction( iterEmpty() );
	t.strictEqual( v, null, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if an iterated value is non-numeric', function test( t ) {
	var arr;
	var v;

	arr = array2iterator( [ NaN ] );
	v = iterContinuedFraction( arr );

	arr = array2iterator( [ '3' ] );
	v = iterContinuedFraction( arr );

	arr = array2iterator( [ 1, 2, '3', 4 ] );
	v = iterContinuedFraction( arr );

	t.strictEqual( isnan( v ), true, 'returns expected value' );

	arr = array2iterator( [ 1, 2, NaN, 4 ] );
	v = iterContinuedFraction( arr );

	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});
