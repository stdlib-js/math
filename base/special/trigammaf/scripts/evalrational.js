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
var compile = require( './../../../../base/tools/evalrational-compile' );
var compileC = require( './../../../../base/tools/evalrational-compile-c' );
var substringBefore = require( '@stdlib/string/substring-before' );
var substringAfter = require( '@stdlib/string/substring-after' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

// Polynomial coefficients ordered in ascending degree...
var P12 = [
	-1.1093280605946045,
	-3.8310674472619321,
	-3.3703848401898283,
	0.28080574467981213,
	1.6638069578676164,
	0.64468386819102836
];
var Q12 = [
	1.0,
	3.4535389668541151,
	4.5208926987851437,
	2.7012734178351534,
	0.64468798399785611,
	-0.20314516859987728e-6
];
var P24 = [
	-0.13803835004508849e-7,
	0.50000049158540261,
	1.6077979838469348,
	2.5645435828098254,
	2.0534873203680393,
	0.74566981111565923
];
var Q24 = [
	1.0,
	2.8822787662376169,
	4.1681660554090917,
	2.7853527819234466,
	0.74967671848044792,
	-0.00057069112416246805
];
var P4INF = [
	0.68947581948701249e-17,
	0.49999999999998975,
	1.0177274392923795,
	2.498208511343429,
	2.1921221359427595,
	1.5897035272532764,
	0.40154388356961734
];
var Q4INF = [
	1.0,
	1.7021215452463932,
	4.4290431747556469,
	2.9745631894384922,
	2.3013614809773616,
	0.28360399799075752,
	0.022892987908906897
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

	fpath = resolve( __dirname, '..', 'lib', 'rational_p12q12.js' );
	str = header + compile( P12, Q12, opts );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'rational_p24q24.js' );
	str = header + compile( P24, Q24, opts );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'rational_p4infq4inf.js' );
	str = header + compile( P4INF, Q4INF, opts );
	writeFileSync( fpath, str, opts );

	copts = {
		'dtype': 'float',
		'name': ''
	};

	fpath = resolve( __dirname, '..', 'src', 'main.c' );
	file = readFileSync( fpath, opts );

	copts.name = 'rational_p12q12';
	str = compileC( P12, Q12, copts );
	file = insert( file, copts.name, str );

	copts.name = 'rational_p24q24';
	str = compileC( P24, Q24, copts );
	file = insert( file, copts.name, str );

	copts.name = 'rational_p4infq4inf';
	str = compileC( P4INF, Q4INF, copts );
	file = insert( file, copts.name, str );

	writeFileSync( fpath, file, opts );
}

main();
