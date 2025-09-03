import { defineConfig } from "tsdown";

export default defineConfig({
  entry: "./src/*.ts",
  platform: "neutral",
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