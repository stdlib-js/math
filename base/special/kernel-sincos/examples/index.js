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

var linspace = require( '@stdlib/array/base/linspace' );
var PI = require( '@stdlib/constants/float64/pi' );
var kernelSincos = require( './../lib' );

var x = linspace( -PI/4.0, PI/4.0, 100 );

var y;
var i;
for ( i = 0; i < x.length; i++ ) {
	y = kernelSincos( x[ i ], 0.0, [ 0.0, 0.0 ], 1, 0 );
	console.log( 'kernelSincos(%d) = [ %d, %d ]', x[ i ], y[ 0 ], y[ 1 ] );
}
