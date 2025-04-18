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

# Haversine

> Compute the half-value [versed sine][versed-sine].

<section class="intro">

The half-value [versed sine][versed-sine] is defined as

<!-- <equation class="equation" label="eq:haversine" align="center" raw="\operatorname{haversin}(\theta) = \frac{1 - \cos \theta}{2}" alt="Haversed sine."> -->

```math
\mathop{\mathrm{haversin}}(\theta) = \frac{1 - \cos \theta}{2}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{haversin}(\theta) = \frac{1 - \cos \theta}{2}" data-equation="eq:haversine">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@26abdafc2789332d3fcc28c36d4b22669a5fde03/lib/node_modules/@stdlib/math/base/special/haversin/docs/img/equation_haversine.svg" alt="Haversed sine.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var haversin = require( '@stdlib/math/base/special/haversin' );
```

#### haversin( x )

Computes the half-value [versed sine][versed-sine] (in radians).

```javascript
var v = haversin( 0.0 );
// returns 0.0

v = haversin( 3.141592653589793/2.0 );
// returns ~0.5

v = haversin( -3.141592653589793/6.0 );
// returns ~0.06699
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
var haversin = require( '@stdlib/math/base/special/haversin' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, 0.0, TWO_PI, opts );

logEachMap( 'haversin(%0.4f) = %0.4f', x, haversin );
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
#include "stdlib/math/base/special/haversin.h"
```

#### stdlib_base_haversin( x )

Computes the half-value [versed sine][versed-sine] (in radians).

```c
double out = stdlib_base_haversin( 0.0 );
// returns 0.0

out = stdlib_base_haversin( 3.141592653589793 / 2.0 );
// returns ~0.5
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_haversin( const double x );
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
#include "stdlib/math/base/special/haversin.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 0.0, 0.523, 0.785, 1.047, 3.14 };

    double y;
    int i;
    for ( i = 0; i < 5; i++ ) {
        y = stdlib_base_haversin( x[ i ] );
        printf( "haversin(%lf) = %lf\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/havercos`][@stdlib/math/base/special/havercos]</span><span class="delimiter">: </span><span class="description">compute the half-value versed cosine.</span>
-   <span class="package-name">[`@stdlib/math/base/special/versin`][@stdlib/math/base/special/versin]</span><span class="delimiter">: </span><span class="description">compute the versed sine.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[versed-sine]: https://en.wikipedia.org/wiki/Versine

<!-- <related-links> -->

[@stdlib/math/base/special/havercos]: https://github.com/stdlib-js/math/tree/main/base/special/havercos

[@stdlib/math/base/special/versin]: https://github.com/stdlib-js/math/tree/main/base/special/versin

<!-- </related-links> -->

</section>

<!-- /.links -->
