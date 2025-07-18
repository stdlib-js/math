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

# ldexp

> Multiply a [double-precision floating-point number][ieee754] by an integer power of two.

<section class="usage">

## Usage

```javascript
var ldexp = require( '@stdlib/math/base/special/ldexp' );
```

#### ldexp( frac, exp )

Multiplies a [double-precision floating-point number][ieee754] by an `integer` power of two (i.e., `x = frac * 2^exp`).

```javascript
var x = ldexp( 0.5, 3 ); // => 0.5 * 2^3 = 0.5 * 8
// returns 4.0

x = ldexp( 4.0, -2 ); // => 4 * 2^(-2) = 4 * (1/4)
// returns 1.0
```

If `frac` equals positive or negative zero, `NaN`, or positive or negative `infinity`, the function returns a value equal to `frac`.

```javascript
var x = ldexp( 0.0, 20 );
// returns 0.0

x = ldexp( -0.0, 39 );
// returns -0.0

x = ldexp( NaN, -101 );
// returns NaN

x = ldexp( Infinity, 11 );
// returns Infinity

x = ldexp( -Infinity, -118 );
// returns -Infinity
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This function is the inverse of [`frexp`][@stdlib/math/base/special/frexp].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var pow = require( '@stdlib/math/base/special/pow' );
var frexp = require( '@stdlib/math/base/special/frexp' );
var ldexp = require( '@stdlib/math/base/special/ldexp' );

var sign;
var frac;
var exp;
var x;
var f;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    if ( randu() < 0.5 ) {
        sign = -1.0;
    } else {
        sign = 1.0;
    }
    // Generate a random number:
    frac = randu() * 10.0;
    exp = round( randu()*616.0 ) - 308;
    x = sign * frac * pow( 10.0, exp );

    // Break the number into a normalized fraction and an integer power of two:
    f = frexp( x );

    // Reconstitute the original number:
    v = ldexp( f[ 0 ], f[ 1 ] );
    console.log( '%d = %d * 2^%d = %d', x, f[ 0 ], f[ 1 ], v );
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
#include "stdlib/math/base/special/ldexp.h"
```

#### stdlib_base_ldexp( frac, exp )

Multiplies a [double-precision floating-point number][ieee754] by an integer power of two (i.e., `x = frac * 2^exp`).

```c
double x = stdlib_base_ldexp( 0.5, 3 ); // => 0.5 * 2^3 = 0.5 * 8
// returns 4.0
```

The function accepts the following arguments:

-   **frac**: `[in] double` input value.
-   **exp**: `[in] int32_t` integer power of two.

```c
double stdlib_base_ldexp( const double frac, const int32_t exp );
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
#include "stdlib/math/base/special/ldexp.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
    double y;
    int i;

    const double frac[] = { 0.5, 5.0, 0.0, 3.5, 7.9 };
    const int32_t exp[] = { 3, -2, 20, 39, 14 };

    for ( i = 0; i < 5; i++ ) {
        y = stdlib_base_ldexp( frac[ i ], exp[ i ] );
        printf( "ldexp(%lf, %d) = %lf\n", frac[ i ], exp[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/frexp`][@stdlib/math/base/special/frexp]</span><span class="delimiter">: </span><span class="description">split a double-precision floating-point number into a normalized fraction and an integer power of two.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/frexp]: https://github.com/stdlib-js/math/tree/main/base/special/frexp

<!-- </related-links> -->

</section>

<!-- /.links -->
