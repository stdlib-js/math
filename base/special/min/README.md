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

# min

> Return the minimum value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var min = require( '@stdlib/math/base/special/min' );
```

#### min( x, y )

Returns the minimum value.

```javascript
var v = min( 4.2, 3.14 );
// returns 3.14

v = min( +0.0, -0.0 );
// returns -0.0
```

If any argument is `NaN`, the function returns `NaN`.

```javascript
var v = min( 4.2, NaN );
// returns NaN

v = min( NaN, 3.14 );
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
var minstd = require( '@stdlib/random/base/minstd-shuffle' );
var min = require( '@stdlib/math/base/special/min' );

var x;
var y;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = minstd();
    y = minstd();
    v = min( x, y );
    console.log( 'min(%d,%d) = %d', x, y, v );
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
#include "stdlib/math/base/special/min.h"
```

#### stdlib_base_min( x, y )

Returns the minimum value.

```c
double out = stdlib_base_min( 4.2, 3.14 );
// returns 3.14

out = stdlib_base_min( 0.0, -0.0 );
// returns -0.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **y**: `[in] double` input value.

```c
double stdlib_base_min( const double x, const double y );
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
#include "stdlib/math/base/special/min.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    double x;
    double y;
    double v;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = ( ( (double)rand() / (double)RAND_MAX ) * 200.0 ) - 100.0;
        y = ( ( (double)rand() / (double)RAND_MAX ) * 200.0 ) - 100.0;
        v = stdlib_base_min( x, y );
        printf( "x: %lf, y: %lf, min(x, y): %lf\n", x, y, v );
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
-   <span class="package-name">[`@stdlib/math/base/special/minabs`][@stdlib/math/base/special/minabs]</span><span class="delimiter">: </span><span class="description">return the minimum absolute value.</span>
-   <span class="package-name">[`@stdlib/math/base/special/minn`][@stdlib/math/base/special/minn]</span><span class="delimiter">: </span><span class="description">return the minimum value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/max]: https://github.com/stdlib-js/math/tree/main/base/special/max

[@stdlib/math/base/special/minabs]: https://github.com/stdlib-js/math/tree/main/base/special/minabs

[@stdlib/math/base/special/minn]: https://github.com/stdlib-js/math/tree/main/base/special/minn

<!-- </related-links> -->

</section>

<!-- /.links -->
