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

# boxcox1p

> Compute a one-parameter [Box-Cox transformation][box-cox-transformation] of `1+x`.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

A one-parameter [Box-Cox transformation][box-cox-transformation] is defined as

<!-- <equation class="equation" label="eq:boxcox_transformation_one_parameter" align="center" raw="y^{\lambda} = \begin{cases}\frac{(y + 1)^{\lambda} - 1}{\lambda} & \textrm{if}\ \lambda \neq 0 \\ \log(y + 1) & \textrm{if}\ \lambda = 0 \end{cases}" alt="One-Parameter Box-Cox Transformation"> -->

<div class="equation" align="center" data-raw-text="y^{\lambda} = \begin{cases}\frac{(y + 1)^{\lambda} - 1}{\lambda} & \textrm{if}\ \lambda \neq 0 \\ \log(y + 1) & \textrm{if}\ \lambda = 0 \end{cases}" data-equation="eq:boxcox_transformation_one_parameter">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@cd43faf7aaac9e3059ef876713c9433ea6f3818d/lib/node_modules/@stdlib/math/base/special/boxcox1p/docs/img/equation_boxcox_transformation_one_parameter.svg" alt="One-Parameter Box-Cox Transformation" />
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var boxcox1p = require( '@stdlib/math/base/special/boxcox1p' );
```

#### boxcox1p( x, lambda )

Computes a one-parameter [Box-Cox transformation][box-cox-transformation] of `1+x`.

```javascript
var v = boxcox1p( 1.0, 2.5 );
// returns ~1.8627

v = boxcox1p( 4.0, 2.5 );
// returns ~21.9607

v = boxcox1p( 10.0, 2.5 );
// returns ~160.1246

v = boxcox1p( 2.0, 0.0 );
// returns ~1.0986

v = boxcox1p( -1.0, 2.5 );
// returns -0.4

v = boxcox1p( 0.0, -1.0 );
// returns 0.0

v = boxcox1p( -1.0, -1.0 );
// returns -Infinity
```

</section>

<!-- /.usage -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var incrspace = require( '@stdlib/array/base/incrspace' );
var boxcox1p = require( '@stdlib/math/base/special/boxcox1p' );

var x = incrspace( -1.0, 10.0, 1.0 );
var l = incrspace( -0.5, 5.0, 0.5 );

var b;
var i;
var j;
for ( i = 0; i < x.length; i++ ) {
    for ( j = 0; j < l.length; j++ ) {
        b = boxcox1p( x[ i ], l[ j ] );
        console.log( 'boxcox1p(%d, %d) = %d', x[ i ], l[ j ], b );
    }
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
#include "stdlib/math/base/special/boxcox1p.h"
```

#### stdlib_base_boxcox1p( x, lambda )

Computes a one-parameter [Box-Cox transformation][box-cox-transformation] of `1+x`.

```c
double out = stdlib_base_boxcox1p( 1.0, 2.5 );
// returns ~1.8627

out = stdlib_base_boxcox1p( 4.0, 2.5 );
// returns ~21.9607
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **lambda**: `[in] double` power parameter.

```c
double stdlib_base_boxcox1p( const double x, const double lambda );
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
#include "stdlib/math/base/special/boxcox1p.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { -1.0, 10.0, 1.0 };
    const double l[] = { -0.5, 5.0, 0.5 };

    double b;
    int i;
    int j;
    for ( i = 0; i < 3; i++ ) {
        for ( j = 0; j < 3; j++ ) {
            b = stdlib_base_boxcox1p( x[ i ], l[ j ] );
            printf ( "boxcox1p(%lf, %lf) = %lf\n", x[ i ], l[ j ], b );
        }
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

## References

-   Box, G. E. P., and D. R. Cox. 1964. "An Analysis of Transformations." _Journal of the Royal Statistical Society. Series B (Methodological)_ 26 (2). \[Royal Statistical Society, Wiley]: 211–52. <http://www.jstor.org/stable/2984418>.

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/boxcox`][@stdlib/math/base/special/boxcox]</span><span class="delimiter">: </span><span class="description">compute a one-parameter Box-Cox transformation.</span>
-   <span class="package-name">[`@stdlib/math/base/special/boxcox1pinv`][@stdlib/math/base/special/boxcox1pinv]</span><span class="delimiter">: </span><span class="description">compute the inverse of a one-parameter Box-Cox transformation for 1+x.</span>
-   <span class="package-name">[`@stdlib/math/base/special/boxcoxinv`][@stdlib/math/base/special/boxcoxinv]</span><span class="delimiter">: </span><span class="description">compute the inverse of a one-parameter Box-Cox transformation.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[box-cox-transformation]: https://en.wikipedia.org/wiki/Power_transform#Box-Cox_transformation

<!-- <related-links> -->

[@stdlib/math/base/special/boxcox]: https://github.com/stdlib-js/math/tree/main/base/special/boxcox

[@stdlib/math/base/special/boxcox1pinv]: https://github.com/stdlib-js/math/tree/main/base/special/boxcox1pinv

[@stdlib/math/base/special/boxcoxinv]: https://github.com/stdlib-js/math/tree/main/base/special/boxcoxinv

<!-- </related-links> -->

</section>

<!-- /.links -->
