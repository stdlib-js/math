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

var bench = require( '@stdlib/bench' );
var uniform = require( '@stdlib/random/array/uniform' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var pkg = require( './../package.json' ).name;
var factory = require( './../lib/factory.js' );


// MAIN //

bench( pkg+'::create:factory', function benchmark( b ) {
	var n;
	var f;
	var i;

	n = discreteUniform( 10, 1, 10, {
		'dtype': 'float32'
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		f = factory( n[ i%n.length ] );
		if ( typeof f !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( typeof f !== 'function' ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::evaluate:factory', function benchmark( b ) {
	var x;
	var v;
	var f;
	var i;

	f = factory( 2 );
	x = uniform( 10, -5.0, 5.0, {
		'dtype': 'float32'
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = f( x[ i%x.length ] );
		if ( isnanf( v ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnanf( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
