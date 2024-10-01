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
* @name add
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/add}
*/
setReadOnly( ns, 'add', require( './../../../base/ops/add' ) );

/**
* @name add3
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/add3}
*/
setReadOnly( ns, 'add3', require( './../../../base/ops/add3' ) );

/**
* @name add4
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/add4}
*/
setReadOnly( ns, 'add4', require( './../../../base/ops/add4' ) );

/**
* @name add5
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/add5}
*/
setReadOnly( ns, 'add5', require( './../../../base/ops/add5' ) );

/**
* @name addf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/addf}
*/
setReadOnly( ns, 'addf', require( './../../../base/ops/addf' ) );

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
* @name div
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/div}
*/
setReadOnly( ns, 'div', require( './../../../base/ops/div' ) );

/**
* @name divf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/divf}
*/
setReadOnly( ns, 'divf', require( './../../../base/ops/divf' ) );

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
* @name mul
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/mul}
*/
setReadOnly( ns, 'mul', require( './../../../base/ops/mul' ) );

/**
* @name mulf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/mulf}
*/
setReadOnly( ns, 'mulf', require( './../../../base/ops/mulf' ) );

/**
* @name sub
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/sub}
*/
setReadOnly( ns, 'sub', require( './../../../base/ops/sub' ) );

/**
* @name subf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/subf}
*/
setReadOnly( ns, 'subf', require( './../../../base/ops/subf' ) );

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


// EXPORTS //

module.exports = ns;
