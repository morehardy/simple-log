import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import { eslint } from "rollup-plugin-eslint";
// var eslintrc = require('./eslintrc')

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/sLog.min.js',
    format: 'cjs'
  },
  sourcemap: true,
  plugins: [
    resolve(),
    eslint({
      include: ['src/*.js'],
      exclude: 'node_modules/**'
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ],
  watch: {
    exclude: 'node_modules/**'
  }
};