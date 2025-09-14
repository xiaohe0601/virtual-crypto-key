import { split } from "crypto-splitter";

export function getCode(keys: Record<string, string>): string {
  const values = Object.entries(keys)
    .map(([key, value]) => {
      return {
        key,
        chunks: split(value)
      };
    });

  return `import { combine } from "crypto-splitter";

${
  values
    .map((item, index) => {
      return `const $${index + 1} = ${JSON.stringify(item.chunks)};`;
    })
    .join("\n")
}

${
  values
    .map((item, index) => {
      return `export const ${item.key} = combine($${index + 1});`;
    })
    .join("\n")
}`;
}