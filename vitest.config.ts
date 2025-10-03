import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "v8",
      include: [
        "packages/*/src/**/*.ts"
      ],
      exclude: [
        "**/unplugin-crypto-key/**",
        "**/index.ts"
      ]
    }
  }
});