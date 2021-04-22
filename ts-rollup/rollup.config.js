import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import copyWatch from 'rollup-plugin-copy-watch';

import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';

const watchMode = process.env.watchMode;

const plugins = [
  typescript({
    typescript: require('typescript'),
  }),
  resolve(),
  commonjs(),
];

if (watchMode) {
  const copyTargets = [];
  copyTargets.push({ src: 'src/*.html', dest: 'dist/' });
  copyTargets.push({ src: 'src/static', dest: 'dist' });
  plugins.push(copyWatch({
    watch: ['src/static/**', 'src/*.html'],
    targets: copyTargets,
  }));

  plugins.push(serve({ contentBase: 'dist', port: 10001 }));
  plugins.push(livereload({ watch: 'dist', verbose: true }));
}

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: plugins,
  },
];
