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

# iterPow

> Create an [iterator][mdn-iterator-protocol] which iteratively evaluates the [exponential function][@stdlib/math/base/special/pow].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterPow = require( '@stdlib/math/iter/special/pow' );
```

#### iterPow( base, exponent )

Returns an [iterator][mdn-iterator-protocol] which iteratively evaluates the [exponential function][@stdlib/math/base/special/pow].

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var x = array2iterator( [ 2.0, 2.0, -1.0 ] );
var y = array2iterator( [ 2.0, 6.0, -1.0 ] );

var it = iterPow( x, y );
// returns <Object>

var r = it.next().value;
// returns 4.0

r = it.next().value;
// returns 64.0

r = it.next().value;
// returns -1.0

// ...
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

If provided a numeric value as an [`iterator`][mdn-iterator-protocol] argument, the value is broadcast as an **infinite** [iterator][mdn-iterator-protocol] which **always** returns the provided value.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var x = array2iterator( [ 2.0, 6.0 ] );

var it = iterPow( x, 2.0 );
// returns <Object>

var v = it.next().value;
// returns 4.0

v = it.next().value;
// returns 36.0

var bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the returned [iterator][mdn-iterator-protocol] returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.
-   The length of the returned [iterator][mdn-iterator-protocol] is equal to the length of the shortest provided [iterator][mdn-iterator-protocol]. In other words, the returned [iterator][mdn-iterator-protocol] ends once **one** of the provided [iterators][mdn-iterator-protocol] ends.
-   If an environment supports `Symbol.iterator` **and** a provided [iterator][mdn-iterator-protocol] is iterable, the returned [iterator][mdn-iterator-protocol] is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/iter/uniform' );
var iterPow = require( '@stdlib/math/iter/special/pow' );

// Create seeded iterators for generating pseudorandom numbers:
var x = uniform( 0.0, 2.0, {
    'seed': 1234,
    'iter': 10
});

var y = uniform( -2.0, 2.0, {
    'seed': 4567,
    'iter': 10
});

// Create an iterator which consumes the pseudorandom number iterators:
var it = iterPow( x, y );

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

-   <span class="package-name">[`@stdlib/math/base/special/pow`][@stdlib/math/base/special/pow]</span><span class="delimiter">: </span><span class="description">exponential function.</span>
-   <span class="package-name">[`@stdlib/math/iter/special/exp`][@stdlib/math/iter/special/exp]</span><span class="delimiter">: </span><span class="description">create an iterator which evaluates the natural exponential function for each iterated value.</span>
-   <span class="package-name">[`@stdlib/math/iter/special/log`][@stdlib/math/iter/special/log]</span><span class="delimiter">: </span><span class="description">create an iterator which computes the base `b` logarithm.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/math/base/special/pow]: https://github.com/stdlib-js/math/tree/main/base/special/pow

[@stdlib/math/iter/special/exp]: https://github.com/stdlib-js/math/tree/main/iter/special/exp

[@stdlib/math/iter/special/log]: https://github.com/stdlib-js/math/tree/main/iter/special/log

<!-- </related-links> -->

</section>

<!-- /.links -->
