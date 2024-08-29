import esbuild from 'rollup-plugin-esbuild'
import dts from 'rollup-plugin-dts'
import mixeport from '@mnrendra/rollup-plugin-mixexport'

export default [
  {
    external: (id) => !/^[./]/.test(id),
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'dist/index.mjs',
        format: 'es',
        sourcemap: true
      }
    ],
    plugins: [
      esbuild({ minify: false }),
      mixeport()
    ],
    onwarn ({ code }) {
      if (code === 'MIXED_EXPORTS') return false
    }
  },
  {
    external: (id) => !/^[./]/.test(id),
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
      sourcemap: true
    },
    plugins: dts()
  }
]
