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

# cinv

> Compute the inverse of a double-precision complex floating-point number.

<section class="intro">

The inverse (or reciprocal) of a non-zero complex number `z = a + bi` is defined as

<!-- <equation class="equation" label="eq:complex_inverse" align="center" raw="{\frac {1}{z}}=\frac{\bar{z}}{z{\bar{z}}} = \frac{a}{a^{2}+b^{2}} - \frac{b}{a^2+b^2}i." alt="Complex Inverse" > -->

<div class="equation" align="center" data-raw-text="{\frac {1}{z}}=\frac{\bar{z}}{z{\bar{z}}} = \frac{a}{a^{2}+b^{2}} - \frac{b}{a^2+b^2}i." data-equation="eq:complex_inverse">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@026bc0ee34051ddb44f3222f620bc7a300b9799e/lib/node_modules/@stdlib/math/base/special/cinv/docs/img/equation_complex_inverse.svg" alt="Complex Inverse">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cinv = require( '@stdlib/math/base/special/cinv' );
```

#### cinv( z )

Computes the inverse of a double-precision complex floating-point number.

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

var v = cinv( new Complex128( 2.0, 4.0 ) );
// returns <Complex128>

var re = real( v );
// returns 0.1

var im = imag( v );
// returns -0.2
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var cinv = require( '@stdlib/math/base/special/cinv' );

// Create an array of random numbers:
var arr = new Complex128Array( uniform( 200, -100.0, 100.0 ) );

// Compute the inverse of each number in the array:
logEachMap( '1.0 / (%s) = %s', arr, cinv );
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
#include "stdlib/math/base/special/cinv.h"
```

#### stdlib_base_cinv( z )

Computes the inverse of a double-precision complex floating-point number.

```c
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/real.h"
#include "stdlib/complex/float64/imag.h"

stdlib_complex128_t z = stdlib_complex128( 2.0, 4.0 );

stdlib_complex128_t out = stdlib_base_cinv( z );

double re = stdlib_complex128_real( out );
// returns 0.1

double im = stdlib_complex128_imag( out );
// returns -0.2
```

The function accepts the following arguments:

-   **z**: `[in] stdlib_complex128_t` input value.

```c
stdlib_complex128_t stdlib_base_cinv( const stdlib_complex128_t z );
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
#include "stdlib/math/base/special/cinv.h"
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
        y = stdlib_base_cinv( v );
        stdlib_complex128_reim( v, &re1, &im1 );
        stdlib_complex128_reim( y, &re2, &im2 );
        printf( "cinv(%lf + %lfi) = %lf + %lfi\n", re1, im1, re2, im2 );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

* * *

<section class="references">

## References

-   Smith, Robert L. 1962. "Algorithm 116: Complex Division." _Commun. ACM_ 5 (8). New York, NY, USA: ACM: 435. doi:[10.1145/368637.368661][@smith:1962a].
-   Stewart, G. W. 1985. "A Note on Complex Division." _ACM Trans. Math. Softw._ 11 (3). New York, NY, USA: ACM: 238–41. doi:[10.1145/214408.214414][@stewart:1985a].
-   Priest, Douglas M. 2004. "Efficient Scaling for Complex Division." _ACM Trans. Math. Softw._ 30 (4). New York, NY, USA: ACM: 389–401. doi:[10.1145/1039813.1039814][@priest:2004a].
-   Baudin, Michael, and Robert L. Smith. 2012. "A Robust Complex Division in Scilab." _arXiv_ abs/1210.4539 \[cs.MS] (October): 1–25. [&lt;https://arxiv.org/abs/1210.4539>][@baudin:2012a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/complex/float64/base/div`][@stdlib/complex/float64/base/div]</span><span class="delimiter">: </span><span class="description">divide two complex numbers.</span>
-   <span class="package-name">[`@stdlib/math/base/special/cinvf`][@stdlib/math/base/special/cinvf]</span><span class="delimiter">: </span><span class="description">compute the inverse of a single-precision complex floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@smith:1962a]: https://doi.org/10.1145/368637.368661

[@stewart:1985a]: https://doi.org/10.1145/214408.214414

[@priest:2004a]: https://doi.org/10.1145/1039813.1039814

[@baudin:2012a]: https://arxiv.org/abs/1210.4539

<!-- <related-links> -->

[@stdlib/complex/float64/base/div]: https://github.com/stdlib-js/complex-float64-base-div

[@stdlib/math/base/special/cinvf]: https://github.com/stdlib-js/math/tree/main/base/special/cinvf

<!-- </related-links> -->

</section>

<!-- /.links -->
