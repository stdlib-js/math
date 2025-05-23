<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# Arccovercosine

> Compute the [inverse coversed cosine][inverse-coversed-cosine].

<section class="intro">

The [inverse coversed cosine][inverse-coversed-cosine] is defined as

<!-- <equation class="equation" label="eq:arccovercosine" align="center" raw="\operatorname{acovercos}(\theta) = \arcsin(\theta-1)" alt="Inverse coversed cosine."> -->

```math
\mathop{\mathrm{acovercos}}(\theta) = \arcsin(\theta-1)
```

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var acovercos = require( '@stdlib/math/base/special/acovercos' );
```

#### acovercos( x )

Computes the [inverse coversed cosine][inverse-coversed-cosine].

```javascript
var v = acovercos( 0.0 );
// returns ~-1.5708

v = acovercos( 3.141592653589793/2.0 );
// returns ~0.6075

v = acovercos( 3.141592653589793/6.0 );
// returns ~-0.4966
```

If `x < 0`, `x > 2`, or `x` is `NaN`, the function returns `NaN`.

```javascript
var v = acovercos( -1.0 );
// returns NaN

v = acovercos( 3.14 );
// returns NaN

v = acovercos( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var acovercos = require( '@stdlib/math/base/special/acovercos' );

var x = uniform( 100, 0.0, 2.0, {
    'dtype': 'float64'
});

logEachMap( 'acovercos(%0.4f) = %0.4f', x, acovercos );
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
#include "stdlib/math/base/special/acovercos.h"
```

#### stdlib_base_acovercos( x )

Computes the [inverse coversed cosine][inverse-coversed-cosine] of a double-precision floating-point number.

```c
double out = stdlib_base_acovercos( 3.141592653589793/2.0 );
// returns ~0.6075
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_acovercos( const double x );
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
#include "stdlib/math/base/special/acovercos.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 0.0, 0.27, 0.56, 0.78, 1.67, 1.70, 1.78, 1.80, 1.89, 2.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_acovercos( x[ i ] );
        printf( "acovercos(%lf) = %lf\n", x[ i ], v );
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

-   <span class="package-name">[`@stdlib/math/base/special/acoversin`][@stdlib/math/base/special/acoversin]</span><span class="delimiter">: </span><span class="description">compute the inverse coversed sine.</span>
-   <span class="package-name">[`@stdlib/math/base/special/avercos`][@stdlib/math/base/special/avercos]</span><span class="delimiter">: </span><span class="description">compute the inverse versed cosine.</span>
-   <span class="package-name">[`@stdlib/math/base/special/covercos`][@stdlib/math/base/special/covercos]</span><span class="delimiter">: </span><span class="description">compute the coversed cosine.</span>
-   <span class="package-name">[`@stdlib/math/base/special/vercos`][@stdlib/math/base/special/vercos]</span><span class="delimiter">: </span><span class="description">compute the versed cosine.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[inverse-coversed-cosine]: https://en.wikipedia.org/wiki/Versine

<!-- <related-links> -->

[@stdlib/math/base/special/acoversin]: https://github.com/stdlib-js/math/tree/main/base/special/acoversin

[@stdlib/math/base/special/avercos]: https://github.com/stdlib-js/math/tree/main/base/special/avercos

[@stdlib/math/base/special/covercos]: https://github.com/stdlib-js/math/tree/main/base/special/covercos

[@stdlib/math/base/special/vercos]: https://github.com/stdlib-js/math/tree/main/base/special/vercos

<!-- </related-links> -->

</section>

<!-- /.links -->
