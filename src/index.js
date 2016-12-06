'use strict'

const table = require('./base-table')
const varint = require('varint')

exports = module.exports

exports.addPrefix = (multicodecStrOrCode, data) => {
  let pfx

  if (Buffer.isBuffer(multicodecStrOrCode)) {
    pfx = multicodecStrOrCode
  } else {
    if (table[multicodecStrOrCode]) {
      pfx = table[multicodecStrOrCode]
    } else {
      throw new Error('multicodec not recognized')
    }
  }
  let encodedPrefix = new Buffer(varint.encode(bufferToNumber(pfx)))
  return Buffer.concat([encodedPrefix, data])
}

exports.rmPrefix = (data) => {
  varint.decode(data)
  return data.slice(varint.decode.bytes)
}

exports.getCodec = (prefixedData) => {
  const v = varint.decode(prefixedData)
  const code = numberToBuffer(v)
  let codec

  Object.keys(table)
        .some(mc => {
          if (code.equals(table[mc])) {
            codec = mc
            return
          }
        })

  return codec
}

function bufferToNumber (buf) {
  return parseInt(buf.toString('hex'), 16)
}

function numberToBuffer (num) {
  let hexString = num.toString(16)
  if (hexString.length % 2 === 1) {
    hexString = '0' + hexString
  }
  return new Buffer(hexString, 'hex')
}
