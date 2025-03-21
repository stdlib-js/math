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

# Floor

> Round a double-precision complex floating-point number toward negative infinity.

<section class="usage">

## Usage

```javascript
var cfloor = require( '@stdlib/math/base/special/cfloor' );
```

#### cfloor( z )

Rounds a double-precision complex floating-point number toward negative infinity.

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

var v = cfloor( new Complex128( -4.2, 5.5 ) );
// returns <Complex128>

var re = real( v );
// returns -5.0

var im = imag( v );
// returns 5.0

v = cfloor( new Complex128( 9.99999, 0.1 ) );
// returns <Complex128>

re = real( v );
// returns 9.0

im = imag( v );
// returns 0.0

v = cfloor( new Complex128( 0.0, 0.0 ) );
// returns <Complex128>

re = real( v );
// returns 0.0

im = imag( v );
// returns 0.0

v = cfloor( new Complex128( NaN, NaN ) );
// returns <Complex128>

re = real( v );
// returns NaN

im = imag( v );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var randu = require( '@stdlib/random/base/randu' );
var cfloor = require( '@stdlib/math/base/special/cfloor' );

var re;
var im;
var z;
var w;
var i;

for ( i = 0; i < 100; i++ ) {
    re = ( randu()*100.0 ) - 50.0;
    im = ( randu()*100.0 ) - 50.0;
    z = new Complex128( re, im );
    w = cfloor( z );
    console.log( 'floor(%s) = %s', z.toString(), w.toString() );
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
#include "stdlib/math/base/special/cfloor.h"
```

#### stdlib_base_cfloor( z )

Rounds a double-precision complex floating-point number toward negative infinity.

```c
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/real.h"
#include "stdlib/complex/float64/imag.h"

stdlib_complex128_t z = stdlib_complex128( 2.5, -1.5 );

stdlib_complex128_t out = stdlib_base_cfloor( z );

double re = stdlib_complex128_real( out );
// returns 2.0

double im = stdlib_complex128_imag( out );
// returns -2.0
```

The function accepts the following arguments:

-   **z**: `[in] stdlib_complex128_t` input value.

```c
stdlib_complex128_t stdlib_base_cfloor( const stdlib_complex128_t z );
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
#include "stdlib/math/base/special/cfloor.h"
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
        y = stdlib_base_cfloor( v );
        stdlib_complex128_reim( v, &re1, &im1 );
        stdlib_complex128_reim( y, &re2, &im2 );
        printf( "cfloor(%lf + %lfi) = %lf + %lfi\n", re1, im1, re2, im2 );
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

-   <span class="package-name">[`@stdlib/math/base/special/cceil`][@stdlib/math/base/special/cceil]</span><span class="delimiter">: </span><span class="description">round each component of a double-precision complex floating-point number toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/cfloorn`][@stdlib/math/base/special/cfloorn]</span><span class="delimiter">: </span><span class="description">round each component of a double-precision complex floating-point number to the nearest multiple of 10^n toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/cround`][@stdlib/math/base/special/cround]</span><span class="delimiter">: </span><span class="description">round each component of a double-precision complex floating-point number to the nearest integer.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/cceil]: https://github.com/stdlib-js/math/tree/main/base/special/cceil

[@stdlib/math/base/special/cfloorn]: https://github.com/stdlib-js/math/tree/main/base/special/cfloorn

[@stdlib/math/base/special/cround]: https://github.com/stdlib-js/math/tree/main/base/special/cround

<!-- </related-links> -->

</section>

<!-- /.links -->
