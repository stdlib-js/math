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

var linspace = require( '@stdlib/array/base/linspace' );
var ellipk = require( './../../../../base/special/ellipk' );
var ellipj = require( './../lib' );

var m = 0.7;
var u = linspace( 0.0, ellipk( m ), 100 );

var out;
var i;
for ( i = 0; i < 100; i++ ) {
	out = ellipj( u[ i ], m );
	console.log( 'sn(%d, %d) = %d', u[ i ], m, out[ 0 ] );
	console.log( 'cn(%d, %d) = %d', u[ i ], m, out[ 1 ] );
	console.log( 'dn(%d, %d) = %d', u[ i ], m, out[ 2 ] );
	console.log( 'am(%d, %d) = %d', u[ i ], m, out[ 3 ] );
}
