import merge from "deepmerge";
import { createBasicConfig } from "@open-wc/building-rollup";
import scss from "rollup-plugin-scss";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "postcss";

const baseConfig = createBasicConfig();

export default merge(baseConfig, {
  input: "./lib/cjs/src/index.js",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
    },
    {
      file: "dist/index.es.js",
      format: "es",
      exports: "named",
    },
  ],
  plugins: [
    postcss({
      plugins: [],
    }),
    scss(),
    resolve(),
  ],
});
