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
var isnan = require( './../../../../base/assert/is-nan' );
var pkg = require( './../package.json' ).name;
var hyp2f1 = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( bm ) {
	var x;
	var a;
	var b;
	var c;
	var z;
	var i;

	a = uniform( 100, -50.0, 50.0 );
	b = uniform( 100, -50.0, 50.0 );
	c = uniform( 100, -50.0, 50.0 );
	x = uniform( 100, -50.0, 50.0 );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		// eslint-disable-next-line max-len
		z = hyp2f1( a[ i % x.length ], b[ i % x.length ], c[ i % x.length ], x[ i % x.length ] );
		if ( isnan( z ) ) {
			bm.fail( 'should not return NaN' );
		}
	}
	bm.toc();
	if ( isnan( z ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});
