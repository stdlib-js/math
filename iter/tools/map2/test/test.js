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
var proxyquire = require( 'proxyquire' );
var isnan = require( './../../../../base/assert/is-nan' );
var copysign = require( './../../../../base/special/copysign' );
var randu = require( '@stdlib/random/iter/randu' );
var map = require( '@stdlib/iter/map' );
var array2iterator = require( '@stdlib/array/to-iterator' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var iterEmpty = require( '@stdlib/iter/empty' );
var iterMap2 = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iterMap2, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an iterator argument which is not an iterator protocol-compliant object or number (first argument)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
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
			iterMap2( value, randu(), copysign );
		};
	}
});

tape( 'the function throws an error if provided an iterator argument which is not an iterator protocol-compliant object or number (second argument)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
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
			iterMap2( randu(), value, copysign );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a function', function test( t ) {
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterMap2( randu(), randu(), value );
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterMap2( randu(), randu(), copysign, value );
		};
	}
});

tape( 'the function returns an iterator protocol-compliant object (infinite iterators)', function test( t ) {
	var it;
	var v;
	var i;

	it = iterMap2( randu(), randu(), copysign );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < 100; i++ ) {
		v = it.next();
		t.equal( typeof v.value, 'number', 'returns expected value' );
		t.equal( v.done, false, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (scalars)', function test( t ) {
	var it;
	var v;
	var i;

	it = iterMap2( 4.0, -3.0, copysign );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < 100; i++ ) {
		v = it.next();
		t.equal( v.value, -4.0, 'returns expected value' );
		t.equal( v.done, false, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which applies a function (2 finite iterators)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var actual;
	var it0;
	var it1;
	var it;
	var i;

	values1 = [ 1.0, 2.0 ];
	values2 = [ 3.0, -4.0 ];
	expected = [
		{
			'value': 1.0,
			'done': false
		},
		{
			'value': -2.0,
			'done': false
		},
		{
			'done': true
		}
	];

	it0 = array2iterator( values1 );
	it1 = array2iterator( values2 );

	it = iterMap2( it0, it1, copysign );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which applies a function (scalar argument)', function test( t ) {
	var expected;
	var values1;
	var scalar;
	var actual;
	var it0;
	var it;
	var i;

	values1 = [ 1.0, 2.0 ];
	expected = [
		{
			'value': -1.0,
			'done': false
		},
		{
			'value': -2.0,
			'done': false
		},
		{
			'done': true
		}
	];

	it0 = array2iterator( values1 );
	scalar = -4.0;

	it = iterMap2( it0, scalar, copysign );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which applies a function (scalar argument)', function test( t ) {
	var expected;
	var values1;
	var scalar;
	var actual;
	var it1;
	var it;
	var i;

	values1 = [ 1.0, -2.0 ];
	expected = [
		{
			'value': 4.0,
			'done': false
		},
		{
			'value': -4.0,
			'done': false
		},
		{
			'done': true
		}
	];

	scalar = 4.0;
	it1 = array2iterator( values1 );

	it = iterMap2( scalar, it1, copysign );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which applies a function (2 finite iterators; unequal length)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var actual;
	var it0;
	var it1;
	var it;
	var i;

	values1 = [ 1.0, 2.0 ];
	values2 = [ 3.0, -4.0, 5.0, 6.0, 7.0 ];
	expected = [
		{
			'value': 1.0,
			'done': false
		},
		{
			'value': -2.0,
			'done': false
		},
		{
			'done': true
		}
	];

	it0 = array2iterator( values1 );
	it1 = array2iterator( values2 );

	it = iterMap2( it0, it1, copysign );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which applies a function (2 finite iterators; unequal length)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var actual;
	var it0;
	var it1;
	var it;
	var i;

	values1 = [ 1.0, 2.0, 5.0, 6.0, 7.0 ];
	values2 = [ 3.0, -4.0 ];
	expected = [
		{
			'value': 1.0,
			'done': false
		},
		{
			'value': -2.0,
			'done': false
		},
		{
			'done': true
		}
	];

	it0 = array2iterator( values1 );
	it1 = array2iterator( values2 );

	it = iterMap2( it0, it1, copysign );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which applies a function (empty iterators)', function test( t ) {
	var expected;
	var actual;
	var it;

	expected = [
		{
			'done': true
		}
	];

	it = iterMap2( iterEmpty(), iterEmpty(), copysign );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	actual.push( it.next() );

	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which returns `NaN` if an iterated value is non-numeric', function test( t ) {
	var expected;
	var values1;
	var values2;
	var actual;
	var it0;
	var it1;
	var it;
	var i;

	values1 = [ '1.0', 2.0 ];
	values2 = [ 3.0, NaN ];
	expected = [
		{
			'value': NaN,
			'done': false
		},
		{
			'value': 2.0,
			'done': false
		},
		{
			'done': true
		}
	];

	it0 = array2iterator( values1 );
	it1 = array2iterator( values2 );

	it = iterMap2( it0, it1, copysign );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		if ( isnan( expected[ i ].value ) ) {
			t.equal( isnan( actual.value ), true, 'returns expected value' );
		} else {
			t.equal( actual.value, expected[ i ].value, 'returns expected value' );
		}
		t.equal( actual.done, expected[ i ].done, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which returns `NaN` if an iterated value is non-numeric', function test( t ) {
	var expected;
	var values1;
	var values2;
	var actual;
	var it0;
	var it1;
	var it;
	var i;

	values1 = [ 1.0, '2.0' ];
	values2 = [ NaN, 4.0 ];
	expected = [
		{
			'value': 1.0,
			'done': false
		},
		{
			'value': NaN,
			'done': false
		},
		{
			'done': true
		}
	];

	it0 = array2iterator( values1 );
	it1 = array2iterator( values2 );

	it = iterMap2( it0, it1, copysign );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		if ( isnan( expected[ i ].value ) ) {
			t.equal( isnan( actual.value ), true, 'returns expected value' );
		} else {
			t.equal( actual.value, expected[ i ].value, 'returns expected value' );
		}
		t.equal( actual.done, expected[ i ].done, 'returns expected value' );
	}
	t.end();
});

tape( 'the function supports specifying a return value for when an input iterator yields a non-numeric value', function test( t ) {
	var opts;
	var it;
	var r;
	var i;

	opts = {
		'invalid': null
	};
	it = iterMap2( map( randu(), toString ), randu(), scale, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < 100; i++ ) {
		r = it.next();
		t.equal( r.value, null, 'returns expected value' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	t.end();

	function toString( v ) {
		return v.toString();
	}

	function scale( v ) {
		return v;
	}
});

tape( 'the returned iterator has a `return` method for closing an iterator (no argument)', function test( t ) {
	var it;
	var r;

	it = iterMap2( randu(), randu(), copysign );

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

	it = iterMap2( randu(), randu(), copysign );

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

tape( 'if an environment supports `Symbol.iterator` and the provided iterators are iterable, the returned iterator is iterable', function test( t ) {
	var iterMap2;
	var rand1;
	var rand2;
	var opts;
	var it1;
	var it2;
	var i;

	iterMap2 = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	opts = {
		'seed': 12345
	};

	rand1 = randu( opts );
	rand1[ '__ITERATOR_SYMBOL__' ] = factory;

	rand2 = randu( opts );
	rand2[ '__ITERATOR_SYMBOL__' ] = factory;

	it1 = iterMap2( rand1, rand2, copysign );
	t.equal( typeof it1[ '__ITERATOR_SYMBOL__' ], 'function', 'has method' );
	t.equal( it1[ '__ITERATOR_SYMBOL__' ].length, 0, 'has zero arity' );

	it2 = it1[ '__ITERATOR_SYMBOL__' ]();
	t.equal( typeof it2, 'object', 'returns an object' );
	t.equal( typeof it2.next, 'function', 'has method' );
	t.equal( typeof it2.return, 'function', 'has method' );

	for ( i = 0; i < 100; i++ ) {
		t.equal( it2.next().value, it1.next().value, 'returns expected value' );
	}
	t.end();

	function factory() {
		return randu( opts );
	}
});

tape( 'if an environment supports `Symbol.iterator` and the provided iterators are iterable, the returned iterator is iterable (scalars)', function test( t ) {
	var iterMap2;
	var it1;
	var it2;
	var i;

	iterMap2 = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	it1 = iterMap2( 4.0, 3.0, copysign );
	t.equal( typeof it1[ '__ITERATOR_SYMBOL__' ], 'function', 'has method' );
	t.equal( it1[ '__ITERATOR_SYMBOL__' ].length, 0, 'has zero arity' );

	it2 = it1[ '__ITERATOR_SYMBOL__' ]();
	t.equal( typeof it2, 'object', 'returns an object' );
	t.equal( typeof it2.next, 'function', 'has method' );
	t.equal( typeof it2.return, 'function', 'has method' );

	for ( i = 0; i < 100; i++ ) {
		t.equal( it2.next().value, it1.next().value, 'returns expected value' );
	}
	t.end();
});

tape( 'if an environment does not support `Symbol.iterator`, the returned iterator is not "iterable"', function test( t ) {
	var iterMap2;
	var it;

	iterMap2 = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': false
	});

	it = iterMap2( randu(), randu(), copysign );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});

tape( 'if a provided iterator is not iterable, the returned iterator is not iterable', function test( t ) {
	var iterMap2;
	var rand;
	var it;

	iterMap2 = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	rand = randu();
	rand[ '__ITERATOR_SYMBOL__' ] = null;

	it = iterMap2( rand, rand, copysign );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});
