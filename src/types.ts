import { CodecConstant, CodecName, CodecNumber } from './base-table.js'

export type ConstantNumberMap = Record<CodecConstant, CodecNumber>
export type NameUint8ArrayMap = Record<CodecName, Uint8Array>
export type NumberNameMap = Record<CodecNumber, CodecName>
export type NameNumberMap = Record<CodecName, CodecNumber>
