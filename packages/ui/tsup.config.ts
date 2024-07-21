import glob from 'tiny-glob'
import { defineConfig } from 'tsup'

export default defineConfig([
    {
      entry: await glob('./src/**/!(*.d|*.spec).tsx'),
      splitting: true,
      target: 'es5',
      format: 'esm',
      // dts: true,
      treeshake: true,
      bundle: true,
      outDir: "./dist"
    },
  ]);