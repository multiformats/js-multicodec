'use strict'

/** @typedef {import('./types').CodecConstant} CodecConstant */
/** @typedef {import('./types').CodecNumber} CodecNumber */

const table = require('./base-table.json')

const constants = /** @type {Record<CodecConstant, CodecNumber>} */({})

for (const [name, code] of Object.entries(table)) {
  const constant = /** @type {CodecConstant} */(name.toUpperCase().replace(/-/g, '_'))
  constants[constant] = /** @type {CodecNumber} */(code)
}

module.exports = Object.freeze(constants)
