import { defineConfig } from "tsdown";

export default defineConfig({
  entry: "./src/index.ts",
  platform: "node",
  format: [
    "esm",
    "cjs"
  ],
  external: [
    "crypto-splitter"
  ],
  dts: {
    oxc: true
  }
});