'use strict'

const varint = require('varint')

exports = module.exports

// Miscellaneous
exports.raw = varintBuf(0)          // 0x00

// Multiformats
exports.multicodec = varintBuf(64)  // 0x40
exports.multihash = varintBuf(65)   // 0x41
exports.multiaddr = varintBuf(66)   // 0x42

// Serialization formats
exports.protobuf = varintBuf(80)    // 0x50
exports.cbor = varintBuf(81)        // 0x51
exports.rlp = varintBuf(96)         // 0x60

function varintBuf (n) {
  return new Buffer(varint.encode(n))
}
