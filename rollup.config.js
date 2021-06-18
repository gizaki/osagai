import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'

export function component({ ...external }) {
  return [
    {
      input: './src/index.ts',
      output: [
        { format: 'cjs', dir: './dist/cjs' },
        { format: 'esm', dir: './dist/esm' },
      ],
      plugins: [
        resolve({
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        }),
        postcss({
          minimize: true,
          plugins: [autoprefixer()],
        }),
        typescript(),
        commonjs(),
        babel({
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          envName: 'production',
          exclude: 'node_modules/**',
          babelHelpers: 'bundled',
        }),
        terser(),
      ],
      ...external,
    },
  ]
}
