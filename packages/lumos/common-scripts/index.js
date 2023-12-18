"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dao = exports.common = exports.anyoneCanPay = void 0;
Object.defineProperty(exports, "parseFromInfo", {
  enumerable: true,
  get: function () {
    return _from_info.parseFromInfo;
  }
});
exports.secp256k1Blake160Multisig = exports.secp256k1Blake160 = void 0;
Object.defineProperty(exports, "serializeMultisigScript", {
  enumerable: true,
  get: function () {
    return _from_info.serializeMultisigScript;
  }
});
exports.sudt = void 0;
var _common = _interopRequireWildcard(require("./common"));
exports.common = _common;
var _dao = _interopRequireWildcard(require("./dao"));
exports.dao = _dao;
var _sudt = _interopRequireWildcard(require("./sudt"));
exports.sudt = _sudt;
var _secp256k1Blake = _interopRequireWildcard(require("./secp256k1-blake160"));
exports.secp256k1Blake160 = _secp256k1Blake;
var _secp256k1Blake160Multisig = _interopRequireWildcard(require("./secp256k1-blake160-multisig"));
exports.secp256k1Blake160Multisig = _secp256k1Blake160Multisig;
var _anyoneCanPay = _interopRequireWildcard(require("./anyone-can-pay"));
exports.anyoneCanPay = _anyoneCanPay;
var _from_info = require("@ckb-lumos/common-scripts/lib/from_info");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//# sourceMappingURL=index.js.map