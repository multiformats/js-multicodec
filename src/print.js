// THIS FILE IS GENERATED, DO NO EDIT MANUALLY
// For more information see the README.md
/* eslint-disable dot-notation */
'use strict'
const table = require('./base-table')
const e = {}

for (const [k, v] of Object.entries(table)) {
  e[parseInt(v.toString('hex'), 16)] = k
}

module.exports = Object.freeze(e)
