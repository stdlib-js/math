<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# iterTribonacciSeq

> Create an iterator which generates a [tribonacci sequence][tribonacci-number].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [Tribonacci numbers][tribonacci-number] are the integer sequence

<!-- <equation class="equation" label="eq:tribonacci_sequence" align="center" raw="0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, \ldots" alt="Tribonacci sequence"> -->

```math
0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, \ldots
```

<!-- <div class="equation" align="center" data-raw-text="0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, \ldots" data-equation="eq:tribonacci_sequence">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@3249a68fb57cd71148f87ef3b2774be70a04d80a/lib/node_modules/@stdlib/math/base/special/tribonacci/docs/img/equation_tribonacci_sequence.svg" alt="Tribonacci sequence">
    <br>
</div> -->

<!-- </equation> -->

The sequence is defined by the recurrence relation

<!-- <equation class="equation" label="eq:tribonacci_recurrence_relation" align="center" raw="F_n = F_{n-1} + F_{n-2} + F_{n-3}" alt="Tribonacci sequence recurrence relation"> -->

```math
F_n = F_{n-1} + F_{n-2} + F_{n-3}
```

<!-- <div class="equation" align="center" data-raw-text="F_n = F_{n-1} + F_{n-2} + F_{n-3}" data-equation="eq:tribonacci_recurrence_relation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@3249a68fb57cd71148f87ef3b2774be70a04d80a/lib/node_modules/@stdlib/math/base/special/tribonacci/docs/img/equation_tribonacci_recurrence_relation.svg" alt="Tribonacci sequence recurrence relation">
    <br>
</div> -->

<!-- </equation> -->

with seed values `F_0 = 0`, `F_1 = 0`, and `F_2 = 1`.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterTribonacciSeq = require( '@stdlib/math/iter/sequences/tribonacci' );
```

#### iterTribonacciSeq( \[options] )

Returns an iterator which generates a [Tribonacci sequence][tribonacci-number].

```javascript
var it = iterTribonacciSeq();
// returns <Object>

var v = it.next().value;
// returns 0

v = it.next().value;
// returns 0

v = it.next().value;
// returns 1

// ...
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

The function supports the following `options`:

-   **iter**: number of iterations. Default: `64`.

The returned iterator can only generate the first `64` [Tribonacci numbers][tribonacci-number], as larger [Tribonacci numbers][tribonacci-number] cannot be safely represented in [double-precision floating-point format][ieee754]. By default, the function returns an iterator which generates all `64` numbers. To limit the number of iterations, set the `iter` option.

```javascript
var opts = {
    'iter': 3
};
var it = iterTribonacciSeq( opts );
// returns <Object>

var v = it.next().value;
// returns 0

v = it.next().value;
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
var iterTribonacciSeq = require( '@stdlib/math/iter/sequences/tribonacci' );

// Create an iterator:
var it = iterTribonacciSeq();

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

-   <span class="package-name">[`@stdlib/math/base/special/tribonacci`][@stdlib/math/base/special/tribonacci]</span><span class="delimiter">: </span><span class="description">compute the nth Tribonacci number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/fibonacci`][@stdlib/math/base/special/fibonacci]</span><span class="delimiter">: </span><span class="description">compute the nth Fibonacci number.</span>
-   <span class="package-name">[`@stdlib/math/iter/sequences/lucas`][@stdlib/math/iter/sequences/lucas]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a Lucas sequence.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[tribonacci-number]: https://en.wikipedia.org/wiki/Generalizations_of_Fibonacci_numbers#Tribonacci_numbers

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/tribonacci]: https://github.com/stdlib-js/math/tree/main/base/special/tribonacci

[@stdlib/math/base/special/fibonacci]: https://github.com/stdlib-js/math/tree/main/base/special/fibonacci

[@stdlib/math/iter/sequences/lucas]: https://github.com/stdlib-js/math/tree/main/iter/sequences/lucas

<!-- </related-links> -->

</section>

<!-- /.links -->
