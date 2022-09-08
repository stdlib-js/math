/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var tape = require( 'tape' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var isNonPositiveFinite = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof isNonPositiveFinite, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a nonpositive finite number', function test( t ) {
	t.equal( isNonPositiveFinite( -3.14 ), true, 'returns true' );
	t.equal( isNonPositiveFinite( 0.0 ), true, 'returns true' );
	t.equal( isNonPositiveFinite( -0.0 ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if provided a positive number', function test( t ) {
	var bool = isNonPositiveFinite( 3.14 );
	t.equal( bool, false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if provided `NaN`', function test( t ) {
	var bool = isNonPositiveFinite( NaN );
	t.equal( bool, false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if provided positive infinity', function test( t ) {
	var bool = isNonPositiveFinite( PINF );
	t.equal( bool, false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if provided negative infinity', function test( t ) {
	var bool = isNonPositiveFinite( NINF );
	t.equal( bool, false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if provided `NaN`', function test( t ) {
	var bool = isNonPositiveFinite( NaN );
	t.equal( bool, false, 'returns false' );
	t.end();
});
