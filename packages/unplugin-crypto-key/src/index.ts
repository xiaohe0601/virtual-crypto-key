import { createUnplugin } from "unplugin";
import { unpluginFactory } from "./core";

export { unpluginFactory } from "./core";

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory);

export default unplugin;