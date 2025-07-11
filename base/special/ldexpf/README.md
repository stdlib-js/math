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

# ldexpf

> Multiply a [single-precision floating-point number][ieee754] by an integer power of two.

<section class="usage">

## Usage

```javascript
var ldexpf = require( '@stdlib/math/base/special/ldexpf' );
```

#### ldexpf( frac, exp )

Multiplies a [single-precision floating-point number][ieee754] by an integer power of two (i.e., `x = frac * 2^exp`).

```javascript
var x = ldexpf( 0.5, 3 ); // => 0.5 * 2^3 = 0.5 * 8
// returns 4.0

x = ldexpf( 4.0, -2 ); // => 4 * 2^(-2) = 4 * (1/4)
// returns 1.0
```

If `frac` equals positive or negative zero, `NaN`, or positive or negative `infinity`, the function returns a value equal to `frac`.

```javascript
var x = ldexpf( 0.0, 20 );
// returns 0.0

x = ldexpf( -0.0, 39 );
// returns -0.0

x = ldexpf( NaN, -101 );
// returns NaN

x = ldexpf( Infinity, 11 );
// returns Infinity

x = ldexpf( -Infinity, -118 );
// returns -Infinity
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This function is the inverse of [`frexpf`][@stdlib/math/base/special/frexpf].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/base/linspace' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ldexpf = require( '@stdlib/math/base/special/ldexpf' );

var frac = linspace( 0.0, 100.0, 10 );
var exp = discreteUniform( 100, 0, 10 );

var i;
for ( i = 0; i < frac.length; i++ ) {
    console.log( 'ldexpf(%d,%d) = %d', frac[ i ], exp[ i ], ldexpf( frac[ i ], exp[ i ] ) );
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
#include "stdlib/math/base/special/ldexpf.h"
```

#### stdlib_base_ldexpf( frac, exp )

Multiplies a [single-precision floating-point number][ieee754] by an integer power of two (i.e., `x = frac * 2^exp`).

```c
float x = stdlib_base_ldexpf( 0.5f, 3 ); // => 0.5 * 2^3 = 0.5 * 8
// returns 4.0f
```

The function accepts the following arguments:

-   **frac**: `[in] float` input value.
-   **exp**: `[in] int32_t` integer power of two.

```c
float stdlib_base_ldexpf( const float frac, const int32_t exp );
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
#include "stdlib/math/base/special/ldexpf.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
    float y;
    int i;

    const float frac[] = { 0.5f, 5.0f, 0.0f, 3.5f, 7.9f };
    const int32_t exp[] = { 3, -2, 20, 39, 14 };

    for ( i = 0; i < 5; i++ ) {
        y = stdlib_base_ldexpf( frac[ i ], exp[ i ] );
        printf( "ldexpf(%f, %d) = %f\n", frac[ i ], exp[ i ], y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

[@stdlib/math/base/special/frexpf]: https://github.com/stdlib-js/math/tree/main/base/special/frexpf

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
