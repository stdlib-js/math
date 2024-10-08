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

# Gamma Delta Ratio

> Compute the ratio of two [gamma][@stdlib/math/base/special/gamma] functions.

<section class="usage">

## Usage

```javascript
var gammaDeltaRatio = require( '@stdlib/math/base/special/gamma-delta-ratio' );
```

#### gammaDeltaRatio( z, delta )

Computes the ratio of two [gamma functions][@stdlib/math/base/special/gamma]. Specifically, the function evaluates `Γ( z ) / Γ( z + delta )`.

```javascript
var y = gammaDeltaRatio( 2.0, 3.0 );
// returns ~0.042

y = gammaDeltaRatio( 4.0, 0.5 );
// returns ~0.516

y = gammaDeltaRatio( 100.0, 0.0 );
// returns 1.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var gammaDeltaRatio = require( '@stdlib/math/base/special/gamma-delta-ratio' );

var delta;
var z;
var i;

for ( i = 0; i < 100; i++ ) {
    z = randu()*10.0;
    delta = randu()*10.0;
    console.log( 'gamma( %d ) / gamma( %d + %d ) = %d', z, z, delta, gammaDeltaRatio( z, delta ) );
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
#include "stdlib/math/base/special/gamma_delta_ratio.h"
```

#### stdlib_base_gamma_delta_ratio( z, delta )

Computes the ratio of two [gamma functions][@stdlib/math/base/special/gamma]. Specifically, the function evaluates `Γ( z ) / Γ( z + delta )`.

```c
double out = stdlib_base_gamma_delta_ratio( 2.0, 3.0 );
// returns ~0.042

out = stdlib_base_gamma_delta_ratio( 4.0, 0.5 );
// returns ~0.516
```

The function accepts the following arguments:

-   **z**: `[in] double` first gamma parameter.
-   **delta**: `[in] double` difference.

```c
double stdlib_base_gamma_delta_ratio( const double z, const double delta );
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
#include "stdlib/math/base/special/gamma_delta_ratio.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    double delta;
    double out;
    double z;
    int i;

    for ( i = 0; i < 100; i++ ) {
        z = (double)rand() * 10.0;
        delta = (double)rand() * 10.0;
        out = stdlib_base_gamma_delta_ratio( z, delta );
        printf( "gamma_delta_ratio(%lf, %lf) = %lf\n", z, delta, out );
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

-   <span class="package-name">[`@stdlib/math/base/special/gamma`][@stdlib/math/base/special/gamma]</span><span class="delimiter">: </span><span class="description">gamma function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/gamma]: https://github.com/stdlib-js/math/tree/main/base/special/gamma

<!-- </related-links> -->

</section>

<!-- /.links -->
