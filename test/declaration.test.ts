import { ensureFile, outputFile } from "fs-extra/esm";
import { describe, expect, it, vi } from "vitest";
import { writeDeclaration } from "../packages/shared/src";

vi.mock("fs-extra/esm", () => ({
  ensureFile: vi.fn(),
  outputFile: vi.fn()
}));

describe("writeDeclaration", () => {
  it("should create a declaration file with default name when dts is true", async () => {
    await writeDeclaration(
      {
        key1: "iamxiaohe",
        key2: "ilovexiaohe"
      },
      {
        moduleId: "virtual:crypto-key",
        dts: true
      }
    );

    expect(ensureFile).toHaveBeenCalledWith("crypto-key.d.ts");
    expect(outputFile).toHaveBeenCalledWith(
      "crypto-key.d.ts",
      `declare module "virtual:crypto-key" {
  export const key1: string;
  export const key2: string;
}`
    );
  });

  it("should create a declaration file with custom path when dts is a string", async () => {
    await writeDeclaration(
      {
        key1: "iamxiaohe"
      },
      {
        moduleId: "virtual:crypto-key",
        dts: "types/crypto-key.d.ts"
      }
    );

    expect(ensureFile).toHaveBeenCalledWith("types/crypto-key.d.ts");
    expect(outputFile).toHaveBeenCalledWith(
      "types/crypto-key.d.ts",
      `declare module "virtual:crypto-key" {
  export const key1: string;
}`
    );
  });
});