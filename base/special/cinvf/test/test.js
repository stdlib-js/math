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

/* eslint-disable id-length */

'use strict';

// MODULES //

var tape = require( 'tape' );
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isnanf = require( './../../../../base/assert/is-nanf' );
var absf = require( './../../../../base/special/absf' );
var EPS = require( '@stdlib/constants/float32/eps' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var cinvf = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );
var largeNegativeImaginaryComponents = require( './fixtures/julia/large_negative_imaginary_components.json' );
var largeNegativeRealComponents = require( './fixtures/julia/large_negative_real_components.json' );
var largePositiveImaginaryComponents = require( './fixtures/julia/large_positive_imaginary_components.json' );
var largePositiveRealComponents = require( './fixtures/julia/large_positive_real_components.json' );
var tinyNegativeImaginaryComponents = require( './fixtures/julia/tiny_negative_imaginary_components.json' );
var tinyNegativeRealComponents = require( './fixtures/julia/tiny_negative_real_components.json' );
var tinyPositiveImaginaryComponents = require( './fixtures/julia/tiny_positive_imaginary_components.json' );
var tinyPositiveRealComponents = require( './fixtures/julia/tiny_positive_real_components.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cinvf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the inverse of a single-precision complex floating-point number', function test( t ) {
	var v;

	v = cinvf( new Complex64( 2.0, 4.0 ) );
	t.strictEqual( realf( v ), float64ToFloat32( 0.1 ), 'returns expected value' );
	t.strictEqual( imagf( v ), float64ToFloat32( -0.2 ), 'returns expected value' );
	t.end();
});

tape( 'the function computes a complex inverse', function test( t ) {
	var delta;
	var qre;
	var qim;
	var tol;
	var re;
	var im;
	var i;
	var q;

	re = data.re;
	im = data.im;
	qre = data.qre;
	qim = data.qim;

	for ( i = 0; i < re.length; i++ ) {
		q = cinvf( new Complex64( re[ i ], im[ i ] ) );

		if ( realf( q ) === qre[ i ] ) {
			t.strictEqual( realf( q ), qre[ i ], 'returns expected real component' );
		} else {
			delta = absf( realf( q ) - qre[ i ] );
			tol = 1.4 * EPS * absf( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. real: '+realf( q )+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( imagf( q ) === qim[ i ] ) {
			t.strictEqual( imagf( q ), qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = absf( imagf( q ) - qim[ i ] );
			tol = 1.4 * EPS * absf( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. imag: '+imagf( q )+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex inverse (large negative imaginary components)', function test( t ) {
	var delta;
	var tol;
	var qre;
	var qim;
	var re;
	var im;
	var i;
	var q;

	re = largeNegativeImaginaryComponents.re;
	im = largeNegativeImaginaryComponents.im;
	qre = largeNegativeImaginaryComponents.qre;
	qim = largeNegativeImaginaryComponents.qim;

	for ( i = 0; i < re.length; i++ ) {
		q = cinvf( new Complex64( re[ i ], im[ i ] ) );

		if ( realf( q ) === qre[ i ] ) {
			t.strictEqual( realf( q ), qre[ i ], 'returns expected real component' );
		} else {
			delta = absf( realf( q ) - qre[ i ] );
			tol = EPS * absf( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. real: '+realf( q )+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( imagf( q ) === qim[ i ] ) {
			t.strictEqual( imagf( q ), qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = absf( imagf( q ) - qim[ i ] );
			tol = EPS * absf( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. imag: '+imagf( q )+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex inverse (large negative real components)', function test( t ) {
	var delta;
	var tol;
	var qre;
	var qim;
	var re;
	var im;
	var i;
	var q;

	re = largeNegativeRealComponents.re;
	im = largeNegativeRealComponents.im;
	qre = largeNegativeRealComponents.qre;
	qim = largeNegativeRealComponents.qim;

	for ( i = 0; i < re.length; i++ ) {
		q = cinvf( new Complex64( re[ i ], im[ i ] ) );

		if ( realf( q ) === qre[ i ] ) {
			t.strictEqual( realf( q ), qre[ i ], 'returns expected real component' );
		} else {
			delta = absf( realf( q ) - qre[ i ] );
			tol = EPS * absf( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. real: '+realf( q )+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( imagf( q ) === qim[ i ] ) {
			t.strictEqual( imagf( q ), qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = absf( imagf( q ) - qim[ i ] );
			tol = EPS * absf( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. imag: '+imagf( q )+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex inverse (large positive imaginary components)', function test( t ) {
	var delta;
	var tol;
	var qre;
	var qim;
	var re;
	var im;
	var i;
	var q;

	re = largePositiveImaginaryComponents.re;
	im = largePositiveImaginaryComponents.im;
	qre = largePositiveImaginaryComponents.qre;
	qim = largePositiveImaginaryComponents.qim;

	for ( i = 0; i < re.length; i++ ) {
		q = cinvf( new Complex64( re[ i ], im[ i ] ) );

		if ( realf( q ) === qre[ i ] ) {
			t.strictEqual( realf( q ), qre[ i ], 'returns expected real component' );
		} else {
			delta = absf( realf( q ) - qre[ i ] );
			tol = EPS * absf( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. real: '+realf( q )+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( imagf( q ) === qim[ i ] ) {
			t.strictEqual( imagf( q ), qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = absf( imagf( q ) - qim[ i ] );
			tol = EPS * absf( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. imag: '+imagf( q )+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex inverse (large positive real components)', function test( t ) {
	var delta;
	var tol;
	var qre;
	var qim;
	var re;
	var im;
	var i;
	var q;

	re = largePositiveRealComponents.re;
	im = largePositiveRealComponents.im;
	qre = largePositiveRealComponents.qre;
	qim = largePositiveRealComponents.qim;

	for ( i = 0; i < re.length; i++ ) {
		q = cinvf( new Complex64( re[ i ], im[ i ] ) );

		if ( realf( q ) === qre[ i ] ) {
			t.strictEqual( realf( q ), qre[ i ], 'returns expected real component' );
		} else {
			delta = absf( realf( q ) - qre[ i ] );
			tol = EPS * absf( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. real: '+realf( q )+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( imagf( q ) === qim[ i ] ) {
			t.strictEqual( imagf( q ), qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = absf( imagf( q ) - qim[ i ] );
			tol = EPS * absf( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. imag: '+imagf( q )+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex inverse (tiny negative imaginary components)', function test( t ) {
	var delta;
	var tol;
	var qre;
	var qim;
	var re;
	var im;
	var i;
	var q;

	re = tinyNegativeImaginaryComponents.re;
	im = tinyNegativeImaginaryComponents.im;
	qre = tinyNegativeImaginaryComponents.qre;
	qim = tinyNegativeImaginaryComponents.qim;

	for ( i = 0; i < re.length; i++ ) {
		q = cinvf( new Complex64( re[ i ], im[ i ] ) );

		if ( realf( q ) === qre[ i ] ) {
			t.strictEqual( realf( q ), qre[ i ], 'returns expected real component' );
		} else {
			delta = absf( realf( q ) - qre[ i ] );
			tol = EPS * absf( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. real: '+realf( q )+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( imagf( q ) === qim[ i ] ) {
			t.strictEqual( imagf( q ), qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = absf( imagf( q ) - qim[ i ] );
			tol = 1.5 * EPS * absf( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. imag: '+imagf( q )+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex inverse (tiny negative real components)', function test( t ) {
	var delta;
	var tol;
	var qre;
	var qim;
	var re;
	var im;
	var i;
	var q;

	re = tinyNegativeRealComponents.re;
	im = tinyNegativeRealComponents.im;
	qre = tinyNegativeRealComponents.qre;
	qim = tinyNegativeRealComponents.qim;

	for ( i = 0; i < re.length; i++ ) {
		q = cinvf( new Complex64( re[ i ], im[ i ] ) );

		if ( realf( q ) === qre[ i ] ) {
			t.strictEqual( realf( q ), qre[ i ], 'returns expected real component' );
		} else {
			delta = absf( realf( q ) - qre[ i ] );
			tol = 1.5 * EPS * absf( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. real: '+realf( q )+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( imagf( q ) === qim[ i ] ) {
			t.strictEqual( imagf( q ), qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = absf( imagf( q ) - qim[ i ] );
			tol = EPS * absf( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. imag: '+imagf( q )+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex inverse (tiny positive imaginary components)', function test( t ) {
	var delta;
	var tol;
	var qre;
	var qim;
	var re;
	var im;
	var i;
	var q;

	re = tinyPositiveImaginaryComponents.re;
	im = tinyPositiveImaginaryComponents.im;
	qre = tinyPositiveImaginaryComponents.qre;
	qim = tinyPositiveImaginaryComponents.qim;

	for ( i = 0; i < re.length; i++ ) {
		q = cinvf( new Complex64( re[ i ], im[ i ] ) );

		if ( realf( q ) === qre[ i ] ) {
			t.strictEqual( realf( q ), qre[ i ], 'returns expected real component' );
		} else {
			delta = absf( realf( q ) - qre[ i ] );
			tol = EPS * absf( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. real: '+realf( q )+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( imagf( q ) === qim[ i ] ) {
			t.strictEqual( imagf( q ), qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = absf( imagf( q ) - qim[ i ] );
			tol = 1.3 * EPS * absf( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. imag: '+imagf( q )+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex inverse (tiny positive real components)', function test( t ) {
	var delta;
	var tol;
	var qre;
	var qim;
	var re;
	var im;
	var i;
	var q;

	re = tinyPositiveRealComponents.re;
	im = tinyPositiveRealComponents.im;
	qre = tinyPositiveRealComponents.qre;
	qim = tinyPositiveRealComponents.qim;

	for ( i = 0; i < re.length; i++ ) {
		q = cinvf( new Complex64( re[ i ], im[ i ] ) );

		if ( realf( q ) === qre[ i ] ) {
			t.strictEqual( realf( q ), qre[ i ], 'returns expected real component' );
		} else {
			delta = absf( realf( q ) - qre[ i ] );
			tol = 1.6 * EPS * absf( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. real: '+realf( q )+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( imagf( q ) === qim[ i ] ) {
			t.strictEqual( imagf( q ), qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = absf( imagf( q ) - qim[ i ] );
			tol = EPS * absf( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. imag: '+imagf( q )+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function may overflow', function test( t ) {
	var v;

	v = cinvf( new Complex64( 5.0e-40, 5.0e-40 ) );
	t.strictEqual( realf( v ), PINF, 'returns expected value' );
	t.strictEqual( imagf( v ), NINF, 'returns expected value' );

	v = cinvf( new Complex64( -5.0e-40, 5.0e-40 ) );
	t.strictEqual( realf( v ), NINF, 'returns expected value' );
	t.strictEqual( imagf( v ), NINF, 'returns expected value' );

	v = cinvf( new Complex64( -5.0e-40, -5.0e-40 ) );
	t.strictEqual( realf( v ), NINF, 'returns expected value' );
	t.strictEqual( imagf( v ), PINF, 'returns expected value' );

	v = cinvf( new Complex64( 5.0e-40, -5.0e-40 ) );
	t.strictEqual( realf( v ), PINF, 'returns expected value' );
	t.strictEqual( imagf( v ), PINF, 'returns expected value' );

	v = cinvf( new Complex64( 0.0, 5.0e-40 ) );
	t.strictEqual( realf( v ), 0.0, 'returns expected value' );
	t.strictEqual( imagf( v ), NINF, 'returns expected value' );

	v = cinvf( new Complex64( 0.0, -5.0e-40 ) );
	t.strictEqual( realf( v ), 0.0, 'returns expected value' );
	t.strictEqual( imagf( v ), PINF, 'returns expected value' );

	v = cinvf( new Complex64( 5.0e-40, 0.0 ) );
	t.strictEqual( realf( v ), PINF, 'returns expected value' );
	t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

	v = cinvf( new Complex64( -5.0e-40, 0.0 ) );
	t.strictEqual( realf( v ), NINF, 'returns expected value' );
	t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function handles very large values (near FLOAT32_BIGGEST)', function test( t ) {
	var v;

	// Test values that trigger the LARGE_THRESHOLD scaling (FLOAT32_BIGGEST * 0.5)
	v = cinvf( new Complex64( 3.0e38, 3.0e38 ) );
	t.strictEqual( isNumber( realf( v ) ), true, 'returns expected value' );
	t.strictEqual( isNumber( imagf( v ) ), true, 'returns expected value' );

	v = cinvf( new Complex64( -3.0e38, 3.0e38 ) );
	t.strictEqual( isNumber( realf( v ) ), true, 'returns expected value' );
	t.strictEqual( isNumber( imagf( v ) ), true, 'returns expected value' );

	v = cinvf( new Complex64( 3.0e38, -3.0e38 ) );
	t.strictEqual( isNumber( realf( v ) ), true, 'returns expected value' );
	t.strictEqual( isNumber( imagf( v ) ), true, 'returns expected value' );

	v = cinvf( new Complex64( 2.0e38, 0.0 ) );
	t.strictEqual( isNumber( realf( v ) ), true, 'returns expected value' );
	t.strictEqual( isNumber( imagf( v ) ), true, 'returns expected value' );

	t.end();
});

tape( 'if a real or imaginary component is `NaN`, all components are `NaN`', function test( t ) {
	var v;

	v = cinvf( new Complex64( NaN, 3.0 ) );
	t.strictEqual( isnanf( realf( v ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( imagf( v ) ), true, 'returns expected value' );

	v = cinvf( new Complex64( 5.0, NaN ) );
	t.strictEqual( isnanf( realf( v ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( imagf( v ) ), true, 'returns expected value' );

	v = cinvf( new Complex64( NaN, NaN ) );
	t.strictEqual( isnanf( realf( v ) ), true, 'returns expected value' );
	t.strictEqual( isnanf( imagf( v ) ), true, 'returns expected value' );

	t.end();
});
