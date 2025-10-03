// noinspection ES6PreferShortImport

import { describe, expect, it } from "vitest";
import { combine, split } from "../packages/crypto-splitter/src";

describe("crypto-splitter", () => {
  it("returns empty array for empty string", () => {
    expect(split("")).toEqual([]);
  });

  it("returns empty string for empty chunks", () => {
    expect(combine([])).toBe("");
  });

  it("splits into default 4 segments and combines correctly", () => {
    const key = "iamxiaohe";

    const chunks = split(key);
    expect(chunks).toHaveLength(4);

    expect(combine(chunks)).toBe(key);
  });

  it("splits into custom number of segments and combines correctly", () => {
    const key = "iamxiaohe";

    const chunks = split(key, { segments: 6 });
    expect(chunks).toHaveLength(6);

    expect(combine(chunks)).toBe(key);
  });

  it("different splits produce different chunks but combine correctly", () => {
    const key = "iamxiaohe";

    const chunks1 = split(key);
    const chunks2 = split(key);

    expect(chunks1).not.toEqual(chunks2);

    expect(combine(chunks1)).toBe(key);
    expect(combine(chunks2)).toBe(key);
  });
});