/*
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

/// <reference types="@stdlib/types"/>

import frexpf = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	frexpf( 4.0 ); // $ExpectType [number, number]
}

// The compiler throws an error if the function is provided an argument which is not a number...
{
	frexpf( true ); // $ExpectError
	frexpf( false ); // $ExpectError
	frexpf( null ); // $ExpectError
	frexpf( undefined ); // $ExpectError
	frexpf( '5' ); // $ExpectError
	frexpf( [] ); // $ExpectError
	frexpf( {} ); // $ExpectError
	frexpf( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	frexpf(); // $ExpectError
	frexpf( 1.0, 2.0 ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns an array-like object containing numbers...
{
	const out = [ 0.0, 0 ];

	frexpf.assign( 3.14e-319, out, 1, 0 ); // $ExpectType Collection<number>
}

// The compiler throws an error if the `assign` method is provided a first argument which is not a number...
{
	const out = [ 0.0, 0 ];

	frexpf.assign( true, out, 1, 0 ); // $ExpectError
	frexpf.assign( false, out, 1, 0 ); // $ExpectError
	frexpf.assign( '5', out, 1, 0 ); // $ExpectError
	frexpf.assign( null, out, 1, 0 ); // $ExpectError
	frexpf.assign( [], out, 1, 0 ); // $ExpectError
	frexpf.assign( {}, out, 1, 0 ); // $ExpectError
	frexpf.assign( ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an array-like object...
{
	frexpf.assign( 1.0, 1, 1, 0 ); // $ExpectError
	frexpf.assign( 1.0, true, 1, 0 ); // $ExpectError
	frexpf.assign( 1.0, false, 1, 0 ); // $ExpectError
	frexpf.assign( 1.0, null, 1, 0 ); // $ExpectError
	frexpf.assign( 1.0, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not a number...
{
	const out = [ 0.0, 0.0 ];

	frexpf.assign( 1.0, out, '5', 0 ); // $ExpectError
	frexpf.assign( 1.0, out, true, 0 ); // $ExpectError
	frexpf.assign( 1.0, out, false, 0 ); // $ExpectError
	frexpf.assign( 1.0, out, null, 0 ); // $ExpectError
	frexpf.assign( 1.0, out, [], 0 ); // $ExpectError
	frexpf.assign( 1.0, out, {}, 0 ); // $ExpectError
	frexpf.assign( 1.0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not a number...
{
	const out = [ 0.0, 0.0 ];

	frexpf.assign( 1.0, out, 1, '5' ); // $ExpectError
	frexpf.assign( 1.0, out, 1, true ); // $ExpectError
	frexpf.assign( 1.0, out, 1, false ); // $ExpectError
	frexpf.assign( 1.0, out, 1, null ); // $ExpectError
	frexpf.assign( 1.0, out, 1, [] ); // $ExpectError
	frexpf.assign( 1.0, out, 1, {} ); // $ExpectError
	frexpf.assign( 1.0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const out = [ 0.0, 0.0 ];

	frexpf.assign(); // $ExpectError
	frexpf.assign( 1.0 ); // $ExpectError
	frexpf.assign( 1.0, out ); // $ExpectError
	frexpf.assign( 1.0, out, 1 ); // $ExpectError
	frexpf.assign( 1.0, out, 1, 0, 1 ); // $ExpectError
}
