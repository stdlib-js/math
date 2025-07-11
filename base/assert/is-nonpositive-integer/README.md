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

# isNonPositiveInteger

> Test if a finite [double-precision floating-point number][ieee754] is a nonpositive integer.

<section class="usage">

## Usage

```javascript
var isNonPositiveInteger = require( '@stdlib/math/base/assert/is-nonpositive-integer' );
```

#### isNonPositiveInteger( x )

Tests if a finite [double-precision floating-point number][ieee754] is a nonpositive integer.

```javascript
var bool = isNonPositiveInteger( -1.0 );
// returns true

bool = isNonPositiveInteger( 0.0 );
// returns true

bool = isNonPositiveInteger( 10.0 );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function assumes a **finite** `number`. If provided negative `infinity`, the function will return `true`, when, in fact, the result is undefined. If `x` can be `infinite`, wrap the implementation as follows:

    ```javascript
    function check( x ) {
        return (
            x > -Infinity &&
            isNonPositiveInteger( x )
        );
    }

    var bool = check( -Infinity );
    // returns false
    ```

-   The function does **not** distinguish between positive and negative `zero`.

    ```javascript
    var bool = isNonPositiveInteger( 0.0 );
    // returns true

    bool = isNonPositiveInteger( -0.0 );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isNonPositiveInteger = require( '@stdlib/math/base/assert/is-nonpositive-integer' );

var bool = isNonPositiveInteger( -5.0 );
// returns true

bool = isNonPositiveInteger( 0.0 );
// returns true

bool = isNonPositiveInteger( 1.0 );
// returns false

bool = isNonPositiveInteger( -3.14 );
// returns false

bool = isNonPositiveInteger( NaN );
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
#include "stdlib/math/base/assert/is_nonpositive_integer.h"
```

#### stdlib_base_is_nonpositive_integer( x )

Tests if a finite double-precision floating-point number is a nonpositive integer.

```c
#include <stdbool.h>

bool out = stdlib_base_is_nonpositive_integer( -5.0 );
// returns true

out = stdlib_base_is_nonpositive_integer( 0.0 );
// returns true
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
bool stdlib_base_is_nonpositive_integer( const double x );
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
#include "stdlib/math/base/assert/is_nonpositive_integer.h"
#include <stdio.h>
#include <stdbool.h>

int main( void ) {
    const double x[] = { 5.0, -5.0, 3.14, -3.14, 0.0, 0.0/0.0 };

    bool b;
    int i;
    for ( i = 0; i < 6; i++ ) {
        b = stdlib_base_is_nonpositive_integer( x[ i ] );
        printf( "x = %lf, is_nonpositive_integer(x) = %s\n", x[ i ], ( b ) ? "True" : "False" );
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
-   <span class="package-name">[`@stdlib/math/base/assert/is-negative-integer`][@stdlib/math/base/assert/is-negative-integer]</span><span class="delimiter">: </span><span class="description">test if a finite double-precision floating-point number is a negative integer.</span>
-   <span class="package-name">[`@stdlib/math/base/assert/is-nonnegative-integer`][@stdlib/math/base/assert/is-nonnegative-integer]</span><span class="delimiter">: </span><span class="description">test if a finite double-precision floating-point number is a nonnegative integer.</span>
-   <span class="package-name">[`@stdlib/math/base/assert/is-positive-integer`][@stdlib/math/base/assert/is-positive-integer]</span><span class="delimiter">: </span><span class="description">test if a finite double-precision floating-point number is a positive integer.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/assert/is-integer]: https://github.com/stdlib-js/math/tree/main/base/assert/is-integer

[@stdlib/math/base/assert/is-negative-integer]: https://github.com/stdlib-js/math/tree/main/base/assert/is-negative-integer

[@stdlib/math/base/assert/is-nonnegative-integer]: https://github.com/stdlib-js/math/tree/main/base/assert/is-nonnegative-integer

[@stdlib/math/base/assert/is-positive-integer]: https://github.com/stdlib-js/math/tree/main/base/assert/is-positive-integer

<!-- </related-links> -->

</section>

<!-- /.links -->
