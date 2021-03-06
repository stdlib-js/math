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

# isPositiveZerof

> Test if a single-precision floating-point numeric value is positive zero.

<section class="usage">

## Usage

```javascript
var isPositiveZerof = require( '@stdlib/math/base/assert/is-positive-zerof' );
```

#### isPositiveZerof( x )

Tests if a single-precision floating-point `numeric` value is positive zero.

```javascript
var bool = isPositiveZerof( 0.0 );
// returns true

bool = isPositiveZerof( -0.0 );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isPositiveZerof = require( '@stdlib/math/base/assert/is-positive-zerof' );

var bool = isPositiveZerof( 0.0 );
// returns true

bool = isPositiveZerof( -0.0 );
// returns false

bool = isPositiveZerof( 5.0 );
// returns false

bool = isPositiveZerof( -1.0 );
// returns false

bool = isPositiveZerof( NaN );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/assert/is-negative-zerof`][@stdlib/math/base/assert/is-negative-zerof]</span><span class="delimiter">: </span><span class="description">test if a single-precision floating-point numeric value is negative zero.</span>
-   <span class="package-name">[`@stdlib/math/base/assert/is-positive-zero`][@stdlib/math/base/assert/is-positive-zero]</span><span class="delimiter">: </span><span class="description">test if a double-precision floating-point numeric value is positive zero.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/assert/is-negative-zerof]: https://github.com/stdlib-js/math/tree/main/base/assert/is-negative-zerof

[@stdlib/math/base/assert/is-positive-zero]: https://github.com/stdlib-js/math/tree/main/base/assert/is-positive-zero

<!-- </related-links> -->

</section>

<!-- /.links -->
