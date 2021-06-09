/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var hasGeneratorsSupport = require( '@stdlib/assert/has-generator-support' );
var log1p = require( '@stdlib/math/base/special/log1p' );
var evil = require( '@stdlib/utils/eval' );
var sumSeries = require( './../lib' );

var generator;

function createGenerator() {
	var str = '(function () {';
	str += 'function* generator( x ) {';
	str += '  var k = 0;';
	str += '  var mMult = -x;';
	str += '  var mProd = -1;';
	str += '  while ( true ) {';
	str += '    mProd *= mMult;';
	str += '    k += 1;';
	str += '    yield ( mProd / k )';
	str += '  }';
	str += '}';
	str += 'return generator;';
	str += '})()';
	return evil( str );
}

if ( hasGeneratorsSupport() ) {
	generator = createGenerator();
	console.log( 'log1p(0.5) evaluated via infinite series expansion (generator): %d', sumSeries( generator( 0.5 ) ) );
}
console.log( 'log1p(0.5) evaluated via infinite series expansion (closure): %d', sumSeries( closure( 0.5 ) ) );
console.log( 'log1p(0.5) evaluated via log1p module: %d', log1p( 0.5 ) );

function closure( x ) {
	var mMult = -x;
	var mProd = -1;
	var k = 0;
	return next;

	function next() {
		mProd *= mMult;
		k += 1;
		return ( mProd / k );
	}
}
