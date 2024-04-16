"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadConfig = exports.useCustomJiti = void 0;
const jiti_1 = __importDefault(require("jiti"));
const sucrase_1 = require("sucrase");
let jiti = null;
// @internal
// This WILL be removed in some future release
// If you rely on this your stuff WILL break
function useCustomJiti(_jiti) {
    jiti = _jiti();
}
exports.useCustomJiti = useCustomJiti;
function lazyJiti() {
    return (jiti !== null && jiti !== void 0 ? jiti : (jiti = (0, jiti_1.default)(__filename, {
        interopDefault: true,
        transform: (opts) => {
            return (0, sucrase_1.transform)(opts.source, {
                transforms: ['typescript', 'imports'],
            });
        },
    })));
}
function loadConfig(path) {
    var _a;
    let config = (function () {
        try {
            return path ? require(path) : {};
        }
        catch (_a) {
            return lazyJiti()(path);
        }
    })();
    return (_a = config.default) !== null && _a !== void 0 ? _a : config;
}
exports.loadConfig = loadConfig;
