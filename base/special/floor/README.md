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

# Floor

> Round a double-precision floating-point number toward negative infinity.

<section class="usage">

## Usage

```javascript
var floor = require( '@stdlib/math/base/special/floor' );
```

#### floor( x )

Rounds a double-precision floating-point number toward negative infinity.

```javascript
var v = floor( -4.2 );
// returns -5.0

v = floor( 9.99999 );
// returns 9.0

v = floor( 0.0 );
// returns 0.0

v = floor( NaN );
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
var floor = require( '@stdlib/math/base/special/floor' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -50.0, 50.0, opts );

logEachMap( 'floor(%0.4f) = %d', x, floor );
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
#include "stdlib/math/base/special/floor.h"
```

#### stdlib_base_floor( x )

Rounds a double-precision floating-point number toward negative infinity.

```c
double y = stdlib_base_floor( 3.14 );
// returns 3.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_floor( const double x );
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
#include "stdlib/math/base/special/floor.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 3.14, -3.14, 0.0, 0.0/0.0 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_floor( x[ i ] );
        printf( "floor(%lf) = %lf\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/ceil`][@stdlib/math/base/special/ceil]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/round`][@stdlib/math/base/special/round]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest integer.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/ceil]: https://github.com/stdlib-js/math/tree/main/base/special/ceil

[@stdlib/math/base/special/round]: https://github.com/stdlib-js/math/tree/main/base/special/round

<!-- </related-links> -->

</section>

<!-- /.links -->
