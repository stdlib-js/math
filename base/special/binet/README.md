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

# Binet's Formula

> Evaluate [Binet's formula][fibonacci-number] extended to real numbers.

<section class="intro">

[Binet's formula][fibonacci-number] refers to the closed-form solution for computing the nth [Fibonacci number][fibonacci-number] and may be expressed

<!-- <equation class="equation" label="eq:binets_formula" align="center" raw="F_n = \frac{\varphi^n - \psi^n}{\sqrt{5}}" alt="Binet's formula"> -->

```math
F_n = \frac{\varphi^n - \psi^n}{\sqrt{5}}
```

<!-- <div class="equation" align="center" data-raw-text="F_n = \frac{\varphi^n - \psi^n}{\sqrt{5}}" data-equation="eq:binets_formula">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/binet/docs/img/equation_binets_formula.svg" alt="Binet's formula">
    <br>
</div> -->

<!-- </equation> -->

where `φ` is the [golden ratio][golden-ratio] and `ψ` is `1 - φ`. To extend [Fibonacci numbers][fibonacci-number] to real numbers, we may express [Binet's formula][fibonacci-number] as

<!-- <equation class="equation" label="eq:binets_formula_real_numbers" align="center" raw="F_x = \frac{\varphi^x - \varphi^{-x} \cdot \cos(\pi x)}{\sqrt{5}}" alt="Binet's formula extended to real numbers."> -->

```math
F_x = \frac{\varphi^x - \varphi^{-x} \cdot \cos(\pi x)}{\sqrt{5}}
```

<!-- <div class="equation" align="center" data-raw-text="F_x = \frac{\varphi^x - \varphi^{-x} \cdot \cos(\pi x)}{\sqrt{5}}" data-equation="eq:binets_formula_real_numbers">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/binet/docs/img/equation_binets_formula_real_numbers.svg" alt="Binet's formula extended to real numbers.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var binet = require( '@stdlib/math/base/special/binet' );
```

#### binet( x )

Evaluates [Binet's formula][fibonacci-number] extended to real numbers.

```javascript
var v = binet( 0.0 );
// returns 0.0

v = binet( 1.0 );
// returns 1.0

v = binet( 2.0 );
// returns 1.0

v = binet( 3.0 );
// returns 2.0

v = binet( -1.0 );
// returns 1.0

v = binet( 3.14 );
// returns ~2.12
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = binet( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function returns only **approximate** [Fibonacci numbers][fibonacci-number] for nonnegative integers.
-   The function does **not** return complex numbers, guaranteeing real-valued return values.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var binet = require( '@stdlib/math/base/special/binet' );

var v;
var i;

for ( i = 0; i < 79; i++ ) {
    v = binet( i );
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
#include "stdlib/math/base/special/binet.h"
```

#### stdlib_base_binet( x )

Evaluates [Binet's formula][fibonacci-number] extended to real numbers.

```c
double out = stdlib_base_binet( 0.0 );
// returns 0.0

out = stdlib_base_binet( 1.0 );
// returns 1.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_binet( const double x );
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
#include "stdlib/math/base/special/binet.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 0.0, 1.0, 2.0, 3.0, 4.0 };

    double y;
    int i;
    for ( i = 0; i < 5; i++ ) {
        y = stdlib_base_binet( x[ i ] );
        printf( "binet(%lf) = %lf\n", x[ i ], y );
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
-   <span class="package-name">[`@stdlib/math/base/special/negafibonacci`][@stdlib/math/base/special/negafibonacci]</span><span class="delimiter">: </span><span class="description">compute the nth negaFibonacci number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[fibonacci-number]: https://en.wikipedia.org/wiki/Fibonacci_number

[golden-ratio]: https://en.wikipedia.org/wiki/Golden_ratio

<!-- <related-links> -->

[@stdlib/math/base/special/fibonacci]: https://github.com/stdlib-js/math/tree/main/base/special/fibonacci

[@stdlib/math/base/special/negafibonacci]: https://github.com/stdlib-js/math/tree/main/base/special/negafibonacci

<!-- </related-links> -->

</section>

<!-- /.links -->
