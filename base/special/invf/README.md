<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# invf

> Compute the [multiplicative inverse][multiplicative-inverse] of a single-precision floating-point number.

<section class="intro">

The [multiplicative inverse][multiplicative-inverse] (or **reciprocal**) is defined as

<!-- <equation class="equation" label="eq:multiplicative_inverse" align="center" raw="y = \frac{1}{x}" alt="Multiplicative inverse"> -->

```math
y = \frac{1}{x}
```

<!-- <div class="equation" align="center" data-raw-text="y = \frac{1}{x}" data-equation="eq:multiplicative_inverse">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@11a2410024c2ba7d3681e2c6d6ee91859fc32a28/lib/node_modules/@stdlib/math/base/special/invf/docs/img/equation_multiplicative_inverse.svg" alt="Multiplicative inverse">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var invf = require( '@stdlib/math/base/special/invf' );
```

#### invf( x )

Computes the [multiplicative inverse][multiplicative-inverse] of a single-precision floating-point number `x`.

```javascript
var v = invf( -1.0 );
// returns -1.0

v = invf( 2.0 );
// returns 0.5

v = invf( 0.0 );
// returns Infinity

v = invf( -0.0 );
// returns -Infinity

v = invf( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var invf = require( '@stdlib/math/base/special/invf' );

var opts = {
    'dtype': 'float32'
};
var x = discreteUniform( 100, -50, 50, opts );

logEachMap( 'invf(%0.4f) = %0.4f', x, invf );
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
#include "stdlib/math/base/special/invf.h"
```

#### stdlib_base_invf( x )

Computes the multiplicative inverse of a single-precision floating-point number.

```c
float y = stdlib_base_invf( 2.0f );
// returns 0.5f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_invf( const float x );
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
#include "stdlib/math/base/special/invf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 3.0f, 4.0f, 5.0f, 12.0f };

    float y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_invf( x[ i ] );
        printf( "inv(%f) = %f\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/inv`][@stdlib/math/base/special/inv]</span><span class="delimiter">: </span><span class="description">compute the multiplicative inverse of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[multiplicative-inverse]: https://en.wikipedia.org/wiki/Multiplicative_inverse

<!-- <related-links> -->

[@stdlib/math/base/special/inv]: https://github.com/stdlib-js/math/tree/main/base/special/inv

<!-- </related-links> -->

</section>

<!-- /.links -->
