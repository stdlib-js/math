/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

/// <reference types="@stdlib/types"/>

import { Iterator as Iter, IterableIterator } from '@stdlib/types/iter';

// Define a union type representing both iterable and non-iterable iterators:
type Iterator = Iter | IterableIterator;

/**
* Interface describing function options.
*/
interface Options {
	/**
	* Number of iterations.
	*/
	iter?: number;
}

/**
* Returns an iterator which generates a Tribonacci sequence.
*
* ## Notes
*
* -   The returned iterator can only generate the first `64` Tribonacci numbers, as larger Tribonacci numbers cannot be safely represented in double-precision floating-point format.
* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
*
* @param options - function options
* @param options.iter - number of iterations (default: 64)
* @throws `iter` option must be a nonnegative integer
* @throws `iter` option must be less than or equal to 64
* @returns iterator
*
* @example
* var iter = iterTribonacciSeq();
*
* var v = iter.next().value;
* // returns 0
*
* v = iter.next().value;
* // returns 0
*
* v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 2
*
* // ...
*/
declare function iterTribonacciSeq( options?: Options ): Iterator;


// EXPORTS //

export = iterTribonacciSeq;
