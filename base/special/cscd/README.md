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

# cscd

> Compute the [cosecant][cosecant] of a degree.

<section class="usage">

## Usage

```javascript
var cscd = require( '@stdlib/math/base/special/cscd' );
```

#### cscd( x )

Computes the [cosecant][cosecant] of `x` (in degrees).

```javascript
var v = cscd( 30.0 );
// returns ~2.0

v = cscd( 45.0 );
// returns ~1.41

v = cscd( 60.0 );
// returns ~1.15

v = cscd( 90.0 );
// returns 1.0

v = cscd( 0.0 );
// returns Infinity

v = cscd( NaN );
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
var cscd = require( '@stdlib/math/base/special/cscd' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, 1.1, 5.1, opts );

logEachMap( 'cscd(%0.4f) = %0.4f', x, cscd );
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
#include "stdlib/math/base/special/cscd.h"
```

#### stdlib_base_cscd( x )

Computes the [cosecant][cosecant] of `x` (in degrees).

```c
double out = stdlib_base_cscd( 30.0 );
// returns ~2.0

out = stdlib_base_cscd( 45.0 );
// returns ~1.41
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_cscd( const double x );
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
#include "stdlib/math/base/special/cscd.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 30.0, 45.0, 60.0, 90.0 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_cscd( x[ i ] );
        printf( "cscd(%lf) = %lf\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/cotd`][@stdlib/math/base/special/cotd]</span><span class="delimiter">: </span><span class="description">compute the cotangent of an angle measured in degrees.</span>
-   <span class="package-name">[`@stdlib/math/base/special/secd`][@stdlib/math/base/special/secd]</span><span class="delimiter">: </span><span class="description">compute the secant of an angle measured in degrees.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[cosecant]: https://en.wikipedia.org/wiki/Inverse_trigonometric_functions

<!-- <related-links> -->

[@stdlib/math/base/special/cotd]: https://github.com/stdlib-js/math/tree/main/base/special/cotd

[@stdlib/math/base/special/secd]: https://github.com/stdlib-js/math/tree/main/base/special/secd

<!-- </related-links> -->

</section>

<!-- /.links -->
