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

# Archaversine

> Compute the [inverse half-value versed sine][archaversine].

<section class="intro">

The [inverse half-value versed sine][archaversine] is defined as

<!-- <equation class="equation" label="eq:archaversine" align="center" raw="\operatorname{ahaversin}(\theta) = 2 \cdot \arcsin(\sqrt{\theta})" alt="Inverse half-value versed sine."> -->

```math
\mathop{\mathrm{ahaversin}}(\theta) = 2 \cdot \arcsin(\sqrt{\theta})
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{ahaversin}(\theta) = 2 \cdot \arcsin(\sqrt{\theta})" data-equation="eq:archaversine">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/ahaversin/docs/img/equation_archaversine.svg" alt="Inverse half-value versed sine.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var ahaversin = require( '@stdlib/math/base/special/ahaversin' );
```

#### ahaversin( x )

Computes the [inverse half-value versed sine][archaversine].

```javascript
var v = ahaversin( 0.0 );
// returns 0.0

v = ahaversin( 1.0 );
// returns ~3.1416

v = ahaversin( 0.5 );
// returns ~1.5708
```

If `x < 0`, `x > 1`, or `x` is `NaN`, the function returns `NaN`.

```javascript
var v = ahaversin( 1.5 );
// returns NaN

v = ahaversin( -3.14 );
// returns NaN

v = ahaversin( NaN );
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
var ahaversin = require( '@stdlib/math/base/special/ahaversin' );

var x = uniform( 100, 0.0, 1.0, {
    'dtype': 'float64'
});

logEachMap( 'ahaversin(%0.4f) = %0.4f', x, ahaversin );
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
#include "stdlib/math/base/special/ahaversin.h"
```

#### stdlib_base_ahaversin( x )

Computes the [inverse half-value versed sine][archaversine] of a double-precision floating-point number (in radians).

```c
double out = stdlib_base_ahaversin( 0.0 );
// returns 0.0
```

If `x < 0`, `x > 1`, or `x` is `NaN`, the function returns `NaN`.

```c
double out = stdlib_base_ahaversin( -3.14 );
// returns NaN
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_ahaversin( const double x );
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
#include "stdlib/math/base/special/ahaversin.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { -2.0, -1.6, -1.2, -0.8, -0.4, 0.4, 0.8, 1.2, 1.6, 2.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_ahaversin( x[ i ] );
        printf( "ahaversin(%lf) = %lf\n", x[ i ], v );
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

-   <span class="package-name">[`@stdlib/math/base/special/ahavercos`][@stdlib/math/base/special/ahavercos]</span><span class="delimiter">: </span><span class="description">compute the inverse half-value versed cosine.</span>
-   <span class="package-name">[`@stdlib/math/base/special/haversin`][@stdlib/math/base/special/haversin]</span><span class="delimiter">: </span><span class="description">compute the half-value versed sine.</span>
-   <span class="package-name">[`@stdlib/math/base/special/versin`][@stdlib/math/base/special/versin]</span><span class="delimiter">: </span><span class="description">compute the versed sine.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[archaversine]: https://en.wikipedia.org/wiki/Versine

<!-- <related-links> -->

[@stdlib/math/base/special/ahavercos]: https://github.com/stdlib-js/math/tree/main/base/special/ahavercos

[@stdlib/math/base/special/haversin]: https://github.com/stdlib-js/math/tree/main/base/special/haversin

[@stdlib/math/base/special/versin]: https://github.com/stdlib-js/math/tree/main/base/special/versin

<!-- </related-links> -->

</section>

<!-- /.links -->
