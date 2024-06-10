/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setProps = require( '@stdlib/strided/base/meta-data-props' );
var meta = require( './meta.json' );
var types = require( './types.json' );
var abs = require( './abs.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( abs, 'ndarray', ndarray );
setProps( meta, types, abs, false );
setProps( meta, types, abs.ndarray, true );


// EXPORTS //

module.exports = abs;