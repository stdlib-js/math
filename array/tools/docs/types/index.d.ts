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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import unary = require( './../../../../array/tools/unary' );
import unaryFactory = require( './../../../../array/tools/unary-factory' );

/**
* Interface describing the `tools` namespace.
*/
interface Namespace {
	/**
	* Constructor for applying a unary function to each element in a provided array.
	*
	* @param fcn - unary function to apply
	* @param idtypes - list of supported input data types
	* @param odtypes - list of supported output data types
	* @param policy - output data type policy
	* @returns instance
	*
	* @example
	* var base = require( './../../../../base/special/abs' );
	* var dtypes = require( '@stdlib/array/dtypes' );
	*
	* var idt = dtypes( 'real_and_generic' );
	* var odt = idt;
	* var policy = 'same';
	*
	* var abs = new Unary( base, idt, odt, policy );
	*
	* var x = [ -1.0, -2.0, -3.0 ];
	*
	* var y = abs.apply( x );
	* // returns [ 1.0, 2.0, 3.0 ]
	*/
	unary: typeof unary;

	/**
	* Creates a function for applying a unary function to each element in a provided array.
	*
	* @param fcn - unary function to apply
	* @param idtypes - list of supported input data types
	* @param odtypes - list of supported output data types
	* @param policy - output data type policy
	* @returns function for applying a unary function
	*
	* @example
	* var base = require( './../../../../base/special/abs' );
	* var dtypes = require( '@stdlib/array/dtypes' );
	*
	* var idt = dtypes( 'real_and_generic' );
	* var odt = idt;
	* var policy = 'same';
	*
	* var abs = ns.unaryFactory( base, idt, odt, policy );
	*
	* var x = [ -1.0, -2.0, -3.0 ];
	*
	* var y = abs( x );
	* // returns [ 1.0, 2.0, 3.0 ]
	*/
	unaryFactory: typeof unaryFactory;
}

/**
* Math array function tools.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
