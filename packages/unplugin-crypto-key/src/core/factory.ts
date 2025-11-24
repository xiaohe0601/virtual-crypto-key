import type { UnpluginFactory } from "unplugin";
import { getCode, writeDeclaration } from "../../../shared/src";
import type { Options } from "../types";

const VIRTUAL_MODULE_ID = "virtual:crypto-key";
const RESOLVED_VIRTUAL_MODULE_ID = `\0${VIRTUAL_MODULE_ID}`;

export const unpluginFactory: UnpluginFactory<Options | undefined> = (options = {}) => {
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
    name: "unplugin-crypto-key",
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
};