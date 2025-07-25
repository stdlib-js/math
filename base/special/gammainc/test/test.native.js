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

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isSameValue = require( '@stdlib/assert/is-same-value' );
var ulpdiff = require( '@stdlib/number/float64/base/ulp-difference' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var gammainc = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( gammainc instanceof Error )
};


// FIXTURES //

var small = require( './fixtures/cpp/small.json' );
var medium = require( './fixtures/cpp/medium.json' );
var largeXSmallS = require( './fixtures/cpp/large_x_small_s.json' );
var largeXMediumS = require( './fixtures/cpp/large_x_medium_s.json' );
var largeXLargeS = require( './fixtures/cpp/large_x_large_s.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gammainc, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', opts, function test( t ) {
	var val;

	val = gammainc( NaN, 2, true, false );
	t.strictEqual( isSameValue( val, NaN ), true, 'returns expected value' );

	val = gammainc( 4, NaN, true, false );
	t.strictEqual( isSameValue( val, NaN ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns NaN if provided x < 0 or s <= 0', opts, function test( t ) {
	var val;

	// Case: x < 0
	val = gammainc( -0.1, 2, true, false );
	t.strictEqual( isSameValue( val, NaN ), true, 'returns expected value' );

	// Case: s = 0
	val = gammainc( 0.1, 0, true, false );
	t.strictEqual( isSameValue( val, NaN ), true, 'returns expected value' );

	// Case: s < 0
	val = gammainc( 0.1, -2, true, false );
	t.strictEqual( isSameValue( val, NaN ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns 0 for the lower incomplete gamma function when the first argument is zero', opts, function test( t ) {
	var val;
	var s;
	for ( s = 1; s < 10; s++ ) {
		val = gammainc( 0, s, true, false );
		t.strictEqual( isSameValue( val, 0.0 ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function correctly evaluates the lower incomplete gamma function for small `x` and small `s`', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var s;
	var i;

	expected = small.lower_regularized;
	x = small.x;
	s = small.s;

	for ( i = 0; i < x.length; i++ ) {
		actual = gammainc( x[ i ], s[ i ], true, false );
		t.strictEqual( ulpdiff( actual, expected[ i ] ) <= 45, true, 'returns expected value within 45 ulp' );
	}
	t.end();
});

tape( 'the function correctly evaluates the upper incomplete gamma function for small `x` and small `s`', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var s;
	var i;

	expected = small.upper_regularized;
	x = small.x;
	s = small.s;

	for ( i = 0; i < x.length; i++ ) {
		actual = gammainc( x[ i ], s[ i ], true, true );
		t.strictEqual( ulpdiff( actual, expected[ i ] ) <= 33, true, 'returns expected value within 33 ulp' );
	}
	t.end();
});

tape( 'the function correctly evaluates the unregularized lower incomplete gamma function for small `x` and small `s`', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var s;
	var i;

	expected = small.lower_unregularized;
	x = small.x;
	s = small.s;

	for ( i = 0; i < x.length; i++ ) {
		actual = gammainc( x[ i ], s[ i ], false, false );
		t.strictEqual( ulpdiff( actual, expected[ i ] ) <= 6, true, 'returns expected value within 6 ulp' );
	}
	t.end();
});

tape( 'the function correctly evaluates the unregularized upper incomplete gamma function for small `x` and small `s`', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var s;
	var i;

	expected = small.upper_unregularized;
	x = small.x;
	s = small.s;

	for ( i = 0; i < x.length; i++ ) {
		actual = gammainc( x[ i ], s[ i ], false, true );
		t.strictEqual( ulpdiff( actual, expected[ i ] ) <= 9, true, 'returns expected value within 9 ulp' );
	}
	t.end();
});

tape( 'the function correctly evaluates the lower incomplete gamma function for medium `x` and medium `s`', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var s;
	var i;

	expected = medium.lower_regularized;
	x = medium.x;
	s = medium.s;

	for ( i = 0; i < x.length; i++ ) {
		actual = gammainc( x[ i ], s[ i ], true, false );
		t.strictEqual( ulpdiff( actual, expected[ i ] ) <= 98, true, 'returns expected value within 98 ulp' );
	}
	t.end();
});

tape( 'the function correctly evaluates the upper incomplete gamma function for medium `x` and medium `s`', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var s;
	var i;

	expected = medium.upper_regularized;
	x = medium.x;
	s = medium.s;

	for ( i = 0; i < x.length; i++ ) {
		actual = gammainc( x[ i ], s[ i ], true, true );
		t.strictEqual( ulpdiff( actual, expected[ i ] ) <= 84, true, 'returns expected value within 84 ulp' );
	}
	t.end();
});

tape( 'the function correctly evaluates the unregularized lower incomplete gamma function for medium `x` and medium `s`', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var s;
	var i;

	expected = medium.lower_unregularized;
	x = medium.x;
	s = medium.s;

	for ( i = 0; i < x.length; i++ ) {
		actual = gammainc( x[ i ], s[ i ], false, false );
		t.strictEqual( ulpdiff( actual, expected[ i ] ) <= 6, true, 'returns expected value within 6 ulp' );
	}
	t.end();
});

tape( 'the function correctly evaluates the unregularized upper incomplete gamma function for medium `x` and medium `s`', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var s;
	var i;

	expected = medium.upper_unregularized;
	x = medium.x;
	s = medium.s;

	for ( i = 0; i < x.length; i++ ) {
		actual = gammainc( x[ i ], s[ i ], false, true );
		t.strictEqual( ulpdiff( actual, expected[ i ] ) <= 9, true, 'returns expected value within 9 ulp' );
	}
	t.end();
});

tape( 'the function correctly evaluates the lower incomplete gamma function for large `x` and small `s`', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var s;
	var i;

	expected = largeXSmallS.lower_regularized;
	x = largeXSmallS.x;
	s = largeXSmallS.s;

	for ( i = 0; i < x.length; i++ ) {
		actual = gammainc( x[ i ], s[ i ], true, false );
		t.strictEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function correctly evaluates the upper incomplete gamma function for large `x` and small `s`', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var s;
	var i;

	expected = largeXSmallS.upper_regularized;
	x = largeXSmallS.x;
	s = largeXSmallS.s;

	for ( i = 0; i < x.length; i++ ) {
		actual = gammainc( x[ i ], s[ i ], true, true );
		t.strictEqual( ulpdiff( actual, expected[ i ] ) <= 61, true, 'returns expected value within 61 ulp' );
	}
	t.end();
});

tape( 'the function correctly evaluates the unregularized lower incomplete gamma function for large `x` and small `s`', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var s;
	var i;

	expected = largeXSmallS.lower_unregularized;
	x = largeXSmallS.x;
	s = largeXSmallS.s;

	for ( i = 0; i < x.length; i++ ) {
		actual = gammainc( x[ i ], s[ i ], false, false );
		t.strictEqual( ulpdiff( actual, expected[ i ] ) <= 6, true, 'returns expected value within 6 ulp' );
	}
	t.end();
});

tape( 'the function correctly evaluates the unregularized upper incomplete gamma function for large `x` and small `s`', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var s;
	var i;

	expected = largeXSmallS.upper_unregularized;
	x = largeXSmallS.x;
	s = largeXSmallS.s;

	for ( i = 0; i < x.length; i++ ) {
		actual = gammainc( x[ i ], s[ i ], false, true );
		t.strictEqual( ulpdiff( actual, expected[ i ] ) <= 56, true, 'returns expected value within 56 ulp' );
	}
	t.end();
});

tape( 'the function correctly evaluates the lower incomplete gamma function for large `x` and medium `s`', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var s;
	var i;

	expected = largeXMediumS.lower_regularized;
	x = largeXMediumS.x;
	s = largeXMediumS.s;

	for ( i = 0; i < x.length; i++ ) {
		actual = gammainc( x[ i ], s[ i ], true, false );
		t.strictEqual( ulpdiff( actual, expected[ i ] ) <= 1, true, 'returns expected value within 1 ulp' );
	}
	t.end();
});

tape( 'the function correctly evaluates the upper incomplete gamma function for large `x` and medium `s`', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var s;
	var i;

	expected = largeXMediumS.upper_regularized;
	x = largeXMediumS.x;
	s = largeXMediumS.s;

	for ( i = 0; i < x.length; i++ ) {
		actual = gammainc( x[ i ], s[ i ], true, true );
		t.strictEqual( ulpdiff( actual, expected[ i ] ) <= 134, true, 'returns expected value within 134 ulp' );
	}
	t.end();
});

tape( 'the function correctly evaluates the unregularized lower incomplete gamma function for large `x` and medium `s`', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var s;
	var i;

	expected = largeXMediumS.lower_unregularized;
	x = largeXMediumS.x;
	s = largeXMediumS.s;

	for ( i = 0; i < x.length; i++ ) {
		actual = gammainc( x[ i ], s[ i ], false, false );
		t.strictEqual( ulpdiff( actual, expected[ i ] ) <= 5, true, 'returns expected value within 5 ulp' );
	}
	t.end();
});

tape( 'the function correctly evaluates the unregularized upper incomplete gamma function for large `x` and medium `s`', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var s;
	var i;

	expected = largeXMediumS.upper_unregularized;
	x = largeXMediumS.x;
	s = largeXMediumS.s;

	for ( i = 0; i < x.length; i++ ) {
		actual = gammainc( x[ i ], s[ i ], false, true );
		t.strictEqual( ulpdiff( actual, expected[ i ] ) <= 160, true, 'returns expected value within 160 ulp' );
	}
	t.end();
});

tape( 'the function correctly evaluates the lower incomplete gamma function for large `x` and large `s`', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var s;
	var i;

	expected = largeXLargeS.lower_regularized;
	x = largeXLargeS.x;
	s = largeXLargeS.s;

	for ( i = 0; i < x.length; i++ ) {
		actual = gammainc( x[ i ], s[ i ], true, false );

		if ( expected[ i ] === 'PINF' ) {
			t.strictEqual( isSameValue( actual, PINF ), true, 'returns expected value' );
			continue;
		}
		// NOTE: The difference is high because some of the expected values are very small.
		t.strictEqual( ulpdiff( actual, expected[ i ] ) <= 1370, true, 'returns expected value within 1370 ulp' );
	}
	t.end();
});

tape( 'the function correctly evaluates the upper incomplete gamma function for large `x` and large `s`', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var s;
	var i;

	expected = largeXLargeS.upper_regularized;
	x = largeXLargeS.x;
	s = largeXLargeS.s;

	for ( i = 0; i < x.length; i++ ) {
		actual = gammainc( x[ i ], s[ i ], true, true );
		if ( expected[ i ] === 'PINF' ) {
			t.strictEqual( isSameValue( actual, PINF ), true, 'returns expected value' );
			continue;
		}
		// NOTE: The difference is high because some of the expected values are very large.
		t.strictEqual( ulpdiff( actual, expected[ i ] ) <= 658, true, 'returns expected value within 658 ulp' );
	}
	t.end();
});

tape( 'the function correctly evaluates the unregularized lower incomplete gamma function for large `x` and large `s`', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var s;
	var i;

	expected = largeXLargeS.lower_unregularized;
	x = largeXLargeS.x;
	s = largeXLargeS.s;

	for ( i = 0; i < x.length; i++ ) {
		actual = gammainc( x[ i ], s[ i ], false, false );
		if ( expected[ i ] === 'PINF' ) {
			t.strictEqual( isSameValue( actual, PINF ), true, 'returns expected value' );
			continue;
		}
		// NOTE: The difference is high because some of the expected values are very large and the compiler optimizations have been disabled.
		t.strictEqual( ulpdiff( actual, expected[ i ] ) <= 947, true, 'returns expected value within 947 ulp' );
	}
	t.end();
});

tape( 'the function correctly evaluates the unregularized upper incomplete gamma function for large `x` and large `s`', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var s;
	var i;

	expected = largeXLargeS.upper_unregularized;
	x = largeXLargeS.x;
	s = largeXLargeS.s;

	for ( i = 0; i < x.length; i++ ) {
		actual = gammainc( x[ i ], s[ i ], false, true );
		if ( expected[ i ] === 'PINF' ) {
			t.strictEqual( isSameValue( actual, PINF ), true, 'returns expected value' );
			continue;
		}
		// NOTE: The difference is high because some of the expected values are very large and the compiler optimizations have been disabled.
		t.strictEqual( ulpdiff( actual, expected[ i ] ) <= 1544, true, 'returns expected value within 1544 ulp' );
	}
	t.end();
});
