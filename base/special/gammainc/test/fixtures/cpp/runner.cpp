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

/**
* Generate Boost test fixtures.
*
* ## Notes
*
* -   Run this script from the directory in which fixtures should be written.
*
*/
#include <stdlib.h>
#include <stdio.h>
#include <boost/random/mersenne_twister.hpp>
#include <boost/random/uniform_int_distribution.hpp>
#include <boost/random/uniform_real_distribution.hpp>
#include <boost/math/special_functions/gamma.hpp>

using boost::random::uniform_real_distribution;
using boost::random::uniform_int_distribution;
using boost::random::mt19937;

// Define a new pseudorandom number generator:
mt19937 rng;

/**
* Generates a linearly spaced numeric array of doubles.
*
* ## Notes
*
* -   Assumes that the output array has at least 2 elements.
* -   Output array is guaranteed to include both the start and end values.
*
*
* @param out    output array
* @param len    array length
* @param start  first value
* @param end    last value
*/
void linspace_f64( double *out, const unsigned int len, const double start, const double end ) {
	unsigned int i;
	double incr;

	incr = (end-start) / (len-1);
	for ( i = 0; i < len-1; i++ ) {
		out[ i ] = start + (incr*i);
	}
	out[ i ] = end;
}

/**
* Generates a linearly spaced numeric array of integers.
*
* ## Notes
*
* -   Assumes that the output array has at least 2 elements.
* -   Output array is guaranteed to include both the start and end values.
*
*
* @param out    output array
* @param len    array length
* @param start  first value
* @param end    last value
*/
void linspace_i32( int *out, const unsigned int len, const int start, const int end ) {
	unsigned int i;
	int incr;

	incr = (end-start) / (len-1);
	for ( i = 0; i < len-1; i++ ) {
		out[ i ] = start + (incr*i);
	}
	out[ i ] = end;
}

/**
* Generates an array of pseudorandom doubles drawn from a uniform distribution.
*
* @param out  output array
* @param len  array length
* @param a    lower bound (inclusive)
* @param b    upper bound (exclusive)
*/
void rand_array_f64( double *out, const unsigned int len, const double a, const double b ) {
	unsigned int i;

	// Define a uniform distribution for generating pseudorandom numbers:
	uniform_real_distribution<> randu( a, b );

	for ( i = 0; i < len; i++ ) {
		out[ i ] = randu( rng );
	}
}

/**
* Generates an array of pseudorandom integers drawn from a uniform distribution.
*
* @param out  output array
* @param len  array length
* @param a    lower bound (inclusive)
* @param b    upper bound (exclusive)
*/
void rand_array_i32( int *out, const unsigned int len, const int a, const int b ) {
	unsigned int i;

	// Define a uniform distribution for generating pseudorandom numbers:
	uniform_int_distribution<> randi( a, b );

	for ( i = 0; i < len; i++ ) {
		out[ i ] = randi( rng );
	}
}

/**
* Casts an array of integers to an array of doubles.
*
* @param out  output array
* @param x    input array
* @param len  array length
*/
void i32_to_f64( double *out, int *x, unsigned int len ) {
	unsigned int i;

	for ( i = 0; i < len; i++ ) {
		out[ i ] = (double) x[ i ];
	}
}

/**
* Casts an array of doubles to an array of integers.
*
* @param out  output array
* @param x    input array
* @param len  array length
*/
void f64_to_i32( int *out, double *x, unsigned int len ) {
	unsigned int i;

	for ( i = 0; i < len; i++ ) {
		out[ i ] = (int) x[ i ];
	}
}

/**
* Writes an array of doubles to a file as a series of comma-separated values.
*
* @param f    file to write to
* @param x    array of doubles
* @param len  array length
*/
void write_array_f64( FILE *f, const double *x, const unsigned int len ) {
	unsigned int i;
	for ( i = 0; i < len; i++ ) {
		fprintf( f, "%.17g", x[ i ] );
		if ( i < len-1 ) {
			fprintf( f, "," );
		}
	}
}

/**
* Writes an array of integers to a file as a series of comma-separated values.
*
* @param f    file to write to
* @param x    array of integers
* @param len  array length
*/
void write_array_i32( FILE *f, const int *x, const unsigned int len ) {
	unsigned int i;

	for ( i = 0; i < len; i++ ) {
		fprintf( f, "%d", x[ i ] );
		if ( i < len-1 ) {
			fprintf( f, "," );
		}
	}
}

/**
* Writes a named array of doubles to a file as JSON.
*
* @param f     file to write to
* @param name  array name
* @param x     data
* @param len   array length
*/
void write_named_array_f64( FILE *f, const char *name, const double *x, const unsigned int len ) {
	fprintf( f, "\"%s\":[", name );
	write_array_f64( f, x, len );
	fprintf( f, "]" );
}

/**
* Writes a named array of integers to a file as JSON.
*
* @param f     file to write to
* @param name  array name
* @param x     data
* @param len   array length
*/
void write_named_array_i32( FILE *f, const char *name, const int *x, const unsigned int len ) {
	fprintf( f, "\"%s\":[", name );
	write_array_i32( f, x, len );
	fprintf( f, "]" );
}

/**
* Writes data to a file as JSON.
*
* ## Notes
*
* -   This function SHOULD be tailored to the input data (e.g., input types, output types, number of arguments, etc) and may vary from use case to use case.
*
*
* @param f                    file to write to
* @param x                    first parameter
* @param s                    second parameter
* @param lower_regularized    lower regularized incomplete gamma function
* @param upper_regularized    upper regularized incomplete gamma function
* @param lower_unregularized  lower unregularized incomplete gamma function
* @param upper_unregularized  upper unregularized incomplete gamma function
* @param len                  array length
*/
void write_data_as_json( FILE *f, const double *x, const double *s, const double *lower_regularized, const double *upper_regularized, const double *lower_unregularized, const double *upper_unregularized, const unsigned int len ) {
	fprintf( f, "{" );
	write_named_array_f64( f, "x", x, len );
	fprintf( f, "," );
	write_named_array_f64( f, "s", s, len );
	fprintf( f, "," );
	write_named_array_f64( f, "lower_regularized", lower_regularized, len );
	fprintf( f, "," );
	write_named_array_f64( f, "upper_regularized", upper_regularized, len );
	fprintf( f, "," );
	write_named_array_f64( f, "lower_unregularized", lower_unregularized, len );
	fprintf( f, "," );
	write_named_array_f64( f, "upper_unregularized", upper_unregularized, len );
	fprintf( f, "}" );
}

/**
* Generates test fixtures.
*
* @param x     first parameter
* @param s     second parameter
* @param len   number of values in the domain
* @param name  output filename
*/
void generate( double *x, double *s, const unsigned int len, const char *name ) {
	double *upper_unregularized;
	double *lower_unregularized;
	double *upper_regularized;
	double *lower_regularized;
	unsigned int i;
	FILE *f;

	// Allocate an output array:
	lower_regularized = (double*) malloc( len * sizeof(double) );
	if ( lower_regularized == NULL ) {
		printf( "Error allocating memory.\n" );
		exit( 1 );
	}
	upper_regularized = (double*) malloc( len * sizeof(double) );
	if ( upper_regularized == NULL ) {
		printf( "Error allocating memory.\n" );
		exit( 1 );
	}
	lower_unregularized = (double*) malloc( len * sizeof(double) );
	if ( lower_unregularized == NULL ) {
		printf( "Error allocating memory.\n" );
		exit( 1 );
	}
	upper_unregularized = (double*) malloc( len * sizeof(double) );
	if ( upper_unregularized == NULL ) {
		printf( "Error allocating memory.\n" );
		exit( 1 );
	}

	// Generate fixture data:
	for ( i = 0; i < len; i++ ) {
		double arg1 = s[ i ];
		double arg2 = x[ i ];
		lower_regularized[ i ] = boost::math::gamma_p( arg1, arg2 );
		upper_regularized[ i ] = boost::math::gamma_q( arg1, arg2 );
		lower_unregularized[ i ] = boost::math::tgamma_lower( arg1, arg2 );
		upper_unregularized[ i ] = boost::math::tgamma( arg1, arg2 );
	}
	// Open a new file:
	f = fopen( name, "w" );
	if ( f == NULL ) {
		printf( "Error opening file.\n" );
		exit( 1 );
	}
	// Write data as JSON:
	write_data_as_json( f, x, s, lower_regularized, upper_regularized, lower_unregularized, upper_unregularized, len );

	// Close the file:
	fclose( f );

	// Free allocated memory:
	free( lower_regularized );
	free( upper_regularized );
	free( lower_unregularized );
	free( upper_unregularized );
}

/**
* Main execution sequence.
*/
int main( void ) {
	unsigned int len;
	double *x;
	double *s;

	// Define the array length:
	len = 500;

	// Allocate arrays:
	x = (double*) malloc( len * sizeof(double) );
	if ( x == NULL ) {
		printf( "Error allocating memory.\n" );
		exit( 1 );
	}
	s = (double*) malloc( len * sizeof(double) );
	if ( s == NULL ) {
		printf( "Error allocating memory.\n" );
		exit( 1 );
	}

	// Small x and s:
	rand_array_f64( x, len, 1.0, 40.0 );
	rand_array_f64( s, len, 1.0, 40.0 );
	generate( x, s, len, "small.json" );

	// Medium x and s:
	rand_array_f64( x, len, 40.0, 100.0 );
	rand_array_f64( s, len, 40.0, 100.0 );
	generate( x, s, len, "medium.json" );

	// Large x and small s:
	rand_array_f64( x, len, 100.0, 1000.0 );
	rand_array_f64( s, len, 1.0, 50.0 );
	generate( x, s, len, "large_x_small_s.json" );

	// Large x and medium s:
	rand_array_f64( x, len, 100.0, 1000.0 );
	rand_array_f64( s, len, 50.0, 100.0 );
	generate( x, s, len, "large_x_medium_s.json" );

	// Large x and large s:

	// NOTE: The following fixture generation is commented out as its generation was handled manually to avoid the overflowing of the gamma function for large values of `x` and `s`. If you wish to generate this fixture, you can uncomment the following lines and need to ensure proper exception handling in the `generate` function to handle potential overflow errors.
	// rand_array_f64( x, len, 100.0, 1000.0 );
	// rand_array_f64( s, len, 100.0, 1000.0 );
	// generate( x, s, len, "large_x_large_s.json" );

	// Free allocated memory:
	free( x );
	free( s );

	return 0;
}
