/* eslint-env mocha */
'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)
const multicodec = require('../src')
const util = require('../src/util')

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

  it('works with custom codec when getting the code', () => {
    const name = 'my-custom-codec1'
    const code = Buffer.from('ffff', 'hex')
    multicodec.addCodec(name, code)

    const codeVarint = multicodec.getCodeVarint(name)
    expect(util.varintBufferDecode(codeVarint)).to.deep.eql(code)
  })

  it('throws error on unknown codec name when getting the code', () => {
    expect(() => {
      multicodec.getCodeVarint('this-codec-doesnt-exist')
    }).to.throw(
      'Codec `this-codec-doesnt-exist` not found'
    )
  })

  it('works with custom codec when getting the codec', () => {
    const name = 'my-custom-codec2'
    const code = Buffer.from('ffff', 'hex')
    multicodec.addCodec(name, code)

    const buf = Buffer.from('hey')
    const prefixedBuf = multicodec.addPrefix(name, buf)
    expect(multicodec.getCodec(prefixedBuf)).to.eql(name)
  })

  it('throws error on unknown codec when adding as prefix', () => {
    const name = 'this-codec-doesnt-exist'

    const buf = Buffer.from('hey')
    expect(() => {
      multicodec.addPrefix(name, buf)
    }).to.throw(
      'multicodec not recognized'
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
