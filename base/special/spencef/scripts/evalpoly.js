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
var A = [
	1.00000000000000000126e0,
	3.29771340985225106936e0,
	4.25697156008121755724e0,
	2.71149851196553469920e0,
	8.79691311754530315341e-1,
	1.33847639578309018650e-1,
	7.31589045238094711071e-3,
	4.65128586073990045278e-5
];
var B = [
	9.99999999999999998740e-1,
	3.54771340985225096217e0,
	5.03278880143316990390e0,
	3.63800533345137075418e0,
	1.41172597751831069617e0,
	2.82974860602568089943e-1,
	2.54043763932544379113e-2,
	6.90990488912553276999e-4
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

	fpath = resolve( __dirname, '..', 'lib', 'polyval_a.js' );
	str = header + compile( A, {
		'dtype': 'float32'
	});
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_b.js' );
	str = header + compile( B, {
		'dtype': 'float32'
	});
	writeFileSync( fpath, str, opts );

	copts = {
		'dtype': 'float',
		'name': ''
	};

	fpath = resolve( __dirname, '..', 'src', 'main.c' );
	file = readFileSync( fpath, opts );

	copts.name = 'polyval_a';
	str = compileC( A, copts );
	file = insert( file, copts.name, str );

	copts.name = 'polyval_b';
	str = compileC( B, copts );
	file = insert( file, copts.name, str );

	writeFileSync( fpath, file, opts );
}

main();
