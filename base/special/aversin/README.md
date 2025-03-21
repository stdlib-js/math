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

# Arcversine

> Compute the [inverse versed sine][inverse-versed-sine].

<section class="intro">

The [inverse versed sine][inverse-versed-sine] is defined as

<!-- <equation class="equation" label="eq:arcversine" align="center" raw="\operatorname{aversin}(\theta) = \arccos(1-\theta)" alt="Inverse versed sine."> -->

```math
\mathop{\mathrm{aversin}}(\theta) = \arccos(1-\theta)
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{aversin}(\theta) = \arccos(1-\theta)" data-equation="eq:arcversine">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/aversin/docs/img/equation_arcversine.svg" alt="Inverse versed sine.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var aversin = require( '@stdlib/math/base/special/aversin' );
```

#### aversin( x )

Computes the [inverse versed sine][inverse-versed-sine].

```javascript
var v = aversin( 0.0 );
// returns 0.0

v = aversin( 3.141592653589793/2.0 );
// returns ~2.1783

v = aversin( 3.141592653589793/6.0 );
// returns ~1.0742
```

If `x < 0`, `x > 2`, or `x` is `NaN`, the function returns `NaN`.

```javascript
var v = aversin( -1.0 );
// returns NaN

v = aversin( 3.14 );
// returns NaN

v = aversin( NaN );
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
var aversin = require( '@stdlib/math/base/special/aversin' );

var x = uniform( 100, 0.0, 2.0, {
    'dtype': 'float64'
});

logEachMap( 'aversin(%0.4f) = %0.4f', x, aversin );
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
#include "stdlib/math/base/special/aversin.h"
```

#### stdlib_base_aversin( x )

Computes the [inverse versed sine][inverse-versed-sine] of a double-precision floating-point number (in radians).

```c
double out = stdlib_base_aversin( 3.141592653589793/2.0 );
// returns ~2.1783
```

If `x < 0`, `x > 2`, or `x` is `NaN`, the function returns `NaN`.

```c
double out = stdlib_base_aversin( 3.141592653589793 );
// returns NaN
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_aversin( const double x );
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
#include "stdlib/math/base/special/aversin.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { -2.5, -2.0, -1.5, -1.0, -0.5, 0.5, 1.0, 1.5, 2.0, 2.5 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_aversin( x[ i ] );
        printf( "aversin(%lf) = %lf\n", x[ i ], v );
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

-   <span class="package-name">[`@stdlib/math/base/special/avercos`][@stdlib/math/base/special/avercos]</span><span class="delimiter">: </span><span class="description">compute the inverse versed cosine.</span>
-   <span class="package-name">[`@stdlib/math/base/special/vercos`][@stdlib/math/base/special/vercos]</span><span class="delimiter">: </span><span class="description">compute the versed cosine.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[inverse-versed-sine]: https://en.wikipedia.org/wiki/Versine

<!-- <related-links> -->

[@stdlib/math/base/special/avercos]: https://github.com/stdlib-js/math/tree/main/base/special/avercos

[@stdlib/math/base/special/vercos]: https://github.com/stdlib-js/math/tree/main/base/special/vercos

<!-- </related-links> -->

</section>

<!-- /.links -->
