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
* @name add
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/add}
*/
setReadOnly( ns, 'add', require( './../../../base/ops/add' ) );

/**
* @name addf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/addf}
*/
setReadOnly( ns, 'addf', require( './../../../base/ops/addf' ) );

/**
* @name cadd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/cadd}
*/
setReadOnly( ns, 'cadd', require( './../../../base/ops/cadd' ) );

/**
* @name cdiv
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/cdiv}
*/
setReadOnly( ns, 'cdiv', require( './../../../base/ops/cdiv' ) );

/**
* @name cmul
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/cmul}
*/
setReadOnly( ns, 'cmul', require( './../../../base/ops/cmul' ) );

/**
* @name cneg
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/cneg}
*/
setReadOnly( ns, 'cneg', require( './../../../base/ops/cneg' ) );

/**
* @name csub
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/ops/csub}
*/
setReadOnly( ns, 'csub', require( './../../../base/ops/csub' ) );

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
