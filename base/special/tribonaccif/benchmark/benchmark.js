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
var Int32Array = require( '@stdlib/array/int32' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var pkg = require( './../package.json' ).name;
var TRIBONACCIF = require( './../lib/tribonaccif.json' );
var tribonaccif = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var x;
	var y;
	var i;

	x = discreteUniform( 100, 0, 30 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = tribonaccif( x[ i%x.length ] );
		if ( isnanf( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnanf( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::table', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = discreteUniform( 100, 0, 30 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = TRIBONACCIF[ x[ i%x.length ] ];
		if ( isnanf( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnanf( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::naive_recursion', function benchmark( b ) {
	var x;
	var y;
	var i;

	function tribonaccif( n ) {
		if ( n < 2 ) {
			return 0;
		}
		if ( n === 2 ) {
			return 1;
		}
		return tribonaccif( n-1 ) + tribonaccif( n-2 ) + tribonaccif( n-3 );
	}

	x = discreteUniform( 100, 0, 10 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = tribonaccif( x[ i%x.length ] );
		if ( isnanf( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnanf( y ) ) {
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

	arr = new Int32Array( 32 );
	arr[ 0 ] = 0;
	arr[ 1 ] = 0;
	arr[ 2 ] = 1;
	N = 2;

	function tribonaccif( n ) {
		if ( n <= N ) {
			return arr[ n ];
		}
		arr[ n ] = tribonaccif( n-1 ) + tribonaccif( n-2 ) + tribonaccif( n-3 );
		return arr[ n ];
	}

	x = discreteUniform( 100, 0, 10 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = tribonaccif( x[ i%x.length ] );
		if ( isnanf( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnanf( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::naive_iterative', function benchmark( b ) {
	var x;
	var y;
	var i;

	function tribonaccif( n ) {
		var arr;
		var i;

		arr = new Int32Array( n+1 );
		arr[ 0 ] = 0;
		arr[ 1 ] = 0;
		arr[ 2 ] = 1;
		for ( i = 3; i <= n; i++ ) {
			arr[ i ] = arr[ i-1 ] + arr[ i-2 ] + arr[ i-3 ];
		}
		return arr[ n ];
	}

	x = discreteUniform( 100, 0, 30 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = tribonaccif( x[ i%x.length ] );
		if ( isnanf( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnanf( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::iterative', function benchmark( b ) {
	var x;
	var y;
	var i;

	function tribonaccif( n ) {
		var a;
		var b;
		var c;
		var d;
		var i;

		a = 0;
		b = 0;
		c = 1;
		for ( i = 4; i <= n; i++ ) {
			d = a + b + c;
			a = b;
			b = c;
			c = d;
		}
		return c;
	}

	x = discreteUniform( 100, 0, 30 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = tribonaccif( x[ i%x.length ] );
		if ( isnanf( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnanf( y ) ) {
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

	arr = new Int32Array( 31 );
	arr[ 0 ] = 0;
	arr[ 1 ] = 0;
	arr[ 2 ] = 1;
	N = 2;

	function tribonaccif( n ) {
		var i;
		if ( n > N ) {
			for ( i = N+1; i <= n; i++ ) {
				arr[ i ] = arr[ i-1 ] + arr[ i-2 ] + arr[ i-3 ];
			}
			N = n;
		}
		return arr[ n ];
	}

	x = discreteUniform( 100, 0, 30 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = tribonaccif( x[ i%x.length ] );
		if ( isnanf( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnanf( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
