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

# Ramp Function

> Evaluate the [ramp function][ramp-function].

<section class="intro">

The [ramp function][ramp-function] is defined as

<!-- <equation class="equation" label="eq:ramp_function" align="center" raw="R(x) = \begin{cases} x & \textrm{if}\ x \geq 0 \\ 0 & \textrm{if}\ x \lt 0\end{cases}" alt="Ramp function."> -->

```math
R(x) = \begin{cases} x & \textrm{if}\ x \geq 0 \\ 0 & \textrm{if}\ x \lt 0\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="R(x) = \begin{cases} x &amp; \textrm{if}\ x \geq 0 \\ 0 &amp; \textrm{if}\ x \lt 0\end{cases}" data-equation="eq:ramp_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@3aca1e2faee6c79270455562ed28fda2e5e31c4c/lib/node_modules/@stdlib/math/base/special/rampf/docs/img/equation_ramp_function.svg" alt="Ramp function.">
    <br>
</div> -->

<!-- </equation> -->

or, alternatively, in terms of the `max` function

<!-- <equation class="equation" label="eq:ramp_function_alternative_defn" align="center" raw="R(x) = \operatorname{max}( x, 0 )" alt="Ramp function alternative definition."> -->

```math
R(x) = \mathop{\mathrm{max}}( x, 0 )
```

<!-- <div class="equation" align="center" data-raw-text="R(x) = \operatorname{max}( x, 0 )" data-equation="eq:ramp_function_alternative_defn">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@3aca1e2faee6c79270455562ed28fda2e5e31c4c/lib/node_modules/@stdlib/math/base/special/rampf/docs/img/equation_ramp_function_alternative_defn.svg" alt="Ramp function alternative definition.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var rampf = require( '@stdlib/math/base/special/rampf' );
```

#### rampf( x )

Evaluates the [ramp function][ramp-function].

```javascript
var v = rampf( 3.14 );
// returns 3.14

v = rampf( -3.14 );
// returns 0.0

v = rampf( NaN );
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
var rampf = require( '@stdlib/math/base/special/rampf' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 101, -10.0, 10.0, opts );

logEachMap( 'R(%0.4f) = %0.4f', x, rampf );
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
#include "stdlib/math/base/special/rampf.h"
```

#### stdlib_base_rampf( x )

Evaluates the ramp function (single-precision).

```c
float y = stdlib_base_rampf( 3.0f );
// returns 3.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_rampf( const float x );
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
#include "stdlib/math/base/special/rampf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 3.14f, -3.14f, 0.0f, 0.0f/0.0f };

    float y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_rampf( x[ i ] );
        printf( "R(%f) = %f\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/ramp`][@stdlib/math/base/special/ramp]</span><span class="delimiter">: </span><span class="description">evaluate the ramp function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ramp-function]: https://en.wikipedia.org/wiki/Ramp_function

<!-- <related-links> -->

[@stdlib/math/base/special/ramp]: https://github.com/stdlib-js/math/tree/main/base/special/ramp

<!-- </related-links> -->

</section>

<!-- /.links -->
