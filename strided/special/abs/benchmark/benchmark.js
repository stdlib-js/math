/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var randu = require( '@stdlib/random/base/randu' );
var isnan = require( './../../../../base/assert/is-nan' );
var pow = require( './../../../../base/special/pow' );
var round = require( './../../../../base/special/round' );
var filledarray = require( '@stdlib/array/filled' );
var resolveEnum = require( '@stdlib/strided/base/dtype-resolve-enum' );
var enum2str = require( '@stdlib/strided/base/dtype-enum2str' );
var pkg = require( './../package.json' ).name;
var types = require( './../lib/types.json' );
var strided = require( './../lib/main.js' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @param {string} xtype - input array data type
* @param {string} ytype - output array data type
* @returns {Function} benchmark function
*/
function createBenchmark( len, xtype, ytype ) {
	var x;
	var y;
	var i;

	x = filledarray( 0.0, len, xtype );
	y = filledarray( 0.0, len, ytype );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = round( ( randu()*200.0 ) - 100.0 );
	}
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
			z = strided( len, xtype, x, 1, ytype, y, 1 );
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
	var t1;
	var t2;
	var f;
	var i;
	var j;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( j = 0; j < types.length; j += 2 ) {
		t1 = enum2str( resolveEnum( types[ j ] ) );
		t2 = enum2str( resolveEnum( types[ j+1 ] ) );
		for ( i = min; i <= max; i++ ) {
			len = pow( 10, i );
			f = createBenchmark( len, t1, t2 );
			bench( pkg+':len='+len+',xtype='+t1+',ytype='+t2, f );
		}
	}
}

main();
