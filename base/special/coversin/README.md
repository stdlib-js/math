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

# Coversine

> Compute the [coversed sine][coversed-sine].

<section class="intro">

The [coversed sine][coversed-sine] is defined as

<!-- <equation class="equation" label="eq:coversine" align="center" raw="\operatorname{coversin}(\theta) = 1 - \sin \theta" alt="Coversed sine."> -->

```math
\mathop{\mathrm{coversin}}(\theta) = 1 - \sin \theta
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{coversin}(\theta) = 1 - \sin \theta" data-equation="eq:coversine">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/coversin/docs/img/equation_coversine.svg" alt="Coversed sine.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var coversin = require( '@stdlib/math/base/special/coversin' );
```

#### coversin( x )

Computes the [coversed sine][coversed-sine] (in radians).

```javascript
var v = coversin( 0.0 );
// returns 1.0

v = coversin( 3.141592653589793/2.0 );
// returns 0.0

v = coversin( -3.141592653589793/6.0 );
// returns 1.5
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var TWO_PI = require( '@stdlib/constants/float64/two-pi' );
var coversin = require( '@stdlib/math/base/special/coversin' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, 0.0, TWO_PI, opts );

logEachMap( 'coversin(%0.4f) = %0.4f', x, coversin );
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
#include "stdlib/math/base/special/coversin.h"
```

#### stdlib_base_coversin( x )

Computes the [coversed sine][coversed-sine] (in radians).

```c
double out = stdlib_base_coversin( 0.0 );
// returns 1.0

out = stdlib_base_coversin( 3.141592653589793 / 2.0 );
// returns 0.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_coversin( const double x );
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
#include "stdlib/math/base/special/coversin.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 0.0, 0.523, 0.785, 1.047, 3.14 };

    double y;
    int i;
    for ( i = 0; i < 5; i++ ) {
        y = stdlib_base_coversin( x[ i ] );
        printf( "coversin(%lf) = %lf\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/covercos`][@stdlib/math/base/special/covercos]</span><span class="delimiter">: </span><span class="description">compute the coversed cosine.</span>
-   <span class="package-name">[`@stdlib/math/base/special/versin`][@stdlib/math/base/special/versin]</span><span class="delimiter">: </span><span class="description">compute the versed sine.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[coversed-sine]: https://en.wikipedia.org/wiki/Versine

<!-- <related-links> -->

[@stdlib/math/base/special/covercos]: https://github.com/stdlib-js/math/tree/main/base/special/covercos

[@stdlib/math/base/special/versin]: https://github.com/stdlib-js/math/tree/main/base/special/versin

<!-- </related-links> -->

</section>

<!-- /.links -->
