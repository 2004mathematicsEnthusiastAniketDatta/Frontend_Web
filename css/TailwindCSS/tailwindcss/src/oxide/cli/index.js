#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const arg_1 = __importDefault(require("arg"));
const fs_1 = __importDefault(require("fs"));
const build_1 = require("./build");
const help_1 = require("./help");
const init_1 = require("./init");
// ---
function oneOf(...options) {
    return Object.assign((value = true) => {
        for (let option of options) {
            let parsed = option(value);
            if (parsed === value) {
                return parsed;
            }
        }
        throw new Error('...');
    }, { manualParsing: true });
}
let commands = {
    init: {
        run: init_1.init,
        args: {
            '--esm': { type: Boolean, description: `Initialize configuration file as ESM` },
            '--ts': { type: Boolean, description: `Initialize configuration file as TypeScript` },
            '--full': {
                type: Boolean,
                description: `Include the default values for all options in the generated configuration file`,
            },
            '-f': '--full',
        },
    },
    build: {
        run: build_1.build,
        args: {
            '--input': { type: String, description: 'Input file' },
            '--output': { type: String, description: 'Output file' },
            '--watch': {
                type: oneOf(String, Boolean),
                description: 'Watch for changes and rebuild as needed',
            },
            '--poll': {
                type: Boolean,
                description: 'Use polling instead of filesystem events when watching',
            },
            '--content': {
                type: String,
                description: 'Content paths to use for removing unused classes',
            },
            '--minify': { type: Boolean, description: 'Minify the output' },
            '--config': {
                type: String,
                description: 'Path to a custom config file',
            },
            '-c': '--config',
            '-i': '--input',
            '-o': '--output',
            '-m': '--minify',
            '-w': '--watch',
            '-p': '--poll',
        },
    },
};
let sharedFlags = {
    '--help': { type: Boolean, description: 'Display usage information' },
    '-h': '--help',
};
if (process.stdout.isTTY /* Detect redirecting output to a file */ &&
    (process.argv[2] === undefined ||
        process.argv.slice(2).every((flag) => sharedFlags[flag] !== undefined))) {
    (0, help_1.help)({
        usage: [
            'tailwindcss [--input input.css] [--output output.css] [--watch] [options...]',
            'tailwindcss init [--full] [options...]',
        ],
        commands: Object.keys(commands)
            .filter((command) => command !== 'build')
            .map((command) => `${command} [options]`),
        options: Object.assign(Object.assign({}, commands.build.args), sharedFlags),
    });
    process.exit(0);
}
let command = ((arg = '') => (arg.startsWith('-') ? undefined : arg))(process.argv[2]) || 'build';
if (commands[command] === undefined) {
    if (fs_1.default.existsSync(path_1.default.resolve(command))) {
        // TODO: Deprecate this in future versions
        // Check if non-existing command, might be a file.
        command = 'build';
    }
    else {
        (0, help_1.help)({
            message: `Invalid command: ${command}`,
            usage: ['tailwindcss <command> [options]'],
            commands: Object.keys(commands)
                .filter((command) => command !== 'build')
                .map((command) => `${command} [options]`),
            options: sharedFlags,
        });
        process.exit(1);
    }
}
// Execute command
let { args: flags, run } = commands[command];
let args = (() => {
    try {
        let result = (0, arg_1.default)(Object.fromEntries(Object.entries(Object.assign(Object.assign({}, flags), sharedFlags))
            .filter(([_key, value]) => { var _a; return !((_a = value === null || value === void 0 ? void 0 : value.type) === null || _a === void 0 ? void 0 : _a.manualParsing); })
            .map(([key, value]) => [key, typeof value === 'object' ? value.type : value])), { permissive: true });
        // Manual parsing of flags to allow for special flags like oneOf(Boolean, String)
        for (let i = result['_'].length - 1; i >= 0; --i) {
            let flag = result['_'][i];
            if (!flag.startsWith('-'))
                continue;
            let [flagName, flagValue] = flag.split('=');
            let handler = flags[flagName];
            // Resolve flagName & handler
            while (typeof handler === 'string') {
                flagName = handler;
                handler = flags[handler];
            }
            if (!handler)
                continue;
            let args = [];
            let offset = i + 1;
            // --flag value syntax was used so we need to pull `value` from `args`
            if (flagValue === undefined) {
                // Parse args for current flag
                while (result['_'][offset] && !result['_'][offset].startsWith('-')) {
                    args.push(result['_'][offset++]);
                }
                // Cleanup manually parsed flags + args
                result['_'].splice(i, 1 + args.length);
                // No args were provided, use default value defined in handler
                // One arg was provided, use that directly
                // Multiple args were provided so pass them all in an array
                flagValue = args.length === 0 ? undefined : args.length === 1 ? args[0] : args;
            }
            else {
                // Remove the whole flag from the args array
                result['_'].splice(i, 1);
            }
            // Set the resolved value in the `result` object
            result[flagName] = handler.type(flagValue, flagName);
        }
        // Ensure that the `command` is always the first argument in the `args`.
        // This is important so that we don't have to check if a default command
        // (build) was used or not from within each plugin.
        //
        // E.g.: tailwindcss input.css -> _: ['build', 'input.css']
        // E.g.: tailwindcss build input.css -> _: ['build', 'input.css']
        if (result['_'][0] !== command) {
            result['_'].unshift(command);
        }
        return result;
    }
    catch (err) {
        if (err.code === 'ARG_UNKNOWN_OPTION') {
            (0, help_1.help)({
                message: err.message,
                usage: ['tailwindcss <command> [options]'],
                options: sharedFlags,
            });
            process.exit(1);
        }
        throw err;
    }
})();
if (args['--help']) {
    (0, help_1.help)({
        options: Object.assign(Object.assign({}, flags), sharedFlags),
        usage: [`tailwindcss ${command} [options]`],
    });
    process.exit(0);
}
run(args);
