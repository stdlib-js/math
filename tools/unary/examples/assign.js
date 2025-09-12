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

/* eslint-disable array-element-newline */

'use strict';

var base = require( './../../../base/special/abs' );
var basef = require( './../../../base/special/absf' );
var uniform = require( '@stdlib/random/uniform' );
var dispatch = require( '@stdlib/ndarray/dispatch' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var zerosLike = require( '@stdlib/ndarray/zeros-like' );
var getShape = require( '@stdlib/ndarray/shape' );
var getDType = require( '@stdlib/ndarray/dtype' );
var unary = require( '@stdlib/ndarray/base/unary' );
var ufunc = require( './../lib' );

// Create a function which dispatches based on argument data types:
var types = [
	'float64', 'float64',
	'float32', 'float32',
	'generic', 'generic'
];
var data = [
	base,
	basef,
	base
];
var dispatcher = dispatch( unary, types, data, 2, 1, 1 );

// Define the supported input and output data types:
var idt = [ 'float64', 'float32', 'generic' ];
var odt = [ 'float64', 'float32', 'generic' ];

// Define dispatch policies:
var policies = {
	'output': 'same',
	'casting': 'none'
};

// Create a function performs element-wise computation:
var abs = ufunc( dispatcher, [ idt ], odt, policies );

// Generate an array of random numbers:
var x = uniform( [ 2, 2 ], -10.0, 10.0, {
	'dtype': 'float64'
});
console.log( ndarray2array( x ) );

// Create an output array:
var y = zerosLike( x, {
	'shape': getShape( x )
});
console.log( ndarray2array( y ) );

// Perform element-wise computation:
var out = abs.assign( x, y );
console.log( ndarray2array( out ) );

var bool = ( out === y );
console.log( bool );

// Create another output array which requires `x` to broadcast:
y = zerosLike( x, {
	'shape': [ 2, 2, 2 ]
});

// Perform element-wise computation:
out = abs.assign( x, y );
console.log( ndarray2array( out ) );

// Create a zero-dimensional array:
x = uniform( [], -10.0, 10.0, {
	'dtype': getDType( x )
});

// Perform element-wise computation:
out = abs.assign( x, y );
console.log( ndarray2array( out ) );
