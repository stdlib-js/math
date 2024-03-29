/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var resolve = require( 'path' ).resolve;
var randu = require( '@stdlib/random/base/randu' );
var round = require( './../../../../base/special/round' );
var Float64Array = require( '@stdlib/array/float64' );
var tryRequire = require( '@stdlib/utils/try-require' );

var compile = tryRequire( resolve( __dirname, '..', 'lib' ) );
if ( compile instanceof Error ) {
	console.log( 'Unable to run example. Unsupported environment.' );
} else {
	main();
}

function main() {
	var sign;
	var str;
	var P;
	var Q;
	var i;

	// Create two arrays of random coefficients...
	P = new Float64Array( 10 );
	Q = new Float64Array( 10 );
	for ( i = 0; i < P.length; i++ ) {
		if ( randu() < 0.5 ) {
			sign = -1.0;
		} else {
			sign = 1.0;
		}
		P[ i ] = sign * round( randu()*100.0 );
		Q[ i ] = sign * round( randu()*100.0 );
	}

	// Compile a function for evaluating a rational function:
	str = compile( P, Q );
	console.log( str );
}
