import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import copyWatch from 'rollup-plugin-copy-watch';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import parseArgs from 'minimist';
import pkg from './package.json';

// parse command line arguments
const argv = parseArgs(process.argv.slice(2)); // start with 'node rollup' so drop them
// for the 'config-xxx' syntax, see https://github.com/rollup/rollup/issues/1662#issuecomment-395382741
const serverPort = argv['config-server-port'] || 10001;
const watchMode = process.env.watchMode;

let input = 'src/index.ts';
let outputFile = pkg.module;

const plugins = [
  typescript({
    typescript: require('typescript'),
    lib: ['ESNext', 'dom'],
    target: 'ESNext',
    include: !watchMode ? ['src/**/*'] : ['src/**/*', 'dev/**/*'],
  }),
  resolve(),
  commonjs(),
];

if (watchMode) {
  input = 'dev/index.ts';
  outputFile = 'build/dev/bingo-generator.esm.js';

  const copyTargets = [];
  copyTargets.push({ src: 'dev/*.html', dest: 'build/dev' });
  copyTargets.push({ src: 'dev/static', dest: 'build/dev' });
  plugins.push(
    copyWatch({
      watch: ['dev/static/**', 'dev/*.html'],
      targets: copyTargets,
    }),
  );

  plugins.push(serve({ contentBase: 'build/dev', port: serverPort }));
  plugins.push(livereload({ watch: 'build/dev', verbose: true }));
}

export default [
  {
    input,
    output: [
      {
        file: outputFile,
        format: 'es',
        sourcemap: !watchMode,
      },
    ],
    plugins: plugins,
  },
];
