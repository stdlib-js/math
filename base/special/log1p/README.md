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

# log1p

> Evaluate the [natural logarithm][@stdlib/math/base/special/ln] of `1+x`.

<section class="usage">

## Usage

```javascript
var log1p = require( '@stdlib/math/base/special/log1p' );
```

#### log1p( x )

Evaluates the [natural logarithm][@stdlib/math/base/special/ln] of `1+x`.

```javascript
var v = log1p( 4.0 );
// returns ~1.609

v = log1p( -1.0 );
// returns -Infinity

v = log1p( Infinity );
// returns Infinity

v = log1p( 0.0 );
// returns 0.0

v = log1p( -0.0 );
// returns -0.0

v = log1p( NaN );
// returns NaN
```

For `x < -1`, the function returns `NaN`, as the [natural logarithm][@stdlib/math/base/special/ln] is **not** defined for negative numbers.

```javascript
var v = log1p( -2.0 );
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
var log1p = require( '@stdlib/math/base/special/log1p' );

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 100, 0, 100, opts );

logEachMap( 'log1p( %0.4f ) = %0.4f', x, log1p );
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
#include "stdlib/math/base/special/log1p.h"
```

#### stdlib_base_log1p( x )

Evaluates the [natural logarithm][@stdlib/math/base/special/ln] of `1+x`.

```c
double out = stdlib_base_log1p( 4.0 );
// returns ~1.609

out = stdlib_base_log1p( -1.0 );
// returns -Infinity
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_log1p( const double x );
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
#include "stdlib/math/base/special/log1p.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    double x;
    double v;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = ( (double)rand() / (double)RAND_MAX ) * 100.0;
        v = stdlib_base_log1p( x );
        printf( "log1p(%lf) = %lf\n", x, v );
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

-   <span class="package-name">[`@stdlib/math/base/special/ln`][@stdlib/math/base/special/ln]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/log`][@stdlib/math/base/special/log]</span><span class="delimiter">: </span><span class="description">compute the base `b` logarithm of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/ln]: https://github.com/stdlib-js/math/tree/main/base/special/ln

[@stdlib/math/base/special/log]: https://github.com/stdlib-js/math/tree/main/base/special/log

<!-- </related-links> -->

</section>

<!-- /.links -->
