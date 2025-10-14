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
var licenseHeader = require( '@stdlib/_tools/licenses/header' );
var compile = require( './../../../../base/tools/evalpoly-compile' );
var compileC = require( './../../../../base/tools/evalpoly-compile-c' );
var substringBefore = require( '@stdlib/string/substring-before' );
var substringAfter = require( '@stdlib/string/substring-after' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

// Polynomial coefficients ordered in ascending degree...
var A0 = [
	7.72156641e-02,   // 0x3D9E233F
	6.73484802e-02,   // 0x3D89EE00
	6.98275631e-03    // 0x3BE4CF9B
];
var A1 = [
	3.22467119e-01,   // 0x3EA51A69
	2.06395667e-02,   // 0x3CA9144F
	4.11768444e-03    // 0x3B86EDA4
];
var R = [
	6.79650068e-01,   // 0x3F2DFD8C
	1.16058730e-01,   // 0x3DEDB033
	3.75673687e-03    // 0x3B763396
];
var S = [
	-7.72156641e-02,  // 0xBD9E233F
	2.69987404e-01,   // 0x3E8A3BCA
	1.42851010e-01,   // 0x3E124789
	1.19389519e-02    // 0x3C439B98
];
var T2 = [
	4.83836412e-01,   // 0x3EF7B968
	-1.47586212e-01,  // 0xBE1720D7
	6.46013096e-02,   // 0x3D844DB1
	-3.28450352e-02,  // 0xBD068884
	1.86483748e-02,   // 0x3C98C47A
	-9.89206228e-03   // 0xBC221251
];
var U = [
	-7.72156641e-02,  // 0xBD9E233F
	7.36789703e-01,   // 0x3F3C9E40
	4.95649040e-01    // 0x3EFDC5B6
];
var V = [
	1.10958421e+00,   // 0x3F8E06DB
	2.10598111e-01,   // 0x3E57A708
	-1.02995494e-02   // 0xBC28BF71
];
var W = [
	8.33332464e-02,   // 0x3DAAAA9F
	-2.76129087e-03   // 0xBB34F6C6
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
		'encoding': 'utf8',
		'dtype': 'float32'
	};

	fpath = resolve( __dirname, '..', 'lib', 'polyval_a0.js' );
	str = header + compile( A0, opts );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_a1.js' );
	str = header + compile( A1, opts );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_r.js' );
	str = header + compile( R, opts );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_s.js' );
	str = header + compile( S, opts );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_t2.js' );
	str = header + compile( T2, opts );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_u.js' );
	str = header + compile( U, opts );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_v.js' );
	str = header + compile( V, opts );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_w.js' );
	str = header + compile( W, opts );
	writeFileSync( fpath, str, opts );

	copts = {
		'dtype': 'float',
		'name': ''
	};

	fpath = resolve( __dirname, '..', 'src', 'main.c' );
	file = readFileSync( fpath, opts );

	copts.name = 'polyval_a0';
	str = compileC( A0, copts );
	file = insert( file, copts.name, str );

	copts.name = 'polyval_a1';
	str = compileC( A1, copts );
	file = insert( file, copts.name, str );

	copts.name = 'polyval_r';
	str = compileC( R, copts );
	file = insert( file, copts.name, str );

	copts.name = 'polyval_s';
	str = compileC( S, copts );
	file = insert( file, copts.name, str );

	copts.name = 'polyval_t2';
	str = compileC( T2, copts );
	file = insert( file, copts.name, str );

	copts.name = 'polyval_u';
	str = compileC( U, copts );
	file = insert( file, copts.name, str );

	copts.name = 'polyval_v';
	str = compileC( V, copts );
	file = insert( file, copts.name, str );

	copts.name = 'polyval_w';
	str = compileC( W, copts );
	file = insert( file, copts.name, str );

	writeFileSync( fpath, file, opts );
}

main();
