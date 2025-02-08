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
var abs = require( './../../../../base/special/abs' );
var EPS = require( '@stdlib/constants/float32/eps' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var HALF_PI = require( '@stdlib/constants/float32/half-pi' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var isNegativeZerof = require( './../../../../base/assert/is-negative-zerof' );
var isPositiveZerof = require( './../../../../base/assert/is-positive-zerof' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var atanf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( atanf instanceof Error )
};


// FIXTURES //

var largerNegative = require( './fixtures/julia/larger_negative.json' );
var largerPositive = require( './fixtures/julia/larger_positive.json' );
var largeNegative = require( './fixtures/julia/large_negative.json' );
var largePositive = require( './fixtures/julia/large_positive.json' );
var mediumNegative = require( './fixtures/julia/medium_negative.json' );
var mediumPositive = require( './fixtures/julia/medium_positive.json' );
var smallNegative = require( './fixtures/julia/small_negative.json' );
var smallPositive = require( './fixtures/julia/small_positive.json' );
var smaller = require( './fixtures/julia/smaller.json' );
var tinyNegative = require( './fixtures/julia/tiny_negative.json' );
var tinyPositive = require( './fixtures/julia/tiny_positive.json' );
var hugeNegative = require( './fixtures/julia/huge_negative.json' );
var hugePositive = require( './fixtures/julia/huge_positive.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.true( typeof atan, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the arctangent on the interval `[ -1e-38, -1e-30] `', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	x = tinyNegative.x;
	expected = tinyNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = atanf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.equal( y, e, 'x: '+x[ i ]+'. E: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the arctangent on the interval `[ 1e-30, 1e-38 ]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	x = tinyPositive.x;
	expected = tinyPositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = atanf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.equal( y, e, 'x: '+x[ i ]+'. E: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the arctangent on the interval `[ -0.8, 0.8 ]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	x = smaller.x;
	expected = smaller.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = atanf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.equal( y, e, 'x: '+x[ i ]+'. E: '+e );
		} else {
			delta = abs( y - e );
			tol = 1.8 * EPS * abs( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the arctangent on the interval `[ -1.0, -0.8 ]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	x = smallNegative.x;
	expected = smallNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = atanf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.equal( y, e, 'x: '+x[ i ]+'. E: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the arctangent on the interval `[ 0.8, 1.0 ]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	x = smallPositive.x;
	expected = smallPositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = atanf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.equal( y, e, 'x: '+x[ i ]+'. E: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the arctangent on the interval `[ -3.0, -1.0 ]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	x = mediumNegative.x;
	expected = mediumNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = atanf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.equal( y, e, 'x: '+x[ i ]+'. E: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the arctangent on the interval `[ 1.0, 3.0 ]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	x = mediumPositive.x;
	expected = mediumPositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = atanf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.equal( y, e, 'x: '+x[ i ]+'. E: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the arctangent on the interval `[ 3.0, 100.0 ]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	x = largePositive.x;
	expected = largePositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = atanf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.equal( y, e, 'x: '+x[ i ]+'. E: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the arctangent on the interval `[ -100.0, -3.0 ]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	x = largeNegative.x;
	expected = largeNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = atanf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.equal( y, e, 'x: '+x[ i ]+'. E: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the arctangent on the interval `[ 100.0, 1000.0 ]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	x = largerPositive.x;
	expected = largerPositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = atanf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.equal( y, e, 'x: '+x[ i ]+'. E: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the arctangent on the interval `[ -1000.0, -100.0 ]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	x = largerNegative.x;
	expected = largerNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = atanf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.equal( y, e, 'x: '+x[ i ]+'. E: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the arctangent on the interval `[ -1e20, -1e28 ]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	x = hugeNegative.x;
	expected = hugeNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = atanf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.equal( y, e, 'x: '+x[ i ]+'. E: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the arctangent on the interval `[ 1e30, 1e38 ]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	x = hugePositive.x;
	expected = hugePositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = atanf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.equal( y, e, 'x: '+x[ i ]+'. E: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', opts, function test( t ) {
	var v = atanf( NaN );
	t.equal( isnanf( v ), true, 'returns NaN' );
	t.end();
});

tape( 'the function returns `pi/2` if provided `+infinity`', opts, function test( t ) {
	var v = atanf( PINF );
	t.equal( v, HALF_PI, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-pi/2` if provided `-infinity`', opts, function test( t ) {
	var v = atanf( NINF );
	t.equal( v, -HALF_PI, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-0` if provided `-0`', opts, function test( t ) {
	var v = atanf( -0.0 );
	t.equal( isNegativeZerof( v ), true, 'returns -0' );
	t.end();
});

tape( 'the function returns `0` if provided +0', opts, function test( t ) {
	var v;

	v = atanf( 0.0 );
	t.equal( isPositiveZerof( v ), true, 'returns +0' );

	v = atanf( +0.0 );
	t.equal( isPositiveZerof( v ), true, 'returns +0' );

	t.end();
});
