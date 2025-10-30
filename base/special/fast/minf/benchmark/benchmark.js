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
var isnanf = require( './../../../../../base/assert/is-nanf' );
var pkg = require( './../package.json' ).name;
var minf = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var opts;
	var x;
	var y;
	var z;
	var i;

	opts = {
		'dtype': 'float32'
	};
	x = uniform( 100, -100.0, 100.0, opts );
	y = uniform( 100, -100.0, 100.0, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = minf( x[ i%x.length ], y[ i%y.length ] );
		if ( isnanf( z ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnanf( z ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
