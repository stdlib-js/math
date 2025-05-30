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

# rad2degf

> Convert an angle from radians to degrees (single-precision).

<section class="usage">

## Usage

```javascript
var rad2degf = require( '@stdlib/math/base/special/rad2degf' );
```

#### rad2degf( x )

Converts an angle from radians to degrees (single-precision).

```javascript
var d = rad2degf( 3.141592653589793 / 2.0 );
// returns 90.0

d = rad2degf( -3.141592653589793 / 4.0 );
// returns -45.0

d = rad2degf( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Due to finite precision, canonical values may not be returned. For example,

    ```javascript
    var d = rad2degf( 3.141592653589793 / 6.0 );
    // returns 30.000001907348633
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var TWO_PI = require( '@stdlib/constants/float32/two-pi' );
var rad2degf = require( '@stdlib/math/base/special/rad2degf' );

var opts = {
    'dtype': 'float32'
};
var r = uniform( 100, 0.0, TWO_PI, opts );

logEachMap( 'radians: %0.4f => degrees: %0.4f', r, rad2degf );
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
#include "stdlib/math/base/special/rad2degf.h"
```

#### stdlib_base_rad2degf( x )

Converts an angle from radians to degrees (single-precision).

```c
float x = 3.141592653589793f / 2.0f;
float d = stdlib_base_rad2degf( x );
// returns 90.0f

x = -3.141592653589793f / 4.0f;
d = stdlib_base_rad2degf( x );
// returns -45.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value (in radians).

```c
float stdlib_base_rad2degf( const float x );
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
#include "stdlib/math/base/special/rad2degf.h"
#include "stdlib/constants/float32/two_pi.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    float x;
    float d;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = (float)rand() / (float)RAND_MAX * STDLIB_CONSTANT_FLOAT32_TWO_PI;
        d = stdlib_base_rad2degf( x );
        printf( "radians: %f => degrees: %f\n", x, d );
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

-   <span class="package-name">[`@stdlib/math/base/special/rad2deg`][@stdlib/math/base/special/rad2deg]</span><span class="delimiter">: </span><span class="description">convert an angle from radians to degrees.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/rad2deg]: https://github.com/stdlib-js/math/tree/main/base/special/rad2deg

<!-- </related-links> -->

</section>

<!-- /.links -->
