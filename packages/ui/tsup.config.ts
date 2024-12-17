import fg from "fast-glob";
import { defineConfig } from "tsup";

export default defineConfig(async (options) => ({
  clean: true,
  entry: await fg("./src/**/!(*.d|*.spec).tsx"),
  splitting: true,
  target: "es5",
  format: "esm",
  treeshake: true,
  bundle: true,
  outDir: "./dist",
  minify: !options.watch,
}));
