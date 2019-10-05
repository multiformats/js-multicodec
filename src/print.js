'use strict'

const table = require('./base-table')
const e = {}

for (const [k, v] of Object.entries(table)) {
  const key = parseInt(v.toString('hex'), 16)
  if (typeof e[key] === 'undefined') e[key] = k
}

module.exports = Object.freeze(e)
