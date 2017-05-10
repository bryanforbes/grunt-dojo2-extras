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
        define(["require", "exports", "../src/commands/sync", "./util/wrapAsyncTask", "./util/getGithubSlug", "../src/util/GitHub", "../src/util/Git", "../src/log"], factory);
    }
})(function (require, exports) {
    "use strict";
    var sync_1 = require("../src/commands/sync");
    var wrapAsyncTask_1 = require("./util/wrapAsyncTask");
    var getGithubSlug_1 = require("./util/getGithubSlug");
    var GitHub_1 = require("../src/util/GitHub");
    var Git_1 = require("../src/util/Git");
    var log_1 = require("../src/log");
    function getRepoUrl(options, grunt) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, owner, repo, git;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (options.url) {
                            return [2, options.url];
                        }
                        _a = getGithubSlug_1.default(options, grunt), name = _a.name, owner = _a.owner;
                        if (name && owner) {
                            repo = new GitHub_1.default(owner, name);
                            return [2, repo.url];
                        }
                        log_1.logger.info('Repository not explicitly defined. Using current git repository url.');
                        git = new Git_1.default();
                        return [4, git.getConfig('remote.origin.url')];
                    case 1: return [2, _b.sent()];
                }
            });
        });
    }
    return function (grunt) {
        function syncTask() {
            return __awaiter(this, void 0, void 0, function () {
                var options, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            options = this.options({});
                            _a = options;
                            return [4, getRepoUrl(options, grunt)];
                        case 1:
                            _a.url = _b.sent();
                            return [4, sync_1.default(options)];
                        case 2:
                            _b.sent();
                            return [2];
                    }
                });
            });
        }
        grunt.registerMultiTask('sync', wrapAsyncTask_1.default(syncTask));
    };
});
//# sourceMappingURL=sync.js.map