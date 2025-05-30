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

# Heaviside Function

> Evaluate the [Heaviside function][heaviside-function].

<section class="intro">

The [Heaviside function][heaviside-function] is defined as

<!-- <equation class="equation" label="eq:heaviside_function" align="center" raw="H(x) = \begin{cases} 1 & \textrm{if}\ x \gt 0 \\ 0 & \textrm{if}\ x \lt 0\end{cases}" alt="Heaviside function."> -->

```math
H(x) = \begin{cases} 1 & \textrm{if}\ x \gt 0 \\ 0 & \textrm{if}\ x \lt 0\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="H(x) = \begin{cases} 1 &amp; \textrm{if}\ x \gt 0 \\ 0 &amp; \textrm{if}\ x \lt 0\end{cases}" data-equation="eq:heaviside_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/heaviside/docs/img/equation_heaviside_function.svg" alt="Heaviside function.">
    <br>
</div> -->

<!-- </equation> -->

and is discontinuous at `0`. Depending on the context, the [Heaviside function][heaviside-function] may be defined as a continuous function. To define the [Heaviside function][heaviside-function] such that the function has rotational symmetry,

<!-- <equation class="equation" label="eq:heaviside_function_half_maximum" align="center" raw="H(x) = \begin{cases} x & \textrm{if}\ x \gt 0 \\ \frac{1}{2} & \textrm{if}\ x = 0 \\ 0 & \textrm{if}\ x \lt 0\end{cases}" alt="Heaviside function half-maximum."> -->

```math
H(x) = \begin{cases} x & \textrm{if}\ x \gt 0 \\ \frac{1}{2} & \textrm{if}\ x = 0 \\ 0 & \textrm{if}\ x \lt 0\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="H(x) = \begin{cases} x &amp; \textrm{if}\ x \gt 0 \\ \frac{1}{2} &amp; \textrm{if}\ x = 0 \\ 0 &amp; \textrm{if}\ x \lt 0\end{cases}" data-equation="eq:heaviside_function_half_maximum">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/heaviside/docs/img/equation_heaviside_function_half_maximum.svg" alt="Heaviside function half-maximum.">
    <br>
</div> -->

<!-- </equation> -->

To define the [Heaviside function][heaviside-function] as a left-continuous function,

<!-- <equation class="equation" label="eq:heaviside_function_left_continuous" align="center" raw="H(x) = \begin{cases} x & \textrm{if}\ x \gt 0 \\ 0 & \textrm{if}\ x \leq 0\end{cases}" alt="Heaviside function left-continuous."> -->

```math
H(x) = \begin{cases} x & \textrm{if}\ x \gt 0 \\ 0 & \textrm{if}\ x \leq 0\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="H(x) = \begin{cases} x &amp; \textrm{if}\ x \gt 0 \\ 0 &amp; \textrm{if}\ x \leq 0\end{cases}" data-equation="eq:heaviside_function_left_continuous">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/heaviside/docs/img/equation_heaviside_function_left_continuous.svg" alt="Heaviside function left-continuous.">
    <br>
</div> -->

<!-- </equation> -->

To define the [Heaviside function][heaviside-function] as a right-continuous function,

<!-- <equation class="equation" label="eq:heaviside_function_right_continuous" align="center" raw="H(x) = \begin{cases} x & \textrm{if}\ x \geq 0 \\ 0 & \textrm{if}\ x \lt 0\end{cases}" alt="Heaviside function right-continuous."> -->

```math
H(x) = \begin{cases} x & \textrm{if}\ x \geq 0 \\ 0 & \textrm{if}\ x \lt 0\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="H(x) = \begin{cases} x &amp; \textrm{if}\ x \geq 0 \\ 0 &amp; \textrm{if}\ x \lt 0\end{cases}" data-equation="eq:heaviside_function_right_continuous">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/heaviside/docs/img/equation_heaviside_function_right_continuous.svg" alt="Heaviside function right-continuous.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var heaviside = require( '@stdlib/math/base/special/heaviside' );
```

#### heaviside( x\[, continuity] )

Evaluates the [Heaviside function][heaviside-function].

```javascript
var v = heaviside( 3.14 );
// returns 1.0

v = heaviside( -3.14 );
// returns 0.0

v = heaviside( NaN );
// returns NaN
```

The `continuity` parameter may be one of the following values:

-   `'half-maximum'`: if `x == 0`, the function returns `0.5`.
-   `'left-continuous'`: if `x == 0`, the function returns `0.0`.
-   `'right-continuous'`: if `x == 0`, the function returns `1.0`.

By default, the function is discontinuous at `0`.

```javascript
var v = heaviside( 0.0 );
// returns NaN
```

To define the [Heaviside function][heaviside-function] as a continuous function, set the `continuity` parameter.

```javascript
var v = heaviside( 0.0, 'half-maximum' );
// returns 0.5

v = heaviside( 0.0, 'left-continuous' );
// returns 0.0

v = heaviside( 0.0, 'right-continuous' );
// returns 1.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var heaviside = require( '@stdlib/math/base/special/heaviside' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 101, -10.0, 10.0, opts );

logEachMap( 'H(%0.4f) = %0.4f', x, heaviside );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/ramp`][@stdlib/math/base/special/ramp]</span><span class="delimiter">: </span><span class="description">evaluate the ramp function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[heaviside-function]: https://en.wikipedia.org/wiki/Heaviside_step_function

<!-- <related-links> -->

[@stdlib/math/base/special/ramp]: https://github.com/stdlib-js/math/tree/main/base/special/ramp

<!-- </related-links> -->

</section>

<!-- /.links -->
