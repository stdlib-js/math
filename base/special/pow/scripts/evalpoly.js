/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var L = [
	5.99999999999994648725e-01, // 0x3FE33333, 0x33333303
	4.28571428578550184252e-01, // 0x3FDB6DB6, 0xDB6FABFF
	3.33333329818377432918e-01, // 0x3FD55555, 0x518F264D
	2.72728123808534006489e-01, // 0x3FD17460, 0xA91D4101
	2.30660745775561754067e-01, // 0x3FCD864A, 0x93C9DB65
	2.06975017800338417784e-01  // 0x3FCA7E28, 0x4A454EEF
];

// `x - x^2/2 + x^3/3 - x^4/4`...
var W = [
	0.5,
	-0.3333333333333333333333,
	0.25
];

var P = [
	1.66666666666666019037e-01,  // 0x3FC55555, 0x5555553E
	-2.77777777770155933842e-03, // 0xBF66C16C, 0x16BEBD93
	6.61375632143793436117e-05,  // 0x3F11566A, 0xAF25DE2C
	-1.65339022054652515390e-06, // 0xBEBBBD41, 0xC5D26BF1
	4.13813679705723846039e-08   // 0x3E663769, 0x72BEA4D0
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

	fpath = resolve( __dirname, '..', 'lib', 'polyval_l.js' );
	str = header + compile( L );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_w.js' );
	str = header + compile( W );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_p.js' );
	str = header + compile( P );
	writeFileSync( fpath, str, opts );

	copts = {
		'dtype': 'double',
		'name': ''
	};

	fpath = resolve( __dirname, '..', 'src', 'main.c' );
	file = readFileSync( fpath, opts );

	copts.name = 'polyval_l';
	str = compileC( L, copts );
	file = insert( file, copts.name, str );

	copts.name = 'polyval_w';
	str = compileC( W, copts );
	file = insert( file, copts.name, str );

	copts.name = 'polyval_p';
	str = compileC( P, copts );
	file = insert( file, copts.name, str );

	writeFileSync( fpath, file, opts );
}

main();
