#!/usr/bin/env python
#
# @license Apache-2.0
#
# Copyright (c) 2018 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Generate fixtures."""

import os
import json
import numpy as np
from scipy.special import sici

# Get the file path:
FILE = os.path.realpath(__file__)

# Extract the directory in which this file resides:
DIR = os.path.dirname(FILE)


def gen(x, name):
    """Generate fixture data and writes them to file.

    # Arguments

    * `x`: domain
    * `name::str`: output filename

    # Examples

    ``` python
    python> x = linspace(0.0, 1.0, 2001)
    python> gen(x, './data.json')
    ```
    """
    y = sici(x)

    # Store data to be written to file as a dictionary:
    data = {
        "x": x.tolist(),
        "si": y[0].tolist(),
        "ci": y[1].tolist()
    }

    # Based on the script directory, create an output filepath:
    filepath = os.path.join(DIR, name)

    # Write the data to the output filepath as JSON:
    with open(filepath, "w", encoding="utf-8") as outfile:
        json.dump(data, outfile)


def main():
    """Generate fixture data."""
    x = np.linspace(0.0001, 0.25, 500)
    gen(x, "small_positive.json")

    x = np.linspace(0.25, 5.0, 500)
    gen(x, "medium_positive.json")

    x = np.linspace(5.0, 100.0, 500)
    gen(x, "large_positive.json")

    x = np.linspace(-0.0001, -0.25, 500)
    gen(x, "small_negative.json")

    x = np.linspace(-0.25, -5.0, 500)
    gen(x, "medium_negative.json")

    x = np.linspace(-5.0, -100.0, 500)
    gen(x, "large_negative.json")

    x = np.linspace(1.0e9, 1.0e12, 500)
    gen(x, "very_large.json")


if __name__ == "__main__":
    main()
