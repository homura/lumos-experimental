"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TESTNET = exports.MAINNET = void 0;
Object.defineProperty(exports, "createConfig", {
  enumerable: true,
  get: function () {
    return _configManager.createConfig;
  }
});
Object.defineProperty(exports, "generateGenesisScriptConfigs", {
  enumerable: true,
  get: function () {
    return _configManager.generateGenesisScriptConfigs;
  }
});
Object.defineProperty(exports, "getConfig", {
  enumerable: true,
  get: function () {
    return _configManager.getConfig;
  }
});
Object.defineProperty(exports, "initializeConfig", {
  enumerable: true,
  get: function () {
    return _configManager.initializeConfig;
  }
});
Object.defineProperty(exports, "predefined", {
  enumerable: true,
  get: function () {
    return _configManager.predefined;
  }
});
Object.defineProperty(exports, "validateConfig", {
  enumerable: true,
  get: function () {
    return _configManager.validateConfig;
  }
});
var _predefined = require("@ckb-lumos/config-manager/lib/predefined");
var _configManager = require("@ckb-lumos/config-manager");
const TESTNET = _predefined.predefined.AGGRON4;
exports.TESTNET = TESTNET;
const MAINNET = _predefined.predefined.LINA;
exports.MAINNET = MAINNET;
//# sourceMappingURL=config.js.map