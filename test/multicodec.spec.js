/* eslint-env mocha */
'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)
const multicodec = require('../src')

describe('multicodec', () => {
  it('add prefix through multicodec (string)', () => {
    const buf = Buffer.from('hey')
    const prefixedBuf = multicodec.addPrefix('protobuf', buf)
    expect(multicodec.getCodec(prefixedBuf)).to.equal('protobuf')
    expect(buf).to.eql(multicodec.rmPrefix(prefixedBuf))
  })

  it('add prefix through code (code)', () => {
    const buf = Buffer.from('hey')
    const prefixedBuf = multicodec.addPrefix(Buffer.from('70', 'hex'), buf)
    expect(multicodec.getCodec(prefixedBuf)).to.equal('dag-pb')
    expect(buf).to.eql(multicodec.rmPrefix(prefixedBuf))
  })

  it('add multibyte varint prefix (eth-block) through multicodec (string)', () => {
    const buf = Buffer.from('hey')
    const prefixedBuf = multicodec.addPrefix('eth-block', buf)
    expect(multicodec.getCodec(prefixedBuf)).to.equal('eth-block')
    expect(buf).to.eql(multicodec.rmPrefix(prefixedBuf))
  })

  it('returns code via codec name', () => {
    const code = multicodec.getCodeVarint('keccak-256')
    expect(code).to.eql(Buffer.from('1b', 'hex'))
  })

  it('returns code from prefixed data', () => {
    const buf = Buffer.from('hey')
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
  })

  it('returns the codec number from name', () => {
    expect(multicodec.getNumber('eth-block')).to.eql(144)
    expect(multicodec.getNumber('dag-pb')).to.eql(112)
  })

  it('throws error on unknown codec name when getting the code', () => {
    expect(() => {
      multicodec.getCodeVarint('this-codec-doesnt-exist')
    }).to.throw(
      'Codec `this-codec-doesnt-exist` not found'
    )
  })

  it('throws error on unknown codec name when getting the codec', () => {
    const code = Buffer.from('ffee', 'hex')

    const buf = Buffer.from('hey')
    const prefixedBuf = multicodec.addPrefix(code, buf)
    expect(() => {
      multicodec.getCodec(prefixedBuf)
    }).to.throw(
      'Code `0xffee` not found'
    )
  })
})
