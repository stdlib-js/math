/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import acoversinBy = require( './index' );

/**
* Accessor callback.
*
* @returns accessed value
*/
function accessor(): number {
	return 0.0;
}


// TESTS //

// The function returns a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acoversinBy( x.length, x, 1, y, 1, accessor ); // $ExpectType Collection<number>
	acoversinBy( x.length, x, 1, y, 1, accessor, {} ); // $ExpectType Collection<number>
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acoversinBy( '10', x, 1, y, 1, accessor ); // $ExpectError
	acoversinBy( true, x, 1, y, 1, accessor ); // $ExpectError
	acoversinBy( false, x, 1, y, 1, accessor ); // $ExpectError
	acoversinBy( null, x, 1, y, 1, accessor ); // $ExpectError
	acoversinBy( undefined, x, 1, y, 1, accessor ); // $ExpectError
	acoversinBy( [], x, 1, y, 1, accessor ); // $ExpectError
	acoversinBy( {}, x, 1, y, 1, accessor ); // $ExpectError
	acoversinBy( ( x: number ): number => x, x, 1, y, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acoversinBy( x.length, 10, 1, y, 1, accessor ); // $ExpectError
	acoversinBy( x.length, true, 1, y, 1, accessor ); // $ExpectError
	acoversinBy( x.length, false, 1, y, 1, accessor ); // $ExpectError
	acoversinBy( x.length, null, 1, y, 1, accessor ); // $ExpectError
	acoversinBy( x.length, undefined, 1, y, 1, accessor ); // $ExpectError
	acoversinBy( x.length, {}, 1, y, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acoversinBy( x.length, x, '10', y, 1, accessor ); // $ExpectError
	acoversinBy( x.length, x, true, y, 1, accessor ); // $ExpectError
	acoversinBy( x.length, x, false, y, 1, accessor ); // $ExpectError
	acoversinBy( x.length, x, null, y, 1, accessor ); // $ExpectError
	acoversinBy( x.length, x, undefined, y, 1, accessor ); // $ExpectError
	acoversinBy( x.length, x, [], y, 1, accessor ); // $ExpectError
	acoversinBy( x.length, x, {}, y, 1, accessor ); // $ExpectError
	acoversinBy( x.length, x, ( x: number ): number => x, y, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a collection...
{
	const x = new Float64Array( 10 );

	acoversinBy( x.length, x, 1, 10, 1, accessor ); // $ExpectError
	acoversinBy( x.length, x, 1, true, 1, accessor ); // $ExpectError
	acoversinBy( x.length, x, 1, false, 1, accessor ); // $ExpectError
	acoversinBy( x.length, x, 1, null, 1, accessor ); // $ExpectError
	acoversinBy( x.length, x, 1, undefined, 1, accessor ); // $ExpectError
	acoversinBy( x.length, x, 1, {}, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acoversinBy( x.length, x, 1, y, '10', accessor ); // $ExpectError
	acoversinBy( x.length, x, 1, y, true, accessor ); // $ExpectError
	acoversinBy( x.length, x, 1, y, false, accessor ); // $ExpectError
	acoversinBy( x.length, x, 1, y, null, accessor ); // $ExpectError
	acoversinBy( x.length, x, 1, y, undefined, accessor ); // $ExpectError
	acoversinBy( x.length, x, 1, y, [], accessor ); // $ExpectError
	acoversinBy( x.length, x, 1, y, {}, accessor ); // $ExpectError
	acoversinBy( x.length, x, 1, y, ( x: number ): number => x, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acoversinBy( x.length, x, 1, y, 1, '10' ); // $ExpectError
	acoversinBy( x.length, x, 1, y, 1, 0 ); // $ExpectError
	acoversinBy( x.length, x, 1, y, 1, true ); // $ExpectError
	acoversinBy( x.length, x, 1, y, 1, false ); // $ExpectError
	acoversinBy( x.length, x, 1, y, 1, null ); // $ExpectError
	acoversinBy( x.length, x, 1, y, 1, undefined ); // $ExpectError
	acoversinBy( x.length, x, 1, y, 1, [] ); // $ExpectError
	acoversinBy( x.length, x, 1, y, 1, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acoversinBy(); // $ExpectError
	acoversinBy( x.length ); // $ExpectError
	acoversinBy( x.length, x ); // $ExpectError
	acoversinBy( x.length, x, 1 ); // $ExpectError
	acoversinBy( x.length, x, 1, y ); // $ExpectError
	acoversinBy( x.length, x, 1, y, 1 ); // $ExpectError
	acoversinBy( x.length, x, 1, y, 1, accessor, 10, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acoversinBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor ); // $ExpectType Collection<number>
	acoversinBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor, {} ); // $ExpectType Collection<number>
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acoversinBy.ndarray( '10', x, 1, 0, y, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( true, x, 1, 0, y, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( false, x, 1, 0, y, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( null, x, 1, 0, y, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( undefined, x, 1, 0, y, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( [], x, 1, 0, y, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( {}, x, 1, 0, y, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( ( x: number ): number => x, x, 1, 0, y, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acoversinBy.ndarray( x.length, 10, 1, 0, y, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, true, 1, 0, y, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, false, 1, 0, y, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, null, 1, 0, y, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, undefined, 1, 0, y, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, {}, 1, 0, y, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acoversinBy.ndarray( x.length, x, '10', 0, y, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, true, 0, y, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, false, 0, y, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, null, 0, y, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, undefined, 0, y, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, [], 0, y, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, {}, 0, y, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, ( x: number ): number => x, 0, y, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acoversinBy.ndarray( x.length, x, 1, '10', y, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, true, y, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, false, y, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, null, y, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, undefined, y, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, [], y, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, {}, y, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, ( x: number ): number => x, y, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a collection...
{
	const x = new Float64Array( 10 );

	acoversinBy.ndarray( x.length, x, 1, 0, 10, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0, true, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0, false, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0, null, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0, undefined, 1, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0, {}, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acoversinBy.ndarray( x.length, x, 1, 0, y, '10', 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0, y, true, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0, y, false, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0, y, null, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0, y, undefined, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0, y, [], 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0, y, {}, 0, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0, y, ( x: number ): number => x, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acoversinBy.ndarray( x.length, x, 1, 0, y, 1, '10', accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0, y, 1, true, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0, y, 1, false, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0, y, 1, null, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0, y, 1, undefined, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0, y, 1, [], accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0, y, 1, {}, accessor ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0, y, 1, ( x: number ): number => x, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acoversinBy.ndarray( x.length, x, 1, 0, y, 1, 0, '10' ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0, y, 1, 0, 0 ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0, y, 1, 0, true ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0, y, 1, 0, false ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0, y, 1, 0, null ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0, y, 1, 0, undefined ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0, y, 1, 0, [] ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0, y, 1, 0, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	acoversinBy.ndarray(); // $ExpectError
	acoversinBy.ndarray( x.length ); // $ExpectError
	acoversinBy.ndarray( x.length, x ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1 ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0 ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0, y ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0, y, 1 ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0, y, 1, 0 ); // $ExpectError
	acoversinBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor, 10, 10 ); // $ExpectError
}
