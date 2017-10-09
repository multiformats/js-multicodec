'use strict'

// spec and table at: https://github.com/multiformats/multicodec

exports = module.exports

// Miscellaneous
exports['raw'] = Buffer.from('55', 'hex')

// bases encodings
exports['base1'] = Buffer.from('01', 'hex')
exports['base8'] = Buffer.from('07', 'hex')
exports['base10'] = Buffer.from('09', 'hex')

// Serialization formats
exports['protobuf'] = Buffer.from('50', 'hex')
exports['cbor'] = Buffer.from('51', 'hex')
exports['rlp'] = Buffer.from('60', 'hex')
exports['bencode'] = Buffer.from('63', 'hex')

// Multiformats
exports['multicodec'] = Buffer.from('30', 'hex')
exports['multihash'] = Buffer.from('31', 'hex')
exports['multiaddr'] = Buffer.from('32', 'hex')
exports['multibase'] = Buffer.from('33', 'hex')

// multihashes
exports['sha1'] = Buffer.from('11', 'hex')
exports['sha2-256'] = Buffer.from('12', 'hex')
exports['sha2-512'] = Buffer.from('13', 'hex')
exports['sha3-224'] = Buffer.from('17', 'hex')
exports['sha3-256'] = Buffer.from('16', 'hex')
exports['sha3-384'] = Buffer.from('15', 'hex')
exports['sha3-512'] = Buffer.from('14', 'hex')
exports['shake-128'] = Buffer.from('18', 'hex')
exports['shake-256'] = Buffer.from('19', 'hex')
exports['keccak-224'] = Buffer.from('1a', 'hex')
exports['keccak-256'] = Buffer.from('1b', 'hex')
exports['keccak-384'] = Buffer.from('1c', 'hex')
exports['keccak-512'] = Buffer.from('1d', 'hex')
exports['blake2b'] = Buffer.from('40', 'hex')
exports['blake2s'] = Buffer.from('41', 'hex')

// multiaddrs
exports['ip4'] = Buffer.from('04', 'hex')
exports['ip6'] = Buffer.from('29', 'hex')
exports['tcp'] = Buffer.from('06', 'hex')
exports['udp'] = Buffer.from('0111', 'hex')
exports['dccp'] = Buffer.from('21', 'hex')
exports['sctp'] = Buffer.from('84', 'hex')
exports['udt'] = Buffer.from('012d', 'hex')
exports['utp'] = Buffer.from('012e', 'hex')
exports['ipfs'] = Buffer.from('2a', 'hex')
exports['http'] = Buffer.from('01e0', 'hex')
exports['https'] = Buffer.from('01bb', 'hex')
exports['ws'] = Buffer.from('01dd', 'hex')
exports['onion'] = Buffer.from('01bc', 'hex')

// archiving formats

// image formats

// video formats

// VCS formats
exports['git-raw'] = Buffer.from('78', 'hex')

// IPLD formats
exports['dag-pb'] = Buffer.from('70', 'hex')
exports['dag-cbor'] = Buffer.from('71', 'hex')

exports['eth-block'] = Buffer.from('90', 'hex')
exports['eth-block-list'] = Buffer.from('91', 'hex')
exports['eth-tx-trie'] = Buffer.from('92', 'hex')
exports['eth-tx'] = Buffer.from('93', 'hex')
exports['eth-tx-receipt-trie'] = Buffer.from('94', 'hex')
exports['eth-tx-receipt'] = Buffer.from('95', 'hex')
exports['eth-state-trie'] = Buffer.from('96', 'hex')
exports['eth-account-snapshot'] = Buffer.from('97', 'hex')
exports['eth-storage-trie'] = Buffer.from('98', 'hex')

exports['bitcoin-block'] = Buffer.from('b0', 'hex')
exports['bitcoin-tx'] = Buffer.from('b1', 'hex')

exports['stellar-block'] = Buffer.from('d0', 'hex')
exports['stellar-tx'] = Buffer.from('d1', 'hex')

exports['torrent-info'] = Buffer.from('7b', 'hex')
exports['torrent-file'] = Buffer.from('7c', 'hex')
