const bent = require('bent')
const HEADER = `
// THIS FILE IS GENERATED, DO NO EDIT MANUALLY
// For more information see the README.md
'use strict'

const { numberToBuffer } = require('../src/util')

const table = {
`
const FOOTER = `
}
for (const [k, v] of Object.entries(table)) {
  table[k] = numberToBuffer(v)
}
module.exports = Object.freeze(table)
`

const get = bent('string')
const url = 'https://raw.githubusercontent.com/multiformats/multicodec/master/table.csv'
const fs = require('fs')

const parse = async function * () {
  let str = await get(url)
  let lines = str.split('\n')
  let header = lines.shift()
  for (let line of lines) {
    if (!line.length) continue
    let [name, tag, code, desc] = line.split(',')
    yield { name: name.trim(), tag: tag.trim(), code: parseInt(code.trim(), 16) }
  }
}

const run = async () => {
  let str = HEADER
  let first = true
  for await (let entry of parse()) {
    key = entry.name
    if (key.includes('-')) key = `'${key}'`
    console.log(entry)
    if (!first) str += ',\n  '
    else str += '  ' 
    str += `${key}: ${entry.code}`
    first = false
  }
  str += FOOTER
  fs.writeFileSync(__dirname + '/../src/base-table.js', str)
}
run()
