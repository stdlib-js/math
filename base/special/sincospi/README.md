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

# sincospi

> Simultaneously compute the [sine][@stdlib/math/base/special/sin] and [cosine][@stdlib/math/base/special/cos] of a number times [π][@stdlib/constants/float64/pi].

<section class="usage">

## Usage

```javascript
var sincospi = require( '@stdlib/math/base/special/sincospi' );
```

#### sincospi( x )

Simultaneously computes the [sine][@stdlib/math/base/special/sin] and [cosine][@stdlib/math/base/special/cos] of a `number` times [π][@stdlib/constants/float64/pi] more accurately than `sincos(pi*x)`, especially for large `x`.

```javascript
var v = sincospi( 0.0 );
// returns [ 0.0, 1.0 ]

v = sincospi( 0.5 );
// returns [ 1.0, 0.0 ]

v = sincospi( 0.1 );
// returns [ ~0.309, ~0.951 ]

v = sincospi( NaN );
// returns [ NaN, NaN ]
```

#### sincospi( x, out, stride, offset )

Simultaneously computes the [sine][@stdlib/math/base/special/sin] and [cosine][@stdlib/math/base/special/cos] of a `number` times [π][@stdlib/constants/float64/pi] more accurately than `sincos(pi*x)`, especially for large `x`, and assigns results to a provided output array.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var out = new Float64Array( 2 );

var v = sincospi.assign( 0.0, out, 1, 0 );
// returns <Float64Array>[ 0.0, 1.0 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/base/linspace' );
var sincospi = require( '@stdlib/math/base/special/sincospi' );

var x = linspace( 0.0, 2.0, 101 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( sincospi( x[ i ] ) );
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
#include "stdlib/math/base/special/sincospi.h"
```

#### stdlib_base_sincospi( x, &sine, &cosine )

Simultaneously computes the [sine][@stdlib/math/base/special/sin] and [cosine][@stdlib/math/base/special/cos] of a `number` times [π][@stdlib/constants/float64/pi] more accurately than `sincos(pi*x)`, especially for large `x`.

```c
double cosine;
double sine;

stdlib_base_sincospi( 4.0, &sine, &cosine );
```

The function accepts the following arguments:

-   **x**:      `[in] double` input value.
-   **sine**:   `[out] double*` destination for the sine.
-   **cosine**: `[out] double*` destination for the cosine.

```c
void stdlib_base_sincospi( const double x, double *sine, double *cosine );
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
#include "stdlib/math/base/special/sincospi.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 0.0, 1.57, 3.14, 6.28 };

    double cosine;
    double sine;
    int i;
    for ( i = 0; i < 4; i++ ) {
        stdlib_base_sincospi( x[ i ], &sine, &cosine );
        printf( "x: %lf => sine: %lf, cosine: %lf\n", x[ i ], sine, cosine );
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

-   <span class="package-name">[`@stdlib/math/base/special/cospi`][@stdlib/math/base/special/cospi]</span><span class="delimiter">: </span><span class="description">compute cos(πx).</span>
-   <span class="package-name">[`@stdlib/math/base/special/sincos`][@stdlib/math/base/special/sincos]</span><span class="delimiter">: </span><span class="description">simultaneously compute the sine and cosine of an angle measured in radians.</span>
-   <span class="package-name">[`@stdlib/math/base/special/sinpi`][@stdlib/math/base/special/sinpi]</span><span class="delimiter">: </span><span class="description">compute sin(πx).</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/math/base/special/sin]: https://github.com/stdlib-js/math/tree/main/base/special/sin

[@stdlib/math/base/special/cos]: https://github.com/stdlib-js/math/tree/main/base/special/cos

[@stdlib/constants/float64/pi]: https://github.com/stdlib-js/constants-float64-pi

<!-- <related-links> -->

[@stdlib/math/base/special/cospi]: https://github.com/stdlib-js/math/tree/main/base/special/cospi

[@stdlib/math/base/special/sincos]: https://github.com/stdlib-js/math/tree/main/base/special/sincos

[@stdlib/math/base/special/sinpi]: https://github.com/stdlib-js/math/tree/main/base/special/sinpi

<!-- </related-links> -->

</section>

<!-- /.links -->
