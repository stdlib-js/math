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

# Lucas

> Compute the nth [Lucas number][lucas-number].

<section class="intro">

The [Lucas numbers][lucas-number] are the integer sequence

<!-- <equation class="equation" label="eq:lucas_sequence" align="center" raw="2, 1, 3, 4, 7, 11, 18, 29, 47, 76, 123, 199, 322, \ldots" alt="Lucas sequence"> -->

```math
2, 1, 3, 4, 7, 11, 18, 29, 47, 76, 123, 199, 322, \ldots
```

<!-- <div class="equation" align="center" data-raw-text="2, 1, 3, 4, 7, 11, 18, 29, 47, 76, 123, 199, 322, \ldots" data-equation="eq:lucas_sequence">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/lucas/docs/img/equation_lucas_sequence.svg" alt="Lucas sequence">
    <br>
</div> -->

<!-- </equation> -->

The sequence is defined by the recurrence relation

<!-- <equation class="equation" label="eq:lucas_recurrence_relation" align="center" raw="L_n = \begin{cases}2 & \textrm{if}\ n = 0\\1 & \textrm{if}\ n = 1\\L_{n-1} + L_{n-2} & \textrm{if}\ n > 1\end{cases}" alt="Lucas sequence recurrence relation"> -->

```math
L_n = \begin{cases}2 & \textrm{if}\ n = 0\\1 & \textrm{if}\ n = 1\\L_{n-1} + L_{n-2} & \textrm{if}\ n > 1\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="L_n = \begin{cases}2 &amp; \textrm{if}\ n = 0\\1 &amp; \textrm{if}\ n = 1\\L_{n-1} + L_{n-2} &amp; \textrm{if}\ n &gt; 1\end{cases}" data-equation="eq:lucas_recurrence_relation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/lucas/docs/img/equation_lucas_recurrence_relation.svg" alt="Lucas sequence recurrence relation">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var lucas = require( '@stdlib/math/base/special/lucas' );
```

#### lucas( n )

Computes the nth [Lucas number][lucas-number].

```javascript
var v = lucas( 0 );
// returns 2

v = lucas( 1 );
// returns 1

v = lucas( 2 );
// returns 3

v = lucas( 3 );
// returns 4

v = lucas( 76 );
// returns 7639424778862807
```

If `n > 76`, the function returns `NaN`, as larger [Lucas numbers][lucas-number] cannot be safely represented in [double-precision floating-point format][ieee754].

```javascript
var v = lucas( 77 );
// returns NaN
```

If not provided a nonnegative integer value, the function returns `NaN`.

```javascript
var v = lucas( 3.14 );
// returns NaN

v = lucas( -1 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = lucas( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var lucas = require( '@stdlib/math/base/special/lucas' );

var v;
var i;

for ( i = 0; i < 77; i++ ) {
    v = lucas( i );
    console.log( v );
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
#include "stdlib/math/base/special/lucas.h"
```

#### stdlib_base_lucas( n )

Computes the nth [Lucas number][lucas-number].

```c
double out = stdlib_base_lucas( 0 );
// returns 2

out = stdlib_base_lucas( 1 );
// returns 1
```

The function accepts the following arguments:

-   **n**: `[in] int32_t` input value.

```c
double stdlib_base_lucas( const int32_t n );
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
#include "stdlib/math/base/special/lucas.h"
#include <stdio.h>
#include <stdint.h>

int main( void ) {
    int32_t i;
    double v;

    for ( i = 0; i < 77; i++ ) {
        v = stdlib_base_lucas( i );
        printf( "lucas(%d) = %lf\n", i, v );
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

-   <span class="package-name">[`@stdlib/math/base/special/fibonacci`][@stdlib/math/base/special/fibonacci]</span><span class="delimiter">: </span><span class="description">compute the nth Fibonacci number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/negalucas`][@stdlib/math/base/special/negalucas]</span><span class="delimiter">: </span><span class="description">compute the nth negaLucas number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[lucas-number]: https://en.wikipedia.org/wiki/Lucas_number

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/fibonacci]: https://github.com/stdlib-js/math/tree/main/base/special/fibonacci

[@stdlib/math/base/special/negalucas]: https://github.com/stdlib-js/math/tree/main/base/special/negalucas

<!-- </related-links> -->

</section>

<!-- /.links -->
