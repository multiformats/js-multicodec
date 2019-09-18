'use strict'
const baseTable = require('./base-table')
const varintBufferEncode = require('./util').varintBufferEncode

// this creates a map for codecName -> codeVarintBuffer

const varintTable = {}
module.exports = varintTable

for (const encodingName in baseTable) {
  const code = baseTable[encodingName]
  varintTable[encodingName] = varintBufferEncode(code)
}
