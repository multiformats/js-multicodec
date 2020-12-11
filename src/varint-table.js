'use strict'

/** @typedef {import('./types').CodecName} CodecName */
/** @typedef {import('./types').CodecNumber} CodecNumber  */

const baseTable = require('./base-table.json')
const varintEncode = require('./util').varintEncode

const varintTable = /** @type {Record<CodecName,Uint8Array>} */ ({})

for (const encodingName in baseTable) {
  const code = baseTable[encodingName]
  varintTable[/** @type {CodecName} */(encodingName)] = varintEncode(code)
}

module.exports = Object.freeze(varintTable)
