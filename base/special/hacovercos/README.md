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

# Hacovercosine

> Compute the half-value [coversed cosine][coversed-cosine].

<section class="intro">

The half-value [coversed cosine][coversed-cosine] is defined as

<!-- <equation class="equation" label="eq:hacovercosine" align="center" raw="\operatorname{hacovercos}(\theta) = \frac{1 + \sin \theta}{2}" alt="Half-value coversed cosine."> -->

```math
\mathop{\mathrm{hacovercos}}(\theta) = \frac{1 + \sin \theta}{2}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{hacovercos}(\theta) = \frac{1 + \sin \theta}{2}" data-equation="eq:hacovercosine">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/hacovercos/docs/img/equation_hacovercosine.svg" alt="Half-value coversed cosine.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var hacovercos = require( '@stdlib/math/base/special/hacovercos' );
```

#### hacovercos( x )

Computes the half-value [coversed cosine][coversed-cosine] (in radians).

```javascript
var v = hacovercos( 0.0 );
// returns 0.5

v = hacovercos( 3.141592653589793/2.0 );
// returns 1.0

v = hacovercos( -3.141592653589793/6.0 );
// returns 0.25
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var TWO_PI = require( '@stdlib/constants/float64/two-pi' );
var hacovercos = require( '@stdlib/math/base/special/hacovercos' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, 0.0, TWO_PI, opts );

logEachMap( 'hacovercos(%0.4f) = %0.4f', x, hacovercos );
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
#include "stdlib/math/base/special/hacovercos.h"
```

#### stdlib_base_hacovercos( x )

Computes the half-value [coversed cosine][coversed-cosine] (in radians).

```c
double out = stdlib_base_hacovercos( 0.0 );
// returns 0.5

out = stdlib_base_hacovercos( 3.141592653589793 / 2.0 );
// returns 1.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_hacovercos( const double x );
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
#include "stdlib/math/base/special/hacovercos.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 0.0, 0.523, 0.785, 1.047, 3.14 };

    double y;
    int i;
    for ( i = 0; i < 5; i++ ) {
        y = stdlib_base_hacovercos( x[ i ] );
        printf( "hacovercos(%lf) = %lf\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/hacoversin`][@stdlib/math/base/special/hacoversin]</span><span class="delimiter">: </span><span class="description">compute the half-value coversed sine.</span>
-   <span class="package-name">[`@stdlib/math/base/special/havercos`][@stdlib/math/base/special/havercos]</span><span class="delimiter">: </span><span class="description">compute the half-value versed cosine.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[coversed-cosine]: https://en.wikipedia.org/wiki/Versine

<!-- <related-links> -->

[@stdlib/math/base/special/hacoversin]: https://github.com/stdlib-js/math/tree/main/base/special/hacoversin

[@stdlib/math/base/special/havercos]: https://github.com/stdlib-js/math/tree/main/base/special/havercos

<!-- </related-links> -->

</section>

<!-- /.links -->
