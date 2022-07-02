/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var randu = require( '@stdlib/random/base/randu' );
var isArray = require( '@stdlib/assert/is-array' );
var min = require( './../../../../base/special/min' );
var max = require( './../../../../base/special/max' );
var pkg = require( './../package.json' ).name;
var minmax = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var x;
	var y;
	var z;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ( randu()*1000.0 ) - 500.0;
		y = ( randu()*1000.0 ) - 500.0;
		z = minmax( x, y );
		if ( z.length !== 2 ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isArray( z ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::memory_reuse', function benchmark( b ) {
	var out;
	var x;
	var y;
	var z;
	var i;

	out = [ 0.0, 0.0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ( randu()*1000.0 ) - 500.0;
		y = ( randu()*1000.0 ) - 500.0;
		z = minmax( out, x, y );
		if ( z.length !== 2 ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isArray( z ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::min,max', function benchmark( b ) {
	var x;
	var y;
	var z;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ( randu()*1000.0 ) - 500.0;
		y = ( randu()*1000.0 ) - 500.0;
		z = [ min( x, y ), max( x, y ) ];
		if ( z.length !== 2 ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isArray( z ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::min,max,memory_reuse', function benchmark( b ) {
	var x;
	var y;
	var z;
	var i;

	z = [ 0.0, 0.0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ( randu()*1000.0 ) - 500.0;
		y = ( randu()*1000.0 ) - 500.0;
		z[ 0 ] = min( x, y );
		z[ 1 ] = max( x, y );
		if ( z.length !== 2 ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isArray( z ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
