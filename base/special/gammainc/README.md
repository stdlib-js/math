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

# gammainc

> [Incomplete gamma function][incomplete-gamma-function].

<section class="intro">

Evaluates the regularized lower [incomplete gamma function][incomplete-gamma-function]:

<!-- <equation class="equation" label="eq:lower_incomplete_gamma" align="center" raw="P( x, a ) = \frac{\gamma(a,x)}{\Gamma(a)} = \frac{1}{\Gamma(a)} \int_0^x t^{a-1} e^{-t} \; dt" alt="Regularized lower incomplete gamma function."> -->

```math
P( x, a ) = \frac{\gamma(a,x)}{\Gamma(a)} = \frac{1}{\Gamma(a)} \int_0^x t^{a-1} e^{-t} \; dt
```

<!-- <div class="equation" align="center" data-raw-text="P( x, a ) = \frac{\gamma(a,x)}{\Gamma(a)} = \frac{1}{\Gamma(a)} \int_0^x t^{a-1} e^{-t} \; dt" data-equation="eq:lower_incomplete_gamma">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/gammainc/docs/img/equation_lower_incomplete_gamma.svg" alt="Regularized lower incomplete gamma function.">
    <br>
</div> -->

<!-- </equation> -->

The function can also be used to evaluate the regularized upper incomplete gamma function, which is defined as follows:

<!-- <equation class="equation" label="eq:upper_incomplete_gamma" align="center" raw="Q( x, a ) = \frac{\Gamma(a,x)}{\Gamma(a)} = \frac{1}{\Gamma(a)} \int_x^\infty t^{a-1} e^{-t} \; dt" alt="Regularized upper incomplete gamma function."> -->

```math
Q( x, a ) = \frac{\Gamma(a,x)}{\Gamma(a)} = \frac{1}{\Gamma(a)} \int_x^\infty t^{a-1} e^{-t} \; dt
```

<!-- <div class="equation" align="center" data-raw-text="Q( x, a ) = \frac{\Gamma(a,x)}{\Gamma(a)} = \frac{1}{\Gamma(a)} \int_x^\infty t^{a-1} e^{-t} \; dt" data-equation="eq:upper_incomplete_gamma">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/gammainc/docs/img/equation_upper_incomplete_gamma.svg" alt="Regularized upper incomplete gamma function.">
    <br>
</div> -->

<!-- </equation> -->

The two functions have the relationship `Q(x,a) = 1 - P(x,a)`.

In addition, this routine can be used to evaluate the _unregularized_ gamma functions. The range of above functions is `[0,1]`, which is not the case for the _unregularized_ versions. The unregularized lower incomplete gamma function is defined as

<!-- <equation class="equation" label="eq:unreg_lower_incomplete_gamma" align="center" raw="\gamma(a,x) = \int_0^x t^{a-1} e^{-t} \; dt" alt="Unregularized lower incomplete gamma function."> -->

```math
\gamma(a,x) = \int_0^x t^{a-1} e^{-t} \; dt
```

<!-- <div class="equation" align="center" data-raw-text="\gamma(a,x) = \int_0^x t^{a-1} e^{-t} \; dt" data-equation="eq:unreg_lower_incomplete_gamma">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/gammainc/docs/img/equation_unreg_lower_incomplete_gamma.svg" alt="Unregularized lower incomplete gamma function.">
    <br>
</div> -->

<!-- </equation> -->

and the upper unregularized incomplete gamma function is

<!-- <equation class="equation" label="eq:unreg_upper_incomplete_gamma" align="center" raw="\Gamma(a,x)= \int_x^\infty t^{a-1} e^{-t} \; dt" alt="Unregularized upper incomplete gamma function."> -->

```math
\Gamma(a,x)= \int_x^\infty t^{a-1} e^{-t} \; dt
```

<!-- <div class="equation" align="center" data-raw-text="\Gamma(a,x)= \int_x^\infty t^{a-1} e^{-t} \; dt" data-equation="eq:unreg_upper_incomplete_gamma">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/gammainc/docs/img/equation_unreg_upper_incomplete_gamma.svg" alt="Unregularized upper incomplete gamma function.">
    <br>
</div> -->

<!-- </equation> -->

The relationship between the two functions is `Γ(a,x) = γ(a,x) + Γ(a)`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var gammainc = require( '@stdlib/math/base/special/gammainc' );
```

#### gammainc( x, s\[, regularized\[, upper ]] )

By default, evaluates the regularized lower [incomplete gamma function][incomplete-gamma-function] for inputs `x` and `s`. The third and fourth parameters of the function can be used to specify whether instead to evaluate the non-regularized and/or upper incomplete gamma functions, respectively.

```javascript
var y = gammainc( 6.0, 2.0 );
// returns ~0.9826

y = gammainc( 1.0, 2.0, true, true );
// returns ~0.7358

y = gammainc( 7.0, 5.0 );
// returns ~0.8270

y = gammainc( 7.0, 5.0, false );
// returns ~19.8482
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = gammainc( NaN, 1.0 );
// returns NaN

y = gammainc( 1.0, NaN );
// returns NaN
```

If provided a negative `x`, the function returns `NaN`.

```javascript
var y = gammainc( -2.0, 2.0 );
// returns NaN
```

If provided a nonpositive `s`, the function returns `NaN`.

```javascript
var y = gammainc( 2.0, -1.0 );
// returns NaN

y = gammainc( 2.0, 0.0 );
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
var gammainc = require( '@stdlib/math/base/special/gammainc' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, 0.0, 10.0, opts );
var s = uniform( 100, 0.0, 10.0, opts );

logEachMap( 'x: %0.4f, \t s: %0.4f, \t f(x,s): %0.4f', x, s, gammainc );
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
#include "stdlib/math/base/special/gammainc.h"
```

#### stdlib_base_gammainc( x, a, regularized, upper )

Evaluates the [incomplete gamma function][incomplete-gamma-function] for inputs `x` and `a`.

```c
double out = stdlib_base_gammainc( 0.0, 1.0, true, false );
// returns 0.0

out = stdlib_base_gammainc( 6.0, 2.0, true, false );
// returns ~0.9826
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **a**: `[in] double` input value.
-   **regularized**: `[in] bool` boolean indicating whether to evaluate a regularized incomplete gamma function.
-   **upper**: `[in] bool` boolean indicating whether to evaluate the upper incomplete gamma function.

```c
double stdlib_base_gammainc( const double x, const double a, const bool regularized, const bool upper );
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
#include "stdlib/math/base/special/gammainc.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double x;
    double a;
    double y;
    int i;

    for ( i = 0; i < 10; i++ ) {
        x = random_uniform( 0.0, 1000.0 );
        a = random_uniform( 1.0, 1000.0 );
        y = stdlib_base_gammainc( x, a, true, false );
        printf( "x: %lf, s: %lf, f(x,s): %lf\n", x, a, y );
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

-   <span class="package-name">[`@stdlib/math/base/special/gamma`][@stdlib/math/base/special/gamma]</span><span class="delimiter">: </span><span class="description">gamma function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/gamma1pm1`][@stdlib/math/base/special/gamma1pm1]</span><span class="delimiter">: </span><span class="description">compute gamma(x+1) - 1.</span>
-   <span class="package-name">[`@stdlib/math/base/special/gammaincinv`][@stdlib/math/base/special/gammaincinv]</span><span class="delimiter">: </span><span class="description">inverse incomplete gamma function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/gammaln`][@stdlib/math/base/special/gammaln]</span><span class="delimiter">: </span><span class="description">natural logarithm of the gamma function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[incomplete-gamma-function]: https://en.wikipedia.org/wiki/Incomplete_gamma_function

<!-- <related-links> -->

[@stdlib/math/base/special/gamma]: https://github.com/stdlib-js/math/tree/main/base/special/gamma

[@stdlib/math/base/special/gamma1pm1]: https://github.com/stdlib-js/math/tree/main/base/special/gamma1pm1

[@stdlib/math/base/special/gammaincinv]: https://github.com/stdlib-js/math/tree/main/base/special/gammaincinv

[@stdlib/math/base/special/gammaln]: https://github.com/stdlib-js/math/tree/main/base/special/gammaln

<!-- </related-links> -->

</section>

<!-- /.links -->
