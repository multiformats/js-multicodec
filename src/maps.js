'use strict'

/** @typedef {import('./generated-types').ConstantCodeMap} ConstantCodeMap */
/** @typedef {import('./generated-types').NameUint8ArrayMap} NameUint8ArrayMap */
/** @typedef {import('./generated-types').CodeNameMap} CodeNameMap */

const { baseTable } = require('./generated-table')
const varintEncode = require('./util').varintEncode

const nameToVarint = /** @type {NameUint8ArrayMap} */ ({})
const constantToCode = /** @type {ConstantCodeMap} */({})
const codeToName = /** @type {CodeNameMap} */({})

for (const name in baseTable) {
  const code = baseTable[name]
  nameToVarint[name] = varintEncode(code)

  const constant = name.toUpperCase().replace(/-/g, '_')
  constantToCode[constant] = code

  if (!codeToName[code]) {
    codeToName[code] = name
  }
}

module.exports = {
  nameToVarint: Object.freeze(nameToVarint),
  constantToCode: Object.freeze(constantToCode),
  nameToCode: Object.freeze(baseTable),
  codeToName: Object.freeze(codeToName)
}
