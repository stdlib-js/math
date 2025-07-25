/*
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { NumericArray } from '@stdlib/types/array';

/**
* Simultaneously computes the sine and cosine of an angle measured in radians within the interval `[-π/4, π/4]` and stores the results in a provided output array.
*
* @param x - input value (in radians, assumed to be bounded by `~π/4` in magnitude)
* @param y - tail of `x`
* @param out - output array
* @param stride - output array stride
* @param offset - output array index offset
* @returns sine and cosine
*
* @example
* var v = kernelSincos( 0.0, 0.0, [ 0.0, 0.0 ], 1, 0 );
* // returns [ ~0.0, ~1.0 ]
*
* @example
* var v = kernelSincos( 3.141592653589793/2.0, 0.0, [ 0.0, 0.0 ], 1, 0 );
* // returns [ ~1.0, ~0.0 ]
*
* @example
* var v = kernelSincos( -3.141592653589793/6.0, 0.0, [ 0.0, 0.0 ], 1, 0 );
* // returns [ ~-0.5, ~0.866 ]
*
* @example
* var v = kernelSincos( NaN, 0.0, [ 0.0, 0.0 ], 1, 0 );
* // returns [ NaN, NaN ]
*/
declare function kernelSincos<T extends NumericArray>( x: number, y: number, out: T, stride: number, offset: number ): T;


// EXPORTS //

export = kernelSincos;
