/* eslint-env mocha */
'use strict'

/** @typedef {import("../src/generated-types").CodecName} CodecName */
/** @typedef {import("../src/generated-types").CodecCode} CodecCode */

const { expect } = require('aegir/utils/chai')
const multicodec = require('../src')
const uint8ArrayFromString = require('uint8arrays/from-string')
const { nameToCode } = require('../src/maps')

describe('multicodec', () => {
  it('add prefix through multicodec (string)', () => {
    const buf = uint8ArrayFromString('hey')
    const prefixedBuf = multicodec.addPrefix('protobuf', buf)
    expect(multicodec.getCodec(prefixedBuf)).to.equal('protobuf')
    expect(buf).to.eql(multicodec.rmPrefix(prefixedBuf))
  })

  it('add prefix through code (code)', () => {
    const buf = uint8ArrayFromString('hey')
    const prefixedBuf = multicodec.addPrefix(uint8ArrayFromString('70', 'base16'), buf)
    expect(multicodec.getCodec(prefixedBuf)).to.equal('dag-pb')
    expect(buf).to.eql(multicodec.rmPrefix(prefixedBuf))
  })

  it('add multibyte varint prefix (eth-block) through multicodec (string)', () => {
    const buf = uint8ArrayFromString('hey')
    const prefixedBuf = multicodec.addPrefix('eth-block', buf)
    expect(multicodec.getCodec(prefixedBuf)).to.equal('eth-block')
    expect(buf).to.eql(multicodec.rmPrefix(prefixedBuf))
  })

  it('returns code via codec name', () => {
    const code = multicodec.getCodeVarint('keccak-256')
    expect(code).to.eql(uint8ArrayFromString('1b', 'base16'))
  })

  it('returns code from prefixed data', () => {
    const buf = uint8ArrayFromString('hey')
    const prefixedBuf = multicodec.addPrefix('dag-cbor', buf)
    const code = multicodec.getCode(prefixedBuf)
    expect(code).to.eql(multicodec.DAG_CBOR)
  })

  it('returns varint from code', () => {
    const code = multicodec.getVarint(multicodec.KECCAK_256)
    expect(code).to.eql([0x1b])
  })

  it('returns the codec name from code', () => {
    expect(multicodec.getName(144)).to.eql('eth-block')
    expect(multicodec.getName(112)).to.eql('dag-pb')
    expect(multicodec.getName(0xb201)).to.eql('blake2b-8')
  })

  it('returns the codec number from name', () => {
    expect(multicodec.getNumber('eth-block')).to.eql(144)
    expect(multicodec.getNumber('dag-pb')).to.eql(112)
    expect(multicodec.getNumber('blake2b-8')).to.eql(0xb201)
  })

  it('returns all codec numbers from names', () => {
    for (const name in nameToCode) {
      expect(multicodec.getNumber(/** @type {CodecName} */(name))).to.eql(nameToCode[name])
    }
  })

  it('returns the codec number from constant', () => {
    expect(multicodec.ETH_BLOCK).to.eql(144)
    expect(multicodec.DAG_PB).to.eql(112)
    expect(multicodec.BLAKE2B_8).to.eql(0xb201)
  })

  it('returns the name from codec number', () => {
    expect(multicodec.getName(144)).to.eql('eth-block')
    expect(multicodec.getName(112)).to.eql('dag-pb')
    expect(multicodec.getName(0x0111)).to.eql('udp')
    expect(multicodec.getName(0xb201)).to.eql('blake2b-8')

    expect(multicodec.getName(multicodec.ETH_BLOCK)).to.eql('eth-block')
    expect(multicodec.getName(multicodec.DAG_PB)).to.eql('dag-pb')
    expect(multicodec.getName(multicodec.UDP)).to.eql('udp')
    expect(multicodec.getName(multicodec.BLAKE2B_8)).to.eql('blake2b-8')
  })

  it('returns p2p when 0x01a5 is used', () => {
    // `ipfs` and `p2p` are assigned to `0x01a5`, `ipfs` is deprecated
    expect(multicodec.getName(0x01a5)).to.eql('p2p')
  })

  it('throws error on unknown codec name when getting the code', () => {
    expect(() => {
      // @ts-expect-error
      multicodec.getCodeVarint('this-codec-doesnt-exist')
    }).to.throw(
      'Codec `this-codec-doesnt-exist` not found'
    )
  })

  it('throws error on unknown codec name when getting the codec', () => {
    const code = uint8ArrayFromString('ffee', 'base16')

    const buf = uint8ArrayFromString('hey')
    const prefixedBuf = multicodec.addPrefix(code, buf)
    expect(() => {
      multicodec.getCodec(prefixedBuf)
    }).to.throw(
      'Code 65518 not found'
    )
  })
})
