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

// C(x) for small x:
var PC = [
	9.99999999999999998822E-1,
	-2.05525900955013891793E-1,
	1.88843319396703850064E-2,
	-6.45191435683965050962E-4,
	9.50428062829859605134E-6,
	-4.98843114573573548651E-8,
	0.0
];

var QC = [
	1.00000000000000000118E0,
	4.12142090722199792936E-2,
	8.68029542941784300606E-4,
	1.22262789024179030997E-5,
	1.25001862479598821474E-7,
	9.15439215774657478799E-10,
	3.99982968972495980367E-12
];

// Auxiliary function f(x):
var PF = [
	3.76329711269987889006E-20,
	1.34283276233062758925E-16,
	1.72010743268161828879E-13,
	1.02304514164907233465E-10,
	3.05568983790257605827E-8,
	4.63613749287867322088E-6,
	3.45017939782574027900E-4,
	1.15220955073585758835E-2,
	1.43407919780758885261E-1,
	4.21543555043677546506E-1,
	0.0
];

var QF = [
	1.25443237090011264384E-20,
	4.52001434074129701496E-17,
	5.88754533621578410010E-14,
	3.60140029589371370404E-11,
	1.12699224763999035261E-8,
	1.84627567348930545870E-6,
	1.55934409164153020873E-4,
	6.44051526508858611005E-3,
	1.16888925859191382142E-1,
	7.51586398353378947175E-1,
	1.00000000000000000000E0
];

// Auxiliary function g(x):
var PG = [
	1.86958710162783235106E-22,
	8.36354435630677421531E-19,
	1.37555460633261799868E-15,
	1.08268041139020870318E-12,
	4.45344415861750144738E-10,
	9.82852443688422223854E-8,
	1.15138826111884280931E-5,
	6.84079380915393090172E-4,
	1.87648584092575249293E-2,
	1.97102833525523411709E-1,
	5.04442073643383265887E-1,
	0.0
];

var QG = [
	1.86958710162783236342E-22,
	8.39158816283118707363E-19,
	1.38796531259578871258E-15,
	1.10273215066240270757E-12,
	4.60680728146520428211E-10,
	1.04314589657571990585E-7,
	1.27545075667729118702E-5,
	8.14679107184306179049E-4,
	2.53603741420338795122E-2,
	3.37748989120019970451E-1,
	1.47495759925128324529E0,
	1.00000000000000000000E0
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

	fpath = resolve( __dirname, '..', 'lib', 'rational_pcqc.js' );
	str = header + compile( PC, QC );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'rational_pfqf.js' );
	str = header + compile( PF, QF );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'rational_pgqg.js' );
	str = header + compile( PG, QG );
	writeFileSync( fpath, str, opts );

	copts = {
		'dtype': 'double',
		'name': ''
	};

	fpath = resolve( __dirname, '..', 'src', 'main.c' );
	file = readFileSync( fpath, opts );

	copts.name = 'rational_pcqc';
	str = compileC( PC, QC, copts );
	file = insert( file, copts.name, str );

	copts.name = 'rational_pfqf';
	str = compileC( PF, QF, copts );
	file = insert( file, copts.name, str );

	copts.name = 'rational_pgqg';
	str = compileC( PG, QG, copts );
	file = insert( file, copts.name, str );

	writeFileSync( fpath, file, opts );
}

main();
