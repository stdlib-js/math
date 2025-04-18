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

# acscf

> Compute the [arccosecant][arccosecant] of a single-precision floating-point number.

<section class="usage">

## Usage

```javascript
var acscf = require( '@stdlib/math/base/special/acscf' );
```

#### acscf( x )

Computes the [arccosecant][arccosecant] of a single-precision floating-point number.

```javascript
var v = acscf( 1.0 );
// returns ~1.57

v = acscf( 3.141592653589793 );
// returns ~0.32

v = acscf( -3.141592653589793 );
// returns ~-0.32
```

If `|x| < 1`, the function returns `NaN`.

```javascript
var v = acscf( 0.5 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var acscf = require( '@stdlib/math/base/special/acscf' );

var x = uniform( 100, 1.1, 5.1, {
    'dtype': 'float32'
});

logEachMap( 'acscf(%0.4f) = %0.4f', x, acscf );
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
#include "stdlib/math/base/special/acscf.h"
```

#### stdlib_base_acscf( x )

Computes the [arccosecant][arccosecant] of a single-precision floating-point number.

```c
float out = stdlib_base_acscf( 1.0f );
// returns ~1.57f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_acscf( const float x );
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
#include "stdlib/math/base/special/acscf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { -5.0f, -3.89f, -2.78f, -1.67f, -0.56f, 0.56f, 1.67f, 2.78f, 3.89f, 5.0f };

    float v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_acscf( x[ i ] );
        printf( "acsc(%f) = %f\n", x[ i ], v );
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

-   <span class="package-name">[`@stdlib/math/base/special/acsc`][@stdlib/math/base/special/acsc]</span><span class="delimiter">: </span><span class="description">compute the arccosecant of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/acsch`][@stdlib/math/base/special/acsch]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arccosecant of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/asecf`][@stdlib/math/base/special/asecf]</span><span class="delimiter">: </span><span class="description">compute the inverse (arc) secant of a single-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/asinf`][@stdlib/math/base/special/asinf]</span><span class="delimiter">: </span><span class="description">compute the arcsine of a single-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[arccosecant]: https://en.wikipedia.org/wiki/Inverse_trigonometric_functions

<!-- <related-links> -->

[@stdlib/math/base/special/acsc]: https://github.com/stdlib-js/math/tree/main/base/special/acsc

[@stdlib/math/base/special/acsch]: https://github.com/stdlib-js/math/tree/main/base/special/acsch

[@stdlib/math/base/special/asecf]: https://github.com/stdlib-js/math/tree/main/base/special/asecf

[@stdlib/math/base/special/asinf]: https://github.com/stdlib-js/math/tree/main/base/special/asinf

<!-- </related-links> -->

</section>

<!-- /.links -->
