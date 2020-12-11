'use strict'

const table = require('./base-table.json')

const tableByCode = {}

for (const [name, code] of Object.entries(table)) {
  if (tableByCode[code] === undefined) tableByCode[code] = name
}

/**
 * @type {Object<CodecNumber,CodecName>}
 */
const toExport = Object.freeze(tableByCode)
module.exports = toExport

/** @typedef {import('./types').CodecName} CodecName */
/** @typedef {import('./types').CodecNumber} CodecNumber */
