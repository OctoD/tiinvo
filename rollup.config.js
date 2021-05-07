import typescript from 'rollup-plugin-typescript2';

export default [
  // ES module build (replaces broken basic TypeScript compilation)
  // * ref: <https://github.com/microsoft/TypeScript/issues/18442> , <https://github.com/alshdavid/rxjs/blob/main/rollup.config.js#L10>
  // * ref: <https://github.com/microsoft/TypeScript/pull/35148>
  // * ref: <https://github.com/microsoft/TypeScript/issues/37582>
  {
    preserveModules: true,
    input: ['src/index.ts'],
    output: [{ dir: 'dist/esm', format: 'esm', entryFileNames: '[name].mjs' }],
    plugins: [typescript({ tsconfig: './tsconfig.build.json' })],
  },
  {
    preserveModules: true,
    input: ['src/index.ts'],
    output: [{ dir: 'dist/cjs', format: 'cjs', entryFileNames: '[name].js' }],
    plugins: [typescript({ tsconfig: './tsconfig.build.json' })],
  },
]