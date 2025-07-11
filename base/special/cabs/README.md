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

# cabs

> Compute the [absolute value][absolute-value] of a double-precision [complex][@stdlib/complex/float64/ctor] floating-point number.

<section class="intro">

The [absolute value][absolute-value] of a [complex][@stdlib/complex/float64/ctor] number is defined as

<!-- <equation class="equation" label="eq:absolute_value_complex" align="center" raw="|a + bi| = \sqrt{a^2 + b^2}" alt="Absolute value"> -->

```math
|a + bi| = \sqrt{a^2 + b^2}
```

<!-- <div class="equation" align="center" data-raw-text="|a + bi| = \sqrt{a^2 + b^2}" data-equation="eq:absolute_value_complex">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d4edb68b52a6c646be5683023c5a24890300727f/lib/node_modules/@stdlib/math/base/special/cabs/docs/img/equation_absolute_value_complex.svg" alt="Absolute value">
    <br>
</div> -->

<!-- </equation> -->

which corresponds to the length of a vector from the origin to a complex value plotted in the complex plane.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cabs = require( '@stdlib/math/base/special/cabs' );
```

#### cabs( z )

Computes an [absolute value][absolute-value] of a double-precision [complex][@stdlib/complex/float64/ctor] floating-point number.

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );

var y = cabs( new Complex128( 5.0, 3.0 ) );
// returns ~5.83
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable max-len -->

<!-- eslint no-undef: "error" -->

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var cabs = require( '@stdlib/math/base/special/cabs' );

var z;
var i;
for ( i = 0; i < 100; i++ ) {
    z = new Complex128( discreteUniform( -50, 50 ), discreteUniform( -50, 50 ) );
    console.log( 'cabs(%s) = %d', z.toString(), cabs( z ) );
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
#include "stdlib/math/base/special/cabs.h"
```

#### stdlib_base_cabs( z )

Computes the [absolute value][absolute-value] of a double-precision complex floating-point number.

```c
#include "stdlib/complex/float64/ctor.h"

stdlib_complex128_t z = stdlib_complex128( 5.0, 3.0 );

double y = stdlib_base_cabs( z );
// returns ~5.83
```

The function accepts the following arguments:

-   **z**: `[in] stdlib_complex128_t` input value.

```c
double stdlib_base_cabs( const stdlib_complex128_t complex z );
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
#include "stdlib/math/base/special/cabs.h"
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

    stdlib_complex128_t v;
    double re;
    double im;
    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        v = x[ i ];
        y = stdlib_base_cabs( v );
        stdlib_complex128_reim( v, &re, &im );
        printf( "cabs(%lf + %lfi) = %lf\n", re, im, y );
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

-   <span class="package-name">[`@stdlib/math/base/special/cabs2`][@stdlib/math/base/special/cabs2]</span><span class="delimiter">: </span><span class="description">compute the squared absolute value of a double-precision complex floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/abs`][@stdlib/math/base/special/abs]</span><span class="delimiter">: </span><span class="description">compute the absolute value of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[absolute-value]: https://en.wikipedia.org/wiki/Absolute_value

[@stdlib/complex/float64/ctor]: https://github.com/stdlib-js/complex-float64-ctor

<!-- <related-links> -->

[@stdlib/math/base/special/cabs2]: https://github.com/stdlib-js/math/tree/main/base/special/cabs2

[@stdlib/math/base/special/abs]: https://github.com/stdlib-js/math/tree/main/base/special/abs

<!-- </related-links> -->

</section>

<!-- /.links -->
