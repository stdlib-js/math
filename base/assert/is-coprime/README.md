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

# isCoprime

> Test if two numbers are [coprime][coprime-integers].

<section class="intro">

Two integers `a` and `b` are said to be **coprime** (or **relatively prime** or **mutually prime**) if the only positive integer that divides both of them is `1`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var isCoprime = require( '@stdlib/math/base/assert/is-coprime' );
```

#### isCoprime( a, b )

Tests if two numbers are [coprime][coprime-integers].

```javascript
var bool = isCoprime( 14.0, 15.0 );
// returns true

bool = isCoprime( 14.0, 21.0 );
// returns false
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
var isCoprime = require( '@stdlib/math/base/assert/is-coprime' );

var bool = isCoprime( 5.0, 7.0 );
// returns true

bool = isCoprime( 5.0, 15.0 );
// returns false

bool = isCoprime( NaN, NaN );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/assert/is-composite`][@stdlib/math/base/assert/is-composite]</span><span class="delimiter">: </span><span class="description">test if a number is composite.</span>
-   <span class="package-name">[`@stdlib/math/base/assert/is-prime`][@stdlib/math/base/assert/is-prime]</span><span class="delimiter">: </span><span class="description">test if a number is prime.</span>
-   <span class="package-name">[`@stdlib/math/base/special/gcd`][@stdlib/math/base/special/gcd]</span><span class="delimiter">: </span><span class="description">compute the greatest common divisor (gcd).</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[coprime-integers]: https://en.wikipedia.org/wiki/Coprime_integers

<!-- <related-links> -->

[@stdlib/math/base/assert/is-composite]: https://github.com/stdlib-js/math/tree/main/base/assert/is-composite

[@stdlib/math/base/assert/is-prime]: https://github.com/stdlib-js/math/tree/main/base/assert/is-prime

[@stdlib/math/base/special/gcd]: https://github.com/stdlib-js/math/tree/main/base/special/gcd

<!-- </related-links> -->

</section>

<!-- /.links -->
