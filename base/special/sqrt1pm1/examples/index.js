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
var round = require( './../../../../base/special/round' );
var sqrt1pm1 = require( './../lib' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
	x = round( randu() * 100.0 );
	console.log( 'sqrt(1+%d) - 1 = %d', x, sqrt1pm1( x ) );
}
