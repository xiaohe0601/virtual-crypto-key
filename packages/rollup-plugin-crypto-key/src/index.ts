import type { Plugin } from "rollup";
import { getCode } from "./code";
import { writeDeclaration } from "./declaration";

export interface Options {
  /**
   * Generate TypeScript declaration for crypto keys
   *
   * Accept boolean or a path related to project root
   */
  dts?: boolean | string;
  /**
   * Crypto keys
   */
  keys?: Record<string, string>;
}

const VIRTUAL_MODULE_ID = "virtual:crypto-key";
const RESOLVED_VIRTUAL_MODULE_ID = `\0${VIRTUAL_MODULE_ID}`;

export default function cryptoKey(options: Options = {}): Plugin {
  const {
    keys = {},
    dts = false
  } = options;

  if (dts) {
    writeDeclaration(keys, {
      moduleId: VIRTUAL_MODULE_ID,
      dts
    });
  }

  return {
    name: "crypto-key",
    resolveId(source) {
      if (source !== VIRTUAL_MODULE_ID) {
        return null;
      }

      return RESOLVED_VIRTUAL_MODULE_ID;
    },
    load(id) {
      if (id !== RESOLVED_VIRTUAL_MODULE_ID) {
        return null;
      }

      return getCode(keys);
    }
  };
}