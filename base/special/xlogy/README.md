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

# xlogy

> Compute `x * ln(y)` so that the result is `0` if `x = 0`.

<section class="usage">

## Usage

```javascript
var xlogy = require( '@stdlib/math/base/special/xlogy' );
```

#### xlogy( x, y )

Computes `x * ln(y)` so that the result is `0` if `x = 0`.

```javascript
var out = xlogy( 3.0, 2.0 );
// returns ~2.079

out = xlogy( 1.5, 5.9 );
// returns ~2.662

out = xlogy( 0.9, 1.0 );
// returns 0.0

out = xlogy( 0.0, -2.0 );
// returns 0.0

out = xlogy( 1.5, NaN );
// returns NaN

out = xlogy( 0.0, NaN );
// returns NaN

out = xlogy( NaN, 2.3 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var xlogy = require( '@stdlib/math/base/special/xlogy' );

var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    x = randu();
    if ( x < 0.5 ) {
        x = 0.0;
    }
    y = ( randu() * 20.0 ) - 5.0;
    console.log( 'xlogy(%d, %d) = %d', x, y, xlogy( x, y ) );
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
#include "stdlib/math/base/special/xlogy.h"
```

#### stdlib_base_xlogy( x, y )

Computes `x * ln(y)` so that the result is `0` if `x = 0`.

```c
double v = stdlib_base_xlogy( 3.0, 2.0 );
// returns ~2.079
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **y**: `[in] double` input value.

```c
double stdlib_base_xlogy( const double x, const double y );
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
#include "stdlib/math/base/special/xlogy.h"
#include <stdio.h>
#include <stdlib.h>

int main( void ) {
    double out;
    double x;
    double y;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = ( (double)rand() / (double)RAND_MAX ) * 100.0;
        y = ( (double)rand() / (double)RAND_MAX ) * 5.0;
        out = stdlib_base_xlogy( x, y );
        printf( "xlogy(%lf, %lf) = %lf\n", x, y, out );
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

-   <span class="package-name">[`@stdlib/math/base/special/ln`][@stdlib/math/base/special/ln]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/xlog1py`][@stdlib/math/base/special/xlog1py]</span><span class="delimiter">: </span><span class="description">compute `x * ln(y+1)` so that the result is `0` if `x = 0`.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/ln]: https://github.com/stdlib-js/math/tree/main/base/special/ln

[@stdlib/math/base/special/xlog1py]: https://github.com/stdlib-js/math/tree/main/base/special/xlog1py

<!-- </related-links> -->

</section>

<!-- /.links -->
