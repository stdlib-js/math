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

# iterAcovercos

> Create an [iterator][mdn-iterator-protocol] which iteratively computes the [inverse coversed cosine][@stdlib/math/base/special/acovercos].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterAcovercos = require( '@stdlib/math/iter/special/acovercos' );
```

#### iterAcovercos( iterator )

Returns an [iterator][mdn-iterator-protocol] which iteratively computes the [inverse coversed cosine][@stdlib/math/base/special/acovercos].

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var x = [ 0.0, 3.141592653589793/2.0, 3.141592653589793/6.0 ];
var it = iterAcovercos( array2iterator( x ) );
// returns <Object>

var r = it.next().value;
// returns ~-1.5708

r = it.next().value;
// returns ~0.6075

r = it.next().value;
// returns ~-0.4966

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

-   The domain of inverse coversed cosine is restricted to `[0,2]`. If an iterated value is outside of the domain, the returned [iterator][mdn-iterator-protocol] returns `NaN`.
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
var iterAcovercos = require( '@stdlib/math/iter/special/acovercos' );

// Create a seeded iterator for generating pseudorandom numbers:
var rand = uniform( 0.0, 2.0, {
    'seed': 1234,
    'iter': 10
});

// Create an iterator which consumes the pseudorandom number iterator:
var it = iterAcovercos( rand );

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

-   <span class="package-name">[`@stdlib/math/base/special/acovercos`][@stdlib/math/base/special/acovercos]</span><span class="delimiter">: </span><span class="description">compute the inverse coversed cosine.</span>
-   <span class="package-name">[`@stdlib/math/iter/special/acoversin`][@stdlib/math/iter/special/acoversin]</span><span class="delimiter">: </span><span class="description">create an iterator which computes the inverse coversed sine of each iterated value.</span>
-   <span class="package-name">[`@stdlib/math/iter/special/avercos`][@stdlib/math/iter/special/avercos]</span><span class="delimiter">: </span><span class="description">create an iterator which computes the inverse versed cosine of each iterated value.</span>
-   <span class="package-name">[`@stdlib/math/iter/special/covercos`][@stdlib/math/iter/special/covercos]</span><span class="delimiter">: </span><span class="description">create an iterator which computes the coversed cosine for each iterated value.</span>
-   <span class="package-name">[`@stdlib/math/iter/special/vercos`][@stdlib/math/iter/special/vercos]</span><span class="delimiter">: </span><span class="description">create an iterator which computes the versed cosine for each iterated value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/math/base/special/acovercos]: https://github.com/stdlib-js/math/tree/main/base/special/acovercos

[@stdlib/math/iter/special/acoversin]: https://github.com/stdlib-js/math/tree/main/iter/special/acoversin

[@stdlib/math/iter/special/avercos]: https://github.com/stdlib-js/math/tree/main/iter/special/avercos

[@stdlib/math/iter/special/covercos]: https://github.com/stdlib-js/math/tree/main/iter/special/covercos

[@stdlib/math/iter/special/vercos]: https://github.com/stdlib-js/math/tree/main/iter/special/vercos

<!-- </related-links> -->

</section>

<!-- /.links -->
