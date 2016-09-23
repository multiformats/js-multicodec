# js-multicodec-packed

[![](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg?style=flat-square)](http://ipn.io)
[![](https://img.shields.io/badge/project-multiformats-blue.svg?style=flat-square)](http://github.com/multiformats/multiformats)
[![](https://img.shields.io/badge/freenode-%23ipfs-blue.svg?style=flat-square)](http://webchat.freenode.net/?channels=%23ipfs)

> JavaScript implementation of the multicodec-packed specification

This repo is a stub. Please refer to the issues if you have any questions.

## Maintainers

Captain: [@diasdavid](https://github.com/diasdavid).

## Example

```JavaScript

const mcp = require('multicodec-packed')

const prefixedProtobuf = mcp.addPrefix('protobuf', protobufBuffer)
// prefixedProtobuf 0x50...
```

## Usage

### Install

```sh
> npm install multicodec-packed
```

```JavaScript
const mcp = require('multicodec-packed')
```

### API

#### `mcp.addPrefix(<multicodecStrOrCode>, <data>)`

> Prefixes a buffer with a multicodec-packed

#### `mcp.rmPrefix(<prefixedData>)`

> Decapsulate the multicodec-packed prefix from the data

#### `mcp.getMulticodec(<prefixedData>)`

> Get the multicodec of the prefixedData

## [multicodec-packed default table](https://github.com/multiformats/multicodec/blob/master/multicodec-packed.md)

## Contribute

Contributions welcome. Please check out [the issues](https://github.com/multiformats/js-multihash/issues).

Check out our [contributing document](https://github.com/multiformats/multiformats/blob/master/contributing.md) for more information on how we work, and about contributing in general. Please be aware that all interactions related to multiformats are subject to the IPFS [Code of Conduct](https://github.com/ipfs/community/blob/master/code-of-conduct.md).

Small note: If editing the Readme, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

[MIT](LICENSE) © Protocol Labs Inc.
