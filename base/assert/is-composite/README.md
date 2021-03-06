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

# isComposite

> Test if a number is a composite.

<section class="intro">

A **composite number** is defined as a positive integer value greater than `1` which has **at least** one divisor other than `1` and itself (i.e., an integer value which can be formed by multiplying two smaller positive integers).

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var isComposite = require( '@stdlib/math/base/assert/is-composite' );
```

#### isComposite( x )

Tests if a number is a composite.

```javascript
var bool = isComposite( 4.0 );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isComposite = require( '@stdlib/math/base/assert/is-composite' );

var bool = isComposite( 4.0 );
// returns true

bool = isComposite( 7.0 );
// returns false

bool = isComposite( NaN );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/assert/is-integer`][@stdlib/math/base/assert/is-integer]</span><span class="delimiter">: </span><span class="description">test if a finite double-precision floating-point number is an integer.</span>
-   <span class="package-name">[`@stdlib/math/base/assert/is-prime`][@stdlib/math/base/assert/is-prime]</span><span class="delimiter">: </span><span class="description">test if a number is prime.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/assert/is-integer]: https://github.com/stdlib-js/math/tree/main/base/assert/is-integer

[@stdlib/math/base/assert/is-prime]: https://github.com/stdlib-js/math/tree/main/base/assert/is-prime

<!-- </related-links> -->

</section>

<!-- /.links -->
