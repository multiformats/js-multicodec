'use strict'

/** @typedef {import('./generated-types').ConstantCodeMap} ConstantCodeMap */

const { baseTable } = require('./base-table')

const constants = /** @type {ConstantCodeMap} */({})

for (const [name, code] of Object.entries(baseTable)) {
  const constant = name.toUpperCase().replace(/-/g, '_')
  constants[constant] = code
}

module.exports = Object.freeze(constants)
