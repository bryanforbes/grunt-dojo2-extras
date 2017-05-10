var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "intern!object", "intern/chai!assert", "stream", "fs", "../../../_support/tmpFiles", "src/util/crypto"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var registerSuite = require("intern!object");
    var assert = require("intern/chai!assert");
    var stream_1 = require("stream");
    var fs_1 = require("fs");
    var tmpFiles_1 = require("../../../_support/tmpFiles");
    var crypto = require("src/util/crypto");
    registerSuite({
        name: 'util/crypto',
        createDeployKey: function () {
            return __awaiter(this, void 0, void 0, function () {
                var tmp, keys;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            tmp = tmpFiles_1.tmpFile('deployKey');
                            return [4, crypto.createKey(tmp)];
                        case 1:
                            keys = _a.sent();
                            assert.isTrue(fs_1.existsSync(keys.publicKey));
                            assert.isTrue(fs_1.existsSync(keys.privateKey));
                            return [2];
                    }
                });
            });
        },
        encrypt: function () {
            return __awaiter(this, void 0, void 0, function () {
                var expected, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            expected = 'Hello World!';
                            return [4, new Promise(function (resolve) {
                                    var out = '';
                                    var stream = new stream_1.Readable();
                                    stream.push(expected);
                                    stream.push(null);
                                    var enc = crypto.encryptData(stream);
                                    crypto.decryptData(enc.encrypted, enc.key, enc.iv)
                                        .on('data', function (chunk) {
                                        out += chunk;
                                    })
                                        .on('end', function () {
                                        resolve(out);
                                    });
                                })];
                        case 1:
                            result = _a.sent();
                            assert.strictEqual(result, expected);
                            return [2];
                    }
                });
            });
        }
    });
});
//# sourceMappingURL=crypto.js.map