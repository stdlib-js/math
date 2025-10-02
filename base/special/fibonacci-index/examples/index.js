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

var fibonacciIndex = require( './../lib' );

var F1;
var F2;
var FN;
var n;
var i;

F1 = 1;
F2 = 1;
for ( i = 3; i < 79; i++ ) {
	FN = F1 + F2;
	F1 = F2;
	F2 = FN;
	n = fibonacciIndex( FN );
	console.log( 'n(%d) = %d', FN, n );
}
