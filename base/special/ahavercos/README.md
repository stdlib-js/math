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

# Archavercosine

> Compute the [inverse half-value versed cosine][archavercosine].

<section class="intro">

The [inverse half-value versed cosine][archavercosine] is defined as

<!-- <equation class="equation" label="eq:archavercosine" align="center" raw="\operatorname{ahavercos}(\theta) = 2 \cdot \arccos(\sqrt{\theta})" alt="Inverse half-value versed cosine."> -->

```math
\mathop{\mathrm{ahavercos}}(\theta) = 2 \cdot \arccos(\sqrt{\theta})
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{ahavercos}(\theta) = 2 \cdot \arccos(\sqrt{\theta})" data-equation="eq:archavercosine">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/ahavercos/docs/img/equation_archavercosine.svg" alt="Inverse half-value versed cosine.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var ahavercos = require( '@stdlib/math/base/special/ahavercos' );
```

#### ahavercos( x )

Computes the [inverse half-value versed cosine][archavercosine].

```javascript
var v = ahavercos( 0.0 );
// returns ~3.1416

v = ahavercos( 1.0 );
// returns 0.0

v = ahavercos( 0.5 );
// returns ~1.5708
```

If `x < 0`, `x > 1`, or `x` is `NaN`, the function returns `NaN`.

```javascript
var v = ahavercos( 1.5 );
// returns NaN

v = ahavercos( -3.14 );
// returns NaN

v = ahavercos( NaN );
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
var ahavercos = require( '@stdlib/math/base/special/ahavercos' );

var x = uniform( 100, 0.0, 1.0, {
    'dtype': 'float64'
});

logEachMap( 'ahavercos(%0.4f) = %0.4f', x, ahavercos );
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
#include "stdlib/math/base/special/ahavercos.h"
```

#### stdlib_base_ahavercos( x )

Computes the [inverse half-value versed cosine][archavercosine] of a double-precision floating-point number (in radians).

```c
double out = stdlib_base_ahavercos( 0.0 );
// returns ~3.1416
```

If `x < 0`, `x > 1`, or `x` is `NaN`, the function returns `NaN`.

```c
double out = stdlib_base_ahavercos( -3.14 );
// returns NaN
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_ahavercos( const double x );
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
#include "stdlib/math/base/special/ahavercos.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { -2.0, -1.6, -1.2, -0.8, -0.4, 0.4, 0.8, 1.2, 1.6, 2.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_ahavercos( x[ i ] );
        printf( "ahavercos(%lf) = %lf\n", x[ i ], v );
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

-   <span class="package-name">[`@stdlib/math/base/special/ahaversin`][@stdlib/math/base/special/ahaversin]</span><span class="delimiter">: </span><span class="description">compute the inverse half-value versed sine.</span>
-   <span class="package-name">[`@stdlib/math/base/special/havercos`][@stdlib/math/base/special/havercos]</span><span class="delimiter">: </span><span class="description">compute the half-value versed cosine.</span>
-   <span class="package-name">[`@stdlib/math/base/special/vercos`][@stdlib/math/base/special/vercos]</span><span class="delimiter">: </span><span class="description">compute the versed cosine.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[archavercosine]: https://en.wikipedia.org/wiki/Versine

<!-- <related-links> -->

[@stdlib/math/base/special/ahaversin]: https://github.com/stdlib-js/math/tree/main/base/special/ahaversin

[@stdlib/math/base/special/havercos]: https://github.com/stdlib-js/math/tree/main/base/special/havercos

[@stdlib/math/base/special/vercos]: https://github.com/stdlib-js/math/tree/main/base/special/vercos

<!-- </related-links> -->

</section>

<!-- /.links -->
