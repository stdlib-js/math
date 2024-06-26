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

# cadd

> Add two double-precision complex floating-point numbers.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cadd = require( '@stdlib/math/base/ops/cadd' );
```

#### cadd( z1, z2 )

Adds two double-precision complex floating-point numbers.

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/real' );
var imag = require( '@stdlib/complex/imag' );

var z = new Complex128( -1.5, 2.5 );

var v = cadd( z, z );
// returns <Complex128>

var re = real( v );
// returns -3.0

var im = imag( v );
// returns 5.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var cadd = require( '@stdlib/math/base/ops/cadd' );

var rand;
var z1;
var z2;
var z3;
var i;

rand = discreteUniform( -50, 50 );
for ( i = 0; i < 100; i++ ) {
    z1 = new Complex128( rand(), rand() );
    z2 = new Complex128( rand(), rand() );
    z3 = cadd( z1, z2 );
    console.log( '(%s) + (%s) = %s', z1.toString(), z2.toString(), z3.toString() );
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
#include "stdlib/math/base/ops/cadd.h"
```

#### stdlib_base_cadd( z1, z2 )

Adds two double-precision complex floating-point numbers.

```c
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/real.h"
#include "stdlib/complex/imag.h"

stdlib_complex128_t z = stdlib_complex128( 3.0, -2.0 );

stdlib_complex128_t out = stdlib_base_cadd( z, z );

double re = stdlib_real( out );
// returns 6.0

double im = stdlib_imag( out );
// returns -4.0
```

The function accepts the following arguments:

-   **z1**: `[in] stdlib_complex128_t` input value.
-   **z2**: `[in] stdlib_complex128_t` input value.

```c
stdlib_complex128_t stdlib_base_cadd( const stdlib_complex128_t z1, const stdlib_complex128_t z2 );
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
#include "stdlib/math/base/ops/cadd.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/reim.h"
#include <stdio.h>

int main( void ) {
    const stdlib_complex128_t x[] = {
        stdlib_complex128( 3.14, 1.5 ),
        stdlib_complex128( -3.14, 1.5 ),
        stdlib_complex128( 0.0, -0.0 ),
        stdlib_complex128( 0.0/0.0, 0.0/0.0 )
    };

    stdlib_complex128_t v;
    stdlib_complex128_t y;
    double re;
    double im;
    int i;
    for ( i = 0; i < 4; i++ ) {
        v = x[ i ];
        stdlib_reim( v, &re, &im );
        printf( "z = %lf + %lfi\n", re, im );

        y = stdlib_base_cadd( v, v );
        stdlib_reim( y, &re, &im );
        printf( "cadd(z, z) = %lf + %lfi\n", re, im );
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

-   <span class="package-name">[`@stdlib/math/base/ops/cdiv`][@stdlib/math/base/ops/cdiv]</span><span class="delimiter">: </span><span class="description">divide two complex numbers.</span>
-   <span class="package-name">[`@stdlib/math/base/ops/cmul`][@stdlib/math/base/ops/cmul]</span><span class="delimiter">: </span><span class="description">multiply two double-precision complex floating-point numbers.</span>
-   <span class="package-name">[`@stdlib/math/base/ops/csub`][@stdlib/math/base/ops/csub]</span><span class="delimiter">: </span><span class="description">subtract two double-precision complex floating-point numbers.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/ops/cdiv]: https://github.com/stdlib-js/math/tree/main/base/ops/cdiv

[@stdlib/math/base/ops/cmul]: https://github.com/stdlib-js/math/tree/main/base/ops/cmul

[@stdlib/math/base/ops/csub]: https://github.com/stdlib-js/math/tree/main/base/ops/csub

<!-- </related-links> -->

</section>

<!-- /.links -->
