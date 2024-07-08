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

var randu = require( '@stdlib/random/base/randu' );
var xlogy = require( './../lib' );

var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
	x = randu();
	if ( x < 0.5 ) {
		x = 0.0;
	}
	y = ( randu() * 20.0 ) - 5.0;
	console.log( 'xlogy(%d, %d) = %d', x, y, xlogy( x, y ) );
}