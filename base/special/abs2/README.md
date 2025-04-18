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

# abs2

> Compute the squared [absolute value][absolute-value] of a double-precision floating-point number.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var abs2 = require( '@stdlib/math/base/special/abs2' );
```

#### abs2( x )

Computes the squared [absolute value][absolute-value] of a double-precision floating-point number.

```javascript
var v = abs2( -1.0 );
// returns 1.0

v = abs2( 2.0 );
// returns 4.0

v = abs2( 0.0 );
// returns 0.0

v = abs2( -0.0 );
// returns 0.0

v = abs2( NaN );
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
var abs2 = require( '@stdlib/math/base/special/abs2' );

var x = discreteUniform( 100, -50, 50, {
    'dtype': 'float64'
});

logEachMap( 'abs2(%d) = %d', x, abs2 );
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
#include "stdlib/math/base/special/abs2.h"
```

#### stdlib_base_abs2( x )

Computes the squared absolute value of a double-precision floating-point number.

```c
double y = stdlib_base_abs2( -5.0 );
// returns 25.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_abs2( const double x );
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
#include "stdlib/math/base/special/abs2.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 3.14, -3.14, 0.0, 0.0/0.0 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_abs2( x[ i ] );
        printf( "abs2(%lf) = %lf\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/abs`][@stdlib/math/base/special/abs]</span><span class="delimiter">: </span><span class="description">compute the absolute value of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/abs2f`][@stdlib/math/base/special/abs2f]</span><span class="delimiter">: </span><span class="description">compute the squared absolute value of a single-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[absolute-value]: https://en.wikipedia.org/wiki/Absolute_value

<!-- <related-links> -->

[@stdlib/math/base/special/abs]: https://github.com/stdlib-js/math/tree/main/base/special/abs

[@stdlib/math/base/special/abs2f]: https://github.com/stdlib-js/math/tree/main/base/special/abs2f

<!-- </related-links> -->

</section>

<!-- /.links -->
