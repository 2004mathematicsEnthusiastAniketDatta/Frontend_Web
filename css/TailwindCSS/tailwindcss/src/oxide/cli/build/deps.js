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
exports.loadPostcssImport = exports.loadPostcss = exports.lightningcss = exports.lazyLightningCss = void 0;
const package_json_1 = __importDefault(require("../../../../package.json"));
const browserslist_1 = __importDefault(require("browserslist"));
const index_1 = require("../../../../peers/index");
function lazyLightningCss() {
    // TODO: Make this lazy/bundled
    return require('lightningcss');
}
exports.lazyLightningCss = lazyLightningCss;
let lightningCss;
function loadLightningCss() {
    if (lightningCss) {
        return lightningCss;
    }
    // Try to load a local version first
    try {
        return (lightningCss = require('lightningcss'));
    }
    catch (_a) { }
    return (lightningCss = lazyLightningCss());
}
function lightningcss(shouldMinify, result) {
    return __awaiter(this, void 0, void 0, function* () {
        let css = loadLightningCss();
        try {
            let transformed = css.transform({
                filename: result.opts.from || 'input.css',
                code: Buffer.from(result.css, 'utf-8'),
                minify: shouldMinify,
                sourceMap: !!result.map,
                inputSourceMap: result.map ? result.map.toString() : undefined,
                targets: css.browserslistToTargets((0, browserslist_1.default)(package_json_1.default.browserslist)),
                drafts: {
                    nesting: true,
                },
            });
            return Object.assign(result, {
                css: transformed.code.toString('utf8'),
                map: result.map
                    ? Object.assign(result.map, {
                        toString() {
                            return transformed.map.toString();
                        },
                    })
                    : result.map,
            });
        }
        catch (err) {
            console.error('Unable to use Lightning CSS. Using raw version instead.');
            console.error(err);
            return result;
        }
    });
}
exports.lightningcss = lightningcss;
/**
 * @returns {import('postcss')}
 */
function loadPostcss() {
    // Try to load a local `postcss` version first
    try {
        return require('postcss');
    }
    catch (_a) { }
    return (0, index_1.lazyPostcss)();
}
exports.loadPostcss = loadPostcss;
function loadPostcssImport() {
    // Try to load a local `postcss-import` version first
    try {
        return require('postcss-import');
    }
    catch (_a) { }
    return (0, index_1.lazyPostcssImport)();
}
exports.loadPostcssImport = loadPostcssImport;
