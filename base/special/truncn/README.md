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

# truncn

> Round a numeric value to the nearest multiple of 10^n toward zero.

<section class="usage">

## Usage

```javascript
var truncn = require( '@stdlib/math/base/special/truncn' );
```

#### truncn( x, n )

Rounds a `numeric` value to the nearest multiple of `10^n` toward zero.

```javascript
// Round a value to 4 decimal places:
var v = truncn( 3.141592653589793, -4 );
// returns 3.1415

// If n = 0, `truncn` behaves like `trunc`:
v = truncn( 3.141592653589793, 0 );
// returns 3.0

// Round a value to the nearest thousand:
v = truncn( 12368.0, 3 );
// returns 12000.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When operating on [floating-point numbers][ieee754] in bases other than `2`, rounding to specified digits can be **inexact**.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var truncn = require( '@stdlib/math/base/special/truncn' );

var x;
var n;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    n = truncn( randu()*5.0, 0 );
    v = truncn( x, -n );
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
#include "stdlib/math/base/special/truncn.h"
```

#### stdlib_base_truncn( x, n )

Rounds a `numeric` value to the nearest multiple of `10^n` toward zero.

```c
double y = stdlib_base_truncn( 3.141592653589793, -4 );
// 3.1415
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **n**: `[in] int32_t` integer power of 10.

```c
double stdlib_base_truncn( const double x, const int32_t n );
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
#include "stdlib/math/base/special/truncn.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 3.141592653589793, -3.141592653589793, 2.731, 3.55555 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_truncn( x[ i ], -2 );
        printf( "truncn(%lf) = %lf\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/ceiln`][@stdlib/math/base/special/ceiln]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of 10^n toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/floorn`][@stdlib/math/base/special/floorn]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number to the nearest multiple of 10^n toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/roundn`][@stdlib/math/base/special/roundn]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number to the nearest multiple of 10^n.</span>
-   <span class="package-name">[`@stdlib/math/base/special/trunc`][@stdlib/math/base/special/trunc]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number toward zero.</span>
-   <span class="package-name">[`@stdlib/math/base/special/truncb`][@stdlib/math/base/special/truncb]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of b^n toward zero.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/ceiln]: https://github.com/stdlib-js/math/tree/main/base/special/ceiln

[@stdlib/math/base/special/floorn]: https://github.com/stdlib-js/math/tree/main/base/special/floorn

[@stdlib/math/base/special/roundn]: https://github.com/stdlib-js/math/tree/main/base/special/roundn

[@stdlib/math/base/special/trunc]: https://github.com/stdlib-js/math/tree/main/base/special/trunc

[@stdlib/math/base/special/truncb]: https://github.com/stdlib-js/math/tree/main/base/special/truncb

<!-- </related-links> -->

</section>

<!-- /.links -->
