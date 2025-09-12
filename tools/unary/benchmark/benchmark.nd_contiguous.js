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

var bench = require( '@stdlib/bench' );
var uniform = require( '@stdlib/random/uniform' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var isnan = require( './../../../base/assert/is-nan' );
var pow = require( './../../../base/special/pow' );
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var abs = require( './fixtures/dispatcher.js' );


// VARIABLES //

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
	var options;
	var x;

	options = {
		'dtype': dtype
	};
	x = uniform( [ size/2, 2, 1 ], -10.0, 10.0, options );

	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var out;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			out = abs( x );
			if ( typeof out !== 'object' ) {
				b.fail( 'should return an ndarray' );
			}
		}
		b.toc();
		if ( isnan( getData( out )[ i%size ] ) ) {
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
			bench( format( '%s:contiguous=true,ndims=3,dtype=%s,size=%d', pkg, dt, size ), f );
		}
	}
}

main();
