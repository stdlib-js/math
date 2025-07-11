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

# factorial

> [Factorial][factorial-function] function.

<section class="intro">

The [factorial][factorial-function] function may be defined as the product

<!-- <equation class="equation" label="eq:factorial_function" align="center" raw="n! = \prod_{k=1}^n k" alt="Factorial function definition"> -->

```math
n! = \prod_{k=1}^n k
```

<!-- <div class="equation" align="center" data-raw-text="n! = \prod_{k=1}^n k" data-equation="eq:factorial_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/factorial/docs/img/equation_factorial_function.svg" alt="Factorial function definition">
    <br>
</div> -->

<!-- </equation> -->

or according to the recurrence relation

<!-- <equation class="equation" label="eq:factorial_recurrence_relation" align="center" raw="n! = \begin{cases}1 & \textrm{if } n = 0,\\(n-1)! \times n & \textrm{if } n > 1\end{cases}" alt="Factorial function recurrence relation"> -->

```math
n! = \begin{cases}1 & \textrm{if } n = 0,\\(n-1)! \times n & \textrm{if } n > 1\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="n! = \begin{cases}1 &amp; \textrm{if } n = 0,\\(n-1)! \times n &amp; \textrm{if } n &gt; 1\end{cases}" data-equation="eq:factorial_recurrence_relation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/factorial/docs/img/equation_factorial_recurrence_relation.svg" alt="Factorial function recurrence relation">
    <br>
</div> -->

<!-- </equation> -->

Following the convention for an [empty product][empty-product], in all definitions,

<!-- <equation class="equation" label="eq:zero_factorial" align="center" raw="0! = 1" alt="Zero factorial"> -->

```math
0! = 1
```

<!-- <div class="equation" align="center" data-raw-text="0! = 1" data-equation="eq:zero_factorial">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/factorial/docs/img/equation_zero_factorial.svg" alt="Zero factorial">
    <br>
</div> -->

<!-- </equation> -->

The [Gamma][@stdlib/math/base/special/gamma] function extends the [factorial][factorial-function] function for non-integer values.

<!-- <equation class="equation" label="eq:factorial_function_and_gamma" align="center" raw="n! = \Gamma(n+1)" alt="Factorial function extension via the Gamma function"> -->

```math
n! = \Gamma(n+1)
```

<!-- <div class="equation" align="center" data-raw-text="n! = \Gamma(n+1)" data-equation="eq:factorial_function_and_gamma">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/factorial/docs/img/equation_factorial_function_and_gamma.svg" alt="Factorial function extension via the Gamma function">
    <br>
</div> -->

<!-- </equation> -->

The [factorial][factorial-function] of a **negative** integer is not defined.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var factorial = require( '@stdlib/math/base/special/factorial' );
```

#### factorial( x )

Evaluates the [factorial][factorial-function] function.

```javascript
var v = factorial( 3.0 );
// returns 6.0

v = factorial( -1.5 );
// returns ~-3.545

v = factorial( -0.5 );
// returns ~1.772

v = factorial( 0.5 );
// returns ~0.886

v = factorial( -10.0 );
// returns NaN

v = factorial( 171.0 );
// returns Infinity

v = factorial( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var incrspace = require( '@stdlib/array/base/incrspace' );
var factorial = require( '@stdlib/math/base/special/factorial' );

var x = incrspace( -10.0, 100.0, 1.0 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( 'x: %d, f(x): %d', x[ i ], factorial( x[ i ] ) );
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
#include "stdlib/math/base/special/factorial.h"
```

#### stdlib_base_factorial( x )

Evaluates the [factorial][factorial-function] function.

```c
double out = stdlib_base_factorial( 3.0 );
// returns 6.0

out = stdlib_base_factorial( -1.5 );
// returns ~-3.545
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_factorial( const double x );
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
#include "stdlib/math/base/special/factorial.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 2.0, 3.0, 5.0, 8.0 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_factorial( x[ i ] );
        printf( "factorial(%lf) = %lf\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/factorialln`][@stdlib/math/base/special/factorialln]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the factorial function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/math/base/special/gamma]: https://github.com/stdlib-js/math/tree/main/base/special/gamma

[factorial-function]: https://en.wikipedia.org/wiki/Factorial

[empty-product]: https://en.wikipedia.org/wiki/Empty_product

<!-- <related-links> -->

[@stdlib/math/base/special/factorialln]: https://github.com/stdlib-js/math/tree/main/base/special/factorialln

<!-- </related-links> -->

</section>

<!-- /.links -->
