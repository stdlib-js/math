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

# ceiln

> Round a numeric value to the nearest multiple of 10^n toward positive infinity.

<section class="usage">

## Usage

```javascript
var ceiln = require( '@stdlib/math/base/special/ceiln' );
```

#### ceiln( x, n )

Rounds a `numeric` value to the nearest multiple of `10^n` toward positive infinity.

```javascript
// Round a value to 2 decimal places:
var v = ceiln( 3.141592653589793, -2 );
// returns 3.15

// If n = 0, `ceiln` behaves like `ceil`:
v = ceiln( 3.141592653589793, 0 );
// returns 4.0

// Round a value to the nearest thousand:
v = ceiln( 12368.0, 3 );
// returns 13000.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When operating on [floating-point numbers][ieee754] in bases other than `2`, rounding to specified digits can be **inexact**. For example,

    ```javascript
    var x = 0.2 + 0.1;
    // returns 0.30000000000000004

    // Should round to 0.3:
    var v = ceiln( x, -16 );
    // returns 0.3000000000000001
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var ceiln = require( '@stdlib/math/base/special/ceiln' );

var x;
var n;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    n = ceiln( randu()*5.0, 0 );
    v = ceiln( x, -n );
    console.log( 'x: %d. Number of decimals: %d. Rounded: %d.', x, n, v );
}
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
#include "stdlib/math/base/special/ceiln.h"
```

#### stdlib_base_ceiln( x, n )

Rounds a double-precision floating-point number to the nearest multiple of `10^n` toward positive infinity.

```c
// Round a value to 2 decimal places:
double y = stdlib_base_ceiln( 3.141592653589793, -2 );
// returns 3.15

// If n = 0, `ceiln` behaves like `ceil`:
double y = stdlib_base_ceiln( 3.141592653589793, 0 );
// returns 4.0

// Round a value to the nearest thousand:
double y = stdlib_base_ceiln( 12368.0, 3 );
// returns 13000.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **n**: `[in] int32_t` integer power of 10.

```c
double stdlib_base_ceiln( const double x, const int32_t n );
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
#include "stdlib/math/base/special/ceiln.h"
#include <stdio.h>

int main() {
    const double x[] = { 3.14, -3.14, 0.0, 0.0/0.0 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_ceiln( x[ i ], -2 );
        printf( "ceiln(%lf, -2) = %lf\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/ceil`][@stdlib/math/base/special/ceil]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/ceilb`][@stdlib/math/base/special/ceilb]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of b^n toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/floorn`][@stdlib/math/base/special/floorn]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number to the nearest multiple of 10^n toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/roundn`][@stdlib/math/base/special/roundn]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number to the nearest multiple of 10^n.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/ceil]: https://github.com/stdlib-js/math/tree/main/base/special/ceil

[@stdlib/math/base/special/ceilb]: https://github.com/stdlib-js/math/tree/main/base/special/ceilb

[@stdlib/math/base/special/floorn]: https://github.com/stdlib-js/math/tree/main/base/special/floorn

[@stdlib/math/base/special/roundn]: https://github.com/stdlib-js/math/tree/main/base/special/roundn

<!-- </related-links> -->

</section>

<!-- /.links -->
