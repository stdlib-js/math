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

# iterGammaln

> Create an [iterator][mdn-iterator-protocol] which iteratively evaluates the natural logarithm of the [gamma function][@stdlib/math/base/special/gammaln].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterGammaln = require( '@stdlib/math/iter/special/gammaln' );
```

#### iterGammaln( iterator )

Returns an [iterator][mdn-iterator-protocol] which iteratively evaluates the natural logarithm of the [gamma function][@stdlib/math/base/special/gammaln].

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var it = iterGammaln( array2iterator( [ 3.0, -1.5, -0.5 ] ) );
// returns <Object>

var r = it.next().value;
// returns ~0.693147

r = it.next().value;
// returns ~0.860047

r = it.next().value;
// returns ~1.265512

// ...
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the returned [iterator][mdn-iterator-protocol] returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.
-   If an environment supports `Symbol.iterator` **and** a provided [iterator][mdn-iterator-protocol] is iterable, the returned [iterator][mdn-iterator-protocol] is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/iter/uniform' );
var iterGammaln = require( '@stdlib/math/iter/special/gammaln' );

// Create a seeded iterator for generating pseudorandom numbers:
var rand = uniform( -2.0, 2.0, {
    'seed': 1234,
    'iter': 10
});

// Create an iterator which consumes the pseudorandom number iterator:
var it = iterGammaln( rand );

// Perform manual iteration...
var r;
while ( true ) {
    r = it.next();
    if ( r.done ) {
        break;
    }
    console.log( r.value );
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

-   <span class="package-name">[`@stdlib/math/base/special/gammaln`][@stdlib/math/base/special/gammaln]</span><span class="delimiter">: </span><span class="description">natural logarithm of the gamma function.</span>
-   <span class="package-name">[`@stdlib/math/iter/special/gamma`][@stdlib/math/iter/special/gamma]</span><span class="delimiter">: </span><span class="description">create an iterator which evaluates the gamma function for each iterated value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/math/base/special/gammaln]: https://github.com/stdlib-js/math/tree/main/base/special/gammaln

[@stdlib/math/iter/special/gamma]: https://github.com/stdlib-js/math/tree/main/iter/special/gamma

<!-- </related-links> -->

</section>

<!-- /.links -->
