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

# iterExpm1

> Create an [iterator][mdn-iterator-protocol] which computes [`exp(x) - 1`][@stdlib/math/base/special/expm1] for each iterated value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterExpm1 = require( '@stdlib/math/iter/special/expm1' );
```

#### iterExpm1( iterator )

Returns an [iterator][mdn-iterator-protocol] which iteratively computes [`exp(x) - 1`][@stdlib/math/base/special/expm1].

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var it = iterExpm1( array2iterator( [ 0.2, -9.0 ] ) );
// returns <Object>

var v = it.next().value;
// returns ~0.221

v = it.next().value;
// returns ~-1.0

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
var iterExpm1 = require( '@stdlib/math/iter/special/expm1' );

// Create a seeded iterator for generating pseudorandom numbers:
var rand = uniform( -5.0, 5.0, {
    'seed': 1234,
    'iter': 10
});

// Create an iterator which consumes the pseudorandom number iterator:
var it = iterExpm1( rand );

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

-   <span class="package-name">[`@stdlib/math/base/special/expm1`][@stdlib/math/base/special/expm1]</span><span class="delimiter">: </span><span class="description">compute exp(x) - 1.</span>
-   <span class="package-name">[`@stdlib/math/iter/special/exp`][@stdlib/math/iter/special/exp]</span><span class="delimiter">: </span><span class="description">create an iterator which evaluates the natural exponential function for each iterated value.</span>
-   <span class="package-name">[`@stdlib/math/iter/special/expm1rel`][@stdlib/math/iter/special/expm1rel]</span><span class="delimiter">: </span><span class="description">create an iterator which evaluates the relative error exponential for each iterated value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/math/base/special/expm1]: https://github.com/stdlib-js/math/tree/main/base/special/expm1

[@stdlib/math/iter/special/exp]: https://github.com/stdlib-js/math/tree/main/iter/special/exp

[@stdlib/math/iter/special/expm1rel]: https://github.com/stdlib-js/math/tree/main/iter/special/expm1rel

<!-- </related-links> -->

</section>

<!-- /.links -->
