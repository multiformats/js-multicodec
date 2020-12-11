'use strict'

const table = require('./base-table.json')

const tableByCode = /** @type {Record<CodecNumber,CodecName>} */({})

for (const [name, code] of Object.entries(table)) {
  if (tableByCode[code] === undefined) {
    tableByCode[/** @type {CodecNumber} */(code)] = /** @type {CodecName} */(name)
  }
}

module.exports = Object.freeze(tableByCode)

/** @typedef {import('./types').CodecName} CodecName */
/** @typedef {import('./types').CodecNumber} CodecNumber */
