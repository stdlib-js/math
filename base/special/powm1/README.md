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

# powm1

> Evaluate `bˣ - 1`.

<section class="intro">

<!-- <equation class="equation" label="eq:exponential_function_minus_one" align="center" raw="y = b^x - 1" alt="Exponential function minus one"> -->

```math
y = b^x - 1
```

<!-- <div class="equation" align="center" data-raw-text="y = b^x - 1" data-equation="eq:exponential_function_minus_one">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/powm1/docs/img/equation_exponential_function_minus_one.svg" alt="Exponential function minus one">
    <br>
</div> -->

<!-- </equation> -->

When `b` is close to `1` and/or `x` is small, this implementation is more accurate than naively computing `bˣ` minus `1`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var powm1 = require( '@stdlib/math/base/special/powm1' );
```

#### powm1( b, x )

Evaluates `bˣ - 1`.

```javascript
var y = powm1( 2.0, 3.0 );
// returns 7.0

y = powm1( 4.0, 0.5 );
// returns 1.0

y = powm1( 0.0, 100.0 );
// returns -1.0

y = powm1( 100.0, 0.0 );
// returns 0.0

y = powm1( 0.0, 0.0 );
// returns 0.0

y = powm1( 3.141592653589793, 5.0 );
// returns ~305.0197

y = powm1( NaN, 3.0 );
// returns NaN

y = powm1( 5.0, NaN );
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
var powm1 = require( '@stdlib/math/base/special/powm1' );

var opts = {
    'dtype': 'float64'
};
var b = discreteUniform( 100, 0, 10, opts );
var x = discreteUniform( 100, -5, 5, opts );

logEachMap( '%d^%d - 1 = %0.4f', b, x, powm1 );
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
#include "stdlib/math/base/special/powm1.h"
```

#### stdlib_base_powm1( b, x )

Evaluates `bˣ - 1`.

```c
double out = stdlib_base_powm1( 3.141592653589793, 5.0 );
// returns ~305.0197

out = stdlib_base_powm1( 4.0, 0.5 );
// returns 1.0
```

The function accepts the following arguments:

-   **b**: `[in] double` base.
-   **x**: `[in] double` exponent.

```c
double stdlib_base_powm1( const double b, const double x );
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
#include "stdlib/math/base/special/powm1.h"
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
        out = stdlib_base_powm1( b, x );
        printf( "powm1(%lf, %lf) = %lf\n", b, x, out );
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

-   <span class="package-name">[`@stdlib/math/base/special/pow`][@stdlib/math/base/special/pow]</span><span class="delimiter">: </span><span class="description">exponential function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/pow]: https://github.com/stdlib-js/math/tree/main/base/special/pow

<!-- </related-links> -->

</section>

<!-- /.links -->
