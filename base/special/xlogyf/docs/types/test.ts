/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import xlogyf = require( './index' );


// TESTS //

// The function returns a number...
{
	xlogyf( 8, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	xlogyf( true, 3 ); // $ExpectError
	xlogyf( false, 2 ); // $ExpectError
	xlogyf( '5', 1 ); // $ExpectError
	xlogyf( [], 1 ); // $ExpectError
	xlogyf( {}, 2 ); // $ExpectError
	xlogyf( ( x: number ): number => x, 2 ); // $ExpectError

	xlogyf( 9, true ); // $ExpectError
	xlogyf( 9, false ); // $ExpectError
	xlogyf( 5, '5' ); // $ExpectError
	xlogyf( 8, [] ); // $ExpectError
	xlogyf( 9, {} ); // $ExpectError
	xlogyf( 8, ( x: number ): number => x ); // $ExpectError

	xlogyf( [], true ); // $ExpectError
	xlogyf( {}, false ); // $ExpectError
	xlogyf( false, '5' ); // $ExpectError
	xlogyf( {}, [] ); // $ExpectError
	xlogyf( '5', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	xlogyf(); // $ExpectError
	xlogyf( 3 ); // $ExpectError
}
