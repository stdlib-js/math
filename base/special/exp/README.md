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

# exp

> Natural [exponential function][exponential-function].

<section class="intro">

The natural [exponential function][exponential-function] is defined as

<!-- <equation class="equation" label="eq:natural_exponential_function" align="center" raw="y = e^x" alt="Natural exponential function definition"> -->

```math
y = e^x
```

<!-- <div class="equation" align="center" data-raw-text="y = e^x" data-equation="eq:natural_exponential_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@117273e7c4f27b0835723c2940d9675af0e14cb7/lib/node_modules/@stdlib/math/base/special/exp/docs/img/equation_natural_exponential_function.svg" alt="Natural exponential function definition">
    <br>
</div> -->

<!-- </equation> -->

where `e` is [Euler's][@stdlib/constants/float64/e] number.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var exp = require( '@stdlib/math/base/special/exp' );
```

#### exp( x )

Evaluates the natural [exponential function][exponential-function].

```javascript
var v = exp( 4.0 );
// returns ~54.5982

v = exp( -9.0 );
// returns ~1.234e-4

v = exp( 0.0 );
// returns 1.0

v = exp( NaN );
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
var exp = require( '@stdlib/math/base/special/exp' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -50.0, 50.0, opts );

logEachMap( 'e^%0.4f = %0.4f', x, exp );
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
#include "stdlib/math/base/special/exp.h"
```

#### stdlib_base_exp( x )

Evaluates the natural [exponential function][exponential-function].

```c
double out = stdlib_base_exp( 4.0 );
// returns ~54.5982

out = stdlib_base_exp( -9.0 );
// returns ~1.234e-4
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_exp( const double x );
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
#include "stdlib/math/base/special/exp.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    double x;
    double v;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = ( (double)rand() / (double)RAND_MAX ) * 100.0;
        v = stdlib_base_exp( x );
        printf( "e^%lf = %lf\n", x, v );
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

-   <span class="package-name">[`@stdlib/math/base/special/exp10`][@stdlib/math/base/special/exp10]</span><span class="delimiter">: </span><span class="description">base 10 exponential function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/exp2`][@stdlib/math/base/special/exp2]</span><span class="delimiter">: </span><span class="description">base 2 exponential function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/expm1`][@stdlib/math/base/special/expm1]</span><span class="delimiter">: </span><span class="description">compute exp(x) - 1.</span>
-   <span class="package-name">[`@stdlib/math/base/special/ln`][@stdlib/math/base/special/ln]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[exponential-function]: https://en.wikipedia.org/wiki/Exponential_function

[@stdlib/constants/float64/e]: https://github.com/stdlib-js/constants-float64-e

<!-- <related-links> -->

[@stdlib/math/base/special/exp10]: https://github.com/stdlib-js/math/tree/main/base/special/exp10

[@stdlib/math/base/special/exp2]: https://github.com/stdlib-js/math/tree/main/base/special/exp2

[@stdlib/math/base/special/expm1]: https://github.com/stdlib-js/math/tree/main/base/special/expm1

[@stdlib/math/base/special/ln]: https://github.com/stdlib-js/math/tree/main/base/special/ln

<!-- </related-links> -->

</section>

<!-- /.links -->
