<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# factorial2

> [Double factorial][double-factorial] function.

<section class="intro">

The [double factorial][double-factorial] of a number `n`, denoted `n!!`, is defined as the product of all the positive integers up to `n` that have the same parity (odd or even) as `n`.

Thus, for example, `5!!` is `5 * 3 * 1 = 15` and `8!!` is `8 * 6 * 4 * 2 = 384`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var factorial2 = require( '@stdlib/math/base/special/factorial2' );
```

#### factorial2( n )

Evaluates the [double factorial][double-factorial] of `n`.

```javascript
var v = factorial2( 2 );
// returns 2

v = factorial2( 3 );
// returns 3

v = factorial2( 0 );
// returns 1

v = factorial2( 4 );
// returns 8

v = factorial2( 5 );
// returns 15

v = factorial2( NaN );
// returns NaN

v = factorial2( 301 );
// returns Infinity
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var oneTo = require( '@stdlib/array/base/one-to' );
var factorial2 = require( '@stdlib/math/base/special/factorial2' );

var values = oneTo( 300 );

var i;
for ( i = 0; i < values.length; i++ ) {
    console.log( 'f(%d): %d', values[ i ], factorial2( values[ i ] ) );
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
#include "stdlib/math/base/special/factorial2.h"
```

#### stdlib_base_factorial2( n )

Evaluates the [double factorial][double-factorial] of `n`.

```c
double out = stdlib_base_factorial2( 3 );
// returns 3
```

The function accepts the following arguments:

-   **n**: `[in] int32_t` input value.

```c
double stdlib_base_factorial2( const int32_t n );
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
#include "stdlib/math/base/special/factorial2.h"
#include <stdio.h>
#include <stdint.h>

int main( void ) {
    const int32_t x[] = { 1, 10, 100, 301, 302 };

    double b;
    int i;
    for ( i = 0; i < 5; i++ ){
        b = stdlib_base_factorial2( x[ i ] );
        printf ( "factorial2(%d) = %lf\n", x[ i ], b );
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

-   <span class="package-name">[`@stdlib/math/base/special/factorial`][@stdlib/math/base/special/factorial]</span><span class="delimiter">: </span><span class="description">evaluate a factorial.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[double-factorial]: https://en.wikipedia.org/wiki/Double_factorial

<!-- <related-links> -->

[@stdlib/math/base/special/factorial]: https://github.com/stdlib-js/math/tree/main/base/special/factorial

<!-- </related-links> -->

</section>

<!-- /.links -->
