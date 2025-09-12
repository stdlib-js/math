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

// MODULES //

var bench = require( '@stdlib/bench' );
var isFunction = require( '@stdlib/assert/is-function' );
var base = require( './../../../base/special/abs' );
var basef = require( './../../../base/special/absf' );
var unary = require( '@stdlib/ndarray/base/unary' );
var dispatch = require( '@stdlib/ndarray/dispatch' );
var pkg = require( './../package.json' ).name;
var factory = require( './../lib' );


// VARIABLES //

// Define a table for resolving unary functions based on argument data types:
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

// Create a function which dispatches based on argument data types:
var dispatcher = dispatch( unary, types, data, 2, 1, 1 );

// Define supported input and output data types:
var idtypes = [
	'float64',
	'float32',
	'generic'
];
var odtypes = [
	'float64',
	'float32',
	'generic'
];

// Define dispatch policies:
var policies = {
	'output': 'same',
	'casting': 'none'
};


// MAIN //

bench( pkg, function benchmark( b ) {
	var f;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		f = factory( dispatcher, [ idtypes ], odtypes, policies );
		if ( typeof f !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( f ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
