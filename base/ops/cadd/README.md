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
var Complex128 = require( '@stdlib/complex/float64' );
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
var Complex128 = require( '@stdlib/complex/float64' );
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
#include <complex.h>

double complex z = 2.5 - 1.5*I;

double complex out = stdlib_base_cadd( z, z );
// returns 5.0-3.0*I
```

The function accepts the following arguments:

-   **z1**: `[in] double complex` input value.
-   **z2**: `[in] double complex` input value.

```c
double complex stdlib_base_cadd( const double complex z1, const double complex z2 );
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
#include <stdio.h>
#include <complex.h>

int main() {
    double complex x[] = { 3.14+1.5*I, -3.14-1.5*I, 0.0+0.0*I, 0.0/0.0+0.0/0.0*I };

    double complex v;
    double complex y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        v = x[ i ];
        y = stdlib_base_cadd( v, v );
        printf( "z = %lf + %lfi\ncadd(z, z) = %lf + %lfi\n", creal( v ), cimag( v ), creal( y ), cimag( y ) );
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
-   <span class="package-name">[`@stdlib/math/base/ops/cmul`][@stdlib/math/base/ops/cmul]</span><span class="delimiter">: </span><span class="description">multiply two complex numbers.</span>
-   <span class="package-name">[`@stdlib/math/base/ops/csub`][@stdlib/math/base/ops/csub]</span><span class="delimiter">: </span><span class="description">subtract two complex numbers.</span>

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
