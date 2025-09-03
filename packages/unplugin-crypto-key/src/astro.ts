import unplugin from "./core";
import type { Options } from "./types";

export default (options: Options): any => ({
  name: "unplugin-crypto-key",
  hooks: {
    "astro:config:setup": async (astro: any) => {
      astro.config.vite.plugins ||= [];
      astro.config.vite.plugins.push(unplugin.vite(options));
    }
  }
});