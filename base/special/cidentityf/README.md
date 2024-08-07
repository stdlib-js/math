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

> Evaluate the [identity function][identity-function] of a single-precision [complex][@stdlib/complex/float32/ctor] floating-point number.

<section class="intro">

The [identity-function][identity-function] is defined as

<!-- <equation class="equation" label="eq:identity_function" align="center" raw="f(z) = z" alt="Identity function"> -->

```math
f(z) = z
```

<!-- <div class="equation" align="center" data-raw-text="f(z) = z" data-equation="eq:identity_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@79c18caa8e6697ecbe8bcf813a8d54a470168a75/lib/node_modules/@stdlib/math/base/special/cidentityf/docs/img/equation_identity_function.svg" alt="Identity function">
    <br>
</div> -->

<!-- </equation> -->

for all `z`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cidentityf = require( '@stdlib/math/base/special/cidentityf' );
```

#### cidentityf( z )

Evaluates the [identity function][identity-function] for a single-precision [complex][@stdlib/complex/float32/ctor] floating-point number.

```javascript
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var real = require( '@stdlib/complex/float32/real' );
var imag = require( '@stdlib/complex/float32/imag' );

var v = cidentityf( new Complex64( -1.0, 2.0 ) );
// returns <Complex64>

var re = real( v );
// returns -1.0

var im = imag( v );
// returns 2.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var cidentityf = require( '@stdlib/math/base/special/cidentityf' );

var z;
var i;
for ( i = 0; i < 100; i++ ) {
    z = new Complex64( discreteUniform( -50, 50 ), discreteUniform( -50, 50 ) );
    console.log( 'identity(%s) = %s', z, cidentityf( z ) );
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
#include "stdlib/math/base/special/cidentityf.h"
```

#### stdlib_base_cidentityf( z )

Evaluates the identity function for a single-precision complex floating-point number.

```c
#include <complex.h>

float complex y = stdlib_base_cidentityf( 2.0f+2.0f*I );
// returns 2.0f+2.0f*I
```

The function accepts the following arguments:

-   **z**: `[in] float complex` input value.

```c
float complex stdlib_base_cidentityf( const float complex z );
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
#include "stdlib/math/base/special/cidentityf.h"
#include <stdio.h>
#include <complex.h>

int main( void ) {
    const float complex x[] = { 3.14f+1.0f*I, -3.14f-1.0f*I, 0.0f+0.0f*I, 0.0f/0.0f+0.0f/0.0f*I };

    float complex v;
    float complex y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        v = x[ i ];
        y = stdlib_base_cidentityf( v );
        printf( "f(%f + %f) = %f + %f\n", crealf( v ), cimagf( v ), crealf( y ), cimagf( y ) );
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

-   <span class="package-name">[`@stdlib/math/base/special/cidentity`][@stdlib/math/base/special/cidentity]</span><span class="delimiter">: </span><span class="description">evaluate the identity function for a double-precision complex floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/identityf`][@stdlib/math/base/special/identityf]</span><span class="delimiter">: </span><span class="description">evaluate the identity function for a single-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[identity-function]: https://en.wikipedia.org/wiki/Identity_function

[@stdlib/complex/float32/ctor]: https://github.com/stdlib-js/complex-float32-ctor

<!-- <related-links> -->

[@stdlib/math/base/special/cidentity]: https://github.com/stdlib-js/math/tree/main/base/special/cidentity

[@stdlib/math/base/special/identityf]: https://github.com/stdlib-js/math/tree/main/base/special/identityf

<!-- </related-links> -->

</section>

<!-- /.links -->
