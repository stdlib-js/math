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

var abs = require( './../../../base/special/abs' );
var ns = require( './../lib' );

// Define a list of supported input dtypes:
var idtypes = [
	'float64',
	'float32',
	'generic'
];

// Define a list of supported output dtypes:
var odtypes = [
	'float64',
	'float32',
	'generic'
];

// Create a function for applying a unary function to each element of an array:
var f = new ns.unary( abs, idtypes, odtypes, 'same' );

// Create an input array:
var x = [ -1.0, 2.0, -3.0, 4.0 ];

// Perform element-wise computation:
var out = f.apply( x );
console.log( out );
// => [ 1.0, 2.0, 3.0, 4.0]
