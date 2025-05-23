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

# maxabs

> Return the maximum absolute value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var maxabs = require( '@stdlib/math/base/special/maxabs' );
```

#### maxabs( x, y )

Returns the maximum absolute value.

```javascript
var v = maxabs( -4.2, 3.14 );
// returns 4.2

v = maxabs( +0.0, -0.0 );
// returns +0.0
```

If any argument is `NaN`, the function returns `NaN`.

```javascript
var v = maxabs( 4.2, NaN );
// returns NaN

v = maxabs( NaN, 3.14 );
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
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var maxabs = require( '@stdlib/math/base/special/maxabs' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -500.0, 500.0, opts );
var y = uniform( 100, -500.0, 500.0, opts );

logEachMap( 'maxabs(%0.4f,%0.4f) = %0.4f', x, y, maxabs );
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
#include "stdlib/math/base/special/maxabs.h"
```

#### stdlib_base_maxabs( x, y )

Returns the maximum absolute value.

```c
double out = stdlib_base_maxabs( -4.2, 3.14 );
// returns 4.2

out = stdlib_base_maxabs( 0.0, -0.0 );
// returns +0.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **y**: `[in] double` input value.

```c
double stdlib_base_maxabs( const double x, const double y );
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
#include "stdlib/math/base/special/maxabs.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    double x;
    double y;
    double v;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = ( ( (double)rand() / (double)RAND_MAX ) * 1000.0 ) - 500.0;
        y = ( ( (double)rand() / (double)RAND_MAX ) * 1000.0 ) - 500.0;
        v = stdlib_base_maxabs( x, y );
        printf( "x: %lf, y: %lf, maxabs(x, y): %lf\n", x, y, v );
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

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/max]: https://github.com/stdlib-js/math/tree/main/base/special/max

[@stdlib/math/base/special/minabs]: https://github.com/stdlib-js/math/tree/main/base/special/minabs

<!-- </related-links> -->

</section>

<!-- /.links -->
