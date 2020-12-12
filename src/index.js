/**
 * Implementation of the multicodec specification.
 *
 * @module multicodec
 * @example
 * const multicodec = require('multicodec')
 *
 * const prefixedProtobuf = multicodec.addPrefix('protobuf', protobufBuffer)
 * // prefixedProtobuf 0x50...
 *
 */
'use strict'

/** @typedef {import('./generated-types').CodecName} CodecName */
/** @typedef {import('./generated-types').CodecCode} CodecCode */

const varint = require('varint')
const uint8ArrayConcat = require('uint8arrays/concat')
const util = require('./util')
const { nameToVarint, constantToCode, nameToCode, codeToName } = require('./maps')

/**
 * Prefix a buffer with a multicodec-packed.
 *
 * @param {CodecName|Uint8Array} multicodecStrOrCode
 * @param {Uint8Array} data
 * @returns {Uint8Array}
 */
function addPrefix (multicodecStrOrCode, data) {
  let prefix

  if (multicodecStrOrCode instanceof Uint8Array) {
    prefix = util.varintUint8ArrayEncode(multicodecStrOrCode)
  } else {
    if (nameToVarint[multicodecStrOrCode]) {
      prefix = nameToVarint[multicodecStrOrCode]
    } else {
      throw new Error('multicodec not recognized')
    }
  }
  return uint8ArrayConcat([prefix, data], prefix.length + data.length)
}

/**
 * Decapsulate the multicodec-packed prefix from the data.
 *
 * @param {Uint8Array} data
 * @returns {Uint8Array}
 */
function rmPrefix (data) {
  varint.decode(data)
  return data.slice(varint.decode.bytes)
}

/**
 * Get the codec of the prefixed data.
 *
 * @param {Uint8Array} prefixedData
 * @returns {CodecName}
 */
function getCodec (prefixedData) {
  const code = varint.decode(prefixedData)
  const codecName = codeToName[code]
  if (codecName === undefined) {
    throw new Error(`Code ${code} not found`)
  }
  return codecName
}

/**
 * Get the name of the codec (human friendly).
 *
 * @param {CodecCode} codec
 * @returns {CodecName|undefined}
 */
function getName (codec) {
  return codeToName[codec]
}

/**
 * Get the code of the codec
 *
 * @param {CodecName} name
 * @returns {CodecCode}
 */
function getNumber (name) {
  const code = nameToCode[name]
  if (code === undefined) {
    throw new Error('Codec `' + name + '` not found')
  }
  return code
}

/**
 * Get the code of the prefixed data.
 *
 * @param {Uint8Array} prefixedData
 * @returns {CodecCode}
 */
function getCode (prefixedData) {
  return varint.decode(prefixedData)
}

/**
 * Get the code as varint of a codec name.
 *
 * @param {CodecName} codecName
 * @returns {Uint8Array}
 */
function getCodeVarint (codecName) {
  const code = nameToVarint[codecName]
  if (code === undefined) {
    throw new Error('Codec `' + codecName + '` not found')
  }
  return code
}

/**
 * Get the varint of a code.
 *
 * @param {CodecCode} code
 * @returns {Array.<number>}
 */
function getVarint (code) {
  return varint.encode(code)
}

module.exports = {
  addPrefix,
  rmPrefix,
  getCodec,
  getName,
  getNumber,
  getCode,
  getCodeVarint,
  getVarint,

  // Make the constants top-level constants
  ...constantToCode,

  // Export the maps
  nameToVarint,
  nameToCode,
  codeToName
}
