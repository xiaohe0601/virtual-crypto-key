import { createEsbuildPlugin } from "unplugin";
import { unpluginFactory } from "./core";

export default createEsbuildPlugin(unpluginFactory);