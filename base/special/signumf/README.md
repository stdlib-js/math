<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# Signum

> [Signum][signum] function.

<section class="intro">

The [signum][signum] function is defined as

<!-- <equation class="equation" label="eq:signum_function" align="center" raw="\operatorname{sign}(x) := \begin{cases} -1 & \textrm{if}\ x < 0 \\ 0 & \textrm{if}\ x = 0 \\ 1 & \textrm{if}\ x > 0 \end{cases}" alt="Signum function"> -->

```math
\mathop{\mathrm{sign}}(x) := \begin{cases} -1 & \textrm{if}\ x < 0 \\ 0 & \textrm{if}\ x = 0 \\ 1 & \textrm{if}\ x > 0 \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{sign}(x) := \begin{cases} -1 &amp; \textrm{if}\ x &lt; 0 \\ 0 &amp; \textrm{if}\ x = 0 \\ 1 &amp; \textrm{if}\ x &gt; 0 \end{cases}" data-equation="eq:signum_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@4e38532a2ca3d2a641daa792a9c4c0fce3e749eb/lib/node_modules/@stdlib/math/base/special/signumf/docs/img/equation_signum_function.svg" alt="Signum function">
    <br>
</div> -->

<!-- </equation> -->

for any real number `x`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var signumf = require( '@stdlib/math/base/special/signumf' );
```

#### signumf( x )

Evaluates the [signum][signum] function for a single-precision floating-point number.

```javascript
var sign = signumf( -5.0 );
// returns -1

sign = signumf( 5.0 );
// returns 1

sign = signumf( -0.0 );
// returns -0

sign = signumf( 0.0 );
// returns 0

sign = signumf( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

Table of results:

| Value   | Sign  |
| ------- | ----- |
| `x > 0` | `+1`  |
| `x < 0` | `-1`  |
| `0`     | `0`   |
| `-0`    | `-0`  |
| `NaN`   | `NaN` |

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var signumf = require( '@stdlib/math/base/special/signumf' );

var opts = {
    'dtype': 'float32'
};
var x = discreteUniform( 100, -50, 50, opts );

logEachMap( 'signum(%d) = %0.4f', x, signumf );
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
#include "stdlib/math/base/special/signumf.h"
```

#### stdlib_base_signumf( x )

Evaluates the [signum][signum] function for a single-precision floating-point number.

```c
float y = stdlib_base_signumf( -9.0f );
// returns -1.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_signumf( const float x );
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
#include "stdlib/math/base/special/signumf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 3.14f, -3.14f, 0.0f, 0.0f/0.0f };

    float y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_signumf( x[ i ] );
        printf( "signum(%f) = %f\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/signum`][@stdlib/math/base/special/signum]</span><span class="delimiter">: </span><span class="description">evaluate the signum function for a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[signum]: https://en.wikipedia.org/wiki/Sign_function

<!-- <related-links> -->

[@stdlib/math/base/special/signum]: https://github.com/stdlib-js/math/tree/main/base/special/signum

<!-- </related-links> -->

</section>

<!-- /.links -->
