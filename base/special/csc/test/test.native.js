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

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnan = require( './../../../../base/assert/is-nan' );
var abs = require( './../../../../base/special/abs' );
var PI = require( '@stdlib/constants/float64/pi' );
var EPS = require( '@stdlib/constants/float64/eps' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var csc = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( csc instanceof Error )
};


// FIXTURES //

var hugeNegative = require( './fixtures/julia/huge_negative.json' );
var hugePositive = require( './fixtures/julia/huge_positive.json' );
var veryLargeNegative = require( './fixtures/julia/very_large_negative.json' );
var veryLargePositive = require( './fixtures/julia/very_large_positive.json' );
var largeNegative = require( './fixtures/julia/large_negative.json' );
var largePositive = require( './fixtures/julia/large_positive.json' );
var mediumNegative = require( './fixtures/julia/medium_negative.json' );
var mediumPositive = require( './fixtures/julia/medium_positive.json' );
var smallNegative = require( './fixtures/julia/small_negative.json' );
var smallPositive = require( './fixtures/julia/small_positive.json' );
var smaller = require( './fixtures/julia/smaller.json' );
var tinyNegative = require( './fixtures/julia/tiny_negative.json' );
var tinyPositive = require( './fixtures/julia/tiny_positive.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok(true, __filename);
	t.true(typeof csc, 'function', 'main export is a function');
	t.end();
});

tape( 'the function computes the cosecant (huge negative values)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = hugeNegative.x;
	expected = hugeNegative.expected;

	for (i = 0; i < x.length; i++) {
		y = csc( x[ i ] );
		if (y === expected[ i ]) {
			t.equal(y, expected[ i ], 'x: ' + x[ i ] + '. E: ' + expected[ i ]);
		} else {
			delta = abs(y - expected[ i ]);
			tol = 1.4 * EPS * abs(expected[ i ]);
			t.ok(delta <= tol, 'within tolerance. x: ' + x[ i ] + '. y: ' + y + '. E: ' + expected[ i ] + '. tol: ' + tol + '. Δ: ' + delta + '.');
		}
	}
	t.end();
});

tape( 'the function computes the cosecant (huge positive values)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = hugePositive.x;
	expected = hugePositive.expected;

	for (i = 0; i < x.length; i++) {
		y = csc( x[ i ] );
		if (y === expected[ i ]) {
			t.equal(y, expected[ i ], 'x: ' + x[ i ] + '. E: ' + expected[ i ]);
		} else {
			delta = abs(y - expected[ i ]);
			tol = 1.4 * EPS * abs(expected[ i ]);
			t.ok(delta <= tol, 'within tolerance. x: ' + x[ i ] + '. y: ' + y + '. E: ' + expected[ i ] + '. tol: ' + tol + '. Δ: ' + delta + '.');
		}
	}
	t.end();
});

tape( 'the function computes the cosecant (very large positive values)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = veryLargePositive.x;
	expected = veryLargePositive.expected;

	for (i = 0; i < x.length; i++) {
		y = csc( x[ i ] );
		if (y === expected[ i ]) {
			t.equal(y, expected[ i ], 'x: ' + x[ i ] + '. E: ' + expected[ i ]);
		} else {
			delta = abs(y - expected[ i ]);
			tol = 1.4 * EPS * abs(expected[ i ]);
			t.ok(delta <= tol, 'within tolerance. x: ' + x[ i ] + '. y: ' + y + '. E: ' + expected[ i ] + '. tol: ' + tol + '. Δ: ' + delta + '.');
		}
	}
	t.end();
});

tape( 'the function computes the cosecant (very large negative values)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = veryLargeNegative.x;
	expected = veryLargeNegative.expected;

	for (i = 0; i < x.length; i++) {
		y = csc( x[ i ] );
		if (y === expected[ i ]) {
			t.equal(y, expected[ i ], 'x: ' + x[ i ] + '. E: ' + expected[ i ]);
		} else {
			delta = abs(y - expected[ i ]);
			tol = 1.4 * EPS * abs(expected[ i ]);
			t.ok(delta <= tol, 'within tolerance. x: ' + x[ i ] + '. y: ' + y + '. E: ' + expected[ i ] + '. tol: ' + tol + '. Δ: ' + delta + '.');
		}
	}
	t.end();
});

tape( 'the function computes the cosecant (large positive values)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = largePositive.x;
	expected = largePositive.expected;

	for (i = 0; i < x.length; i++) {
		y = csc( x[ i ] );
		if (y === expected[ i ]) {
			t.equal(y, expected[ i ], 'x: ' + x[ i ] + '. E: ' + expected[ i ]);
		} else {
			delta = abs(y - expected[ i ]);
			tol = 1.4 * EPS * abs(expected[ i ]);
			t.ok(delta <= tol, 'within tolerance. x: ' + x[ i ] + '. y: ' + y + '. E: ' + expected[ i ] + '. tol: ' + tol + '. Δ: ' + delta + '.');
		}
	}
	t.end();
});

tape( 'the function computes the cosecant (large negative values)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = largeNegative.x;
	expected = largeNegative.expected;

	for (i = 0; i < x.length; i++) {
		y = csc( x[ i ] );
		if (y === expected[ i ]) {
			t.equal(y, expected[ i ], 'x: ' + x[ i ] + '. E: ' + expected[ i ]);
		} else {
			delta = abs(y - expected[ i ]);
			tol = 1.4 * EPS * abs(expected[ i ]);
			t.ok(delta <= tol, 'within tolerance. x: ' + x[ i ] + '. y: ' + y + '. E: ' + expected[ i ] + '. tol: ' + tol + '. Δ: ' + delta + '.');
		}
	}
	t.end();
});

tape( 'the function computes the cosecant (medium positive values)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = mediumPositive.x;
	expected = mediumPositive.expected;

	for (i = 0; i < x.length; i++) {
		y = csc( x[ i ] );
		if (y === expected[ i ]) {
			t.equal(y, expected[ i ], 'x: ' + x[ i ] + '. E: ' + expected[ i ]);
		} else {
			delta = abs(y - expected[ i ]);
			tol = 1.4 * EPS * abs(expected[ i ]);
			t.ok(delta <= tol, 'within tolerance. x: ' + x[ i ] + '. y: ' + y + '. E: ' + expected[ i ] + '. tol: ' + tol + '. Δ: ' + delta + '.');
		}
	}
	t.end();
});

tape( 'the function computes the cosecant (medium negative values)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = mediumNegative.x;
	expected = mediumNegative.expected;

	for (i = 0; i < x.length; i++) {
		y = csc( x[ i ] );
		if (y === expected[ i ]) {
			t.equal(y, expected[ i ], 'x: ' + x[ i ] + '. E: ' + expected[ i ]);
		} else {
			delta = abs(y - expected[ i ]);
			tol = 1.4 * EPS * abs(expected[ i ]);
			t.ok(delta <= tol, 'within tolerance. x: ' + x[ i ] + '. y: ' + y + '. E: ' + expected[ i ] + '. tol: ' + tol + '. Δ: ' + delta + '.');
		}
	}
	t.end();
});

tape( 'the function computes the cosecant (small positive values)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = smallPositive.x;
	expected = smallPositive.expected;

	for (i = 0; i < x.length; i++) {
		y = csc( x[ i ] );
		if (y === expected[ i ]) {
			t.equal(y, expected[ i ], 'x: ' + x[ i ] + '. E: ' + expected[ i ]);
		} else {
			delta = abs(y - expected[ i ]);
			tol = 1.4 * EPS * abs(expected[ i ]);
			t.ok(delta <= tol, 'within tolerance. x: ' + x[ i ] + '. y: ' + y + '. E: ' + expected[ i ] + '. tol: ' + tol + '. Δ: ' + delta + '.');
		}
	}
	t.end();
});

tape( 'the function computes the cosecant (small negative values)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = smallNegative.x;
	expected = smallNegative.expected;

	for (i = 0; i < x.length; i++) {
		y = csc( x[ i ] );
		if (y === expected[ i ]) {
			t.equal(y, expected[ i ], 'x: ' + x[ i ] + '. E: ' + expected[ i ]);
		} else {
			delta = abs(y - expected[ i ]);
			tol = 1.4 * EPS * abs(expected[ i ]);
			t.ok(delta <= tol, 'within tolerance. x: ' + x[ i ] + '. y: ' + y + '. E: ' + expected[ i ] + '. tol: ' + tol + '. Δ: ' + delta + '.');
		}
	}
	t.end();
});

tape( 'the function computes the cosecant (smaller values)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = smaller.x;
	expected = smaller.expected;

	for (i = 0; i < x.length; i++) {
		y = csc( x[ i ] );
		if (y === expected[ i ]) {
			t.equal(y, expected[ i ], 'x: ' + x[ i ] + '. E: ' + expected[ i ]);
		} else {
			delta = abs(y - expected[ i ]);
			tol = 1.4 * EPS * abs(expected[ i ]);
			t.ok(delta <= tol, 'within tolerance. x: ' + x[ i ] + '. y: ' + y + '. E: ' + expected[ i ] + '. tol: ' + tol + '. Δ: ' + delta + '.');
		}
	}
	t.end();
});

tape( 'the function computes the cosecant (tiny positive values)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = tinyPositive.x;
	expected = tinyPositive.expected;

	for (i = 0; i < x.length; i++) {
		y = csc( x[ i ] );
		if (y === expected[ i ]) {
			t.equal(y, expected[ i ], 'x: ' + x[ i ] + '. E: ' + expected[ i ]);
		} else {
			delta = abs(y - expected[ i ]);
			tol = 1.4 * EPS * abs(expected[ i ]);
			t.ok(delta <= tol, 'within tolerance. x: ' + x[ i ] + '. y: ' + y + '. E: ' + expected[ i ] + '. tol: ' + tol + '. Δ: ' + delta + '.');
		}
	}
	t.end();
});

tape( 'the function computes the cosecant (tiny negative values)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = tinyNegative.x;
	expected = tinyNegative.expected;

	for (i = 0; i < x.length; i++) {
		y = csc( x[ i ] );
		if (y === expected[ i ]) {
			t.equal(y, expected[ i ], 'x: ' + x[ i ] + '. E: ' + expected[ i ]);
		} else {
			delta = abs(y - expected[ i ]);
			tol = 1.4 * EPS * abs(expected[ i ]);
			t.ok(delta <= tol, 'within tolerance. x: ' + x[ i ] + '. y: ' + y + '. E: ' + expected[ i ] + '. tol: ' + tol + '. Δ: ' + delta + '.');
		}
	}
	t.end();
});

tape( 'if provided a multiple of `-pi`, the function does not return `~+infinity` due to floating-point rounding errors', opts, function test( t ) {
	t.notEqual(csc(-PI), PINF, 'returns expected value');
	t.end();
});

tape( 'if provided a multiple of `pi`, the function does not return `~-infinity`', opts, function test( t ) {
	t.notEqual(csc(PI), NINF, 'returns expected value');
	t.end();
});

tape( 'if provided a `NaN`, the function returns `expected value`', opts, function test( t ) {
	var v = csc(NaN);
	t.equal(isnan(v), true, 'returns NaN');
	t.end();
});

tape( 'if provided `+infinity`, the function returns `expected value`', opts, function test( t ) {
	var v = csc(PINF);
	t.equal(isnan(v), true, 'returns NaN');
	t.end();
});

tape( 'if provided `-infinity`, the function returns `expected value`', opts, function test( t ) {
	var v = csc(NINF);
	t.equal(isnan(v), true, 'returns NaN');
	t.end();
});