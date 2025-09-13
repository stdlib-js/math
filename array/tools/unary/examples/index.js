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

var base = require( './../../../../base/special/sin' );
var uniform = require( '@stdlib/random/array/uniform' );
var dtypes = require( '@stdlib/array/dtypes' );
var dtype = require( '@stdlib/array/dtype' );
var logEach = require( '@stdlib/console/log-each' );
var Unary = require( './../lib' );

// Define the supported input and output data types:
var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_floating_point_and_generic' );

// Define the policy mapping an input data type to an output data type:
var policy = 'real_floating_point_and_generic';

// Create an interface for computing the element-wise sine:
var sin = new Unary( base, idt, odt, policy );

// Generate an array of random numbers:
var x = uniform( 10, -1.0, 1.0, {
	'dtype': 'generic'
});

// Compute the element-wise sine:
var y = sin.apply( x );

// Resolve the output array data type:
var dt = dtype( y );
console.log( dt );

// Print the results:
logEach( 'sin(%0.5f) = %0.5f', x, y );
