<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# rcbrt

> Compute the reciprocal of the principal [cube root][cube-root] of a double-precision floating-point number.

<section class="intro">

The reciprocal of the principal [cube root][cube-root] is defined as

<!-- <equation class="equation" label="eq:reciprocal_cube_root" align="center" raw="\operatorname{rcbrt}(x)=\frac{1}{\sqrt[3]{x}}" alt="Reciprocal cube root"> -->

```math
\mathop{\mathrm{rcbrt}}(x)=\frac{1}{\sqrt[3]{x}}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{rcbrt}(x)=\frac{1}{\sqrt[3]{x}}" data-equation="eq:reciprocal_cube_root">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@b569df0e375cb7d535781320bf5e2299a0fbff25/lib/node_modules/@stdlib/math/base/special/rcbrt/docs/img/equation_reciprocal_cube_root.svg" alt="Reciprocal cube root">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var rcbrt = require( '@stdlib/math/base/special/rcbrt' );
```

#### rcbrt( x )

Computes the reciprocal (inverse) cube root of a double-precision floating-point number.

```javascript
var v = rcbrt( 1.0 );
// returns 1.0

v = rcbrt( 8.0 );
// returns 0.5

v = rcbrt( 1000.0 );
// returns 0.1

v = rcbrt( 0.0 );
// returns Infinity

v = rcbrt( NaN );
// returns NaN

v = rcbrt( Infinity );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var rcbrt = require( '@stdlib/math/base/special/rcbrt' );

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 100, 0, 100, opts );

logEachMap( 'rcbrt(%d) = %0.4f', x, rcbrt );
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
#include "stdlib/math/base/special/rcbrt.h"
```

#### stdlib_base_rcbrt( x )

Computes the reciprocal (inverse) [cube root][cube-root] of a double-precision floating-point number.

```c
double y = stdlib_base_rcbrt( 8.0 );
// returns 0.5
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_rcbrt( const double x );
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
#include "stdlib/math/base/special/rcbrt.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 3.14, 9.0, 0.0, 0.0/0.0 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_rcbrt( x[ i ] );
        printf( "rcbrt(%lf) = %lf\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/cbrt`][@stdlib/math/base/special/cbrt]</span><span class="delimiter">: </span><span class="description">compute the cube root of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[cube-root]: https://en.wikipedia.org/wiki/Cube_root

<!-- <related-links> -->

[@stdlib/math/base/special/cbrt]: https://github.com/stdlib-js/math/tree/main/base/special/cbrt

<!-- </related-links> -->

</section>

<!-- /.links -->
