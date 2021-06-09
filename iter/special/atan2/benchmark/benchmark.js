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

var bench = require( '@stdlib/bench' );
var randu = require( '@stdlib/random/iter/randu' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isIteratorLike = require( '@stdlib/assert/is-iterator-like' );
var pkg = require( './../package.json' ).name;
var iterAtan2 = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var rand1;
	var rand2;
	var iter;
	var i;

	rand1 = randu();
	rand2 = randu();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		iter = iterAtan2( rand1, rand2 );
		if ( typeof iter !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isIteratorLike( iter ) ) {
		b.fail( 'should return an iterator protocol-compliant object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::iteration', function benchmark( b ) {
	var rand1;
	var rand2;
	var iter;
	var z;
	var i;

	rand1 = randu();
	rand2 = randu();

	iter = iterAtan2( rand1, rand2 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = iter.next().value;
		if ( isnan( z ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( z ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
