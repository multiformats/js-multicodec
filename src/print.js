'use strict'

/** @typedef {import('./base-table').CodecName} CodecName */
/** @typedef {import('./base-table').CodecNumber} CodecNumber */

const { baseTable } = require('./base-table')

const tableByCode = /** @type {Record<CodecNumber,CodecName>} */({})

for (const [name, code] of Object.entries(baseTable)) {
  if (tableByCode[code] === undefined) {
    tableByCode[code] = /** @type {CodecName} */(name)
  }
}

module.exports = Object.freeze(tableByCode)
