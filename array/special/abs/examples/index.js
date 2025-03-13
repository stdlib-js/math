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

var uniform = require( '@stdlib/random/array/uniform' );
var logEach = require( '@stdlib/console/log-each' );
var abs = require( './../lib' );

// Generate an array of random numbers:
var x = uniform( 10, -1.0, 1.0, {
	'dtype': 'generic'
});

// Perform element-wise computation:
var y = abs( x );

// Print the results:
logEach( 'abs(%f) = %f', x, y );
