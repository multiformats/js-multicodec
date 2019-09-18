// THIS FILE IS GENERATED, DO NO EDIT MANUALLY
// For more information see the README.md
/* eslint-disable dot-notation */
'use strict'
const table = require('./base-table')
const constants = {}

for (const [k, v] of Object.entries(table)) {
  constants[k.toUpperCase().replace(/-/g, '_')] = parseInt(v.toString('hex'), 16)
}

module.exports = Object.freeze(constants)
