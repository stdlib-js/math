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

# isComposite

> Test if a number is a composite.

<section class="intro">

A **composite number** is defined as a positive integer value greater than `1` which has **at least** one divisor other than `1` and itself (i.e., an integer value which can be formed by multiplying two smaller positive integers).

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var isComposite = require( '@stdlib/math/base/assert/is-composite' );
```

#### isComposite( x )

Tests if a number is a composite.

```javascript
var bool = isComposite( 4.0 );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isComposite = require( '@stdlib/math/base/assert/is-composite' );

var bool = isComposite( 4.0 );
// returns true

bool = isComposite( 7.0 );
// returns false

bool = isComposite( NaN );
// returns false
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
#include "stdlib/math/base/special/is_composite.h"
```

#### stdlib_base_is_composite( x )

Tests if a finite double-precision floating-point number is a composite number.

```c
#include <stdbool.h>

bool out = stdlib_base_is_composite( 3.0 );
// returns false
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
bool stdlib_base_is_composite( const double x );
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
#include "stdlib/math/base/assert/is_composite.h"
#include <stdio.h>
#include <stdbool.h>

int main( void ) {
    const double x[] = { 0.0, 0.0/0.0, 1.0, -1.0, 4.0 };

    bool r;
    int i;
    for ( i = 0; i < 5; i++ ) {
        r = stdlib_base_is_composite( x[ i ] );
        printf( "Value: %lf. Is Composite? %s.\n", x[ i ], ( r ) ? "True" : "False" );
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

-   <span class="package-name">[`@stdlib/math/base/assert/is-integer`][@stdlib/math/base/assert/is-integer]</span><span class="delimiter">: </span><span class="description">test if a finite double-precision floating-point number is an integer.</span>
-   <span class="package-name">[`@stdlib/math/base/assert/is-prime`][@stdlib/math/base/assert/is-prime]</span><span class="delimiter">: </span><span class="description">test if a number is prime.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/assert/is-integer]: https://github.com/stdlib-js/math/tree/main/base/assert/is-integer

[@stdlib/math/base/assert/is-prime]: https://github.com/stdlib-js/math/tree/main/base/assert/is-prime

<!-- </related-links> -->

</section>

<!-- /.links -->
