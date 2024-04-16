"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function isESM() {
    const pkgPath = path_1.default.resolve('./package.json');
    try {
        let pkg = JSON.parse(fs_1.default.readFileSync(pkgPath, 'utf8'));
        return pkg.type && pkg.type === 'module';
    }
    catch (err) {
        return false;
    }
}
function init(args) {
    var _a;
    let messages = [];
    let isProjectESM = args['--ts'] || args['--esm'] || isESM();
    let syntax = args['--ts'] ? 'ts' : isProjectESM ? 'js' : 'cjs';
    let extension = args['--ts'] ? 'ts' : 'js';
    let tailwindConfigLocation = path_1.default.resolve((_a = args['_'][1]) !== null && _a !== void 0 ? _a : `./tailwind.config.${extension}`);
    if (fs_1.default.existsSync(tailwindConfigLocation)) {
        messages.push(`${path_1.default.basename(tailwindConfigLocation)} already exists.`);
    }
    else {
        let stubContentsFile = fs_1.default.readFileSync(args['--full']
            ? path_1.default.resolve(__dirname, '../../../../stubs/config.full.js')
            : path_1.default.resolve(__dirname, '../../../../stubs/config.simple.js'), 'utf8');
        let stubFile = fs_1.default.readFileSync(path_1.default.resolve(__dirname, `../../../../stubs/tailwind.config.${syntax}`), 'utf8');
        // Change colors import
        stubContentsFile = stubContentsFile.replace('../colors', 'tailwindcss/colors');
        // Replace contents of {ts,js,cjs} file with the stub {simple,full}.
        stubFile =
            stubFile
                .replace('__CONFIG__', stubContentsFile.replace('module.exports =', '').trim())
                .trim() + '\n\n';
        fs_1.default.writeFileSync(tailwindConfigLocation, stubFile, 'utf8');
        messages.push(`Created Tailwind CSS config file: ${path_1.default.basename(tailwindConfigLocation)}`);
    }
    if (messages.length > 0) {
        console.log();
        for (let message of messages) {
            console.log(message);
        }
    }
}
exports.init = init;
