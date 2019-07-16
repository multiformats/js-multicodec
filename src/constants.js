// THIS FILE IS GENERATED, DO NO EDIT MANUALLY
// For more information see the README.md
/* eslint-disable dot-notation */
'use strict'
module.exports = Object.freeze({

  // serialization
  PROTOBUF: 0x50,
  CBOR: 0x51,
  RLP: 0x60,
  BENCODE: 0x63,

  // multiformat
  MULTICODEC: 0x30,
  MULTIHASH: 0x31,
  MULTIADDR: 0x32,
  MULTIBASE: 0x33,

  // multihash
  IDENTITY: 0x00,
  SHA1: 0x11,
  SHA2_256: 0x12,
  SHA2_512: 0x13,
  SHA3_512: 0x14,
  SHA3_384: 0x15,
  SHA3_256: 0x16,
  SHA3_224: 0x17,
  SHAKE_128: 0x18,
  SHAKE_256: 0x19,
  KECCAK_224: 0x1a,
  KECCAK_256: 0x1b,
  KECCAK_384: 0x1c,
  KECCAK_512: 0x1d,
  MURMUR3_128: 0x22,
  MURMUR3_32: 0x23,
  DBL_SHA2_256: 0x56,
  MD4: 0xd4,
  MD5: 0xd5,
  BMT: 0xd6,
  X11: 0x1100,
  BLAKE2B_8: 0xb201,
  BLAKE2B_16: 0xb202,
  BLAKE2B_24: 0xb203,
  BLAKE2B_32: 0xb204,
  BLAKE2B_40: 0xb205,
  BLAKE2B_48: 0xb206,
  BLAKE2B_56: 0xb207,
  BLAKE2B_64: 0xb208,
  BLAKE2B_72: 0xb209,
  BLAKE2B_80: 0xb20a,
  BLAKE2B_88: 0xb20b,
  BLAKE2B_96: 0xb20c,
  BLAKE2B_104: 0xb20d,
  BLAKE2B_112: 0xb20e,
  BLAKE2B_120: 0xb20f,
  BLAKE2B_128: 0xb210,
  BLAKE2B_136: 0xb211,
  BLAKE2B_144: 0xb212,
  BLAKE2B_152: 0xb213,
  BLAKE2B_160: 0xb214,
  BLAKE2B_168: 0xb215,
  BLAKE2B_176: 0xb216,
  BLAKE2B_184: 0xb217,
  BLAKE2B_192: 0xb218,
  BLAKE2B_200: 0xb219,
  BLAKE2B_208: 0xb21a,
  BLAKE2B_216: 0xb21b,
  BLAKE2B_224: 0xb21c,
  BLAKE2B_232: 0xb21d,
  BLAKE2B_240: 0xb21e,
  BLAKE2B_248: 0xb21f,
  BLAKE2B_256: 0xb220,
  BLAKE2B_264: 0xb221,
  BLAKE2B_272: 0xb222,
  BLAKE2B_280: 0xb223,
  BLAKE2B_288: 0xb224,
  BLAKE2B_296: 0xb225,
  BLAKE2B_304: 0xb226,
  BLAKE2B_312: 0xb227,
  BLAKE2B_320: 0xb228,
  BLAKE2B_328: 0xb229,
  BLAKE2B_336: 0xb22a,
  BLAKE2B_344: 0xb22b,
  BLAKE2B_352: 0xb22c,
  BLAKE2B_360: 0xb22d,
  BLAKE2B_368: 0xb22e,
  BLAKE2B_376: 0xb22f,
  BLAKE2B_384: 0xb230,
  BLAKE2B_392: 0xb231,
  BLAKE2B_400: 0xb232,
  BLAKE2B_408: 0xb233,
  BLAKE2B_416: 0xb234,
  BLAKE2B_424: 0xb235,
  BLAKE2B_432: 0xb236,
  BLAKE2B_440: 0xb237,
  BLAKE2B_448: 0xb238,
  BLAKE2B_456: 0xb239,
  BLAKE2B_464: 0xb23a,
  BLAKE2B_472: 0xb23b,
  BLAKE2B_480: 0xb23c,
  BLAKE2B_488: 0xb23d,
  BLAKE2B_496: 0xb23e,
  BLAKE2B_504: 0xb23f,
  BLAKE2B_512: 0xb240,
  BLAKE2S_8: 0xb241,
  BLAKE2S_16: 0xb242,
  BLAKE2S_24: 0xb243,
  BLAKE2S_32: 0xb244,
  BLAKE2S_40: 0xb245,
  BLAKE2S_48: 0xb246,
  BLAKE2S_56: 0xb247,
  BLAKE2S_64: 0xb248,
  BLAKE2S_72: 0xb249,
  BLAKE2S_80: 0xb24a,
  BLAKE2S_88: 0xb24b,
  BLAKE2S_96: 0xb24c,
  BLAKE2S_104: 0xb24d,
  BLAKE2S_112: 0xb24e,
  BLAKE2S_120: 0xb24f,
  BLAKE2S_128: 0xb250,
  BLAKE2S_136: 0xb251,
  BLAKE2S_144: 0xb252,
  BLAKE2S_152: 0xb253,
  BLAKE2S_160: 0xb254,
  BLAKE2S_168: 0xb255,
  BLAKE2S_176: 0xb256,
  BLAKE2S_184: 0xb257,
  BLAKE2S_192: 0xb258,
  BLAKE2S_200: 0xb259,
  BLAKE2S_208: 0xb25a,
  BLAKE2S_216: 0xb25b,
  BLAKE2S_224: 0xb25c,
  BLAKE2S_232: 0xb25d,
  BLAKE2S_240: 0xb25e,
  BLAKE2S_248: 0xb25f,
  BLAKE2S_256: 0xb260,
  SKEIN256_8: 0xb301,
  SKEIN256_16: 0xb302,
  SKEIN256_24: 0xb303,
  SKEIN256_32: 0xb304,
  SKEIN256_40: 0xb305,
  SKEIN256_48: 0xb306,
  SKEIN256_56: 0xb307,
  SKEIN256_64: 0xb308,
  SKEIN256_72: 0xb309,
  SKEIN256_80: 0xb30a,
  SKEIN256_88: 0xb30b,
  SKEIN256_96: 0xb30c,
  SKEIN256_104: 0xb30d,
  SKEIN256_112: 0xb30e,
  SKEIN256_120: 0xb30f,
  SKEIN256_128: 0xb310,
  SKEIN256_136: 0xb311,
  SKEIN256_144: 0xb312,
  SKEIN256_152: 0xb313,
  SKEIN256_160: 0xb314,
  SKEIN256_168: 0xb315,
  SKEIN256_176: 0xb316,
  SKEIN256_184: 0xb317,
  SKEIN256_192: 0xb318,
  SKEIN256_200: 0xb319,
  SKEIN256_208: 0xb31a,
  SKEIN256_216: 0xb31b,
  SKEIN256_224: 0xb31c,
  SKEIN256_232: 0xb31d,
  SKEIN256_240: 0xb31e,
  SKEIN256_248: 0xb31f,
  SKEIN256_256: 0xb320,
  SKEIN512_8: 0xb321,
  SKEIN512_16: 0xb322,
  SKEIN512_24: 0xb323,
  SKEIN512_32: 0xb324,
  SKEIN512_40: 0xb325,
  SKEIN512_48: 0xb326,
  SKEIN512_56: 0xb327,
  SKEIN512_64: 0xb328,
  SKEIN512_72: 0xb329,
  SKEIN512_80: 0xb32a,
  SKEIN512_88: 0xb32b,
  SKEIN512_96: 0xb32c,
  SKEIN512_104: 0xb32d,
  SKEIN512_112: 0xb32e,
  SKEIN512_120: 0xb32f,
  SKEIN512_128: 0xb330,
  SKEIN512_136: 0xb331,
  SKEIN512_144: 0xb332,
  SKEIN512_152: 0xb333,
  SKEIN512_160: 0xb334,
  SKEIN512_168: 0xb335,
  SKEIN512_176: 0xb336,
  SKEIN512_184: 0xb337,
  SKEIN512_192: 0xb338,
  SKEIN512_200: 0xb339,
  SKEIN512_208: 0xb33a,
  SKEIN512_216: 0xb33b,
  SKEIN512_224: 0xb33c,
  SKEIN512_232: 0xb33d,
  SKEIN512_240: 0xb33e,
  SKEIN512_248: 0xb33f,
  SKEIN512_256: 0xb340,
  SKEIN512_264: 0xb341,
  SKEIN512_272: 0xb342,
  SKEIN512_280: 0xb343,
  SKEIN512_288: 0xb344,
  SKEIN512_296: 0xb345,
  SKEIN512_304: 0xb346,
  SKEIN512_312: 0xb347,
  SKEIN512_320: 0xb348,
  SKEIN512_328: 0xb349,
  SKEIN512_336: 0xb34a,
  SKEIN512_344: 0xb34b,
  SKEIN512_352: 0xb34c,
  SKEIN512_360: 0xb34d,
  SKEIN512_368: 0xb34e,
  SKEIN512_376: 0xb34f,
  SKEIN512_384: 0xb350,
  SKEIN512_392: 0xb351,
  SKEIN512_400: 0xb352,
  SKEIN512_408: 0xb353,
  SKEIN512_416: 0xb354,
  SKEIN512_424: 0xb355,
  SKEIN512_432: 0xb356,
  SKEIN512_440: 0xb357,
  SKEIN512_448: 0xb358,
  SKEIN512_456: 0xb359,
  SKEIN512_464: 0xb35a,
  SKEIN512_472: 0xb35b,
  SKEIN512_480: 0xb35c,
  SKEIN512_488: 0xb35d,
  SKEIN512_496: 0xb35e,
  SKEIN512_504: 0xb35f,
  SKEIN512_512: 0xb360,
  SKEIN1024_8: 0xb361,
  SKEIN1024_16: 0xb362,
  SKEIN1024_24: 0xb363,
  SKEIN1024_32: 0xb364,
  SKEIN1024_40: 0xb365,
  SKEIN1024_48: 0xb366,
  SKEIN1024_56: 0xb367,
  SKEIN1024_64: 0xb368,
  SKEIN1024_72: 0xb369,
  SKEIN1024_80: 0xb36a,
  SKEIN1024_88: 0xb36b,
  SKEIN1024_96: 0xb36c,
  SKEIN1024_104: 0xb36d,
  SKEIN1024_112: 0xb36e,
  SKEIN1024_120: 0xb36f,
  SKEIN1024_128: 0xb370,
  SKEIN1024_136: 0xb371,
  SKEIN1024_144: 0xb372,
  SKEIN1024_152: 0xb373,
  SKEIN1024_160: 0xb374,
  SKEIN1024_168: 0xb375,
  SKEIN1024_176: 0xb376,
  SKEIN1024_184: 0xb377,
  SKEIN1024_192: 0xb378,
  SKEIN1024_200: 0xb379,
  SKEIN1024_208: 0xb37a,
  SKEIN1024_216: 0xb37b,
  SKEIN1024_224: 0xb37c,
  SKEIN1024_232: 0xb37d,
  SKEIN1024_240: 0xb37e,
  SKEIN1024_248: 0xb37f,
  SKEIN1024_256: 0xb380,
  SKEIN1024_264: 0xb381,
  SKEIN1024_272: 0xb382,
  SKEIN1024_280: 0xb383,
  SKEIN1024_288: 0xb384,
  SKEIN1024_296: 0xb385,
  SKEIN1024_304: 0xb386,
  SKEIN1024_312: 0xb387,
  SKEIN1024_320: 0xb388,
  SKEIN1024_328: 0xb389,
  SKEIN1024_336: 0xb38a,
  SKEIN1024_344: 0xb38b,
  SKEIN1024_352: 0xb38c,
  SKEIN1024_360: 0xb38d,
  SKEIN1024_368: 0xb38e,
  SKEIN1024_376: 0xb38f,
  SKEIN1024_384: 0xb390,
  SKEIN1024_392: 0xb391,
  SKEIN1024_400: 0xb392,
  SKEIN1024_408: 0xb393,
  SKEIN1024_416: 0xb394,
  SKEIN1024_424: 0xb395,
  SKEIN1024_432: 0xb396,
  SKEIN1024_440: 0xb397,
  SKEIN1024_448: 0xb398,
  SKEIN1024_456: 0xb399,
  SKEIN1024_464: 0xb39a,
  SKEIN1024_472: 0xb39b,
  SKEIN1024_480: 0xb39c,
  SKEIN1024_488: 0xb39d,
  SKEIN1024_496: 0xb39e,
  SKEIN1024_504: 0xb39f,
  SKEIN1024_512: 0xb3a0,
  SKEIN1024_520: 0xb3a1,
  SKEIN1024_528: 0xb3a2,
  SKEIN1024_536: 0xb3a3,
  SKEIN1024_544: 0xb3a4,
  SKEIN1024_552: 0xb3a5,
  SKEIN1024_560: 0xb3a6,
  SKEIN1024_568: 0xb3a7,
  SKEIN1024_576: 0xb3a8,
  SKEIN1024_584: 0xb3a9,
  SKEIN1024_592: 0xb3aa,
  SKEIN1024_600: 0xb3ab,
  SKEIN1024_608: 0xb3ac,
  SKEIN1024_616: 0xb3ad,
  SKEIN1024_624: 0xb3ae,
  SKEIN1024_632: 0xb3af,
  SKEIN1024_640: 0xb3b0,
  SKEIN1024_648: 0xb3b1,
  SKEIN1024_656: 0xb3b2,
  SKEIN1024_664: 0xb3b3,
  SKEIN1024_672: 0xb3b4,
  SKEIN1024_680: 0xb3b5,
  SKEIN1024_688: 0xb3b6,
  SKEIN1024_696: 0xb3b7,
  SKEIN1024_704: 0xb3b8,
  SKEIN1024_712: 0xb3b9,
  SKEIN1024_720: 0xb3ba,
  SKEIN1024_728: 0xb3bb,
  SKEIN1024_736: 0xb3bc,
  SKEIN1024_744: 0xb3bd,
  SKEIN1024_752: 0xb3be,
  SKEIN1024_760: 0xb3bf,
  SKEIN1024_768: 0xb3c0,
  SKEIN1024_776: 0xb3c1,
  SKEIN1024_784: 0xb3c2,
  SKEIN1024_792: 0xb3c3,
  SKEIN1024_800: 0xb3c4,
  SKEIN1024_808: 0xb3c5,
  SKEIN1024_816: 0xb3c6,
  SKEIN1024_824: 0xb3c7,
  SKEIN1024_832: 0xb3c8,
  SKEIN1024_840: 0xb3c9,
  SKEIN1024_848: 0xb3ca,
  SKEIN1024_856: 0xb3cb,
  SKEIN1024_864: 0xb3cc,
  SKEIN1024_872: 0xb3cd,
  SKEIN1024_880: 0xb3ce,
  SKEIN1024_888: 0xb3cf,
  SKEIN1024_896: 0xb3d0,
  SKEIN1024_904: 0xb3d1,
  SKEIN1024_912: 0xb3d2,
  SKEIN1024_920: 0xb3d3,
  SKEIN1024_928: 0xb3d4,
  SKEIN1024_936: 0xb3d5,
  SKEIN1024_944: 0xb3d6,
  SKEIN1024_952: 0xb3d7,
  SKEIN1024_960: 0xb3d8,
  SKEIN1024_968: 0xb3d9,
  SKEIN1024_976: 0xb3da,
  SKEIN1024_984: 0xb3db,
  SKEIN1024_992: 0xb3dc,
  SKEIN1024_1000: 0xb3dd,
  SKEIN1024_1008: 0xb3de,
  SKEIN1024_1016: 0xb3df,
  SKEIN1024_1024: 0xb3e0,

  // multiaddr
  IP4: 0x04,
  TCP: 0x06,
  DCCP: 0x21,
  IP6: 0x29,
  IP6ZONE: 0x2a,
  DNS: 0x35,
  DNS4: 0x36,
  DNS6: 0x37,
  DNSADDR: 0x38,
  SCTP: 0x84,
  UDP: 0x0111,
  P2P_WEBRTC_STAR: 0x0113,
  P2P_WEBRTC_DIRECT: 0x0114,
  P2P_STARDUST: 0x0115,
  P2P_CIRCUIT: 0x0122,
  UDT: 0x012d,
  UTP: 0x012e,
  UNIX: 0x0190,
  P2P: 0x01a5,
  IPFS: 0x01a5,
  HTTPS: 0x01bb,
  ONION: 0x01bc,
  ONION3: 0x01bd,
  GARLIC64: 0x01be,
  GARLIC32: 0x01bf,
  QUIC: 0x01cc,
  WS: 0x01dd,
  WSS: 0x01de,
  P2P_WEBSOCKET_STAR: 0x01df,
  HTTP: 0x01e0,

  // ipld
  RAW: 0x55,
  DAG_PB: 0x70,
  DAG_CBOR: 0x71,
  LIBP2P_KEY: 0x72,
  GIT_RAW: 0x78,
  TORRENT_INFO: 0x7b,
  TORRENT_FILE: 0x7c,
  LEOFCOIN_BLOCK: 0x81,
  LEOFCOIN_TX: 0x82,
  LEOFCOIN_PR: 0x83,
  ETH_BLOCK: 0x90,
  ETH_BLOCK_LIST: 0x91,
  ETH_TX_TRIE: 0x92,
  ETH_TX: 0x93,
  ETH_TX_RECEIPT_TRIE: 0x94,
  ETH_TX_RECEIPT: 0x95,
  ETH_STATE_TRIE: 0x96,
  ETH_ACCOUNT_SNAPSHOT: 0x97,
  ETH_STORAGE_TRIE: 0x98,
  BITCOIN_BLOCK: 0xb0,
  BITCOIN_TX: 0xb1,
  ZCASH_BLOCK: 0xc0,
  ZCASH_TX: 0xc1,
  STELLAR_BLOCK: 0xd0,
  STELLAR_TX: 0xd1,
  DECRED_BLOCK: 0xe0,
  DECRED_TX: 0xe1,
  DASH_BLOCK: 0xf0,
  DASH_TX: 0xf1,
  SWARM_MANIFEST: 0xfa,
  SWARM_FEED: 0xfb,
  DAG_JSON: 0x0129,

  // namespace
  PATH: 0x2f,
  IPLD_NS: 0xe2,
  IPFS_NS: 0xe3,
  SWARM_NS: 0xe4,
  IPNS_NS: 0xe5,

  // key
  ED25519_PUB: 0xed,

  // holochain
  HOLOCHAIN_ADR_V0: 0x807124,
  HOLOCHAIN_ADR_V1: 0x817124,
  HOLOCHAIN_KEY_V0: 0x947124,
  HOLOCHAIN_KEY_V1: 0x957124,
  HOLOCHAIN_SIG_V0: 0xa27124,
  HOLOCHAIN_SIG_V1: 0xa37124
})
