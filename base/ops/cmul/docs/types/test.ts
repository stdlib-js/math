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

import Complex128 = require( '@stdlib/complex/float64' );
import cmul = require( './index' );


// TESTS //

// The function returns a complex number...
{
	const z = new Complex128( 1.0, 1.0 );

	cmul( z, z ); // $ExpectType ComplexLike
}

// The compiler throws an error if the function is provided a first argument which is not a complex number...
{
	const z = new Complex128( 1.0, 1.0 );

	cmul( true, z ); // $ExpectError
	cmul( false, z ); // $ExpectError
	cmul( null, z ); // $ExpectError
	cmul( undefined, z ); // $ExpectError
	cmul( '5', z ); // $ExpectError
	cmul( [], z ); // $ExpectError
	cmul( {}, z ); // $ExpectError
	cmul( ( x: number ): number => x, z ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a complex number...
{
	const z = new Complex128( 1.0, 1.0 );

	cmul( z, true ); // $ExpectError
	cmul( z, false ); // $ExpectError
	cmul( z, null ); // $ExpectError
	cmul( z, undefined ); // $ExpectError
	cmul( z, '5' ); // $ExpectError
	cmul( z, [] ); // $ExpectError
	cmul( z, {} ); // $ExpectError
	cmul( z, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const z = new Complex128( 1.0, 1.0 );

	cmul(); // $ExpectError
	cmul( z ); // $ExpectError
	cmul( z, z, z ); // $ExpectError
}
