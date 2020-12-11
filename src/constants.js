'use strict'

/** @typedef {import('./base-table').CodecConstant} CodecConstant */
/** @typedef {import('./base-table').CodecNumber} CodecNumber */

const { baseTable } = require('./base-table')

const constants = /** @type {Record<CodecConstant, CodecNumber>} */({})

for (const [name, code] of Object.entries(baseTable)) {
  const constant = /** @type {CodecConstant} */(name.toUpperCase().replace(/-/g, '_'))
  constants[constant] = code
}

module.exports = Object.freeze(constants)
