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
        define(["require", "exports", "semver", "fs", "path"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var semver = require("semver");
    var fs_1 = require("fs");
    var path_1 = require("path");
    function getHtmlApiPath(base, project, version) {
        return path_1.join(base, project + "/" + version);
    }
    exports.getHtmlApiPath = getHtmlApiPath;
    function getJsonApiPath(base, project, version) {
        return path_1.join(base, project + "-" + version + ".json");
    }
    exports.getJsonApiPath = getJsonApiPath;
    function createHtmlApiMissingFilter(project, directory) {
        return function (tag) {
            return !fs_1.existsSync(getHtmlApiPath(directory, project, tag.name));
        };
    }
    exports.createHtmlApiMissingFilter = createHtmlApiMissingFilter;
    function createJsonApiMissingFilter(project, directory) {
        return function (tag) {
            return !fs_1.existsSync(getJsonApiPath(directory, project, tag.name));
        };
    }
    exports.createJsonApiMissingFilter = createJsonApiMissingFilter;
    function latestFilter(_tag, index, array) {
        return index === array.length - 1;
    }
    exports.latestFilter = latestFilter;
    function createVersionFilter(comp) {
        return function (tag) {
            var version = semver.clean(tag.name);
            return semver.satisfies(version, comp);
        };
    }
    exports.createVersionFilter = createVersionFilter;
    function getTags(repo, filters) {
        if (filters === void 0) { filters = []; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, repo.fetchTags()];
                    case 1: return [2, (_a.sent())
                            .filter(function (tag) {
                            return semver.clean(tag.name);
                        })
                            .sort(function (a, b) {
                            var left = semver.clean(a.name);
                            var right = semver.clean(b.name);
                            return semver.compare(left, right, true);
                        })
                            .filter(function (tag, index, array) {
                            for (var _i = 0, filters_1 = filters; _i < filters_1.length; _i++) {
                                var filter = filters_1[_i];
                                if (!filter(tag, index, array)) {
                                    return false;
                                }
                            }
                            return true;
                        })];
                }
            });
        });
    }
    exports.default = getTags;
});
//# sourceMappingURL=getTags.js.map