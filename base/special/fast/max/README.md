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

# max

> Return the maximum value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var max = require( '@stdlib/math/base/special/fast/max' );
```

#### max( x, y )

Returns the maximum value.

```javascript
var v = max( 4.2, 3.14 );
// returns 4.2
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The implementation **ignores** the sign of `0`.

    ```javascript
    var v = max( +0.0, -0.0 );
    // returns -0.0

    v = max( -0.0, +0.0 );
    // returns +0.0
    ```

-   The implementation does **not** check for `NaN` arguments.

    ```javascript
    var v = max( 3.14, NaN );
    // returns NaN

    v = max( NaN, 3.14 );
    // returns 3.14
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' );
var max = require( '@stdlib/math/base/special/fast/max' );

var x;
var y;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = minstd();
    y = minstd();
    v = max( x, y );
    console.log( 'max(%d,%d) = %d', x, y, v );
}
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
#include "stdlib/math/base/special/fast/max.h"
```

#### stdlib_base_fast_max( x, y )

Returns the maximum value.

```c
double out = stdlib_base_fast_max( 4.2, 3.14 );
// returns 4.2

out = stdlib_base_fast_max( 0.0, -0.0 );
// returns 0.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **y**: `[in] double` input value.

```c
double stdlib_base_fast_max( const double x, const double y );
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
#include "stdlib/math/base/special/fast/max.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    double x;
    double y;
    double v;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = ( ( (double)rand() / (double)RAND_MAX ) * 2000.0 ) - 1000.0;
        y = ( ( (double)rand() / (double)RAND_MAX ) * 2000.0 ) - 1000.0;
        v = stdlib_base_fast_max( x, y );
        printf( "x: %lf, y: %lf, max(x, y): %lf\n", x, y, v );
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

-   <span class="package-name">[`@stdlib/math/base/special/max`][@stdlib/math/base/special/max]</span><span class="delimiter">: </span><span class="description">return the maximum value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/max]: https://github.com/stdlib-js/math/tree/main/base/special/max

<!-- </related-links> -->

</section>

<!-- /.links -->
