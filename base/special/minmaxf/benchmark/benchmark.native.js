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

var resolve = require( 'path' ).resolve;
var bench = require( '@stdlib/bench' );
var uniform = require( '@stdlib/random/array/uniform' );
var isFloat32Array = require( '@stdlib/assert/is-float32array' );
var tryRequire = require( '@stdlib/utils/try-require' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var minmaxf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( minmaxf instanceof Error )
};


// MAIN //

bench( pkg+'::native', opts, function benchmark( b ) {
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
		z = minmaxf( x[ i%x.length ], y[ i%y.length ] );
		if ( z.length !== 2 ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isFloat32Array( z ) ) {
		b.fail( 'should return a Float32Array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
