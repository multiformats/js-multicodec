'use strict'
const baseTable = require('./base-table.json')

// map for hexString -> codecName
const nameTable = {}

for (const encodingName in baseTable) {
  const code = baseTable[encodingName]
  nameTable[code.toString(16)] = encodingName
}

module.exports = Object.freeze(nameTable)
