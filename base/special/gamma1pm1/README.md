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

# gamma1pm1

> Compute `gamma(x+1) - 1`.

<section class="usage">

## Usage

```javascript
var gamma1pm1 = require( '@stdlib/math/base/special/gamma1pm1' );
```

#### gamma1pm1( x )

Computes `gamma(x+1) - 1` without cancellation errors for small `x` and where `gamma(x)` is the [gamma function][@stdlib/math/base/special/gamma].

```javascript
var v = gamma1pm1( 0.2 );
// returns ~-0.082

v = gamma1pm1( -8.5 );
// returns ~-1.0

v = gamma1pm1( 0.0 );
// returns 0.0

v = gamma1pm1( NaN );
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
var gamma1pm1 = require( '@stdlib/math/base/special/gamma1pm1' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -5.0, 5.0, opts );

logEachMap( 'gamma(%0.4f+1) - 1 = %0.4f', x, gamma1pm1 );
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
#include "stdlib/math/base/special/gamma1pm1.h"
```

#### stdlib_base_gamma1pm1( x )

Computes `gamma(x+1) - 1` without cancellation errors for small `x` and where `gamma(x)` is the [gamma function][@stdlib/math/base/special/gamma].

```c
double out = stdlib_base_gamma1pm1( 0.2 );
// returns ~-0.082
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_gamma1pm1( const double x );
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
#include "stdlib/math/base/special/gamma1pm1.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 4.0, -1.5, -0.5, 0.5 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_gamma1pm1( x[ i ] );
        printf( "gamma1pm1(%lf) = %lf\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/gamma`][@stdlib/math/base/special/gamma]</span><span class="delimiter">: </span><span class="description">gamma function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/gammainc`][@stdlib/math/base/special/gammainc]</span><span class="delimiter">: </span><span class="description">incomplete gamma function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/gammaincinv`][@stdlib/math/base/special/gammaincinv]</span><span class="delimiter">: </span><span class="description">inverse incomplete gamma function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/gammaln`][@stdlib/math/base/special/gammaln]</span><span class="delimiter">: </span><span class="description">natural logarithm of the gamma function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/gamma]: https://github.com/stdlib-js/math/tree/main/base/special/gamma

[@stdlib/math/base/special/gammainc]: https://github.com/stdlib-js/math/tree/main/base/special/gammainc

[@stdlib/math/base/special/gammaincinv]: https://github.com/stdlib-js/math/tree/main/base/special/gammaincinv

[@stdlib/math/base/special/gammaln]: https://github.com/stdlib-js/math/tree/main/base/special/gammaln

<!-- </related-links> -->

</section>

<!-- /.links -->
