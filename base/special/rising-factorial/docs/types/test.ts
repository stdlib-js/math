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

import risingFactorial = require( './index' );


// TESTS //

// The function returns a number...
{
	risingFactorial( 0.9, 5 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	risingFactorial( true, 3 ); // $ExpectError
	risingFactorial( false, 2 ); // $ExpectError
	risingFactorial( '5', 1 ); // $ExpectError
	risingFactorial( [], 1 ); // $ExpectError
	risingFactorial( {}, 2 ); // $ExpectError
	risingFactorial( ( x: number ): number => x, 2 ); // $ExpectError

	risingFactorial( 9, true ); // $ExpectError
	risingFactorial( 9, false ); // $ExpectError
	risingFactorial( 5, '5' ); // $ExpectError
	risingFactorial( 8, [] ); // $ExpectError
	risingFactorial( 9, {} ); // $ExpectError
	risingFactorial( 8, ( x: number ): number => x ); // $ExpectError

	risingFactorial( [], true ); // $ExpectError
	risingFactorial( {}, false ); // $ExpectError
	risingFactorial( false, '5' ); // $ExpectError
	risingFactorial( {}, [] ); // $ExpectError
	risingFactorial( '5', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	risingFactorial(); // $ExpectError
	risingFactorial( 3 ); // $ExpectError
}
