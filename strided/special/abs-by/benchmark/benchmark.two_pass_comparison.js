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
var isnan = require( './../../../../base/assert/is-nan' );
var pow = require( './../../../../base/special/pow' );
var filledarray = require( '@stdlib/array/filled' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var dabs = require( './../../../../strided/special/dabs' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var rand = uniform( -100.0, 100.0 );


// FUNCTIONS //

/**
* Accessor function.
*
* @private
* @param {number} value - array element
* @returns {number} accessed value
*/
function accessor( value ) {
	return value * 2.0;
}

/**
* Transforms the elements of a provided strided input array according to a callback function and assigns the results to elements in a strided output array.
*
* @private
* @param {NonNegativeInteger} N - number of index elements
* @param {Collection} x - input array
* @param {integer} strideX - `x` stride length
* @param {Collection} y - destination array
* @param {integer} strideY - `y` stride length
* @param {Callback} clbk - callback
* @param {*} [thisArg] - callback execution context
* @returns {Collection} `y`
*/
function map( N, x, strideX, y, strideY, clbk, thisArg ) {
	var ix;
	var iy;
	var r;
	var v;
	var i;

	if ( N <= 0 ) {
		return y;
	}
	if ( strideX < 0 ) {
		ix = (1-N) * strideX;
	} else {
		ix = 0;
	}
	if ( strideY < 0 ) {
		iy = (1-N) * strideY;
	} else {
		iy = 0;
	}
	r = rand(); // random noise
	for ( i = 0; i < N; i++ ) {
		v = clbk.call( thisArg, x[ ix ]+r, i, ix, iy, x, y );
		if ( v === void 0 ) {
			y[ iy ] = v;
		}
		ix += strideX;
		iy += strideY;
	}
	return y;
}

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var tmp;
	var x;
	var y;

	x = filledarrayBy( len, 'generic', rand );
	tmp = filledarray( 0.0, len, 'float64' );
	y = filledarray( 0.0, len, 'float64' );

	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var z;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			tmp = map( len, x, 1, tmp, 1, accessor ); // separate copy step
			z = dabs( len, tmp, 1, y, 1 );            // use type-optimized implementation
			if ( isnan( z[ i%len ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnan( z[ i%len ] ) ) {
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
		bench( pkg+'::two_pass_comparison:len='+len, f );
	}
}

main();
