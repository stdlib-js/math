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

# cosm1

> Compute `cos(x) - 1`.

<section class="usage">

## Usage

```javascript
var cosm1 = require( '@stdlib/math/base/special/cosm1' );
```

#### cosm1( x )

Computes `cos(x) - 1`, where `cos` is the [cosine][@stdlib/math/base/special/cos] of a `number` (in radians). This function should be used instead of manually calculating `cos(x) - 1` when the argument is near unity.

```javascript
var PI = require( '@stdlib/constants/float64/pi' );

var v = cosm1( 0.0 );
// returns 0.0

v = cosm1( PI/4.0 );
// returns ~-0.293

v = cosm1( -PI/6.0 );
// returns ~-0.134

v = cosm1( NaN );
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
var PI = require( '@stdlib/constants/float64/pi' );
var cosm1 = require( '@stdlib/math/base/special/cosm1' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, 0.0, 2.0*PI, opts );

logEachMap( 'cos(%0.4f) - 1 = %0.4f', x, cosm1 );
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
#include "stdlib/math/base/special/cosm1.h"
```

#### stdlib_base_cosm1( x )

Computes `cos(x) - 1`, where `cos` is the [cosine][@stdlib/math/base/special/cos] of a `number` (in radians). This function should be used instead of manually calculating `cos(x) - 1` when the argument is near unity.

```c
double out = stdlib_base_cosm1( 0.0 );
// returns 0.0

out = stdlib_base_cosm1( 3.141592653589793238 / 4.0 );
// returns ~-0.293
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_cosm1( const double x );
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
#include "stdlib/math/base/special/cosm1.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 0.0, 0.523, 0.785, 1.047, 3.14 };

    double y;
    int i;
    for ( i = 0; i < 5; i++ ) {
        y = stdlib_base_cosm1( x[ i ] );
        printf( "cosm1(%lf) = %lf\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/cos`][@stdlib/math/base/special/cos]</span><span class="delimiter">: </span><span class="description">compute the cosine of a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/cos]: https://github.com/stdlib-js/math/tree/main/base/special/cos

<!-- </related-links> -->

</section>

<!-- /.links -->
