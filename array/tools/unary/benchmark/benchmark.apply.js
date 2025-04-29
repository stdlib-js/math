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
var isnan = require( './../../../../base/assert/is-nan' );
var pow = require( './../../../../base/special/pow' );
var identity = require( '@stdlib/number/float64/base/identity' );
var dtypes = require( '@stdlib/array/dtypes' );
var uniform = require( '@stdlib/random/array/uniform' );
var pkg = require( './../package.json' ).name;
var Unary = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var unary;
	var dt;

	dt = dtypes( 'real_floating_point' );
	unary = new Unary( identity, dt, dt, 'same' );

	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var values;
		var o;
		var i;

		values = [
			uniform( len, -50.0, 50.0, {
				'dtype': 'float64'
			}),
			uniform( len, -50.0, 50.0, {
				'dtype': 'float64'
			})
		];

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			o = unary.apply( values[ i%values.length ] );
			if ( isnan( o[ i%len ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnan( o[ i%len ] ) ) {
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
	var len;
	var min;
	var max;
	var f;
	var i;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( i = min; i <= max; i++ ) {
		len = pow( 10, i );
		f = createBenchmark( len );
		bench( pkg+':apply:len='+len, f );
	}
}

main();
