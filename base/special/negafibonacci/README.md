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

# negaFibonacci

> Compute the nth [negaFibonacci number][fibonacci-number].

<section class="intro">

The [negaFibonacci numbers][fibonacci-number] are the integer sequence

<!-- <equation class="equation" label="eq:negafibonacci_sequence" align="center" raw="0, 1, -1, 2, -3, 5, -8, 13, -21, 34, -55, 89, -144, \ldots" alt="NegaFibonacci sequence"> -->

```math
0, 1, -1, 2, -3, 5, -8, 13, -21, 34, -55, 89, -144, \ldots
```

<!-- <div class="equation" align="center" data-raw-text="0, 1, -1, 2, -3, 5, -8, 13, -21, 34, -55, 89, -144, \ldots" data-equation="eq:negafibonacci_sequence">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/negafibonacci/docs/img/equation_negafibonacci_sequence.svg" alt="NegaFibonacci sequence">
    <br>
</div> -->

<!-- </equation> -->

The sequence is defined by the recurrence relation

<!-- <equation class="equation" label="eq:negafibonacci_recurrence_relation" align="center" raw="F_{n-2} = F_{n} - F_{n-1}" alt="NegaFibonacci sequence recurrence relation"> -->

```math
F_{n-2} = F_{n} - F_{n-1}
```

<!-- <div class="equation" align="center" data-raw-text="F_{n-2} = F_{n} - F_{n-1}" data-equation="eq:negafibonacci_recurrence_relation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/negafibonacci/docs/img/equation_negafibonacci_recurrence_relation.svg" alt="NegaFibonacci sequence recurrence relation">
    <br>
</div> -->

<!-- </equation> -->

which yields

<!-- <equation class="equation" label="eq:negafibonacci_fibonacci" align="center" raw="F_{-n} = (-1)^{n+1} F_n" alt="NegaFibonacci relationship to Fibonacci numbers"> -->

```math
F_{-n} = (-1)^{n+1} F_n
```

<!-- <div class="equation" align="center" data-raw-text="F_{-n} = (-1)^{n+1} F_n" data-equation="eq:negafibonacci_fibonacci">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/negafibonacci/docs/img/equation_negafibonacci_fibonacci.svg" alt="NegaFibonacci relationship to Fibonacci numbers">
    <br>
</div> -->

<!-- </equation> -->

with seed values `F_0 = 0` and `F_{-1} = 1`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var negafibonacci = require( '@stdlib/math/base/special/negafibonacci' );
```

#### negafibonacci( n )

Computes the nth [negaFibonacci number][fibonacci-number].

```javascript
var v = negafibonacci( 0 );
// returns 0

v = negafibonacci( -1 );
// returns 1

v = negafibonacci( -2 );
// returns -1

v = negafibonacci( -3 );
// returns 2

v = negafibonacci( -78 );
// returns -8944394323791464
```

If `n < -78`, the function returns `NaN`, as larger [negaFibonacci numbers][fibonacci-number] cannot be safely represented in [double-precision floating-point format][ieee754].

```javascript
var v = negafibonacci( -79 );
// returns NaN
```

If not provided a nonpositive integer value, the function returns `NaN`.

```javascript
var v = negafibonacci( -3.14 );
// returns NaN

v = negafibonacci( 1 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = negafibonacci( NaN );
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
var negafibonacci = require( '@stdlib/math/base/special/negafibonacci' );

var v;
var i;

for ( i = 0; i > -79; i-- ) {
    v = negafibonacci( i );
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
#include "stdlib/math/base/special/negafibonacci.h"
```

#### stdlib_base_negafibonacci( n )

Computes the nth [negaFibonacci number][fibonacci-number].

```c
double out = stdlib_base_negafibonacci( 0 );
// returns 0

out = stdlib_base_negafibonacci( -1 );
// returns 1
```

The function accepts the following arguments:

-   **n**: `[in] int32_t` input value.

```c
double stdlib_base_negafibonacci( const int32_t n );
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
#include "stdlib/math/base/special/negafibonacci.h"
#include <stdio.h>
#include <stdint.h>

int main( void ) {
    int32_t i;
    double v;

    for ( i = 0; i > -79; i-- ) {
        v = stdlib_base_negafibonacci( i );
        printf( "negafibonacci(%d) = %lf\n", i, v );
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

[fibonacci-number]: https://en.wikipedia.org/wiki/Fibonacci_number

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/fibonacci]: https://github.com/stdlib-js/math/tree/main/base/special/fibonacci

[@stdlib/math/base/special/negalucas]: https://github.com/stdlib-js/math/tree/main/base/special/negalucas

<!-- </related-links> -->

</section>

<!-- /.links -->
