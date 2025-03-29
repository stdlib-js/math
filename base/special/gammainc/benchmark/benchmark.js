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
var gammainc = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var x;
	var y;
	var z;
	var i;

	x = uniform( 100, 0.0, 1000.0 );
	y = uniform( 100, EPS, 1000.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = gammainc( x[ i%x.length ], y[ i%y.length ] );
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

bench( pkg+':regularized=true', function benchmark( b ) {
	var x;
	var y;
	var z;
	var i;

	x = uniform( 100, 0.0, 1000.0 );
	y = uniform( 100, EPS, 1000.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = gammainc( x[ i%x.length ], y[ i%y.length ], true );
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

bench( pkg+':regularized=false', function benchmark( b ) {
	var x;
	var y;
	var z;
	var i;

	x = uniform( 100, 0.0, 1000.0 );
	y = uniform( 100, EPS, 1000.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = gammainc( x[ i%x.length ], y[ i%y.length ], false );
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

bench( pkg+':regularized=true,upper=true', function benchmark( b ) {
	var x;
	var y;
	var z;
	var i;

	x = uniform( 100, 0.0, 1000.0 );
	y = uniform( 100, EPS, 1000.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = gammainc( x[ i%x.length ], y[ i%y.length ], true, true );
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

bench( pkg+':regularized=true,upper=false', function benchmark( b ) {
	var x;
	var y;
	var z;
	var i;

	x = uniform( 100, 0.0, 1000.0 );
	y = uniform( 100, EPS, 1000.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = gammainc( x[ i%x.length ], y[ i%y.length ], true, false );
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

bench( pkg+':regularized=false,upper=true', function benchmark( b ) {
	var x;
	var y;
	var z;
	var i;

	x = uniform( 100, 0.0, 1000.0 );
	y = uniform( 100, EPS, 1000.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = gammainc( x[ i%x.length ], y[ i%y.length ], false, true );
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

bench( pkg+':regularized=false,upper=false', function benchmark( b ) {
	var x;
	var y;
	var z;
	var i;

	x = uniform( 100, 0.0, 1000.0 );
	y = uniform( 100, EPS, 1000.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = gammainc( x[ i%x.length ], y[ i%y.length ], false, false );
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
