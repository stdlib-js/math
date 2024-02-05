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

var evil = require( '@stdlib/utils/eval' );
var hasGeneratorsSupport = require( '@stdlib/assert/has-generator-support' );
var continuedFraction = require( './../lib' );

var generator;
var out;

function createGenerator() {
	var str = '(function () {';
	str += 'function* generator() {';
	str += '  while ( true ) {';
	str += '    yield [ 1, 1 ];';
	str += '  }';
	str += '}';
	str += 'return generator;';
	str += '})()';
	return evil( str );
}

if ( hasGeneratorsSupport() ) {
	generator = createGenerator();
	out = continuedFraction( generator(), {
		'keep': true
	});
	console.log( 'Golden ratio (generator): %d,', out );
}

out = continuedFraction( closure(), {
	'keep': true
});
console.log( 'Golden ratio (closure): %d', out );

function closure() {
	var arr = [ 1, 1 ];
	return ones;

	function ones() {
		return arr;
	}
}
