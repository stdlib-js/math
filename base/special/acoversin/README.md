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

# Arccoversine

> Compute the [inverse coversed sine][inverse-coversed-sine].

<section class="intro">

The [inverse coversed sine][inverse-coversed-sine] is defined as

<!-- <equation class="equation" label="eq:arccoversine" align="center" raw="\operatorname{acoversin}(\theta) = \arcsin(1-\theta)" alt="Inverse coversed sine."> -->

```math
\mathop{\mathrm{acoversin}}(\theta) = \arcsin(1-\theta)
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{acoversin}(\theta) = \arcsin(1-\theta)" data-equation="eq:arccoversine">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/acoversin/docs/img/equation_arccoversine.svg" alt="Inverse coversed sine.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var acoversin = require( '@stdlib/math/base/special/acoversin' );
```

#### acoversin( x )

Computes the [inverse coversed sine][inverse-coversed-sine].

```javascript
var v = acoversin( 0.0 );
// returns ~1.5708

v = acoversin( 3.141592653589793/2.0 );
// returns ~-0.6075

v = acoversin( 3.141592653589793/6.0 );
// returns ~0.4966
```

If `x < 0`, `x > 2`, or `x` is `NaN`, the function returns `NaN`.

```javascript
var v = acoversin( -1.0 );
// returns NaN

v = acoversin( 3.14 );
// returns NaN

v = acoversin( NaN );
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
var acoversin = require( '@stdlib/math/base/special/acoversin' );

var x = uniform( 100, 0.0, 2.0, {
    'dtype': 'float64'
});

logEachMap( 'acoversin(%0.4f) = %0.4f', x, acoversin );
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
#include "stdlib/math/base/special/acoversin.h"
```

#### stdlib_base_acoversin( x )

Computes the [inverse coversed sine][inverse-coversed-sine] of a double-precision floating-point number (in radians).

```c
double out = stdlib_base_acoversin( 3.141592653589793/2.0 );
// returns ~-0.6075
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_acoversin( const double x );
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
#include "stdlib/math/base/special/acoversin.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { -5.0, -3.89, -2.78, -1.67, -0.56, 0.56, 1.67, 2.78, 3.89, 5.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_acoversin( x[ i ] );
        printf( "acoversin(%lf) = %lf\n", x[ i ], v );
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

-   <span class="package-name">[`@stdlib/math/base/special/acovercos`][@stdlib/math/base/special/acovercos]</span><span class="delimiter">: </span><span class="description">compute the inverse coversed cosine.</span>
-   <span class="package-name">[`@stdlib/math/base/special/aversin`][@stdlib/math/base/special/aversin]</span><span class="delimiter">: </span><span class="description">compute the inverse versed sine.</span>
-   <span class="package-name">[`@stdlib/math/base/special/coversin`][@stdlib/math/base/special/coversin]</span><span class="delimiter">: </span><span class="description">compute the coversed sine.</span>
-   <span class="package-name">[`@stdlib/math/base/special/versin`][@stdlib/math/base/special/versin]</span><span class="delimiter">: </span><span class="description">compute the versed sine.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[inverse-coversed-sine]: https://en.wikipedia.org/wiki/Versine

<!-- <related-links> -->

[@stdlib/math/base/special/acovercos]: https://github.com/stdlib-js/math/tree/main/base/special/acovercos

[@stdlib/math/base/special/aversin]: https://github.com/stdlib-js/math/tree/main/base/special/aversin

[@stdlib/math/base/special/coversin]: https://github.com/stdlib-js/math/tree/main/base/special/coversin

[@stdlib/math/base/special/versin]: https://github.com/stdlib-js/math/tree/main/base/special/versin

<!-- </related-links> -->

</section>

<!-- /.links -->
