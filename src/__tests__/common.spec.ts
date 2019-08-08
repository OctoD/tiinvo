import {
  coerceToNull,
  ensureFunction,
  ensureIsObject,
  ensureHasKey
} from "../common";

describe("common utilities", () => {
  test(coerceToNull.name, () => {
    expect(coerceToNull(0)).toBe(0);
    expect(coerceToNull(null)).toBe(null);
    expect(coerceToNull(NaN)).toBe(null);
    expect(coerceToNull(undefined)).toBe(null);
    expect(coerceToNull("")).toBe("");
  });

  test(ensureFunction.name, () => {
    expect(() => ensureFunction("", jest.fn)).not.toThrowError();
    expect(() => ensureFunction("", "" as any)).toThrowError();
  });

  test(ensureIsObject.name, () => {
    expect(() => ensureIsObject("", 123)).toThrowError();
    expect(() => ensureIsObject("", null)).toThrowError();
    expect(() => ensureIsObject("", {})).not.toThrowError();
  });

  test(ensureHasKey.name, () => {
    expect(() => ensureHasKey("", {} as any, "foo")).toThrowError();
    expect(() => ensureHasKey("", { foo: 1 }, "foo")).not.toThrowError();
  });
});
