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

# iterNonPositiveIntegersSeq

> Create an iterator which generates a [nonpositive integer sequence][oeis-a001489].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var iterNonPositiveIntegersSeq = require( '@stdlib/math/iter/sequences/nonpositive-integers' );
```

#### iterNonPositiveIntegersSeq( \[options] )

Returns an iterator which generates a nonpositive integer sequence.

<!-- eslint-disable id-length -->

```javascript
var it = iterNonPositiveIntegersSeq();
// returns <Object>

var v = it.next().value;
// returns 0

v = it.next().value;
// returns -1

v = it.next().value;
// returns -2

// ...
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

The function supports the following `options`:

-   **iter**: number of iterations. Default: `9007199254740992`.

By default, the function returns a finite iterator to avoid exceeding the maximum safe double-precision floating-point integer. To adjust the number of iterations, set the `iter` option.

<!-- eslint-disable id-length -->

```javascript
var opts = {
    'iter': 2
};
var it = iterNonPositiveIntegersSeq( opts );
// returns <Object>

var v = it.next().value;
// returns 0

v = it.next().value;
// returns -1

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

<!-- eslint-disable id-length -->

```javascript
var iterNonPositiveIntegersSeq = require( '@stdlib/math/iter/sequences/nonpositive-integers' );

// Create an iterator:
var opts = {
    'iter': 100
};
var it = iterNonPositiveIntegersSeq( opts );

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

-   <span class="package-name">[`@stdlib/math/iter/sequences/integers`][@stdlib/math/iter/sequences/integers]</span><span class="delimiter">: </span><span class="description">create an iterator which generates an interleaved integer sequence.</span>
-   <span class="package-name">[`@stdlib/math/iter/sequences/negative-integers`][@stdlib/math/iter/sequences/negative-integers]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a negative integer sequence.</span>
-   <span class="package-name">[`@stdlib/math/iter/sequences/nonnegative-integers`][@stdlib/math/iter/sequences/nonnegative-integers]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a nonnegative integer sequence.</span>
-   <span class="package-name">[`@stdlib/math/iter/sequences/positive-integers`][@stdlib/math/iter/sequences/positive-integers]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a positive integer sequence.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[oeis-a001489]: http://oeis.org/A001489

<!-- <related-links> -->

[@stdlib/math/iter/sequences/integers]: https://github.com/stdlib-js/math/tree/main/iter/sequences/integers

[@stdlib/math/iter/sequences/negative-integers]: https://github.com/stdlib-js/math/tree/main/iter/sequences/negative-integers

[@stdlib/math/iter/sequences/nonnegative-integers]: https://github.com/stdlib-js/math/tree/main/iter/sequences/nonnegative-integers

[@stdlib/math/iter/sequences/positive-integers]: https://github.com/stdlib-js/math/tree/main/iter/sequences/positive-integers

<!-- </related-links> -->

</section>

<!-- /.links -->
