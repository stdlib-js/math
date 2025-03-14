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

# cflipsign

> Return a double-precision complex floating-point number with the same magnitude as `z` and the sign of `y*z`.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var cflipsign = require( '@stdlib/math/base/special/cflipsign' );
```

#### cflipsign( z, y )

Returns a double-precision complex floating-point number with the same magnitude as `z` and the sign of `y*z`.

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

var v = cflipsign( new Complex128( -4.2, 5.5 ), -1.0 );
// returns <Complex128>

var re = real( v );
// returns 4.2

var im = imag( v );
// returns -5.5
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
var uniform = require( '@stdlib/random/base/uniform' ).factory;
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var cflipsign = require( '@stdlib/math/base/special/cflipsign' );

var rand = uniform( -50.0, 50.0 );

var z;
var y;
var i;
for ( i = 0; i < 100; i++ ) {
    z = new Complex128( rand(), rand() );
    y = rand();
    console.log( 'cflipsign(%s, %d) = %s', z, y, cflipsign( z, y ) );
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
#include "stdlib/math/base/special/cflipsign.h"
```

#### stdlib_base_cflipsign( z, y )

Returns a double-precision complex floating-point number with the same magnitude as `z` and the sign of `y*z`.

```c
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/real.h"
#include "stdlib/complex/float64/imag.h"

stdlib_complex128_t z = stdlib_complex128( 2.5, -1.5 );

stdlib_complex128_t out = stdlib_base_cflipsign( z, -1.0 );

double re = stdlib_complex128_real( out );
// returns -2.5

double im = stdlib_complex128_imag( out );
// returns 1.5
```

The function accepts the following arguments:

-   **z**: `[in] stdlib_complex128_t` input value.
-   **y**: `[in] double` number from which to derive the sign.

```c
stdlib_complex128_t stdlib_base_cflipsign( const stdlib_complex128_t z, const double y );
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
#include "stdlib/math/base/special/cflipsign.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/reim.h"
#include <stdio.h>

int main( void ) {
    const stdlib_complex128_t x[] = {
        stdlib_complex128( 3.14, 1.5 ),
        stdlib_complex128( -3.14, -1.5 ),
        stdlib_complex128( 0.0, 0.0 ),
        stdlib_complex128( 0.0/0.0, 0.0/0.0 )
    };

    stdlib_complex128_t v;
    stdlib_complex128_t y;
    double re1;
    double im1;
    double re2;
    double im2;
    int i;
    for ( i = 0; i < 4; i++ ) {
        v = x[ i ];
        y = stdlib_base_cflipsign( v, -1.0 );
        stdlib_complex128_reim( v, &re1, &im1 );
        stdlib_complex128_reim( y, &re2, &im2 );
        printf( "cflipsign(%lf + %lfi, %lf) = %lf + %lfi\n", re1, im1, -1.0, re2, im2 );
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

-   <span class="package-name">[`@stdlib/complex/float64/base/neg`][@stdlib/complex/float64/base/neg]</span><span class="delimiter">: </span><span class="description">negate a double-precision complex floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/csignum`][@stdlib/math/base/special/csignum]</span><span class="delimiter">: </span><span class="description">evaluate the signum function of a double-precision complex floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/complex/float64/base/neg]: https://github.com/stdlib-js/complex-float64-base-neg

[@stdlib/math/base/special/csignum]: https://github.com/stdlib-js/math/tree/main/base/special/csignum

<!-- </related-links> -->

</section>

<!-- /.links -->
