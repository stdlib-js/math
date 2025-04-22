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
var pow = require( './../../../../base/special/pow' );
var isnanf = require( './../../../../base/assert/is-nanf' );
var PHI = require( '@stdlib/constants/float32/phi' );
var zeros = require( '@stdlib/array/base/zeros' );
var pkg = require( './../package.json' ).name;
var LUCAS = require( './../lib/lucas.json' );
var lucasf = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var x;
	var y;
	var i;

	x = discreteUniform( 100, 0, 34, {
		'dtype': 'float32'
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = lucasf( x[ i%x.length ] );
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

	x = discreteUniform( 100, 0, 34, {
		'dtype': 'float32'
	});

	function lucasf( n ) {
		// TODO: replace with `powf` when available
		return roundf( pow( PHI, n ) );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = lucasf( x[ i%x.length ] );
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

	x = discreteUniform( 100, 0, 34, {
		'dtype': 'float32'
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = LUCAS[ x[ i%x.length ] ];
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

	function lucasf( n ) {
		if ( n === 0 ) {
			return 2;
		}
		if ( n === 1 ) {
			return 1;
		}
		return lucasf( n-1 ) + lucasf( n-2 );
	}

	x = discreteUniform( 100, 0, 20, {
		'dtype': 'float32'
	});  // limit upper bound

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = lucasf( x[ i%x.length ] );
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

	arr = zeros( 35 );
	arr[ 0 ] = 2;
	arr[ 1 ] = 1;
	N = 1;

	function lucasf( n ) {
		if ( n <= N ) {
			return arr[ n ];
		}
		arr[ n ] = lucasf( n-1 ) + lucasf( n-2 );
		return arr[ n ];
	}

	x = discreteUniform( 100, 0, 20, {
		'dtype': 'float32'
	}); // limit upper bound

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = lucasf( x[ i%x.length ] );
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

	function lucasf( n ) {
		var arr;
		var i;

		arr = zeros( n+1 );
		arr[ 0 ] = 2;
		arr[ 1 ] = 1;
		for ( i = 2; i <= n; i++ ) {
			arr[ i ] = arr[ i-1 ] + arr[ i-2 ];
		}
		return arr[ n ];
	}

	x = discreteUniform( 100, 0, 34, {
		'dtype': 'float32'
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = lucasf( x[ i%x.length ] );
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

	function lucasf( n ) {
		var a;
		var b;
		var c;
		var i;

		a = 2;
		if ( n === 0 ) {
			return a;
		}
		b = 1;
		for ( i = 2; i <= n; i++ ) {
			c = a + b;
			a = b;
			b = c;
		}
		return b;
	}

	x = discreteUniform( 100, 0, 34, {
		'dtype': 'float32'
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = lucasf( x[ i%x.length ] );
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

	arr = zeros( 35 );
	arr[ 0 ] = 2;
	arr[ 1 ] = 1;
	N = 1;

	function lucasf( n ) {
		var i;
		if ( n > N ) {
			for ( i = N+1; i <= n; i++ ) {
				arr[ i ] = arr[ i-1 ] + arr[ i-2 ];
			}
			N = n;
		}
		return arr[ n ];
	}

	x = discreteUniform( 100, 0, 34, {
		'dtype': 'float32'
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = lucasf( x[ i%x.length ] );
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
