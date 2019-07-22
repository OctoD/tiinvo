/**
 * Forces NaN to be considered as null
 * @param {unknown} value
 * @returns
 */
export function coerceToNull(value: unknown) {
  if (value === undefined) {
    return null;
  }

  if (typeof value !== "number") {
    return value;
  }

  return isNaN(value) ? null : value;
}

export function ensureFunction<T extends (...args: any[]) => any>(
  message: string,
  fn: T
): fn is T {
  if (typeof fn !== "function") {
    throw new Error(message);
  }

  return true;
}
