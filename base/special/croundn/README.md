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

# croundn

> Round each component of a double-precision complex floating-point number to the nearest multiple of `10^n`.

<section class="usage">

## Usage

```javascript
var croundn = require( '@stdlib/math/base/special/croundn' );
```

#### croundn( z, n )

Rounds each component of a double-precision complex floating-point number to the nearest multiple of `10^n`.

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

var v = croundn( new Complex128( -3.141592653589793, 3.141592653589793 ), -2 );
// returns <Complex128>

var re = real( v );
// returns -3.14

var im = imag( v );
// returns 3.14

v = croundn( new Complex128( -3.141592653589793, 3.141592653589793 ), 0 );
// returns <Complex128>

re = real( v );
// returns -3.0

im = imag( v );
// returns 3.0

v = croundn( new Complex128( -12368.0, 12368.0 ), 3 );
// returns <Complex128>

re = real( v );
// returns -12000.0

im = imag( v );
// returns 12000.0

v = croundn( new Complex128( NaN, NaN ), 3 );
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

    var x = 0.2 + 0.1;
    // returns 0.30000000000000004

    // Should round components to 0.3:
    var v = croundn( new Complex128( x, x ), -16 );
    // returns <Complex128>

    var re = real( v );
    // returns 0.3000000000000001

    var im = imag( v );
    // returns 0.3000000000000001
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/base/uniform' ).factory;
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var floor = require( '@stdlib/math/base/special/floor' );
var croundn = require( '@stdlib/math/base/special/croundn' );

var rand1 = uniform( -5.0, 0.0 );
var rand2 = uniform( -50.0, 50.0 );

var z;
var i;
var n;
for ( i = 0; i < 100; i++ ) {
    z = new Complex128( rand2(), rand2() );
    n = floor( rand1() );
    console.log( 'croundn(%s, %s) = %s', z, n, croundn( z, n ) );
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
#include "stdlib/math/base/special/croundn.h"
```

#### stdlib_base_croundn( z, n )

Rounds each component of a double-precision complex floating-point number to the nearest multiple of `10^n`.

```c
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/real.h"
#include "stdlib/complex/float64/imag.h"

stdlib_complex128_t z = stdlib_complex128( -3.141592653589793, 3.141592653589793 );

stdlib_complex128_t out = stdlib_base_croundn( z, -2 );

double re = stdlib_complex128_real( out );
// returns -3.14

double im = stdlib_complex128_imag( out );
// returns 3.14
```

The function accepts the following arguments:

-   **z**: `[in] stdlib_complex128_t` input value.
-   **n**: `[in] int32_t` integer power of 10.

```c
stdlib_complex128_t stdlib_base_croundn( const stdlib_complex128_t z, const int32_t n );
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
#include "stdlib/math/base/special/croundn.h"
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
        y = stdlib_base_croundn( v, -2 );
        stdlib_complex128_reim( v, &re1, &im1 );
        stdlib_complex128_reim( y, &re2, &im2 );
        printf( "croundn(%lf + %lfi) = %lf + %lfi\n", re1, im1, re2, im2 );
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
-   <span class="package-name">[`@stdlib/math/base/special/cfloorn`][@stdlib/math/base/special/cfloorn]</span><span class="delimiter">: </span><span class="description">round each component of a double-precision complex floating-point number to the nearest multiple of 10^n toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/cround`][@stdlib/math/base/special/cround]</span><span class="delimiter">: </span><span class="description">round each component of a double-precision complex floating-point number to the nearest integer.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/cceiln]: https://github.com/stdlib-js/math/tree/main/base/special/cceiln

[@stdlib/math/base/special/cfloorn]: https://github.com/stdlib-js/math/tree/main/base/special/cfloorn

[@stdlib/math/base/special/cround]: https://github.com/stdlib-js/math/tree/main/base/special/cround

<!-- </related-links> -->

</section>

<!-- /.links -->
