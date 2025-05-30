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

# sinc

> Compute the [cardinal sine][sinc] of a number.

<section class="intro">

The normalized [cardinal sine][sinc] function is defined as

<!-- <equation class="equation" label="eq:sinc_function" align="center" raw="\operatorname{sinc}(x) := \begin{cases} \frac {\sin(\pi x)}{\pi x} & \textrm{if}\ x \neq 0 \\ 1 & \textrm{if}\ x = 0 \end{cases}" alt="Sinc function"> -->

```math
\mathop{\mathrm{sinc}}(x) := \begin{cases} \frac {\sin(\pi x)}{\pi x} & \textrm{if}\ x \neq 0 \\ 1 & \textrm{if}\ x = 0 \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{sinc}(x) := \begin{cases} \frac {\sin(\pi x)}{\pi x} &amp; \textrm{if}\ x \neq 0 \\ 1 &amp; \textrm{if}\ x = 0 \end{cases}" data-equation="eq:sinc_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/sinc/docs/img/equation_sinc_function.svg" alt="Sinc function">
    <br>
</div> -->

<!-- </equation> -->

for any real number `x`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var sinc = require( '@stdlib/math/base/special/sinc' );
```

#### sinc( x )

Computes the normalized [cardinal sine][sinc] of a `number`.

```javascript
var v = sinc( 0.5 );
// returns ~0.637

v = sinc( -1.2 );
// returns ~-0.156

v = sinc( 0.0 );
// returns 1.0

v = sinc( NaN );
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
var sinc = require( '@stdlib/math/base/special/sinc' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -5.0, 5.0, opts );

logEachMap( 'sinc( %0.4f ) = %0.4f', x, sinc );
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
#include "stdlib/math/base/special/sinc.h"
```

#### stdlib_base_sinc( x )

Computes the normalized [cardinal sine][sinc] of a `number`.

```c
double y = stdlib_base_sinc( 0.5 );
// returns ~0.637
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_sinc( const double x );
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
#include "stdlib/math/base/special/sinc.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 0.0, 0.523, 0.785, 1.047, 3.14 };

    double y;
    int i;
    for ( i = 0; i < 5; i++ ) {
        y = stdlib_base_sinc( x[ i ] );
        printf( "sinc(%lf) = %lf\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/sin`][@stdlib/math/base/special/sin]</span><span class="delimiter">: </span><span class="description">compute the sine of a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[sinc]: https://en.wikipedia.org/wiki/Sinc_function

<!-- <related-links> -->

[@stdlib/math/base/special/sin]: https://github.com/stdlib-js/math/tree/main/base/special/sin

<!-- </related-links> -->

</section>

<!-- /.links -->
