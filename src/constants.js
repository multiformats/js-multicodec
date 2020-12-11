'use strict'

const table = require('./base-table.json')

const constants = {}

for (const [name, code] of Object.entries(table)) {
  constants[name.toUpperCase().replace(/-/g, '_')] = code
}

/**
 * @type {Object<CodecConstant,CodecNumber>}
 */
const toExport = Object.freeze(constants)
module.exports = toExport

/** @typedef {import('./types').CodecConstant} CodecConstant */
/** @typedef {import('./types').CodecNumber} CodecNumber */
