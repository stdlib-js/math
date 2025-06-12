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
var writeFileSync = require( '@stdlib/fs/write-file' ).sync;
var currentYear = require( '@stdlib/time/current-year' );
var licenseHeader = require( '@stdlib/_tools/licenses/header' );
var compile = require( './../../../../../base/tools/evalpoly-compile' );


// VARIABLES //

// Polynomial coefficients ordered in ascending degree...
var SIN_COEF = [
	-1.66666666666666307295e-1, // 0xbfc5555555555548
	8.33333333332211858878e-3, // 0x3f8111111110f7d0
	-1.98412698295895385996e-4, // 0xbf2a01a019bfdf03
	2.75573136213857245213e-6, // 0x3ec71de3567d48a1
	-2.50507477628578072866e-8, // 0xbe5ae5e5a9291f5d
	1.58962301576546568060e-10 // 0x3de5d8fd1fd19ccd
];
var COS_COEF = [
	4.16666666666665929218e-2, // 0x3fa555555555554b
	-1.38888888888730564116e-3, // 0xbf56c16c16c14f91
	2.48015872888517045348e-5, // 0x3efa01a019c844f5
	-2.75573141792967388112e-7, // 0xbe927e4f7eac4bc6
	2.08757008419747316778e-9, // 0x3e21ee9d7b4e3f05
	-1.13585365213876817300e-11 // 0xbda8fa49a0861a9b
];

// Header to add to output files:
var header = licenseHeader( 'Apache-2.0', 'js', {
	'year': currentYear(),
	'copyright': 'The Stdlib Authors'
});
header += '\n/* This is a generated file. Do not edit directly. */\n';


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var fpath;
	var opts;
	var str;

	opts = {
		'encoding': 'utf8'
	};

	fpath = resolve( __dirname, 'polyval_sin.js' );
	str = header + compile( SIN_COEF );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, 'polyval_cos.js' );
	str = header + compile( COS_COEF );
	writeFileSync( fpath, str, opts );
}

main();
