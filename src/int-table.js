'use strict'

/** @typedef {import('./generated-types').CodecName} CodecName */
/** @typedef {import('./generated-types').CodecCode} CodecCode */

const { baseTable } = require('./base-table')

/**
 * @type {Map<CodecCode,CodecName>}
 */
const nameTable = new Map()

for (const encodingName in baseTable) {
  const code = baseTable[encodingName]
  if (!nameTable.has(code)) {
    nameTable.set(code, /** @type {CodecName} */(encodingName))
  }
}

module.exports = Object.freeze(nameTable)
