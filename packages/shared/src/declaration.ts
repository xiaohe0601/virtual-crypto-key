import { ensureFile, outputFile } from "fs-extra/esm";

interface DeclarationOptions {
  moduleId: string;
}

interface WriteDeclarationOptions extends DeclarationOptions {
  dts: true | string;
}

function getDeclarationPath(dts: true | string): string {
  if (dts === true) {
    return "crypto-key.d.ts";
  }

  return dts;
}

function getDeclarationCode(keys: Record<string, string>, options: DeclarationOptions): string {
  return `declare module "${options.moduleId}" {
${
  Object.keys(keys)
    .map((it) => {
      return `  export const ${it}: string;`;
    })
    .join("\n")
}
}`;
}

export async function writeDeclaration(
  keys: Record<string, string>,
  options: WriteDeclarationOptions
): Promise<void> {
  const path = getDeclarationPath(options.dts);

  await ensureFile(path);

  await outputFile(path, getDeclarationCode(keys, {
    moduleId: options.moduleId
  }));
}