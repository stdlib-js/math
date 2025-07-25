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

# hypotf

> Compute the [hypotenuse][hypotenuse] avoiding overflow and underflow (single-precision).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var hypotf = require( '@stdlib/math/base/special/hypotf' );
```

#### hypotf( x, y )

Computes the [hypotenuse][hypotenuse] avoiding overflow and underflow (single-precision).

```javascript
var h = hypotf( -5.0, 12.0 );
// returns 13.0

h = hypotf( -0.0, -0.0 );
// returns +0.0
```

If either argument is `NaN` and the other argument is not `+-Infinity`, the function returns `NaN`.

```javascript
var h = hypotf( NaN, 12.0 );
// returns NaN

h = hypotf( 5.0, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var hypotf = require( '@stdlib/math/base/special/hypotf' );

var opts = {
    'dtype': 'float32'
};
var x = discreteUniform( 100, -50, 50, opts );
var y = discreteUniform( 100, -50, 50, opts );

logEachMap( 'h(%d,%d) = %0.4f', x, y, hypotf );
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
#include "stdlib/math/base/special/hypotf.h"
```

#### stdlib_base_hypotf( x, y )

Computes the hypotenuse avoiding overflow and underflow (single-precision).

```c
float h = stdlib_base_hypotf( 5.0f, 12.0f );
// returns 13.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.
-   **y**: `[in] float` input value.

```c
float stdlib_base_hypotf( const float x, const float y );
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
#include "stdlib/math/base/special/hypotf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 3.0f, 4.0f, 5.0f, 12.0f };

    float y;
    int i;
    for ( i = 0; i < 4; i += 2 ) {
        y = stdlib_base_hypotf( x[ i ], x[ i+1 ] );
        printf( "hypot(%f, %f) = %f\n", x[ i ], x[ i+1 ], y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/hypot`][@stdlib/math/base/special/hypot]</span><span class="delimiter">: </span><span class="description">compute the hypotenuse avoiding overflow and underflow.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[hypotenuse]: https://en.wikipedia.org/wiki/Pythagorean_theorem

<!-- <related-links> -->

[@stdlib/math/base/special/hypot]: https://github.com/stdlib-js/math/tree/main/base/special/hypot

<!-- </related-links> -->

</section>

<!-- /.links -->
