<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# copysignf

> Return a [single-precision floating-point number][ieee754] with the magnitude of `x` and the sign of `y`.

<section class="usage">

## Usage

```javascript
var copysignf = require( '@stdlib/math/base/special/copysignf' );
```

#### copysignf( x, y )

Returns a [single-precision floating-point number][ieee754] with the magnitude of `x` and the sign of `y`.

```javascript
var z = copysignf( -3.0, 10.0 );
// returns 3.0

z = copysignf( 3.0, -1.0 );
// returns -3.0

z = copysignf( 1.0, -0.0 );
// returns -1.0

z = copysignf( -3.0, -0.0 );
// returns -3.0

z = copysignf( -0.0, 1.0 );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   According to the [IEEE754][ieee754] standard, a `NaN` has a biased exponent equal to `255`, a significand greater than `0`, and a sign bit equal to **either** `1` **or** `0`. In which case, `NaN` may not correspond to just one but many binary representations. Accordingly, care should be taken to ensure that `y` is **not** `NaN`; otherwise, behavior may be indeterminate.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var copysignf = require( '@stdlib/math/base/special/copysignf' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, -50.0, 50.0, opts );
var y = uniform( 100, -5.0, 5.0, opts );

// Generate random numbers `x` and `y` and copy the sign of `y` to `x`...
logEachMap( 'x: %0.4f, y: %0.4f => %0.4f', x, y, copysignf );
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
#include "stdlib/math/base/special/copysignf.h"
```

#### stdlib_base_copysignf( x, y )

Returns a [single-precision floating-point number][ieee754] with the magnitude of `x` and the sign of `y`.

```c
float v = stdlib_base_copysignf( -3.0f, 10.0f );
// returns 3.0f

float v = stdlib_base_copysignf( 3.0f, -1.0f );
// returns -3.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` number from which to derive a magnitude.
-   **y**: `[in] float` number from which to derive a sign.

```c
float stdlib_base_copysignf( const float x, const float y );
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
#include "stdlib/math/base/special/copysignf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 3.0f, -3.0f, 0.0f, 0.0f/0.0f };

    float y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_copysignf( x[ i ], -3.0f );
        printf( "copysignf(%f, %f) = %f\n", x[ i ], -3.0f, y );
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

-   <span class="package-name">[`@stdlib/math/base/special/copysign`][@stdlib/math/base/special/copysign]</span><span class="delimiter">: </span><span class="description">return a double-precision floating-point number with the magnitude of x and the sign of y.</span>
-   <span class="package-name">[`@stdlib/math/base/special/flipsignf`][@stdlib/math/base/special/flipsignf]</span><span class="delimiter">: </span><span class="description">return a single-precision floating-point number with the magnitude of x and the sign of x\*y.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/copysign]: https://github.com/stdlib-js/math/tree/main/base/special/copysign

[@stdlib/math/base/special/flipsignf]: https://github.com/stdlib-js/math/tree/main/base/special/flipsignf

<!-- </related-links> -->

</section>

<!-- /.links -->
