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

import array = require( './../../array' );
import base = require( './../../base' );
import iter = require( './../../iter' );
import special = require( './../../special' );
import strided = require( './../../strided' );
import tools = require( './../../tools' );

/**
* Interface describing the `math` namespace.
*/
interface Namespace {
	/**
	* Math functions applied to arrays.
	*/
	array: typeof array;

	/**
	* Base (i.e., lower-level) math functions.
	*/
	base: typeof base;

	/**
	* Math iterators.
	*/
	iter: typeof iter;

	/**
	* Special math functions.
	*/
	special: typeof special;

	/**
	* Strided array math functions.
	*/
	strided: typeof strided;

	/**
	* Math tools.
	*/
	tools: typeof tools;
}

/**
* Standard math.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
