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

# kernelTan

> Compute the [tangent][tangent] of a double-precision floating-point number on `[-π/4, π/4]`.

<section class="usage">

## Usage

```javascript
var kernelTan = require( '@stdlib/math/base/special/kernel-tan' );
```

#### kernelTan( x, y, k )

Computes the [tangent][tangent] of a double-precision floating-point number on `[-π/4, π/4]`.

```javascript
var out = kernelTan( 3.141592653589793/4.0, 0.0, 1 );
// returns ~1.0

out = kernelTan( 3.141592653589793/6.0, 0.0, 1 );
// returns ~0.577

out = kernelTan( 0.664, 5.288e-17, 1 );
// returns ~0.783
```

If `k = 1`, the function returns `tan(x+y)`. To return the negative inverse `-1/tan(x+y)`, set `k = -1`.

```javascript
var out = kernelTan( 3.141592653589793/4.0, 0.0, -1 );
// returns ~-1.0
```

If either `x` or `y` is `NaN`, the function returns `NaN`.

```javascript
var out = kernelTan( NaN, 0.0, 1 );
// returns NaN

out = kernelTan( 3.0, NaN, 1 );
// returns NaN

out = kernelTan( NaN, NaN, 1 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For increased accuracy, the number for which the [tangent][tangent] should be evaluated can be supplied as a [double-double number][double-double-arithmetic] (i.e., a non-evaluated sum of two [double-precision floating-point numbers][ieee754] `x` and `y`).

-   As components of a [double-double number][double-double-arithmetic], the two [double-precision floating-point numbers][ieee754] `x` and `y` must satisfy

    <!-- <equation class="equation" label="eq:double_double_inequality" align="center" raw="|y| \leq \frac{1}{2} \operatorname{ulp}(x)" alt="Inequality for the two components of a double-double number."> -->

    <div class="equation" align="center" data-raw-text="|y| \leq \frac{1}{2} \operatorname{ulp}(x)" data-equation="eq:double_double_inequality">
        <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/kernel-tan/docs/img/equation_double_double_inequality.svg" alt="Inequality for the two components of a double-double number.">
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
var linspace = require( '@stdlib/array/base/linspace' );
var binomial = require( '@stdlib/random/base/binomial' ).factory;
var PI = require( '@stdlib/constants/float64/pi' );
var kernelTan = require( '@stdlib/math/base/special/kernel-tan' );

var x = linspace( -PI/4.0, PI/4.0, 100 );
var rbinom = binomial( 1, 0.5 );

var descr;
var i;
var k;

for ( i = 0; i < x.length; i++ ) {
    k = rbinom();
    descr = ( k === 1 ) ? 'tan(%d) = %d' : '-1/tan(%d) = %d';
    console.log( descr, x[ i ], kernelTan( x[ i ], 0.0, k ) );
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
#include "stdlib/math/base/special/kernel_tan.h"
```

#### stdlib_base_kernel_tan( x, y, k )

Computes the [tangent][tangent] of a double-precision floating-point number on `[-π/4, π/4]`.

```c
double out = stdlib_base_kernel_tan( 3.141592653589793/4.0, 0.0, 1 );
// returns ~1.0

out = stdlib_base_kernel_tan( 3.141592653589793/6.0, 0.0, 1 );
// returns ~0.577
```

The function accepts the following arguments:

-   **x**: `[in] double` input value (in radians, assumed to be bounded by `~pi/4` in magnitude).
-   **y**: `[in] double` tail of `x`.
-   **k**: `[in] int32_t` indicates whether `tan(x+y)` (if `k = 1`) or `-1/tan(x+y)` (if `k = -1`) is returned.

```c
double stdlib_base_kernel_tan( const double x, const double y, const int32_t k );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   For increased accuracy, the number for which the [tangent][tangent] should be evaluated can be supplied as a [double-double number][double-double-arithmetic] (i.e., a non-evaluated sum of two [double-precision floating-point numbers][ieee754] `x` and `y`).

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/kernel_tan.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { -0.7853981633974483, -0.6108652381980153, -0.4363323129985824, -0.26179938779914946, -0.08726646259971649, 0.08726646259971649, 0.26179938779914935, 0.43633231299858233, 0.6108652381980153, 0.7853981633974483 };

    double out;
    int i;
    for ( i = 0; i < 10; i++ ) {
        out = stdlib_base_kernel_tan( x[ i ], 0.0, 1 );
        printf( "tan(%lf) = %lf\n", x[ i ], out );
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
-   <span class="package-name">[`@stdlib/math/base/special/kernel-sin`][@stdlib/math/base/special/kernel-sin]</span><span class="delimiter">: </span><span class="description">compute the sine of a double-precision floating-point number on \[-π/4, π/4].</span>
-   <span class="package-name">[`@stdlib/math/base/special/tan`][@stdlib/math/base/special/tan]</span><span class="delimiter">: </span><span class="description">evaluate the tangent of a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[tangent]: https://en.wikipedia.org/wiki/Tangent

[double-double-arithmetic]: https://en.wikipedia.org/wiki/Quadruple-precision_floating-point_format#Double-double_arithmetic

[ieee754]: https://en.wikipedia.org/wiki/IEEE_floating_point

[ulp]: https://en.wikipedia.org/wiki/Unit_in_the_last_place

<!-- <related-links> -->

[@stdlib/math/base/special/kernel-cos]: https://github.com/stdlib-js/math/tree/main/base/special/kernel-cos

[@stdlib/math/base/special/kernel-sin]: https://github.com/stdlib-js/math/tree/main/base/special/kernel-sin

[@stdlib/math/base/special/tan]: https://github.com/stdlib-js/math/tree/main/base/special/tan

<!-- </related-links> -->

</section>

<!-- /.links -->
