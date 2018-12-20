#!/usr/bin/env python3

import csv
import os
import sys

# This is relative to where this script resides. Though you can also define
# an absolute path
DEFAULT_OUTPUT_DIR = '../src'

# The header of the generated files
HEADER = '''\
// THIS FILE IS GENERATED, DO NO EDIT MANUALLY
// For more information see the README.md
/* eslint-disable dot-notation */
'use strict'
'''

def padded_hex(hexstring):
    """Creates a padded (starting with a 0 if odd) hex string"""
    number = int(row['code'], 16)
    hexbytes = '{:x}'.format(number)
    if len(hexbytes) % 2:
        prefix = '0x0'
    else:
        prefix = '0x'
    return prefix + hexbytes


parsed = []
multicodec_reader = csv.DictReader(sys.stdin, skipinitialspace=True)
for row in multicodec_reader:
    # Skip over headlines and not yet defined codes
    if row['code'] and row['code'] != '0x':
        code = padded_hex(row['code'])
        name_const = row['codec'].upper().replace('-', '_')
        name_human = row['codec']
        parsed.append({
            'const': name_const,
            'human': name_human,
            'code': code,
        })
    # add headlines
    if row['codec'] and not row['description'] and not row['code']:
        parsed.append({
            'headline': row['codec']
        })

tools_dir = os.path.dirname(os.path.abspath(__file__))
output_dir = os.path.join(tools_dir, DEFAULT_OUTPUT_DIR)

print_file = os.path.join(output_dir, 'base-table.js')
with open(print_file, 'w') as ff:
    ff.write(HEADER)
    for index, codec in enumerate(parsed):
        if 'headline' in codec:
            ff.write("\n// {headline}\n".format(**codec))
        else:
            # print('{} {} {:02x}'.format(codec['human'], codec['code'], codec['code']))
            hexstring = codec['code'][2:]
            ff.write("exports['{}'] = Buffer.from('{}', 'hex')\n"
                     .format(codec['human'], hexstring))
