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
var isnanf = require( './../../../../base/assert/is-nanf' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var EPS = require( '@stdlib/constants/float32/eps' );
var abs = require( './../../../../base/special/abs' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var tryRequire = require( '@stdlib/utils/try-require' );


// FIXTURES //

var hugePositive = require( './fixtures/julia/huge_positive.json' );
var veryLargePositive = require( './fixtures/julia/very_large_positive.json' );
var largePositive = require( './fixtures/julia/large_positive.json' );
var mediumPositive = require( './fixtures/julia/medium_positive.json' );
var smallPositive = require( './fixtures/julia/small_positive.json' );
var smaller = require( './fixtures/julia/smaller.json' );
var tinyPositive = require( './fixtures/julia/tiny_positive.json' );
var subnormal = require( './fixtures/julia/subnormal.json' );
var hugeNegative = require( './fixtures/julia/huge_negative.json' );
var veryLargeNegative = require( './fixtures/julia/very_large_negative.json' );
var largeNegative = require( './fixtures/julia/large_negative.json' );
var mediumNegative = require( './fixtures/julia/medium_negative.json' );
var smallNegative = require( './fixtures/julia/small_negative.json' );
var tinyNegative = require( './fixtures/julia/tiny_negative.json' );


// VARIABLES //

var rcbrtf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( rcbrtf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof rcbrtf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function evaluates the reciprocal cube root of `x` on the interval `[50,500]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	expected = veryLargePositive.expected;
	x = veryLargePositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = rcbrtf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.strictEqual( y, e, 'x: '+x[ i ]+', y: '+y+', expected: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the reciprocal cube root of `x` on the interval `[20,50]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	expected = largePositive.expected;
	x = largePositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = rcbrtf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.strictEqual( y, e, 'x: '+x[ i ]+', y: '+y+', expected: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the reciprocal cube root of `x` on the interval `[3,20]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	expected = mediumPositive.expected;
	x = mediumPositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = rcbrtf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.strictEqual( y, e, 'x: '+x[ i ]+', y: '+y+', expected: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the reciprocal cube root of `x` on the interval `[0.8,3]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	expected = smallPositive.expected;
	x = smallPositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = rcbrtf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.strictEqual( y, e, 'x: '+x[ i ]+', y: '+y+', expected: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the reciprocal cube root of `x` on the interval `[0.0,0.8]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	expected = smaller.expected;
	x = smaller.x;
	for ( i = 0; i < x.length; i++ ) {
		y = rcbrtf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.strictEqual( y, e, 'x: '+x[ i ]+', y: '+y+', expected: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the reciprocal cube root of `x` on the interval `[1e-30,1e-38]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	expected = tinyPositive.expected;
	x = tinyPositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = rcbrtf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.strictEqual( y, e, 'x: '+x[ i ]+', y: '+y+', expected: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the reciprocal cube root of subnormal `x`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	expected = subnormal.expected;
	x = subnormal.x;
	for ( i = 0; i < x.length; i++ ) {
		y = rcbrtf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.strictEqual( y, e, 'x: '+x[ i ]+', y: '+y+', expected: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the reciprocal cube root of `x` (huge positive)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	expected = hugePositive.expected;
	x = hugePositive.x;
	for ( i = 0; i < x.length; i++ ) {
		y = rcbrtf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.strictEqual( y, e, 'x: '+x[ i ]+', y: '+y+', expected: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the reciprocal cube root of `x` (huge negative)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	expected = hugeNegative.expected;
	x = hugeNegative.x;
	for ( i = 0; i < x.length; i++ ) {
		y = rcbrtf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.strictEqual( y, e, 'x: '+x[ i ]+', y: '+y+', expected: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the reciprocal cube root of `x` on the interval `[-50,-500]', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	expected = veryLargeNegative.expected;
	x = veryLargeNegative.x;
	for ( i = 0; i < x.length; i++ ) {
		y = rcbrtf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.strictEqual( y, e, 'x: '+x[ i ]+', y: '+y+', expected: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the reciprocal cube root of `x` on the interval `[-20,-50]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	expected = largeNegative.expected;
	x = largeNegative.x;
	for ( i = 0; i < x.length; i++ ) {
		y = rcbrtf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.strictEqual( y, e, 'x: '+x[ i ]+', y: '+y+', expected: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the reciprocal cube root of `x` on the interval `[-20,-3]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	expected = mediumNegative.expected;
	x = mediumNegative.x;
	for ( i = 0; i < x.length; i++ ) {
		y = rcbrtf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.strictEqual( y, e, 'x: '+x[ i ]+', y: '+y+', expected: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the reciprocal cube root of `x` on the interval `[-3,-0.8]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	expected = smallNegative.expected;
	x = smallNegative.x;
	for ( i = 0; i < x.length; i++ ) {
		y = rcbrtf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.strictEqual( y, e, 'x: '+x[ i ]+', y: '+y+', expected: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the reciprocal cube root of `x` on the interval `[-0.8,0.8]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	expected = smaller.expected;
	x = smaller.x;
	for ( i = 0; i < x.length; i++ ) {
		y = rcbrtf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.strictEqual( y, e, 'x: '+x[ i ]+', y: '+y+', expected: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the reciprocal cube root of `x` on the interval `[-1e-30,-1e-38]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	expected = tinyNegative.expected;
	x = tinyNegative.x;
	for ( i = 0; i < x.length; i++ ) {
		y = rcbrtf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.strictEqual( y, e, 'x: '+x[ i ]+', y: '+y+', expected: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. Δ: '+delta+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', opts, function test( t ) {
	var v = rcbrtf( NaN );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `0.0` if provided `+infinity`', opts, function test( t ) {
	var v = rcbrtf( PINF );
	t.strictEqual( v, 0.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+infinity` if provided `+0`', opts, function test( t ) {
	var v = rcbrtf( +0.0 );
	t.strictEqual( v, PINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-infinity` if provided `-0`', opts, function test( t ) {
	var v = rcbrtf( -0.0 );
	t.strictEqual( v, NINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `0.0` if provided `-infinity`', opts, function test( t ) {
	var v = rcbrtf( NINF );
	t.strictEqual( v, 0.0, 'returns expected value' );
	t.end();
});
