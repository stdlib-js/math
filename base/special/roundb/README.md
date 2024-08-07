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

# roundb

> Round a numeric value to the nearest multiple of b^n on a linear scale.

<section class="usage">

## Usage

```javascript
var roundb = require( '@stdlib/math/base/special/roundb' );
```

#### roundb( x, n, b )

Rounds a `numeric` value to the nearest multiple of `b^n` on a linear scale.

```javascript
// Round a value to 2 decimal places:
var v = roundb( 3.141592653589793, -2, 10 );
// returns 3.14

// If n = 0 or b = 1, `roundb` behaves like `round`:
v = roundb( 3.141592653589793, 0, 2 );
// returns 3.0

// Round a value to the nearest multiple of two:
v = roundb( 5.0, 1, 2 );
// returns 6.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Due to rounding error in [floating-point numbers][ieee754], rounding may **not** be exact. For example,

    ```javascript
    var x = 0.2 + 0.1;
    // returns 0.30000000000000004

    // Should round to 0.3...
    var v = roundb( x, -16, 10 );
    // returns 0.3000000000000001
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var pow = require( '@stdlib/math/base/special/pow' );
var roundb = require( '@stdlib/math/base/special/roundb' );

var x;
var n;
var b;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    n = round( (randu()*10.0) - 5.0 );
    b = round( randu()*10.0 );
    v = roundb( x, n, b );
    console.log( 'x: %d. %d^%d: %d. Rounded: %d.', x, b, n, pow( b, n ), v );
}
```

</section>

<!-- /.examples -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/roundb.h"
```

#### stdlib_base_roundb( x, n, b )

Rounds a `numeric` value to the nearest multiple of `b^n` on a linear scale.

```c
double out = stdlib_base_roundb( 3.141592653589793, -2, 10 );
// returns 3.14
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **n**: `[in] int32_t` power.
-   **b**: `[in] int32_t` base.

```c
double stdlib_base_roundb( const double x, const int32_t n, const int32_t b );
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
#include "stdlib/math/base/special/roundb.h"
#include <stdio.h>
#include <stdint.h>

int main( void ) {
    const double x[] = { -5.0, -3.89, -2.78, -1.67, -0.56, 0.56, 1.67, 2.78, 3.89, 5.0 };
    const int32_t n[] = { -4, -3, -2, -1, 0, 1, 2, 3, 4, 5 };
    const int32_t b[] = { 20, 19, 18, 17, 16, 15, 14, 13, 12, 11 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_roundb( x[ i ], n[ i ], b[ i ] );
        printf( "roundb(%lf, %d, %d) = %lf\n", x[ i ], n[ i ], b[ i ], v );
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

-   <span class="package-name">[`@stdlib/math/base/special/ceilb`][@stdlib/math/base/special/ceilb]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of b^n toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/floorb`][@stdlib/math/base/special/floorb]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of b^n toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/round`][@stdlib/math/base/special/round]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest integer.</span>
-   <span class="package-name">[`@stdlib/math/base/special/roundn`][@stdlib/math/base/special/roundn]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number to the nearest multiple of 10^n.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/ceilb]: https://github.com/stdlib-js/math/tree/main/base/special/ceilb

[@stdlib/math/base/special/floorb]: https://github.com/stdlib-js/math/tree/main/base/special/floorb

[@stdlib/math/base/special/round]: https://github.com/stdlib-js/math/tree/main/base/special/round

[@stdlib/math/base/special/roundn]: https://github.com/stdlib-js/math/tree/main/base/special/roundn

<!-- </related-links> -->

</section>

<!-- /.links -->
