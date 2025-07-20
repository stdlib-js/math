<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# cpolarf

> Compute the [absolute value][@stdlib/math/base/special/cabsf] and [phase][@stdlib/math/base/special/cphasef] of a single-precision complex floating-point number.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cpolarf = require( '@stdlib/math/base/special/cpolarf' );
```

#### cpolarf( z )

Computes the [absolute value][@stdlib/math/base/special/cabsf] and [phase][@stdlib/math/base/special/cphasef] of a single-precision complex floating-point number.

```javascript
var Complex64 = require( '@stdlib/complex/float32/ctor' );

var o = cpolarf( new Complex64( 5.0, 3.0 ) );
// returns [ ~5.83, ~0.5404 ]
```

#### cpolarf.assign( z, out, stride, offset )

Computes the [absolute value][@stdlib/math/base/special/cabsf] and [phase][@stdlib/math/base/special/cphasef] of a single-precision complex floating-point number and assigns results to a provided output array.

```javascript
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var Float32Array = require( '@stdlib/array/float32' );

var out = new Float32Array( 2 );

var v = cpolarf.assign( new Complex64( 5.0, 3.0 ), out, 1, 0 );
// returns <Float32Array>[ ~5.83, ~0.5404 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var cpolarf = require( '@stdlib/math/base/special/cpolarf' );

// Create an array of random numbers:
var arr = new Complex64Array( uniform( 200, -100.0, 100.0 ) );

// Compute the polar form of each number in the array:
logEachMap( 'cpolarf(%s) = [%s]', arr, cpolarf );
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
#include "stdlib/math/base/special/cpolarf.h"
```

#### stdlib_base_cpolarf( z, cabsf, cphasef )

Computes the [absolute value][@stdlib/math/base/special/cabsf] and [phase][@stdlib/math/base/special/cphasef] of a single-precision complex floating-point number.

```c
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/real.h"
#include "stdlib/complex/float32/imag.h"

stdlib_complex64_t z = stdlib_complex64( 5.0f, 3.0f );
float cabsf;
float cphasef;
stdlib_base_cpolarf( z, &cabsf, &cphasef );
```

The function accepts the following arguments:

-   **z**: `[in] stdlib_complex64_t` input value.
-   **cabsf**: `[out] float*` destination for the absolute value.
-   **cphasef**: `[out] float*` destination for the phase value in radians.

```c
void stdlib_base_cpolarf( const stdlib_complex64_t z, float *cabsf, float *cphasef );
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
#include "stdlib/math/base/special/cpolarf.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/reim.h"
#include <stdio.h>

int main( void ) {
    const stdlib_complex64_t x[] = {
        stdlib_complex64( 3.14f, 1.0f ),
        stdlib_complex64( -3.14f, -1.0f ),
        stdlib_complex64( 0.0f, 0.0f ),
        stdlib_complex64( 0.0f/0.0f, 0.0f/0.0f )
    };

    float cphasef;
    float cabsf;
    float re;
    float im;
    int i;
    for ( i = 0; i < 4; i++ ) {
        stdlib_base_cpolarf( x[i], &cabsf, &cphasef );
        stdlib_complex64_reim( x[i], &re, &im );
        printf( "cpolarf(%f + %fi) => cabsf: %f, cphasef: %f\n", re, im, cabsf, cphasef );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/math/base/special/cabsf]: https://github.com/stdlib-js/math/tree/main/base/special/cabsf

[@stdlib/math/base/special/cphasef]: https://github.com/stdlib-js/math/tree/main/base/special/cphasef

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
