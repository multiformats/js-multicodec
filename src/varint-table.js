'use strict'

/** @typedef {import('./base-table').CodecName} CodecName */
/** @typedef {import('./base-table').CodecNumber} CodecNumber  */

const { baseTable } = require('./base-table')
const varintEncode = require('./util').varintEncode

const varintTable = /** @type {Record<CodecName,Uint8Array>} */ ({})

for (const encodingName in baseTable) {
  const code = baseTable[encodingName]
  varintTable[/** @type {CodecName} */(encodingName)] = varintEncode(code)
}

module.exports = Object.freeze(varintTable)
