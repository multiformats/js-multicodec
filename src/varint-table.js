'use strict'

const baseTable = require('./base-table.json')
const varintEncode = require('./util').varintEncode

const varintTable = {}

for (const encodingName in baseTable) {
  const code = baseTable[encodingName]
  varintTable[encodingName] = varintEncode(code)
}

/**
 * @type { Object<CodecName,Uint8Array> }
 */
const toExport = Object.freeze(varintTable)
module.exports = toExport

/** @typedef {import('./types').CodecName} CodecName */
/** @typedef {import('./types').CodecNumber} CodecNumber  */
