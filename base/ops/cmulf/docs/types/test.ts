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

import Complex64 = require( '@stdlib/complex/float32' );
import cmulf = require( './index' );


// TESTS //

// The function returns a complex number...
{
	const z = new Complex64( 1.0, 1.0 );

	cmulf( z, z ); // $ExpectType Complex64
}

// The compiler throws an error if the function is provided a first argument which is not a complex number...
{
	const z = new Complex64( 1.0, 1.0 );

	cmulf( true, z ); // $ExpectError
	cmulf( false, z ); // $ExpectError
	cmulf( null, z ); // $ExpectError
	cmulf( undefined, z ); // $ExpectError
	cmulf( '5', z ); // $ExpectError
	cmulf( [], z ); // $ExpectError
	cmulf( {}, z ); // $ExpectError
	cmulf( ( x: number ): number => x, z ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a complex number...
{
	const z = new Complex64( 1.0, 1.0 );

	cmulf( z, true ); // $ExpectError
	cmulf( z, false ); // $ExpectError
	cmulf( z, null ); // $ExpectError
	cmulf( z, undefined ); // $ExpectError
	cmulf( z, '5' ); // $ExpectError
	cmulf( z, [] ); // $ExpectError
	cmulf( z, {} ); // $ExpectError
	cmulf( z, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const z = new Complex64( 1.0, 1.0 );

	cmulf(); // $ExpectError
	cmulf( z ); // $ExpectError
	cmulf( z, z, z ); // $ExpectError
}
