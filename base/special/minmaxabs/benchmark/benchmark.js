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
var uniform = require( '@stdlib/random/array/uniform' );
var isArray = require( '@stdlib/assert/is-array' );
var minabs = require( './../../../../base/special/minabs' );
var maxabs = require( './../../../../base/special/maxabs' );
var pkg = require( './../package.json' ).name;
var minmaxabs = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var x;
	var y;
	var z;
	var i;

	x = uniform( 100, -500.0, 500.0 );
	y = uniform( 100, -500.0, 500.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = minmaxabs( x[ i%x.length ], y[ i%y.length ] );
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

bench( pkg+':assign', function benchmark( b ) {
	var out;
	var x;
	var y;
	var z;
	var i;

	x = uniform( 100, -500.0, 500.0 );
	y = uniform( 100, -500.0, 500.0 );
	out = [ 0.0, 0.0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = minmaxabs.assign( x[ i%x.length ], y[ i%y.length ], out, 1, 0 );
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

bench( pkg+'::minabs,maxabs', function benchmark( b ) {
	var x;
	var y;
	var z;
	var i;

	x = uniform( 100, -500.0, 500.0 );
	y = uniform( 100, -500.0, 500.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = [ minabs( x[ i%x.length ], y[ i%y.length ] ), maxabs( x[ i%x.length ], y[ i%y.length ] ) ];
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

bench( pkg+'::minabs,maxabs,memory_reuse', function benchmark( b ) {
	var x;
	var y;
	var z;
	var i;

	x = uniform( 100, -500.0, 500.0 );
	y = uniform( 100, -500.0, 500.0 );
	z = [ 0.0, 0.0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z[ 0 ] = minabs( x[ i%x.length ], y[ i%y.length ] );
		z[ 1 ] = maxabs( x[ i%x.length ], y[ i%y.length ] );
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
