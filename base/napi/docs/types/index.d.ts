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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import binary = require( './../../../../base/napi/binary' );
import quaternary = require( './../../../../base/napi/quaternary' );
import quinary = require( './../../../../base/napi/quinary' );
import ternary = require( './../../../../base/napi/ternary' );
import unary = require( './../../../../base/napi/unary' );

/**
* Interface describing the `napi` namespace.
*/
interface Namespace {
	/**
	* Absolute file path for the directory containing header files for C APIs.
	*
	* @example
	* var dir = ns.binary;
	* // returns <string>
	*/
	binary: typeof binary;

	/**
	* Absolute file path for the directory containing header files for C APIs.
	*
	* @example
	* var dir = ns.quaternary;
	* // returns <string>
	*/
	quaternary: typeof quaternary;

	/**
	* Absolute file path for the directory containing header files for C APIs.
	*
	* @example
	* var dir = ns.quinary;
	* // returns <string>
	*/
	quinary: typeof quinary;

	/**
	* Absolute file path for the directory containing header files for C APIs.
	*
	* @example
	* var dir = ns.ternary;
	* // returns <string>
	*/
	ternary: typeof ternary;

	/**
	* Absolute file path for the directory containing header files for C APIs.
	*
	* @example
	* var dir = ns.unary;
	* // returns <string>
	*/
	unary: typeof unary;
}

/**
* C APIs for registering a Node-API module exporting interfaces.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
