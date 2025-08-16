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
var P = [
	14.0261432874996476619570577285003839357,
	43.74732405540314316089531289293124360129,
	50.59547402616588964511581430025589038612,
	26.90456680562548195593733429204228910299,
	6.595765571169314946316366571954421695196,
	0.6007854010515290065101128585795542383721
];
var Q = [
	0.0,
	24.0,
	50.0,
	35.0,
	10.0,
	1.0
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

	fpath = resolve( __dirname, '..', 'lib', 'rational_pq.js' );
	str = header + compile( P, Q, {
		'dtype': 'float32'
	});
	writeFileSync( fpath, str, opts );

	copts = {
		'dtype': 'float',
		'name': 'rational_pq'
	};

	fpath = resolve( __dirname, '..', 'src', 'main.c' );
	file = readFileSync( fpath, opts );

	str = compileC( P, Q, copts );
	file = insert( file, copts.name, str );

	writeFileSync( fpath, file, opts );
}

main();
