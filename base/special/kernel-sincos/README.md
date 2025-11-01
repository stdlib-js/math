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

# kernelSincos

> Simultaneously compute the [sine][@stdlib/math/base/special/sin] and [cosine][@stdlib/math/base/special/cos] of an angle measured in radians on the interval `[-π/4, π/4]`.

<section class="usage">

## Usage

```javascript
var kernelSincos = require( '@stdlib/math/base/special/kernel-sincos' );
```

#### kernelSincos( x, y, out, stride, offset )

Simultaneously computes the [sine][@stdlib/math/base/special/sin] and [cosine][@stdlib/math/base/special/cos] of an angle measured in radians on the interval `[-π/4, π/4]`.

```javascript
var v = kernelSincos( 0.0, 0.0, [ 0.0, 0.0 ], 1, 0 );
// returns [ ~0.0, ~1.0 ]

v = kernelSincos( 3.141592653589793/2.0, 0.0, [ 0.0, 0.0 ], 1, 0 );
// returns [ ~1.0, ~0.0 ]

v = kernelSincos( -3.141592653589793/6.0, 0.0, [ 0.0, 0.0 ], 1, 0 );
// returns [ ~-0.5, ~0.866 ]

v = kernelSincos( NaN, 0.0, [ 0.0, 0.0 ], 1, 0 );
// returns [ NaN, NaN ]
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/base/linspace' );
var PI = require( '@stdlib/constants/float64/pi' );
var kernelSincos = require( '@stdlib/math/base/special/kernel-sincos' );

var x = linspace( -PI/4.0, PI/4.0, 100 );

var y;
var i;
for ( i = 0; i < x.length; i++ ) {
    y = kernelSincos( x[ i ], 0.0, [ 0.0, 0.0 ], 1, 0 );
    console.log( 'kernelSincos(%d) = [ %d, %d ]', x[ i ], y[ 0 ], y[ 1 ] );
}
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
#include "stdlib/math/base/special/kernel_sincos.h"
```

#### stdlib_base_kernel_sincos( x, y, &sine, &cosine )

Simultaneously computes the [sine][@stdlib/math/base/special/sin] and [cosine][@stdlib/math/base/special/cos] of an angle measured in radians on the interval `[-π/4, π/4]`.

```c
double cosine;
double sine;

stdlib_base_kernel_sincos( 0.0, 0.0, &sine, &cosine );
```

The function accepts the following arguments:

-   **x**: `[in] double` input value (in radians, assumed to be bounded by `~pi/4` in magnitude).
-   **y**: `[in] double` tail of `x`.
-   **sine**: `[out] double*` destination for the sine.
-   **cosine**: `[out] double*` destination for the cosine.

```c
void stdlib_base_kernel_sincos( const double x, const double y, double* sine, double* cosine );
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
#include "stdlib/math/base/special/kernel_sincos.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { -0.7853981633974483, -0.6108652381980153, -0.4363323129985824, -0.26179938779914946, -0.08726646259971649, 0.08726646259971649, 0.26179938779914935, 0.43633231299858233, 0.6108652381980153, 0.7853981633974483 };

    double cosine;
    double sine;
    int i;
    for ( i = 0; i < 10; i++ ) {
        stdlib_base_kernel_sincos( x[ i ], 0.0, &sine, &cosine );
        printf( "x: %lf => sine: %lf, cosine: %lf\n", x[ i ], sine, cosine );
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

[@stdlib/math/base/special/cos]: https://github.com/stdlib-js/math/tree/main/base/special/cos

[@stdlib/math/base/special/sin]: https://github.com/stdlib-js/math/tree/main/base/special/sin

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
