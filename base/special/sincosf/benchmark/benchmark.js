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
var isnanf = require( './../../../../base/assert/is-nanf' );
var sinf = require( './../../../../base/special/sinf' );
var cosf = require( './../../../../base/special/cosf' );
var pkg = require( './../package.json' ).name;
var sincosf = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var x;
	var y;
	var i;

	x = uniform( 100, -10.0, 10.0, {
		'dtype': 'float32'
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = sincosf( x[ i%x.length ] );
		if ( isnanf( y[0] ) || isnanf( y[1] ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnanf( y[0] ) || isnanf( y[1] ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::separate-evaluation', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = uniform( 100, -10.0, 10.0, {
		'dtype': 'float32'
	});
	y = [ 0.0, 0.0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = [ sinf( x[ i%x.length ] ), cosf( x[ i%x.length ] ) ];
		if ( isnanf( y[0] ) || isnanf( y[1] ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnanf( y[0] ) || isnanf( y[1] ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':assign', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = uniform( 100, -10.0, 10.0, {
		'dtype': 'float32'
	});
	y = [ 0.0, 0.0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		sincosf.assign( x[ i%x.length ], y, 1, 0 );
		if ( isnanf( y[0] ) || isnanf( y[1] ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnanf( y[0] ) || isnanf( y[1] ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::separate-evaluation,in-place', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = uniform( 100, -10.0, 10.0, {
		'dtype': 'float32'
	});
	y = [ 0.0, 0.0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y[0] = sinf( x[ i%x.length ] );
		y[1] = cosf( x[ i%x.length ] );
		if ( isnanf( y[0] ) || isnanf( y[1] ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnanf( y[0] ) || isnanf( y[1] ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
