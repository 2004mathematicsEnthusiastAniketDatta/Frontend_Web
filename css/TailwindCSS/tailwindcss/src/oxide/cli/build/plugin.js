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
exports.createProcessor = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const postcss_load_config_1 = __importDefault(require("postcss-load-config"));
const lilconfig_1 = require("lilconfig");
const plugins_1 = __importDefault(require("postcss-load-config/src/plugins")); // Little bit scary, looking at private/internal API
const options_1 = __importDefault(require("postcss-load-config/src/options")); // Little bit scary, looking at private/internal API
const processTailwindFeatures_1 = __importDefault(require("../../../processTailwindFeatures"));
const deps_1 = require("./deps");
const utils_1 = require("./utils");
const sharedState_1 = require("../../../lib/sharedState");
const resolveConfig_1 = __importDefault(require("../../../../resolveConfig"));
const content_1 = require("../../../lib/content");
const watching_1 = require("./watching");
const fast_glob_1 = __importDefault(require("fast-glob"));
const findAtConfigPath_1 = require("../../../lib/findAtConfigPath");
const log_1 = __importDefault(require("../../../util/log"));
const load_config_1 = require("../../../lib/load-config");
const getModuleDependencies_1 = __importDefault(require("../../../lib/getModuleDependencies"));
/**
 *
 * @param {string} [customPostCssPath ]
 * @returns
 */
function loadPostCssPlugins(customPostCssPath) {
    return __awaiter(this, void 0, void 0, function* () {
        let config = customPostCssPath
            ? yield (() => __awaiter(this, void 0, void 0, function* () {
                let file = path_1.default.resolve(customPostCssPath);
                // Implementation, see: https://unpkg.com/browse/postcss-load-config@3.1.0/src/index.js
                // @ts-ignore
                let { config = {} } = yield (0, lilconfig_1.lilconfig)('postcss').load(file);
                if (typeof config === 'function') {
                    config = config();
                }
                else {
                    config = Object.assign({}, config);
                }
                if (!config.plugins) {
                    config.plugins = [];
                }
                return {
                    file,
                    plugins: (0, plugins_1.default)(config, file),
                    options: (0, options_1.default)(config, file),
                };
            }))()
            : yield (0, postcss_load_config_1.default)();
        let configPlugins = config.plugins;
        let configPluginTailwindIdx = configPlugins.findIndex((plugin) => {
            if (typeof plugin === 'function' && plugin.name === 'tailwindcss') {
                return true;
            }
            if (typeof plugin === 'object' && plugin !== null && plugin.postcssPlugin === 'tailwindcss') {
                return true;
            }
            return false;
        });
        let beforePlugins = configPluginTailwindIdx === -1 ? [] : configPlugins.slice(0, configPluginTailwindIdx);
        let afterPlugins = configPluginTailwindIdx === -1
            ? configPlugins
            : configPlugins.slice(configPluginTailwindIdx + 1);
        return [beforePlugins, afterPlugins, config.options];
    });
}
function loadBuiltinPostcssPlugins() {
    let postcss = (0, deps_1.loadPostcss)();
    let IMPORT_COMMENT = '__TAILWIND_RESTORE_IMPORT__: ';
    return [
        [
            (root) => {
                root.walkAtRules('import', (rule) => {
                    if (rule.params.slice(1).startsWith('tailwindcss/')) {
                        rule.after(postcss.comment({ text: IMPORT_COMMENT + rule.params }));
                        rule.remove();
                    }
                });
            },
            (0, deps_1.loadPostcssImport)(),
            (root) => {
                root.walkComments((rule) => {
                    if (rule.text.startsWith(IMPORT_COMMENT)) {
                        rule.after(postcss.atRule({
                            name: 'import',
                            params: rule.text.replace(IMPORT_COMMENT, ''),
                        }));
                        rule.remove();
                    }
                });
            },
        ],
        [],
        {},
    ];
}
let state = {
    /** @type {any} */
    context: null,
    /** @type {ReturnType<typeof createWatcher> | null} */
    watcher: null,
    /** @type {{content: string, extension: string}[]} */
    changedContent: [],
    /** @type {{config: Config, dependencies: Set<string>, dispose: Function } | null} */
    configBag: null,
    contextDependencies: new Set(),
    /** @type {import('../../lib/content.js').ContentPath[]} */
    contentPaths: [],
    refreshContentPaths() {
        var _a;
        this.contentPaths = (0, content_1.parseCandidateFiles)(this.context, (_a = this.context) === null || _a === void 0 ? void 0 : _a.tailwindConfig);
    },
    get config() {
        return this.context.tailwindConfig;
    },
    get contentPatterns() {
        return {
            all: this.contentPaths.map((contentPath) => contentPath.pattern),
            dynamic: this.contentPaths
                .filter((contentPath) => contentPath.glob !== undefined)
                .map((contentPath) => contentPath.pattern),
        };
    },
    loadConfig(configPath, content) {
        if (this.watcher && configPath) {
            this.refreshConfigDependencies();
        }
        let config = (0, load_config_1.loadConfig)(configPath);
        let dependencies = (0, getModuleDependencies_1.default)(configPath);
        this.configBag = {
            config,
            dependencies,
            dispose() {
                for (let file of dependencies) {
                    delete require.cache[require.resolve(file)];
                }
            },
        };
        // @ts-ignore
        this.configBag.config = (0, resolveConfig_1.default)(this.configBag.config, { content: { files: [] } });
        // Override content files if `--content` has been passed explicitly
        if ((content === null || content === void 0 ? void 0 : content.length) > 0) {
            this.configBag.config.content.files = content;
        }
        return this.configBag.config;
    },
    refreshConfigDependencies(configPath) {
        var _a;
        sharedState_1.env.DEBUG && console.time('Module dependencies');
        (_a = this.configBag) === null || _a === void 0 ? void 0 : _a.dispose();
        sharedState_1.env.DEBUG && console.timeEnd('Module dependencies');
    },
    readContentPaths() {
        let content = [];
        // Resolve globs from the content config
        // TODO: When we make the postcss plugin async-capable this can become async
        let files = fast_glob_1.default.sync(this.contentPatterns.all);
        for (let file of files) {
            if (__OXIDE__) {
                content.push({
                    file,
                    extension: path_1.default.extname(file).slice(1),
                });
            }
            else {
                content.push({
                    content: fs_1.default.readFileSync(path_1.default.resolve(file), 'utf8'),
                    extension: path_1.default.extname(file).slice(1),
                });
            }
        }
        // Resolve raw content in the tailwind config
        let rawContent = this.config.content.files.filter((file) => {
            return file !== null && typeof file === 'object';
        });
        for (let { raw: htmlContent, extension = 'html' } of rawContent) {
            content.push({ content: htmlContent, extension });
        }
        return content;
    },
    getContext({ createContext, cliConfigPath, root, result, content }) {
        var _a;
        sharedState_1.env.DEBUG && console.time('Searching for config');
        let configPath = (_a = (0, findAtConfigPath_1.findAtConfigPath)(root, result)) !== null && _a !== void 0 ? _a : cliConfigPath;
        sharedState_1.env.DEBUG && console.timeEnd('Searching for config');
        if (this.context) {
            this.context.changedContent = this.changedContent.splice(0);
            return this.context;
        }
        sharedState_1.env.DEBUG && console.time('Loading config');
        let config = this.loadConfig(configPath, content);
        sharedState_1.env.DEBUG && console.timeEnd('Loading config');
        sharedState_1.env.DEBUG && console.time('Creating context');
        this.context = createContext(config, []);
        Object.assign(this.context, {
            userConfigPath: configPath,
        });
        sharedState_1.env.DEBUG && console.timeEnd('Creating context');
        sharedState_1.env.DEBUG && console.time('Resolving content paths');
        this.refreshContentPaths();
        sharedState_1.env.DEBUG && console.timeEnd('Resolving content paths');
        if (this.watcher) {
            sharedState_1.env.DEBUG && console.time('Watch new files');
            this.watcher.refreshWatchedFiles();
            sharedState_1.env.DEBUG && console.timeEnd('Watch new files');
        }
        for (let file of this.readContentPaths()) {
            this.context.changedContent.push(file);
        }
        return this.context;
    },
};
function createProcessor(args, cliConfigPath) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        let postcss = (0, deps_1.loadPostcss)();
        let input = args['--input'];
        let output = args['--output'];
        let includePostCss = args['--postcss'];
        let customPostCssPath = typeof args['--postcss'] === 'string' ? args['--postcss'] : undefined;
        let [beforePlugins, afterPlugins, postcssOptions] = includePostCss
            ? yield loadPostCssPlugins(customPostCssPath)
            : loadBuiltinPostcssPlugins();
        if (args['--purge']) {
            log_1.default.warn('purge-flag-deprecated', [
                'The `--purge` flag has been deprecated.',
                'Please use `--content` instead.',
            ]);
            if (!args['--content']) {
                args['--content'] = args['--purge'];
            }
        }
        let content = (_b = (_a = args['--content']) === null || _a === void 0 ? void 0 : _a.split(/(?<!{[^}]+),/)) !== null && _b !== void 0 ? _b : [];
        let tailwindPlugin = () => {
            return {
                postcssPlugin: 'tailwindcss',
                Once(root_1, _a) {
                    return __awaiter(this, arguments, void 0, function* (root, { result }) {
                        sharedState_1.env.DEBUG && console.time('Compiling CSS');
                        yield (0, processTailwindFeatures_1.default)(({ createContext }) => {
                            console.error();
                            console.error('Rebuilding...');
                            return () => {
                                return state.getContext({
                                    createContext,
                                    cliConfigPath,
                                    root,
                                    result,
                                    content,
                                });
                            };
                        })(root, result);
                        sharedState_1.env.DEBUG && console.timeEnd('Compiling CSS');
                    });
                },
            };
        };
        tailwindPlugin.postcss = true;
        let plugins = [
            ...beforePlugins,
            tailwindPlugin,
            !args['--minify'] && utils_1.formatNodes,
            ...afterPlugins,
        ].filter(Boolean);
        /** @type {import('postcss').Processor} */
        // @ts-ignore
        let processor = postcss(plugins);
        function readInput() {
            return __awaiter(this, void 0, void 0, function* () {
                // Piping in data, let's drain the stdin
                if (input === '-') {
                    return (0, utils_1.drainStdin)();
                }
                // Input file has been provided
                if (input) {
                    return fs_1.default.promises.readFile(path_1.default.resolve(input), 'utf8');
                }
                // No input file provided, fallback to default atrules
                return '@tailwind base; @tailwind components; @tailwind utilities';
            });
        }
        function build() {
            return __awaiter(this, void 0, void 0, function* () {
                let start = process.hrtime.bigint();
                return readInput()
                    .then((css) => processor.process(css, Object.assign(Object.assign({}, postcssOptions), { from: input, to: output })))
                    .then((result) => (0, deps_1.lightningcss)(!!args['--minify'], result))
                    .then((result) => {
                    if (!state.watcher) {
                        return result;
                    }
                    sharedState_1.env.DEBUG && console.time('Recording PostCSS dependencies');
                    for (let message of result.messages) {
                        if (message.type === 'dependency') {
                            state.contextDependencies.add(message.file);
                        }
                    }
                    sharedState_1.env.DEBUG && console.timeEnd('Recording PostCSS dependencies');
                    // TODO: This needs to be in a different spot
                    sharedState_1.env.DEBUG && console.time('Watch new files');
                    state.watcher.refreshWatchedFiles();
                    sharedState_1.env.DEBUG && console.timeEnd('Watch new files');
                    return result;
                })
                    .then((result) => {
                    if (!output) {
                        process.stdout.write(result.css);
                        return;
                    }
                    return Promise.all([
                        (0, utils_1.outputFile)(result.opts.to, result.css),
                        result.map && (0, utils_1.outputFile)(result.opts.to + '.map', result.map.toString()),
                    ]);
                })
                    .then(() => {
                    let end = process.hrtime.bigint();
                    console.error();
                    console.error('Done in', (end - start) / BigInt(1e6) + 'ms.');
                })
                    .then(() => { }, (err) => {
                    // TODO: If an initial build fails we can't easily pick up any PostCSS dependencies
                    // that were collected before the error occurred
                    // The result is not stored on the error so we have to store it externally
                    // and pull the messages off of it here somehow
                    // This results in a less than ideal DX because the watcher will not pick up
                    // changes to imported CSS if one of them caused an error during the initial build
                    // If you fix it and then save the main CSS file so there's no error
                    // The watcher will start watching the imported CSS files and will be
                    // resilient to future errors.
                    if (state.watcher) {
                        console.error(err);
                    }
                    else {
                        return Promise.reject(err);
                    }
                });
            });
        }
        /**
         * @param {{file: string, content(): Promise<string>, extension: string}[]} changes
         */
        function parseChanges(changes) {
            return __awaiter(this, void 0, void 0, function* () {
                return Promise.all(changes.map((change) => __awaiter(this, void 0, void 0, function* () {
                    return ({
                        content: yield change.content(),
                        extension: change.extension,
                    });
                })));
            });
        }
        if (input !== undefined && input !== '-') {
            state.contextDependencies.add(path_1.default.resolve(input));
        }
        return {
            build,
            watch: () => __awaiter(this, void 0, void 0, function* () {
                state.watcher = (0, watching_1.createWatcher)(args, {
                    state,
                    /**
                     * @param {{file: string, content(): Promise<string>, extension: string}[]} changes
                     */
                    rebuild(changes) {
                        return __awaiter(this, void 0, void 0, function* () {
                            let needsNewContext = changes.some((change) => {
                                var _a;
                                return (((_a = state.configBag) === null || _a === void 0 ? void 0 : _a.dependencies.has(change.file)) ||
                                    state.contextDependencies.has(change.file));
                            });
                            if (needsNewContext) {
                                state.context = null;
                            }
                            else {
                                for (let change of yield parseChanges(changes)) {
                                    state.changedContent.push(change);
                                }
                            }
                            return build();
                        });
                    },
                });
                yield build();
            }),
        };
    });
}
exports.createProcessor = createProcessor;
