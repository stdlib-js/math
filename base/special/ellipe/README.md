<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

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

# ellipe

> Compute the [complete elliptic integral of the second kind][elliptic-integral].

<section class="intro">

The [complete elliptic integral of the second kind][elliptic-integral] is defined as

<!-- <equation class="equation" label="eq:complete_elliptic_integral_second_kind" align="center" raw="E(m)=\int_0^{\pi/2} \sqrt{1 - m (\sin\theta)^2} d\theta" alt="Complete elliptic integral of the second kind."> -->

```math
E(m)=\int_0^{\pi/2} \sqrt{1 - m (\sin\theta)^2} d\theta
```

<!-- <div class="equation" align="center" data-raw-text="E(m)=\int_0^{\pi/2} \sqrt{1 - m (\sin\theta)^2} d\theta" data-equation="eq:complete_elliptic_integral_second_kind">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@129e5a32ce2af2ed694daf2e9d4214255e60c42a/lib/node_modules/@stdlib/math/base/special/ellipe/docs/img/equation_complete_elliptic_integral_second_kind.svg" alt="Complete elliptic integral of the second kind.">
    <br>
</div> -->

<!-- </equation> -->

where the parameter `m` is related to the modulus `k` by `m = k^2`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var ellipe = require( '@stdlib/math/base/special/ellipe' );
```

#### ellipe( m )

Computes the [complete elliptic integral of the second kind][elliptic-integral].

```javascript
var v = ellipe( 0.5 );
// returns ~1.351

v = ellipe( -1.0 );
// returns ~1.910

v = ellipe( 2.0 );
// returns NaN

v = ellipe( Infinity );
// returns NaN

v = ellipe( -Infinity );
// returns NaN

v = ellipe( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This function is valid for `-∞ < m <= 1`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var ellipe = require( '@stdlib/math/base/special/ellipe' );

var opts = {
    'dtype': 'float64'
};
var m = uniform( 100, -1.0, 1.0, opts );

logEachMap( 'ellipe(%0.4f) = %0.4f', m, ellipe );
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
#include "stdlib/math/base/special/ellipe.h"
```

#### stdlib_base_ellipe( m )

Computes the [complete elliptic integral of the second kind][elliptic-integral].

```c
double out = stdlib_base_ellipe( 0.5 );
// returns ~1.351

out = stdlib_base_ellipe( -1.0 );
// returns ~1.910
```

The function accepts the following arguments:

-   **m**: `[in] double` input value.

```c
double stdlib_base_ellipe( const double m );
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
#include "stdlib/math/base/special/ellipe.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    double m;
    double v;
    int i;

    for ( i = 0; i < 100; i++ ) {
        m = -1.0 + ( ( (double)rand() / (double)RAND_MAX ) * 2.0 );
        v = stdlib_base_ellipe( m );
        printf( "ellipe(%lf) = %lf\n", m, v );
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

-   Fukushima, Toshio. 2009. "Fast computation of complete elliptic integrals and Jacobian elliptic functions." _Celestial Mechanics and Dynamical Astronomy_ 105 (4): 305. doi:[10.1007/s10569-009-9228-z][@fukushima:2009a].
-   Fukushima, Toshio. 2015. "Precise and fast computation of complete elliptic integrals by piecewise minimax rational function approximation." _Journal of Computational and Applied Mathematics_ 282 (July): 71–76. doi:[10.1016/j.cam.2014.12.038][@fukushima:2015a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/ellipj`][@stdlib/math/base/special/ellipj]</span><span class="delimiter">: </span><span class="description">compute the Jacobi elliptic functions sn, cn, and dn.</span>
-   <span class="package-name">[`@stdlib/math/base/special/ellipk`][@stdlib/math/base/special/ellipk]</span><span class="delimiter">: </span><span class="description">compute the complete elliptic integral of the first kind.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[elliptic-integral]: https://en.wikipedia.org/wiki/Elliptic_integral

[@fukushima:2009a]: https://doi.org/10.1007/s10569-009-9228-z

[@fukushima:2015a]: https://doi.org/10.1016/j.cam.2014.12.038

<!-- <related-links> -->

[@stdlib/math/base/special/ellipj]: https://github.com/stdlib-js/math/tree/main/base/special/ellipj

[@stdlib/math/base/special/ellipk]: https://github.com/stdlib-js/math/tree/main/base/special/ellipk

<!-- </related-links> -->

</section>

<!-- /.links -->
