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

# beta

> [Beta function][beta-function].

<section class="intro">

The [beta function][beta-function], also called the Euler integral, is defined as

<!-- <equation class="equation" label="eq:beta_function" align="center" raw="\operatorname{Beta}(x,y) = \int_0^1t^{x-1}(1-t)^{y-1}\,\mathrm{d}t" alt="Equation for the beta function."> -->

```math
\mathop{\mathrm{Beta}}(x,y) = \int_0^1t^{x-1}(1-t)^{y-1}\,\mathrm{d}t
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{Beta}(x,y) = \int_0^1t^{x-1}(1-t)^{y-1}\,\mathrm{d}t" data-equation="eq:beta_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/beta/docs/img/equation_beta_function.svg" alt="Equation for the beta function.">
    <br>
</div> -->

<!-- </equation> -->

The [beta function][beta-function] is related to the [Gamma function][gamma-function] via the following equation

<!-- <equation class="equation" label="eq:beta_function2" align="center" raw="\operatorname{Beta}(x,y)=\dfrac{\Gamma(x)\,\Gamma(y)}{\Gamma(x+y)} \!" alt="Beta function expressed in terms of the Gamma function."> -->

```math
\mathop{\mathrm{Beta}}(x,y)=\dfrac{\Gamma(x)\,\Gamma(y)}{\Gamma(x+y)} \!
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{Beta}(x,y)=\dfrac{\Gamma(x)\,\Gamma(y)}{\Gamma(x+y)} \!" data-equation="eq:beta_function2">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/beta/docs/img/equation_beta_function2.svg" alt="Beta function expressed in terms of the Gamma function.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var beta = require( '@stdlib/math/base/special/beta' );
```

#### beta( x, y )

Evaluates the [beta function][beta-function].

```javascript
var val = beta( 0.0, 0.5 );
// returns Infinity

val = beta( 1.0, 1.0 );
// returns 1.0

val = beta( -1.0, 2.0 );
// returns NaN

val = beta( 5.0, 0.2 );
// returns ~3.382

val = beta( 4.0, 1.0 );
// returns 0.25
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var beta = require( '@stdlib/math/base/special/beta' );
var x;
var y;

for ( x = 0; x < 10; x++ ) {
    for ( y = 10; y > 0; y-- ) {
        console.log( 'x: %d, \t y: %d, \t f(x,y): %d', x, y, beta( x, y ) );
    }
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
#include "stdlib/math/base/special/beta.h"
```

#### stdlib_base_beta( a, b )

Evaluates the [beta function][beta-function].

```c
double out = stdlib_base_beta( 1.0, 1.0 );
// returns 1.0

out = stdlib_base_beta( 5.0, 0.2 );
// returns ~3.382
```

The function accepts the following arguments:

-   **a**: `[in] double` input value.
-   **b**: `[in] double` input value.

```c
double stdlib_base_beta ( const double a, const double b );
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
#include "stdlib/math/base/special/beta.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 1.0, 3.0, 5.0, 8.0, 10.0 };
    const double y[] = { 2.0, 4.0, 7.0, 9.0, 10.0 };

    double out;
    int i;
    int j;
    for ( i = 0; i < 5; i++ ) {
        for ( j = 0; j < 5; j++ ) {
            out = stdlib_base_beta( x[ i ], y[ j ] );
            printf ( "x: %lf, y: %lf, out: %lf\n", x[ i ], y[ j ], out );
        }
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

-   <span class="package-name">[`@stdlib/math/base/special/betainc`][@stdlib/math/base/special/betainc]</span><span class="delimiter">: </span><span class="description">incomplete beta function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/betaincinv`][@stdlib/math/base/special/betaincinv]</span><span class="delimiter">: </span><span class="description">inverse incomplete beta function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/betaln`][@stdlib/math/base/special/betaln]</span><span class="delimiter">: </span><span class="description">natural logarithm of the beta function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[beta-function]: https://en.wikipedia.org/wiki/Beta_function

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function

<!-- <related-links> -->

[@stdlib/math/base/special/betainc]: https://github.com/stdlib-js/math/tree/main/base/special/betainc

[@stdlib/math/base/special/betaincinv]: https://github.com/stdlib-js/math/tree/main/base/special/betaincinv

[@stdlib/math/base/special/betaln]: https://github.com/stdlib-js/math/tree/main/base/special/betaln

<!-- </related-links> -->

</section>

<!-- /.links -->
