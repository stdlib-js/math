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

# isEven

> Test if a 32-bit integer is even.

<section class="usage">

## Usage

```javascript
var isEven = require( '@stdlib/math/base/assert/int32-is-even' );
```

#### isEven( x )

Tests if 32-bit integer is even.

```javascript
var bool = isEven( 5 );
// returns false

bool = isEven( -2 );
// returns true

bool = isEven( 0 );
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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var isEven = require( '@stdlib/math/base/assert/int32-is-even' );

var opts = {
    'dtype': 'int32'
};
var x = discreteUniform( 100, 0, 100, opts );

function isEvenWrapper( integer ) {
    return ( isEven( integer ) ) ? 'even' : 'not even';
}
logEachMap( '%d is %s', x, isEvenWrapper );
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
#include "stdlib/math/base/assert/int32_is_even.h"
```

#### stdlib_base_int32_is_even( x )

Tests if 32-bit integer is even.

```c
#include <stdbool.h>

bool out = stdlib_base_int32_is_even( -2 );
// returns true

out = stdlib_base_int32_is_even( 5 );
// returns false
```

The function accepts the following arguments:

-   **x**: `[in] int32_t` input value.

```c
bool stdlib_base_int32_is_even( const int32_t x );
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
#include "stdlib/math/base/assert/int32_is_even.h"
#include <stdio.h>
#include <stdbool.h>
#include <stdint.h>

int main( void ) {
    const int32_t x[] = { 5, -5, 3, -3, 0, 2 };

    bool b;
    int i;
    for ( i = 0; i < 5; i++ ) {
        b = stdlib_base_int32_is_even( x[ i ] );
        printf( "Value: %d. int32 Is even? %s.\n", x[ i ], ( b ) ? "True" : "False" );
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

-   <span class="package-name">[`@stdlib/math/base/assert/is-even`][@stdlib/math/base/assert/is-even]</span><span class="delimiter">: </span><span class="description">test if a finite numeric value is an even number.</span>
-   <span class="package-name">[`@stdlib/math/base/assert/int32-is-odd`][@stdlib/math/base/assert/int32-is-odd]</span><span class="delimiter">: </span><span class="description">test if a 32-bit integer is odd.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/assert/is-even]: https://github.com/stdlib-js/math/tree/main/base/assert/is-even

[@stdlib/math/base/assert/int32-is-odd]: https://github.com/stdlib-js/math/tree/main/base/assert/int32-is-odd

<!-- </related-links> -->

</section>

<!-- /.links -->
