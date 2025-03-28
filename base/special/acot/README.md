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

# acot

> Compute the [inverse cotangent][arccotangent] of a double-precision floating-point number.

<section class="usage">

## Usage

```javascript
var acot = require( '@stdlib/math/base/special/acot' );
```

#### acot( x )

Computes the [inverse cotangent][arccotangent] of a double-precision floating-point number (in radians).

```javascript
var v = acot( 2.0 );
// returns ~0.4636

v = acot( Infinity );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var acot = require( '@stdlib/math/base/special/acot' );

var x = uniform( 100, -5.0, 5.0, {
    'dtype': 'float64'
});

logEachMap( 'acot(%0.4f) = %0.4f', x, acot );
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
#include "stdlib/math/base/special/acot.h"
```

#### stdlib_base_acot( x )

Computes the [inverse cotangent][arccotangent] of a double-precision floating-point number (in radians).

```c
double out = stdlib_base_acot( 2.0 );
// returns ~0.4636
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_acot( const double x );
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
#include "stdlib/math/base/special/acot.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { -5.0, -3.89, -2.78, -1.67, -0.56, 0.56, 1.67, 2.78, 3.89, 5.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_acot( x[ i ] );
        printf( "acot(%lf) = %lf\n", x[ i ], v );
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

-   <span class="package-name">[`@stdlib/math/base/special/acoth`][@stdlib/math/base/special/acoth]</span><span class="delimiter">: </span><span class="description">compute the inverse hyperbolic cotangent.</span>
-   <span class="package-name">[`@stdlib/math/base/special/atan`][@stdlib/math/base/special/atan]</span><span class="delimiter">: </span><span class="description">compute the arctangent of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/cot`][@stdlib/math/base/special/cot]</span><span class="delimiter">: </span><span class="description">evaluate the cotangent of a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[arccotangent]: https://en.wikipedia.org/wiki/Inverse_trigonometric_functions

<!-- <related-links> -->

[@stdlib/math/base/special/acoth]: https://github.com/stdlib-js/math/tree/main/base/special/acoth

[@stdlib/math/base/special/atan]: https://github.com/stdlib-js/math/tree/main/base/special/atan

[@stdlib/math/base/special/cot]: https://github.com/stdlib-js/math/tree/main/base/special/cot

<!-- </related-links> -->

</section>

<!-- /.links -->
