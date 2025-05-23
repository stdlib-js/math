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

# isOdd

> Test if a finite double-precision floating-point number is an odd number.

<section class="usage">

## Usage

```javascript
var isOdd = require( '@stdlib/math/base/assert/is-odd' );
```

#### isOdd( x )

Tests if a **finite** double-precision floating-point number is an odd number.

```javascript
var bool = isOdd( 5.0 );
// returns true

bool = isOdd( -2.0 );
// returns false

bool = isOdd( 0.0 );
// returns false

bool = isOdd( NaN );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function assumes a **finite** `number`. If provided positive or negative `infinity`, the function will return `true`, when, in fact, the result is undefined. If `x` can be `infinite`, wrap the implementation as follows:

    ```javascript
    function check( x ) {
        return (
            x < Infinity &&
            x > -Infinity &&
            isOdd( x )
        );
    }

    var bool = check( Infinity );
    // returns false

    bool = check( -Infinity );
    // returns false
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var isOdd = require( '@stdlib/math/base/assert/is-odd' );

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 100, 0, 1000, opts );

function isOddWrapper( integer ) {
    return ( isOdd( integer ) ) ? 'odd' : 'not odd';
}
logEachMap( '%d is %s', x, isOddWrapper );
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
#include "stdlib/math/base/assert/is_odd.h"
```

#### stdlib_base_is_odd( x )

Tests if a finite double-precision floating-point number is an odd number.

```c
#include <stdbool.h>

bool out = stdlib_base_is_odd( 1.0 );
// returns true

out = stdlib_base_is_odd( 4.0 );
// returns false
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
bool stdlib_base_is_odd( const double x );
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
#include "stdlib/math/base/assert/is_odd.h"
#include <stdio.h>
#include <stdbool.h>

int main( void ) {
    const double x[] = { 5.0, -5.0, 3.14, -3.14, 0.0, 0.0/0.0 };

    bool b;
    int i;
    for ( i = 0; i < 6; i++ ) {
        b = stdlib_base_is_odd( x[ i ] );
        printf( "Value: %lf. Is Odd? %s.\n", x[ i ], ( b ) ? "True" : "False" );
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

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/assert/is-even]: https://github.com/stdlib-js/math/tree/main/base/assert/is-even

<!-- </related-links> -->

</section>

<!-- /.links -->
