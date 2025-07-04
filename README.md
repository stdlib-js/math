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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Math

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Math functions.



<section class="usage">

## Usage

To use in Observable,

```javascript
math = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var math = require( 'path/to/vendor/umd/math/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.math;
})();
</script>
```

#### math

Namespace containing math functions.

```javascript
var m = math;
// returns {...}
```

The namespace consists of the following sub-namespaces:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`array`][@stdlib/math/array]</span><span class="delimiter">: </span><span class="description">math functions applied to arrays.</span>
-   <span class="signature">[`base`][@stdlib/math/base]</span><span class="delimiter">: </span><span class="description">base (i.e., lower-level) math functions.</span>
-   <span class="signature">[`iter`][@stdlib/math/iter]</span><span class="delimiter">: </span><span class="description">math iterators.</span>
-   <span class="signature">[`special`][@stdlib/math/special]</span><span class="delimiter">: </span><span class="description">special math functions.</span>
-   <span class="signature">[`strided`][@stdlib/math/strided]</span><span class="delimiter">: </span><span class="description">strided array math functions.</span>
-   <span class="signature">[`tools`][@stdlib/math/tools]</span><span class="delimiter">: </span><span class="description">math tools.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils/keys@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math@umd/browser.js"></script>
<script type="text/javascript">
(function () {

console.log( objectKeys( math ) );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math.svg
[npm-url]: https://npmjs.org/package/@stdlib/math

[test-image]: https://github.com/stdlib-js/math/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math/tree/deno
[deno-readme]: https://github.com/stdlib-js/math/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math/tree/umd
[umd-readme]: https://github.com/stdlib-js/math/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math/tree/esm
[esm-readme]: https://github.com/stdlib-js/math/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math/main/LICENSE

<!-- <toc-links> -->

[@stdlib/math/array]: https://github.com/stdlib-js/math/tree/main/array

[@stdlib/math/base]: https://github.com/stdlib-js/math/tree/main/base

[@stdlib/math/iter]: https://github.com/stdlib-js/math/tree/main/iter

[@stdlib/math/special]: https://github.com/stdlib-js/math/tree/main/special

[@stdlib/math/strided]: https://github.com/stdlib-js/math/tree/main/strided

[@stdlib/math/tools]: https://github.com/stdlib-js/math/tree/main/tools

<!-- </toc-links> -->

</section>

<!-- /.links -->
