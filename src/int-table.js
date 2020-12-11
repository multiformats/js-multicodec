'use strict'

/** @typedef {import('./base-table').CodecName} CodecName */
/** @typedef {import('./base-table').CodecNumber} CodecNumber */

const { baseTable } = require('./base-table')

/**
 * @type {Map<CodecNumber,CodecName>}
 */
const nameTable = new Map()

for (const encodingName in baseTable) {
  const code = baseTable[encodingName]
  nameTable.set(code, /** @type {CodecName} */(encodingName))
}

module.exports = Object.freeze(nameTable)
