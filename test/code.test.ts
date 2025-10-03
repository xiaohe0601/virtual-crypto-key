import { unlink, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getCode } from "../packages/shared/src";

describe("getCode", () => {
  it("should generate code that exports correct key values", async () => {
    const keys = {
      key1: "iamxiaohe",
      key2: "ilovexiaohe"
    };

    const temp = join(__dirname, "virtual-code.js");

    await writeFile(temp, getCode(keys));

    const { key1, key2 } = await import(temp);

    expect(key1).toBe(keys.key1);
    expect(key2).toBe(keys.key2);

    await unlink(temp);
  });
});