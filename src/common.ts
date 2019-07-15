export function ensureFunction<T extends (...args: any[]) => any>(
  message: string,
  fn: T
): fn is T {
  if (typeof fn !== "function") {
    throw new Error(message);
  }

  return true;
}
