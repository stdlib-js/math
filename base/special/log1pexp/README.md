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

# log1pexp

> Evaluates the [natural logarithm][@stdlib/math/base/special/ln] of `1+exp(x)`.

<section class="usage">

## Usage

```javascript
var log1pexp = require( '@stdlib/math/base/special/log1pexp' );
```

#### log1pexp( x )

Evaluates the [natural logarithm][@stdlib/math/base/special/ln] of `1+exp(x)`.

```javascript
var y = log1pexp( -10.0 );
// returns ~0.000045

y = log1pexp( 0.0 );
// returns ~0.693147

y = log1pexp( 5.0 );
// returns ~5.006715

y = log1pexp( 34.0 );
// returns 34.0

y = log1pexp( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var incrspace = require( '@stdlib/array/base/incrspace' );
var log1pexp = require( '@stdlib/math/base/special/log1pexp' );

var x = incrspace( -10.0, 10.0, 0.01 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( 'x: %d, f(x): %d', x[ i ], log1pexp( x[ i ] ) );
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
#include "stdlib/math/base/special/log1pexp.h"
```

#### stdlib_base_log1pexp( x )

Evaluates the [natural logarithm][@stdlib/math/base/special/ln] of `1+exp(x)`.

```c
double out = stdlib_base_log1pexp( 5.0 );
// returns ~5.006715

out = stdlib_base_log1pexp( 34.0 );
// returns 34.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_log1pexp( const double x );
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
#include "stdlib/math/base/special/log1pexp.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    double x;
    double v;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = ( ( (double)rand() / (double)RAND_MAX ) * 20.0 ) - 10.0;
        v = stdlib_base_log1pexp( x );
        printf( "x: %lf, f(x): %lf\n", x, v );
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
-   <span class="package-name">[`@stdlib/math/base/special/log1mexp`][@stdlib/math/base/special/log1mexp]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of 1-exp(-\|x\|).</span>
-   <span class="package-name">[`@stdlib/math/base/special/log1p`][@stdlib/math/base/special/log1p]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of 1+x.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/exp]: https://github.com/stdlib-js/math/tree/main/base/special/exp

[@stdlib/math/base/special/ln]: https://github.com/stdlib-js/math/tree/main/base/special/ln

[@stdlib/math/base/special/log1mexp]: https://github.com/stdlib-js/math/tree/main/base/special/log1mexp

[@stdlib/math/base/special/log1p]: https://github.com/stdlib-js/math/tree/main/base/special/log1p

<!-- </related-links> -->

</section>

<!-- /.links -->
