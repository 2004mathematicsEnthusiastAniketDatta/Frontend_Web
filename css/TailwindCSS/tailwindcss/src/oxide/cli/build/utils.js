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
exports.outputFile = exports.drainStdin = exports.readFileWithRetries = exports.formatNodes = exports.indentRecursive = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function indentRecursive(node, indent = 0) {
    node.each &&
        node.each((child, i) => {
            if (!child.raws.before || !child.raws.before.trim() || child.raws.before.includes('\n')) {
                child.raws.before = `\n${node.type !== 'rule' && i > 0 ? '\n' : ''}${'  '.repeat(indent)}`;
            }
            child.raws.after = `\n${'  '.repeat(indent)}`;
            indentRecursive(child, indent + 1);
        });
}
exports.indentRecursive = indentRecursive;
function formatNodes(root) {
    indentRecursive(root);
    if (root.first) {
        root.first.raws.before = '';
    }
}
exports.formatNodes = formatNodes;
/**
 * When rapidly saving files atomically a couple of situations can happen:
 * - The file is missing since the external program has deleted it by the time we've gotten around to reading it from the earlier save.
 * - The file is being written to by the external program by the time we're going to read it and is thus treated as busy because a lock is held.
 *
 * To work around this we retry reading the file a handful of times with a delay between each attempt
 *
 * @param {string} path
 * @param {number} tries
 * @returns {Promise<string | undefined>}
 * @throws {Error} If the file is still missing or busy after the specified number of tries
 */
function readFileWithRetries(path_2) {
    return __awaiter(this, arguments, void 0, function* (path, tries = 5) {
        for (let n = 0; n <= tries; n++) {
            try {
                return yield fs_1.default.promises.readFile(path, 'utf8');
            }
            catch (err) {
                if (n !== tries) {
                    if (err.code === 'ENOENT' || err.code === 'EBUSY') {
                        yield new Promise((resolve) => setTimeout(resolve, 10));
                        continue;
                    }
                }
                throw err;
            }
        }
    });
}
exports.readFileWithRetries = readFileWithRetries;
function drainStdin() {
    return new Promise((resolve, reject) => {
        let result = '';
        process.stdin.on('data', (chunk) => {
            result += chunk;
        });
        process.stdin.on('end', () => resolve(result));
        process.stdin.on('error', (err) => reject(err));
    });
}
exports.drainStdin = drainStdin;
function outputFile(file, newContents) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let currentContents = yield fs_1.default.promises.readFile(file, 'utf8');
            if (currentContents === newContents) {
                return; // Skip writing the file
            }
        }
        catch (_a) { }
        // Write the file
        yield fs_1.default.promises.mkdir(path_1.default.dirname(file), { recursive: true });
        yield fs_1.default.promises.writeFile(file, newContents, 'utf8');
    });
}
exports.outputFile = outputFile;
