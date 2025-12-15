import { defineConfig } from "tsdown";

export default defineConfig({
  entry: "./src/*.ts",
  platform: "node",
  format: [
    "esm"
  ],
  external: [
    "crypto-splitter"
  ],
  dts: {
    build: true
  }
});