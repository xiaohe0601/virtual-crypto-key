import process from "node:process";
import Vue from "@vitejs/plugin-vue";
import CryptoKey from "rollup-plugin-crypto-key";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      Vue(),
      CryptoKey({
        dts: "./types/crypto-key.d.ts",
        keys: {
          DEMO_KEY: env.VITE_DEMO_KEY
        }
      })
    ]
  };
});