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

# isnanf

> Test if a single-precision floating-point numeric value is NaN.

<section class="usage">

## Usage

```javascript
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
```

#### isnanf( x )

Tests if a single-precision floating-point `numeric` value is `NaN`.

```javascript
var bool = isnanf( NaN );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );

var bool = isnanf( NaN );
// returns true

bool = isnanf( 5.0 );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/assert/is-nan`][@stdlib/math/base/assert/is-nan]</span><span class="delimiter">: </span><span class="description">test if a double-precision floating-point numeric value is NaN.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/assert/is-nan]: https://github.com/stdlib-js/math/tree/main/base/assert/is-nan

<!-- </related-links> -->

</section>

<!-- /.links -->
