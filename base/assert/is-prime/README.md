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

# isPrime

> Test if a number is a prime.

<section class="intro">

A **prime number** is defined as an integer value greater than `1` which is only divisible by `1` and itself.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var isPrime = require( '@stdlib/math/base/assert/is-prime' );
```

#### isPrime( x )

Tests if a number is a prime.

```javascript
var bool = isPrime( 7.0 );
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
var isPrime = require( '@stdlib/math/base/assert/is-prime' );

var bool = isPrime( 11.0 );
// returns true

bool = isPrime( 3.14 );
// returns false

bool = isPrime( NaN );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/assert/is-composite`][@stdlib/math/base/assert/is-composite]</span><span class="delimiter">: </span><span class="description">test if a number is composite.</span>
-   <span class="package-name">[`@stdlib/math/base/assert/is-integer`][@stdlib/math/base/assert/is-integer]</span><span class="delimiter">: </span><span class="description">test if a finite double-precision floating-point number is an integer.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/assert/is-composite]: https://github.com/stdlib-js/math/tree/main/base/assert/is-composite

[@stdlib/math/base/assert/is-integer]: https://github.com/stdlib-js/math/tree/main/base/assert/is-integer

<!-- </related-links> -->

</section>

<!-- /.links -->
