<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

> Compute the half-value [versed sine][versed-sine] of a single-precision floating-point number (in radians).

<section class="intro">

The half-value [versed sine][versed-sine] is defined as

<!-- <equation class="equation" label="eq:haversine" align="center" raw="\operatorname{haversin}(\theta) = \frac{1 - \cos \theta}{2}" alt="Haversed sine."> -->

```math
\mathop{\mathrm{haversin}}(\theta) = \frac{1 - \cos \theta}{2}
```

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var haversinf = require( '@stdlib/math/base/special/haversinf' );
```

#### haversinf( x )

Computes the half-value [versed sine][versed-sine] of a single-precision floating-point number (in radians).

```javascript
var v = haversinf( 0.0 );
// returns 0.0

v = haversinf( 3.141592653589793/2.0 );
// returns 0.5

v = haversinf( -3.141592653589793/6.0 );
// returns ~0.067
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var TWO_PI = require( '@stdlib/constants/float32/two-pi' );
var haversinf = require( '@stdlib/math/base/special/haversinf' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, 0.0, TWO_PI, opts );

logEachMap( 'haversinf(%0.4f) = %0.4f', x, haversinf );
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
#include "stdlib/math/base/special/haversinf.h"
```

#### stdlib_base_haversinf( x )

Computes the half-value [versed sine][versed-sine] of a single-precision floating-point number (in radians).

```c
float out = stdlib_base_haversinf( 0.0f );
// returns 0.0f

out = stdlib_base_haversinf( 3.141592653589793f / 2.0f );
// returns 0.5f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_haversinf( const float x );
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
#include "stdlib/math/base/special/haversinf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 0.0f, 0.523f, 0.785f, 1.047f, 3.14f };

    float y;
    int i;
    for ( i = 0; i < 5; i++ ) {
        y = stdlib_base_haversinf( x[ i ] );
        printf( "haversinf(%f) = %f\n", x[ i ], y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[versed-sine]: https://en.wikipedia.org/wiki/Versine

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
