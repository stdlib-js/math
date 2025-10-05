/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var tryRequire = require( '@stdlib/utils/try-require' );
var bench = require( '@stdlib/bench' );
var uniform = require( '@stdlib/random/uniform' );
var isnan = require( './../../../base/assert/is-nan' );
var pow = require( './../../../base/special/pow' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var abs = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( abs instanceof Error )
};
var DTYPES = [
	'float64',
	'float32',
	'generic'
];


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} size - array size
* @param {string} dtype - data type
* @returns {Function} benchmark function
*/
function createBenchmark( size, dtype ) {
	var x = uniform( [ size, 1, 1 ], -10.0, 10.0, {
		'dtype': dtype
	});
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var y;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			y = abs( x );
			if ( typeof y !== 'object' ) {
				b.fail( 'should return an ndarray' );
			}
		}
		b.toc();
		if ( isnan( getData( y )[ i%size ] ) ) {
			b.fail( 'should not return NaN' );
		}
		b.pass( 'benchmark finished' );
		b.end();
	}
}


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var size;
	var min;
	var max;
	var dt;
	var f;
	var i;
	var j;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( j = 0; j < DTYPES.length; j++ ) {
		dt = DTYPES[ j ];
		for ( i = min; i <= max; i++ ) {
			size = pow( 10, i );
			f = createBenchmark( size, dt );
			bench( format( '%s::native:contiguous=false,ndims=3,singleton_dims=2,dtype=%s,size=%d', pkg, dt, size ), opts, f );
		}
	}
}

main();
