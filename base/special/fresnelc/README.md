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

# fresnelc

> Compute the [Fresnel integral][fresnel-integral] C(x).

<section class="intro">

The [Fresnel integral][fresnel-integral] C(x) is defined as

<!-- <equation class="equation" label="eq:fresnel_integral" align="center" raw="C(x) = \int_0^x \cos\left(\frac{\pi}{2} t^2\right)\,\mathrm{d}t." alt="Fresnel integral C(x)"> -->

```math
C(x) = \int_0^x \cos\left(\frac{\pi}{2} t^2\right)\,\mathrm{d}t.
```

<!-- <div class="equation" align="center" data-raw-text="C(x) = \int_0^x \cos\left(\frac{\pi}{2} t^2\right)\,\mathrm{d}t." data-equation="eq:fresnel_integral">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/math/base/special/fresnelc/docs/img/equation_fresnel_integral.svg" alt="Fresnel integral C(x)">
    <br>
</div> -->

<!-- </equation> -->

Some sources define C(x) using t<sup>2</sup> for the argument of the cosine. To get this function, multiply the computed integral by `√(π/2)` and multiply the argument `x` by `√(2/π)`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var fresnelc = require( '@stdlib/math/base/special/fresnelc' );
```

#### fresnelc( x )

Computes the [Fresnel integral][fresnel-integral] C(x).

```javascript
var v = fresnelc( 0.0 );
// returns ~0.0

v = fresnelc( 1.0 );
// returns ~0.780

v = fresnelc( Infinity );
// returns ~0.5

v = fresnelc( -Infinity );
// returns ~-0.5

v = fresnelc( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/base/linspace' );
var fresnelc = require( '@stdlib/math/base/special/fresnelc' );

var x = linspace( 0.0, 10.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( fresnelc( x[ i ] ) );
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
#include "stdlib/math/base/special/fresnelc.h"
```

#### stdlib_base_fresnelc( x )

Computes the [Fresnel integral][fresnel-integral] C(x).

```c
double out = stdlib_base_fresnelc( 0.0 );
// returns ~0.0

out = stdlib_base_fresnelc( 1.0 );
// returns ~0.780
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_fresnelc( const double x );
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
#include "stdlib/math/base/special/fresnelc.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 0.0, 3.14, 5.55, 10.0 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_fresnelc( x[ i ] );
        printf( "fresnelc(%lf) = %lf\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/fresnel`][@stdlib/math/base/special/fresnel]</span><span class="delimiter">: </span><span class="description">compute the Fresnel integrals S(x) and C(x).</span>
-   <span class="package-name">[`@stdlib/math/base/special/fresnels`][@stdlib/math/base/special/fresnels]</span><span class="delimiter">: </span><span class="description">compute the Fresnel integral S(x).</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[fresnel-integral]: https://en.wikipedia.org/wiki/Fresnel_integral

<!-- <related-links> -->

[@stdlib/math/base/special/fresnel]: https://github.com/stdlib-js/math/tree/main/base/special/fresnel

[@stdlib/math/base/special/fresnels]: https://github.com/stdlib-js/math/tree/main/base/special/fresnels

<!-- </related-links> -->

</section>

<!-- /.links -->
