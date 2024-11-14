/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var randu = require( '@stdlib/random/base/randu' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var real = require( '@stdlib/complex/float32/real' );
var imag = require( '@stdlib/complex/float32/imag' );
var uniform = require( '@stdlib/random/base/uniform' );
var isArray = require( '@stdlib/assert/is-array' );
var floorf = require( './../../../../base/special/floorf' );
var pkg = require( './../package.json' ).name;
var cfloorf = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var y;
	var i;

	values = [
		new Complex64( uniform( -500.0, 500.0 ), uniform( -500.0, 500.0 ) ),
		new Complex64( uniform( -500.0, 500.0 ), uniform( -500.0, 500.0 ) )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = cfloorf( ( values[ i%values.length ] ) );
		if ( isnanf( real( y ) ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnanf( imag( y ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::manual', function benchmark( b ) {
	var re;
	var im;
	var y;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		re = ( randu()*1000.0 ) - 500.0;
		im = ( randu()*1000.0 ) - 500.0;
		y = [ floorf( re ), floorf( im ) ];
		if ( y.length === 0 ) {
			b.fail( 'should not be empty' );
		}
	}
	b.toc();
	if ( !isArray( y ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
