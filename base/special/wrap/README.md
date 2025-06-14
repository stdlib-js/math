<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# wrap

> Wrap a value to the half-open interval `[min,max)`.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var wrap = require( '@stdlib/math/base/special/wrap' );
```

#### wrap( v, min, max )

Wraps a value to the half-open interval `[min,max)`.

```javascript
var v = wrap( 3.14, 0.0, 5.0 );
// returns 3.14

v = wrap( -3.14, 0.0, 5.0 );
// returns ~1.86

v = wrap( 10.0, 0.0, 5.0 );
// returns 0.0

v = wrap( -0.0, 0.0, 5.0 );
// returns 0.0

v = wrap( 0.0, -3.14, -0.0 );
// returns -3.14
```

If provided `NaN` for any argument, the function returns `NaN`.

```javascript
var v = wrap( NaN, 0.0, 5.0 );
// returns NaN

v = wrap( 0.0, NaN, 5.0 );
// returns NaN

v = wrap( 3.14, 0.0, NaN );
// returns NaN
```

If provided `min == max`, the function returns `NaN`.

```javascript
var v = wrap( 3.14, 3.0, 3.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function does **not** distinguish between positive and negative zero. Where appropriate, the function returns positive zero.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var wrap = require( '@stdlib/math/base/special/wrap' );

var opts = {
    'dtype': 'float64'
};
var min = discreteUniform( 100, 0, 10, opts );
var max = discreteUniform( 100, 5, 15, opts );
var v = discreteUniform( 100, -20, 20, opts );

logEachMap( 'wrap(%d,%d,%d) => %0.4f', v, min, max, wrap );
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
#include "stdlib/math/base/special/wrap.h"
```

#### stdlib_base_wrap( v, min, max )

Wraps a value to the half-open interval `[min,max)`.

```c
double v = stdlib_base_wrap( 3.14, 0.0, 5.0 );
// returns 3.14

v = stdlib_base_wrap( -3.14, 0.0, 5.0 );
// returns ~1.86
```

The function accepts the following arguments:

-   **v**: `[in] double` input value to wrap.
-   **min**: `[in] double` minimum value.
-   **max**: `[in] double` maximum value.

```c
double stdlib_base_wrap( const double v, const double min, const double max )
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
#include "stdlib/math/base/special/wrap.h"
#include <stdio.h>

int main( void ) {
    const double min[] = { 0.0, 0.0, 0.0, 0.0, -3.14 };
    const double max[] = { 5.0, 5.0, 5.0, 5.0, -0.0 };
    const double v[] = { 3.14, -3.14, 10.0, -0.0, 0.0 };

    double out;
    int i;
    for ( i = 0; i < 5; i++ ) {
        out = stdlib_base_wrap( v[i], min[i], max[i] );
        printf( "wrap(%lf,%lf,%lf) => %lf\n", v[i], min[i], max[i], out );
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

-   <span class="package-name">[`@stdlib/math/base/special/clamp`][@stdlib/math/base/special/clamp]</span><span class="delimiter">: </span><span class="description">restrict a double-precision floating-point number to a specified range.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/clamp]: https://github.com/stdlib-js/math/tree/main/base/special/clamp

<!-- </related-links> -->

</section>

<!-- /.links -->
