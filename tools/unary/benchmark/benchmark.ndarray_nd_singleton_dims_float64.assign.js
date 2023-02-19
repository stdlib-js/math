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
var uniform = require( '@stdlib/random/base/uniform' ).factory;
var isnan = require( './../../../base/assert/is-nan' );
var pow = require( './../../../base/special/pow' );
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var pkg = require( './../package.json' ).name;
var abs = require( './fixtures/dispatcher.js' );


// VARIABLES //

var rand = uniform( -100.0, 100.0 );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var buf;
	var sh;
	var st;
	var x;
	var y;
	var i;

	buf = new Float64Array( len*2 );
	for ( i = 0; i < len*2; i++ ) {
		buf[ i ] = rand();
	}
	sh = [ len, 1, 1 ];
	st = [ 2, 1, 1 ];
	x = ndarray( 'float64', buf, sh, st, 0, 'row-major' );
	y = ndarray( x.dtype, new Float64Array( buf.length ), x.shape, x.strides, x.offset, x.order ); // eslint-disable-line max-len

	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			abs.assign( x, y );
			if ( isnan( y.data[ i%len ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnan( y.data[ i%len ] ) ) {
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
		bench( pkg+'::ndarray:assign:contiguous=false,ndims=3,singleton_dims=2,dtype=float64,len='+len, f );
	}
}

main();
