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

# kernelSincosf

> Simultaneously compute the [sine][@stdlib/math/base/special/sinf] and [cosine][@stdlib/math/base/special/cosf] of an angle measured in radians on `[-π/4, π/4]` in single-precision floating-point format.

<section class="usage">

## Usage

```javascript
var kernelSincosf = require( '@stdlib/math/base/special/kernel-sincosf' );
```

#### kernelSincosf( x )

Simultaneously computes the [sine][@stdlib/math/base/special/sinf] and [cosine][@stdlib/math/base/special/cosf] of an angle measured in radians on `[-π/4, π/4]` in single-precision floating-point format.

```javascript
var sc = kernelSincosf( 0.0 );
// returns [ ~0.0, ~1.0 ]

sc = kernelSincosf( 3.141592653589793/2.0 );
// returns [ ~1.0, ~0.0 ]

sc = kernelSincosf( -3.141592653589793/6.0 );
// returns [ ~-0.5, ~0.866 ]

sc = kernelSincosf( NaN );
// returns [ NaN, NaN ]
```

#### kernelSincosf.assign( x, out, stride, offset )

Simultaneously computes the [sine][@stdlib/math/base/special/sinf] and [cosine][@stdlib/math/base/special/cosf] of an angle measured in radians on `[-π/4, π/4]` in single-precision floating-point format, and stores the results in a provided output array.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var out = new Float32Array( 2 );

var sc = kernelSincosf.assign( 0.0, out, 1, 0 );
// returns <Float32Array>[ ~0.0, ~1.0 ]

var bool = ( sc === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/base/linspace' );
var PI = require( '@stdlib/constants/float64/pi' );
var kernelSincosf = require( '@stdlib/math/base/special/kernel-sincosf' );

var x = linspace( -PI/4.0, PI/4.0, 100 );

var y;
var i;
for ( i = 0; i < x.length; i++ ) {
    y = kernelSincosf( x[ i ] );
    console.log( 'kernelSincosf(%d) = [ %d, %d ]', x[ i ], y[ 0 ], y[ 1 ] );
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
#include "stdlib/math/base/special/kernel_sincosf.h"
```

#### stdlib_base_kernel_sincosf( x, &sine, &cosine )

Simultaneously computes the [sine][@stdlib/math/base/special/sinf] and [cosine][@stdlib/math/base/special/cosf] of an angle measured in radians on `[-π/4, π/4]` in single-precision floating-point format.

```c
float cosine;
float sine;

stdlib_base_kernel_sincosf( 0.0, &sine, &cosine );
```

The function accepts the following arguments:

-   **x**: `[in] double` input value (in radians, assumed to be bounded by `~pi/4` in magnitude).
-   **sine**: `[out] float*` destination for the sine.
-   **cosine**: `[out] float*` destination for the cosine.

```c
void stdlib_base_kernel_sincosf( const double x, float* sine, float* cosine );
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
#include "stdlib/math/base/special/kernel_sincosf.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { -0.7853981633974483, -0.6108652381980153, -0.4363323129985824, -0.26179938779914946, -0.08726646259971649, 0.08726646259971649, 0.26179938779914935, 0.43633231299858233, 0.6108652381980153, 0.7853981633974483 };

    float cosine;
    float sine;
    int i;
    for ( i = 0; i < 10; i++ ) {
        stdlib_base_kernel_sincosf( x[ i ], &sine, &cosine );
        printf( "kernelSincosf(%lf) = [ %f, %f ]\n", x[ i ], sine, cosine );
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

[@stdlib/math/base/special/cosf]: https://github.com/stdlib-js/math/tree/main/base/special/cosf

[@stdlib/math/base/special/sinf]: https://github.com/stdlib-js/math/tree/main/base/special/sinf

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
