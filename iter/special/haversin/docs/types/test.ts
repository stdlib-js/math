/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

import iterHaversin = require( './index' );

/**
* Returns an iterator protocol-compliant object.
*
* @returns iterator protocol-compliant object
*/
function iterator() {
	return {
		'next': next
	};
}

/**
* Implements the iterator protocol `next` method.
*
* @returns iterator protocol-compliant object
*/
function next() {
	return {
		'value': true,
		'done': false
	};
}


// TESTS //

// The function returns an iterator...
{
	iterHaversin( iterator() ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterHaversin( '5' ); // $ExpectError
	iterHaversin( 5 ); // $ExpectError
	iterHaversin( true ); // $ExpectError
	iterHaversin( false ); // $ExpectError
	iterHaversin( null ); // $ExpectError
	iterHaversin( undefined ); // $ExpectError
	iterHaversin( [] ); // $ExpectError
	iterHaversin( {} ); // $ExpectError
	iterHaversin( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterHaversin(); // $ExpectError
}
