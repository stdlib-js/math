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

# sqrt1pm1

> Compute `sqrt( 1 + x ) - 1`.

<section class="usage">

## Usage

```javascript
var sqrt1pm1 = require( '@stdlib/math/base/special/sqrt1pm1' );
```

#### sqrt1pm1( x )

Computes `sqrt( 1 + x ) - 1` more accurately for small `x`.

```javascript
var v = sqrt1pm1( 3.0 );
// returns 1.0

v = sqrt1pm1( 0.5 );
// returns ~0.225

v = sqrt1pm1( 0.02 );
// returns ~0.01

v = sqrt1pm1( -0.5 );
// returns ~-0.293

v = sqrt1pm1( -1.1 );
// returns NaN

v = sqrt1pm1( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var sqrt1pm1 = require( '@stdlib/math/base/special/sqrt1pm1' );

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 100, 0, 100, opts );

logEachMap( 'sqrt(1+%d) - 1 = %0.4f', x, sqrt1pm1 );
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
#include "stdlib/math/base/special/sqrt1pm1.h"
```

#### stdlib_base_sqrt1pm1( x )

Computes `sqrt( 1 + x ) - 1` more accurately for small `x`.

```c
double out = stdlib_base_sqrt1pm1( 3.0 );
// returns 1.0

out = stdlib_base_sqrt1pm1( 0.5 );
// returns ~0.225
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_sqrt1pm1( const double x );
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
#include "stdlib/math/base/special/sqrt1pm1.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    double x;
    double v;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = ( (double)rand() / (double)RAND_MAX ) * 100.0;
        v = stdlib_base_sqrt1pm1( x );
        printf( "sqrt(1+%lf) - 1 = %lf\n", x, v );
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

-   <span class="package-name">[`@stdlib/math/base/special/sqrt`][@stdlib/math/base/special/sqrt]</span><span class="delimiter">: </span><span class="description">compute the principal square root of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/sqrt]: https://github.com/stdlib-js/math/tree/main/base/special/sqrt

<!-- </related-links> -->

</section>

<!-- /.links -->
