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

# Alpha Max Plus Beta Min

> Compute the [hypotenuse][hypotenuse] using the [alpha max plus beta min algorithm][alpha-max-plus-beta-min].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var ampbm = require( '@stdlib/math/base/special/fast/alpha-max-plus-beta-min' );
```

#### ampbm( x, y )

Computes the [hypotenuse][hypotenuse] using the [alpha max plus beta min algorithm][alpha-max-plus-beta-min].

```javascript
var h = ampbm( -5.0, 12.0 );
// returns ~13.5
```

#### ampbm.factory( alpha, beta, \[nonnegative\[, ints]] )

Returns a function for computing the [hypotenuse][hypotenuse] using coefficients `alpha` and `beta`.

```javascript
var hypot = ampbm.factory( 1.0, 0.5 );

var h = hypot( -5.0, 12.0 );
// returns 14.5
```

If the returned function should only expect nonnegative arguments, set the `nonnegative` argument to `true`.

```javascript
var hypot = ampbm.factory( 1.0, 0.5, true );

var h = hypot( 5.0, 12.0 );
// returns 14.5
```

If the returned function should only expect signed 32-bit integers, set the `ints` argument to `true`.

```javascript
var hypot = ampbm.factory( 1.0, 0.5, false, true );

var h = hypot( -5.0, 12.0 );
// returns 14
```

If the returned function should only expect unsigned 32-bit integer valued arguments, set the `nonnegative` and `ints` arguments to `true`.

```javascript
var hypot = ampbm.factory( 1.0, 0.5, true, true );

var h = hypot( 5.0, 12.0 );
// returns 14
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The algorithm computes only an **approximation**. For precise results, use [`hypot`][@stdlib/math/base/special/hypot].

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var ampbm = require( '@stdlib/math/base/special/fast/alpha-max-plus-beta-min' );

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 100, -50, 50, opts );
var y = discreteUniform( 100, -50, 50, opts );

logEachMap( 'hypot(%d,%d) = %0.4f', x, y, ampbm );
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
#include "stdlib/math/base/special/fast/alpha_max_plus_beta_min.h"
```

#### stdlib_base_fast_ampbm( x, y )

Computes the hypotenuse using the alpha max plus beta min algorithm.

```c
double h = stdlib_base_fast_ampbm( -5.0, 12.0 );
// returns ~13.5
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
#include "stdlib/math/base/special/fast/alpha_max_plus_beta_min.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 3.0, 4.0, 5.0, 12.0 };

    double y;
    int i;
    for ( i = 0; i < 4; i += 2 ) {
        y = stdlib_base_fast_ampbm( x[ i ], x[ i + 1 ] );
        printf( "ampbm(%lf, %lf) = %lf\n", x[ i ], x[ i + 1 ], y );
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

-   Lyons, Richard G. 2011. _Understanding Digital Signal Processing, 3rd Edition_. Prentice Hall.

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/hypot`][@stdlib/math/base/special/hypot]</span><span class="delimiter">: </span><span class="description">compute the hypotenuse avoiding overflow and underflow.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[hypotenuse]: https://en.wikipedia.org/wiki/Pythagorean_theorem

[alpha-max-plus-beta-min]: https://en.wikipedia.org/wiki/Alpha_max_plus_beta_min_algorithm

[@stdlib/math/base/special/hypot]: https://github.com/stdlib-js/math/tree/main/base/special/hypot

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
