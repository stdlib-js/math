/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var pow = require( './../../../../base/special/pow' );
var randu = require( '@stdlib/random/base/randu' );
var isnan = require( './../../../../base/assert/is-nan' );
var pkg = require( './../package.json' ).name;
var factory = require( './../lib/factory.js' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var rational;
	var P;
	var Q;
	var i;

	P = [];
	Q = [];
	for ( i = 0; i < len; i++ ) {
		P.push( randu() );
		Q.push( randu() );
	}
	rational = factory( P, Q );
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var x;
		var v;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			x = ( randu()*100.0 ) - 50.0;
			v = rational( x );
			if ( isnan( v ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnan( v ) ) {
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
		bench( pkg+':factory:len='+len, f );
	}
}

main();
