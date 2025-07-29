export function combine(chunks: string[]): string {
  if (chunks.length <= 0) {
    return "";
  }

  return [...chunks[0]]
    .map((_, index) => {
      return String.fromCharCode(
        chunks.reduce((acc, it) => {
          return acc ^ it.charCodeAt(index);
        }, 0)
      );
    })
    .join("");
}