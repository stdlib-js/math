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
var isnan = require( './../../../../base/assert/is-nan' );
var uniform = require( '@stdlib/random/array/uniform' );
var pkg = require( './../package.json' ).name;
var hypot = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': ( typeof Math.hypot !== 'function' ) // eslint-disable-line stdlib/no-builtin-math
};


// MAIN //

bench( pkg, function benchmark( b ) {
	var len;
	var x;
	var y;
	var z;
	var i;

	len = 100;
	x = uniform( len, -50, 50 );
	y = uniform( len, -50, 50 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = hypot( x[ i % len ], y[ i % len ] );
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

bench( pkg+'::built-in', opts, function benchmark( b ) {
	var len;
	var x;
	var y;
	var z;
	var i;

	len = 100;
	x = uniform( len, -50, 50 );
	y = uniform( len, -50, 50 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = Math.hypot( x[ i % len ], y[ i % len ] ); // eslint-disable-line stdlib/no-builtin-math
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
