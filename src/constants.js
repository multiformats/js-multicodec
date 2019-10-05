'use strict'

const table = require('./base-table')
const constants = {}

for (const [k, v] of Object.entries(table)) {
  constants[k.toUpperCase().replace(/-/g, '_')] = parseInt(v.toString('hex'), 16)
}

module.exports = Object.freeze(constants)
