<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# floorf

> Round a single-precision floating-point numeric value toward negative infinity.

<section class="usage">

## Usage

```javascript
var floorf = require( '@stdlib/math/base/special/floorf' );
```

#### floorf( x )

Rounds a single-precision floating-point `numeric` value toward negative infinity.

```javascript
var v = floorf( -4.2 );
// returns -5.0

v = floorf( 9.99999 );
// returns 9.0

v = floorf( 0.0 );
// returns 0.0

v = floorf( NaN );
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
var floorf = require( '@stdlib/math/base/special/floorf' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, -50.0, 50.0, opts );

logEachMap( 'floorf(%0.4f) = %d', x, floorf );
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
#include "stdlib/math/base/special/floorf.h"
```

#### stdlib_base_floorf( x )

Rounds a single-precision floating-point number toward negative infinity.

```c
float y = stdlib_base_floorf( 3.14f );
// returns 3.0
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_floorf( const float x );
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
#include "stdlib/math/base/special/floorf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 3.14f, -3.14f, 0.0f, 0.0f/0.0f };

    float y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_floorf( x[ i ] );
        printf( "floorf(%f) = %f\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/ceilf`][@stdlib/math/base/special/ceilf]</span><span class="delimiter">: </span><span class="description">round a single-precision floating-point number toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/floor`][@stdlib/math/base/special/floor]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number toward negative infinity.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/ceilf]: https://github.com/stdlib-js/math/tree/main/base/special/ceilf

[@stdlib/math/base/special/floor]: https://github.com/stdlib-js/math/tree/main/base/special/floor

<!-- </related-links> -->

</section>

<!-- /.links -->
