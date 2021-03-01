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
    expect(multicodec.getNameFromData(prefixedBuf)).to.equal('protobuf')
    expect(buf).to.eql(multicodec.rmPrefix(prefixedBuf))
  })

  it('add prefix through code (code)', () => {
    const buf = uint8ArrayFromString('hey')
    const prefixedBuf = multicodec.addPrefix(uint8ArrayFromString('70', 'base16'), buf)
    expect(multicodec.getNameFromData(prefixedBuf)).to.equal('dag-pb')
    expect(buf).to.eql(multicodec.rmPrefix(prefixedBuf))
  })

  it('add multibyte varint prefix (eth-block) through multicodec (string)', () => {
    const buf = uint8ArrayFromString('hey')
    const prefixedBuf = multicodec.addPrefix('eth-block', buf)
    expect(multicodec.getNameFromData(prefixedBuf)).to.equal('eth-block')
    expect(buf).to.eql(multicodec.rmPrefix(prefixedBuf))
  })

  it('returns code via codec name', () => {
    const code = multicodec.getVarintFromName('keccak-256')
    expect(code).to.eql(uint8ArrayFromString('1b', 'base16'))
  })

  it('returns code from prefixed data', () => {
    const buf = uint8ArrayFromString('hey')
    const prefixedBuf = multicodec.addPrefix('dag-cbor', buf)
    const code = multicodec.getCodeFromData(prefixedBuf)
    expect(code).to.eql(multicodec.DAG_CBOR)
  })

  it('returns varint from code', () => {
    const code = multicodec.getVarintFromCode(multicodec.KECCAK_256)
    expect(code).to.eql(Uint8Array.from([0x1b]))
  })

  it('returns the codec name from code', () => {
    expect(multicodec.getNameFromCode(144)).to.eql('eth-block')
    expect(multicodec.getNameFromCode(112)).to.eql('dag-pb')
    expect(multicodec.getNameFromCode(0xb201)).to.eql('blake2b-8')
  })

  it('returns the codec number from name', () => {
    expect(multicodec.getCodeFromName('eth-block')).to.eql(144)
    expect(multicodec.getCodeFromName('dag-pb')).to.eql(112)
    expect(multicodec.getCodeFromName('blake2b-8')).to.eql(0xb201)
  })

  it('returns all codec numbers from names', () => {
    // eslint-disable-next-line guard-for-in
    for (const name in nameToCode) {
      expect(multicodec.getCodeFromName(/** @type {CodecName} */(name))).to.eql(nameToCode[/** @type {CodecName} */(name)])
    }
  })

  it('returns the codec number from constant', () => {
    expect(multicodec.ETH_BLOCK).to.eql(144)
    expect(multicodec.DAG_PB).to.eql(112)
    expect(multicodec.BLAKE2B_8).to.eql(0xb201)
  })

  it('returns the name from codec number', () => {
    expect(multicodec.getNameFromCode(144)).to.eql('eth-block')
    expect(multicodec.getNameFromCode(112)).to.eql('dag-pb')
    expect(multicodec.getNameFromCode(0x0111)).to.eql('udp')
    expect(multicodec.getNameFromCode(0xb201)).to.eql('blake2b-8')

    expect(multicodec.getNameFromCode(multicodec.ETH_BLOCK)).to.eql('eth-block')
    expect(multicodec.getNameFromCode(multicodec.DAG_PB)).to.eql('dag-pb')
    expect(multicodec.getNameFromCode(multicodec.UDP)).to.eql('udp')
    expect(multicodec.getNameFromCode(multicodec.BLAKE2B_8)).to.eql('blake2b-8')
  })

  it('returns p2p when 0x01a5 is used', () => {
    // `ipfs` and `p2p` are assigned to `0x01a5`, `ipfs` is deprecated
    expect(multicodec.getNameFromCode(0x01a5)).to.eql('p2p')
  })

  it('throws error on unknown codec name when getting the varint from name', () => {
    expect(() => {
      // @ts-expect-error
      multicodec.getVarintFromName('this-codec-doesnt-exist')
    }).to.throw(
      'Codec "this-codec-doesnt-exist" not found'
    )
  })

  it('throws error on unknown codec name when getting the code from name', () => {
    expect(() => {
      // @ts-expect-error
      multicodec.getCodeFromName('this-codec-doesnt-exist')
    }).to.throw(
      'Codec "this-codec-doesnt-exist" not found'
    )
  })

  it('throws error on unknown codec name when getting the name from the code', () => {
    const code = uint8ArrayFromString('ffee', 'base16')

    const buf = uint8ArrayFromString('hey')
    const prefixedBuf = multicodec.addPrefix(code, buf)
    expect(() => {
      multicodec.getNameFromData(prefixedBuf)
    }).to.throw(
      'Code "65518" not found'
    )
  })
})
