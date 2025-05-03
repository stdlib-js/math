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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var zeros = require( '@stdlib/array/base/zeros' );
var round = require( './../../../../base/special/round' );
var sqrt = require( './../../../../base/special/sqrt' );
var pow = require( './../../../../base/special/pow' );
var abs = require( './../../../../base/special/abs' );
var isnan = require( './../../../../base/assert/is-nan' );
var PHI = require( '@stdlib/constants/float64/phi' );
var pkg = require( './../package.json' ).name;
var NEGAFIBONACCI = require( './../lib/negafibonacci.json' );
var negafibonacci = require( './../lib' );


// VARIABLES //

var SQRT_5 = sqrt( 5.0 );


// MAIN //

bench( pkg, function benchmark( b ) {
	var x;
	var y;
	var i;

	x = discreteUniform( 100, -78, 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = negafibonacci( x[ i%x.length ] );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::analytic', function benchmark( b ) {
	var x;
	var y;
	var i;

	function negafibonacci( n ) {
		var an = abs( n );
		return pow( -1.0, an+1 ) * round( pow( PHI, an ) / SQRT_5 );
	}

	x = discreteUniform( 100, -78, 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = negafibonacci( x[ i%x.length ] );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::table', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = discreteUniform( 100, -78, 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = NEGAFIBONACCI[ abs( x[ i%x.length ] ) ];
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::naive_recursion', function benchmark( b ) {
	var x;
	var y;
	var i;

	function negafibonacci( n ) {
		if ( n === 0 ) {
			return n;
		}
		if ( n === -1 ) {
			return 1;
		}
		return negafibonacci( n+2 ) - negafibonacci( n+1 );
	}

	x = discreteUniform( 100, -40, 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = negafibonacci( x[ i%x.length ] );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::recursion_memoized', function benchmark( b ) {
	var arr;
	var N;
	var x;
	var y;
	var i;

	arr = zeros( 79 );
	arr[ 0 ] = 0;
	arr[ 1 ] = 1;
	arr[ 2 ] = -1;
	N = 2;

	function negafibonacci( n ) {
		var an = abs( n );
		if ( an <= N ) {
			return arr[ an ];
		}
		arr[ an ] = negafibonacci( n+2 ) - negafibonacci( n+1 );
		return arr[ an ];
	}

	x = discreteUniform( 100, -40, 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = negafibonacci( x[ i%x.length ] );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::naive_iterative', function benchmark( b ) {
	var x;
	var y;
	var i;

	function negafibonacci( n ) {
		var arr;
		var an;
		var i;

		an = abs( n );

		arr = zeros( an+1 );
		arr[ 0 ] = 0;
		arr[ 1 ] = 1;
		arr[ 2 ] = -1;
		for ( i = 3; i <= an; i++ ) {
			arr[ i ] = arr[ i-2 ] - arr[ i-1 ];
		}
		return arr[ an ];
	}

	x = discreteUniform( 100, -40, 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = negafibonacci( x[ i%x.length ] );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::iterative', function benchmark( b ) {
	var x;
	var y;
	var i;

	function negafibonacci( n ) {
		var an;
		var a;
		var b;
		var c;
		var i;

		an = abs( n );

		a = 1;
		b = -1;
		for ( i = 3; i <= an; i++ ) {
			c = a - b;
			a = b;
			b = c;
		}
		return b;
	}

	x = discreteUniform( 100, -78, 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = negafibonacci( x[ i%x.length ] );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::iterative_memoized', function benchmark( b ) {
	var arr;
	var N;
	var x;
	var y;
	var i;

	arr = zeros( 79 );
	arr[ 0 ] = 0;
	arr[ 1 ] = 1;
	arr[ 2 ] = -1;
	N = 2;

	function negafibonacci( n ) {
		var an;
		var i;

		an = abs( n );
		if ( an > N ) {
			for ( i = N; i <= an; i++ ) {
				arr[ i ] = arr[ i-2 ] - arr[ i-1 ];
			}
			N = an;
		}
		return arr[ an ];
	}

	x = discreteUniform( 100, -78, 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = negafibonacci( x[ i%x.length ] );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
