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
var PI = require( '@stdlib/constants/float64/pi' );
var pkg = require( './../package.json' ).name;
var kernelSincos = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var x;
	var y;
	var z;
	var i;

	x = uniform( 100, -PI/4.0, PI/4.0 );
	z = [ 0.0, 0.0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = kernelSincos( x[ i%x.length ], 0.0, z, 1, 0 );
		if ( isnan( y[0] ) || isnan( y[1] ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y[0] ) || isnan( y[1] ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
