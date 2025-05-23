<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# expit

> Compute the [standard logistic][logistic-function] function.

<section class="intro">

The [standard logistic][logistic-function] function, also called the expit function, inverse logit, or sigmoid function, is defined as the [logistic][logistic-function] function with parameters (`k = 1`, `x0 = 0`, `L = 1`).

<!-- <equation class="equation" label="eq:expit_function" align="center" raw="\begin{aligned}\operatorname{expit}(x) &= \frac{1}{1+e^{-x}} \\ &= \frac{e^{x}}{e^{x}+1} \\ &= \frac{1}{2} + \frac{1}{2}\tanh\frac{x}{2} \end{aligned}" alt="Standard logistic function."> -->

```math
\begin{aligned}\mathop{\mathrm{expit}}(x) &= \frac{1}{1+e^{-x}} \\ &= \frac{e^{x}}{e^{x}+1} \\ &= \frac{1}{2} + \frac{1}{2}\tanh\frac{x}{2} \end{aligned}
```

<!-- <div class="equation" align="center" data-raw-text="\begin{aligned}\operatorname{expit}(x) &amp;= \frac{1}{1+e^{-x}} \\ &amp;= \frac{e^{x}}{e^{x}+1} \\ &amp;= \frac{1}{2} + \frac{1}{2}\tanh\frac{x}{2} \end{aligned}" data-equation="eq:expit_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@011d8b8e35ceb466ad31f5484e176ccaeaa087a2/lib/node_modules/@stdlib/math/base/special/expit/docs/img/equation_expit_function.svg" alt="Standard logistic function.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var expit = require( '@stdlib/math/base/special/expit' );
```

#### expit( x )

Computes the [standard logistic][logistic-function] function.

```javascript
var v = expit( 0.0 );
// returns ~0.5

v = expit( 1.0 );
// returns ~0.731

v = expit( -1.0 );
// returns ~0.269

v = expit( Infinity );
// returns 1.0

v = expit( NaN );
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
var expit = require( '@stdlib/math/base/special/expit' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, 0.0, 1.0, opts );

logEachMap( 'expit(%0.4f) = %0.4f', x, expit );
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
#include "stdlib/math/base/special/expit.h"
```

#### stdlib_base_expit( x )

Computes the [standard logistic][logistic-function] function.

```c
double out = stdlib_base_expit( 0.0 );
// returns ~0.5

out = stdlib_base_expit( 1.0 );
// returns ~0.731
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_expit( const double x );
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
#include "stdlib/math/base/special/expit.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    double x;
    double v;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = (double)rand() / (double)RAND_MAX;
        v = stdlib_base_expit( x );
        printf( "expit(%lf) = %lf\n", x, v );
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
-   <span class="package-name">[`@stdlib/math/base/special/logit`][@stdlib/math/base/special/logit]</span><span class="delimiter">: </span><span class="description">logit function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[logistic-function]: https://en.wikipedia.org/wiki/Logistic_function

<!-- <related-links> -->

[@stdlib/math/base/special/exp]: https://github.com/stdlib-js/math/tree/main/base/special/exp

[@stdlib/math/base/special/logit]: https://github.com/stdlib-js/math/tree/main/base/special/logit

<!-- </related-links> -->

</section>

<!-- /.links -->
