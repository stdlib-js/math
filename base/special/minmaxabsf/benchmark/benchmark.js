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

var bench = require( '@stdlib/bench' );
var uniform = require( '@stdlib/random/array/uniform' );
var isArray = require( '@stdlib/assert/is-array' );
var minabsf = require( './../../../../base/special/minabsf' );
var maxabsf = require( './../../../../base/special/maxabsf' );
var pkg = require( './../package.json' ).name;
var minmaxabsf = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var x;
	var y;
	var z;
	var i;

	x = uniform( 100, -500.0, 500.0, {
		'dtype': 'float32'
	});
	y = uniform( 100, -500.0, 500.0, {
		'dtype': 'float32'
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = minmaxabsf( x[ i%x.length ], y[ i%y.length ] );
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

	x = uniform( 100, -500.0, 500.0, {
		'dtype': 'float32'
	});
	y = uniform( 100, -500.0, 500.0, {
		'dtype': 'float32'
	});
	out = [ 0.0, 0.0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = minmaxabsf.assign( x[ i%x.length ], y[ i%y.length ], out, 1, 0 );
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

bench( pkg+'::minabsf,maxabsf', function benchmark( b ) {
	var x;
	var y;
	var z;
	var i;

	x = uniform( 100, -500.0, 500.0, {
		'dtype': 'float32'
	});
	y = uniform( 100, -500.0, 500.0, {
		'dtype': 'float32'
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = [ minabsf( x[ i%x.length ], y[ i%y.length ] ), maxabsf( x[ i%x.length ], y[ i%y.length ] ) ];
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

bench( pkg+'::minabsf,maxabsf,memory_reuse', function benchmark( b ) {
	var x;
	var y;
	var z;
	var i;

	x = uniform( 100, -500.0, 500.0, {
		'dtype': 'float32'
	});
	y = uniform( 100, -500.0, 500.0, {
		'dtype': 'float32'
	});
	z = [ 0.0, 0.0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z[ 0 ] = minabsf( x[ i%x.length ], y[ i%y.length ] );
		z[ 1 ] = maxabsf( x[ i%x.length ], y[ i%y.length ] );
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
