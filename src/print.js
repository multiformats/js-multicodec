'use strict'

/** @typedef {import('./types').CodecName} CodecName */
/** @typedef {import('./types').NumberNameMap} NumberNameMap */

const { baseTable } = require('./base-table')

const tableByCode = /** @type {NumberNameMap} */({})

for (const [name, code] of Object.entries(baseTable)) {
  if (tableByCode[code] === undefined) {
    tableByCode[code] = /** @type {CodecName} **/(name)
  }
}

module.exports = /** @type {NumberNameMap} */(Object.freeze(tableByCode))
