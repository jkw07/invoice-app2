export function safeId(id: unknown): number {
  const num = Number(id);
  if (isNaN(num) || num <= 0) {
    throw new Error(`Invalid ID: ${id}`);
  }
  return num;
}
