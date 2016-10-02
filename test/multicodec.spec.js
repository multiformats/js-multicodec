/* eslint-env mocha */
'use strict'

const expect = require('chai').expect
const multicodec = require('../src')

describe('multicodec', () => {
  it('add prefix through multicodec (string)', () => {
    const buf = new Buffer('hey')
    const prefixedBuf = multicodec.addPrefix('protobuf', buf)
    expect(multicodec.getCodec(prefixedBuf)).to.equal('protobuf')
    expect(buf).to.eql(multicodec.rmPrefix(prefixedBuf))
  })

  it('add prefix through code (code)', () => {
    const buf = new Buffer('hey')
    const prefixedBuf = multicodec.addPrefix(new Buffer('70', 'hex'), buf)
    expect(multicodec.getCodec(prefixedBuf)).to.equal('dag-pb')
    expect(buf).to.eql(multicodec.rmPrefix(prefixedBuf))
  })
})
