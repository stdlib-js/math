/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import iterContinuedFraction = require( './../../../../iter/utils/continued-fraction' );

/**
* Interface describing the `utils` namespace.
*/
interface Namespace {
	/**
	* Evaluates the terms of a continued fraction.
	*
	* @param iterator - input iterator
	* @param options - function options
	* @param options.iter - maximum number of iterations (default: 1e308)
	* @param options.tol - tolerance at which to terminate further evaluation of the continued fraction (default: floating-point epsilon)
	* @throws `iter` option must be a nonnegative integer
	* @throws `tol` option must be a positive finite number
	* @returns result
	*
	* @example
	* var ns.iterContinuedFractionSeq = require( './../../../../iter/sequences/continued-fraction' );
	*
	* // Create an iterator for generating continued fraction terms:
	* var it = ns.iterContinuedFractionSeq( 3.245 );
	*
	* // Reconstruct the original value from the terms:
	* var v = ns.iterContinuedFraction( it );
	* // returns ~3.245
	*/
	iterContinuedFraction: typeof iterContinuedFraction;
}

/**
* Math utility iterators.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
