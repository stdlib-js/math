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
var roundf = require( './../../../../base/special/roundf' );
var sqrtf = require( './../../../../base/special/sqrtf' );
var pow = require( './../../../../base/special/pow' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var PHI = require( '@stdlib/constants/float32/phi' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var pkg = require( './../package.json' ).name;
var FIBONACCI = require( './../lib/fibonacci.json' );
var fibonaccif = require( './../lib' );


// VARIABLES //

var SQRT_5 = sqrtf( 5.0 );


// MAIN //

bench( pkg, function benchmark( b ) {
	var x;
	var y;
	var i;

	x = discreteUniform( 100, 0, 36 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = fibonaccif( x[ i%x.length ] );
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

bench( pkg+'::analytic', function benchmark( b ) {
	var x;
	var y;
	var i;

	function fibonaccif( n ) {
		// TODO: replace with powf once implemented
		return roundf( float64ToFloat32( pow( PHI, n ) ) / SQRT_5 );
	}

	x = discreteUniform( 100, 0, 36 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = fibonaccif( x[ i%x.length ] );
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

	x = discreteUniform( 100, 0, 36 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = FIBONACCI[ x[ i%x.length ] ];
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

	function fibonaccif( n ) {
		if ( n < 2 ) {
			return n;
		}
		return fibonaccif( n-1 ) + fibonaccif( n-2 );
	}

	x = discreteUniform( 100, 0, 36 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = fibonaccif( x[ i%x.length ] );
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

	arr = new Int32Array( 37 );
	arr[ 0 ] = 0;
	arr[ 1 ] = 1;
	arr[ 2 ] = 1;
	N = 2;

	function fibonaccif( n ) {
		if ( n <= N ) {
			return arr[ n ];
		}
		arr[ n ] = fibonaccif( n-1 ) + fibonaccif( n-2 );
		return arr[ n ];
	}

	x = discreteUniform( 100, 0, 36 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = fibonaccif( x[ i%x.length ] );
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

	function fibonaccif( n ) {
		var arr;
		var i;

		arr = new Int32Array( n+1 );
		arr[ 0 ] = 0;
		arr[ 1 ] = 1;
		arr[ 2 ] = 1;
		for ( i = 3; i <= n; i++ ) {
			arr[ i ] = arr[ i-1 ] + arr[ i-2 ];
		}
		return arr[ n ];
	}

	x = discreteUniform( 100, 0, 36 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = fibonaccif( x[ i%x.length ] );
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

	function fibonaccif( n ) {
		var a;
		var b;
		var c;
		var i;

		a = 1;
		b = 1;
		for ( i = 3; i <= n; i++ ) {
			c = a + b;
			a = b;
			b = c;
		}
		return b;
	}

	x = discreteUniform( 100, 0, 36 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = fibonaccif( x[ i%x.length ] );
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

	arr = new Int32Array( 37 );
	arr[ 0 ] = 0;
	arr[ 1 ] = 1;
	arr[ 2 ] = 1;
	N = 2;

	function fibonaccif( n ) {
		var i;
		if ( n > N ) {
			for ( i = N+1; i <= n; i++ ) {
				arr[ i ] = arr[ i-1 ] + arr[ i-2 ];
			}
			N = n;
		}
		return arr[ n ];
	}

	x = discreteUniform( 100, 0, 36 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = fibonaccif( x[ i%x.length ] );
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

bench( pkg+'::iterative_doubling', function benchmark( b ) {
	var x;
	var y;
	var i;

	function fibonaccif( n ) {
		var i = n - 1;
		var a = 1;
		var b = 0;
		var c = 0;
		var d = 1;
		var t;

		if ( n < 1 ) {
			return n;
		}
		while ( i > 0 ) {
			if ( (i&1) === 1 ) { // is odd
				t = (d*(b+a)) + (c*b);
				a = (d*b) + (c*a);
				b = t;
			}
			t = d * ((2*c) + d);
			c = (c*c) + (d*d);
			d = t;
			i >>= 1; // i >> 1 is equal to floorf( i/2 )
		}
		return a + b;
	}

	x = discreteUniform( 100, 0, 36 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = fibonaccif( x[ i%x.length ] );
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

bench( pkg+'::iterative_doubling_memoized', function benchmark( b ) {
	var arr;
	var N;
	var x;
	var y;
	var i;

	arr = new Int32Array( 37 );
	arr[ 0 ] = 0;
	arr[ 1 ] = 1;
	arr[ 2 ] = 1;
	N = 2;

	function fibonaccif( n ) {
		var i;
		var a;
		var b;
		var c;
		var d;
		var t;

		if ( n <= N ) {
			return arr[ n ];
		}
		if ( n < 1 ) {
			return n;
		}
		i = n - 1;
		a = 1;
		b = 0;
		c = 0;
		d = 1;
		while ( i > 0 ) {
			if ( (i&1) === 1 ) { // is odd
				t = (d*(b+a)) + (c*b);
				a = (d*b) + (c*a);
				b = t;
			}
			t = d * ((2*c) + d);
			c = (c*c) + (d*d);
			d = t;
			i >>= 1; // i >> 1 is equal to floorf( i/2 )
		}
		arr[ n ] = a + b;
		return a + b;
	}

	x = discreteUniform( 100, 0, 36 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = fibonaccif( x[ i%x.length ] );
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
