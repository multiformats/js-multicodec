import type { Tag, Status } from './types'

import multicodecsJson from './multicodecs.json'


export const multicodecs = multicodecsJson.map(({
	name,
	tag,
	code,
	status,
	description
}) => ({
	name,
	tag: tag as Tag,
	code: Number(code),
	status: status as Status,
	description,
}))

export default multicodecs


export const multicodecsByName = Object.fromEntries(multicodecs.map((codec) => [codec.name, codec]))

export const multicodecsByCode = Object.fromEntries(multicodecs.map((codec) => [codec.code, codec]))


export type Multicodec = typeof multicodecs[number]

export type MulticodecTag = Tag

export type MulticodecStatus = Status
