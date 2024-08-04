import glob from "tiny-glob";
import { defineConfig } from "tsup";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig(async (options) => ({
  entry: await glob("./src/**/!(*.d|*.spec).tsx"),
  splitting: true,
  target: "es5",
  format: "esm",
  // dts: true,
  treeshake: true,
  bundle: true,
  outDir: "./dist",
  minify: !options.watch,
  plugins: [tailwind(), autoprefixer()],
}));
