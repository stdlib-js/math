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

# cpolar

> Compute the [absolute value][@stdlib/math/base/special/cabs] and [phase][@stdlib/math/base/special/cphase] of a double-precision complex floating-point number.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cpolar = require( '@stdlib/math/base/special/cpolar' );
```

#### cpolar( z )

Computes the [absolute value][@stdlib/math/base/special/cabs] and [phase][@stdlib/math/base/special/cphase] of a double-precision complex floating-point number.

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );

var o = cpolar( new Complex128( 5.0, 3.0 ) );
// returns [ ~5.83, ~0.5404 ]
```

#### cpolar.assign( z, out, stride, offset )

Computes the [absolute value][@stdlib/math/base/special/cabs] and [phase][@stdlib/math/base/special/cphase] of a double-precision complex floating-point number and assigns results to a provided output array.

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Float64Array = require( '@stdlib/array/float64' );

var out = new Float64Array( 2 );

var v = cpolar.assign( new Complex128( 5.0, 3.0 ), out, 1, 0 );
// returns <Float64Array>[ ~5.83, ~0.5404 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var cpolar = require( '@stdlib/math/base/special/cpolar' );

var re;
var im;
var z;
var o;
var i;

for ( i = 0; i < 100; i++ ) {
    re = round( randu()*100.0 ) - 50.0;
    im = round( randu()*100.0 ) - 50.0;
    z = new Complex128( re, im );
    o = cpolar( z );
    z = z.toString();
    console.log( 'abs(%s) = %d. arg(%s) = %d', z, o[0], z, o[1] );
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
#include "stdlib/math/base/special/cpolar.h"
```

#### stdlib_base_cpolar( z, cabs, cphase )

Computes the [absolute value][@stdlib/math/base/special/cabs] and [phase][@stdlib/math/base/special/cphase] of a double-precision complex floating-point number.

```c
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/real.h"
#include "stdlib/complex/float64/imag.h"

stdlib_complex128_t z = stdlib_complex128( 5.0, 3.0 );
double cabs;
double cphase;
stdlib_base_cpolar( z, &cabs, &cphase );
```

The function accepts the following arguments:

-   **z**: `[in] stdlib_complex128_t` input value.
-   **cabs**: `[out] double*` destination for the absolute value.
-   **cphase**: `[out] double*` destination for the phase value in radians.

```c
void stdlib_base_cpolar( const stdlib_complex128_t z, double *cabs, double *cphase );
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
#include "stdlib/math/base/special/cpolar.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/reim.h"
#include <stdio.h>

int main( void ) {
    const stdlib_complex128_t x[] = {
        stdlib_complex128( 3.14, 1.0 ),
        stdlib_complex128( -3.14, -1.0 ),
        stdlib_complex128( 0.0, 0.0 ),
        stdlib_complex128( 0.0/0.0, 0.0/0.0 )
    };

    double cphase;
    double cabs;
    double re;
    double im;
    int i;
    for ( i = 0; i < 4; i++ ) {
        stdlib_base_cpolar( x[i], &cabs, &cphase );
        stdlib_complex128_reim( x[i], &re, &im );
        printf( "cpolar(%lf + %lfi) => cabs: %lf, cphase: %lf\n", re, im, cabs, cphase );
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

-   <span class="package-name">[`@stdlib/math/base/special/cabs`][@stdlib/math/base/special/cabs]</span><span class="delimiter">: </span><span class="description">compute the absolute value of a double-precision complex floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/cphase`][@stdlib/math/base/special/cphase]</span><span class="delimiter">: </span><span class="description">compute the argument of a double-precision complex floating-point number in radians.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/math/base/special/cabs]: https://github.com/stdlib-js/math/tree/main/base/special/cabs

[@stdlib/math/base/special/cphase]: https://github.com/stdlib-js/math/tree/main/base/special/cphase

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
