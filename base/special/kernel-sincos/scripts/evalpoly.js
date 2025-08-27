/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

/*
* This script compiles modules for evaluating polynomial functions. If any polynomial coefficients change, this script should be rerun to update the compiled files.
*/
'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var writeFileSync = require( '@stdlib/fs/write-file' ).sync;
var currentYear = require( '@stdlib/time/current-year' );
var substringBefore = require( '@stdlib/string/substring-before' );
var substringAfter = require( '@stdlib/string/substring-after' );
var format = require( '@stdlib/string/format' );
var licenseHeader = require( '@stdlib/_tools/licenses/header' );
var compile = require( './../../../../base/tools/evalpoly-compile' );
var compileC = require( './../../../../base/tools/evalpoly-compile-c' );


// VARIABLES //

// Polynomial coefficients ordered in ascending degree...
var S24 = [
	8.33333333332248946124e-03,  // 0x3F811111, 0x1110F8A6
	-1.98412698298579493134e-04, // 0xBF2A01A0, 0x19C161D5
	2.75573137070700676789e-06  // 0x3EC71DE3, 0x57B1FE7D
];
var S56 = [
	-2.50507602534068634195e-08, // 0xBE5AE5E6, 0x8A2B9CEB
	1.58969099521155010221e-10  // 0x3DE5D93A, 0x5ACFD57C
];
var C13 = [
	4.16666666666666019037e-02,  // 0x3FA55555, 0x5555554C
	-1.38888888888741095749e-03, // 0xBF56C16C, 0x16C15177
	2.48015872894767294178e-05  // 0x3EFA01A0, 0x19CB1590
];
var C46 = [
	-2.75573143513906633035e-07, // 0xBE927E4F, 0x809C52AD
	2.08757232129817482790e-09,  // 0x3E21EE9E, 0xBDB4B1C4
	-1.13596475577881948265e-11 // 0xBDA8FAE9, 0xBE8838D4
];

// Header to add to output files:
var header = licenseHeader( 'Apache-2.0', 'js', {
	'year': currentYear(),
	'copyright': 'The Stdlib Authors'
});
header += '\n/* This is a generated file. Do not edit directly. */\n';


// FUNCTIONS //

/**
* Inserts a compiled function into file content.
*
* @private
* @param {string} text - source content
* @param {string} id - function identifier
* @param {string} str - function string
* @returns {string} updated content
*/
function insert( text, id, str ) {
	var before;
	var after;
	var begin;
	var end;

	begin = '// BEGIN: '+id;
	end = '// END: '+id;

	before = substringBefore( text, begin );
	after = substringAfter( text, end );

	return format( '%s// BEGIN: %s\n\n%s\n%s%s', before, id, str, end, after );
}


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var fpath;
	var copts;
	var opts;
	var file;
	var str;

	opts = {
		'encoding': 'utf8'
	};

	fpath = resolve( __dirname, '..', 'lib', 'polyval_s24.js' );
	str = header + compile( S24 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_s56.js' );
	str = header + compile( S56 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_c13.js' );
	str = header + compile( C13 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_c46.js' );
	str = header + compile( C46 );
	writeFileSync( fpath, str, opts );

	copts = {
		'dtype': 'double',
		'name': ''
	};

	fpath = resolve( __dirname, '..', 'src', 'main.c' );
	file = readFileSync( fpath, opts );

	copts.name = 'polyval_s24';
	str = compileC( S24, copts );
	file = insert( file, copts.name, str );

	copts.name = 'polyval_s56';
	str = compileC( S56, copts );
	file = insert( file, copts.name, str );

	copts.name = 'polyval_c13';
	str = compileC( C13, copts );
	file = insert( file, copts.name, str );

	copts.name = 'polyval_c46';
	str = compileC( C46, copts );
	file = insert( file, copts.name, str );

	writeFileSync( fpath, file, opts );
}

main();
