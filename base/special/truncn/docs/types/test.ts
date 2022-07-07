/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

import truncn = require( './index' );


// TESTS //

// The function returns a number...
{
	truncn( 3.141592653589793, -4 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	truncn( true, 3 ); // $ExpectError
	truncn( false, 2 ); // $ExpectError
	truncn( '5', 1 ); // $ExpectError
	truncn( [], 1 ); // $ExpectError
	truncn( {}, 2 ); // $ExpectError
	truncn( ( x: number ): number => x, 2 ); // $ExpectError

	truncn( 9, true ); // $ExpectError
	truncn( 9, false ); // $ExpectError
	truncn( 5, '5' ); // $ExpectError
	truncn( 8, [] ); // $ExpectError
	truncn( 9, {} ); // $ExpectError
	truncn( 8, ( x: number ): number => x ); // $ExpectError

	truncn( [], true ); // $ExpectError
	truncn( {}, false ); // $ExpectError
	truncn( false, '5' ); // $ExpectError
	truncn( {}, [] ); // $ExpectError
	truncn( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	truncn(); // $ExpectError
	truncn( 3 ); // $ExpectError
}
