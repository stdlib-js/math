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

import iterCompositesSeq = require( './../../../../iter/sequences/composites' );
import iterContinuedFractionSeq = require( './../../../../iter/sequences/continued-fraction' );
import iterCubesSeq = require( './../../../../iter/sequences/cubes' );
import iterEvenIntegersSeq = require( './../../../../iter/sequences/even-integers' );
import iterFactorialsSeq = require( './../../../../iter/sequences/factorials' );
import iterFibonacciSeq = require( './../../../../iter/sequences/fibonacci' );
import iterFifthPowersSeq = require( './../../../../iter/sequences/fifth-powers' );
import iterFourthPowersSeq = require( './../../../../iter/sequences/fourth-powers' );
import iterIntegersSeq = require( './../../../../iter/sequences/integers' );
import iterLucasSeq = require( './../../../../iter/sequences/lucas' );
import iterNegaFibonacciSeq = require( './../../../../iter/sequences/negafibonacci' );
import iterNegaLucasSeq = require( './../../../../iter/sequences/negalucas' );
import iterNegativeEvenIntegersSeq = require( './../../../../iter/sequences/negative-even-integers' );
import iterNegativeIntegersSeq = require( './../../../../iter/sequences/negative-integers' );
import iterNegativeOddIntegersSeq = require( './../../../../iter/sequences/negative-odd-integers' );
import iterNonFibonacciSeq = require( './../../../../iter/sequences/nonfibonacci' );
import iterNonNegativeEvenIntegersSeq = require( './../../../../iter/sequences/nonnegative-even-integers' );
import iterNonNegativeIntegersSeq = require( './../../../../iter/sequences/nonnegative-integers' );
import iterNonPositiveEvenIntegersSeq = require( './../../../../iter/sequences/nonpositive-even-integers' );
import iterNonPositiveIntegersSeq = require( './../../../../iter/sequences/nonpositive-integers' );
import iterNonSquaresSeq = require( './../../../../iter/sequences/nonsquares' );
import iterOddIntegersSeq = require( './../../../../iter/sequences/odd-integers' );
import iterPositiveEvenIntegersSeq = require( './../../../../iter/sequences/positive-even-integers' );
import iterPositiveIntegersSeq = require( './../../../../iter/sequences/positive-integers' );
import iterPositiveOddIntegersSeq = require( './../../../../iter/sequences/positive-odd-integers' );
import iterPrimesSeq = require( './../../../../iter/sequences/primes' );
import iterSquaredTriangularSeq = require( './../../../../iter/sequences/squared-triangular' );
import iterSquaresSeq = require( './../../../../iter/sequences/squares' );
import iterTriangularSeq = require( './../../../../iter/sequences/triangular' );

/**
* Interface describing the `sequences` namespace.
*/
interface Namespace {
	/**
	* Returns an iterator which generates a sequence of composite numbers.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.iter - number of iterations (default: 1e308)
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var iter = ns.iterCompositesSeq();
	*
	* var v = iter.next().value;
	* // returns 4
	*
	* v = iter.next().value;
	* // returns 6
	*
	* v = iter.next().value;
	* // returns 8
	*
	* // ...
	*/
	iterCompositesSeq: typeof iterCompositesSeq;

	/**
	* Returns an iterator which generates a list of all continued fraction terms which can be obtained given the precision of `x`.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param x - input value
	* @param options - function options
	* @param options.iter - maximum number of iterations (default: 1e308)
	* @param options.tol - tolerance at which to terminate further evaluation of the continued fraction (default: floating-point epsilon)
	* @param options.returns - specifies the type of result to return (default: 'terms')
	* @throws `iter` option must be a nonnegative integer
	* @throws `tol` option must be a positive finite number
	* @returns iterator
	*
	* @example
	* var iter = ns.iterContinuedFractionSeq( 3.245 );
	*
	* var v = iter.next().value;
	* // returns 3
	*
	* v = iter.next().value;
	* // returns 4
	*
	* v = iter.next().value;
	* // returns 12
	*
	* v = iter.next().value;
	* // returns 4
	*
	* var bool = iter.next().done;
	* // returns true
	*/
	iterContinuedFractionSeq: typeof iterContinuedFractionSeq;

	/**
	* Returns an iterator which generates a sequence of cubes.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.iter - number of iterations (default: 208063)
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var iter = ns.iterCubesSeq();
	*
	* var v = iter.next().value;
	* // returns 0
	*
	* v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 8
	*
	* // ...
	*/
	iterCubesSeq: typeof iterCubesSeq;

	/**
	* Returns an iterator which generates an interleaved sequence of even integers.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.iter - number of iterations (default: 9007199254740992)
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var iter = ns.iterEvenIntegersSeq();
	*
	* var v = iter.next().value;
	* // returns 0
	*
	* v = iter.next().value;
	* // returns 2
	*
	* v = iter.next().value;
	* // returns -2
	*
	* // ...
	*/
	iterEvenIntegersSeq: typeof iterEvenIntegersSeq;

	/**
	* Returns an iterator which generates a sequence of factorials.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.iter - number of iterations (default: 1e308)
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var iter = ns.iterFactorialsSeq();
	*
	* var v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 2
	*
	* // ...
	*/
	iterFactorialsSeq: typeof iterFactorialsSeq;

	/**
	* Returns an iterator which generates a Fibonacci sequence.
	*
	* ## Notes
	*
	* -   The returned iterator can only generate the first `79` Fibonacci numbers, as larger Fibonacci numbers cannot be safely represented in double-precision floating-point format.
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.iter - number of iterations (default: 79)
	* @throws `iter` option must be a nonnegative integer
	* @throws `iter` option must be less than or equal to 79
	* @returns iterator
	*
	* @example
	* var iter = ns.iterFibonacciSeq();
	*
	* var v = iter.next().value;
	* // returns 0
	*
	* v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 1
	*
	* // ...
	*/
	iterFibonacciSeq: typeof iterFibonacciSeq;

	/**
	* Returns an iterator which generates a sequence of fifth powers.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.iter - number of iterations (default: 1552)
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var iter = ns.iterFifthPowersSeq();
	*
	* var v = iter.next().value;
	* // returns 0
	*
	* v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 32
	*
	* // ...
	*/
	iterFifthPowersSeq: typeof iterFifthPowersSeq;

	/**
	* Returns an iterator which generates a sequence of fourth powers.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.iter - number of iterations (default: 9741)
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var iter = ns.iterFourthPowersSeq();
	*
	* var v = iter.next().value;
	* // returns 0
	*
	* v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 16
	*
	* // ...
	*/
	iterFourthPowersSeq: typeof iterFourthPowersSeq;

	/**
	* Returns an iterator which generates an interleaved integer sequence.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.iter - number of iterations (default: 18014398509481984)
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var iter = ns.iterIntegersSeq();
	*
	* var v = iter.next().value;
	* // returns 0
	*
	* v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns -1
	*
	* // ...
	*/
	iterIntegersSeq: typeof iterIntegersSeq;

	/**
	* Returns an iterator which generates a Lucas sequence.
	*
	* ## Notes
	*
	* -   The returned iterator can only generate the first `77` Lucas numbers, as larger Lucas numbers cannot be safely represented in double-precision floating-point format.
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.iter - number of iterations (default: 77)
	* @throws `iter` option must be a nonnegative integer
	* @throws `iter` option must be less than or equal to 77
	* @returns iterator
	*
	* @example
	* var iter = ns.iterLucasSeq();
	*
	* var v = iter.next().value;
	* // returns 2
	*
	* v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 3
	*
	* // ...
	*/
	iterLucasSeq: typeof iterLucasSeq;

	/**
	* Returns an iterator which generates a negaFibonacci sequence.
	*
	* ## Notes
	*
	* -   The returned iterator can only generate the first `79` negaFibonacci numbers, as larger negaFibonacci numbers cannot be safely represented in double-precision floating-point format.
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.iter - number of iterations (default: 79)
	* @throws `iter` option must be a nonnegative integer
	* @throws `iter` option must be less than or equal to 79
	* @returns iterator
	*
	* @example
	* var iter = ns.iterNegaFibonacciSeq();
	*
	* var v = iter.next().value;
	* // returns 0
	*
	* v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns -1
	*
	* // ...
	*/
	iterNegaFibonacciSeq: typeof iterNegaFibonacciSeq;

	/**
	* Returns an iterator which generates a negaLucas sequence.
	*
	* ## Notes
	*
	* -   The returned iterator can only generate the first `77` negaLucas numbers, as larger negaLucas numbers cannot be safely represented in double-precision floating-point format.
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.iter - number of iterations (default: 77)
	* @throws `iter` option must be a nonnegative integer
	* @throws `iter` option must be less than or equal to 77
	* @returns iterator
	*
	* @example
	* var iter = ns.iterNegaLucasSeq();
	*
	* var v = iter.next().value;
	* // returns 2
	*
	* v = iter.next().value;
	* // returns -1
	*
	* v = iter.next().value;
	* // returns 3
	*
	* // ...
	*/
	iterNegaLucasSeq: typeof iterNegaLucasSeq;

	/**
	* Returns an iterator which generates a sequence of negative even integers.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.iter - number of iterations (default: 4503599627370496)
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var iter = ns.iterNegativeEvenIntegersSeq();
	*
	* var v = iter.next().value;
	* // returns -2
	*
	* v = iter.next().value;
	* // returns -4
	*
	* v = iter.next().value;
	* // returns -6
	*
	* // ...
	*/
	iterNegativeEvenIntegersSeq: typeof iterNegativeEvenIntegersSeq;

	/**
	* Returns an iterator which generates a negative integer sequence.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.iter - number of iterations (default: 9007199254740991)
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var iter = ns.iterNegativeIntegersSeq();
	*
	* var v = iter.next().value;
	* // returns -1
	*
	* v = iter.next().value;
	* // returns -2
	*
	* v = iter.next().value;
	* // returns -3
	*
	* // ...
	*/
	iterNegativeIntegersSeq: typeof iterNegativeIntegersSeq;

	/**
	* Returns an iterator which generates a sequence of negative odd integers.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.iter - number of iterations (default: 4503599627370496)
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var iter = ns.iterNegativeOddIntegersSeq();
	*
	* var v = iter.next().value;
	* // returns -1
	*
	* v = iter.next().value;
	* // returns -3
	*
	* v = iter.next().value;
	* // returns -5
	*
	* // ...
	*/
	iterNegativeOddIntegersSeq: typeof iterNegativeOddIntegersSeq;

	/**
	* Returns an iterator which generates a non-Fibonacci integer sequence.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.iter - number of iterations (default: 1e308)
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var iter = ns.iterNonFibonacciSeq();
	*
	* var v = iter.next().value;
	* // returns 4
	*
	* v = iter.next().value;
	* // returns 6
	*
	* v = iter.next().value;
	* // returns 7
	*
	* // ...
	*/
	iterNonFibonacciSeq: typeof iterNonFibonacciSeq;

	/**
	* Returns an iterator which generates a sequence of nonnegative even integers.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.iter - number of iterations (default: 4503599627370497)
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var iter = ns.iterNonNegativeEvenIntegersSeq();
	*
	* var v = iter.next().value;
	* // returns 0
	*
	* v = iter.next().value;
	* // returns 2
	*
	* v = iter.next().value;
	* // returns 4
	*
	* // ...
	*/
	iterNonNegativeEvenIntegersSeq: typeof iterNonNegativeEvenIntegersSeq;

	/**
	* Returns an iterator which generates a nonnegative integer sequence.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.iter - number of iterations (default: 9007199254740992)
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var iter = ns.iterNonNegativeIntegersSeq();
	*
	* var v = iter.next().value;
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
	iterNonNegativeIntegersSeq: typeof iterNonNegativeIntegersSeq;

	/**
	* Returns an iterator which generates a sequence of nonpositive even integers.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.iter - number of iterations (default: 4503599627370497)
	* @throws `iter` option must be a nonpositive integer
	* @returns iterator
	*
	* @example
	* var iter = ns.iterNonPositiveEvenIntegersSeq();
	*
	* var v = iter.next().value;
	* // returns 0
	*
	* v = iter.next().value;
	* // returns -2
	*
	* v = iter.next().value;
	* // returns -4
	*
	* // ...
	*/
	iterNonPositiveEvenIntegersSeq: typeof iterNonPositiveEvenIntegersSeq;

	/**
	* Returns an iterator which generates a nonpositive integer sequence.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.iter - number of iterations (default: 9007199254740992)
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var iter = ns.iterNonPositiveIntegersSeq();
	*
	* var v = iter.next().value;
	* // returns 0
	*
	* v = iter.next().value;
	* // returns -1
	*
	* v = iter.next().value;
	* // returns -2
	*
	* // ...
	*/
	iterNonPositiveIntegersSeq: typeof iterNonPositiveIntegersSeq;

	/**
	* Returns an iterator which generates a sequence of nonsquares.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.iter - number of iterations (default: 9007199349647256)
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var iter = ns.iterNonSquaresSeq();
	*
	* var v = iter.next().value;
	* // returns 2
	*
	* v = iter.next().value;
	* // returns 3
	*
	* v = iter.next().value;
	* // returns 5
	*
	* // ...
	*/
	iterNonSquaresSeq: typeof iterNonSquaresSeq;

	/**
	* Returns an iterator which generates an interleaved sequence of odd integers.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.iter - number of iterations (default: 9007199254740992)
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var iter = ns.iterOddIntegersSeq();
	*
	* var v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns -1
	*
	* v = iter.next().value;
	* // returns 3
	*
	* // ...
	*/
	iterOddIntegersSeq: typeof iterOddIntegersSeq;

	/**
	* Returns an iterator which generates a sequence of positive even integers.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.iter - number of iterations (default: 4503599627370496)
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var iter = ns.iterPositiveEvenIntegersSeq();
	*
	* var v = iter.next().value;
	* // returns 2
	*
	* v = iter.next().value;
	* // returns 4
	*
	* v = iter.next().value;
	* // returns 6
	*
	* // ...
	*/
	iterPositiveEvenIntegersSeq: typeof iterPositiveEvenIntegersSeq;

	/**
	* Returns an iterator which generates a positive integer sequence.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.iter - number of iterations (default: 9007199254740991)
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var iter = ns.iterPositiveIntegersSeq();
	*
	* var v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 2
	*
	* v = iter.next().value;
	* // returns 3
	*
	* // ...
	*/
	iterPositiveIntegersSeq: typeof iterPositiveIntegersSeq;

	/**
	* Returns an iterator which generates a sequence of positive odd integers.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.iter - number of iterations (default: 4503599627370496)
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var iter = ns.iterPositiveOddIntegersSeq();
	*
	* var v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 3
	*
	* v = iter.next().value;
	* // returns 5
	*
	* // ...
	*/
	iterPositiveOddIntegersSeq: typeof iterPositiveOddIntegersSeq;

	/**
	* Returns an iterator which generates a sequence of prime numbers.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.iter - number of iterations (default: 245181918813464)
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var iter = ns.iterPrimesSeq();
	*
	* var v = iter.next().value;
	* // returns 2
	*
	* v = iter.next().value;
	* // returns 3
	*
	* v = iter.next().value;
	* // returns 5
	*
	* // ...
	*/
	iterPrimesSeq: typeof iterPrimesSeq;

	/**
	* Returns an iterator which generates a sequence of squared triangular numbers.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.iter - number of iterations (default: 11585)
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var iter = ns.iterSquaredTriangularSeq();
	*
	* var v = iter.next().value;
	* // returns 0
	*
	* v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 9
	*
	* // ...
	*/
	iterSquaredTriangularSeq: typeof iterSquaredTriangularSeq;

	/**
	* Returns an iterator which generates a sequence of squares.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.iter - number of iterations (default: 94906265)
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var iter = ns.iterSquaresSeq();
	*
	* var v = iter.next().value;
	* // returns 0
	*
	* v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 4
	*
	* // ...
	*/
	iterSquaresSeq: typeof iterSquaresSeq;

	/**
	* Returns an iterator which generates a sequence of triangular numbers.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param options - function options
	* @param options.iter - number of iterations (default: 134217727)
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var iter = ns.iterTriangularSeq();
	*
	* var v = iter.next().value;
	* // returns 0
	*
	* v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 3
	*
	* // ...
	*/
	iterTriangularSeq: typeof iterTriangularSeq;
}

/**
* Math iterators for generating sequences.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
