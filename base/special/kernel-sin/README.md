<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# kernelSin

> Compute the [sine][sine] of a double-precision floating-point number on `[-π/4, π/4]`.

<section class="usage">

## Usage

```javascript
var kernelSin = require( '@stdlib/math/base/special/kernel-sin' );
```

#### kernelSin( x, y )

Computes the [sine][sine] of a double-precision floating-point number on `[-π/4, π/4]`.

```javascript
var v = kernelSin( 0.0, 0.0 );
// returns ~0.0

v = kernelSin( 3.141592653589793/6.0, 0.0 );
// returns ~0.5

v = kernelSin( 0.619, 9.279e-18 );
// returns ~0.58

v = kernelSin( NaN, 0.0 );
// returns NaN

v = kernelSin( 3.0, NaN );
// returns NaN

v = kernelSin( NaN, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For increased accuracy, the number for which the [sine][sine] should be evaluated can be supplied as a [double-double number][double-double-arithmetic] (i.e., a non-evaluated sum of two [double-precision floating-point numbers][ieee754] `x` and `y`).

-   As components of a [double-double number][double-double-arithmetic], the two [double-precision floating-point numbers][ieee754] `x` and `y` must satisfy

    <!-- <equation class="equation" label="eq:double_double_inequality" align="center" raw="|y| \leq \frac{1}{2} \operatorname{ulp}(x)" alt="Inequality for the two components of a double-double number."> -->

    <div class="equation" align="center" data-raw-text="|y| \leq \frac{1}{2} \operatorname{ulp}(x)" data-equation="eq:double_double_inequality">
        <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@819807799dc2df7eb037d5901624fa3169bce774/lib/node_modules/@stdlib/math/base/special/kernel-sin/docs/img/equation_double_double_inequality.svg" alt="Inequality for the two components of a double-double number.">
        <br>
    </div>

    <!-- </equation> -->

    where `ulp` stands for [units in the last place][ulp].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var PI = require( '@stdlib/constants/float64/pi' );
var kernelSin = require( '@stdlib/math/base/special/kernel-sin' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -PI/4.0, PI/4.0, opts );

logEachMap( 'sine(%0.4f, %0.4f) = %0.4f', x, 0.0, kernelSin );
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
#include "stdlib/math/base/special/kernel_sin.h"
```

#### stdlib_base_kernel_sin( x, y )

Computes the [sine][sine] of a double-precision floating-point number on `[-π/4, π/4]`.

```c
double out = stdlib_base_kernel_sin( 0.0, 0.0 );
// returns ~0.0

out = stdlib_base_kernel_sin( 0.619, 9.279e-18 );
// returns ~0.58
```

The function accepts the following arguments:

-   **x**: `[in] double` input value (in radians, assumed to be bounded by `~pi/4` in magnitude).
-   **y**: `[in] double` tail of `x`.

```c
double stdlib_base_kernel_sin( const double x, const double y );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   For increased accuracy, the number for which the [sine][sine] should be evaluated can be supplied as a [double-double number][double-double-arithmetic] (i.e., a non-evaluated sum of two [double-precision floating-point numbers][ieee754] `x` and `y`).

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/kernel_sin.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { -0.7853981633974483, -0.6108652381980153, -0.4363323129985824, -0.26179938779914946, -0.08726646259971649, 0.08726646259971649, 0.26179938779914935, 0.43633231299858233, 0.6108652381980153, 0.7853981633974483 };

    double out;
    int i;
    for ( i = 0; i < 10; i++ ) {
        out = stdlib_base_kernel_sin( x[ i ], 0.0 );
        printf ( "x: %lf, y: %lf, out: %lf\n", x[ i ], 0.0, out );
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

-   <span class="package-name">[`@stdlib/math/base/special/kernel-cos`][@stdlib/math/base/special/kernel-cos]</span><span class="delimiter">: </span><span class="description">compute the cosine of a double-precision floating-point number on \[-π/4, π/4].</span>
-   <span class="package-name">[`@stdlib/math/base/special/kernel-tan`][@stdlib/math/base/special/kernel-tan]</span><span class="delimiter">: </span><span class="description">compute the tangent of a double-precision floating-point number on \[-π/4, π/4].</span>
-   <span class="package-name">[`@stdlib/math/base/special/sin`][@stdlib/math/base/special/sin]</span><span class="delimiter">: </span><span class="description">compute the sine of a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[sine]: https://en.wikipedia.org/wiki/Sine

[double-double-arithmetic]: https://en.wikipedia.org/wiki/Quadruple-precision_floating-point_format#Double-double_arithmetic

[ieee754]: https://en.wikipedia.org/wiki/IEEE_floating_point

[ulp]: https://en.wikipedia.org/wiki/Unit_in_the_last_place

<!-- <related-links> -->

[@stdlib/math/base/special/kernel-cos]: https://github.com/stdlib-js/math/tree/main/base/special/kernel-cos

[@stdlib/math/base/special/kernel-tan]: https://github.com/stdlib-js/math/tree/main/base/special/kernel-tan

[@stdlib/math/base/special/sin]: https://github.com/stdlib-js/math/tree/main/base/special/sin

<!-- </related-links> -->

</section>

<!-- /.links -->
