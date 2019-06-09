import typescript from 'rollup-plugin-typescript';
import sass from 'rollup-plugin-sass';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: './src/index.ts',
  output: {
    file: './dist/bundle.js',
    format: 'cjs',
  },
  plugins: [
    typescript(),
    sass(),
    uglify()
  ]
};
