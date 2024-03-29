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

# Assert

> Base math assertion utilities.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/math/base/assert' );
```

#### ns

Namespace containing "base" (i.e., lower-level) math assertion utilities.

```javascript
var o = ns;
// returns {...}
```

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`isEvenInt32( x )`][@stdlib/math/base/assert/int32-is-even]</span><span class="delimiter">: </span><span class="description">test if a 32-bit integer is even.</span>
-   <span class="signature">[`isOddInt32( x )`][@stdlib/math/base/assert/int32-is-odd]</span><span class="delimiter">: </span><span class="description">test if a 32-bit integer is odd.</span>
-   <span class="signature">[`isComposite( x )`][@stdlib/math/base/assert/is-composite]</span><span class="delimiter">: </span><span class="description">test if a number is a composite.</span>
-   <span class="signature">[`isCoprime( a, b )`][@stdlib/math/base/assert/is-coprime]</span><span class="delimiter">: </span><span class="description">test if two numbers are coprime.</span>
-   <span class="signature">[`isEven( x )`][@stdlib/math/base/assert/is-even]</span><span class="delimiter">: </span><span class="description">test if a finite numeric value is an even number.</span>
-   <span class="signature">[`isFinite( x )`][@stdlib/math/base/assert/is-finite]</span><span class="delimiter">: </span><span class="description">test if a double-precision floating-point numeric value is finite.</span>
-   <span class="signature">[`isFinitef( x )`][@stdlib/math/base/assert/is-finitef]</span><span class="delimiter">: </span><span class="description">test if a single-precision floating-point numeric value is finite.</span>
-   <span class="signature">[`isInfinite( x )`][@stdlib/math/base/assert/is-infinite]</span><span class="delimiter">: </span><span class="description">test if a double-precision floating-point numeric value is infinite.</span>
-   <span class="signature">[`isInfinitef( x )`][@stdlib/math/base/assert/is-infinitef]</span><span class="delimiter">: </span><span class="description">test if a single-precision floating-point numeric value is infinite.</span>
-   <span class="signature">[`isInteger( x )`][@stdlib/math/base/assert/is-integer]</span><span class="delimiter">: </span><span class="description">test if a finite double-precision floating-point number is an integer.</span>
-   <span class="signature">[`isnan( x )`][@stdlib/math/base/assert/is-nan]</span><span class="delimiter">: </span><span class="description">test if a double-precision floating-point numeric value is NaN.</span>
-   <span class="signature">[`isnanf( x )`][@stdlib/math/base/assert/is-nanf]</span><span class="delimiter">: </span><span class="description">test if a single-precision floating-point numeric value is NaN.</span>
-   <span class="signature">[`isNegativeFinite( x )`][@stdlib/math/base/assert/is-negative-finite]</span><span class="delimiter">: </span><span class="description">test if a double-precision floating-point numeric value is a negative finite number.</span>
-   <span class="signature">[`isNegativeInteger( x )`][@stdlib/math/base/assert/is-negative-integer]</span><span class="delimiter">: </span><span class="description">test if a finite double-precision floating-point number is a negative integer.</span>
-   <span class="signature">[`isNegativeZero( x )`][@stdlib/math/base/assert/is-negative-zero]</span><span class="delimiter">: </span><span class="description">test if a double-precision floating-point numeric value is negative zero.</span>
-   <span class="signature">[`isNegativeZerof( x )`][@stdlib/math/base/assert/is-negative-zerof]</span><span class="delimiter">: </span><span class="description">test if a single-precision floating-point numeric value is negative zero.</span>
-   <span class="signature">[`isNonNegativeFinite( x )`][@stdlib/math/base/assert/is-nonnegative-finite]</span><span class="delimiter">: </span><span class="description">test if a numeric value is a nonnegative finite number.</span>
-   <span class="signature">[`isNonNegativeInteger( x )`][@stdlib/math/base/assert/is-nonnegative-integer]</span><span class="delimiter">: </span><span class="description">test if a finite double-precision floating-point number is a nonnegative integer.</span>
-   <span class="signature">[`isNonPositiveFinite( x )`][@stdlib/math/base/assert/is-nonpositive-finite]</span><span class="delimiter">: </span><span class="description">test if a numeric value is a nonpositive finite number.</span>
-   <span class="signature">[`isNonPositiveInteger( x )`][@stdlib/math/base/assert/is-nonpositive-integer]</span><span class="delimiter">: </span><span class="description">test if a finite double-precision floating-point number is a nonpositive integer.</span>
-   <span class="signature">[`isOdd( x )`][@stdlib/math/base/assert/is-odd]</span><span class="delimiter">: </span><span class="description">test if a finite double-precision floating-point number is an odd number.</span>
-   <span class="signature">[`isPositiveFinite( x )`][@stdlib/math/base/assert/is-positive-finite]</span><span class="delimiter">: </span><span class="description">test if a double-precision floating-point numeric value is a positive finite number.</span>
-   <span class="signature">[`isPositiveInteger( x )`][@stdlib/math/base/assert/is-positive-integer]</span><span class="delimiter">: </span><span class="description">test if a finite double-precision floating-point number is a positive integer.</span>
-   <span class="signature">[`isPositiveZero( x )`][@stdlib/math/base/assert/is-positive-zero]</span><span class="delimiter">: </span><span class="description">test if a double-precision floating-point numeric value is positive zero.</span>
-   <span class="signature">[`isPositiveZerof( x )`][@stdlib/math/base/assert/is-positive-zerof]</span><span class="delimiter">: </span><span class="description">test if a single-precision floating-point numeric value is positive zero.</span>
-   <span class="signature">[`isPrime( x )`][@stdlib/math/base/assert/is-prime]</span><span class="delimiter">: </span><span class="description">test if a number is a prime.</span>
-   <span class="signature">[`isProbability( x )`][@stdlib/math/base/assert/is-probability]</span><span class="delimiter">: </span><span class="description">test if a double-precision floating-point number is a probability.</span>
-   <span class="signature">[`isSafeInteger( x )`][@stdlib/math/base/assert/is-safe-integer]</span><span class="delimiter">: </span><span class="description">test if a finite double-precision floating-point number is a safe integer.</span>
-   <span class="signature">[`isPow2Uint32( x )`][@stdlib/math/base/assert/uint32-is-pow2]</span><span class="delimiter">: </span><span class="description">test whether an unsigned integer is a power of 2.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var ns = require( '@stdlib/math/base/assert' );

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <toc-links> -->

[@stdlib/math/base/assert/int32-is-even]: https://github.com/stdlib-js/math/tree/main/base/assert/int32-is-even

[@stdlib/math/base/assert/int32-is-odd]: https://github.com/stdlib-js/math/tree/main/base/assert/int32-is-odd

[@stdlib/math/base/assert/is-composite]: https://github.com/stdlib-js/math/tree/main/base/assert/is-composite

[@stdlib/math/base/assert/is-coprime]: https://github.com/stdlib-js/math/tree/main/base/assert/is-coprime

[@stdlib/math/base/assert/is-even]: https://github.com/stdlib-js/math/tree/main/base/assert/is-even

[@stdlib/math/base/assert/is-finite]: https://github.com/stdlib-js/math/tree/main/base/assert/is-finite

[@stdlib/math/base/assert/is-finitef]: https://github.com/stdlib-js/math/tree/main/base/assert/is-finitef

[@stdlib/math/base/assert/is-infinite]: https://github.com/stdlib-js/math/tree/main/base/assert/is-infinite

[@stdlib/math/base/assert/is-infinitef]: https://github.com/stdlib-js/math/tree/main/base/assert/is-infinitef

[@stdlib/math/base/assert/is-integer]: https://github.com/stdlib-js/math/tree/main/base/assert/is-integer

[@stdlib/math/base/assert/is-nan]: https://github.com/stdlib-js/math/tree/main/base/assert/is-nan

[@stdlib/math/base/assert/is-nanf]: https://github.com/stdlib-js/math/tree/main/base/assert/is-nanf

[@stdlib/math/base/assert/is-negative-finite]: https://github.com/stdlib-js/math/tree/main/base/assert/is-negative-finite

[@stdlib/math/base/assert/is-negative-integer]: https://github.com/stdlib-js/math/tree/main/base/assert/is-negative-integer

[@stdlib/math/base/assert/is-negative-zero]: https://github.com/stdlib-js/math/tree/main/base/assert/is-negative-zero

[@stdlib/math/base/assert/is-negative-zerof]: https://github.com/stdlib-js/math/tree/main/base/assert/is-negative-zerof

[@stdlib/math/base/assert/is-nonnegative-finite]: https://github.com/stdlib-js/math/tree/main/base/assert/is-nonnegative-finite

[@stdlib/math/base/assert/is-nonnegative-integer]: https://github.com/stdlib-js/math/tree/main/base/assert/is-nonnegative-integer

[@stdlib/math/base/assert/is-nonpositive-finite]: https://github.com/stdlib-js/math/tree/main/base/assert/is-nonpositive-finite

[@stdlib/math/base/assert/is-nonpositive-integer]: https://github.com/stdlib-js/math/tree/main/base/assert/is-nonpositive-integer

[@stdlib/math/base/assert/is-odd]: https://github.com/stdlib-js/math/tree/main/base/assert/is-odd

[@stdlib/math/base/assert/is-positive-finite]: https://github.com/stdlib-js/math/tree/main/base/assert/is-positive-finite

[@stdlib/math/base/assert/is-positive-integer]: https://github.com/stdlib-js/math/tree/main/base/assert/is-positive-integer

[@stdlib/math/base/assert/is-positive-zero]: https://github.com/stdlib-js/math/tree/main/base/assert/is-positive-zero

[@stdlib/math/base/assert/is-positive-zerof]: https://github.com/stdlib-js/math/tree/main/base/assert/is-positive-zerof

[@stdlib/math/base/assert/is-prime]: https://github.com/stdlib-js/math/tree/main/base/assert/is-prime

[@stdlib/math/base/assert/is-probability]: https://github.com/stdlib-js/math/tree/main/base/assert/is-probability

[@stdlib/math/base/assert/is-safe-integer]: https://github.com/stdlib-js/math/tree/main/base/assert/is-safe-integer

[@stdlib/math/base/assert/uint32-is-pow2]: https://github.com/stdlib-js/math/tree/main/base/assert/uint32-is-pow2

<!-- </toc-links> -->

</section>

<!-- /.links -->
