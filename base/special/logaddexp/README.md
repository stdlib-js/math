<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# logaddexp

> Evaluates the [natural logarithm][@stdlib/math/base/special/ln] of `exp(x) + exp(y)`.

<section class="intro">

Log-domain computations are commonly used to increase accuracy and avoid underflow and overflow when very small or very large numbers are represented directly as limited-precision, floating-point numbers. For example, in statistics, evaluating `logaddexp()` is useful when probabilities are so small as to exceed the normal range of floating-point numbers.

</section>

<section class="usage">

## Usage

```javascript
var logaddexp = require( '@stdlib/math/base/special/logaddexp' );
```

#### logaddexp( x, y )

Evaluates the [natural logarithm][@stdlib/math/base/special/ln] of `exp(x) + exp(y)`.

```javascript
var v = logaddexp( 90.0, 90.0 );
// returns ~90.6931

v = logaddexp( -20.0, 90.0 );
// returns 90.0

v = logaddexp( 0.0, -100.0 );
// returns ~3.7201e-44

v = logaddexp( NaN, 1.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var incrspace = require( '@stdlib/array/base/incrspace' );
var logaddexp = require( '@stdlib/math/base/special/logaddexp' );

var x = incrspace( -100.0, 100.0, 1.0 );

var v;
var i;
var j;
for ( i = 0; i < x.length; i++ ) {
    for ( j = i; j < x.length; j++ ) {
        v = logaddexp( x[ i ], x[ j ] );
        console.log( 'x: %d, y: %d, f(x, y): %d', x[ i ], x[ j ], v );
    }
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
#include "stdlib/math/base/special/logaddexp.h"
```

#### stdlib_base_logaddexp( x, y )

Evaluates the [natural logarithm][@stdlib/math/base/special/ln] of `exp(x) + exp(y)`.

```c
double out = stdlib_base_logaddexp( 90.0, 90.0 );
// returns ~90.6931

out = stdlib_base_logaddexp( -20.0, 90.0 );
// returns 90.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **y**: `[in] double` input value.

```c
double stdlib_base_logaddexp( const double x, const double y );
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
#include "stdlib/math/base/special/logaddexp.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    double x;
    double y;
    double v;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = ( ( (double)rand() / (double)RAND_MAX ) * 200.0 ) - 100.0;
        y = ( ( (double)rand() / (double)RAND_MAX ) * 200.0 ) - 100.0;
        v = stdlib_base_logaddexp( x, y );
        printf( "x: %lf, y: %lf, logaddexp(x, y): %lf\n", x, y, v );
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
-   <span class="package-name">[`@stdlib/math/base/special/ln`][@stdlib/math/base/special/ln]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/exp]: https://github.com/stdlib-js/math/tree/main/base/special/exp

[@stdlib/math/base/special/ln]: https://github.com/stdlib-js/math/tree/main/base/special/ln

<!-- </related-links> -->

</section>

<!-- /.links -->
