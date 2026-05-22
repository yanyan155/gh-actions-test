// use tools such as rollup.js or @vercel/ncc
// to combine your code and dependencies into one file for distribution.

// rollup --config rollup.config.js

import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const config = {
  input: "src/hello.js",
  output: {
    esModule: true,
    file: "build/index.js",
    format: "es",
    sourcemap: true,
  },
  plugins: [commonjs(), nodeResolve({ preferBuiltins: true })],
};

export default config;
