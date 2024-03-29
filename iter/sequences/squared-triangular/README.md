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

# iterSquaredTriangularSeq

> Create an iterator which generates a sequence of [squared triangular numbers][oeis-a000537].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [squared triangular numbers][squared-triangular-number] are the integer sequence

<!-- <equation class="equation" label="eq:squared_triangular_numbers_sequence" align="center" raw="0, 1, 9, 36, 100, 225, 441, 784, 1296, 2025, 3025, 4356, \ldots" alt="Triangular number sequence"> -->

```math
0, 1, 9, 36, 100, 225, 441, 784, 1296, 2025, 3025, 4356, \ldots
```

<!-- <div class="equation" align="center" data-raw-text="0, 1, 9, 36, 100, 225, 441, 784, 1296, 2025, 3025, 4356, \ldots" data-equation="eq:squared_triangular_numbers_sequence">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@ffa1a1acab2d2c9973d3ad22a5dfc25afd86767a/lib/node_modules/@stdlib/math/iter/sequences/squared-triangular/docs/img/equation_squared_triangular_numbers_sequence.svg" alt="Triangular number sequence">
    <br>
</div> -->

<!-- </equation> -->

starting at the 0th [squared triangular number][squared-triangular-number].

[Triangular numbers][@stdlib/math/iter/sequences/triangular] are given by the following explicit formulas

<!-- <equation class="equation" label="eq:triangular_numbers" align="center" raw="T_n = \sum_{i=1}^{n} i = 1 + 2 + 3 + \ldots + n = \frac{n(n+1)}{2} = \binom{n+1}{2}" alt="Triangular number formulas"> -->

```math
T_n = \sum_{i=1}^{n} i = 1 + 2 + 3 + \ldots + n = \frac{n(n+1)}{2} = \binom{n+1}{2}
```

<!-- <div class="equation" align="center" data-raw-text="T_n = \sum_{i=1}^{n} i = 1 + 2 + 3 + \ldots + n = \frac{n(n+1)}{2} = \binom{n+1}{2}" data-equation="eq:triangular_numbers">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@ffa1a1acab2d2c9973d3ad22a5dfc25afd86767a/lib/node_modules/@stdlib/math/iter/sequences/squared-triangular/docs/img/equation_triangular_numbers.svg" alt="Triangular number formulas">
    <br>
</div> -->

<!-- </equation> -->

where the last formula corresponds to a [binomial coefficient][@stdlib/math/base/special/binomcoef], representing the number of distinct pairs that can be selected from `n+1` items.

The nth [squared triangular number][squared-triangular-number] is the nth [triangular number][@stdlib/math/iter/sequences/triangular] squared.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterSquaredTriangularSeq = require( '@stdlib/math/iter/sequences/squared-triangular' );
```

#### iterSquaredTriangularSeq( \[options] )

Returns an iterator which generates a sequence of [squared triangular numbers][squared-triangular-number].

```javascript
var it = iterSquaredTriangularSeq();
// returns <Object>

var v = it.next().value;
// returns 0

v = it.next().value;
// returns 1

v = it.next().value;
// returns 9

v = it.next().value;
// returns 36

v = it.next().value;
// returns 100

// ...
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

The function supports the following `options`:

-   **iter**: number of iterations. Default: `11585`.

By default, the function returns a finite iterator to avoid exceeding the maximum safe double-precision floating-point integer. To adjust the number of iterations, set the `iter` option.

```javascript
var opts = {
    'iter': 2
};
var it = iterSquaredTriangularSeq( opts );
// returns <Object>

var v = it.next().value;
// returns 0

v = it.next().value;
// returns 1

var bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var iterSquaredTriangularSeq = require( '@stdlib/math/iter/sequences/squared-triangular' );

// Create an iterator:
var opts = {
    'iter': 100
};
var it = iterSquaredTriangularSeq( opts );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/iter/sequences/triangular`][@stdlib/math/iter/sequences/triangular]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a sequence of triangular numbers.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[oeis-a000537]: https://oeis.org/A000537

[squared-triangular-number]: https://en.wikipedia.org/wiki/Squared_triangular_number

[@stdlib/math/base/special/binomcoef]: https://github.com/stdlib-js/math/tree/main/base/special/binomcoef

<!-- <related-links> -->

[@stdlib/math/iter/sequences/triangular]: https://github.com/stdlib-js/math/tree/main/iter/sequences/triangular

<!-- </related-links> -->

</section>

<!-- /.links -->
