/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var randu = require( '@stdlib/random/iter/randu' );
var bessely0 = require( './../../../../base/special/bessely0' );
var linspace = require( '@stdlib/iter/linspace' );
var iterBessely0 = require( './../lib' );


// FUNCTIONS //

function createIterator( arr ) {
	var len;
	var it;
	var i;

	len = arr.length;
	i = -1;

	it = {};
	it.next = next;

	return it;

	function next() {
		var out;
		i += 1;
		if ( i < len ) {
			out = {};
			out.value = arr[ i ];
			out.done = ( i === len-1 );
			return out;
		}
		return {
			'done': true
		};
	}
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof iterBessely0, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an iterator argument which is not an iterator protocol-compliant object', function test( t ) {
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterBessely0( value );
		};
	}
});

tape( 'the function returns an iterator protocol-compliant object', function test( t ) {
	var it;
	var r;
	var i;

	it = iterBessely0( randu() );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < 100; i++ ) {
		r = it.next();
		t.equal( typeof r.value, 'number', 'returns a number' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (value+done)', function test( t ) {
	var values;
	var it;
	var r;
	var i;

	values = [ 0.0, 0.5, 1.0, 1.5, 2.0 ];
	it = iterBessely0( createIterator( values ) );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < values.length; i++ ) {
		r = it.next();
		t.equal( typeof r.value, 'number', 'returns a number' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which evaluates the Bessel function of the second kind of order zero for each iterated value', function test( t ) {
	var expected;
	var it;
	var N;
	var x;
	var r;
	var i;

	N = 101;
	it = iterBessely0( linspace( 0.0, 2.0, N ) );
	t.equal( it.next.length, 0, 'has zero arity' );

	x = linspace( 0.0, 2.0, N );
	for ( i = 0; i < N; i++ ) {
		r = it.next();
		expected = bessely0( x.next().value );
		t.equal( r.value, expected, 'returns expected value' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which evaluates the Bessel function of the second kind of order zero for each iterated value (value+done)', function test( t ) {
	var expected;
	var actual;
	var values;
	var it;
	var i;

	values = [ 0.0, 0.5, 1.0, 1.5 ];
	expected = [
		{
			'value': bessely0( values[ 0 ] ),
			'done': false
		},
		{
			'value': bessely0( values[ 1 ] ),
			'done': false
		},
		{
			'value': bessely0( values[ 2 ] ),
			'done': false
		},
		{
			'value': bessely0( values[ 3 ] ),
			'done': true
		}
	];

	it = iterBessely0( createIterator( values ) );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.deepEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which returns `NaN` if provided a non-numeric value (value+done)', function test( t ) {
	var expected;
	var values;
	var actual;
	var it;
	var r;
	var i;

	values = [ 'abc', null, true, false, [], {} ];
	expected = [
		{
			'value': NaN,
			'done': false
		},
		{
			'value': NaN,
			'done': false
		},
		{
			'value': NaN,
			'done': false
		},
		{
			'value': NaN,
			'done': false
		},
		{
			'value': NaN,
			'done': false
		},
		{
			'value': NaN,
			'done': true
		}
	];

	it = iterBessely0( createIterator( values ) );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		r = expected[ i ].value;
		if ( r === r ) {
			t.equal( actual.value, r, 'returns expected value' );
		} else {
			t.notEqual( actual.value, actual.value, 'returns expected value' );
		}
		t.equal( actual.done, expected[ i ].done, 'returns a boolean' );
	}
	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (no argument)', function test( t ) {
	var it;
	var r;

	it = iterBessely0( randu() );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.return();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (argument)', function test( t ) {
	var it;
	var r;

	it = iterBessely0( randu() );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.return( 'finished' );
	t.equal( r.value, 'finished', 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});
