"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const resolveConfigPath_1 = require("../../../util/resolveConfigPath");
const plugin_1 = require("./plugin");
function build(args) {
    return __awaiter(this, void 0, void 0, function* () {
        let input = args['--input'];
        let shouldWatch = args['--watch'];
        // TODO: Deprecate this in future versions
        if (!input && args['_'][1]) {
            console.error('[deprecation] Running tailwindcss without -i, please provide an input file.');
            input = args['--input'] = args['_'][1];
        }
        if (input && input !== '-' && !fs_1.default.existsSync((input = path_1.default.resolve(input)))) {
            console.error(`Specified input file ${args['--input']} does not exist.`);
            process.exit(9);
        }
        if (args['--config'] && !fs_1.default.existsSync((args['--config'] = path_1.default.resolve(args['--config'])))) {
            console.error(`Specified config file ${args['--config']} does not exist.`);
            process.exit(9);
        }
        // TODO: Reference the @config path here if exists
        let configPath = args['--config'] ? args['--config'] : (0, resolveConfigPath_1.resolveDefaultConfigPath)();
        let processor = yield (0, plugin_1.createProcessor)(args, configPath);
        if (shouldWatch) {
            // Abort the watcher if stdin is closed to avoid zombie processes
            // You can disable this behavior with --watch=always
            if (args['--watch'] !== 'always') {
                process.stdin.on('end', () => process.exit(0));
            }
            process.stdin.resume();
            yield processor.watch();
        }
        else {
            yield processor.build().catch((e) => {
                console.error(e);
                process.exit(1);
            });
        }
    });
}
exports.build = build;
