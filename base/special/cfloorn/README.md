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

# cfloorn

> Round each component of a double-precision complex floating-point number to the nearest multiple of `10^n` toward negative infinity.

<section class="usage">

## Usage

```javascript
var cfloorn = require( '@stdlib/math/base/special/cfloorn' );
```

#### cfloorn( z, n )

Rounds each component of a double-precision complex floating-point number to the nearest multiple of `10^n` toward negative infinity.

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

// Round components to 2 decimal places:
var v = cfloorn( new Complex128( -3.141592653589793, 3.141592653589793 ), -2 );
// returns <Complex128>

var re = real( v );
// returns -3.15

var im = imag( v );
// returns 3.14

// If n = 0, `cfloorn` behaves like `cfloor`:
v = cfloorn( new Complex128( -3.141592653589793, 3.141592653589793 ), 0 );
// returns <Complex128>

re = real( v );
// returns -4.0

im = imag( v );
// returns 3.0

// Round components to the nearest thousand:
v = cfloorn( new Complex128( -12368.0, 12368.0 ), 3 );
// returns <Complex128>

re = real( v );
// returns -13000.0

im = imag( v );
// returns 12000.0

v = cfloorn( new Complex128( NaN, NaN ), 0 );
// returns <Complex128>

re = real( v );
// returns NaN

im = imag( v );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When operating on [floating-point numbers][ieee754] in bases other than `2`, rounding to specified digits can be **inexact**. For example,

    ```javascript
    var Complex128 = require( '@stdlib/complex/float64/ctor' );
    var real = require( '@stdlib/complex/float64/real' );
    var imag = require( '@stdlib/complex/float64/imag' );

    var x = -0.2 - 0.1;
    // returns -0.30000000000000004

    // Should round components to 0.3:
    var v = cfloorn( new Complex128( x, x ), -16 );
    // returns <Complex128>

    var re = real( v );
    // returns -0.3000000000000001

    var im = imag( v );
    // returns -0.3000000000000001
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var uniform = require( '@stdlib/random/base/uniform' );
var randint = require( '@stdlib/random/base/discrete-uniform' );
var cfloorn = require( '@stdlib/math/base/special/cfloorn' );

var z;
var w;
var n;
var i;

for ( i = 0; i < 100; i++ ) {
    z = new Complex128( uniform( -50.0, 50.0 ), uniform( -50.0, 50.0 ) );

    n = randint( -5.0, 0.0 );
    w = cfloorn( z, n );

    console.log( 'floorn(%s,%s) = %s', z.toString(), n.toString(), w.toString() );
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
#include "stdlib/math/base/special/cfloorn.h"
```

#### stdlib_base_cfloorn( z, n )

Rounds each component of a double-precision complex floating-point number to the nearest multiple of `10^n` toward negative infinity.

```c
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/real.h"
#include "stdlib/complex/float64/imag.h"

stdlib_complex128_t z = stdlib_complex128( -3.141592653589793, 3.141592653589793 );
stdlib_complex128_t out = stdlib_base_cfloorn( z, -2 );

double re = stdlib_complex128_real( out );
// returns -3.15

double im = stdlib_complex128_imag( out );
// returns 3.14
```

The function accepts the following arguments:

-   **z**: `[in] stdlib_complex128_t` input value.
-   **n**: `[in] int32_t` integer power of 10.

```c
stdlib_complex128_t stdlib_base_cfloorn( const stdlib_complex128_t z, const int32_t n );
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
#include "stdlib/math/base/special/cfloorn.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/reim.h"
#include <stdio.h>

int main() {
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
        y = stdlib_base_cfloorn( v, -2 );
        stdlib_complex128_reim( v, &re1, &im1 );
        stdlib_complex128_reim( y, &re2, &im2 );
        printf( "cfloorn(%lf + %lfi, -2) = %lf + %lfi\n", re1, im1, re2, im2 );
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

-   <span class="package-name">[`@stdlib/math/base/special/cceiln`][@stdlib/math/base/special/cceiln]</span><span class="delimiter">: </span><span class="description">round each component of a double-precision complex floating-point number to the nearest multiple of 10^n toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/cfloor`][@stdlib/math/base/special/cfloor]</span><span class="delimiter">: </span><span class="description">round a double-precision complex floating-point number toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/croundn`][@stdlib/math/base/special/croundn]</span><span class="delimiter">: </span><span class="description">round each component of a double-precision complex floating-point number to the nearest multiple of 10^n.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/cceiln]: https://github.com/stdlib-js/math/tree/main/base/special/cceiln

[@stdlib/math/base/special/cfloor]: https://github.com/stdlib-js/math/tree/main/base/special/cfloor

[@stdlib/math/base/special/croundn]: https://github.com/stdlib-js/math/tree/main/base/special/croundn

<!-- </related-links> -->

</section>

<!-- /.links -->
