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

# Cosine

> Compute the [cosine][cosine] of a number.

<section class="usage">

## Usage

```javascript
var cos = require( '@stdlib/math/base/special/cos' );
```

#### cos( x )

Computes the [cosine][cosine] of a `number` (in radians).

```javascript
var v = cos( 0.0 );
// returns 1.0

v = cos( 3.141592653589793/4.0 );
// returns ~0.707

v = cos( -3.141592653589793/6.0 );
// returns ~0.866

v = cos( NaN );
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
var TWO_PI = require( '@stdlib/constants/float64/two-pi' );
var cos = require( '@stdlib/math/base/special/cos' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, 0.0, TWO_PI, opts );

logEachMap( 'cos(%0.4f) = %0.4f', x, cos );
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
#include "stdlib/math/base/special/cos.h"
```

#### stdlib_base_cos( x )

Computes the [cosine][cosine] of a `number` (in radians).

```c
double out = stdlib_base_cos( 0.0 );
// returns 1.0

out = stdlib_base_cos( 3.141592653589793 / 4.0 );
// returns ~0.707
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_cos( const double x );
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
#include "stdlib/math/base/special/cos.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 0.0, 0.523, 0.785, 1.047, 3.14 };

    double y;
    int i;
    for ( i = 0; i < 5; i++ ) {
        y = stdlib_base_cos( x[ i ] );
        printf( "cos(%lf) = %lf\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/cospi`][@stdlib/math/base/special/cospi]</span><span class="delimiter">: </span><span class="description">compute cos(πx).</span>
-   <span class="package-name">[`@stdlib/math/base/special/cosm1`][@stdlib/math/base/special/cosm1]</span><span class="delimiter">: </span><span class="description">compute the cosine of a number minus one.</span>
-   <span class="package-name">[`@stdlib/math/base/special/sin`][@stdlib/math/base/special/sin]</span><span class="delimiter">: </span><span class="description">compute the sine of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/tan`][@stdlib/math/base/special/tan]</span><span class="delimiter">: </span><span class="description">evaluate the tangent of a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[cosine]: https://en.wikipedia.org/wiki/Cosine

<!-- <related-links> -->

[@stdlib/math/base/special/cospi]: https://github.com/stdlib-js/math/tree/main/base/special/cospi

[@stdlib/math/base/special/cosm1]: https://github.com/stdlib-js/math/tree/main/base/special/cosm1

[@stdlib/math/base/special/sin]: https://github.com/stdlib-js/math/tree/main/base/special/sin

[@stdlib/math/base/special/tan]: https://github.com/stdlib-js/math/tree/main/base/special/tan

<!-- </related-links> -->

</section>

<!-- /.links -->
