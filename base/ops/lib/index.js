/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name caddf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/float32/base/add}
*/
setReadOnly( ns, 'caddf', require( '@stdlib/complex/float32/base/add' ) );

/**
* @name cmulf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/float32/base/mul}
*/
setReadOnly( ns, 'cmulf', require( '@stdlib/complex/float32/base/mul' ) );

/**
* @name cadd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/float64/base/add}
*/
setReadOnly( ns, 'cadd', require( '@stdlib/complex/float64/base/add' ) );

/**
* @name cmul
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/float64/base/mul}
*/
setReadOnly( ns, 'cmul', require( '@stdlib/complex/float64/base/mul' ) );

/**
* @name cdiv
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/cdiv}
*/
setReadOnly( ns, 'cdiv', require( './../../../base/ops/cdiv' ) );

/**
* @name cneg
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/cneg}
*/
setReadOnly( ns, 'cneg', require( './../../../base/ops/cneg' ) );

/**
* @name cnegf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/cnegf}
*/
setReadOnly( ns, 'cnegf', require( './../../../base/ops/cnegf' ) );

/**
* @name csub
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/csub}
*/
setReadOnly( ns, 'csub', require( './../../../base/ops/csub' ) );

/**
* @name csubf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/csubf}
*/
setReadOnly( ns, 'csubf', require( './../../../base/ops/csubf' ) );

/**
* @name imul
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/imul}
*/
setReadOnly( ns, 'imul', require( './../../../base/ops/imul' ) );

/**
* @name imuldw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/imuldw}
*/
setReadOnly( ns, 'imuldw', require( './../../../base/ops/imuldw' ) );

/**
* @name umul
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/umul}
*/
setReadOnly( ns, 'umul', require( './../../../base/ops/umul' ) );

/**
* @name umuldw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/umuldw}
*/
setReadOnly( ns, 'umuldw', require( './../../../base/ops/umuldw' ) );

/**
* @name addf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/float32/base/add}
*/
setReadOnly( ns, 'addf', require( '@stdlib/number/float32/base/add' ) );

/**
* @name divf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/float32/base/div}
*/
setReadOnly( ns, 'divf', require( '@stdlib/number/float32/base/div' ) );

/**
* @name div
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/float64/base/div}
*/
setReadOnly( ns, 'div', require( '@stdlib/number/float64/base/div' ) );

/**
* @name mul
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/float64/base/mul}
*/
setReadOnly( ns, 'mul', require( '@stdlib/number/float64/base/mul' ) );

/**
* @name sub
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/float64/base/sub}
*/
setReadOnly( ns, 'sub', require( '@stdlib/number/float64/base/sub' ) );


// EXPORTS //

module.exports = ns;
