export interface SplitOptions {
  segments?: number;
}

export function split(key: string, options: SplitOptions = {}): string[] {
  const {
    segments = 4
  } = options;

  if (key.length <= 0) {
    return [];
  }

  const chunks: string[] = [];

  for (let i = 0; i < segments - 1; i += 1) {
    chunks.push(
      [...key]
        .map((char) => {
          return String.fromCharCode(
            char.charCodeAt(0) ^ Math.floor(Math.random() * 256)
          );
        })
        .join("")
    );
  }

  chunks.push(
    [...key]
      .map((char, index) => {
        return String.fromCharCode(
          char.charCodeAt(0) ^ chunks.reduce((acc, it) => {
            return acc ^ it.charCodeAt(index);
          }, 0)
        );
      })
      .join("")
  );

  return chunks;
}