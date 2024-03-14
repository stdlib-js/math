<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# log1pmx

> Evaluate `ln(1+x) - x`.

<section class="usage">

## Usage

```javascript
var log1pmx = require( '@stdlib/math/base/special/log1pmx' );
```

#### log1pmx( x )

Evaluates `ln(1+x) - x`.

```javascript
var v = log1pmx( 1.1 );
// returns ~-0.358

v = log1pmx( 0.99 );
// returns ~-0.302

v = log1pmx( -0.99 );
// returns ~-3.615

v = log1pmx( -1.1 );
// returns NaN

v = log1pmx( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var incrspace = require( '@stdlib/array/base/incrspace' );
var log1pmx = require( '@stdlib/math/base/special/log1pmx' );

var x = incrspace( 0.0, 10.0, 0.01 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( 'x: %d, f(x): %d', x[ i ], log1pmx( x[ i ] ) );
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
#include "stdlib/math/base/special/log1pmx.h"
```

#### stdlib_base_log1pmx( x )

Evaluates `ln(1+x) - x`.

```c
double out = stdlib_base_log1pmx( 1.1 );
// returns ~-0.358
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_log1pmx( const double x );
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
#include "stdlib/math/base/special/log1pmx.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    double x;
    double v;
    int i;
    
    for ( i = 0; i < 100; i++ ) {
        x = ( (double)rand() / (double)RAND_MAX ) * 10.0;
        v = stdlib_base_log1pmx( x );
        printf( "x: %lf, f(x): %lf\n", x, v );
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
-   <span class="package-name">[`@stdlib/math/base/special/log1p`][@stdlib/math/base/special/log1p]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of 1+x.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/ln]: https://github.com/stdlib-js/math/tree/main/base/special/ln

[@stdlib/math/base/special/log1p]: https://github.com/stdlib-js/math/tree/main/base/special/log1p

<!-- </related-links> -->

</section>

<!-- /.links -->
