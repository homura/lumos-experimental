"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Uint128", {
  enumerable: true,
  get: function () {
    return _number.Uint128;
  }
});
Object.defineProperty(exports, "Uint128BE", {
  enumerable: true,
  get: function () {
    return _number.Uint128BE;
  }
});
Object.defineProperty(exports, "Uint128LE", {
  enumerable: true,
  get: function () {
    return _number.Uint128LE;
  }
});
Object.defineProperty(exports, "Uint16", {
  enumerable: true,
  get: function () {
    return _number.Uint16;
  }
});
Object.defineProperty(exports, "Uint16BE", {
  enumerable: true,
  get: function () {
    return _number.Uint16BE;
  }
});
Object.defineProperty(exports, "Uint16LE", {
  enumerable: true,
  get: function () {
    return _number.Uint16LE;
  }
});
Object.defineProperty(exports, "Uint256", {
  enumerable: true,
  get: function () {
    return _number.Uint256;
  }
});
Object.defineProperty(exports, "Uint256BE", {
  enumerable: true,
  get: function () {
    return _number.Uint256BE;
  }
});
Object.defineProperty(exports, "Uint256LE", {
  enumerable: true,
  get: function () {
    return _number.Uint256LE;
  }
});
Object.defineProperty(exports, "Uint32", {
  enumerable: true,
  get: function () {
    return _number.Uint32;
  }
});
Object.defineProperty(exports, "Uint32BE", {
  enumerable: true,
  get: function () {
    return _number.Uint32BE;
  }
});
Object.defineProperty(exports, "Uint32LE", {
  enumerable: true,
  get: function () {
    return _number.Uint32LE;
  }
});
Object.defineProperty(exports, "Uint512", {
  enumerable: true,
  get: function () {
    return _number.Uint512;
  }
});
Object.defineProperty(exports, "Uint512BE", {
  enumerable: true,
  get: function () {
    return _number.Uint512BE;
  }
});
Object.defineProperty(exports, "Uint512LE", {
  enumerable: true,
  get: function () {
    return _number.Uint512LE;
  }
});
Object.defineProperty(exports, "Uint64", {
  enumerable: true,
  get: function () {
    return _number.Uint64;
  }
});
Object.defineProperty(exports, "Uint64BE", {
  enumerable: true,
  get: function () {
    return _number.Uint64BE;
  }
});
Object.defineProperty(exports, "Uint64LE", {
  enumerable: true,
  get: function () {
    return _number.Uint64LE;
  }
});
Object.defineProperty(exports, "Uint8", {
  enumerable: true,
  get: function () {
    return _number.Uint8;
  }
});
Object.defineProperty(exports, "array", {
  enumerable: true,
  get: function () {
    return _molecule.array;
  }
});
Object.defineProperty(exports, "blockchain", {
  enumerable: true,
  get: function () {
    return _base.blockchain;
  }
});
Object.defineProperty(exports, "byteArrayOf", {
  enumerable: true,
  get: function () {
    return _molecule.byteArrayOf;
  }
});
Object.defineProperty(exports, "byteOf", {
  enumerable: true,
  get: function () {
    return _molecule.byteOf;
  }
});
Object.defineProperty(exports, "byteVecOf", {
  enumerable: true,
  get: function () {
    return _molecule.byteVecOf;
  }
});
exports.bytes = void 0;
Object.defineProperty(exports, "bytify", {
  enumerable: true,
  get: function () {
    return _bytes.bytify;
  }
});
Object.defineProperty(exports, "concat", {
  enumerable: true,
  get: function () {
    return _bytes.concat;
  }
});
Object.defineProperty(exports, "createArrayCodec", {
  enumerable: true,
  get: function () {
    return _codec.createArrayCodec;
  }
});
Object.defineProperty(exports, "createBytesCodec", {
  enumerable: true,
  get: function () {
    return _codec.createBytesCodec;
  }
});
Object.defineProperty(exports, "createFixedBytesCodec", {
  enumerable: true,
  get: function () {
    return _codec.createFixedBytesCodec;
  }
});
Object.defineProperty(exports, "createNullableCodec", {
  enumerable: true,
  get: function () {
    return _codec.createNullableCodec;
  }
});
Object.defineProperty(exports, "createObjectCodec", {
  enumerable: true,
  get: function () {
    return _codec.createObjectCodec;
  }
});
Object.defineProperty(exports, "equal", {
  enumerable: true,
  get: function () {
    return _bytes.equal;
  }
});
Object.defineProperty(exports, "hexify", {
  enumerable: true,
  get: function () {
    return _bytes.hexify;
  }
});
Object.defineProperty(exports, "isFixedCodec", {
  enumerable: true,
  get: function () {
    return _codec.isFixedCodec;
  }
});
Object.defineProperty(exports, "option", {
  enumerable: true,
  get: function () {
    return _molecule.option;
  }
});
Object.defineProperty(exports, "struct", {
  enumerable: true,
  get: function () {
    return _molecule.struct;
  }
});
Object.defineProperty(exports, "table", {
  enumerable: true,
  get: function () {
    return _molecule.table;
  }
});
Object.defineProperty(exports, "union", {
  enumerable: true,
  get: function () {
    return _molecule.union;
  }
});
Object.defineProperty(exports, "vector", {
  enumerable: true,
  get: function () {
    return _molecule.vector;
  }
});
var _bytes = require("@ckb-lumos/codec/lib/bytes");
var _molecule = require("@ckb-lumos/codec/lib/molecule");
var _number = require("@ckb-lumos/codec/lib/number");
var _codec = require("@ckb-lumos/codec");
var _base = require("@ckb-lumos/base");
const bytes = {
  bytify: _bytes.bytify,
  hexify: _bytes.hexify,
  concat: _bytes.concat,
  equal: _bytes.equal
};
exports.bytes = bytes;
//# sourceMappingURL=index.js.map