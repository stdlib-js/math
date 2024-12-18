<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Sequences

> Math iterators for generating sequences.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/math/iter/sequences' );
```

#### ns

Namespace containing math iterators for generating sequences.

```javascript
var iterators = ns;
// returns {...}
```

The namespace contains the following functions for creating iterator protocol-compliant iterators:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`iterCompositesSeq( [options] )`][@stdlib/math/iter/sequences/composites]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a sequence of composite numbers.</span>
-   <span class="signature">[`iterContinuedFractionSeq( x, [options] )`][@stdlib/math/iter/sequences/continued-fraction]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a list of all continued fraction terms which can be obtained given the precision of a provided number.</span>
-   <span class="signature">[`iterCubesSeq( [options] )`][@stdlib/math/iter/sequences/cubes]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a sequence of cubes.</span>
-   <span class="signature">[`iterEvenIntegersSeq( [options] )`][@stdlib/math/iter/sequences/even-integers]</span><span class="delimiter">: </span><span class="description">create an iterator which generates an interleaved sequence of even integers.</span>
-   <span class="signature">[`iterFactorialsSeq( [options] )`][@stdlib/math/iter/sequences/factorials]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a sequence of factorials.</span>
-   <span class="signature">[`iterFibonacciSeq( [options] )`][@stdlib/math/iter/sequences/fibonacci]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a Fibonacci sequence.</span>
-   <span class="signature">[`iterFifthPowersSeq( [options] )`][@stdlib/math/iter/sequences/fifth-powers]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a sequence of fifth powers.</span>
-   <span class="signature">[`iterFourthPowersSeq( [options] )`][@stdlib/math/iter/sequences/fourth-powers]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a sequence of fourth powers.</span>
-   <span class="signature">[`iterIntegersSeq( [options] )`][@stdlib/math/iter/sequences/integers]</span><span class="delimiter">: </span><span class="description">create an iterator which generates an interleaved integer sequence.</span>
-   <span class="signature">[`iterLucasSeq( [options] )`][@stdlib/math/iter/sequences/lucas]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a Lucas sequence.</span>
-   <span class="signature">[`iterNegaFibonacciSeq( [options] )`][@stdlib/math/iter/sequences/negafibonacci]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a negaFibonacci sequence.</span>
-   <span class="signature">[`iterNegaLucasSeq( [options] )`][@stdlib/math/iter/sequences/negalucas]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a negaLucas sequence.</span>
-   <span class="signature">[`iterNegativeEvenIntegersSeq( [options] )`][@stdlib/math/iter/sequences/negative-even-integers]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a sequence of negative even integers.</span>
-   <span class="signature">[`iterNegativeIntegersSeq( [options] )`][@stdlib/math/iter/sequences/negative-integers]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a negative integer sequence.</span>
-   <span class="signature">[`iterNegativeOddIntegersSeq( [options] )`][@stdlib/math/iter/sequences/negative-odd-integers]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a sequence of negative odd integers.</span>
-   <span class="signature">[`iterNonFibonacciSeq( [options] )`][@stdlib/math/iter/sequences/nonfibonacci]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a non-Fibonacci integer sequence.</span>
-   <span class="signature">[`iterNonNegativeEvenIntegersSeq( [options] )`][@stdlib/math/iter/sequences/nonnegative-even-integers]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a sequence of nonnegative even integers.</span>
-   <span class="signature">[`iterNonNegativeIntegersSeq( [options] )`][@stdlib/math/iter/sequences/nonnegative-integers]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a nonnegative integer sequence.</span>
-   <span class="signature">[`iterNonPositiveEvenIntegersSeq( [options] )`][@stdlib/math/iter/sequences/nonpositive-even-integers]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a sequence of nonpositive even integers.</span>
-   <span class="signature">[`iterNonPositiveIntegersSeq( [options] )`][@stdlib/math/iter/sequences/nonpositive-integers]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a nonpositive integer sequence.</span>
-   <span class="signature">[`iterNonSquaresSeq( [options] )`][@stdlib/math/iter/sequences/nonsquares]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a sequence of nonsquares.</span>
-   <span class="signature">[`iterOddIntegersSeq( [options] )`][@stdlib/math/iter/sequences/odd-integers]</span><span class="delimiter">: </span><span class="description">create an iterator which generates an interleaved sequence of odd integers.</span>
-   <span class="signature">[`iterPositiveEvenIntegersSeq( [options] )`][@stdlib/math/iter/sequences/positive-even-integers]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a sequence of positive even integers.</span>
-   <span class="signature">[`iterPositiveIntegersSeq( [options] )`][@stdlib/math/iter/sequences/positive-integers]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a positive integer sequence.</span>
-   <span class="signature">[`iterPositiveOddIntegersSeq( [options] )`][@stdlib/math/iter/sequences/positive-odd-integers]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a sequence of positive odd integers.</span>
-   <span class="signature">[`iterPrimesSeq( [options] )`][@stdlib/math/iter/sequences/primes]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a sequence of prime numbers.</span>
-   <span class="signature">[`iterSquaredTriangularSeq( [options] )`][@stdlib/math/iter/sequences/squared-triangular]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a sequence of squared triangular numbers.</span>
-   <span class="signature">[`iterSquaresSeq( [options] )`][@stdlib/math/iter/sequences/squares]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a sequence of squares.</span>
-   <span class="signature">[`iterTriangularSeq( [options] )`][@stdlib/math/iter/sequences/triangular]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a sequence of triangular numbers.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var ns = require( '@stdlib/math/iter/sequences' );

// Create iterators for generating square and cube numbers:
var squares = ns.iterSquaresSeq();
var cubes = ns.iterCubesSeq();

// Iterate over both sequences and log the first five pairs:
var i;
for ( i = 0; i < 5; i++ ) {
    console.log( 'Square: %d, Cube: %d', squares.next().value, cubes.next().value );
}

// Calculate the sum of the first ten Fibonacci numbers:
var fibonacci = ns.iterFibonacciSeq({
    'iter': 10
});
var sum = 0;
var v = fibonacci.next();
while ( v.done === false ) {
    sum += v.value;
    v = fibonacci.next();
}
console.log( 'Sum of first ten Fibonacci numbers: %d', sum );

// Generate prime numbers:
var primes = ns.iterPrimesSeq({
    'iter': 10
});

console.log( 'First ten prime numbers:' );
v = primes.next();
while ( v.done === false ) {
    console.log( v.value );
    v = primes.next();
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <toc-links> -->

[@stdlib/math/iter/sequences/composites]: https://github.com/stdlib-js/math/tree/main/iter/sequences/composites

[@stdlib/math/iter/sequences/continued-fraction]: https://github.com/stdlib-js/math/tree/main/iter/sequences/continued-fraction

[@stdlib/math/iter/sequences/cubes]: https://github.com/stdlib-js/math/tree/main/iter/sequences/cubes

[@stdlib/math/iter/sequences/even-integers]: https://github.com/stdlib-js/math/tree/main/iter/sequences/even-integers

[@stdlib/math/iter/sequences/factorials]: https://github.com/stdlib-js/math/tree/main/iter/sequences/factorials

[@stdlib/math/iter/sequences/fibonacci]: https://github.com/stdlib-js/math/tree/main/iter/sequences/fibonacci

[@stdlib/math/iter/sequences/fifth-powers]: https://github.com/stdlib-js/math/tree/main/iter/sequences/fifth-powers

[@stdlib/math/iter/sequences/fourth-powers]: https://github.com/stdlib-js/math/tree/main/iter/sequences/fourth-powers

[@stdlib/math/iter/sequences/integers]: https://github.com/stdlib-js/math/tree/main/iter/sequences/integers

[@stdlib/math/iter/sequences/lucas]: https://github.com/stdlib-js/math/tree/main/iter/sequences/lucas

[@stdlib/math/iter/sequences/negafibonacci]: https://github.com/stdlib-js/math/tree/main/iter/sequences/negafibonacci

[@stdlib/math/iter/sequences/negalucas]: https://github.com/stdlib-js/math/tree/main/iter/sequences/negalucas

[@stdlib/math/iter/sequences/negative-even-integers]: https://github.com/stdlib-js/math/tree/main/iter/sequences/negative-even-integers

[@stdlib/math/iter/sequences/negative-integers]: https://github.com/stdlib-js/math/tree/main/iter/sequences/negative-integers

[@stdlib/math/iter/sequences/negative-odd-integers]: https://github.com/stdlib-js/math/tree/main/iter/sequences/negative-odd-integers

[@stdlib/math/iter/sequences/nonfibonacci]: https://github.com/stdlib-js/math/tree/main/iter/sequences/nonfibonacci

[@stdlib/math/iter/sequences/nonnegative-even-integers]: https://github.com/stdlib-js/math/tree/main/iter/sequences/nonnegative-even-integers

[@stdlib/math/iter/sequences/nonnegative-integers]: https://github.com/stdlib-js/math/tree/main/iter/sequences/nonnegative-integers

[@stdlib/math/iter/sequences/nonpositive-even-integers]: https://github.com/stdlib-js/math/tree/main/iter/sequences/nonpositive-even-integers

[@stdlib/math/iter/sequences/nonpositive-integers]: https://github.com/stdlib-js/math/tree/main/iter/sequences/nonpositive-integers

[@stdlib/math/iter/sequences/nonsquares]: https://github.com/stdlib-js/math/tree/main/iter/sequences/nonsquares

[@stdlib/math/iter/sequences/odd-integers]: https://github.com/stdlib-js/math/tree/main/iter/sequences/odd-integers

[@stdlib/math/iter/sequences/positive-even-integers]: https://github.com/stdlib-js/math/tree/main/iter/sequences/positive-even-integers

[@stdlib/math/iter/sequences/positive-integers]: https://github.com/stdlib-js/math/tree/main/iter/sequences/positive-integers

[@stdlib/math/iter/sequences/positive-odd-integers]: https://github.com/stdlib-js/math/tree/main/iter/sequences/positive-odd-integers

[@stdlib/math/iter/sequences/primes]: https://github.com/stdlib-js/math/tree/main/iter/sequences/primes

[@stdlib/math/iter/sequences/squared-triangular]: https://github.com/stdlib-js/math/tree/main/iter/sequences/squared-triangular

[@stdlib/math/iter/sequences/squares]: https://github.com/stdlib-js/math/tree/main/iter/sequences/squares

[@stdlib/math/iter/sequences/triangular]: https://github.com/stdlib-js/math/tree/main/iter/sequences/triangular

<!-- </toc-links> -->

</section>

<!-- /.links -->
