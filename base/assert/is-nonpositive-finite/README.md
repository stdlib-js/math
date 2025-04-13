<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# isNonPositiveFinite

> Test if a numeric value is a nonpositive finite number.

<section class="usage">

## Usage

```javascript
var isNonPositiveFinite = require( '@stdlib/math/base/assert/is-nonpositive-finite' );
```

#### isNonPositiveFinite( x )

Tests if a `numeric` value is a nonpositive finite number.

```javascript
var bool = isNonPositiveFinite( -3.14 );
// returns true

bool = isNonPositiveFinite( 2.0 );
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
var isNonPositiveFinite = require( '@stdlib/math/base/assert/is-nonpositive-finite' );

var bool = isNonPositiveFinite( -3.14 );
// returns true

bool = isNonPositiveFinite( 0.0 );
// returns true

bool = isNonPositiveFinite( 2.0 );
// returns false

bool = isNonPositiveFinite( Infinity );
// returns false

bool = isNonPositiveFinite( NaN );
// returns false
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/assert/is_nonpositive_finite.h"
```

#### stdlib_base_is_nonpositive_finite( x )

Tests if a numeric value is a nonpositive finite number.

```c
#include <stdbool.h>

bool out = stdlib_base_is_nonpositive_finite( -3.14 );
// returns true

out = stdlib_base_is_nonpositive_finite( 2.0 );
// returns false
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
bool stdlib_base_is_nonpositive_finite( const double x );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/assert/is_nonpositive_finite.h"
#include <stdbool.h>
#include <stdio.h>

int main( void ) {
    const double x[] = { 5.0, -5.0, 3.14, -3.14, 0.0, 0.0/0.0 };

    bool b;
    int i;
    for ( i = 0; i < 6; i++ ) {
        b = stdlib_base_is_nonpositive_finite( x[ i ] );
        printf( "Value: %lf. Is NonPositive Finite? %s.\n", x[ i ], ( b ) ? "True" : "False" );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/assert/is-negative-finite`][@stdlib/math/base/assert/is-negative-finite]</span><span class="delimiter">: </span><span class="description">test if a double-precision floating-point numeric value is a negative finite number.</span>
-   <span class="package-name">[`@stdlib/math/base/assert/is-positive-finite`][@stdlib/math/base/assert/is-positive-finite]</span><span class="delimiter">: </span><span class="description">test if a double-precision floating-point numeric value is a positive finite number.</span>
-   <span class="package-name">[`@stdlib/math/base/assert/is-nonnegative-finite`][@stdlib/math/base/assert/is-nonnegative-finite]</span><span class="delimiter">: </span><span class="description">test if a numeric value is a nonnegative finite number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/assert/is-negative-finite]: https://github.com/stdlib-js/math/tree/main/base/assert/is-negative-finite

[@stdlib/math/base/assert/is-positive-finite]: https://github.com/stdlib-js/math/tree/main/base/assert/is-positive-finite

[@stdlib/math/base/assert/is-nonnegative-finite]: https://github.com/stdlib-js/math/tree/main/base/assert/is-nonnegative-finite

<!-- </related-links> -->

</section>

<!-- /.links -->
