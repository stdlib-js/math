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

# cflipsignf

> Return a single-precision complex floating-point number with the same magnitude as `z` and the sign of `y*z`.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var cflipsignf = require( '@stdlib/math/base/special/cflipsignf' );
```

#### cflipsignf( z, y )

Returns a single-precision complex floating-point number with the same magnitude as `z` and the sign of `y*z`.

```javascript
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var real = require( '@stdlib/complex/float32/real' );
var imag = require( '@stdlib/complex/float32/imag' );

var v = cflipsignf( new Complex64( -4.0, 5.0 ), -1.0 );
// returns <Complex64>

var re = real( v );
// returns 4.0

var im = imag( v );
// returns -5.0
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
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var cflipsignf = require( '@stdlib/math/base/special/cflipsignf' );

var rand = uniform( -50.0, 50.0 );

var z;
var y;
var i;
for ( i = 0; i < 100; i++ ) {
    z = new Complex64( rand(), rand() );
    y = rand();
    console.log( 'cflipsignf(%s, %d) = %s', z, y, cflipsignf( z, y ) );
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
#include "stdlib/math/base/special/cflipsignf.h"
```

#### stdlib_base_cflipsignf( z, y )

Returns a single-precision complex floating-point number with the same magnitude as `z` and the sign of `y*z`.

```c
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/real.h"
#include "stdlib/complex/float32/imag.h"

stdlib_complex64_t z = stdlib_complex64( 2.5f, -1.5f );

stdlib_complex64_t out = stdlib_base_cflipsignf( z, -1.0f );

float re = stdlib_complex64_real( out );
// returns -2.5f

float im = stdlib_complex64_imag( out );
// returns 1.5f
```

The function accepts the following arguments:

-   **z**: `[in] stdlib_complex64_t` input value.
-   **y**: `[in] float` number from which to derive the sign.

```c
stdlib_complex64_t stdlib_base_cflipsignf( const stdlib_complex64_t z, const float y );
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
#include "stdlib/math/base/special/cflipsignf.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/reim.h"
#include <stdio.h>

int main( void ) {
    const stdlib_complex64_t x[] = {
        stdlib_complex64( 3.14f, 1.5f ),
        stdlib_complex64( -3.14f, -1.5f ),
        stdlib_complex64( 0.0f, 0.0f ),
        stdlib_complex64( 0.0f/0.0f, 0.0f/0.0f )
    };

    stdlib_complex64_t v;
    stdlib_complex64_t y;
    float re1;
    float im1;
    float re2;
    float im2;
    int i;
    for ( i = 0; i < 4; i++ ) {
        v = x[ i ];
        y = stdlib_base_cflipsignf( v, -1.0f );
        stdlib_complex64_reim( v, &re1, &im1 );
        stdlib_complex64_reim( y, &re2, &im2 );
        printf( "cflipsignf(%f + %fi, %f) = %f + %fi\n", re1, im1, -1.0f, re2, im2 );
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

-   <span class="package-name">[`@stdlib/complex/float32/base/neg`][@stdlib/complex/float32/base/neg]</span><span class="delimiter">: </span><span class="description">negate a single-precision complex floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/cflipsign`][@stdlib/math/base/special/cflipsign]</span><span class="delimiter">: </span><span class="description">return a double-precision complex floating-point number with the same magnitude as `z` and the sign of `y*z`.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/complex/float32/base/neg]: https://github.com/stdlib-js/complex-float32-base-neg

[@stdlib/math/base/special/cflipsign]: https://github.com/stdlib-js/math/tree/main/base/special/cflipsign

<!-- </related-links> -->

</section>

<!-- /.links -->
