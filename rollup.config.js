import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import image from '@rollup/plugin-image'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import url from '@rollup/plugin-url'
import svgr from '@svgr/rollup'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import pkg from './package.json'

const extensions = ['.js', '.jsx']

export default {
  input: 'src/index.js',
  external: 'styled-components',
  output: {
    file: pkg.main,
    format: 'esm',
    name: 'janus-ds',
    inlineDynamicImports: true,
  },
  plugins: [
    resolve({
      mainFields: ['module', 'main', 'jsnext:main', 'browser'],
      extensions,
      preferBuiltins: true,
    }),
    external({
      includeDependencies: true,
    }),
    image(),
    url(),
    svgr(),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      extensions,
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        'transform-react-remove-prop-types',
      ],
      exclude: /^(.+\/)?node_modules\/.+$/,
    }),
    postcss({
      minimize: true,
      modules: true,
      use: {
        sass: null,
        stylus: null,
        less: { javascriptEnabled: true },
      },
      extract: true,
    }),
    terser(),
    json(),
  ],
}
