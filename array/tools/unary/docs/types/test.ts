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
import Unary = require( './index' );


// TESTS //

// The function returns an instance for applying a unary function...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	new Unary<number, number>( abs, dtypes, dtypes, 'same' ); // $ExpectType UnaryFunction<number, number>

	const unary = Unary;
	unary<number, number>( abs, dtypes, dtypes, 'same' ); // $ExpectType UnaryFunction<number, number>
}

// The compiler throws an error if the function is provided a first argument which is not a unary function...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	new Unary( '5', dtypes, dtypes, 'same' ); // $ExpectError
	new Unary( 5, dtypes, dtypes, 'same' ); // $ExpectError
	new Unary( true, dtypes, dtypes, 'same' ); // $ExpectError
	new Unary( false, dtypes, dtypes, 'same' ); // $ExpectError
	new Unary( null, dtypes, dtypes, 'same' ); // $ExpectError
	new Unary( void 0, dtypes, dtypes, 'same' ); // $ExpectError
	new Unary( 'abc', dtypes, dtypes, 'same' ); // $ExpectError
	new Unary( {}, dtypes, dtypes, 'same' ); // $ExpectError
	new Unary( ( x: number, y: number ): number => x + y, dtypes, dtypes, 'same' ); // $ExpectError

	const unary = Unary;
	unary( '5', dtypes, dtypes, 'same' ); // $ExpectError
	unary( 5, dtypes, dtypes, 'same' ); // $ExpectError
	unary( true, dtypes, dtypes, 'same' ); // $ExpectError
	unary( false, dtypes, dtypes, 'same' ); // $ExpectError
	unary( null, dtypes, dtypes, 'same' ); // $ExpectError
	unary( void 0, dtypes, dtypes, 'same' ); // $ExpectError
	unary( 'abc', dtypes, dtypes, 'same' ); // $ExpectError
	unary( {}, dtypes, dtypes, 'same' ); // $ExpectError
	unary( ( x: number, y: number ): number => x + y, dtypes, dtypes, 'same' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a list of data types...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	new Unary<number, number>( abs, '5', dtypes, 'same' ); // $ExpectError
	new Unary<number, number>( abs, 5, dtypes, 'same' ); // $ExpectError
	new Unary<number, number>( abs, true, dtypes, 'same' ); // $ExpectError
	new Unary<number, number>( abs, false, dtypes, 'same' ); // $ExpectError
	new Unary<number, number>( abs, null, dtypes, 'same' ); // $ExpectError
	new Unary<number, number>( abs, void 0, dtypes, 'same' ); // $ExpectError
	new Unary<number, number>( abs, 'abc', dtypes, 'same' ); // $ExpectError
	new Unary<number, number>( abs, {}, dtypes, 'same' ); // $ExpectError
	new Unary<number, number>( abs, ( x: number ): number => x, dtypes, 'same' ); // $ExpectError

	const unary = Unary;
	unary<number, number>( abs, '5', dtypes, 'same' ); // $ExpectError
	unary<number, number>( abs, 5, dtypes, 'same' ); // $ExpectError
	unary<number, number>( abs, true, dtypes, 'same' ); // $ExpectError
	unary<number, number>( abs, false, dtypes, 'same' ); // $ExpectError
	unary<number, number>( abs, null, dtypes, 'same' ); // $ExpectError
	unary<number, number>( abs, void 0, dtypes, 'same' ); // $ExpectError
	unary<number, number>( abs, 'abc', dtypes, 'same' ); // $ExpectError
	unary<number, number>( abs, {}, dtypes, 'same' ); // $ExpectError
	unary<number, number>( abs, ( x: number ): number => x, dtypes, 'same' ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a list of data types...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	new Unary<number, number>( abs, dtypes, '5', 'same' ); // $ExpectError
	new Unary<number, number>( abs, dtypes, 5, 'same' ); // $ExpectError
	new Unary<number, number>( abs, dtypes, true, 'same' ); // $ExpectError
	new Unary<number, number>( abs, dtypes, false, 'same' ); // $ExpectError
	new Unary<number, number>( abs, dtypes, null, 'same' ); // $ExpectError
	new Unary<number, number>( abs, dtypes, void 0, 'same' ); // $ExpectError
	new Unary<number, number>( abs, dtypes, 'abc', 'same' ); // $ExpectError
	new Unary<number, number>( abs, dtypes, {}, 'same' ); // $ExpectError
	new Unary<number, number>( abs, dtypes, ( x: number ): number => x, 'same' ); // $ExpectError

	const unary = Unary;
	unary<number, number>( abs, dtypes, '5', 'same' ); // $ExpectError
	unary<number, number>( abs, dtypes, 5, 'same' ); // $ExpectError
	unary<number, number>( abs, dtypes, true, 'same' ); // $ExpectError
	unary<number, number>( abs, dtypes, false, 'same' ); // $ExpectError
	unary<number, number>( abs, dtypes, null, 'same' ); // $ExpectError
	unary<number, number>( abs, dtypes, void 0, 'same' ); // $ExpectError
	unary<number, number>( abs, dtypes, 'abc', 'same' ); // $ExpectError
	unary<number, number>( abs, dtypes, {}, 'same' ); // $ExpectError
	unary<number, number>( abs, dtypes, ( x: number ): number => x, 'same' ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a recognized policy...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	new Unary<number, number>( abs, dtypes, dtypes, '5' ); // $ExpectError
	new Unary<number, number>( abs, dtypes, dtypes, 5 ); // $ExpectError
	new Unary<number, number>( abs, dtypes, dtypes, true ); // $ExpectError
	new Unary<number, number>( abs, dtypes, dtypes, false ); // $ExpectError
	new Unary<number, number>( abs, dtypes, dtypes, null ); // $ExpectError
	new Unary<number, number>( abs, dtypes, dtypes, void 0 ); // $ExpectError
	new Unary<number, number>( abs, dtypes, dtypes, 'abc' ); // $ExpectError
	new Unary<number, number>( abs, dtypes, dtypes, {} ); // $ExpectError
	new Unary<number, number>( abs, dtypes, dtypes, ( x: number ): number => x ); // $ExpectError

	const unary = Unary;
	unary<number, number>( abs, dtypes, dtypes, '5' ); // $ExpectError
	unary<number, number>( abs, dtypes, dtypes, 5 ); // $ExpectError
	unary<number, number>( abs, dtypes, dtypes, true ); // $ExpectError
	unary<number, number>( abs, dtypes, dtypes, false ); // $ExpectError
	unary<number, number>( abs, dtypes, dtypes, null ); // $ExpectError
	unary<number, number>( abs, dtypes, dtypes, void 0 ); // $ExpectError
	unary<number, number>( abs, dtypes, dtypes, 'abc' ); // $ExpectError
	unary<number, number>( abs, dtypes, dtypes, {} ); // $ExpectError
	unary<number, number>( abs, dtypes, dtypes, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	new Unary(); // $ExpectError
	new Unary<number, number>( abs ); // $ExpectError
	new Unary<number, number>( abs, dtypes ); // $ExpectError
	new Unary<number, number>( abs, dtypes, dtypes, 'same', {} ); // $ExpectError

	const unary = Unary;
	unary(); // $ExpectError
	unary<number, number>( abs ); // $ExpectError
	unary<number, number>( abs, dtypes ); // $ExpectError
	unary<number, number>( abs, dtypes, dtypes, 'same', {} ); // $ExpectError
}

// The function returns an instance having a `apply` method which returns an array...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	const f1 = new Unary<number, number>( abs, dtypes, dtypes, 'same' );
	f1.apply( [ 1.0, 2.0, 3.0, 4.0 ] ); // $ExpectType OutputArray<number>
	f1.apply( [ 1.0, 2.0, 3.0, 4.0 ], {} ); // $ExpectType OutputArray<number>

	const unary = Unary;
	const f2 = unary<number, number>( abs, dtypes, dtypes, 'same' );
	f2.apply( [ 1.0, 2.0, 3.0, 4.0 ] ); // $ExpectType OutputArray<number>
	f2.apply( [ 1.0, 2.0, 3.0, 4.0 ], {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the `apply` method is provided a first argument which is not an array...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	const f1 = new Unary<number, number>( abs, dtypes, dtypes, 'same' );
	f1.apply( '5' ); // $ExpectError
	f1.apply( 5 ); // $ExpectError
	f1.apply( true ); // $ExpectError
	f1.apply( false ); // $ExpectError
	f1.apply( null ); // $ExpectError
	f1.apply( void 0 ); // $ExpectError
	f1.apply( {} ); // $ExpectError
	f1.apply( ( x: number ): number => x ); // $ExpectError

	f1.apply( '5', {} ); // $ExpectError
	f1.apply( 5, {} ); // $ExpectError
	f1.apply( true, {} ); // $ExpectError
	f1.apply( false, {} ); // $ExpectError
	f1.apply( null, {} ); // $ExpectError
	f1.apply( void 0, {} ); // $ExpectError
	f1.apply( {}, {} ); // $ExpectError
	f1.apply( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `apply` method is provided a second argument which is not an object...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	const f1 = new Unary<number, number>( abs, dtypes, dtypes, 'same' );
	f1.apply( [ 1.0, 2.0, 3.0, 4.0 ], '5' ); // $ExpectError
	f1.apply( [ 1.0, 2.0, 3.0, 4.0 ], true ); // $ExpectError
	f1.apply( [ 1.0, 2.0, 3.0, 4.0 ], false ); // $ExpectError
	f1.apply( [ 1.0, 2.0, 3.0, 4.0 ], null ); // $ExpectError
	f1.apply( [ 1.0, 2.0, 3.0, 4.0 ], [] ); // $ExpectError
	f1.apply( [ 1.0, 2.0, 3.0, 4.0 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `apply` method is provided an invalid `dtype` option...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	const f1 = new Unary<number, number>( abs, dtypes, dtypes, 'same' );
	f1.apply( [ 1.0, 2.0, 3.0, 4.0 ], { 'dtype': '5' } ); // $ExpectError
	f1.apply( [ 1.0, 2.0, 3.0, 4.0 ], { 'dtype': 5 } ); // $ExpectError
	f1.apply( [ 1.0, 2.0, 3.0, 4.0 ], { 'dtype': true } ); // $ExpectError
	f1.apply( [ 1.0, 2.0, 3.0, 4.0 ], { 'dtype': false } ); // $ExpectError
	f1.apply( [ 1.0, 2.0, 3.0, 4.0 ], { 'dtype': null } ); // $ExpectError
	f1.apply( [ 1.0, 2.0, 3.0, 4.0 ], { 'dtype': [] } ); // $ExpectError
	f1.apply( [ 1.0, 2.0, 3.0, 4.0 ], { 'dtype': {} } ); // $ExpectError
	f1.apply( [ 1.0, 2.0, 3.0, 4.0 ], { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `apply` method is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	const f1 = new Unary<number, number>( abs, dtypes, dtypes, 'same' );
	f1.apply(); // $ExpectError
	f1.apply( [ 1.0, 2.0, 3.0, 4.0 ], {}, {} ); // $ExpectError
}

// The function returns an instance having an `assign` method which returns an array...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const x = zeros( 10, 'float64' );

	const f1 = new Unary<number, number>( abs, dtypes, dtypes, 'same' );
	f1.assign( x, x ); // $ExpectType OutputArray<number>

	const unary = Unary;
	const f2 = unary<number, number>( abs, dtypes, dtypes, 'same' );
	f2.assign( x, x ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an array-like object...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const x = zeros( 10, 'float64' );

	const f1 = new Unary<number, number>( abs, dtypes, dtypes, 'same' );
	f1.assign( '5', x ); // $ExpectError
	f1.assign( 5, x ); // $ExpectError
	f1.assign( true, x ); // $ExpectError
	f1.assign( false, x ); // $ExpectError
	f1.assign( null, x ); // $ExpectError
	f1.assign( void 0, x ); // $ExpectError
	f1.assign( {}, x ); // $ExpectError
	f1.assign( ( x: number ): number => x, x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an array-like object...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const x = zeros( 10, 'float64' );

	const f1 = new Unary<number, number>( abs, dtypes, dtypes, 'same' );
	f1.assign( x, '5' ); // $ExpectError
	f1.assign( x, 5 ); // $ExpectError
	f1.assign( x, true ); // $ExpectError
	f1.assign( x, false ); // $ExpectError
	f1.assign( x, null ); // $ExpectError
	f1.assign( x, void 0 ); // $ExpectError
	f1.assign( x, {} ); // $ExpectError
	f1.assign( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const x = zeros( 10, 'float64' );

	const f1 = new Unary<number, number>( abs, dtypes, dtypes, 'same' );
	f1.assign(); // $ExpectError
	f1.assign( x ); // $ExpectError
	f1.assign( x, x, {} ); // $ExpectError
}
