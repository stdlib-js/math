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

# asecdf

> Compute the [arcsecant][arcsecant] (in degrees) of a single-precision floating-point number.

<section class="usage">

## Usage

```javascript
var asecdf = require( '@stdlib/math/base/special/asecdf' );
```

#### asecdf( x )

Computes the [arcsecant][arcsecant] (in degrees) of a single-precision floating-point number.

```javascript
var sqrtf = require( '@stdlib/math/base/special/sqrtf' );

var v = asecdf( Infinity );
// returns 90.0

v = asecdf( 2.0 * sqrtf( 3.0 ) / 3.0 );
// returns ~30.0

v = asecdf( sqrtf( 2.0 ) );
// returns 45.0

v = asecdf( 2.0 );
// returns ~60.0

v = asecdf( 1.0 );
// returns 0.0

v = asecdf( NaN );
// returns NaN
```

The domain of `x` is restricted to the intervals `[-inf, -1]` and `[1, inf]`. For `x` outside of these intervals, the function returns `NaN`.

```javascript
var v = asecdf( -0.5 );
// returns NaN

v = asecdf( 0.5 );
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
var asecdf = require( '@stdlib/math/base/special/asecdf' );

var x = uniform( 100, 1.1, 5.1, {
    'dtype': 'float32'
});

logEachMap( 'asecdf(%0.4f) = %0.4f', x, asecdf );
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
#include "stdlib/math/base/special/asecdf.h"
```

#### stdlib_base_asecdf( x )

Computes the [arcsecant][arcsecant] (in degrees) of a single-precision floating-point number.

```c
float out = stdlib_base_asecdf( 1.0f );
// returns 0.0f

out = stdlib_base_asecdf( 2.0f );
// returns ~60.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_asecdf( const float x );
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
#include "stdlib/math/base/special/asecdf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 1.1f, 1.55f, 1.99f, 2.44f, 2.88f, 3.32f, 3.77f, 4.21f, 4.66f, 5.1f };

    float v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_asecdf( x[ i ] );
        printf( "acscd(%f) = %f\n", x[ i ], v );
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

-   <span class="package-name">[`@stdlib/math/base/special/asec`][@stdlib/math/base/special/asec]</span><span class="delimiter">: </span><span class="description">compute the inverse (arc) secant of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/asech`][@stdlib/math/base/special/asech]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arcsecant of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/acosdf`][@stdlib/math/base/special/acosdf]</span><span class="delimiter">: </span><span class="description">compute the arccosine (in degrees) of a single-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[arcsecant]: https://en.wikipedia.org/wiki/Inverse_trigonometric_functions

<!-- <related-links> -->

[@stdlib/math/base/special/asec]: https://github.com/stdlib-js/math/tree/main/base/special/asec

[@stdlib/math/base/special/asech]: https://github.com/stdlib-js/math/tree/main/base/special/asech

[@stdlib/math/base/special/acosdf]: https://github.com/stdlib-js/math/tree/main/base/special/acosdf

<!-- </related-links> -->

</section>

<!-- /.links -->
