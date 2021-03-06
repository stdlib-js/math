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

# Identity Function

> Evaluate the [identity function][identity-function] of a double-precision [complex][@stdlib/complex/float64] floating-point number.

<section class="intro">

The [identity-function][identity-function] is defined as

<!-- <equation class="equation" label="eq:identity_function" align="center" raw="f(z) = z" alt="Identity function"> -->

<div class="equation" align="center" data-raw-text="f(z) = z" data-equation="eq:identity_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@3ac3ef7b03afae265d5c85a664dc22e0a373c0c2/lib/node_modules/@stdlib/math/base/special/cidentity/docs/img/equation_identity_function.svg" alt="Identity function">
    <br>
</div>

<!-- </equation> -->

for all `z`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cidentity = require( '@stdlib/math/base/special/cidentity' );
```

#### cidentity( z )

Evaluates the [identity function][identity-function] for a double-precision [complex][@stdlib/complex/float64] floating-point number.

```javascript
var Complex128 = require( '@stdlib/complex/float64' );
var real = require( '@stdlib/complex/real' );
var imag = require( '@stdlib/complex/imag' );

var v = cidentity( new Complex128( -1.0, 2.0 ) );
// returns <Complex128>

var re = real( v );
// returns -1.0

var im = imag( v );
// returns 2.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable max-len -->

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var Complex128 = require( '@stdlib/complex/float64' );
var cidentity = require( '@stdlib/math/base/special/cidentity' );

var z;
var i;
for ( i = 0; i < 100; i++ ) {
    z = new Complex128( discreteUniform( -50, 50 ), discreteUniform( -50, 50 ) );
    console.log( 'identity(%s) = %s', z, cidentity( z ) );
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
#include "stdlib/math/base/special/cidentity.h"
```

#### stdlib_base_cidentity( z )

Evaluates the identity function for a double-precision complex floating-point number.

```c
#include <complex.h>

double complex y = stdlib_base_cidentity( 2.0+2.0*I );
// returns 2.0+2.0*I
```

The function accepts the following arguments:

-   **z**: `[in] double complex` input value.

```c
double complex stdlib_base_cidentity( const double complex z );
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
#include "stdlib/math/base/special/cidentity.h"
#include <stdio.h>
#include <complex.h>

int main() {
    double complex x[] = { 3.14+1.0*I, -3.14-1.0*I, 0.0+0.0*I, 0.0/0.0+0.0/0.0*I };

    double complex v;
    double complex y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        v = x[ i ];
        y = stdlib_base_cidentity( v );
        printf( "f(%lf + %lf) = %lf + %lf\n", creal( v ), cimag( v ), creal( y ), cimag( y ) );
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

[identity-function]: https://en.wikipedia.org/wiki/Identity_function

[@stdlib/complex/float64]: https://github.com/stdlib-js/complex-float64

</section>

<!-- /.links -->
