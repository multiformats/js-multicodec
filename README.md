# js-multicodec

[![](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg?style=flat-square)](http://ipn.io)
[![](https://img.shields.io/badge/project-multiformats-blue.svg?style=flat-square)](http://github.com/multiformats/multiformats)
[![](https://img.shields.io/badge/freenode-%23ipfs-blue.svg?style=flat-square)](http://webchat.freenode.net/?channels=%23ipfs)

> JavaScript implementation of the multicodec specification

## Maintainers

Captain: [@diasdavid](https://github.com/diasdavid).

## Example

```JavaScript

const multicodec = require('multicodec')

const prefixedProtobuf = multicodec.addPrefix('protobuf', protobufBuffer)
// prefixedProtobuf 0x50...
```

## Usage

### Install

```sh
> npm install multicodec
```

```JavaScript
const multicodec = require('multicodec')
```

### API

## [multicodec default table](https://github.com/multiformats/multicodec/blob/master/multicodec.md)

## Contribute

Contributions welcome. Please check out [the issues](https://github.com/multiformats/js-multihash/issues).

Check out our [contributing document](https://github.com/multiformats/multiformats/blob/master/contributing.md) for more information on how we work, and about contributing in general. Please be aware that all interactions related to multiformats are subject to the IPFS [Code of Conduct](https://github.com/ipfs/community/blob/master/code-of-conduct.md).

Small note: If editing the Readme, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

[MIT](LICENSE) © Protocol Labs Inc.
