/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

/**
* Computes the nth Bernoulli number.
*
* @param n - the Bernoulli number to compute
* @returns Bernoulli number
*
* @example
* var y = bernoulli( 0 );
* // returns 1.0
*
* @example
* var y = bernoulli( 1 );
* // returns 0.5
*
* @example
* var y = bernoulli( 2 );
* // returns ~0.167
*
* @example
* var y = bernoulli( 3 );
* // returns 0.0
*
* @example
* var y = bernoulli( 4 );
* // returns ~-0.033
*
* @example
* var y = bernoulli( 5 );
* // returns 0.0
*
* @example
* var y = bernoulli( 20 );
* // returns ~-529.124
*
* @example
* var y = bernoulli( 260 );
* // returns -Infinity
*
* @example
* var y = bernoulli( 262 );
* // returns Infinity
*
* @example
* var y = bernoulli( NaN );
* // returns NaN
*/
declare function bernoulli( n: number ): number;


// EXPORTS //

export = bernoulli;
