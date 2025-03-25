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
var isnan = require( './../../../../base/assert/is-nan' );
var EPS = require( '@stdlib/constants/float64/eps' );
var pkg = require( './../package.json' ).name;
var betainc = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( assert ) {
	var x;
	var y;
	var a;
	var b;
	var i;

	x = uniform( 100, 0.0, 1.0 );
	a = uniform( 100, EPS, 1000.0 );
	b = uniform( 100, EPS, 1000.0 );

	assert.tic();
	for ( i = 0; i < assert.iterations; i++ ) {
		y = betainc( x[ i % x.length ], a[ i % a.length ], b[ i % b.length ] );
		if ( isnan( y ) ) {
			assert.fail( 'should not return NaN' );
		}
	}
	assert.toc();
	if ( isnan( y ) ) {
		assert.fail( 'should not return NaN' );
	}
	assert.pass( 'benchmark finished' );
	assert.end();
});
