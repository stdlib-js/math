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

/* eslint-disable @typescript-eslint/no-unused-expressions */

/// <reference types="@stdlib/types"/>

import { DataType } from '@stdlib/types/array';
import abs = require( './../../../../../base/special/abs' );
import zeros = require( '@stdlib/array/zeros' );
import factory = require( './index' );


// TESTS //

// The function returns a function...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	factory<number, number>( abs, dtypes, dtypes, 'same' ); // $ExpectType UnaryFunction<number, number>
}

// The compiler throws an error if the function is provided a first argument which is not a unary function...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	factory( '5', dtypes, dtypes, 'same' ); // $ExpectError
	factory( 5, dtypes, dtypes, 'same' ); // $ExpectError
	factory( true, dtypes, dtypes, 'same' ); // $ExpectError
	factory( false, dtypes, dtypes, 'same' ); // $ExpectError
	factory( null, dtypes, dtypes, 'same' ); // $ExpectError
	factory( void 0, dtypes, dtypes, 'same' ); // $ExpectError
	factory( 'abc', dtypes, dtypes, 'same' ); // $ExpectError
	factory( {}, dtypes, dtypes, 'same' ); // $ExpectError
	factory( ( x: number, y: number ): number => x + y, dtypes, dtypes, 'same' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a list of data types...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	factory<number, number>( abs, '5', dtypes, 'same' ); // $ExpectError
	factory<number, number>( abs, 5, dtypes, 'same' ); // $ExpectError
	factory<number, number>( abs, true, dtypes, 'same' ); // $ExpectError
	factory<number, number>( abs, false, dtypes, 'same' ); // $ExpectError
	factory<number, number>( abs, null, dtypes, 'same' ); // $ExpectError
	factory<number, number>( abs, void 0, dtypes, 'same' ); // $ExpectError
	factory<number, number>( abs, 'abc', dtypes, 'same' ); // $ExpectError
	factory<number, number>( abs, {}, dtypes, 'same' ); // $ExpectError
	factory<number, number>( abs, ( x: number ): number => x, dtypes, 'same' ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a list of data types...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	factory<number, number>( abs, dtypes, '5', 'same' ); // $ExpectError
	factory<number, number>( abs, dtypes, 5, 'same' ); // $ExpectError
	factory<number, number>( abs, dtypes, true, 'same' ); // $ExpectError
	factory<number, number>( abs, dtypes, false, 'same' ); // $ExpectError
	factory<number, number>( abs, dtypes, null, 'same' ); // $ExpectError
	factory<number, number>( abs, dtypes, void 0, 'same' ); // $ExpectError
	factory<number, number>( abs, dtypes, 'abc', 'same' ); // $ExpectError
	factory<number, number>( abs, dtypes, {}, 'same' ); // $ExpectError
	factory<number, number>( abs, dtypes, ( x: number ): number => x, 'same' ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a recognized policy...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	factory<number, number>( abs, dtypes, dtypes, '5' ); // $ExpectError
	factory<number, number>( abs, dtypes, dtypes, 5 ); // $ExpectError
	factory<number, number>( abs, dtypes, dtypes, true ); // $ExpectError
	factory<number, number>( abs, dtypes, dtypes, false ); // $ExpectError
	factory<number, number>( abs, dtypes, dtypes, null ); // $ExpectError
	factory<number, number>( abs, dtypes, dtypes, void 0 ); // $ExpectError
	factory<number, number>( abs, dtypes, dtypes, 'abc' ); // $ExpectError
	factory<number, number>( abs, dtypes, dtypes, {} ); // $ExpectError
	factory<number, number>( abs, dtypes, dtypes, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	factory(); // $ExpectError
	factory<number, number>( abs ); // $ExpectError
	factory<number, number>( abs, dtypes ); // $ExpectError
	factory<number, number>( abs, dtypes, dtypes, 'same', {} ); // $ExpectError
}

// The function returns a function which returns an array...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	const f = factory<number, number>( abs, dtypes, dtypes, 'same' );
	f( [ 1.0, 2.0, 3.0, 4.0 ] ); // $ExpectType OutputArray<number>
	f( [ 1.0, 2.0, 3.0, 4.0 ], {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the returned function is provided a first argument which is not an array...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	const f = factory<number, number>( abs, dtypes, dtypes, 'same' );
	f( '5' ); // $ExpectError
	f( 5 ); // $ExpectError
	f( true ); // $ExpectError
	f( false ); // $ExpectError
	f( null ); // $ExpectError
	f( void 0 ); // $ExpectError
	f( {} ); // $ExpectError
	f( ( x: number ): number => x ); // $ExpectError

	f( '5', {} ); // $ExpectError
	f( 5, {} ); // $ExpectError
	f( true, {} ); // $ExpectError
	f( false, {} ); // $ExpectError
	f( null, {} ); // $ExpectError
	f( void 0, {} ); // $ExpectError
	f( {}, {} ); // $ExpectError
	f( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a second argument which is not an object...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	const f = factory<number, number>( abs, dtypes, dtypes, 'same' );
	f( [ 1.0, 2.0, 3.0, 4.0 ], '5' ); // $ExpectError
	f( [ 1.0, 2.0, 3.0, 4.0 ], true ); // $ExpectError
	f( [ 1.0, 2.0, 3.0, 4.0 ], false ); // $ExpectError
	f( [ 1.0, 2.0, 3.0, 4.0 ], null ); // $ExpectError
	f( [ 1.0, 2.0, 3.0, 4.0 ], [] ); // $ExpectError
	f( [ 1.0, 2.0, 3.0, 4.0 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the returned function is provided an invalid `dtype` option...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	const f = factory<number, number>( abs, dtypes, dtypes, 'same' );
	f( [ 1.0, 2.0, 3.0, 4.0 ], { 'dtype': '5' } ); // $ExpectError
	f( [ 1.0, 2.0, 3.0, 4.0 ], { 'dtype': 5 } ); // $ExpectError
	f( [ 1.0, 2.0, 3.0, 4.0 ], { 'dtype': true } ); // $ExpectError
	f( [ 1.0, 2.0, 3.0, 4.0 ], { 'dtype': false } ); // $ExpectError
	f( [ 1.0, 2.0, 3.0, 4.0 ], { 'dtype': null } ); // $ExpectError
	f( [ 1.0, 2.0, 3.0, 4.0 ], { 'dtype': [] } ); // $ExpectError
	f( [ 1.0, 2.0, 3.0, 4.0 ], { 'dtype': {} } ); // $ExpectError
	f( [ 1.0, 2.0, 3.0, 4.0 ], { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the returned function is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	const f = factory<number, number>( abs, dtypes, dtypes, 'same' );
	f(); // $ExpectError
	f( [ 1.0, 2.0, 3.0, 4.0 ], {}, {} ); // $ExpectError
}

// The function returns a function having an `assign` method which returns an array...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const x = zeros( 10, 'float64' );

	const f = factory<number, number>( abs, dtypes, dtypes, 'same' );
	f.assign( x, x ); // $ExpectType Float64Array
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an array-like object...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const x = zeros( 10, 'float64' );

	const f = factory<number, number>( abs, dtypes, dtypes, 'same' );
	f.assign( '5', x ); // $ExpectError
	f.assign( 5, x ); // $ExpectError
	f.assign( true, x ); // $ExpectError
	f.assign( false, x ); // $ExpectError
	f.assign( null, x ); // $ExpectError
	f.assign( void 0, x ); // $ExpectError
	f.assign( {}, x ); // $ExpectError
	f.assign( ( x: number ): number => x, x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an array-like object...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const x = zeros( 10, 'float64' );

	const f = factory<number, number>( abs, dtypes, dtypes, 'same' );
	f.assign( x, '5' ); // $ExpectError
	f.assign( x, 5 ); // $ExpectError
	f.assign( x, true ); // $ExpectError
	f.assign( x, false ); // $ExpectError
	f.assign( x, null ); // $ExpectError
	f.assign( x, void 0 ); // $ExpectError
	f.assign( x, {} ); // $ExpectError
	f.assign( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const x = zeros( 10, 'float64' );

	const f = factory<number, number>( abs, dtypes, dtypes, 'same' );
	f.assign(); // $ExpectError
	f.assign( x ); // $ExpectError
	f.assign( x, x, {} ); // $ExpectError
}
