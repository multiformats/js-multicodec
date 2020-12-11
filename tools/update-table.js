'use strict'

const bent = require('bent')
const path = require('path')

const get = bent('string')
const url = 'https://raw.githubusercontent.com/multiformats/multicodec/master/table.csv'
const fs = require('fs')

const parse = async function * () {
  const str = await get(url)
  const lines = str.split('\n')
  lines.shift()
  for (const line of lines) {
    if (!line.length) continue
    const [name, tag, code] = line.split(',')
    yield { name: name.trim(), tag: tag.trim(), code: parseInt(code.trim(), 16) }
  }
}

const run = async () => {
  const table = {}

  for await (const { name, code } of parse()) {
    table[name] = code
  }

  const template = `/* eslint quote-props: off */

/**
 * Constant names for all available codecs
 */
export type CodecConstant = ${Object.keys(table).map(n => `'${n.toUpperCase().replace(/-/g, '_')}'`).join(' | ')};

/**
 * Names for all available codecs
 */
export type CodecName = ${Object.keys(table).map(n => `'${n}'`).join(' | ')};

/**
 * Number for all available codecs
 */
export type CodecNumber = ${Object.values(table).join(' | ')};
`

  fs.writeFileSync(path.join(__dirname, '../src/types.ts'), template)
  fs.writeFileSync(path.join(__dirname, '../src/base-table.json'), JSON.stringify(table, null, 2))
}

run()
