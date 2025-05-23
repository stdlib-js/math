<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# Exponential Function

> [Exponential function][exponential-function].

<section class="intro">

The [exponential function][exponential-function] is defined as

<!-- <equation class="equation" label="eq:exponential_function" align="center" raw="y = b^x" alt="Exponential function"> -->

```math
y = b^x
```

<!-- <div class="equation" align="center" data-raw-text="y = b^x" data-equation="eq:exponential_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/pow/docs/img/equation_exponential_function.svg" alt="Exponential function">
    <br>
</div> -->

<!-- </equation> -->

where `b` is the **base** and `x` is the **exponent**.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pow = require( '@stdlib/math/base/special/pow' );
```

#### pow( base, exponent )

Evaluates the [exponential function][exponential-function].

```javascript
var v = pow( 2.0, 3.0 );
// returns 8.0

v = pow( 4.0, 0.5 );
// returns 2.0

v = pow( 100.0, 0.0 );
// returns 1.0

v = pow( 3.141592653589793, 5.0 );
// returns ~306.0197

v = pow( 3.141592653589793, -0.2 );
// returns ~0.7954

v = pow( NaN, 3.0 );
// returns NaN

v = pow( 5.0, NaN );
// returns NaN

v = pow( NaN, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var pow = require( '@stdlib/math/base/special/pow' );

var opts = {
    'dtype': 'float64'
};
var b = discreteUniform( 100, 0, 10, opts );
var x = discreteUniform( 100, -5, 5, opts );

logEachMap( '%d^%d = %0.4f', b, x, pow );
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
#include "stdlib/math/base/special/pow.h"
```

#### stdlib_base_pow( base, exponent )

Evaluates the exponential function.

```c
double out = stdlib_base_pow( 3.141592653589793, 5.0 );
// returns ~306.0197

out = stdlib_base_pow( 4.0, 0.5 );
// returns 2.0
```

The function accepts the following arguments:

-   **base**: `[in] double` base.
-   **exponent**: `[in] double` exponent.

```c
double stdlib_base_pow( const double base, const double exponent );
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
#include "stdlib/math/base/special/pow.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    double out;
    double b;
    double x;
    int i;

    for ( i = 0; i < 100; i++ ) {
        b = ( ( (double)rand() / (double)RAND_MAX ) * 10.0 );
        x = ( ( (double)rand() / (double)RAND_MAX ) * 10.0 ) - 5.0;
        out = stdlib_base_pow( b, x );
        printf( "pow(%lf, %lf) = %lf\n", b, x, out );
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

-   <span class="package-name">[`@stdlib/math/base/special/exp`][@stdlib/math/base/special/exp]</span><span class="delimiter">: </span><span class="description">natural exponential function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/powm1`][@stdlib/math/base/special/powm1]</span><span class="delimiter">: </span><span class="description">evaluate bˣ - 1.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[exponential-function]: https://en.wikipedia.org/wiki/Exponential_function

<!-- <related-links> -->

[@stdlib/math/base/special/exp]: https://github.com/stdlib-js/math/tree/main/base/special/exp

[@stdlib/math/base/special/powm1]: https://github.com/stdlib-js/math/tree/main/base/special/powm1

<!-- </related-links> -->

</section>

<!-- /.links -->
