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

# Binary Logarithm

> Evaluate the [binary logarithm][binary-logarithm].

<section class="intro">

The [binary logarithm][binary-logarithm] (logarithm with base 2) is defined for any positive real number as

<!-- <equation class="equation" label="eq:binary_logarithm" align="center" raw="\quad \log_{2} \left( x \right) = y \quad \text{such that} \quad 2^y = x" alt="Equation for the binary logarithm."> -->

```math
\quad \log_{2} \left( x \right) = y \quad \text{such that} \quad 2^y = x
```

<!-- <div class="equation" align="center" data-raw-text="\quad \log_{2} \left( x \right) = y \quad \text{such that} \quad 2^y = x" data-equation="eq:binary_logarithm">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@8cb4d022f6163be6523964802725ed2a74f2497b/lib/node_modules/@stdlib/math/base/special/log2/docs/img/equation_binary_logarithm.svg" alt="Equation for the binary logarithm.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var log2 = require( '@stdlib/math/base/special/log2' );
```

#### log2( x )

Evaluates the [binary logarithm][binary-logarithm].

```javascript
var v = log2( 4.0 );
// returns 2.0

v = log2( 0.0 );
// returns -Infinity

v = log2( Infinity );
// returns Infinity

v = log2( NaN );
// returns NaN
```

For negative numbers, the [binary logarithm][binary-logarithm] is **not** defined.

```javascript
var v = log2( -4.0 );
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
var log2 = require( '@stdlib/math/base/special/log2' );

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 100, 0, 100, opts );

logEachMap( 'log2(%d) = %0.4f', x, log2 );
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
#include "stdlib/math/base/special/log2.h"
```

#### stdlib_base_log2( x )

Evaluates the binary logarithm.

```c
double out = stdlib_base_log2( 4.0 );
// returns 2.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_log2( const double x );
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
#include "stdlib/math/base/special/log2.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    double x;
    double v;
    int i;
    for ( i = 0; i < 100; i++ ) {
        x = ( ( (double)rand() / (double)RAND_MAX ) * 100.0 );
        v = stdlib_base_log2( x );
        printf( "log2(%lf) = %lf\n", x, v );
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

-   <span class="package-name">[`@stdlib/math/base/special/exp2`][@stdlib/math/base/special/exp2]</span><span class="delimiter">: </span><span class="description">base 2 exponential function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/ln`][@stdlib/math/base/special/ln]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/log`][@stdlib/math/base/special/log]</span><span class="delimiter">: </span><span class="description">compute the base `b` logarithm of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[binary-logarithm]: https://en.wikipedia.org/wiki/Binary_logarithm

<!-- <related-links> -->

[@stdlib/math/base/special/exp2]: https://github.com/stdlib-js/math/tree/main/base/special/exp2

[@stdlib/math/base/special/ln]: https://github.com/stdlib-js/math/tree/main/base/special/ln

[@stdlib/math/base/special/log]: https://github.com/stdlib-js/math/tree/main/base/special/log

<!-- </related-links> -->

</section>

<!-- /.links -->
