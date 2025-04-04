<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# acotf

> Compute the [inverse cotangent][arccotangent] of a single-precision floating-point number.

<section class="usage">

## Usage

```javascript
var acotf = require( '@stdlib/math/base/special/acotf' );
```

#### acotf( x )

Computes the [inverse cotangent][arccotangent] of a single-precision floating-point number.

```javascript
var v = acotf( 2.0 );
// returns ~0.4636

v = acotf( Infinity );
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
var acotf = require( '@stdlib/math/base/special/acotf' );

var x = uniform( 100, -5.0, 5.0, {
    'dtype': 'float32'
});

logEachMap( 'acotf(%0.4f) = %0.4f', x, acotf );
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
#include "stdlib/math/base/special/acotf.h"
```

#### stdlib_base_acotf( x )

Computes the [inverse cotangent][arccotangent] of a single-precision floating-point number.

```c
float out = stdlib_base_acotf( 2.0f );
// returns ~0.4636f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_acotf( const float x );
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
#include "stdlib/math/base/special/acotf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { -5.0f, -3.89f, -2.78f, -1.67f, -0.56f, 0.56f, 1.67f, 2.78f, 3.89f, 5.0f };

    float v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_acotf( x[ i ] );
        printf( "acot(%f) = %f\n", x[ i ], v );
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

-   <span class="package-name">[`@stdlib/math/base/special/acot`][@stdlib/math/base/special/acot]</span><span class="delimiter">: </span><span class="description">compute the inverse cotangent.</span>
-   <span class="package-name">[`@stdlib/math/base/special/acoth`][@stdlib/math/base/special/acoth]</span><span class="delimiter">: </span><span class="description">compute the inverse hyperbolic cotangent.</span>
-   <span class="package-name">[`@stdlib/math/base/special/atanf`][@stdlib/math/base/special/atanf]</span><span class="delimiter">: </span><span class="description">compute the arctangent of a single-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[arccotangent]: https://en.wikipedia.org/wiki/Inverse_trigonometric_functions

<!-- <related-links> -->

[@stdlib/math/base/special/acot]: https://github.com/stdlib-js/math/tree/main/base/special/acot

[@stdlib/math/base/special/acoth]: https://github.com/stdlib-js/math/tree/main/base/special/acoth

[@stdlib/math/base/special/atanf]: https://github.com/stdlib-js/math/tree/main/base/special/atanf

<!-- </related-links> -->

</section>

<!-- /.links -->
