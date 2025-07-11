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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var roundf = require( './../../../../base/special/roundf' );
var sqrtf = require( './../../../../base/special/sqrtf' );
var pow = require( './../../../../base/special/pow' );
var absf = require( './../../../../base/special/absf' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var Float32Array = require( '@stdlib/array/float32' );
var PHI = require( '@stdlib/constants/float32/phi' );
var pkg = require( './../package.json' ).name;
var NEGAFIBONACCIF = require( './../lib/negafibonaccif.json' );
var negafibonaccif = require( './../lib' );


// VARIABLES //

var SQRT_5 = sqrtf( 5.0 );


// MAIN //

bench( pkg, function benchmark( b ) {
	var x;
	var y;
	var i;

	x = discreteUniform( 100, -36, 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = negafibonaccif( x[ i%x.length ] );
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

	function negafibonaccif( n ) {
		var an = absf( n );

		// TODO: replace with `powf` when available
		return pow( -1.0, an+1 ) * roundf( pow( PHI, an ) / SQRT_5 );
	}

	x = discreteUniform( 100, -36, 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = negafibonaccif( x[ i%x.length ] );
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

	x = discreteUniform( 100, -36, 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = NEGAFIBONACCIF[ absf( x[ i%x.length ] ) ];
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

	function negafibonaccif( n ) {
		if ( n === 0 ) {
			return n;
		}
		if ( n === -1 ) {
			return 1;
		}
		return negafibonaccif( n+2 ) - negafibonaccif( n+1 );
	}

	x = discreteUniform( 100, -36, 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = negafibonaccif( x[ i%x.length ] );
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

	arr = new Float32Array( 37 );
	arr[ 0 ] = 0;
	arr[ 1 ] = 1;
	arr[ 2 ] = -1;
	N = 2;

	function negafibonaccif( n ) {
		var an = absf( n );
		if ( an <= N ) {
			return arr[ an ];
		}
		arr[ an ] = negafibonaccif( n+2 ) - negafibonaccif( n+1 );
		return arr[ an ];
	}

	x = discreteUniform( 100, -36, 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = negafibonaccif( x[ i%x.length ] );
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

	function negafibonaccif( n ) {
		var arr;
		var an;
		var i;

		an = absf( n );

		arr = new Float32Array( an+1 );
		arr[ 0 ] = 0;
		arr[ 1 ] = 1;
		arr[ 2 ] = -1;
		for ( i = 3; i <= an; i++ ) {
			arr[ i ] = arr[ i-2 ] - arr[ i-1 ];
		}
		return arr[ an ];
	}

	x = discreteUniform( 100, -36, 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = negafibonaccif( x[ i%x.length ] );
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

	function negafibonaccif( n ) {
		var an;
		var a;
		var b;
		var c;
		var i;

		an = absf( n );

		a = 1;
		b = -1;
		for ( i = 3; i <= an; i++ ) {
			c = a - b;
			a = b;
			b = c;
		}
		return b;
	}

	x = discreteUniform( 100, -36, 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = negafibonaccif( x[ i%x.length ] );
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

	arr = new Float32Array( 37 );
	arr[ 0 ] = 0;
	arr[ 1 ] = 1;
	arr[ 2 ] = -1;
	N = 2;

	function negafibonaccif( n ) {
		var an;
		var i;

		an = absf( n );
		if ( an > N ) {
			for ( i = N; i <= an; i++ ) {
				arr[ i ] = arr[ i-2 ] - arr[ i-1 ];
			}
			N = an;
		}
		return arr[ an ];
	}

	x = discreteUniform( 100, -36, 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = negafibonaccif( x[ i%x.length ] );
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
