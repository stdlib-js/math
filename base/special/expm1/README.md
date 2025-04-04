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

# expm1

> Compute `exp(x) - 1`.

<section class="usage">

## Usage

```javascript
var expm1 = require( '@stdlib/math/base/special/expm1' );
```

#### expm1( x )

Computes `exp(x) - 1`, where `exp(x)` is the natural [exponential function][exponential-function].

```javascript
var v = expm1( 0.2 );
// returns ~0.221

v = expm1( -9.0 );
// returns ~-1.0

v = expm1( 0.0 );
// returns 0.0

v = expm1( NaN );
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
var expm1 = require( '@stdlib/math/base/special/expm1' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -5.0, 5.0, opts );

logEachMap( 'e^%0.4f - 1 = %0.4f', x, expm1 );
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
#include "stdlib/math/base/special/expm1.h"
```

#### stdlib_base_expm1( x )

Computes `exp(x) - 1`, where `exp(x)` is the natural [exponential function][exponential-function].

```c
double out = stdlib_base_expm1( 0.2 );
// returns ~0.221

out = stdlib_base_expm1( -9.0 );
// returns ~-1.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_expm1( const double x );
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
#include "stdlib/math/base/special/expm1.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    double x;
    double v;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = ( ( (double)rand() / (double)RAND_MAX ) * 10.0 ) - 5.0;
        v = stdlib_base_expm1( x );
        printf( "e^%lf - 1 = %lf\n", x, v );
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
-   <span class="package-name">[`@stdlib/math/base/special/expm1rel`][@stdlib/math/base/special/expm1rel]</span><span class="delimiter">: </span><span class="description">relative error exponential.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[exponential-function]: https://en.wikipedia.org/wiki/Exponential_function

<!-- <related-links> -->

[@stdlib/math/base/special/exp]: https://github.com/stdlib-js/math/tree/main/base/special/exp

[@stdlib/math/base/special/expm1rel]: https://github.com/stdlib-js/math/tree/main/base/special/expm1rel

<!-- </related-links> -->

</section>

<!-- /.links -->
