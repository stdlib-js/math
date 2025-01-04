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

# Falling Factorial

> Compute the [falling factorial][falling-and-rising-factorials].

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var fallingFactorial = require( '@stdlib/math/base/special/falling-factorial' );
```

#### fallingFactorial( x, n )

Evaluates the [falling factorial][falling-and-rising-factorials] of `x` and `n`.

```javascript
var v = fallingFactorial( 0.9, 5 );
// returns ~0.644

v = fallingFactorial( -9.0, 3 );
// returns -990.0

v = fallingFactorial( 0.0, 2 );
// returns 0.0

v = fallingFactorial( NaN, 3 );
// returns NaN

v = fallingFactorial( 5.0, NaN );
// returns NaN

v = fallingFactorial( NaN, NaN );
// returns NaN
```

The function returns `NaN` if not provided a nonnegative integer for `n`.

```javascript
var v = fallingFactorial( 2.0, 1.5 );
// returns NaN

v = fallingFactorial( 3.0, -2 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var ceil = require( '@stdlib/math/base/special/ceil' );
var fallingFactorial = require( '@stdlib/math/base/special/falling-factorial' );

var n;
var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = ( randu()*40.0 ) - 20.0;
    n = ceil( randu()*20.0 );
    console.log( 'fallingFactorial(%d,%d) = %d', x, n, fallingFactorial( x, n ) );
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
#include "stdlib/math/base/special/falling_factorial.h"
```

#### stdlib_base_falling_factorial( x, n )

Evaluates the [falling factorial][falling-and-rising-factorials] of `x` and `n`.

```c
double out = stdlib_base_falling_factorial( 0.9, 5 );
// returns ~0.644

out = stdlib_base_falling_factorial( -9.0, 3 );
// returns -990.0
```

The function accepts the following arguments:

-   **x**: `[in] double` first function parameter.
-   **n**: `[in] int32_t` second function parameter.

```c
double stdlib_base_falling_factorial( const double x, const int32_t n );
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
#include "stdlib/math/base/special/falling_factorial.h"
#include <stdio.h>
#include <stdint.h>

int main( void ) {
    const double x[] = { -10.0, -7.78, -5.56, -3.33, -1.11, 1.11, 3.33, 5.56, 7.78, 10.0 };
    const int32_t n[] = { 5, 4, 3, 2, 1, 0, -1, -2, -3, -4 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_falling_factorial( x[ i ], n[ i ] );
        printf( "x: %lf, n: %d, falling_factorial(x,n): %lf\n", x[ i ], n[ i ], v );
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

-   <span class="package-name">[`@stdlib/math/base/special/rising-factorial`][@stdlib/math/base/special/rising-factorial]</span><span class="delimiter">: </span><span class="description">compute the rising factorial.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[falling-and-rising-factorials]: https://en.wikipedia.org/wiki/Falling_and_rising_factorials

<!-- <related-links> -->

[@stdlib/math/base/special/rising-factorial]: https://github.com/stdlib-js/math/tree/main/base/special/rising-factorial

<!-- </related-links> -->

</section>

<!-- /.links -->
