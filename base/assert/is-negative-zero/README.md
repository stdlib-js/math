<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# isNegativeZero

> Test if a double-precision floating-point numeric value is negative zero.

<section class="usage">

## Usage

```javascript
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
```

#### isNegativeZero( x )

Tests if a double-precision floating-point `numeric` value is negative zero.

```javascript
var bool = isNegativeZero( -0.0 );
// returns true

bool = isNegativeZero( 0.0 );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );

var bool = isNegativeZero( -0.0 );
// returns true

bool = isNegativeZero( 0.0 );
// returns false

bool = isNegativeZero( 5.0 );
// returns false

bool = isNegativeZero( -1.0 );
// returns false

bool = isNegativeZero( NaN );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/assert/is-positive-zero`][@stdlib/math/base/assert/is-positive-zero]</span><span class="delimiter">: </span><span class="description">test if a double-precision floating-point numeric value is positive zero.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/assert/is-positive-zero]: https://github.com/stdlib-js/math/tree/main/base/assert/is-positive-zero

<!-- </related-links> -->

</section>

<!-- /.links -->
