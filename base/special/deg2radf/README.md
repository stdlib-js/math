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

# deg2radf

> Convert an angle from degrees to radians (single-precision).

<section class="usage">

## Usage

```javascript
var deg2radf = require( '@stdlib/math/base/special/deg2radf' );
```

#### deg2radf( x )

Converts an angle from degrees to radians (single-precision).

```javascript
var r = deg2radf( 90.0 );
// returns ~1.571

r = deg2radf( -45.0 );
// returns ~-0.785

r = deg2radf( NaN );
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
var deg2radf = require( '@stdlib/math/base/special/deg2radf' );

var opts = {
    'dtype': 'float32'
};
var d = uniform( 100, -360.0, 360.0, opts );

logEachMap( 'degrees: %0.4f => radians: %0.4f', d, deg2radf );
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
#include "stdlib/math/base/special/deg2radf.h"
```

#### stdlib_base_deg2radf( x )

Converts an angle from degrees to radians (single-precision).

```c
float y = stdlib_base_deg2radf( 90.0f );
// returns ~1.571f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_deg2radf( const float x );
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
#include "stdlib/math/base/special/deg2radf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 45.0f, 90.0f, 0.0f, 0.0f/0.0f };

    float y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_deg2radf( x[ i ] );
        printf( "deg2radf(%f) = %f\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/deg2rad`][@stdlib/math/base/special/deg2rad]</span><span class="delimiter">: </span><span class="description">convert an angle from degrees to radians.</span>
-   <span class="package-name">[`@stdlib/math/base/special/rad2degf`][@stdlib/math/base/special/rad2degf]</span><span class="delimiter">: </span><span class="description">convert an angle from radians to degrees (single-precision).</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/deg2rad]: https://github.com/stdlib-js/math/tree/main/base/special/deg2rad

[@stdlib/math/base/special/rad2degf]: https://github.com/stdlib-js/math/tree/main/base/special/rad2degf

<!-- </related-links> -->

</section>

<!-- /.links -->
