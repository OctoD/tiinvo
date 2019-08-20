export type ArgsOf<Fn extends (...args: any[]) => any> = Fn extends (
  ...args: infer U
) => any
  ? U
  : any[];

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

export function ensureHasKey<T extends {}>(
  message: string,
  object: T,
  key: keyof T
): boolean | never {
  if (key in object) {
    return true;
  }

  throw new ReferenceError(message);
}

export function ensureIsObject(
  message: string,
  maybeObject: unknown
): maybeObject is object {
  if (typeof maybeObject === "object" && maybeObject !== null) {
    return true;
  }

  throw new TypeError(message);
}
